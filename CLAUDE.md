# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repository contains optical spectrum data files for KUPO optics filters. Each `.js` file encodes the measured spectral transmittance of a specific filter and renders it as an interactive chart using [Plotly.js](https://plotly.com/javascript/).

There is no build system, package manager, or test framework — these are standalone browser scripts intended to be embedded in an HTML page.

## File Structure Convention

Each filter gets its own `.js` file named after the filter model (e.g., `V7101.js`). Every file follows this structure:

1. **`wavelength` array** — visible spectrum range in nm, typically 380–780 nm at 1 nm increments (401 values).
2. **`transmittance` array** — measured transmittance percentage at each corresponding wavelength. Values near 0 or slightly negative (instrument noise floor) are expected in the blocking region.
3. **Plotly trace and layout** — configures and calls `Plotly.newPlot('spectrum', ...)`, targeting a `<div id="spectrum">` element that must exist in the host HTML page.

## Runtime Dependencies

Plotly.js must be loaded by the host HTML page before these scripts run. There is no `npm install` or local bundling — the script assumes `Plotly` is available as a global.

## Adding a New Filter

Create a new `.js` file named after the filter model. Follow the exact pattern in `V7101.js:1-52`:
- Keep the `wavelength` and `transmittance` arrays parallel (same length).
- Update `layout.title.text` to match the filter name.
- Adjust `line.color` and `fillcolor` to a hue representative of the filter's passband.
- The y-axis range `[0, 100]` should remain fixed for consistent cross-filter comparison.
