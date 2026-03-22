/**
 * Loads filter spectrum data from a JSON file and renders an interactive
 * transmittance chart using Plotly.js.
 */
async function loadAndPlotSpectrum(dataUrl, elementId) {
  const response = await fetch(dataUrl);
  const data = await response.json();

  var trace = {
    x: data.wavelength,
    y: data.transmittance,
    mode: 'lines',
    name: data.filter.model,
    line: { color: 'purple', width: 2 },
    fill: 'tozeroy',
    fillcolor: 'rgba(128, 0, 128, 0.2)'
  };

  var layout = {
    title: {
      text: data.filter.model + ' ' + data.filter.type + ' Spectrum',
      font: { size: 18 }
    },
    xaxis: {
      title: 'Wavelength (' + data.filter.wavelengthUnit + ')',
      showgrid: true,
      zeroline: false
    },
    yaxis: {
      title: 'Transmittance (' + data.filter.transmittanceUnit + ')',
      range: [0, 100],
      showgrid: true,
      zeroline: false
    }
  };

  Plotly.newPlot(elementId, [trace], layout, { responsive: true });
}

loadAndPlotSpectrum('data/v7101.json', 'spectrum');
