(function () {
    const graphEl = document.getElementById("xana-graph");
    const panelEl = document.getElementById("xana-panel");

    if (!graphEl || !panelEl) return;

    // Pending stagedReveal timer IDs — cleared on every new reveal so
    // in-flight timers from a previous navigation never fire against the new graph.
    let _revealTimers = [];

    // Monotonic counter bumped on every renderVisibleGraph call.
    // travelToNode captures its value at call time and bails out if it changes,
    // preventing stale zoom-complete callbacks from firing against a new graph.
    let _navGen = 0;

    // Tour timers — managed outside state so they survive renderVisibleGraph rebuilds.
    let _tourTimer = null;
    let _tourScrollInterval = null;
    let TOUR_DWELL_MS = 9000;     // ms between node hops — updated by speed input

    const STORAGE_KEYS = {
        panelWidth: "xananode.panelWidth",
        graphZoom: "xananode.graphZoom",
        graphPan: "xananode.graphPan",
        searchQuery: "xananode.searchQuery",
        enabledTypes: "xananode.enabledTypes",
        enabledMediaTypes: "xananode.enabledMediaTypes",
        depth: "xananode.depth",
        connectionsOpen: "xananode.connectionsOpen",
        tourSpeed: "xananode.tourSpeed",
        colorTheme: "xananode.colorTheme",
        uiDensity: "xananode.uiDensity",
        graphAtmosphere: "xananode.graphAtmosphere",
        ttsNarrator: "xananode.ttsNarrator",
        ttsVoice: "xananode.ttsVoice",
        ttsRate: "xananode.ttsRate",
        ttsPitch: "xananode.ttsPitch",
        ttsDetail: "xananode.ttsDetail"
    };

    const DISPLAY_DEFAULTS = Object.freeze({
        colorTheme: "dark",
        uiDensity: "comfortable",
        graphAtmosphere: "alive",
        ttsNarrator: false,
        ttsVoice: "",
        ttsRate: 0.95,
        ttsPitch: 1,
        ttsDetail: "full"
    });

    const SEARCH_PROMPTS = [
        "explore the knowledge substrate",
        "trace an idea across sources",
        "follow a claim to evidence",
        "compare connected nodes",
        "search for provenance",
        "map a trail through context"
    ];

    const DEFAULT_TYPES = [
        "essay",
        "concept",
        "claim",
        "source",
        "person",
        "observation",
        "trail",
        "media",
        "project",
        "artifact",
        "organization",
        "event",
        "place",
        "technology",
        "publication",
        "community",
        "relationship",
        "revision",
        "schema"
    ];

    // Fallback valid types — overridden at runtime by /schemas/xananode-node-types.json
    // Note: "artifact" is intentionally absent — existing artifact nodes will be flagged.
    let VALID_NODE_TYPES = new Set([
        "person", "concept", "claim", "source", "essay", "observation",
        "media", "event", "place", "organization", "project", "technology",
        "publication", "community", "relationship", "revision", "trail", "schema"
    ]);

    // Fallback valid relationship types — overridden at runtime by /schemas/xananode-relationship-types.json
    let VALID_RELATIONSHIP_TYPES = new Set([
        "defines", "defined_by", "has_claim", "claim_of",
        "supports", "supported_by", "contradicts", "contradicted_by",
        "demonstrates", "demonstrated_by", "documents", "documented_by",
        "evidence_for", "has_evidence", "derived_from", "originates",
        "derives", "derived_from", "derived_into", "originates",
        "extends", "extended_by", "created", "created_by",
        "authored", "authored_by", "coined", "coined_by",
        "implements", "implemented_by", "preserves", "preserved_by",
        "enables", "enabled_by",
        "cites", "cited_by", "quotes", "quoted_by",
        "mentions", "mentioned_by", "participated_in", "had_participant",
        "spoke_at", "featured_speaker", "features", "featured_in",
        "influenced", "influenced_by", "popularized", "popularized_by",
        "anticipated", "anticipated_by",
        "contrasts_with", "alternative_to", "parallel_to",
        "explains", "explained_by", "context_for", "has_context",
        "motivated", "motivated_by",
        "arrives_at", "arrived_from",
        "part_of", "contains", "depends_on", "dependency_of", "required_by",
        "requires", "required_for",
        "depicts", "depicted_by", "represented_by", "represents",
        "used_as_primary_media_for", "has_primary_media",
        "occurred_at", "site_of",
        "preceded", "followed", "contemporary_of",
        "friend_of", "collaborated_with", "interviewed", "interviewed_by",
        "approved", "approved_by", "disputes", "disputed_by",
        "supersedes", "superseded_by", "related_to"
    ]);

    const RELATIONSHIP_TYPE_ALIASES = Object.freeze({
        situates: "context_for",
        contextualizes: "context_for",
        interprets: "explains",
        fundamental_to: "part_of",
        core_to: "part_of",
        instance_of: "included_in",
        used_for: "enables",
        produced_by: "created_by",
        associated_with: "related_to",
        featured: "features",
        contributed_by: "influenced_by",
        contributes_to: "influenced",
        predecessor_to: "derived_from",
        follows: "followed",
        followed_by: "preceded",
        traces: "derived_from",
        evolved_into: "derived_into",
        named_after: "derived_from",
        cofounded: "created_by",
        founded: "created",
        hosted_by: "presented_by",
        portrayed: "depicted_by",
        influences: "influenced",
        contributed_to: "participated_in",
        proposes: "proposed",
        introduces: "introduced",
        used_in: "used_by",
        used_objective: "uses",
        foundation_for: "enables",
        subclass_of: "extends",
        addresses: "related_to",
        demonstrated_in: "demonstrated_by",
        realizes: "implements",
        visualizes: "represents",
        generalizes: "extends",
        improves: "refines",
        formalizes: "defines",
        covers: "discusses",
        referenced_in: "mentioned_by",
        mentioned_in: "mentioned_by",
        starts_at: "starts_with",
        traverses: "includes",
        converges_at: "arrives_at",
        ends_at: "arrives_at"
    });

    const DEFAULT_MEDIA_TYPES = [
        "image",
        "svg",
        "video",
        "audio",
        "document",
        "diagram",
        "screenshot"
    ];

    const TYPE_SECTION_PATHS = {
        artifact: "artifacts",
        claim: "claims",
        concept: "concepts",
        essay: "essays",
        event: "events",
        media: "media",
        observation: "observations",
        organization: "organizations",
        person: "people",
        project: "projects",
        schema: "schemas",
        source: "sources",
        technology: "technologies",
        trail: "trails"
    };

    const TYPE_PALETTE = {
        essay: { bg: "#f59ec3", fg: "#1f1020", outline: "#ffe3f0" },
        concept: { bg: "#91f2a6", fg: "#062010", outline: "#dcffe4" },
        source: { bg: "#ff9f7a", fg: "#2a1208", outline: "#ffe4d9" },
        person: { bg: "#8bd3ff", fg: "#071827", outline: "#d8f1ff" },
        observation: { bg: "#ef476f", fg: "#2a0610", outline: "#ffd7e0" },
        trail: { bg: "#fb8500", fg: "#241100", outline: "#ffe3be" },
        project: { bg: "#ffd166", fg: "#1d1500", outline: "#fff0c2" },
        artifact: { bg: "#a7f3d0", fg: "#042016", outline: "#dcfff0" },
        organization: { bg: "#f0abfc", fg: "#1e1028", outline: "#fde8ff" },
        media: { bg: "#55d6be", fg: "#04201a", outline: "#dcfff8" },
        claim: { bg: "#ff6b6b", fg: "#1a0000", outline: "#ffe0e0" },
        event: { bg: "#f59e0b", fg: "#1a0a00", outline: "#fff3e0" },
        place: { bg: "#84cc16", fg: "#0a1a00", outline: "#e8ffe0" },
        technology: { bg: "#06b6d4", fg: "#04131a", outline: "#d9fbff" },
        publication: { bg: "#a78bfa", fg: "#140f22", outline: "#ede3ff" },
        community: { bg: "#fb923c", fg: "#201006", outline: "#ffe7d6" },
        relationship: { bg: "#ec4899", fg: "#240812", outline: "#ffd8ea" },
        revision: { bg: "#94a3b8", fg: "#0f172a", outline: "#dde5f2" },
        schema: { bg: "#e2e8f0", fg: "#111827", outline: "#ffffff" }
    };

    loadCytoscape()
        .then(() => Promise.all([
            fetch("/index.json").then((res) => {
                if (!res.ok) throw new Error(`Could not load /index.json (${res.status}).`);
                return res.json();
            }),
            fetch("/schemas/xananode-node-types.json").then((r) => r.json()).catch(() => null),
            fetch("/schemas/xananode-relationship-types.json").then((r) => r.json()).catch(() => null),
            fetch("/xananode-fragments.json").then((r) => r.json()).catch(() => null)
        ]))
        .then(([data, nodeSchema, relSchema, fragmentsData]) => {
            if (nodeSchema?.node_types) {
                VALID_NODE_TYPES = new Set(nodeSchema.node_types.map((t) => t.type));
            }
            if (relSchema?.relationship_types) {
                VALID_RELATIONSHIP_TYPES = new Set(relSchema.relationship_types.map((t) => t.type));
            }
            init(data, nodeSchema, fragmentsData);
        })
        .catch((err) => {
            graphEl.innerHTML = `<p class="xana-error">${escapeHtml(err.message)}</p>`;
        });

    function loadCytoscape() {
        if (window.cytoscape) return Promise.resolve();

        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "https://unpkg.com/cytoscape@3.29.2/dist/cytoscape.min.js";
            script.onload = resolve;
            script.onerror = () => reject(new Error("Could not load Cytoscape."));
            document.head.appendChild(script);
        });
    }

    function getTypeSectionHref(type) {
        const section = TYPE_SECTION_PATHS[(type || "").toLowerCase()];
        return section ? `/${section}/` : "";
    }

    function renderTypeBadge(type, sizeClass = "") {
        const safeType = escapeHtml(type || "");
        const label = escapeHtml(type || "node");
        const href = getTypeSectionHref(type);
        const classes = ["xana-type-badge", sizeClass].filter(Boolean).join(" ");

        if (!href) {
            return `<span class="${classes}" data-type="${safeType}">${label}</span>`;
        }

        return `<a class="${classes} xana-type-badge-link" data-type="${safeType}" href="${href}" title="Browse ${label} nodes">${label}</a>`;
    }

    function renderYouTubeEmbed(url, linkText = "Watch on YouTube") {
        if (!url) return "";

        const match = String(url).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&/]+)/i);
        if (!match || !match[1]) {
            return `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(linkText)}</a>`;
        }

        const videoId = match[1];
        const safeUrl = escapeHtml(url);
        const safeText = escapeHtml(linkText);

        return `
            <div class="xana-youtube-embed">
                <div class="xana-youtube-embed__frame">
                    <iframe
                        src="https://www.youtube-nocookie.com/embed/${videoId}"
                        title="YouTube video player"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </div>
                <a class="xana-youtube-embed__link" href="${safeUrl}" target="_blank" rel="noopener noreferrer">${safeText}</a>
            </div>
        `;
    }

    function init(data, nodeTypesData, fragmentsData) {
        const allNodes = Array.isArray(data.nodes) ? data.nodes : [];
        const nodeTypeColors = buildTypeColorMap(nodeTypesData);
        const nodeIds = new Set(allNodes.map((node) => node.id));

        // allEdgesRaw: every edge as declared in frontmatter — used by audit to detect
        // dangling references. allEdges: only edges where both endpoints exist — used
        // for graph rendering and layout.
        const allEdgesRaw = Array.isArray(data.edges) ? data.edges : [];
        const allEdges = allEdgesRaw.map(normalizeRelationshipEdge).filter((edge) => {
            return nodeIds.has(edge.source) && nodeIds.has(edge.target);
        });

        hydrateMedia(allNodes);

        window.__xanaAllNodes = allNodes;
        window.__xanaAllEdges = allEdges;

        // Resolve the requested node from the URL. The current public route is
        // type-aware (for example /concept/knowledge-substrate/), with support
        // for old /node/<id> links as a compatibility alias.
        const rawRequested = nodeIdFromUrl(allNodes);
        // Try the raw ID, then strip a leading "node/" segment in case of a doubled prefix.
        const requestedNode = rawRequested && (
            nodeIds.has(rawRequested)
                ? rawRequested
                : nodeIds.has(rawRequested.replace(/^node\//, ""))
                    ? rawRequested.replace(/^node\//, "")
                    : null
        );

        // Use the requested node if resolved; fall back to start-here only when
        // there is genuinely no URL node (e.g. landing on the bare home page).
        let focusId = requestedNode
            ? requestedNode
            : rawRequested
                ? (nodeIds.has(rawRequested) ? rawRequested : "start-here")
                : "start-here";

        if (!nodeIds.has(focusId)) {
            focusId = allNodes[0]?.id || "";
        }

        const savedTypes = loadSetting(STORAGE_KEYS.enabledTypes, null);
        const savedMediaTypes = loadSetting(STORAGE_KEYS.enabledMediaTypes, null);
        const savedDepth = loadSetting(STORAGE_KEYS.depth, 2);
        const displaySettings = loadDisplaySettings();
        applyDisplaySettings(displaySettings);

        const state = {
            focusId,
            previousFocusId: null,
            depth: Number(savedDepth) || 2,
            enabledTypes: savedTypes ? new Set(savedTypes) : new Set(DEFAULT_TYPES),
            enabledMediaTypes: savedMediaTypes ? new Set(savedMediaTypes) : new Set(DEFAULT_MEDIA_TYPES),
            searchQuery: loadSetting(STORAGE_KEYS.searchQuery, ""),
            searchResults: [],
            auditResults: [],
            auditMode: false,
            isTraveling: false,
            pathExplorer: {
                active: false,
                sourceQuery: focusId || "",
                targetQuery: "",
                allowReverse: true,
                maxDepth: 6,
                maxPaths: 100,
                results: [],
                summary: ""
            },
            tourActive: false,
            tourIndex: 0,
            tourVisited: new Set(),
            tourRecent: [],
            activeTrail: null,
            cy: null,
            allNodes,
            nodeIds,
            allEdges,
            allEdgesRaw,
            fragmentsData: fragmentsData || {},
            pendingFragmentHighlight: null,
            displaySettings
        };

        if (rawRequested && !requestedNode) {
            const protocolTarget = resolveProtocolAddress(rawRequested, state);
            if (protocolTarget) {
                state.focusId = protocolTarget.nodeId;
                state.pendingFragmentHighlight = protocolTarget.fragmentId
                    ? {
                        nodeId: protocolTarget.nodeId,
                        fragmentId: protocolTarget.fragmentId,
                        fragment: protocolTarget.fragment
                    }
                    : null;
                state.pathExplorer.sourceQuery = protocolTarget.nodeId;
            }
        }

        if (state.focusId) {
            updateUrl(state.focusId, true);
        }

        renderChrome(state);

        const stageEl = document.getElementById("xana-stage");

        const cy = cytoscape({
            container: stageEl,
            elements: [],
            minZoom: 0.15,
            maxZoom: 3,
            style: getCyStyle(nodeTypeColors),
            layout: { name: "preset" }
        });

        state.cy = cy;

        cy.on("tap", "node", function (evt) {
            const nodeId = evt.target.id();
            if (!state.nodeIds.has(nodeId)) return;
            if (nodeId === state.focusId) {
                notifyStudioNodeSelection(nodeId);
                return;
            }
            travelToNode(nodeId, state, true);
        });

        cy.on("zoom pan", debounce(() => {
            saveSetting(STORAGE_KEYS.graphZoom, cy.zoom());
            saveSetting(STORAGE_KEYS.graphPan, cy.pan());
        }, 250));

        bindControls(state);
        startSearchVerbRotation();
        makeResizable(state);
        restorePanelWidth(state);

        window.addEventListener("resize", debounce(() => {
            if (!state.cy) return;

            state.cy.resize();
            state.cy.fit(undefined, getFitPadding());
        }, 180));

        window.addEventListener("popstate", () => {
            const nodeFromUrl = nodeIdFromUrl(allNodes);
            const protocolTarget = nodeFromUrl ? resolveProtocolAddress(nodeFromUrl, state) : null;

            if (protocolTarget || (nodeFromUrl && allNodes.some((node) => node.id === nodeFromUrl))) {
                state.previousFocusId = state.focusId;
                state.focusId = protocolTarget?.nodeId || nodeFromUrl;
                state.pendingFragmentHighlight = protocolTarget?.fragmentId
                    ? {
                        nodeId: protocolTarget.nodeId,
                        fragmentId: protocolTarget.fragmentId,
                        fragment: protocolTarget.fragment
                    }
                    : null;
                renderVisibleGraph(state, {
                    updateUrl: false,
                    stagedReveal: true,
                    preserveViewport: false
                });
            }
        });

        if (state.searchQuery.trim()) {
            runSearch(state.searchQuery, state);
        }

        renderVisibleGraph(state, {
            updateUrl: false,
            preserveViewport: true
        });
    }

    function renderChrome(state) {
        const d = state.depth;
        const t = state.enabledTypes;
        const m = state.enabledMediaTypes;

        const chk = (type) => t.has(type) ? "checked" : "";
        const mchk = (type) => m.has(type) ? "checked" : "";
        const dact = (n) => d === n ? "class=\"active\"" : "";

        // Inject navbar into the .xana-app parent (runs once; guard against duplicates)
        const appEl = graphEl.closest(".xana-app") || graphEl.parentElement;
        if (appEl && !appEl.querySelector(".xana-navbar")) {
            const nav = document.createElement("nav");
            nav.className = "xana-navbar";
            nav.setAttribute("aria-label", "XanaNode navigation");
            nav.innerHTML = `
                <button class="xana-brand-home" data-home-btn aria-label="Go to home node">
                    <img src="/xananode-icon.svg" alt="" class="xana-brand-icon" aria-hidden="true">
                    <div class="xana-brand-text">
                        <span class="xana-brand-name">XanaNode</span>
                        <span class="xana-brand-tagline">Relationships preserve knowledge</span>
                    </div>
                </button>
            `;
            appEl.insertBefore(nav, appEl.firstChild);
        }

        graphEl.innerHTML = `
            <!-- Attribution: bottom-right watermark -->
            <div class="xana-attribution">
                <button class="xana-attribution-home" data-home-jump aria-label="Go to XanaNode node">XanaNode</button>
                &middot; <a href="https://xananode.com" target="_blank" rel="noopener noreferrer">xananode.com</a>
            </div>

            <!-- Search portal: the primary navigation surface -->
            <div class="xana-searcher">
                <div class="xana-search-wrap">
                    <form class="xana-search-form" role="search">
                        <input
                            id="xana-search-input"
                            type="search"
                            autocomplete="off"
                            spellcheck="false"
                            placeholder="${escapeHtml(SEARCH_PROMPTS[0])}"
                            value="${escapeHtml(state.searchQuery)}"
                        >
                        <button
                            type="button"
                            class="xana-search-clear-btn"
                            data-search-clear
                            aria-label="Clear search"
                            ${state.searchQuery ? "" : "hidden"}
                        >&#x2715;</button>
                    </form>
                    <div class="xana-search-meta" aria-live="polite"></div>
                    <div class="xana-search-results" hidden></div>
                </div>
                <div class="xana-depth-row" role="group" aria-label="View depth">
                    <button data-depth="1" ${dact(1)}>Near</button>
                    <button data-depth="2" ${dact(2)}>Mid</button>
                    <button data-depth="3" ${dact(3)}>Deep</button>
                </div>
            </div>

            <!-- Compact controls: zoom + filter + audit + tour -->
            <div class="xana-controls-strip">
                <button class="xana-ctrl-btn" data-zoom="out" aria-label="Zoom out" title="Zoom out">&#x2212;</button>
                <button class="xana-ctrl-btn" data-zoom="fit" aria-label="Fit graph" title="Fit to screen">&#x25A1;</button>
                <button class="xana-ctrl-btn" data-zoom="in" aria-label="Zoom in" title="Zoom in">+</button>
                <span class="xana-ctrl-sep"></span>
                <button class="xana-ctrl-btn" data-filter-toggle aria-label="Filter node types" title="Filter">&#x2261;</button>
                <button class="xana-ctrl-btn" data-audit-run aria-label="Schema audit" title="Run schema audit">&#x26A0;</button>
                <button class="xana-ctrl-btn" data-audit-clear aria-label="Clear audit" title="Clear audit" hidden>&#x2715;</button>
                <button class="xana-ctrl-btn" data-path-open aria-label="Path explorer" title="Compare connective path">&#x2934;</button>
                <span class="xana-ctrl-sep"></span>
                <button class="xana-ctrl-btn" data-tour-toggle aria-label="Guided tour" title="Guided tour">&#x25B6;</button>
                <button class="xana-ctrl-btn" data-settings-toggle aria-label="Display and narration settings" title="Settings">&#9881;</button>
                <button class="xana-ctrl-btn" data-interface-tour aria-label="Interface tour" title="Interface tour">?</button>
                <input
                    type="number"
                    class="xana-ctrl-speed"
                    data-tour-speed
                    min="3"
                    max="120"
                    step="1"
                    value="${loadSetting(STORAGE_KEYS.tourSpeed, 9)}"
                    aria-label="Tour dwell time in seconds"
                    title="Seconds per node"
                >
            </div>

            <div class="xana-settings">
                <div class="xana-settings-panel" hidden>
                    <div class="xana-settings-header">
                        <span>Display</span>
                        <button type="button" data-settings-close aria-label="Close display settings">&#x2715;</button>
                    </div>
                    <div class="xana-settings-group" role="group" aria-label="Color theme">
                        <span class="xana-settings-label">Theme</span>
                        <button type="button" data-display-setting="colorTheme" data-value="dark">Dark</button>
                        <button type="button" data-display-setting="colorTheme" data-value="light">Light</button>
                        <button type="button" data-display-setting="colorTheme" data-value="classic">Classic</button>
                    </div>
                    <div class="xana-settings-group" role="group" aria-label="Interface density">
                        <span class="xana-settings-label">Density</span>
                        <button type="button" data-display-setting="uiDensity" data-value="comfortable">Roomy</button>
                        <button type="button" data-display-setting="uiDensity" data-value="compact">Compact</button>
                    </div>
                    <div class="xana-settings-group" role="group" aria-label="Graph atmosphere">
                        <span class="xana-settings-label">Graph</span>
                        <button type="button" data-display-setting="graphAtmosphere" data-value="alive">Alive</button>
                        <button type="button" data-display-setting="graphAtmosphere" data-value="still">Still</button>
                        <button type="button" data-display-setting="graphAtmosphere" data-value="plain">Plain</button>
                    </div>
                    <label class="xana-settings-toggle">
                        <input type="checkbox" data-display-toggle="ttsNarrator" ${state.displaySettings.ttsNarrator ? "checked" : ""}>
                        <span>Narrate guided tour</span>
                    </label>
                    <div class="xana-settings-field">
                        <label for="xana-tts-voice">Voice</label>
                        <select id="xana-tts-voice" data-tts-voice></select>
                    </div>
                    <div class="xana-settings-field">
                        <label for="xana-tts-detail">Read</label>
                        <select id="xana-tts-detail" data-tts-detail>
                            <option value="summary" ${state.displaySettings.ttsDetail === "summary" ? "selected" : ""}>Title and summary</option>
                            <option value="full" ${state.displaySettings.ttsDetail === "full" ? "selected" : ""}>Title, summary, and content</option>
                        </select>
                    </div>
                    <label class="xana-settings-range">
                        <span>Speed</span>
                        <input type="range" min="0.65" max="1.35" step="0.05" data-tts-rate value="${Number(state.displaySettings.ttsRate || 0.95)}">
                    </label>
                    <label class="xana-settings-range">
                        <span>Pitch</span>
                        <input type="range" min="0.75" max="1.35" step="0.05" data-tts-pitch value="${Number(state.displaySettings.ttsPitch || 1)}">
                    </label>
                </div>
            </div>

            <!-- Filter popover: types + media, opens above controls strip -->
            <div class="xana-filter-popover" hidden aria-label="Filter controls">
                <div class="xana-filter-popover-header">
                    <span class="xana-filter-popover-title">Filter</span>
                    <button class="xana-filter-popover-close" data-filter-close aria-label="Close filters">&#x2715;</button>
                </div>
                <div class="xana-filter-popover-body">
                    <h4 class="xana-filter-section-title">Node Types</h4>
                    <div class="xana-filter-grid">
                        <label><input type="checkbox" data-type="essay" ${chk("essay")}> Essays</label>
                        <label><input type="checkbox" data-type="concept" ${chk("concept")}> Concepts</label>
                        <label><input type="checkbox" data-type="claim" ${chk("claim")}> Claims</label>
                        <label><input type="checkbox" data-type="source" ${chk("source")}> Sources</label>
                        <label><input type="checkbox" data-type="person" ${chk("person")}> People</label>
                        <label><input type="checkbox" data-type="observation" ${chk("observation")}> Evidence</label>
                        <label><input type="checkbox" data-type="trail" ${chk("trail")}> Trails</label>
                        <label><input type="checkbox" data-type="project" ${chk("project")}> Projects</label>
                        <label><input type="checkbox" data-type="organization" ${chk("organization")}> Orgs</label>
                        <label><input type="checkbox" data-type="media" ${chk("media")}> Media</label>
                        <label><input type="checkbox" data-type="event" ${chk("event")}> Events</label>
                        <label><input type="checkbox" data-type="place" ${chk("place")}> Places</label>
                        <label><input type="checkbox" data-type="technology" ${chk("technology")}> Tech</label>
                        <label><input type="checkbox" data-type="publication" ${chk("publication")}> Pubs</label>
                        <label><input type="checkbox" data-type="community" ${chk("community")}> Communities</label>
                        <label><input type="checkbox" data-type="relationship" ${chk("relationship")}> Relations</label>
                        <label><input type="checkbox" data-type="revision" ${chk("revision")}> Revisions</label>
                        <label><input type="checkbox" data-type="schema" ${chk("schema")}> Schema</label>
                        <label class="xana-filter-legacy"><input type="checkbox" data-type="artifact" ${chk("artifact")}> Artifacts &#x26A0;</label>
                    </div>
                    <h4 class="xana-filter-section-title second">Media Types</h4>
                    <div class="xana-filter-grid">
                        <label><input type="checkbox" data-media-type="image" ${mchk("image")}> Images</label>
                        <label><input type="checkbox" data-media-type="video" ${mchk("video")}> Video</label>
                        <label><input type="checkbox" data-media-type="audio" ${mchk("audio")}> Audio</label>
                        <label><input type="checkbox" data-media-type="document" ${mchk("document")}> Docs</label>
                        <label><input type="checkbox" data-media-type="diagram" ${mchk("diagram")}> Diagrams</label>
                        <label><input type="checkbox" data-media-type="screenshot" ${mchk("screenshot")}> Screenshots</label>
                    </div>
                </div>
            </div>

            <!-- Audit meta: shown when audit is active -->
            <div class="xana-audit-meta" aria-live="polite" hidden></div>

            <div class="xana-graph-atmosphere" aria-hidden="true"></div>
            <div id="xana-stage"></div>
            <div id="xana-audit-stage" hidden></div>
            <div id="xana-path-stage" hidden></div>
        `;
    }

    function bindControls(state) {
        const cy = state.cy;
        const searchForm = graphEl.querySelector(".xana-search-form");
        const searchInput = graphEl.querySelector("#xana-search-input");
        const clearSearchButton = graphEl.querySelector("[data-search-clear]");

        searchForm?.addEventListener("submit", (event) => {
            event.preventDefault();

            const query = searchInput.value.trim();
            state.searchQuery = query;
            saveSetting(STORAGE_KEYS.searchQuery, query);
            runSearch(query, state);
            renderVisibleGraph(state, {
                updateUrl: false,
                preserveViewport: false
            });
        });

        searchInput?.addEventListener("input", debounce(() => {
            const query = searchInput.value.trim();
            state.searchQuery = query;
            saveSetting(STORAGE_KEYS.searchQuery, query);
            runSearch(query, state);
            renderVisibleGraph(state, {
                updateUrl: false,
                preserveViewport: true
            });

            if (clearSearchButton) clearSearchButton.hidden = !query;
        }, 180));

        clearSearchButton?.addEventListener("click", () => {
            searchInput.value = "";
            state.searchQuery = "";
            state.searchResults = [];
            saveSetting(STORAGE_KEYS.searchQuery, "");
            clearSearchButton.hidden = true;
            renderSearchResults(state);
            renderVisibleGraph(state, {
                updateUrl: false,
                preserveViewport: false
            });
            searchInput.focus();
        });

        graphEl.querySelectorAll("[data-depth]").forEach((button) => {
            button.addEventListener("click", () => {
                graphEl.querySelectorAll("[data-depth]").forEach((b) => {
                    b.classList.remove("active");
                });

                button.classList.add("active");
                state.depth = Number(button.getAttribute("data-depth"));
                saveSetting(STORAGE_KEYS.depth, state.depth);
                renderVisibleGraph(state, {
                    updateUrl: false,
                    preserveViewport: false
                });
            });
        });

        graphEl.querySelectorAll("[data-zoom]").forEach((button) => {
            button.addEventListener("click", () => {
                const action = button.getAttribute("data-zoom");
                const center = {
                    x: cy.container().clientWidth / 2,
                    y: cy.container().clientHeight / 2
                };

                if (action === "in") {
                    cy.zoom({
                        level: Math.min(cy.zoom() * 1.18, cy.maxZoom()),
                        renderedPosition: center
                    });
                }

                if (action === "out") {
                    cy.zoom({
                        level: Math.max(cy.zoom() / 1.18, cy.minZoom()),
                        renderedPosition: center
                    });
                }

                if (action === "fit") {
                    cy.fit(undefined, getFitPadding());
                }

                saveSetting(STORAGE_KEYS.graphZoom, cy.zoom());
                saveSetting(STORAGE_KEYS.graphPan, cy.pan());
            });
        });

        graphEl.querySelectorAll("[data-type]").forEach((input) => {
            input.addEventListener("change", () => {
                const type = input.getAttribute("data-type");

                if (input.checked) {
                    state.enabledTypes.add(type);
                } else {
                    state.enabledTypes.delete(type);
                }

                saveSetting(STORAGE_KEYS.enabledTypes, [...state.enabledTypes]);
                renderVisibleGraph(state, {
                    updateUrl: false,
                    preserveViewport: false
                });
            });
        });

        graphEl.querySelectorAll("[data-media-type]").forEach((input) => {
            input.addEventListener("change", () => {
                const mediaType = input.getAttribute("data-media-type");

                if (input.checked) {
                    state.enabledMediaTypes.add(mediaType);
                } else {
                    state.enabledMediaTypes.delete(mediaType);
                }

                saveSetting(STORAGE_KEYS.enabledMediaTypes, [...state.enabledMediaTypes]);
                renderVisibleGraph(state, {
                    updateUrl: false,
                    preserveViewport: false
                });
            });
        });

        // Filter popover
        const filterToggleBtn = graphEl.querySelector("[data-filter-toggle]");
        const filterCloseBtn = graphEl.querySelector("[data-filter-close]");
        const filterPopover = graphEl.querySelector(".xana-filter-popover");
        const pathOpenButton = graphEl.querySelector("[data-path-open]");
        const settingsToggle = graphEl.querySelector("[data-settings-toggle]");
        const settingsPanel = graphEl.querySelector(".xana-settings-panel");
        const settingsClose = graphEl.querySelector("[data-settings-close]");
        const voiceSelect = graphEl.querySelector("[data-tts-voice]");
        const detailSelect = graphEl.querySelector("[data-tts-detail]");
        const rateInput = graphEl.querySelector("[data-tts-rate]");
        const pitchInput = graphEl.querySelector("[data-tts-pitch]");
        const interfaceTourButton = graphEl.querySelector("[data-interface-tour]");

        updateDisplaySettingButtons(state);
        populateVoiceOptions(state);
        if ("speechSynthesis" in window) {
            window.speechSynthesis.onvoiceschanged = () => populateVoiceOptions(state);
        }

        settingsToggle?.addEventListener("click", (event) => {
            event.stopPropagation();
            if (!settingsPanel) return;
            const opening = settingsPanel.hidden;
            settingsPanel.hidden = !opening;
            settingsToggle.classList.toggle("active", opening);
        });

        settingsClose?.addEventListener("click", () => {
            if (settingsPanel) settingsPanel.hidden = true;
            settingsToggle?.classList.remove("active");
        });

        interfaceTourButton?.addEventListener("click", () => {
            startInterfaceTour(state);
        });

        graphEl.querySelectorAll("[data-display-setting]").forEach((button) => {
            button.addEventListener("click", () => {
                const key = button.getAttribute("data-display-setting");
                const value = button.getAttribute("data-value");
                if (!key || !value || !state.displaySettings) return;

                state.displaySettings[key] = value;
                saveSetting(STORAGE_KEYS[key], value);
                applyDisplaySettings(state.displaySettings);
                updateDisplaySettingButtons(state);
            });
        });

        graphEl.querySelectorAll("[data-display-toggle]").forEach((input) => {
            input.addEventListener("change", () => {
                const key = input.getAttribute("data-display-toggle");
                if (!key || !state.displaySettings) return;

                state.displaySettings[key] = Boolean(input.checked);
                saveSetting(STORAGE_KEYS[key], state.displaySettings[key]);
                applyDisplaySettings(state.displaySettings);

                if (key === "ttsNarrator" && !state.displaySettings[key]) {
                    stopNarration();
                } else if (key === "ttsNarrator" && state.tourActive) {
                    narrateNode(state.allNodes.find((node) => node.id === state.focusId), state);
                }
            });
        });

        voiceSelect?.addEventListener("change", () => {
            state.displaySettings.ttsVoice = voiceSelect.value;
            saveSetting(STORAGE_KEYS.ttsVoice, state.displaySettings.ttsVoice);
            if (state.tourActive && state.displaySettings.ttsNarrator) {
                narrateNode(state.allNodes.find((node) => node.id === state.focusId), state);
            }
        });

        detailSelect?.addEventListener("change", () => {
            state.displaySettings.ttsDetail = detailSelect.value;
            saveSetting(STORAGE_KEYS.ttsDetail, state.displaySettings.ttsDetail);
            if (state.tourActive && state.displaySettings.ttsNarrator) {
                narrateNode(state.allNodes.find((node) => node.id === state.focusId), state);
            }
        });

        rateInput?.addEventListener("input", () => {
            state.displaySettings.ttsRate = Number(rateInput.value) || DISPLAY_DEFAULTS.ttsRate;
            saveSetting(STORAGE_KEYS.ttsRate, state.displaySettings.ttsRate);
        });

        pitchInput?.addEventListener("input", () => {
            state.displaySettings.ttsPitch = Number(pitchInput.value) || DISPLAY_DEFAULTS.ttsPitch;
            saveSetting(STORAGE_KEYS.ttsPitch, state.displaySettings.ttsPitch);
        });

        filterToggleBtn?.addEventListener("click", (event) => {
            event.stopPropagation();

            if (filterPopover) {
                const opening = filterPopover.hidden;
                filterPopover.hidden = !opening;
                filterToggleBtn.classList.toggle("active", opening);
            }
        });

        filterCloseBtn?.addEventListener("click", () => {
            if (filterPopover) filterPopover.hidden = true;
            if (filterToggleBtn) filterToggleBtn.classList.remove("active");
        });

        document.addEventListener("click", (event) => {
            if (settingsPanel && !settingsPanel.hidden && !event.target.closest(".xana-settings")) {
                settingsPanel.hidden = true;
                settingsToggle?.classList.remove("active");
            }

            if (!filterPopover || filterPopover.hidden) return;
            if (event.target.closest(".xana-filter-popover") || event.target.closest("[data-filter-toggle]")) return;

            filterPopover.hidden = true;
            if (filterToggleBtn) filterToggleBtn.classList.remove("active");
        });

        const auditRunButton = graphEl.querySelector("[data-audit-run]");
        const auditClearButton = graphEl.querySelector("[data-audit-clear]");

        auditRunButton?.addEventListener("click", () => {
            runSchemaAudit(state);
        });

        auditClearButton?.addEventListener("click", () => {
            state.auditResults = [];
            state.auditPassed = undefined;
            state.auditMode = false;
            if (auditRunButton) {
                auditRunButton.classList.remove("audit-active", "audit-pass", "audit-fail");
                auditRunButton.innerHTML = "&#x26A0;";
                auditRunButton.title = "Run schema audit";
            }
            renderAuditResults(state);
        });

        pathOpenButton?.addEventListener("click", () => {
            openPathExplorer(state);
        });

        const homeBtn = (graphEl.closest(".xana-app") || document).querySelector("[data-home-btn]");
        homeBtn?.addEventListener("click", () => {
            const homeId = state.allNodes.some((n) => n.id === "start-here")
                ? "start-here"
                : state.allNodes[0]?.id;
            if (homeId) travelToNode(homeId, state, true);
        });

        // Attribution "XanaNode" text → navigate to the xananode node
        graphEl.querySelector("[data-home-jump]")?.addEventListener("click", () => {
            const id = state.allNodes.some((n) => n.id === "xananode") ? "xananode" : "knowledge-substrate";
            travelToNode(id, state, true);
        });

        // Guided tour toggle
        graphEl.querySelector("[data-tour-toggle]")?.addEventListener("click", () => {
            if (state.tourActive) {
                stopTour(state);
            } else {
                startTour(state);
            }
        });

        // Tour speed input — update dwell time immediately and persist
        graphEl.querySelector("[data-tour-speed]")?.addEventListener("input", (e) => {
            const secs = Math.max(3, Math.min(120, Number(e.target.value) || 9));
            TOUR_DWELL_MS = secs * 1000;
            saveSetting(STORAGE_KEYS.tourSpeed, secs);
            // If tour is running, reschedule with new timing
            if (state.tourActive) {
                restartTourRing();
                if (_tourTimer) {
                    window.clearTimeout(_tourTimer);
                    _tourTimer = null;
                }
                scheduleTourAdvance(state);
            }
        });
    }

    function hydrateMedia(allNodes) {
        const nodesById = new Map(allNodes.map((node) => [node.id, node]));

        function isVisualAsset(file, mediaType) {
            return ["image", "diagram", "screenshot", "clip", "scan", "svg"].includes(String(mediaType || "").toLowerCase()) ||
                /\.(svg|png|jpe?g|webp|gif|avif)$/i.test(String(file || ""));
        }

        allNodes.forEach((node) => {
            node.media_warning = "";

            if (node.type === "media" && node.file && isVisualAsset(node.file, node.media_type)) {
                node.image = node.file;
                node.image_alt = node.alt || node.image_alt || node.title;
            }

            if (node.primary_media) {
                const mediaNode = nodesById.get(node.primary_media);

                if (mediaNode) {
                    node.image = mediaNode.file || node.image || "";
                    node.image_alt = mediaNode.alt || node.image_alt || node.title;

                    node.primary_media_node = {
                        id: mediaNode.id,
                        title: mediaNode.title,
                        media_type: mediaNode.media_type || "",
                        file: mediaNode.file || "",
                        alt: mediaNode.alt || "",
                        caption: mediaNode.caption || "",
                        creator: mediaNode.creator || "",
                        created_date: mediaNode.created_date || "",
                        source_name: mediaNode.source_name || "",
                        source_url: mediaNode.source_url || "",
                        license: mediaNode.license || "",
                        license_url: mediaNode.license_url || "",
                        rights_status: mediaNode.rights_status || "",
                        youtube_url: mediaNode.youtube_url || ""
                    };
                } else {
                    node.media_warning = `Missing media node: ${node.primary_media}`;

                    if (node.image) {
                        node.image_alt = node.image_alt || node.title;
                    }
                }

                return;
            }

            if (node.image) {
                node.image_alt = node.image_alt || node.title;

                if (node.type !== "media") {
                    node.media_warning = "Legacy image path without media node. Create a media node and set primary_media.";
                }
            }
        });
    }

    function runSearch(query, state) {
        const normalizedQuery = normalizeSearchText(query);

        if (!normalizedQuery) {
            state.searchResults = [];
            renderSearchResults(state);
            return;
        }

        const queryTokens = tokenize(normalizedQuery);

        state.searchResults = state.allNodes
            .map((node) => {
                const haystack = buildNodeSearchText(node);
                const score = scoreSearchResult(node, haystack, normalizedQuery, queryTokens);

                return {
                    node,
                    score,
                    snippet: makeSearchSnippet(node, queryTokens)
                };
            })
            .filter((result) => result.score > 0)
            .sort((a, b) => {
                if (b.score !== a.score) return b.score - a.score;

                const aImportance = Number(a.node.importance || 0);
                const bImportance = Number(b.node.importance || 0);

                if (bImportance !== aImportance) return bImportance - aImportance;

                return String(a.node.title || "").localeCompare(String(b.node.title || ""));
            })
            .slice(0, 30);

        renderSearchResults(state);
        trackSearch(query, state.searchResults.length);
    }

    function renderSearchResults(state) {
        const metaEl = graphEl.querySelector(".xana-search-meta");
        const resultsEl = graphEl.querySelector(".xana-search-results");

        if (!metaEl || !resultsEl) return;

        const query = state.searchQuery.trim();

        if (!query) {
            metaEl.textContent = "";
            resultsEl.hidden = true;
            resultsEl.innerHTML = "";
            return;
        }

        if (!state.searchResults.length) {
            metaEl.textContent = "No matches.";
            resultsEl.hidden = true;
            resultsEl.innerHTML = "";
            return;
        }

        metaEl.textContent = `${state.searchResults.length} match${state.searchResults.length === 1 ? "" : "es"}`;
        resultsEl.hidden = false;

        resultsEl.innerHTML = `
            <ol>
                ${state.searchResults.slice(0, 10).map((result) => {
            const node = result.node;

            return `
                        <li>
                            <button type="button" data-search-jump="${escapeHtml(node.id)}">
                                <span class="xana-search-result-title">${escapeHtml(node.title || node.id)}</span>
                                <span class="xana-search-result-meta">${escapeHtml(node.type || "node")} · score ${Math.round(result.score)}${(node.youtube_url || node.primary_media_node?.youtube_url) ? " · YouTube video" : ""}</span>
                                ${result.snippet ? `<span class="xana-search-result-snippet">${escapeHtml(result.snippet)}</span>` : ""}
                            </button>
                        </li>
                    `;
        }).join("")}
            </ol>
        `;

        resultsEl.querySelectorAll("[data-search-jump]").forEach((button) => {
            button.addEventListener("click", () => {
                const id = button.getAttribute("data-search-jump");
                clearSearchUi(state);
                travelToNode(id, state, true);
            });
        });
    }

    function buildNodeSearchText(node) {
        return normalizeSearchText([
            node.id,
            node.title,
            node.type,
            node.summary,
            node.content,
            stripHtml(node.html || ""),
            node.url,
            node.youtube_url,
            node.primary_media_node?.youtube_url,
            node.youtube_url ? "youtube video" : "",
            node.primary_media_node?.youtube_url ? "youtube video" : "",
            node.media_type,
            node.creator,
            node.source_name,
            node.rights_status,
            node.caption,
            Array.isArray(node.tags) ? node.tags.join(" ") : "",
            Array.isArray(node.aliases) ? node.aliases.join(" ") : ""
        ].filter(Boolean).join(" "));
    }

    function resolveProtocolAddress(value, state) {
        const raw = decodeURIComponent(String(value || "").trim()).replace(/^xana:\/\//, "");
        if (!raw) return null;

        const nodes = state.allNodes || [];
        const fragmentMatch = raw.match(/^(.*?)(?:@[^#]+)?#fragment\/([A-Za-z0-9._-]+)(?:@.+)?$/);
        const nodeAddress = fragmentMatch ? fragmentMatch[1] : raw.replace(/@[^/#]+$/, "");
        const fragmentId = fragmentMatch?.[2] || "";

        const node = nodes.find((candidate) => {
            return candidate.id === nodeAddress ||
                candidate.protocol_id === nodeAddress ||
                candidate.tumbler === nodeAddress;
        });

        if (!node) return null;
        if (!fragmentId) return { nodeId: node.id, fragmentId: "", fragment: null };

        const fragment = findFragmentRecord(node.id, fragmentId, raw, state);
        return { nodeId: node.id, fragmentId, fragment };
    }

    function findFragmentRecord(nodeId, fragmentId, rawAddress, state) {
        const versions = state.fragmentsData?.nodes?.[nodeId]?.versions || {};
        for (const version of Object.values(versions)) {
            const metadata = version?.metadata || {};
            for (const fragment of Object.values(metadata)) {
                if (!fragment) continue;
                const tumblerNoVersion = String(fragment.tumbler || "").replace(/@[^#]+(?=#fragment\/)/, "").replace(/@[^@#]+$/, "");
                const rawNoVersion = rawAddress.replace(/@[^#]+(?=#fragment\/)/, "").replace(/@[^@#]+$/, "");
                if (
                    fragment.id === fragmentId ||
                    fragment.fragment_id === fragmentId ||
                    fragment.protocol_id === rawAddress ||
                    fragment.tumbler === rawAddress ||
                    (tumblerNoVersion && tumblerNoVersion === rawNoVersion)
                ) {
                    return {
                        ...fragment,
                        text: version.fragments?.[fragment.id || fragmentId] || ""
                    };
                }
            }
        }
        return null;
    }

    function scoreSearchResult(node, haystack, normalizedQuery, queryTokens) {
        let score = 0;

        if (!haystack) return 0;

        const title = normalizeSearchText(node.title || "");
        const id = normalizeSearchText(node.id || "");
        const summary = normalizeSearchText(node.summary || "");

        if (id === normalizedQuery) score += 120;
        if (title === normalizedQuery) score += 100;
        if (title.includes(normalizedQuery)) score += 70;
        if (id.includes(normalizedQuery)) score += 55;
        if (summary.includes(normalizedQuery)) score += 35;
        if (haystack.includes(normalizedQuery)) score += 25;

        queryTokens.forEach((token) => {
            if (title.includes(token)) score += 18;
            if (id.includes(token)) score += 14;
            if (summary.includes(token)) score += 10;
            if (haystack.includes(token)) score += 5;
        });

        score += Number(node.importance || 0);

        return score;
    }

    function makeSearchSnippet(node, queryTokens) {
        const source = stripHtml(node.summary || node.content || node.html || "");
        const text = source.replace(/\s+/g, " ").trim();

        if (!text) return "";

        const lower = text.toLowerCase();
        const firstMatch = queryTokens
            .map((token) => lower.indexOf(token))
            .filter((index) => index >= 0)
            .sort((a, b) => a - b)[0];

        if (firstMatch === undefined) {
            return text.length > 140 ? `${text.slice(0, 140)}…` : text;
        }

        const start = Math.max(0, firstMatch - 55);
        const end = Math.min(text.length, firstMatch + 120);
        const prefix = start > 0 ? "…" : "";
        const suffix = end < text.length ? "…" : "";

        return `${prefix}${text.slice(start, end)}${suffix}`;
    }

    function renderVisibleGraph(state, options = {}) {
        const cy = state.cy;

        if (!cy) return;

        // Always cancel any in-flight reveal timers before rebuilding the graph,
        // regardless of whether this render will start a new staged reveal.
        _navGen++;
        _revealTimers.forEach((id) => window.clearTimeout(id));
        _revealTimers = [];
        cy.stop(true); // stop any running viewport or element animations

        const visible = getVisibleSubgraph(
            state.allNodes,
            state.allEdges,
            state.focusId,
            state.depth,
            state.enabledTypes,
            state.enabledMediaTypes,
            state.previousFocusId,
            state.searchResults
        );

        const searchMatchIds = new Set(state.searchResults.map((result) => result.node.id));

        const elements = [
            ...visible.nodes.map((node) => {
                const src = node.image || "";
                const mediaType = node.primary_media_node?.media_type || "";
                const isVisualMedia = ["image", "diagram", "screenshot"].includes(mediaType) ||
                    /\.(svg|png|jpe?g|webp|gif|avif)$/i.test(src);
                const isContain = ["diagram", "screenshot"].includes(mediaType) || src.toLowerCase().endsWith(".svg");
                return {
                    data: node,
                    classes: [
                        node.type || "node",
                        (node.image && isVisualMedia) ? "has-image" : "",
                        isContain ? "image-contain" : "",
                        searchMatchIds.has(node.id) ? "search-match" : "",
                        node.id === state.focusId ? "focused-node" : `distance-${visible.distances[node.id] || 0}`,
                        options.stagedReveal ? "entering-node" : "",
                        getNodeViolations(node, state.allEdgesRaw, state.allNodes).length > 0 ? "schema-violation" : ""
                    ].filter(Boolean).join(" ")
                };
            }),
            ...visible.edges.map((edge, index) => ({
                data: {
                    id: edgeId(edge, index),
                    source: edge.source,
                    target: edge.target,
                    label: edge.type,
                    weight: edge.weight,
                    score: edge.score
                },
                classes: [
                    edge.source === state.focusId || edge.target === state.focusId ? "focus-edge" : "mist-edge",
                    options.stagedReveal ? "entering-edge" : ""
                ].filter(Boolean).join(" ")
            }))
        ];

        cy.elements().remove();
        cy.add(elements);

        positionAsFocusCloud(cy, state.focusId, visible.distances);
        resolveNodeCollisions(cy, 14);

        const focusNode = state.allNodes.find((node) => node.id === state.focusId);
        const relatedEdges = state.allEdges
            .filter((edge) => edge.source === state.focusId || edge.target === state.focusId)
            .sort((a, b) => {
                return scoreEdge(b, state.allNodes, state.focusId) - scoreEdge(a, state.allNodes, state.focusId);
            });

        renderPanel(focusNode, relatedEdges, state);

        if (state.previousFocusId && state.previousFocusId !== state.focusId) {
            panelEl.scrollTop = 0;
        }

        // If a tour is running, reset scroll and start gentle downward drift
        if (state.tourActive) {
            panelEl.scrollTop = 0;
            startTourPanelScroll();
        }

        if (options.updateUrl) {
            updateUrl(state.focusId, false);
        }

        trackNodeView(focusNode);

        if (options.preserveViewport) {
            applySavedViewportOrFit(cy);
        } else {
            cy.fit(undefined, getFitPadding());
        }

        if (options.stagedReveal) {
            stagedReveal(cy, state.previousFocusId);
        }
    }

    function getVisibleSubgraph(
        allNodes,
        allEdges,
        focusId,
        maxDepth,
        enabledTypes,
        enabledMediaTypes,
        previousFocusId,
        searchResults
    ) {
        const settingsByDepth = {
            1: { minWeight: 5, maxFirst: 6, maxSecond: 0, maxThird: 0 },
            2: { minWeight: 4, maxFirst: 9, maxSecond: 8, maxThird: 0 },
            3: { minWeight: 3, maxFirst: 12, maxSecond: 14, maxThird: 8 }
        };

        const settings = settingsByDepth[maxDepth] || settingsByDepth[2];
        const distances = {};
        const visibleIds = new Set();

        if (focusId) {
            visibleIds.add(focusId);
            distances[focusId] = 0;
        }

        if (previousFocusId) {
            visibleIds.add(previousFocusId);
            distances[previousFocusId] = 1;
        }

        const scoredEdges = dedupeEdges(allEdges)
            .map((edge) => ({
                ...edge,
                weight: Number(edge.weight || 1),
                score: scoreEdge(edge, allNodes, focusId)
            }))
            .filter((edge) => edge.weight >= settings.minWeight)
            .sort((a, b) => b.score - a.score);

        const directEdges = dedupeEdges(allEdges)
            .map((edge) => ({
                ...edge,
                weight: Number(edge.weight || 1),
                score: scoreEdge(edge, allNodes, focusId)
            }))
            .filter((edge) => edge.source === focusId || edge.target === focusId)
            .sort((a, b) => b.score - a.score);

        const firstEdges = directEdges
            .slice(0, settings.maxFirst);

        firstEdges.forEach((edge) => {
            const other = edge.source === focusId ? edge.target : edge.source;
            visibleIds.add(other);
            distances[other] = Math.min(distances[other] || 999, 1);
        });

        if (maxDepth >= 2) {
            const firstIds = Array.from(visibleIds).filter((id) => id !== focusId);

            const secondEdges = scoredEdges
                .filter((edge) => {
                    const touchesFirst = firstIds.includes(edge.source) || firstIds.includes(edge.target);
                    const touchesFocus = edge.source === focusId || edge.target === focusId;

                    return touchesFirst && !touchesFocus;
                })
                .slice(0, settings.maxSecond);

            secondEdges.forEach((edge) => {
                if (!visibleIds.has(edge.source)) {
                    visibleIds.add(edge.source);
                    distances[edge.source] = 2;
                }

                if (!visibleIds.has(edge.target)) {
                    visibleIds.add(edge.target);
                    distances[edge.target] = 2;
                }
            });
        }

        if (maxDepth >= 3) {
            const secondIds = Array.from(visibleIds).filter((id) => distances[id] === 2);

            const thirdEdges = scoredEdges
                .filter((edge) => secondIds.includes(edge.source) || secondIds.includes(edge.target))
                .slice(0, settings.maxThird);

            thirdEdges.forEach((edge) => {
                if (!visibleIds.has(edge.source)) {
                    visibleIds.add(edge.source);
                    distances[edge.source] = 3;
                }

                if (!visibleIds.has(edge.target)) {
                    visibleIds.add(edge.target);
                    distances[edge.target] = 3;
                }
            });
        }

        // Note: search results are shown in the dropdown and highlighted via the
        // search-match class on already-visible nodes. We do NOT inject them into
        // visibleIds here — that caused unrelated nodes to bleed into the graph
        // while the search panel was open and disappear on close.

        const nodes = allNodes.filter((node) => {
            if (node.id === focusId) return true;
            if (node.id === previousFocusId) return true;
            if (!visibleIds.has(node.id)) return false;
            if (!enabledTypes.has(node.type)) return false;

            if (node.type === "media") {
                return enabledMediaTypes.has(node.media_type || "image");
            }

            return true;
        });

        const nodeIds = new Set(nodes.map((node) => node.id));

        let edges = scoredEdges.filter((edge) => {
            return nodeIds.has(edge.source) && nodeIds.has(edge.target);
        });

        if (maxDepth === 1) {
            edges = edges.filter((edge) => edge.source === focusId || edge.target === focusId);
        }

        edges = edges.slice(0, settings.maxFirst + settings.maxSecond + settings.maxThird);

        return { nodes, edges, distances };
    }

    function dedupeEdges(edges) {
        const seen = new Set();

        return edges.filter((edge) => {
            const pair = [edge.source, edge.target].sort().join("::");
            const key = `${pair}::${edge.type || "related"}`;

            if (seen.has(key)) return false;

            seen.add(key);
            return true;
        });
    }

    function scoreEdge(edge, allNodes, focusId) {
        const source = allNodes.find((node) => node.id === edge.source);
        const target = allNodes.find((node) => node.id === edge.target);

        const sourceImportance = Number(source?.importance || 3);
        const targetImportance = Number(target?.importance || 3);
        const weight = Number(edge.weight || 1);

        const relationshipPriority = {
            defines: 10,
            created: 9,
            created_by: 9,
            participated_in: 8,
            originated_by: 9,
            coined: 9,
            represented_by: 9,
            used_as_primary_media_for: 9,
            depicts: 9,
            authored: 8,
            features: 8,
            featured_in: 8,
            presented: 8,
            presented_by: 8,
            proposed: 7,
            demonstrates: 7,
            demonstrated_by: 7,
            explains: 7,
            explained_by: 7,
            context_for: 6,
            documents: 6,
            extends: 6,
            supports: 6,
            supported_by: 6,
            contrasts: 6,
            depends_on: 6,
            exposes: 6,
            anticipates: 6,
            contains: 6,
            includes: 6,
            uses: 5,
            used_by: 5,
            cites: 5,
            related_to: 4,
            related: 3,
            mentions: 1,
            unresolved_media: 1
        };

        const typePriority = relationshipPriority[edge.type] || 3;
        const directBonus = edge.source === focusId || edge.target === focusId ? 20 : 0;
        const explicitBonus = edge.origin === "relationship" ? 8 : 0;
        const visibilityBonus = edge.visibility === "primary" ? 5 : edge.visibility === "secondary" ? 2 : 0;

        return directBonus + explicitBonus + visibilityBonus + weight * 10 + typePriority + sourceImportance + targetImportance;
    }

    function positionAsFocusCloud(cy, focusId, distances) {
        const width = cy.container().clientWidth || 1000;
        const height = cy.container().clientHeight || 700;
        const centerX = width / 2;
        const centerY = height / 2;

        const focus = cy.getElementById(focusId);

        if (focus.length) {
            focus.position({ x: centerX, y: centerY });
        }

        [1, 2, 3].forEach((distance) => {
            const nodes = cy.nodes()
                .filter((node) => distances[node.id()] === distance)
                .sort((a, b) => {
                    const ai = Number(a.data("importance") || 3);
                    const bi = Number(b.data("importance") || 3);

                    return bi - ai;
                });

            const count = nodes.length;
            if (count === 0) return;

            const largestNodeSize = Math.max(...nodes.map((node) => Number(node.width() || 92)));
            const focusSize = focus.length ? Number(focus.width() || 160) : 160;

            const baseRadius = focusSize / 2 + largestNodeSize + 90 + distance * 150;
            const radius = Math.max(baseRadius, Math.min(width, height) * (0.2 + distance * 0.18));
            const fullCircle = Math.PI * 2;
            const angleStep = fullCircle / count;

            nodes.forEach((node, index) => {
                const stagger = distance * 0.37;
                const angle = -Math.PI / 2 + index * angleStep + stagger;

                node.position({
                    x: centerX + Math.cos(angle) * radius,
                    y: centerY + Math.sin(angle) * radius
                });
            });
        });
    }

    function resolveNodeCollisions(cy, iterations) {
        const padding = isMobileLayout() ? 32 : 46;
        const nodes = cy.nodes();

        for (let pass = 0; pass < iterations; pass++) {
            nodes.forEach((a) => {
                nodes.forEach((b) => {
                    if (a.id() === b.id()) return;

                    const ax = a.position("x");
                    const ay = a.position("y");
                    const bx = b.position("x");
                    const by = b.position("y");
                    const dx = bx - ax;
                    const dy = by - ay;
                    const distance = Math.sqrt(dx * dx + dy * dy) || 1;
                    const minDistance = Number(a.width() || 92) / 2 + Number(b.width() || 92) / 2 + padding;

                    if (distance >= minDistance) return;

                    const overlap = (minDistance - distance) / 2;
                    const nx = dx / distance;
                    const ny = dy / distance;
                    const aIsFocus = a.hasClass("focused-node");
                    const bIsFocus = b.hasClass("focused-node");

                    if (!aIsFocus) {
                        a.position({
                            x: ax - nx * overlap,
                            y: ay - ny * overlap
                        });
                    }

                    if (!bIsFocus) {
                        b.position({
                            x: bx + nx * overlap,
                            y: by + ny * overlap
                        });
                    }
                });
            });
        }
    }

    function stagedReveal(cy, previousFocusId) {
        // Cancel any timers from a previous in-flight reveal (e.g. navigating
        // via search while the last animation is still running).
        _revealTimers.forEach((id) => window.clearTimeout(id));
        _revealTimers = [];

        const after = (fn, delay) => {
            const id = window.setTimeout(fn, delay);
            _revealTimers.push(id);
        };

        const focus = cy.nodes(".focused-node").first();
        const focusId = focus.id();
        const focusPos = { x: focus.position("x"), y: focus.position("y") };

        // Snapshot the final computed positions before we collapse nodes to center
        const finalPositions = {};
        cy.nodes().forEach((n) => {
            finalPositions[n.id()] = { x: n.position("x"), y: n.position("y") };
        });

        // Hide everything and collapse non-focus nodes onto the focus point
        cy.elements().style("opacity", 0);
        focus.style("opacity", 1);
        cy.nodes().not(focus).forEach((n) => n.position({ x: focusPos.x, y: focusPos.y }));

        // Animate a node to its final position and opacity, spring-eased
        const flyIn = (node, opacity, delay, duration) => {
            after(() => {
                const fp = finalPositions[node.id()];
                if (!fp) return;
                node.animate(
                    { position: fp, style: { opacity } },
                    { duration, easing: "spring(400, 28)" }
                );
            }, delay);
        };

        // Fade in edges connected to a given node
        const revealEdges = (nodeId, opacity, delay, duration) => {
            after(() => {
                cy.edges().filter((e) =>
                    e.source().id() === nodeId || e.target().id() === nodeId
                ).animate({ style: { opacity } }, { duration, easing: "ease-out" });
            }, delay);
        };

        let cursor = 60;

        // Wave 0 — the node we just came from (appears before the rest, anchors context)
        const prevNode = previousFocusId ? cy.getElementById(previousFocusId) : null;
        const hasPrev = prevNode && prevNode.length && prevNode.id() !== focusId;

        if (hasPrev) {
            const prevOpacity = prevNode.hasClass("distance-1") ? 0.95 : 0.32;
            flyIn(prevNode, prevOpacity, cursor, 360);
            revealEdges(prevNode.id(), 0.6, cursor + 80, 260);
            cursor += 160;
        }

        // Wave 1 — distance-1 nodes, heaviest first
        const d1 = cy.nodes(".distance-1")
            .filter((n) => !hasPrev || n.id() !== prevNode.id())
            .sort((a, b) => Number(b.data("importance") || 3) - Number(a.data("importance") || 3));

        d1.forEach((node, i) => {
            flyIn(node, 0.95, cursor + i * 60, 420);
            revealEdges(node.id(), 0.6, cursor + i * 60 + 110, 280);
        });

        cursor += Math.max(d1.length, 1) * 60 + 200;

        // Wave 2 — distance-2 nodes, heaviest first
        const d2 = cy.nodes(".distance-2")
            .sort((a, b) => Number(b.data("importance") || 3) - Number(a.data("importance") || 3));

        d2.forEach((node, i) => {
            flyIn(node, 0.32, cursor + i * 40, 500);
        });

        cursor += Math.max(d2.length, 1) * 40 + 220;

        // Wave 3 — distance-3 nodes, subtle drift in
        cy.nodes(".distance-3").forEach((node, i) => {
            flyIn(node, 0.10, cursor + i * 25, 580);
        });

        after(() => {
            cy.edges(".mist-edge").animate({ style: { opacity: 0.08 } }, { duration: 500, easing: "ease-out" });
        }, cursor);
    }

    // ── Guided Tour ──────────────────────────────────────────────────────────

    function updateTourButton() {
        const tourBtn = graphEl.querySelector("[data-tour-toggle]");
        if (!tourBtn) return;

        const isActive = graphEl.dataset.tourActive === "1";
        tourBtn.innerHTML = isActive ? "&#x23F8;" : "&#x25B6;";
        tourBtn.classList.toggle("tour-active", isActive);
        tourBtn.title = isActive ? "Stop tour" : "Guided tour";
    }

    // Restart the conic-gradient countdown ring on the tour button.
    // Must cancel the old animation by removing/re-adding the class (forces reflow).
    function restartTourRing() {
        const tourBtn = graphEl.querySelector("[data-tour-toggle]");
        if (!tourBtn) return;
        tourBtn.classList.remove("tour-ring-anim");
        tourBtn.style.setProperty("--tour-dur", `${TOUR_DWELL_MS}ms`);
        void tourBtn.offsetWidth; // force reflow so browser sees class removal
        tourBtn.classList.add("tour-ring-anim");
    }

    function startTour(state) {
        // Load saved speed preference
        TOUR_DWELL_MS = Math.max(3000, (loadSetting(STORAGE_KEYS.tourSpeed, 9) || 9) * 1000);
        state.tourActive = true;
        state.tourIndex = 0;
        state.tourVisited = new Set([state.focusId].filter(Boolean));
        state.tourRecent = [state.focusId].filter(Boolean);
        state.activeTrail = buildActiveTrail(state);
        graphEl.dataset.tourActive = "1";
        updateTourButton();
        panelEl.scrollTop = 0;
        startTourPanelScroll();
        const narrated = narrateNode(state.allNodes.find((node) => node.id === state.focusId), state);
        restartTourRing();
        if (!narrated) scheduleTourAdvance(state);
    }

    function stopTour(state) {
        state.tourActive = false;
        state.activeTrail = null;
        graphEl.dataset.tourActive = "0";
        clearTourTimers();
        stopNarration();
        updateTourButton();
        const tourBtn = graphEl.querySelector("[data-tour-toggle]");
        if (tourBtn) tourBtn.classList.remove("tour-ring-anim");
    }

    function clearTourTimers() {
        if (_tourTimer) { window.clearTimeout(_tourTimer); _tourTimer = null; }
        if (_tourScrollInterval) { window.cancelAnimationFrame(_tourScrollInterval); _tourScrollInterval = null; }
    }

    function startTourPanelScroll() {
        if (_tourScrollInterval) window.cancelAnimationFrame(_tourScrollInterval);

        // Measure total scrollable distance once the panel has rendered.
        // Scroll position is time-based so short content scrolls slowly and
        // long content scrolls faster — both finish at the bottom at dwell end.
        const startTime = performance.now();
        const totalDistance = Math.max(0, panelEl.scrollHeight - panelEl.clientHeight);

        if (totalDistance === 0) return; // nothing to scroll

        const scroll = (now) => {
            if (!_tourScrollInterval) return;
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / TOUR_DWELL_MS, 1);
            panelEl.scrollTop = totalDistance * progress;
            if (progress < 1) {
                _tourScrollInterval = window.requestAnimationFrame(scroll);
            } else {
                _tourScrollInterval = null;
            }
        };

        _tourScrollInterval = window.requestAnimationFrame(scroll);
    }

    function pickNextTourNode(state) {
        const trailNext = pickNextTrailNode(state);
        if (trailNext) return trailNext;

        const cy = state.cy;
        if (!cy) return null;

        const visibleNodes = cy.nodes().filter((node) => node.id() !== state.focusId);
        const localNodes = visibleNodes.filter((node) => node.hasClass("distance-1") || node.hasClass("distance-2"));
        const basePool = localNodes.length ? localNodes : visibleNodes;
        const recent = new Set(state.tourRecent || []);
        const fresh = basePool.filter((node) => !state.tourVisited?.has(node.id()) && !recent.has(node.id()));
        const notRecent = basePool.filter((node) => !recent.has(node.id()) && node.id() !== state.previousFocusId);
        const pool = (fresh.length ? fresh : notRecent.length ? notRecent : basePool)
            .sort((a, b) => {
                const aDistance = a.hasClass("distance-1") ? 1 : a.hasClass("distance-2") ? 2 : 3;
                const bDistance = b.hasClass("distance-1") ? 1 : b.hasClass("distance-2") ? 2 : 3;
                if (aDistance !== bDistance) return aDistance - bDistance;
                return Number(b.data("importance") || 3) - Number(a.data("importance") || 3);
            });
        if (!pool.length) return null;

        state.tourIndex = state.tourIndex % pool.length;
        const next = pool[state.tourIndex];
        state.tourIndex = (state.tourIndex + 1) % pool.length;

        const nextId = next?.id() || null;
        if (nextId) rememberTourVisit(nextId, state);
        return nextId;
    }

    function buildActiveTrail(state) {
        const focusNode = state.allNodes.find((node) => node.id === state.focusId);
        const trailNodes = Array.isArray(focusNode?.trail_nodes)
            ? focusNode.trail_nodes.filter((id) => state.nodeIds.has(id))
            : [];
        if (!trailNodes.length) return null;
        return {
            trailId: focusNode.id,
            nodes: trailNodes,
            index: 0
        };
    }

    function pickNextTrailNode(state) {
        const trail = state.activeTrail;
        if (!trail?.nodes?.length) return null;
        const currentIndex = trail.nodes.indexOf(state.focusId);
        const nextIndex = currentIndex >= 0 ? currentIndex + 1 : trail.index;
        const nextId = trail.nodes[nextIndex];
        trail.index = nextIndex + 1;
        if (!nextId) {
            state.activeTrail = null;
            return null;
        }
        rememberTourVisit(nextId, state);
        return nextId;
    }

    function rememberTourVisit(nodeId, state) {
        state.tourVisited = state.tourVisited || new Set();
        state.tourRecent = state.tourRecent || [];
        state.tourVisited.add(nodeId);
        state.tourRecent.push(nodeId);
        state.tourRecent = state.tourRecent.slice(-7);

        const visibleCount = state.cy?.nodes().length || 0;
        if (visibleCount > 0 && state.tourVisited.size > Math.max(8, Math.floor(visibleCount * 0.7))) {
            state.tourVisited = new Set(state.tourRecent);
        }
    }

    function scheduleTourAdvance(state, forceTimer = false) {
        if (_tourTimer) window.clearTimeout(_tourTimer);
        if (!forceTimer && state.displaySettings?.ttsNarrator && canNarrate()) return;

        _tourTimer = window.setTimeout(() => {
            if (!state.tourActive) return;
            const nextId = pickNextTourNode(state);
            if (nextId) travelToNode(nextId, state, false);
            scheduleTourAdvance(state);
        }, TOUR_DWELL_MS);
    }

    // ── End Guided Tour ──────────────────────────────────────────────────────

    function travelToNode(nextId, state, pushUrl) {
        if (!nextId || nextId === state.focusId) return;
        if (state.nodeIds && !state.nodeIds.has(nextId)) return;
        if (state.isTraveling) return;
        closeTransientUi(state, { clearSearch: true });

        const cy = state.cy;
        const currentId = state.focusId;
        const currentNode = cy.getElementById(currentId);
        const nextNode = cy.getElementById(nextId);

        if (!currentNode.length || !nextNode.length) {
            // The destination isn't in the current graph (typical search jump).
            // Don't carry previousFocusId — it's unrelated to where we're going
            // and would wrongly anchor Wave 0 of the reveal animation.
            state.previousFocusId = null;
            state.focusId = nextId;

            renderVisibleGraph(state, {
                updateUrl: pushUrl,
                stagedReveal: true,
                preserveViewport: false
            });

            return;
        }

        const connectingEdges = cy.edges().filter((edge) => {
            return (
                edge.source().id() === currentId && edge.target().id() === nextId
            ) || (
                    edge.source().id() === nextId && edge.target().id() === currentId
                );
        });

        cy.elements().removeClass("travel-dim travel-origin travel-destination travel-path pre-exit");
        cy.elements().addClass("travel-dim");
        currentNode.removeClass("travel-dim").addClass("travel-origin");
        nextNode.removeClass("travel-dim").addClass("travel-destination");
        connectingEdges.removeClass("travel-dim").addClass("travel-path");

        panelEl.classList.add("panel-transitioning");
        state.isTraveling = true;

        // Capture the current generation so we can detect if the graph was
        // rebuilt (e.g. by a search clear or another tap) before we finish.
        const travelGen = _navGen;

        cy.animate(
            {
                center: { eles: nextNode },
                zoom: Math.min(1.15, cy.maxZoom())
            },
            {
                duration: 520,
                easing: "ease-in-out",
                complete: () => {
                    // If renderVisibleGraph ran while we were zooming, abort.
                    if (_navGen !== travelGen) {
                        state.isTraveling = false;
                        panelEl.classList.remove("panel-transitioning");
                        return;
                    }

                    cy.elements().addClass("pre-exit");

                    const t = window.setTimeout(() => {
                        if (_navGen !== travelGen) {
                            state.isTraveling = false;
                            panelEl.classList.remove("panel-transitioning");
                            return;
                        }

                        state.previousFocusId = currentId;
                        state.focusId = nextId;

                        renderVisibleGraph(state, {
                            updateUrl: pushUrl,
                            stagedReveal: true,
                            preserveViewport: false
                        });

                        panelEl.classList.remove("panel-transitioning");
                        state.isTraveling = false;
                    }, 180);

                    _revealTimers.push(t);
                }
            }
        );
    }

    function renderPanel(node, relatedEdges, state) {
        if (!node) {
            panelEl.innerHTML = `<p class="xana-empty">No node selected.</p>`;
            return;
        }

        const outgoing = relatedEdges.filter((edge) => edge.source === node.id);
        const incoming = relatedEdges.filter((edge) => edge.target === node.id);
        const totalConns = outgoing.length + incoming.length;

        const panelMediaType = node.primary_media_node?.media_type || "";
        const panelIsVisual = ["image", "diagram", "screenshot"].includes(panelMediaType) ||
            /\.(svg|png|jpe?g|webp|gif|avif)$/i.test(node.image || "");

        panelEl.innerHTML = `
            <div class="xana-node-header ${(node.image && panelIsVisual) ? "has-media" : node.image ? "has-media has-doc-media" : "no-media"}">
                ${renderPanelImage(node, state)}
                <div class="xana-node-heading-text">
                    ${renderTypeBadge(node.type)}
                    <h1>${escapeHtml(node.title || node.id)}</h1>
                    ${node.summary ? `<p class="xana-summary">${escapeHtml(node.summary)}</p>` : ""}
                    ${renderMediaProvenance(node)}
                    ${renderMediaWarning(node)}
                </div>
            </div>

            ${(node.youtube_url || node.primary_media_node?.youtube_url) ? renderYouTubeEmbed(node.youtube_url || node.primary_media_node?.youtube_url, node.primary_media_node?.title || "Watch on YouTube") : ""}

            ${node.html || node.content ? `<div class="xana-node-content">${node.html || escapeHtml(node.content)}</div>` : ""}

            ${renderSourceInfo(node)}

            ${renderProtocolFooter(node)}

            ${renderTrailPlaylist(node, state)}

            <details class="xana-connections" ${loadSetting(STORAGE_KEYS.connectionsOpen, false) ? "open" : ""}>
                <summary class="xana-connections-summary">
                    <span>Connections</span>
                    ${totalConns > 0 ? `<span class="xana-conn-count">${totalConns}</span>` : ""}
                </summary>
                ${outgoing.length > 0 ? `
                    <div class="xana-connections-group">
                        <div class="xana-connections-dir-label">From this node</div>
                        ${relationshipList(outgoing, "target", state.allNodes)}
                    </div>
                ` : ""}
                ${incoming.length > 0 ? `
                    <div class="xana-connections-group">
                        <div class="xana-connections-dir-label">To this node</div>
                        ${relationshipList(incoming, "source", state.allNodes)}
                    </div>
                ` : ""}
                ${totalConns === 0 ? `<p class="xana-empty">No connections.</p>` : ""}
            </details>

            ${renderNodeViolations(node, state.allEdgesRaw, state.allNodes)}
        `;

        if (state.previousFocusId && state.previousFocusId !== state.focusId) {
            panelEl.scrollTop = 0;
        }

        normalizePanelLinks(state);
        bindTrailPlaylist(state);
        highlightPendingFragment(state);

        // Tour: reset scroll and restart both the panel-scroll loop and the
        // countdown ring animation so both are in sync with the new node's dwell.
        if (state.tourActive) {
            panelEl.scrollTop = 0;
            startTourPanelScroll();
            const narrated = narrateNode(node, state);
            restartTourRing();
            if (!narrated) scheduleTourAdvance(state);
        }
    }

    function renderTrailPlaylist(node, state) {
        if (!Array.isArray(node.trail_nodes) || !node.trail_nodes.length) return "";
        const items = node.trail_nodes
            .map((id, index) => {
                const target = state.allNodes.find((candidate) => candidate.id === id);
                if (!target) return "";
                return `
                    <button type="button" data-trail-jump="${escapeHtml(target.id)}">
                        <span>${index + 1}</span>
                        <strong>${escapeHtml(target.title || target.id)}</strong>
                        <em>${escapeHtml(target.type || "node")}</em>
                    </button>
                `;
            })
            .filter(Boolean)
            .join("");

        if (!items) return "";
        return `
            <section class="xana-trail-playlist" data-tts-skip>
                <div class="xana-trail-playlist-head">
                    <span>Trail playlist</span>
                    <button type="button" data-trail-start="${escapeHtml(node.id)}">Play trail</button>
                </div>
                <div class="xana-trail-playlist-items">${items}</div>
            </section>
        `;
    }

    function bindTrailPlaylist(state) {
        panelEl.querySelectorAll("[data-trail-jump]").forEach((button) => {
            button.addEventListener("click", () => {
                const id = button.getAttribute("data-trail-jump");
                state.activeTrail = {
                    trailId: state.focusId,
                    nodes: [...(state.allNodes.find((node) => node.id === state.focusId)?.trail_nodes || [])],
                    index: 0
                };
                travelToNode(id, state, true);
            });
        });

        panelEl.querySelector("[data-trail-start]")?.addEventListener("click", () => {
            state.activeTrail = buildActiveTrail(state);
            const nextId = pickNextTrailNode(state);
            if (nextId) travelToNode(nextId, state, true);
        });
    }

    function renderProtocolFooter(node) {
        const rows = [
            node.protocol_id ? ["Protocol", node.protocol_id] : null,
            node.tumbler ? ["Tumbler", node.tumbler] : null
        ].filter(Boolean);

        if (!rows.length) return "";

        return `
            <footer class="xana-protocol-footer" data-tts-skip aria-hidden="true">
                ${rows.map(([label, value]) => `
                    <div>
                        <span>${escapeHtml(label)}</span>
                        <code>${escapeHtml(value)}</code>
                    </div>
                `).join("")}
            </footer>
        `;
    }

    function highlightPendingFragment(state) {
        const pending = state.pendingFragmentHighlight;
        if (!pending || pending.nodeId !== state.focusId) return;

        panelEl.querySelectorAll(".xana-fragment-highlight").forEach((el) => {
            el.classList.remove("xana-fragment-highlight");
        });
        panelEl.querySelectorAll(".xana-fragment-note").forEach((el) => el.remove());

        const text = normalizeFragmentText(pending.fragment?.text || "");
        const candidates = [...panelEl.querySelectorAll(".xana-node-content p, .xana-node-content li, .xana-node-content blockquote, .xana-node-content pre")];
        const target = candidates.find((el) => {
            const candidate = normalizeFragmentText(el.textContent || "");
            if (!candidate || !text) return false;
            return candidate.includes(text) || text.includes(candidate) || candidate.includes(text.slice(0, 80));
        });

        if (target) {
            target.classList.add("xana-fragment-highlight");
            target.scrollIntoView({ block: "center", behavior: "smooth" });
            state.pendingFragmentHighlight = null;
            return;
        }

        const note = document.createElement("aside");
        note.className = "xana-fragment-note";
        note.setAttribute("data-tts-skip", "");
        note.setAttribute("aria-hidden", "true");
        note.innerHTML = `
            <span>Fragment address</span>
            <code>${escapeHtml(pending.fragment?.tumbler || `${state.allNodes.find((node) => node.id === pending.nodeId)?.protocol_id || pending.nodeId}#fragment/${pending.fragmentId}`)}</code>
        `;
        const content = panelEl.querySelector(".xana-node-content");
        if (content) content.prepend(note);
        note.scrollIntoView({ block: "center", behavior: "smooth" });
        state.pendingFragmentHighlight = null;
    }

    function normalizeFragmentText(value) {
        return stripHtml(value)
            .replace(/\s+/g, " ")
            .trim()
            .toLowerCase();
    }

    function narrateNode(node, state) {
        if (!node || !state?.displaySettings?.ttsNarrator) return false;
        if (!canNarrate()) return false;

        const title = node.title || node.id || "Untitled node";
        const summary = stripHtml(node.summary || "").replace(/\s+/g, " ").trim();
        const content = stripHtml(node.html || node.content || "").replace(/\s+/g, " ").trim();
        const wantsFull = state.displaySettings.ttsDetail !== "summary";
        const readableContent = wantsFull && content && content !== summary
            ? content
            : "";
        const text = [title, summary, readableContent].filter(Boolean).join(". ");

        if (!text) return false;
        stopNarration();

        const utterance = new SpeechSynthesisUtterance(text);
        const voices = getAvailableVoices();
        const selectedVoice = voices.find((voice) => voice.voiceURI === state.displaySettings.ttsVoice)
            || voices.find((voice) => voice.default)
            || voices[0];

        if (selectedVoice) utterance.voice = selectedVoice;
        utterance.rate = clampNumber(state.displaySettings.ttsRate, 0.65, 1.35, DISPLAY_DEFAULTS.ttsRate);
        utterance.pitch = clampNumber(state.displaySettings.ttsPitch, 0.75, 1.35, DISPLAY_DEFAULTS.ttsPitch);
        utterance.volume = 0.88;
        utterance.onend = () => {
            if (!state.tourActive) return;
            window.setTimeout(() => {
                if (!state.tourActive) return;
                const nextId = pickNextTourNode(state);
                if (nextId) travelToNode(nextId, state, false);
            }, 450);
        };
        utterance.onerror = () => {
            if (state.tourActive) scheduleTourAdvance(state, true);
        };
        window.speechSynthesis.speak(utterance);
        return true;
    }

    function stopNarration() {
        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }
    }

    function canNarrate() {
        return "speechSynthesis" in window && Boolean(window.SpeechSynthesisUtterance);
    }

    function getAvailableVoices() {
        return canNarrate() ? window.speechSynthesis.getVoices() : [];
    }

    function populateVoiceOptions(state) {
        const select = graphEl.querySelector("[data-tts-voice]");
        if (!select) return;

        const voices = getAvailableVoices();
        const current = state.displaySettings.ttsVoice || "";
        select.innerHTML = [
            `<option value="">Browser default</option>`,
            ...voices.map((voice) => {
                const label = `${voice.name}${voice.lang ? ` (${voice.lang})` : ""}${voice.localService ? "" : " - network"}`;
                return `<option value="${escapeHtml(voice.voiceURI)}" ${voice.voiceURI === current ? "selected" : ""}>${escapeHtml(label)}</option>`;
            })
        ].join("");

        if (current && !voices.some((voice) => voice.voiceURI === current)) {
            select.value = "";
        }
    }

    function startInterfaceTour(state) {
        const steps = [
            {
                selector: ".xana-searcher",
                title: "Start anywhere",
                body: "Search is the front door. Type a person, claim, source, idea, or protocol address and the graph will pull matching nodes into view."
            },
            {
                selector: ".xana-depth-row",
                title: "Choose your focus",
                body: "Near, mid, and deep change how much neighborhood context you see around the selected node."
            },
            {
                selector: "#xana-stage",
                title: "Navigate the substrate",
                body: "Each node is a typed knowledge object. Click one to travel through meaning, not just pages."
            },
            {
                selector: ".xana-controls-strip",
                title: "Graph tools",
                body: "These controls zoom, fit, filter, audit, compare paths, run the node tour, and open display or narration settings."
            },
            {
                selector: "#xana-panel",
                title: "Read with context",
                body: "The content panel shows the selected node, media, source metadata, stable addresses, and typed relationships."
            },
            {
                selector: ".xana-connections",
                title: "Follow relationships",
                body: "Connections explain why nodes are linked. This is where evidence, disagreement, lineage, and trails become navigable."
            },
            {
                selector: "[data-settings-toggle]",
                title: "Make it yours",
                body: "Settings let readers choose theme, density, graph atmosphere, and narrated tours."
            }
        ];

        let index = 0;
        renderInterfaceTourStep();

        function renderInterfaceTourStep() {
            graphEl.querySelectorAll(".xana-interface-tour, .xana-tour-spotlight").forEach((el) => el.remove());
            document.querySelectorAll(".xana-tour-target").forEach((el) => el.classList.remove("xana-tour-target"));

            const step = steps[index];
            const target = document.querySelector(step.selector);
            if (target) target.classList.add("xana-tour-target");

            const overlay = document.createElement("div");
            overlay.className = "xana-interface-tour";
            overlay.setAttribute("data-tts-skip", "");
            overlay.innerHTML = `
                <div class="xana-interface-tour-card">
                    <div class="xana-interface-tour-count">${index + 1} / ${steps.length}</div>
                    <h2>${escapeHtml(step.title)}</h2>
                    <p>${escapeHtml(step.body)}</p>
                    <div class="xana-interface-tour-actions">
                        <button type="button" data-tour-close>Close</button>
                        <button type="button" data-tour-prev ${index === 0 ? "disabled" : ""}>Back</button>
                        <button type="button" data-tour-next>${index === steps.length - 1 ? "Done" : "Next"}</button>
                    </div>
                </div>
            `;
            graphEl.appendChild(overlay);

            overlay.querySelector("[data-tour-close]")?.addEventListener("click", closeInterfaceTour);
            overlay.querySelector("[data-tour-prev]")?.addEventListener("click", () => {
                index = Math.max(0, index - 1);
                renderInterfaceTourStep();
            });
            overlay.querySelector("[data-tour-next]")?.addEventListener("click", () => {
                if (index >= steps.length - 1) {
                    closeInterfaceTour();
                    return;
                }
                index += 1;
                renderInterfaceTourStep();
            });
        }

        function closeInterfaceTour() {
            graphEl.querySelectorAll(".xana-interface-tour").forEach((el) => el.remove());
            document.querySelectorAll(".xana-tour-target").forEach((el) => el.classList.remove("xana-tour-target"));
        }
    }

    function renderPanelImage(node, state) {
        if (!node.image) return "";

        const mediaType = node.primary_media_node?.media_type || "";
        const src = node.image || "";

        // Non-visual media: render a square icon placeholder instead of a broken <img>
        if (["document", "audio", "video"].includes(mediaType) ||
            (!mediaType && (src.endsWith(".pdf") || src.endsWith(".mp3") || src.endsWith(".mp4")))) {
            const isAudio = mediaType === "audio" || src.endsWith(".mp3");
            const isVideo = mediaType === "video" || src.endsWith(".mp4");
            const iconSvg = isAudio
                ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"/></svg>`
                : isVideo
                    ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"/></svg>`
                    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/></svg>`;
            const ext = src.split(".").pop().toUpperCase();
            const nodeId = node.primary_media_node?.id;
            const linkHref = src;
            return `
                <a
                    class="xana-node-image xana-node-image--doc-placeholder"
                    href="${escapeHtml(linkHref)}"
                    target="_blank"
                    rel="noopener"
                    title="${escapeHtml(node.primary_media_node?.title || ext + " file")}"
                    ${nodeId ? `data-node-jump="${escapeHtml(nodeId)}"` : ""}
                >
                    ${iconSvg}
                    <span class="xana-doc-placeholder-ext">${escapeHtml(ext)}</span>
                </a>
            `;
        }

        const isContain = ["diagram", "screenshot"].includes(mediaType) || src.toLowerCase().endsWith(".svg");
        const imageClass = `xana-node-image${isContain ? " xana-node-image--contain" : ""}`;

        if (node.primary_media_node) {
            return `
                <a
                    class="xana-node-image-link"
                    href="${escapeHtml(nodeHref(node.primary_media_node, state))}"
                    data-node-jump="${escapeHtml(node.primary_media_node.id)}"
                >
                    <img
                        class="${imageClass} xana-node-image--panel"
                        src="${escapeHtml(src)}"
                        alt="${escapeHtml(node.image_alt || node.title || "")}"
                    >
                </a>
            `;
        }

        return `
            <div class="xana-node-image-link${node.type === "media" ? "" : " unresolved-media"}">
                <img
                    class="${imageClass} xana-node-image--panel"
                    src="${escapeHtml(src)}"
                    alt="${escapeHtml(node.image_alt || node.title || "")}"
                >
            </div>
        `;
    }

    function renderMediaProvenance(node) {
        if (!node.primary_media_node) return "";

        const media = node.primary_media_node;

        return `
            <div class="xana-media-credit">
                <a
                    href="${escapeHtml(nodeHref(media, { allNodes: [media] }))}"
                    data-node-jump="${escapeHtml(media.id)}"
                >
                    ${escapeHtml(media.title || "Media node")}
                </a>
                ${media.creator ? `<span>Creator: ${escapeHtml(media.creator)}</span>` : ""}
                ${media.created_date ? `<span>Date: ${escapeHtml(media.created_date)}</span>` : ""}
                ${media.rights_status ? `<span>Rights: ${escapeHtml(media.rights_status)}</span>` : ""}
            </div>
        `;
    }

    function renderMediaWarning(node) {
        if (!node.media_warning) return "";

        return `
            <div class="xana-media-warning">
                ${escapeHtml(node.media_warning)}
            </div>
        `;
    }

    function renderSourceInfo(node) {
        const type = node.type;
        const isSource = type === "source" || type === "publication";
        const isMedia = type === "media";
        if (!isSource && !isMedia) return "";

        const rows = [];

        if (isSource) {
            if (node.author) rows.push(`<tr><th>Author</th><td>${escapeHtml(node.author)}</td></tr>`);
            if (node.year) rows.push(`<tr><th>Year</th><td>${escapeHtml(String(node.year))}</td></tr>`);
        }
        if (isMedia) {
            if (node.creator) rows.push(`<tr><th>Creator</th><td>${escapeHtml(node.creator)}</td></tr>`);
            if (node.created_date) rows.push(`<tr><th>Date</th><td>${escapeHtml(node.created_date)}</td></tr>`);
            if (node.source_name) rows.push(`<tr><th>Source</th><td>${escapeHtml(node.source_name)}</td></tr>`);
        }
        if (node.source_url) {
            rows.push(`<tr><th>URL</th><td><a href="${escapeHtml(node.source_url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(node.source_url)}</a></td></tr>`);
        }
        if (node.rights_status) rows.push(`<tr><th>Rights</th><td>${escapeHtml(node.rights_status)}</td></tr>`);
        if (node.license) {
            const cell = node.license_url
                ? `<a href="${escapeHtml(node.license_url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(node.license)}</a>`
                : escapeHtml(node.license);
            rows.push(`<tr><th>License</th><td>${cell}</td></tr>`);
        }

        if (!rows.length) return "";

        return `<div class="xana-source-info"><table class="xana-source-table">${rows.join("")}</table></div>`;
    }

    function relationshipList(edges, otherKey, allNodes) {
        const items = edges.map((edge) => {
            const other = allNodes.find((node) => node.id === edge[otherKey]);
            if (!other) return "";

            const relDisplay = (edge.type || "related").replace(/_/g, " ");
            const weight = Math.min(5, Math.max(1, Number(edge.weight || 1)));
            const weightDots = "\u25CF".repeat(weight) + "\u25CB".repeat(5 - weight);

            return `
                <li class="xana-rel-item">
                    <a class="xana-rel-link" href="${escapeHtml(nodeHref(other, { allNodes }))}" data-node-jump="${escapeHtml(other.id)}">
                        <span class="xana-rel-title">${escapeHtml(other.title || other.id)}</span>
                        <span class="xana-rel-meta">
                            ${renderTypeBadge(other.type, "xana-type-badge--sm")}
                            <span class="xana-rel-edge-type">${escapeHtml(relDisplay)}</span>
                            <span class="xana-rel-weight" title="weight ${weight}">${weightDots}</span>
                        </span>
                    </a>
                </li>
            `;
        }).filter(Boolean);

        if (!items.length) return `<p class="xana-empty">None.</p>`;

        return `<ul class="xana-relations">${items.join("")}</ul>`;
    }

    function getNodeViolations(node, allEdges, allNodes) {
        const violations = [];
        const nodeIds = allNodes ? new Set(allNodes.map((n) => n.id)) : null;

        if (!node.type) {
            violations.push({ code: "missing_type", message: "Missing type field." });
        } else if (!VALID_NODE_TYPES.has(node.type)) {
            violations.push({ code: "invalid_type", message: `Invalid type "${node.type}". Not in schema (v0.2.0).` });
        }

        if (!node.title) {
            violations.push({ code: "missing_title", message: "Missing title." });
        }

        if (node.importance === undefined || node.importance === null || node.importance === "") {
            violations.push({ code: "missing_importance", message: "Missing importance value." });
        }

        if (!node.summary) {
            violations.push({ code: "missing_summary", message: "Missing summary." });
        }

        if (node.type !== "media" && node.image && !node.primary_media) {
            violations.push({ code: "naked_image", message: "Legacy image field without media node. Create a media node and set primary_media." });
        }

        if (node.type === "media") {
            if (!node.file) violations.push({ code: "media_missing_file", message: "Media node missing file field." });
            if (!node.alt) violations.push({ code: "media_missing_alt", message: "Media node missing alt field." });
            if (!node.rights_status) violations.push({ code: "media_missing_rights", message: "Media node missing rights_status field." });
        }

        const seenInvalidRelTypes = new Set();
        const seenDanglingTargets = new Set();
        allEdges.forEach((edge) => {
            if (edge.source !== node.id && edge.target !== node.id) return;
            const normalizedType = normalizeRelationshipType(edge.type);
            if (!normalizedType) return;
            if (!VALID_RELATIONSHIP_TYPES.has(normalizedType) && !seenInvalidRelTypes.has(normalizedType)) {
                seenInvalidRelTypes.add(normalizedType);
                violations.push({ code: "invalid_rel_type", message: `Invalid relationship type "${normalizedType}".` });
            }
            // Dangling reference: edge points to a node that doesn't exist
            if (nodeIds && edge.source === node.id && !nodeIds.has(edge.target) && !seenDanglingTargets.has(edge.target)) {
                seenDanglingTargets.add(edge.target);
                violations.push({ code: "dangling_ref", message: `Target "${edge.target}" not found.` });
            }
        });

        return violations;
    }

    function renderNodeViolations(node, allEdges, allNodes) {
        const violations = getNodeViolations(node, allEdges, allNodes);
        if (!violations.length) return "";

        return `
            <section class="xana-violations-section">
                <h2>&#9888; Schema violations (${violations.length})</h2>
                <ul class="xana-violations-list">
                    ${violations.map((v) => `<li class="xana-violation xana-violation-${escapeHtml(v.code)}">${escapeHtml(v.message)}</li>`).join("")}
                </ul>
            </section>
        `;
    }

    function formatViolationCode(code) {
        const labels = {
            missing_type: "Missing type",
            invalid_type: "Invalid type",
            missing_title: "Missing title",
            missing_importance: "Missing importance",
            missing_summary: "Missing summary",
            naked_image: "Naked image (no media node)",
            media_missing_file: "Media — missing file",
            media_missing_alt: "Media — missing alt text",
            media_missing_rights: "Media — missing rights_status",
            invalid_rel_type: "Invalid relationship type",
            dangling_ref: "Dangling reference (target not found)"
        };
        return labels[code] || code.replace(/_/g, " ");
    }

    function runSchemaAudit(state) {
        const results = [];

        state.allNodes.forEach((node) => {
            const violations = getNodeViolations(node, state.allEdgesRaw, state.allNodes);
            if (violations.length > 0) {
                results.push({ node, violations });
            }
        });

        results.sort((a, b) => b.violations.length - a.violations.length);
        state.auditResults = results;
        state.auditPassed = results.length === 0;
        renderAuditResults(state);
    }

    function openPathExplorer(state) {
        state.pathExplorer.active = true;
        state.pathExplorer.sourceQuery = state.focusId || state.pathExplorer.sourceQuery || "";
        state.pathExplorer.targetQuery = state.previousFocusId || state.pathExplorer.targetQuery || "";
        state.pathExplorer.results = [];
        state.pathExplorer.summary = "";
        state.auditMode = false;
        state.auditResults = [];
        renderPathExplorer(state);
    }

    function closePathExplorer(state) {
        state.pathExplorer.active = false;
        state.pathExplorer.results = [];
        state.pathExplorer.summary = "";

        const stageEl = document.getElementById("xana-stage");
        const pathStageEl = document.getElementById("xana-path-stage");
        if (pathStageEl) {
            pathStageEl.hidden = true;
            pathStageEl.innerHTML = "";
        }
        if (stageEl) stageEl.hidden = false;

        if (state.cy) {
            state.cy.resize();
            state.cy.fit(undefined, getFitPadding());
        }
    }

    function resolveNodeSelection(query, allNodes) {
        const raw = String(query || "").trim();
        if (!raw) return null;

        const rawLower = raw.toLowerCase();
        const normalized = normalizeSearchText(raw);

        return allNodes.find((node) => {
            if (!node) return false;

            const id = String(node.id || "").toLowerCase();
            const title = String(node.title || "");
            const titleNormalized = normalizeSearchText(title);

            return id === rawLower || titleNormalized === normalized || normalizeSearchText(node.id || "") === normalized;
        }) || null;
    }

    function buildPathOptions(allNodes) {
        return allNodes.map((node) => {
            const title = escapeHtml(node.title || node.id || "");
            const id = escapeHtml(node.id || "");
            return `<option value="${id}" label="${title}"></option>`;
        }).join("");
    }

    function buildPathGraph(allEdges, allowReverse) {
        const adjacency = new Map();

        const addEdge = (fromId, toId, edge, reversed) => {
            if (!adjacency.has(fromId)) adjacency.set(fromId, []);
            adjacency.get(fromId).push({ toId, edge, reversed });
        };

        allEdges.forEach((edge, index) => {
            const normalizedEdge = { ...edge, _edgeIndex: index };
            addEdge(normalizedEdge.source, normalizedEdge.target, normalizedEdge, false);

            if (allowReverse) {
                addEdge(normalizedEdge.target, normalizedEdge.source, normalizedEdge, true);
            }
        });

        return adjacency;
    }

    function findConnectivePaths(allEdges, sourceId, targetId, options = {}) {
        const allowReverse = options.allowReverse !== false;
        const maxDepth = Number(options.maxDepth || 6);
        const maxPaths = Number(options.maxPaths || 100);
        const adjacency = buildPathGraph(allEdges, allowReverse);
        const results = [];
        const visited = new Set([sourceId]);
        const path = [];
        const pathNodeIds = [sourceId];

        const dfs = (currentId, depth) => {
            if (results.length >= maxPaths) return;
            if (depth > maxDepth) return;

            if (currentId === targetId) {
                results.push({
                    nodes: [...pathNodeIds],
                    hops: path.map((step) => ({ ...step }))
                });
                return;
            }

            const neighbors = adjacency.get(currentId) || [];

            for (const step of neighbors) {
                if (visited.has(step.toId)) continue;

                visited.add(step.toId);
                path.push({
                    fromId: currentId,
                    toId: step.toId,
                    edge: step.edge,
                    reversed: step.reversed
                });
                pathNodeIds.push(step.toId);

                dfs(step.toId, depth + 1);

                pathNodeIds.pop();
                path.pop();
                visited.delete(step.toId);

                if (results.length >= maxPaths) return;
            }
        };

        dfs(sourceId, 0);

        return results.sort((a, b) => {
            if (a.hops.length !== b.hops.length) return a.hops.length - b.hops.length;
            return a.nodes.join(" ").localeCompare(b.nodes.join(" "));
        });
    }

    function renderPathNodeChip(node, direction = "") {
        const label = escapeHtml(node?.title || node?.id || "unknown");
        const type = escapeHtml(node?.type || "node");
        const suffix = direction ? ` <span class="xana-path-node-dir">${escapeHtml(direction)}</span>` : "";

        return `<span class="xana-path-node-chip" title="${label} (${type})">${label}${suffix}</span>`;
    }

    function renderPathExplorer(state) {
        const pathStageEl = document.getElementById("xana-path-stage");
        const auditStageEl = document.getElementById("xana-audit-stage");
        const stageEl = document.getElementById("xana-stage");

        if (!pathStageEl) return;

        if (auditStageEl) {
            auditStageEl.hidden = true;
            auditStageEl.innerHTML = "";
        }

        if (stageEl) stageEl.hidden = true;
        pathStageEl.hidden = false;

        const optionsHtml = buildPathOptions(state.allNodes);
        const pathState = state.pathExplorer;
        const sourceNode = resolveNodeSelection(pathState.sourceQuery, state.allNodes);
        const targetNode = resolveNodeSelection(pathState.targetQuery, state.allNodes);
        pathStageEl.innerHTML = `
            <div class="xana-path-page">
                <div class="xana-path-page-header">
                    <div class="xana-path-header-row">
                        <div>
                            <h2 class="xana-path-title">Connective Path Explorer</h2>
                            <p class="xana-path-summary">Trace the connective chain between two nodes and inspect every hop that links them.</p>
                        </div>
                        <button type="button" class="xana-path-dismiss" data-path-dismiss>&larr; Back to graph</button>
                    </div>
                </div>

                <div class="xana-path-page-body">
                    <form class="xana-path-form" data-path-form>
                        <datalist id="xana-path-node-list">
                            ${optionsHtml}
                        </datalist>

                        <div class="xana-path-grid">
                            <label class="xana-path-field">
                                <span>From</span>
                                <input type="text" list="xana-path-node-list" data-path-source value="${escapeHtml(pathState.sourceQuery)}" placeholder="Node id or title">
                                <button type="button" class="xana-path-field-btn" data-path-use-focus="source">Use focus</button>
                            </label>

                            <label class="xana-path-field">
                                <span>To</span>
                                <input type="text" list="xana-path-node-list" data-path-target value="${escapeHtml(pathState.targetQuery)}" placeholder="Node id or title">
                                <button type="button" class="xana-path-field-btn" data-path-use-focus="target">Use focus</button>
                            </label>
                        </div>

                        <div class="xana-path-actions">
                            <label class="xana-path-toggle">
                                <input type="checkbox" data-path-allow-reverse ${pathState.allowReverse ? "checked" : ""}>
                                <span>Allow reverse hops</span>
                            </label>
                            <button type="button" class="xana-path-swap" data-path-swap>Swap</button>
                            <button type="submit" class="xana-path-trace">Trace paths</button>
                        </div>
                    </form>

                    <div class="xana-path-meta" aria-live="polite">
                        ${sourceNode ? `From <strong>${escapeHtml(sourceNode.title || sourceNode.id)}</strong>` : `<span>Choose a source node.</span>`}
                        ${targetNode ? `To <strong>${escapeHtml(targetNode.title || targetNode.id)}</strong>` : `<span>Choose a target node.</span>`}
                    </div>

                    ${renderPathResults(state, sourceNode, targetNode)}
                </div>
            </div>
        `;

        const sourceInput = pathStageEl.querySelector("[data-path-source]");
        const targetInput = pathStageEl.querySelector("[data-path-target]");

        sourceInput?.addEventListener("input", () => {
            pathState.sourceQuery = sourceInput.value;
        });

        targetInput?.addEventListener("input", () => {
            pathState.targetQuery = targetInput.value;
        });

        pathStageEl.querySelector("[data-path-form]")?.addEventListener("submit", (event) => {
            event.preventDefault();

            const sourceValue = sourceInput?.value || "";
            const targetValue = targetInput?.value || "";
            const reverseToggle = pathStageEl.querySelector("[data-path-allow-reverse]");

            pathState.sourceQuery = sourceValue;
            pathState.targetQuery = targetValue;
            pathState.allowReverse = Boolean(reverseToggle?.checked);

            runPathExplorer(state);
        });

        pathStageEl.querySelector("[data-path-dismiss]")?.addEventListener("click", () => {
            closePathExplorer(state);
        });

        pathStageEl.querySelectorAll("[data-path-use-focus]").forEach((button) => {
            button.addEventListener("click", () => {
                const slot = button.getAttribute("data-path-use-focus");
                if (slot === "source") {
                    pathState.sourceQuery = state.focusId || "";
                    if (sourceInput) sourceInput.value = pathState.sourceQuery;
                }
                if (slot === "target") {
                    pathState.targetQuery = state.focusId || "";
                    if (targetInput) targetInput.value = pathState.targetQuery;
                }
            });
        });

        pathStageEl.querySelector("[data-path-swap]")?.addEventListener("click", () => {
            const nextSource = pathState.targetQuery;
            const nextTarget = pathState.sourceQuery;
            pathState.sourceQuery = nextSource;
            pathState.targetQuery = nextTarget;
            if (sourceInput) sourceInput.value = nextSource;
            if (targetInput) targetInput.value = nextTarget;
        });

        pathStageEl.querySelector("[data-path-allow-reverse]")?.addEventListener("change", (event) => {
            pathState.allowReverse = Boolean(event.target.checked);
        });
    }

    function runPathExplorer(state) {
        const pathState = state.pathExplorer;
        const sourceNode = resolveNodeSelection(pathState.sourceQuery, state.allNodes);
        const targetNode = resolveNodeSelection(pathState.targetQuery, state.allNodes);

        if (!sourceNode || !targetNode) {
            pathState.results = [];
            pathState.summary = "Choose valid source and target nodes.";
            renderPathExplorer(state);
            return;
        }

        if (sourceNode.id === targetNode.id) {
            pathState.results = [];
            pathState.summary = "Source and target are the same node.";
            renderPathExplorer(state);
            return;
        }

        const paths = findConnectivePaths(state.allEdges, sourceNode.id, targetNode.id, {
            allowReverse: pathState.allowReverse,
            maxDepth: pathState.maxDepth,
            maxPaths: pathState.maxPaths
        });

        pathState.results = paths;

        if (!paths.length) {
            pathState.summary = `No connective path found within ${pathState.maxDepth} hops.`;
        } else if (paths.length >= pathState.maxPaths) {
            pathState.summary = `Showing the first ${pathState.maxPaths} paths within ${pathState.maxDepth} hops.`;
        } else {
            pathState.summary = `${paths.length} connective path${paths.length === 1 ? "" : "s"} found within ${pathState.maxDepth} hops.`;
        }

        renderPathExplorer(state);
    }

    function renderPathResults(state, sourceNode, targetNode) {
        const pathState = state.pathExplorer;

        if (!sourceNode || !targetNode) {
            return `<p class="xana-path-empty">Pick a source and target node, then trace the connective path.</p>`;
        }

        if (sourceNode.id === targetNode.id) {
            return `<p class="xana-path-empty">Choose two different nodes.</p>`;
        }

        if (!pathState.results.length) {
            return `<p class="xana-path-empty">${escapeHtml(pathState.summary || "No connective path found yet.")}</p>`;
        }

        return `
            <div class="xana-path-results">
                <p class="xana-path-summary-line">${escapeHtml(pathState.summary || "")}</p>
                <ol class="xana-path-list">
                    ${pathState.results.map((path, index) => renderPathCard(path, index, state.allNodes)).join("")}
                </ol>
            </div>
        `;
    }

    function renderPathCard(path, index, allNodes) {
        const nodeById = new Map(allNodes.map((node) => [node.id, node]));
        const firstNode = nodeById.get(path.nodes[0]);
        const lastNode = nodeById.get(path.nodes[path.nodes.length - 1]);

        const hopsHtml = path.hops.map((hop, hopIndex) => {
            const fromNode = nodeById.get(hop.fromId);
            const toNode = nodeById.get(hop.toId);
            const relationLabel = escapeHtml((hop.edge.type || "related").replace(/_/g, " "));
            const arrow = hop.reversed ? "&larr;" : "&rarr;";
            const weight = Number(hop.edge.weight || 1);

            return `
                <li class="xana-path-hop">
                    <span class="xana-path-hop-index">${hopIndex + 1}</span>
                    <span class="xana-path-hop-from">${renderPathNodeChip(fromNode, "from")}</span>
                    <span class="xana-path-hop-arrow">${arrow}</span>
                    <span class="xana-path-hop-rel" title="weight ${weight}">${relationLabel}</span>
                    <span class="xana-path-hop-arrow">${arrow}</span>
                    <span class="xana-path-hop-to">${renderPathNodeChip(toNode, hop.reversed ? "reverse" : "to")}</span>
                </li>
            `;
        }).join("");

        return `
            <li class="xana-path-card">
                <div class="xana-path-card-header">
                    <div>
                        <h3>Path ${index + 1}</h3>
                        <p>${path.hops.length} hop${path.hops.length === 1 ? "" : "s"}</p>
                    </div>
                    <div class="xana-path-card-endpoints">
                        ${renderPathNodeChip(firstNode)}
                        <span>&rarr;</span>
                        ${renderPathNodeChip(lastNode)}
                    </div>
                </div>
                <ol class="xana-path-hop-list">
                    ${hopsHtml}
                </ol>
            </li>
        `;
    }

    function renderAuditResults(state) {
        const stageEl = document.getElementById("xana-stage");
        const auditStageEl = document.getElementById("xana-audit-stage");
        const pathStageEl = document.getElementById("xana-path-stage");
        const auditRunBtn = graphEl.querySelector("[data-audit-run]");
        const auditClearBtn = graphEl.querySelector("[data-audit-clear]");
        const metaEl = graphEl.querySelector(".xana-audit-meta");

        if (!auditStageEl) return;

        if (!state.auditResults.length) {
            state.auditMode = false;

            if (stageEl) stageEl.hidden = false;
            auditStageEl.hidden = true;
            auditStageEl.innerHTML = "";
            if (pathStageEl) {
                pathStageEl.hidden = true;
                pathStageEl.innerHTML = "";
            }

            if (auditRunBtn) {
                auditRunBtn.classList.remove("audit-active", "audit-pass", "audit-fail");
                // Show pass/fail icon if we just ran the audit (auditPassed is set),
                // otherwise restore the default warning icon.
                if (state.auditPassed === true) {
                    auditRunBtn.innerHTML = "&#x2713;"; // ✓
                    auditRunBtn.classList.add("audit-pass");
                    auditRunBtn.title = "Audit passed \u2014 no violations";
                } else {
                    auditRunBtn.innerHTML = "&#x26A0;";
                    auditRunBtn.title = "Run schema audit";
                }
            }
            if (auditClearBtn) auditClearBtn.hidden = true;
            if (metaEl) { metaEl.textContent = ""; metaEl.hidden = true; }

            if (state.cy) {
                state.cy.resize();
                state.cy.fit(undefined, getFitPadding());
            }

            return;
        }

        state.auditMode = true;

        if (stageEl) stageEl.hidden = true;
        auditStageEl.hidden = false;
        if (pathStageEl) {
            pathStageEl.hidden = true;
            pathStageEl.innerHTML = "";
        }

        const total = state.auditResults.length;
        const violationCount = state.auditResults.reduce((sum, r) => sum + r.violations.length, 0);

        if (auditRunBtn) {
            auditRunBtn.classList.remove("audit-pass");
            auditRunBtn.classList.add("audit-active", "audit-fail");
            auditRunBtn.innerHTML = "&#x2715;"; // ✕
            auditRunBtn.title = `Audit: ${total} node${total === 1 ? "" : "s"} \u00B7 ${violationCount} issue${violationCount === 1 ? "" : "s"}`;
        }

        if (auditClearBtn) auditClearBtn.hidden = false;

        if (metaEl) {
            metaEl.textContent = `${total} node${total === 1 ? "" : "s"} · ${violationCount} issue${violationCount === 1 ? "" : "s"}`;
            metaEl.hidden = false;
        }

        // Group violations by code
        const byCode = {};
        state.auditResults.forEach(({ node, violations }) => {
            violations.forEach((v) => {
                if (!byCode[v.code]) byCode[v.code] = [];
                byCode[v.code].push({ node, message: v.message });
            });
        });

        const sortedGroups = Object.entries(byCode).sort((a, b) => b[1].length - a[1].length);

        auditStageEl.innerHTML = `
            <div class="xana-audit-page">
                <div class="xana-audit-page-header">
                    <div class="xana-audit-header-row">
                        <div>
                            <h2 class="xana-audit-title">Schema Audit</h2>
                            <p class="xana-audit-summary">${total} node${total === 1 ? "" : "s"} with violations &middot; ${violationCount} total issue${violationCount === 1 ? "" : "s"}</p>
                        </div>
                        <button type="button" class="xana-audit-dismiss" data-audit-dismiss>&#8592; Back to graph</button>
                    </div>
                </div>
                <div class="xana-audit-page-body">
                    ${sortedGroups.map(([code, items]) => `
                        <section class="xana-audit-group">
                            <h3 class="xana-audit-group-title">
                                ${escapeHtml(formatViolationCode(code))}
                                <span class="xana-audit-count">${items.length}</span>
                            </h3>
                            <ul class="xana-audit-node-list">
                                ${items.map(({ node, message }) => `
                                    <li>
                                        <button type="button" class="xana-audit-node-btn" data-audit-jump="${escapeHtml(node.id)}">
                                            <span class="xana-audit-node-title">${escapeHtml(node.title || node.id)}</span>
                                            <span class="xana-audit-node-type">${escapeHtml(node.type || "unknown")}</span>
                                            <span class="xana-audit-node-msg">${escapeHtml(message)}</span>
                                        </button>
                                    </li>
                                `).join("")}
                            </ul>
                        </section>
                    `).join("")}
                </div>
            </div>
        `;

        auditStageEl.querySelectorAll("[data-audit-jump]").forEach((btn) => {
            btn.addEventListener("click", () => {
                const id = btn.getAttribute("data-audit-jump");
                state.auditMode = false;
                state.auditResults = [];

                if (stageEl) stageEl.hidden = false;
                if (auditStageEl) {
                    auditStageEl.hidden = true;
                    auditStageEl.innerHTML = "";
                }

                if (auditRunBtn) {
                    auditRunBtn.classList.remove("audit-active", "audit-pass", "audit-fail");
                    auditRunBtn.innerHTML = "&#x26A0;";
                    auditRunBtn.title = "Run schema audit";
                }
                if (auditClearBtn) auditClearBtn.hidden = true;
                if (metaEl) { metaEl.textContent = ""; metaEl.hidden = true; }

                travelToNode(id, state, true);
            });
        });

        auditStageEl.querySelector("[data-audit-dismiss]")?.addEventListener("click", () => {
            state.auditMode = false;
            state.auditResults = [];

            if (stageEl) stageEl.hidden = false;
            if (auditStageEl) {
                auditStageEl.hidden = true;
                auditStageEl.innerHTML = "";
            }

            if (auditRunBtn) {
                auditRunBtn.classList.remove("audit-active", "audit-pass", "audit-fail");
                auditRunBtn.innerHTML = "&#x26A0;";
                auditRunBtn.title = "Run schema audit";
            }
            if (auditClearBtn) auditClearBtn.hidden = true;
            if (metaEl) { metaEl.textContent = ""; metaEl.hidden = true; }

            if (state.cy) {
                state.cy.resize();
                state.cy.fit(undefined, getFitPadding());
            }
        });
    }

    function normalizePanelLinks(state) {
        const nodeById = new Map(state.allNodes.map((n) => [n.id, n]));

        panelEl.querySelectorAll("a").forEach((link) => {
            const href = link.getAttribute("href");

            if (!href || href.startsWith("#")) return;
            if (link.hasAttribute("data-node-jump")) return;

            const protocolTarget = resolveProtocolAddress(href, state);
            if (protocolTarget) {
                link.setAttribute("href", nodeHref(protocolTarget.nodeId, state));
                link.dataset.nodeJump = protocolTarget.nodeId;
                if (protocolTarget.fragmentId) {
                    link.dataset.fragmentJump = protocolTarget.fragmentId;
                }

                link.addEventListener("click", (event) => {
                    event.preventDefault();
                    closeTransientUi(state, { clearSearch: true });
                    state.pendingFragmentHighlight = protocolTarget.fragmentId
                        ? {
                            nodeId: protocolTarget.nodeId,
                            fragmentId: protocolTarget.fragmentId,
                            fragment: protocolTarget.fragment
                        }
                        : null;
                    travelToNode(protocolTarget.nodeId, state, true);
                    if (protocolTarget.nodeId === state.focusId) {
                        highlightPendingFragment(state);
                    }
                });
                return;
            }

            // Primary match: compare normalized URL paths (works for absolute hrefs).
            let matchingNode = state.allNodes.find((node) => {
                return normalizePath(node.url) === normalizePath(href);
            });

            // Fallback: treat type-aware routes and old "node/<id>" routes as
            // local node links.
            if (!matchingNode) {
                const stripped = href.replace(/^\//, "").replace(/\/$/, "");
                const routeParts = stripped.split("/");
                const candidateId = routeParts.length >= 2 ? routeParts.at(-1) : stripped;
                matchingNode = nodeById.get(candidateId);
            }

            if (matchingNode) {
                link.setAttribute("href", nodeHref(matchingNode, state));

                link.addEventListener("click", (event) => {
                    event.preventDefault();
                    closeTransientUi(state, { clearSearch: true });
                    travelToNode(matchingNode.id, state, true);
                });

                return;
            }

            if (isExternalUrl(href)) {
                link.setAttribute("target", "_blank");
                link.setAttribute("rel", "noopener noreferrer");
            }
        });

        panelEl.querySelectorAll("[data-node-jump]").forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();

                const id = link.getAttribute("data-node-jump");
                closeTransientUi(state, { clearSearch: true });
                travelToNode(id, state, true);
            });
        });

        // Persist connections open/closed state across panel re-renders
        const connectionsEl = panelEl.querySelector(".xana-connections");
        if (connectionsEl) {
            connectionsEl.addEventListener("toggle", () => {
                saveSetting(STORAGE_KEYS.connectionsOpen, connectionsEl.open);
            });
        }
    }

    let lastTrackedNodeId = null;
    let activeNode = null;
    let activeNodeStartedAt = 0;

    function flushNodeTiming() {
        if (!activeNode || typeof window.gtag !== "function") return;

        const durationMs = Date.now() - activeNodeStartedAt;
        if (durationMs < 3000) return;

        window.gtag("event", "node_timing", {
            node_id: activeNode.id,
            node_title: activeNode.title || activeNode.id,
            node_type: activeNode.type || "node",
            engagement_time_msec: durationMs,
            value: Math.round(durationMs / 1000)
        });
    }

    function trackNodeView(node) {
        if (!node || typeof window.gtag !== "function") return;
        if (node.id === lastTrackedNodeId) return;

        flushNodeTiming();

        lastTrackedNodeId = node.id;
        activeNode = node;
        activeNodeStartedAt = Date.now();

        const title = `${node.title || node.id} · XanaNode`;
        const pagePath = `${window.location.pathname}${window.location.search}` || "/";
        document.title = title;

        window.gtag("event", "page_view", {
            page_title: title,
            page_location: window.location.href,
            page_path: pagePath,
            node_id: node.id,
            node_title: node.title || node.id,
            node_type: node.type || "node"
        });
    }

    window.addEventListener("beforeunload", flushNodeTiming);
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
            flushNodeTiming();
        }
    });

    function trackSearch(query, resultsCount) {
        if (!query || typeof window.gtag !== "function") return;

        window.gtag("event", "search", {
            search_term: query,
            results_count: resultsCount
        });
    }

    function makeResizable(state) {
        const app = document.querySelector(".xana-app");

        if (!app || document.querySelector(".xana-resizer")) return;

        const resizer = document.createElement("div");
        resizer.className = "xana-resizer";
        app.insertBefore(resizer, panelEl);

        let isDragging = false;
        let raf = null;

        resizer.addEventListener("mousedown", () => {
            if (isMobileLayout()) return;

            isDragging = true;
            document.body.classList.add("is-resizing");
        });

        window.addEventListener("mouseup", () => {
            if (!isDragging) return;

            isDragging = false;
            document.body.classList.remove("is-resizing");

            const width = panelEl.getBoundingClientRect().width;
            saveSetting(STORAGE_KEYS.panelWidth, width);

            if (state.cy) {
                state.cy.resize();
                state.cy.fit(undefined, getFitPadding());
            }
        });

        window.addEventListener("mousemove", (event) => {
            if (!isDragging) return;

            if (raf) cancelAnimationFrame(raf);

            raf = requestAnimationFrame(() => {
                if (isMobileLayout()) return;

                const panelWidth = Math.max(320, Math.min(1000, window.innerWidth - event.clientX));
                app.style.gridTemplateColumns = `minmax(360px, 1fr) 8px ${panelWidth}px`;

                if (state.cy) {
                    state.cy.resize();
                }
            });
        });
    }

    function restorePanelWidth(state) {
        const app = document.querySelector(".xana-app");
        const savedWidth = loadSetting(STORAGE_KEYS.panelWidth, null);

        if (!app || !savedWidth || isMobileLayout()) return;

        const width = Math.max(320, Math.min(1000, Number(savedWidth)));
        app.style.gridTemplateColumns = `minmax(360px, 1fr) 8px ${width}px`;

        window.setTimeout(() => {
            if (state.cy) {
                state.cy.resize();
                state.cy.fit(undefined, getFitPadding());
            }
        }, 50);
    }

    function applySavedViewportOrFit(cy) {
        const savedZoom = loadSetting(STORAGE_KEYS.graphZoom, null);
        const savedPan = loadSetting(STORAGE_KEYS.graphPan, null);

        if (
            savedZoom &&
            savedPan &&
            typeof savedPan.x === "number" &&
            typeof savedPan.y === "number" &&
            !isMobileLayout()
        ) {
            cy.zoom(savedZoom);
            cy.pan(savedPan);
        } else {
            cy.fit(undefined, getFitPadding());
        }
    }

    function updateUrl(nodeId, replace) {
        if (!nodeId) return;

        const node = window.__xanaAllNodes?.find((candidate) => candidate.id === nodeId);
        const url = new URL(window.location.href);
        url.pathname = nodeHref(node || { id: nodeId, type: "node" }, { allNodes: window.__xanaAllNodes || [] });
        url.search = "";

        if (replace) {
            window.history.replaceState({ node: nodeId }, "", url);
        } else {
            window.history.pushState({ node: nodeId }, "", url);
        }

        notifyStudioNodeSelection(nodeId);
    }

    function notifyStudioNodeSelection(nodeId) {
        if (!nodeId || window.parent === window) return;

        window.parent.postMessage({
            source: "xananode-preview",
            type: "node-selected",
            nodeId,
            path: nodeHref(window.__xanaAllNodes?.find((node) => node.id === nodeId) || { id: nodeId, type: "node" }, { allNodes: window.__xanaAllNodes || [] }),
            url: window.location.href
        }, "*");
    }

    function nodeIdFromUrl(allNodes = []) {
        const pathname = window.location.pathname.replace(/\/$/, "");
        const protocolPath = pathname.replace(/^\//, "");
        if (/^[a-z][a-z0-9_-]*(\.[a-z][a-z0-9_-]*)*:[a-z][a-z0-9_-]*\/.+/i.test(protocolPath)) {
            return `${protocolPath}${window.location.hash || ""}`;
        }
        const match = pathname.match(/^\/node\/(.+)$/);
        if (match) return decodeURIComponent(match[1]);
        const matchingNode = allNodes.find((node) => normalizePath(node.url) === normalizePath(pathname));
        if (matchingNode) return matchingNode.id;

        const parts = pathname.replace(/^\//, "").split("/");
        if (parts.length >= 2) {
            try {
                const candidateId = decodeURIComponent(parts.at(-1));
                if (allNodes.some((node) => node.id === candidateId)) return candidateId;
            } catch {
                const candidateId = parts.at(-1);
                if (allNodes.some((node) => node.id === candidateId)) return candidateId;
            }
        }

        const params = new URLSearchParams(window.location.search);
        return params.get("node") || params.get("ref");
    }

    function getFitPadding() {
        return isMobileLayout() ? 42 : 90;
    }

    function isMobileLayout() {
        return window.matchMedia("(max-width: 900px)").matches;
    }

    function isExternalUrl(href) {
        try {
            const url = new URL(href, window.location.origin);
            return url.origin !== window.location.origin;
        } catch {
            return false;
        }
    }

    function normalizePath(path) {
        try {
            return new URL(path, window.location.origin).pathname.replace(/\/$/, "");
        } catch {
            return String(path || "").replace(/\/$/, "");
        }
    }

    function nodeHref(nodeOrId, state = {}) {
        const id = typeof nodeOrId === "string" ? nodeOrId : nodeOrId?.id;
        if (!id) return "/";

        const node = typeof nodeOrId === "string"
            ? state.allNodes?.find((candidate) => candidate.id === nodeOrId)
            : nodeOrId;

        if (node?.url) return node.url;
        const typeSegment = slugSegment(node?.type || "node");
        return `/${typeSegment}/${encodeURIComponent(id)}/`;
    }

    function slugSegment(value) {
        return String(value || "node")
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9._-]+/g, "-")
            .replace(/^-+|-+$/g, "") || "node";
    }

    function normalizeSearchText(value) {
        return String(value || "")
            .toLowerCase()
            .normalize("NFKD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^\w\s.-]/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    }

    function tokenize(value) {
        return normalizeSearchText(value)
            .split(/\s+/)
            .map((token) => token.trim())
            .filter((token) => token.length >= 2);
    }

    function stripHtml(value) {
        const div = document.createElement("div");
        div.innerHTML = String(value || "");
        return div.textContent || div.innerText || "";
    }

    function edgeId(edge, index) {
        return `edge-${index}-${edge.source}-${edge.target}-${edge.type || "related"}-${edge.weight || 1}`;
    }

    function normalizeRelationshipType(type) {
        const rawType = String(type || "").trim();
        const canonicalType = RELATIONSHIP_TYPE_ALIASES[rawType] || rawType;

        if (VALID_RELATIONSHIP_TYPES.has(canonicalType)) {
            return canonicalType;
        }

        return "related_to";
    }

    function normalizeRelationshipEdge(edge) {
        const normalizedType = normalizeRelationshipType(edge?.type);
        const normalizedEdge = { ...edge, type: normalizedType };

        if (normalizedType === "related_to" && edge?.type && edge.type !== "related_to") {
            normalizedEdge.visibility = "background";

            const weight = Number(edge.weight || 2);
            normalizedEdge.weight = Number.isFinite(weight) ? Math.min(weight, 2) : 2;
        }

        return normalizedEdge;
    }

    function debounce(fn, delay) {
        let timer = null;

        return function (...args) {
            window.clearTimeout(timer);
            timer = window.setTimeout(() => fn.apply(this, args), delay);
        };
    }

    function saveSetting(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch {
            // Ignore storage failures.
        }
    }

    function loadSetting(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : fallback;
        } catch {
            return fallback;
        }
    }

    function loadDisplaySettings() {
        return {
            colorTheme: loadSetting(STORAGE_KEYS.colorTheme, DISPLAY_DEFAULTS.colorTheme),
            uiDensity: loadSetting(STORAGE_KEYS.uiDensity, DISPLAY_DEFAULTS.uiDensity),
            graphAtmosphere: loadSetting(STORAGE_KEYS.graphAtmosphere, DISPLAY_DEFAULTS.graphAtmosphere),
            ttsNarrator: loadSetting(STORAGE_KEYS.ttsNarrator, DISPLAY_DEFAULTS.ttsNarrator),
            ttsVoice: loadSetting(STORAGE_KEYS.ttsVoice, DISPLAY_DEFAULTS.ttsVoice),
            ttsRate: clampNumber(loadSetting(STORAGE_KEYS.ttsRate, DISPLAY_DEFAULTS.ttsRate), 0.65, 1.35, DISPLAY_DEFAULTS.ttsRate),
            ttsPitch: clampNumber(loadSetting(STORAGE_KEYS.ttsPitch, DISPLAY_DEFAULTS.ttsPitch), 0.75, 1.35, DISPLAY_DEFAULTS.ttsPitch),
            ttsDetail: loadSetting(STORAGE_KEYS.ttsDetail, DISPLAY_DEFAULTS.ttsDetail)
        };
    }

    function clampNumber(value, min, max, fallback) {
        const number = Number(value);
        if (!Number.isFinite(number)) return fallback;
        return Math.min(max, Math.max(min, number));
    }

    function applyDisplaySettings(settings) {
        const resolved = { ...DISPLAY_DEFAULTS, ...(settings || {}) };
        document.documentElement.dataset.xanaTheme = resolved.colorTheme;
        document.documentElement.dataset.xanaDensity = resolved.uiDensity;
        document.documentElement.dataset.xanaAtmosphere = resolved.graphAtmosphere;
    }

    function updateDisplaySettingButtons(state) {
        const settings = { ...DISPLAY_DEFAULTS, ...(state.displaySettings || {}) };
        graphEl.querySelectorAll("[data-display-setting]").forEach((button) => {
            const key = button.getAttribute("data-display-setting");
            const value = button.getAttribute("data-value");
            const active = settings[key] === value;
            button.classList.toggle("active", active);
            button.setAttribute("aria-pressed", active ? "true" : "false");
        });
    }

    function clearSearchUi(state) {
        const input = graphEl.querySelector("#xana-search-input");
        const clearButton = graphEl.querySelector("[data-search-clear]");

        state.searchQuery = "";
        state.searchResults = [];
        saveSetting(STORAGE_KEYS.searchQuery, "");
        if (input) input.value = "";
        if (clearButton) clearButton.hidden = true;
        renderSearchResults(state);
    }

    function closeTransientUi(state, options = {}) {
        const settingsPanel = graphEl.querySelector(".xana-settings-panel");
        const settingsToggle = graphEl.querySelector("[data-settings-toggle]");
        const filterPanel = graphEl.querySelector(".xana-filter-popover");
        const filterToggle = graphEl.querySelector("[data-filter-toggle]");
        const pathStage = graphEl.querySelector("#xana-path-stage");
        const stage = graphEl.querySelector("#xana-stage");

        if (options.clearSearch) clearSearchUi(state);
        if (settingsPanel) settingsPanel.hidden = true;
        if (settingsToggle) settingsToggle.classList.remove("active");
        if (filterPanel) filterPanel.hidden = true;
        if (filterToggle) filterToggle.classList.remove("active");

        if (state.pathExplorer) {
            state.pathExplorer.active = false;
            state.pathExplorer.results = [];
            state.pathExplorer.summary = "";
        }

        if (pathStage) {
            pathStage.hidden = true;
            pathStage.innerHTML = "";
        }
        if (stage && !state.auditMode) stage.hidden = false;
    }

    function startSearchVerbRotation() {
        const input = graphEl.querySelector("#xana-search-input");
        if (!input || input.dataset.verbRotation === "1") return;

        input.dataset.verbRotation = "1";
        let promptIndex = 0;
        let charIndex = SEARCH_PROMPTS[0].length;
        let direction = -1;
        let pauseUntil = performance.now() + 1500;
        window.setInterval(() => {
            if (document.activeElement === input || input.value.trim()) return;

            const now = performance.now();
            if (now < pauseUntil) return;

            const prompt = SEARCH_PROMPTS[promptIndex];
            charIndex += direction;
            input.setAttribute("placeholder", prompt.slice(0, Math.max(0, charIndex)));

            if (charIndex <= 0) {
                direction = 1;
                promptIndex = (promptIndex + 1) % SEARCH_PROMPTS.length;
                pauseUntil = now + 260;
            } else if (charIndex >= SEARCH_PROMPTS[promptIndex].length) {
                direction = -1;
                pauseUntil = now + 1600;
            }
        }, 48);
    }

    function escapeHtml(value) {
        return String(value ?? "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

    function buildTypeColorMap(nodeTypesData) {
        const map = new Map();

        if (nodeTypesData?.node_types) {
            nodeTypesData.node_types.forEach((entry) => {
                if (entry?.type && entry?.color) {
                    map.set(entry.type, entry.color);
                }
            });
        }

        return map;
    }

    function getTypeColor(type, nodeTypeColors) {
        const key = (type || "").toLowerCase();
        return nodeTypeColors.get(key) || TYPE_PALETTE[key] || TYPE_PALETTE.concept;
    }

    function nodeTypeStyle(type, nodeTypeColors, overrides = {}) {
        const colors = getTypeColor(type, nodeTypeColors);

        return {
            "background-color": colors.bg,
            color: colors.fg || "#f8fafc",
            "text-outline-color": colors.outline || colors.bg,
            ...overrides
        };
    }

    function getCyStyle(nodeTypeColors) {
        return [
            {
                selector: "node",
                style: {
                    label: "data(title)",
                    "text-wrap": "wrap",
                    "text-max-width": 88,
                    "text-valign": "center",
                    "text-halign": "center",
                    color: "#f8fafc",
                    "font-family": "IBM Plex Sans, Segoe UI, sans-serif",
                    "font-size": 13,
                    "font-weight": 600,
                    "text-outline-width": 3,
                    "text-outline-color": "#05070a",
                    "background-color": "#55d6be",
                    "border-width": 3,
                    "border-color": "#dffcf6",
                    width: 92,
                    height: 92
                }
            },
            {
                selector: ".has-image",
                style: {
                    shape: "round-rectangle",
                    "background-color": "#111827",
                    "background-image": "data(image)",
                    "background-fit": "contain",
                    "background-clip": "node",
                    "background-repeat": "no-repeat",
                    "background-position-x": "50%",
                    "background-position-y": "50%",
                    "background-opacity": 1,
                    "border-color": "#55d6be",
                    "border-width": 4,
                    "text-valign": "bottom",
                    "text-margin-y": 8,
                    "text-background-color": "#05070a",
                    "text-background-opacity": 0.78,
                    "text-background-padding": 4,
                    "text-background-shape": "roundrectangle"
                }
            },
            {
                selector: ".has-image.image-contain",
                style: {
                    "background-fit": "contain",
                    "background-position-x": "50%",
                    "background-position-y": "50%"
                }
            },
            {
                selector: ".focused-node",
                style: {
                    width: 160,
                    height: 160,
                    "font-size": 16,
                    "text-max-width": 150,
                    "border-width": 8,
                    "border-color": "#ffffff",
                    "z-index": 999
                }
            },
            {
                selector: ".distance-1",
                style: {
                    width: 118,
                    height: 118,
                    "font-size": 13,
                    "text-max-width": 112,
                    opacity: 0.95,
                    "z-index": 500
                }
            },
            {
                selector: ".distance-2",
                style: {
                    width: 78,
                    height: 78,
                    "font-size": 10,
                    "text-max-width": 74,
                    opacity: 0.58,
                    "z-index": 100
                }
            },
            {
                selector: ".distance-3",
                style: {
                    width: 52,
                    height: 52,
                    "font-size": 8,
                    "text-max-width": 50,
                    opacity: 0.28,
                    "z-index": 10
                }
            },
            {
                selector: ".search-match",
                style: {
                    "border-color": "#ffd166",
                    "border-width": 7
                }
            },
            {
                selector: ".essay",
                style: nodeTypeStyle("essay", nodeTypeColors)
            },
            {
                selector: ".concept",
                style: nodeTypeStyle("concept", nodeTypeColors)
            },
            {
                selector: ".source",
                style: nodeTypeStyle("source", nodeTypeColors, {
                    shape: "round-rectangle",
                    width: 130,
                    height: 72,
                    "text-max-width": 190
                })
            },
            {
                selector: ".person",
                style: nodeTypeStyle("person", nodeTypeColors)
            },
            {
                selector: ".observation",
                style: nodeTypeStyle("observation", nodeTypeColors)
            },
            {
                selector: ".trail",
                style: nodeTypeStyle("trail", nodeTypeColors)
            },
            {
                selector: ".project",
                style: nodeTypeStyle("project", nodeTypeColors)
            },
            {
                selector: ".artifact",
                style: nodeTypeStyle("artifact", nodeTypeColors)
            },
            {
                selector: ".organization",
                style: nodeTypeStyle("organization", nodeTypeColors, {
                    shape: "round-rectangle",
                    width: 130,
                    height: 72,
                    "text-max-width": 190
                })
            },
            {
                selector: ".media",
                style: nodeTypeStyle("media", nodeTypeColors, {
                    "border-color": "#55d6be"
                })
            },
            {
                selector: ".media.has-image",
                style: {
                    "background-color": "#111827",
                    "border-color": "#55d6be"
                }
            },
            {
                selector: ".focused-node.has-image",
                style: {
                    width: 118,
                    height: 118,
                    opacity: 1
                }
            },
            {
                selector: ".distance-1.has-image",
                style: {
                    width: 118,
                    height: 118,
                    opacity: 1
                }
            },
            {
                selector: ".distance-2.has-image",
                style: {
                    width: 118,
                    height: 118,
                    opacity: 0.92
                }
            },
            {
                selector: ".distance-3.has-image",
                style: {
                    width: 118,
                    height: 118,
                    opacity: 0.82
                }
            },
            {
                selector: "edge",
                style: {
                    width: "mapData(weight, 1, 5, 1, 5)",
                    "line-color": "#465166",
                    "target-arrow-color": "#465166",
                    "target-arrow-shape": "triangle",
                    "curve-style": "bezier",
                    label: "data(label)",
                    "font-family": "IBM Plex Sans, Segoe UI, sans-serif",
                    "font-size": 11,
                    "font-weight": 600,
                    color: "#e2e8f0",
                    "text-outline-width": 3,
                    "text-outline-color": "#05070a",
                    opacity: 0.62
                }
            },
            {
                selector: ".focus-edge",
                style: {
                    width: "mapData(weight, 1, 5, 3, 7)",
                    opacity: 0.95,
                    "line-color": "#55d6be",
                    "target-arrow-color": "#55d6be",
                    "font-size": 13,
                    "font-weight": 700,
                    color: "#f0fdfa",
                    "text-outline-width": 3,
                    "text-outline-color": "#05070a"
                }
            },
            {
                selector: ".mist-edge",
                style: {
                    opacity: 0.08,
                    label: ""
                }
            },
            {
                selector: ".travel-dim",
                style: {
                    opacity: 0.08
                }
            },
            {
                selector: ".travel-origin",
                style: {
                    opacity: 1,
                    "border-color": "#ffd166",
                    "border-width": 7,
                    "z-index": 900
                }
            },
            {
                selector: ".travel-destination",
                style: {
                    opacity: 1,
                    "border-color": "#ffffff",
                    "border-width": 9,
                    "z-index": 999
                }
            },
            {
                selector: ".travel-path",
                style: {
                    opacity: 1,
                    width: 7,
                    "line-color": "#ffd166",
                    "target-arrow-color": "#ffd166",
                    "z-index": 950
                }
            },
            {
                selector: ".pre-exit",
                style: {
                    opacity: 0.02
                }
            },
            {
                selector: ".claim",
                style: nodeTypeStyle("claim", nodeTypeColors, {
                    shape: "round-rectangle",
                    width: 155,
                    height: 68,
                    "text-max-width": 218
                })
            },
            // Compound overrides — claim dimensions per distance (placed after distance rules so they win)
            {
                selector: ".focused-node.claim",
                style: { width: 260, height: 110, "text-max-width": 300, "font-size": 16 }
            },
            {
                selector: ".distance-1.claim",
                style: { width: 175, height: 76 }
            },
            {
                selector: ".distance-2.claim",
                style: { width: 115, height: 50 }
            },
            {
                selector: ".distance-3.claim",
                style: { width: 75, height: 32 }
            },
            // Same compound overrides for source and organization
            {
                selector: ".focused-node.source, .focused-node.organization",
                style: { width: 220, height: 96, "text-max-width": 270, "font-size": 16 }
            },
            {
                selector: ".distance-1.source, .distance-1.organization",
                style: { width: 150, height: 82 }
            },
            {
                selector: ".distance-2.source, .distance-2.organization",
                style: { width: 98, height: 54 }
            },
            {
                selector: ".distance-3.source, .distance-3.organization",
                style: { width: 64, height: 34 }
            },
            {
                selector: ".event",
                style: nodeTypeStyle("event", nodeTypeColors)
            },
            {
                selector: ".place",
                style: nodeTypeStyle("place", nodeTypeColors)
            },
            {
                selector: ".technology",
                style: nodeTypeStyle("technology", nodeTypeColors)
            },
            {
                selector: ".publication",
                style: nodeTypeStyle("publication", nodeTypeColors)
            },
            {
                selector: ".community",
                style: nodeTypeStyle("community", nodeTypeColors)
            },
            {
                selector: ".relationship",
                style: nodeTypeStyle("relationship", nodeTypeColors)
            },
            {
                selector: ".revision",
                style: nodeTypeStyle("revision", nodeTypeColors)
            },
            {
                selector: ".schema",
                style: {
                    "background-color": "#e2e8f0",
                    color: "#0a0f1a",
                    "text-outline-color": "#ffffff"
                }
            },
            {
                selector: ".schema-violation",
                style: {
                    "border-color": "#ff6b6b",
                    "border-width": 5,
                    "border-style": "dashed"
                }
            }
        ];
    }
})();
