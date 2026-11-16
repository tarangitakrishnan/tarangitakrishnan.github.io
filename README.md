# Tarangita Krishnan portfolio

A static Next.js export of the original portfolio, preserving its React components, responsive CSS and saved gallery ordering. Published at https://tarangitakrishnan.github.io/.

## Build

Use Node.js 22 or newer. Run `npm ci`, `python scripts/restore-assets.py`, then `npm run build`. The `out` directory is the GitHub Pages artifact.

The existing `tarangita-portfolio-github-pages.zip` supplies optimized artwork and fonts. `scripts/asset-paths.json` restores those assets at the exact paths expected by the original components. `app/portfolio-data.json` stores artwork metadata, process albums and saved film layout. `app/media-map.json` maps original object keys to bundled files.

Editing: change the tracked source and push to main. GitHub Actions rebuilds and publishes automatically. GitHub Pages is static; editing and uploading through the website require a separate server and are not enabled here.
