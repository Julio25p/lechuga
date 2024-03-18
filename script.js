function extractData() {
    var inputText = document.getElementById('inputArea').value;
    var lines = inputText.split('\n');
    var labData = {
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
        '% DE SATURACIÓN O2': 'SATO2',
        'Proteinas': 'PROT',
        'Glucosa': 'GLUC',
        'Cuerpos cetónicos': 'CETONAS',
        'Nitritos': 'NITRITOS',
        'Esterasa Leucocitaria': 'ESTERASA',
        'Leucocitos': 'LEUC',
        'Bacterias': 'BAC',
        'Levaduras': 'LEV',
        'Cilindros': 'CILINDROS',
        'EXAMEN GENERAL DE ORINA': 'EGO'
    };
    var outputText = '';
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        for (var lab in labData) {
            if (line.includes(lab)) {
                if (lab === 'EXAMEN GENERAL DE ORINA') {
                    outputText += labData[lab] + ' ';
                } else {
                    var value = line.split(lab)[1].trim().split(' ')[0];
                    outputText += labData[lab] + ': ' + value + ', ';
                }
            }
        }
    }
    var date = new Date();
    var formattedDate = date.getDate() + '/' + (date.getMonth() + 1);
    outputText = formattedDate + ' ' + outputText;
    document.getElementById('outputArea').innerText = outputText;
}

function copyToClipboard() {
    var outputText = document.getElementById('outputArea').innerText;
    navigator.clipboard.writeText(outputText);
}

