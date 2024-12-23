// Data for the spectrum
var wavelength = [
    380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395,
    396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411,
    // ... (rest of your data)
    780
];

var transmittance = [
    74.565, 75.868, 77.086, 78.224, 79.210, 80.183, 81.085, 81.798, 82.367, 82.843,
    83.282, 83.691, 84.062, 84.512, 85.045, 85.570, 86.142, 86.844, 87.601, 88.245,
    // ... (rest of your data)
    86.577
];

// Validate data lengths
if (wavelength.length !== transmittance.length) {
    console.error('Error: Wavelength and Transmittance arrays must be of the same length.');
}

// Create the plot
var trace = {
    x: wavelength,
    y: transmittance,
    mode: 'lines',
    line: { color: 'purple', width: 2 },
    fill: 'tozeroy',
    fillcolor: 'rgba(128, 0, 128, 0.2)' // Purple fill
};

var layout = {
    title: { text: 'V7101 Filter Spectrum', font: { size: 18 } },
    xaxis: { title: 'Wavelength (nm)', showgrid: true, zeroline: false },
    yaxis: { title: 'Transmittance (%)', showgrid: true, zeroline: false, autorange: true }
};

try {
    // Render the chart
    Plotly.newPlot('spectrum', [trace], layout, { responsive: true });
    console.log('Chart rendered successfully.');
} catch (error) {
    console.error('Error plotting the chart:', error);
}
