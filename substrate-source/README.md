# XanaNode Hugo Theme Substrate

This folder is the explicit substrate source generated from the XanaNode Hugo repository.

It exists so higher layers can federate with Hugo as a normal substrate instead of inferring Hugo facts ad hoc.

Regenerate it from the repository root with:

```powershell
node tools/build-substrate-source.mjs
```

Or from `XanaNode-Master`:

```powershell
npm run hugo:build-substrate-source
```
