// Data for the spectrum
var wavelength = [
    380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395,
    396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411,
    412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427,
    428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443,
    444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459,
    460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475,
    476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491,
    492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507,
    508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523,
    524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539,
    540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555,
    556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571,
    572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587,
    588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603,
    604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619,
    620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635,
    636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651,
    652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667,
    668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683,
    684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699,
    700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715,
    716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731,
    732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747,
    748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763,
    764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779,
    780
];

var transmittance = [
   74.565, 75.868, 77.086, 78.224, 79.210, 80.183, 81.085, 81.798, 82.367, 82.843, 83.282, 83.691, 84.062, 84.512, 85.045, 85.570, 86.142, 86.844, 87.601, 88.245, 88.757, 89.130, 89.275, 89.191, 88.951, 88.525, 87.727, 86.311, 84.032, 80.708, 76.163, 70.482, 64.096, 57.465, 51.065, 45.303, 40.450, 36.519, 33.376, 30.785, 28.474, 26.283, 24.109, 21.820, 19.339, 16.742, 14.180, 11.836, 10.001, 9.154, 7.487, 5.467, 4.649, 4.044, 3.633, 3.345, 3.133, 3.001, 2.924, 2.893, 2.890, 2.887, 2.859, 2.779, 2.623, 2.393, 2.113, 1.807, 1.508, 1.251, 1.042, 0.874, 0.737, 0.632, 0.558, 0.507, 0.465, 0.436, 0.418, 0.407, 0.407, 0.418, 0.441, 0.464, 0.499, 0.539, 0.584, 0.629, 0.652, 0.645, 0.610, 0.548, 0.468, 0.388, 0.314, 0.258, 0.212, 0.179, 0.154, 0.133, 0.116, 0.105, 0.093, 0.082, 0.082, 0.089, 0.089, 0.089, 0.089, 0.093, 0.105, 0.116, 0.133, 0.154, 0.188, 0.227, 0.267, 0.311, 0.356, 0.378, 0.356, 0.311, 0.255, 0.194, 0.148, 0.114, 0.093, 0.075, 0.060, 0.049, 0.043, 0.043, 0.037, 0.032, 0.032, 0.032, 0.026, 0.026, 0.032, 0.037, 0.037, 0.037, 0.053, 0.070, 0.093, 0.125, 0.186, 0.304, 0.430, 0.491, 0.418, 0.264, 0.151, 0.082, 0.049, 0.031, 0.014, 0.014, 0.009, 0.005, 0.005, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.005, 0.005, 0.000, 0.000, -0.005, -0.005, 0.000, 0.000, -0.005, -0.005, 0.000, -0.005, -0.009, -0.009, -0.009, -0.005, 0.000, 0.000, 0.000, 0.000, -0.005, -0.009, -0.005, -0.005, -0.005, 0.000, 0.000, -0.005, -0.005, 0.000, 0.000, -0.005, -0.005, 0.000, -0.005, -0.005, 0.000, 0.000, 0.000, 0.005, 0.009, 0.000, -0.005, 0.000, 0.000, 0.000, 0.005, 0.009, 0.009, 0.014, 0.020, 0.020, 0.020, 0.024, 0.035, 0.041, 0.046, 0.052, 0.052, 0.046, 0.041, 0.035, 0.031, 0.024, 0.020, 0.020, 0.014, 0.009, 0.009, 0.009, 0.009, 0.009, 0.005, 0.005, 0.009, 0.005, 0.005, 0.009, 0.005, 0.005, 0.005, 0.005, 0.009, 0.009, 0.009, 0.005, 0.005, 0.005, 0.005, 0.009, 0.005, 0.005, 0.005, 0.005, 0.009, 0.009, 0.005, 0.005, 0.009, 0.009, 0.009, 0.009, 0.009, 0.014, 0.014, 0.014, 0.020, 0.020, 0.020, 0.024, 0.024, 0.031, 0.037, 0.037, 0.047, 0.052, 0.056, 0.063, 0.073, 0.085, 0.090, 0.107, 0.122, 0.137, 0.159, 0.182, 0.208, 0.241, 0.273, 0.307, 0.349, 0.392, 0.435, 0.484, 0.533, 0.581, 0.626, 0.670, 0.708, 0.735, 0.763, 0.790, 0.801, 0.812, 0.822, 0.829, 0.829, 0.827, 0.833, 0.839, 0.850, 0.861, 0.867, 0.871, 0.888, 0.916, 0.938, 0.960, 0.986, 1.019, 1.070, 1.118, 1.163, 1.219, 1.285, 1.358, 1.442, 1.537, 1.642, 1.761, 1.900, 2.060, 2.231, 2.432, 2.669, 2.916, 3.217, 3.561, 3.966, 4.449, 5.009, 5.666, 6.441, 7.362, 8.461, 9.775, 11.322, 13.174, 15.439, 18.106, 21.231, 25.012, 29.529, 34.828, 40.942, 47.777, 55.113, 62.627, 69.972, 76.718, 82.381, 86.490, 88.800, 89.561, 89.134, 87.759, 85.783, 83.534, 81.186, 78.961, 76.999, 75.269, 73.804, 72.548, 71.587, 71.082, 70.815, 70.770, 71.011, 71.539, 72.310, 73.222, 74.345, 75.650, 77.135, 78.828, 80.501, 82.033, 83.556, 85.065, 86.577

];

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
    yaxis: { title: 'Transmittance (%)', range: [0, 100], showgrid: true, zeroline: false }
};

Plotly.newPlot('spectrum', [trace], layout, { responsive: true });
