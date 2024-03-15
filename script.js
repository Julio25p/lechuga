function extractData() {
    var text = document.getElementById('inputArea').value;
    var lines = text.split('\n');
    var data = {};
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (line && !isNaN(lines[i + 1])) {
            data[line] = lines[i + 1];
            i++;
        }
    }
    var output = '';
    var abbreviations = {
        'ERITROCITOS': 'ERI',
        'HEMOGLOBINA': 'HB',
        'HEMATOCRITO': 'HTO',
        'LEUCOCITOS': 'LEU',
        'NEUTROFILOS SEGMENTADOS %': 'NEU SEG',
        'PLAQUETAS': 'PLAQ'
    };
    for (var key in abbreviations) {
        if (abbreviations.hasOwnProperty(key) && data.hasOwnProperty(key)) {
            output += abbreviations[key] + ': ' + data[key] + ', ';
        }
    }
    document.getElementById('outputArea').innerText = output.slice(0, -2);
}

