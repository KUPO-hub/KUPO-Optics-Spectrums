# KUPO Optics Spectrums

Interactive visualizations of optical filter transmittance spectra using [Plotly.js](https://plotly.com/javascript/).

## Filters

- **V7101** - Short-Pass Filter (380–780 nm)

## Usage

Open `index.html` in a browser, or serve the project with any static file server:

```bash
# Python
python3 -m http.server

# Node.js
npx serve
```

Then open `http://localhost:8000` (or the port shown).

> **Note:** Opening `index.html` directly via `file://` may not work due to browser security restrictions on `fetch()`. Use a local server instead.

## Project Structure

```
├── index.html          # Entry point
├── data/
│   └── v7101.json      # Spectrum data for the V7101 filter
├── src/
│   └── spectrum.js     # Visualization logic
└── README.md
```

## Adding a New Filter

1. Add a JSON data file to `data/` following the format in `data/v7101.json`.
2. Call `loadAndPlotSpectrum('data/<filename>.json', '<element-id>')` with a corresponding `<div>` in `index.html`.
