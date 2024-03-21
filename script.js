function extractData() {
    var inputText = document.getElementById('inputArea').value;
    var lines = inputText.split('\n');
    var labData = {
        //Bh
        'ERITROCITOS': 'ERI',
        'HEMOGLOBINA': 'HB',
        'HEMATOCRITO': 'HTO',
        'LEUCOCITOS': 'LEU',
        'NEUTROFILOS SEGMENTADOS %': 'NEU SEG',
        'PLAQUETAS': 'PLAQ',
        //QS
        'CREATININA SERICA': 'CREA',
        'UREA': 'UREA',
        'GLUCOSA': 'GLU',
        'HbA1c en unidades NGSP': 'HbA1c',
        'TRIGLICERIDOS': 'TAG',
        'COLESTEROL': 'COL',
        'ACIDO URICO': 'AU',
        //TIEMPOS
        'ACTIVADO': 'TPT',
        'TIEMPO DE PROTROMBINA': 'TP',
        'I.N.R.': 'INR',
        //Eles
        'Sodio': 'Na',
        'Potasio': 'K',
        'Cloro': 'Cl',
        'CALCIO SERICO': 'Ca',
        'FOSFORO SERICO': 'Po',
        'MAGNESIO SERICO': 'MG',
        //PFH
        'DESHIDROGENASA LÁCTICA (L)': 'LDH',
        'FOSFATASA ALCALINA': 'FA',
        'ALBUMINA': 'ALB',
        'GLOBULINAS': 'GLOB',
        'ASPARTATO DE AMINOTRANSFERASA (TGO)': 'AST',
        'ALANINA DE AMINOTRANSFERASA (ALTTGP)': 'ALT',
        'BILIRRUBINA DIRECTA': 'BD',
        'BILIRRUBINA INDIRECTA': 'BI',
        'BILIRRUBINAS TOTALES': 'BT',
        //Gaso
        'pH': 'pH',
        'PCO2': 'PCO2',
        'Lactato': 'Lac',
        'HC03 actual': 'HC03',
        '(EBA)': 'EBA',
        '(SAT)': 'SATO2',
        //'EXAMEN GENERAL DE ORINA': 'EGO',
        'Proteinas': 'PROT',
        'Glucosa': 'GLUC',
        'Cuerpos cetónicos': 'CETONAS',
        'Nitritos': 'NITRITOS',
        'Esterasa Leucocitaria': 'ESTERASA',
        'Leucocitos': 'LEUC',
        'Bacterias': 'BAC',
        'Levaduras': 'LEV',
        //ENZIMAS
        'TROPONIN I': 'Trop I',
        'CREATINFOSFOQUINASA (CPK TOTAL)': 'CPK',
        'CK-MB': 'CK-MB',
        'FT4 TIROXINA LIBRE': 'T4',
        'FT3 TRIYODOTIRONINA LIBRE':'T3',
        'HORMONA ESTIMULANTE TIROIDES': 'TSH',
        'AMILASA SERICA': 'AMILASA',
        'LIPASA SERICA': 'LIPASA',
        'PROTEINA C REACTIVA (hs-CRP)': 'PCR',
        'ANTIGENO PROSTATICO ESPECIFICO (PSA)': 'PSA',
        //MARCADORES
        'ALFA 1-FETOPROTEINA':'A-FETOPROT',
        'ANTIGENO CA 19-9': 'CA19-9',
        'ANTIGENO CARCINO EMBRIONARIO': 'A-CARCINOEMB',
        'ANTIGENO CA 15-3': 'CA13-3',
        'VELOCIDAD DE SEDIMENTACION GLOBULAR': 'VSG',
        'PROLACTINA': 'PRL'
    };
    var outputData = {};
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        for (var lab in labData) {
            if (line.includes(lab) && !(labData[lab] in outputData)) {
                var value;
                if (lab === 'EXAMEN GENERAL DE ORINA' || lab === 'ACTIVADO') {
                    value = lines[i + 1].trim().split(' ')[0];
                } else {
                    value = line.split(lab)[1].trim().split(' ')[0];
                    if (value == "") {
                        value = lines[i + 1].trim().split(' ')[0];
                    }
                }
                outputData[labData[lab]] = value;
            }
        }
    }
    var outputText = '';
    for (var lab in outputData) {
        outputText += lab + ': ' + outputData[lab] + ', ';
    }
    var date = new Date();
    var formattedDate = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
    outputText = formattedDate + ' ' + outputText;
    document.getElementById('outputArea').innerText = outputText;
}

function copyToClipboard() {
    var outputText = document.getElementById('outputArea').innerText;
    navigator.clipboard.writeText(outputText);
}


