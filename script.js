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
        'PLAQUETAS': 'PLAQ',
        'CREATININA SERICA': 'CREA',
        'UREA': 'UREA',
        'GLUCOSA': 'GLU',
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
    for (var key in abbreviations) {
        if (abbreviations.hasOwnProperty(key) && data.hasOwnProperty(key)) {
            output += abbreviations[key] + ': ' + data[key] + ', ';
        }
    }
    document.getElementById('outputArea').innerText = output.slice(0, -2);
}

