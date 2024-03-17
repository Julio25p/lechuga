document.getElementById('processButton').addEventListener('click', function() {
    var inputText = document.getElementById('inputArea').value;
    var lines = inputText.split('\n');
    var outputText = '';
    var abbreviations = {
        'ERITROCITOS': 'ERI',
        'HEMOGLOBINA': 'HB',
        'HEMATOCRITO': 'HTO',
        'LEUCOCITOS': 'LEU',
        'NEUTROFILOS SEGMENTADOS %': 'NEU SEG',
        'PLAQUETAS': 'PLAQ',
        'CREATININA SERICA': 'CREA',
        'UREA': 'UREA',
        'GLUCOSA': 'GLU',
        'ACTIVADO': 'TPT',
        'TIEMPO DE PROTROMBINA': 'TP',
        'TRIGLICERIDOS': 'TAG',
        'COLESTEROL': 'COL',
        'SODIO': 'Na',
        'POTASIO': 'K',
        'CLORO': 'Cl',
        'DESHIDROGENASA LÁCTICA (L)': 'LDH',
        'FOSFATASA ALCALINA': 'FA',
        'ALBUMINA': 'ALB',
        'ASPARTATO DE AMINOTRANSFERASA (TGO)': 'AST',
        'ALANINA DE AMINOTRANSFERASA (ALTTGP)': 'ALT',
        'BILIRRUBINA DIRECTA': 'BD',
        'BILIRRUBINA INDIRECTA': 'BI',
        'PH': 'pH',
        'PCO2': 'PCo2',
        'PO2': 'Po2',
        'LACTATO': 'LAC',
        'HC03 ACTUAL': 'HC03',
        '% DE SATURACIÓN O2': 'SATO2'
    };
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        for (var key in abbreviations) {
            if (line.startsWith(key)) {
                var parts = line.split(' ');
                var value = parts[parts.length - 3];
                if (!isNaN(value)) {
                    outputText += abbreviations[key] + ': ' + value + ', ';
                }
            }
        }
    }
    document.getElementById('outputArea').innerText = outputText.slice(0, -2);
});
