function convertMass() {
    const value = parseFloat(document.getElementById('massInput').value);
    const fromUnit = document.getElementById('massFrom').value;
    const toUnit = document.getElementById('massTo').value;

    let valueInMg;

    switch (fromUnit) {
        case 'mg':
            valueInMg = value;
            break;
        case 'g':
            valueInMg = value * 1000;
            break;
        case 'kg':
            valueInMg = value * 1e6;
            break;
        case 'ton':
            valueInMg = value * 1e9;
            break;
        case 'lb':
            valueInMg = value * 453592.37;
            break;
        case 'oz':
            valueInMg = value * 28349.5231;
            break;
    }

    let result;

    switch (toUnit) {
        case 'mg':
            result = valueInMg;
            break;
        case 'g':
            result = valueInMg / 1000;
            break;
        case 'kg':
            result = valueInMg / 1e6;
            break;
        case 'ton':
            result = valueInMg / 1e9;
            break;
        case 'lb':
            result = valueInMg / 453592.37;
            break;
        case 'oz':
            result = valueInMg / 28349.5231;
            break;
    }

    document.getElementById('massResult').innerText = `Resultado: ${result} ${toUnit}`;
}

function convertLength() {
    const value = parseFloat(document.getElementById('lengthInput').value);
    const fromUnit = document.getElementById('lengthFrom').value;
    const toUnit = document.getElementById('lengthTo').value;

    let valueInMm;

    switch (fromUnit) {
        case 'mm':
            valueInMm = value;
            break;
        case 'cm':
            valueInMm = value * 10;
            break;
        case 'm':
            valueInMm = value * 1000;
            break;
        case 'km':
            valueInMm = value * 1e6;
            break;
        case 'yd':
            valueInMm = value * 914.4;
            break;
        case 'mi':
            valueInMm = value * 1.609e6;
            break;
        case 'ft':
            valueInMm = value * 304.8;
            break;
        case 'in':
            valueInMm = value * 25.4;
            break;
    }

    let result;

    switch (toUnit) {
        case 'mm':
            result = valueInMm;
            break;
        case 'cm':
            result = valueInMm / 10;
            break;
        case 'm':
            result = valueInMm / 1000;
            break;
        case 'km':
            result = valueInMm / 1e6;
            break;
        case 'yd':
            result = valueInMm / 914.4;
            break;
        case 'mi':
            result = valueInMm / 1.609e6;
            break;
        case 'ft':
            result = valueInMm / 304.8;
            break;
        case 'in':
            result = valueInMm / 25.4;
            break;
    }

    document.getElementById('lengthResult').innerText = `Resultado: ${result} ${toUnit}`;
}

function convertSpeed() {
    const value = parseFloat(document.getElementById('speedInput').value);
    const fromUnit = document.getElementById('speedFrom').value;
    const toUnit = document.getElementById('speedTo').value;

    let valueInMps;

    switch (fromUnit) {
        case 'mps':
            valueInMps = value;
            break;
        case 'kpm':
            valueInMps = value * (1000 / 60);
            break;
        case 'kph':
            valueInMps = value * (1000 / 3600);
            break;
        case 'mph':
            valueInMps = value * (1609.34 / 3600);
            break;
    }

    let result;

    switch (toUnit) {
        case 'mps':
            result = valueInMps;
            break;
        case 'kpm':
            result = valueInMps / (1000 / 60);
            break;
        case 'kph':
            result = valueInMps / (1000 / 3600);
            break;
        case 'mph':
            result = valueInMps / (1609.34 / 3600);
            break;
    }

    document.getElementById('speedResult').innerText = `Resultado: ${result} ${toUnit}`;
}
