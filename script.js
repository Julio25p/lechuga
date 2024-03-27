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
        'MAGNESIO SERICO': 'Mg',
        //PFH
        'PROTEINAS TOTALES': 'PROT',
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
        //Eritrocitos no por que aparecen dos veces en el ego, la primera en hb y solo esa aparece sin valor 
        'Bacterias': 'BAC',
        'Levaduras': 'LEV',
        //ENZIMAS CARDIACAS
        'TROPONIN I': 'Trop I',
        'CREATINFOSFOQUINASA (CPK TOTAL)': 'CPK',
        'CK-MB': 'CK-MB',
        //PERFIL TIROIDEO
        'FT4 TIROXINA LIBRE': 'T4',
        'FT3 TRIYODOTIRONINA LIBRE':'T3',
        'HORMONA ESTIMULANTE TIROIDES': 'TSH',
        //ENZIMAS PANCREATICAS
        'AMILASA SERICA': 'AMILASA',
        'LIPASA SERICA': 'LIPASA',
        //MARCADORES
        'ALFA 1-FETOPROTEINA':'A-FETOPROT',
        'ANTIGENO CA 19-9': 'CA19-9',
        'ANTIGENO CARCINO EMBRIONARIO': 'A-CARCINOEMB',
        'ANTIGENO CA 15-3': 'CA13-3',
        'ANTIGENO CA-125': 'CA-125',
        'TITULACION DE HGC (FRACCION BETA)': 'B-HCG',
        'ANTIGENO PROSTATICO ESPECIFICO (PSA)': 'PSA',
        //FASE AGUDA
        'VELOCIDAD DE SEDIMENTACION GLOBULAR': 'VSG',
        'DIMERO D': 'DIMERO D',
        'PROTEINA C REACTIVA (hs-CRP)': 'PCR',
        //CACA
        'SANGRE OCULTA EN HECES': 'SOH',
        'Antigeno de Helicobacter pylori': 'H.PYLORI',
        //OTROS
        //'INMUNOFLUORESCENCIA)': 'PROCA',
        'PROLACTINA': 'PRL',
        'FERRITINA': 'FERRITINA',
        'FACTOR REUMATOIDE': 'FR',
        'ANTIESTREPTOLISINAS': 'ASO'
    };
    var titles = {
        'EXAMEN GENERAL DE ORINA': 'EGO',
        'GASOMETRIA ARTERIAL': 'Gaso',
        'CITOMETRIA HEMATICA': 'BH',
        'ELECTROLITOS SERICOS': 'Eles'

    };
    var outputData = [];
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        for (var lab in labData) {
            if (line.includes(lab)) {
                var value;
                if (lab === 'ACTIVADO') {
                    value = lines[i + 1].trim().split(' ')[0];
                } else {
                    value = line.split(lab)[1].trim().split(' ')[0];
                    if (value == "") {
                        value = lines[i + 1].trim().split(' ')[0];
                    }
                }
                if (!outputData.some(data => data.key === labData[lab])) {
                    outputData.push({key: labData[lab], value: value});
                }
            }
        }
        for (var title in titles) {
            if (line.includes(title)) {
                outputData.push({key: titles[title], value: ''});
            }
        }
    }
    var outputText = '';
    for (var i = 0; i < outputData.length; i++) {
        var data = outputData[i];
        outputText += data.key;
        if (data.value !== '') {
            outputText += ': ' + data.value;
        }
        if (i < outputData.length - 1) {
            outputText += ', ';
        }
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

function clearAll() {
    document.getElementById('inputArea').value = '';
    document.getElementById('outputArea').innerText = '';
}
