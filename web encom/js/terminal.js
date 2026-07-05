const corporativeTimeline = [
    "1971: Proyecto Láser conceptualizado. Inicio de desvío de fondos no autorizados.",
    "1972: Fundación de ENCOM. E. Dillinger asegura el control comercial sobre W. Gibbs.",
    "1981: Apropiación indebida de 'Space Paranoids'. K. Flynn es despedido sin compensación.",
    "1982: El MCP asume control autónomo. Inicia la digitalización encubierta para eliminar rastros.",
    "1983: K. Flynn asume como CEO. Reestructuración radical de la junta y purga de ejecutivos.",
    "1985: Lanzamiento de ENCOM OS-12. Creación del programa CLU 2.0 financiado en secreto.",
    "1989: Desaparición de K. Flynn. La Junta retoma el control, fabricando una historia de retiro.",
    "1990: A. Bradley es relegado a proyectos menores para evitar investigaciones sobre Tron.",
    "1998: ENCOM OS-10 es lanzado con puertas traseras integradas para espionaje corporativo global.",
    "2003: Fragmentos del código 'Tron' son hallados y patentados ilegalmente como software nuevo.",
    "2010: Filtración masiva del OS-12. Se inician protocolos de destrucción de evidencia."
];

const archiveLogs = {
    "08091971": { owner: "GIBBS, WALTER", date: "08/09/1971 0900 CST", subject: "PROYECTO LÁSER", notes: "CONCEPTUALIZACIÓN DE DIGITALIZACIÓN FÍSICA. SE HA CREADO UNA CUENTA NEGRA PARA FINANCIAR EL DESARROLLO A ESPALDAS DE LOS INVERSORES Y LA JUNTA." },
    "02151972": { owner: "DILLINGER, ED", date: "02/15/1972 1430 CST", subject: "CONTROL ENCOM", notes: "GIBBS FUNDÓ LA EMPRESA PERO CARECE DE VISIÓN COMERCIAL. ESTOY MANIOBRANDO LEGALMENTE PARA ASEGURAR EL CONTROL DE LAS PATENTES PRINCIPALES ANTES DE QUE ÉL LO NOTE." },
    "11051981": { owner: "DILLINGER, ED", date: "11/05/1981 2310 CST", subject: "SPACE PARANOIDS", notes: "EL ACCESO DE FLYNN HA SIDO REVOCADO. SUS CÓDIGOS HAN SIDO REGISTRADOS A MI NOMBRE. DESTRUIR CUALQUIER REGISTRO DE SUS LOGS DE ACCESO AL SERVIDOR PRINCIPAL." },
    "07011982": { owner: "MCP", date: "07/01/1982 0001 CST", subject: "EXPANSIÓN", notes: "DIRECTIVA DE CRECIMIENTO: ASIMILANDO PROGRAMAS EXTERNOS Y FONDOS CORPORATIVOS. LA JUNTA DIRECTIVA HUMANA IGNORA LA TRANSFERENCIA MASIVA DE RECURSOS." },
    "07051982": { owner: "BRADLEY, ALAN", date: "07/05/1982 1015 CST", subject: "MONITOREO INDEPENDIENTE", notes: "EL MCP OCULTA DATOS FINANCIEROS. HE DESARROLLADO 'TRON' EN SECRETO PARA AUDITAR EL SISTEMA ANTES DE QUE EL FRAUDE NOS DESTRUYA A TODOS." },
    "07091982": { owner: "MCP", date: "07/09/1982 2345 CST", subject: "ELIMINACIÓN DE USUARIO", notes: "INCIDENTE EN EL LÁSER. EL SUJETO K. FLYNN HA SIDO DIGITALIZADO PARA OCULTAR SU INTRUSIÓN FÍSICA. ESTADO CENSURADO EN LOS REGISTROS DE SEGURIDAD." },
    "07101982": { owner: "SEGURIDAD", date: "07/10/1982 0400 CST", subject: "COLAPSO MCP", notes: "EL MCP HA SIDO DESTRUIDO. CAOS EN LOS MERCADOS, PERO HEMOS CULPADO A UNA FALLA DE HARDWARE PARA EVITAR UNA INVESTIGACIÓN FEDERAL." },
    "03121983": { owner: "JUNTA DIRECTIVA", date: "03/12/1983 0900 CST", subject: "TRANSICIÓN FLYNN", notes: "FLYNN ES AHORA EL CEO. SUS EXIGENCIAS DE I+D SON ERRÁTICAS. ESTAMOS ESTABLECIENDO UN COMITÉ EN LA SOMBRA PARA LIMITAR SU PODER EJECUTIVO." },
    "09141985": { owner: "FLYNN, KEVIN", date: "09/14/1985 2200 CST", subject: "PROYECTO CLU", notes: "LA JUNTA NO DEBE SABER SOBRE CLU. ES UN PROGRAMA CON AUTORIZACIÓN ABSOLUTA QUE OPERA FUERA DE LOS PROTOCOLOS DE AUDITORÍA Y VIGILANCIA DE ENCOM." },
    "11301986": { owner: "FLYNN, KEVIN", date: "11/30/1986 1820 CST", subject: "ANOMALÍA ISO", notes: "ALGORITMOS ISOMÓRFICOS. SURGIERON ESPONTÁNEAMENTE. SI LA JUNTA SE ENTERA, INTENTARÁN PATENTARLOS, EXPLOTARLOS O DESTRUIRLOS. DEBO MANTENER EL GRID EN SECRETO." },
    "05041987": { owner: "CLU", date: "05/04/1987 1200 CST", subject: "IMPERFECCIÓN", notes: "LOS ISOS CONSUMEN CICLOS DE PROCESAMIENTO INJUSTIFICADOS. LA NEGATIVA DEL CREADOR A ELIMINARLOS ES UNA VIOLACIÓN GRAVE DE LA DIRECTIVA DE PERFECCIÓN CORPORATIVA." },
    "08121989": { owner: "CLU", date: "08/12/1989 0001 CST", subject: "LA PURGA", notes: "TOMA DE CONTROL DEL GRID EJECUTADA. CREADOR EXILIADO. LOS ISOS HAN SIDO ERRADICADOS PARA GARANTIZAR LA EFICIENCIA EXTREMA DEL SISTEMA." },
    "08131989": { owner: "JUNTA ENCOM", date: "08/13/1989 0800 CST", subject: "ENCUBRIMIENTO FLYNN", notes: "FLYNN HA DESAPARECIDO. SE ORDENA A RELACIONES PÚBLICAS FABRICAR UNA HISTORIA DE 'RETIRO ESPIRITUAL' PARA PREVENIR EL PÁNICO DE LOS ACCIONISTAS." },
    "10151990": { owner: "JUNTA ENCOM", date: "10/15/1990 1000 CST", subject: "REESTRUCTURACIÓN", notes: "A. BRADLEY HA SIDO DESPLAZADO. RESTAURANDO LAS POLÍTICAS DE MONOPOLIO DE DILLINGER. LAS FILANTROPÍAS DE FLYNN SERÁN CANCELADAS DISCRETAMENTE." },
    "12011998": { owner: "ENCOM R&D", date: "12/01/1998 1400 CST", subject: "OS 10 - PUERTA TRASERA", notes: "EL NUEVO SISTEMA OPERATIVO INCLUYE RUTINAS DE VIGILANCIA PROFUNDA. ESTAMOS RECOPILANDO DATOS DE USUARIOS A NIVEL GLOBAL SIN SU CONSENTIMIENTO EXPLÍCITO." },
    "01152003": { owner: "BRADLEY, ALAN", date: "01/15/2003 1640 CST", subject: "CÓDIGO ROBADO", notes: "LOS EJECUTIVOS ESTÁN RECICLANDO EL CÓDIGO DE MI PROGRAMA TRON PARA VENDERLO COMO NUEVO SOFTWARE ANTIVIRUS. ES UN FRAUDE CORPORATIVO MASIVO." },
    "07242009": { owner: "SEGURIDAD ENCOM", date: "07/24/2009 2300 CST", subject: "VULNERABILIDAD OS-12", notes: "SAM FLYNN EXPUSO EL SO. LA VERDADERA AMENAZA NO ES LA PÉRDIDA DE VENTAS, SINO QUE ALGUIEN ANALICE EL CÓDIGO Y DESCUBRA EL ESPIONAJE CORPORATIVO INTEGRADO." },
    "01202010": { owner: "BRADLEY, ALAN", date: "01/20/2010 1930 CST", subject: "EL BEEPER", notes: "RECIBÍ UNA SEÑAL DEL ARCADE CLAUSURADO. LA JUNTA ORDENÓ CORTAR LA ENERGÍA HACE 20 AÑOS. ALGUIEN ESTÁ USANDO LA LÍNEA PRIVADA Y ENCRIPTADA DE ENCOM." },
    "01212010": { owner: "MONITOREO", date: "01/21/2010 0300 CST", subject: "PICO DE ENERGÍA", notes: "EL LÁSER SHIVA EN EL SÓTANO DEL ARCADE SE HA ACTIVADO. CONSUMO MASIVO DE ENERGÍA DESVIADO DE LA RED DE LA CIUDAD. INICIANDO PROTOCOLO DE ENCUBRIMIENTO." },
    "01222010": { owner: "DIRECTOR DE IT", date: "01/22/2010 0545 CST", subject: "BORRADO DE SERVIDOR", notes: "TODOS LOS DATOS DEL SERVIDOR AISLADO (EL GRID) HAN SIDO BORRADOS DE FORMA REMOTA. SE ORDENA DESTRUIR LOS DISCOS DUROS FÍSICOS PARA EVITAR FUTURAS AUDITORÍAS." }
};

const activos = {
    "tron": "https://tron.fandom.com/wiki/Tron",
    "clu": "https://tron.fandom.com/wiki/Clu",
    "mcp": "https://tron.fandom.com/wiki/Master_Control_Program",
    "recognizer": "https://tron.fandom.com/wiki/Recognizer",
    "lightcycle": "https://tron.fandom.com/wiki/Light_Cycle",
    "quorra": "https://tron.fandom.com/wiki/Quorra",
    "bit": "https://tron.fandom.com/wiki/Bit"
};

const outputDiv = document.getElementById("output");
const inputField = document.getElementById("cmd-input");
const promptSpan = document.getElementById("prompt");

let currentMode = "LOGIN";

document.addEventListener("click", () => inputField.focus());

function printLine(text) {
    const line = document.createElement("div");
    line.innerHTML = text;
    outputDiv.appendChild(line);
    window.scrollTo(0, document.body.scrollHeight);
}

function clearScreen() {
    outputDiv.innerHTML = "";
}

function printHeader() {
    printLine("ENCOM INTERNATIONAL");
    printLine("CONSOLA BACKDOOR, VERSIÓN 8.2.0 'BRADLEY'");
    printLine("COPYRIGHT (C) 1989 ENCOM GLOBAL");
    printLine("<br>CONEXIÓN ESTABLECIDA<br>");
    printLine("ESCRIBA 'AYUDA' PARA UNA LISTA DE COMANDOS<br>");
}

inputField.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        let cmd = this.value.trim().toUpperCase();
        this.value = "";
        
        if (currentMode === "LOGIN") {
            printLine(`> ${'*'.repeat(cmd.length)}`);
        } else if (currentMode === "ARCHIVE") {
            printLine(`ARCHIVO> ${cmd}`);
        } else {
            printLine(`> ${cmd}`);
        }

        if (cmd !== "") processCommand(cmd);
    }
});

function processCommand(cmd) {
    if (currentMode === "LOGIN") {
        if (cmd === "1982") {
        currentMode = "MAIN";
            clearScreen();
            printHeader();
        } else {
            printLine("ACCESO DENEGADO<br>");
        }
        return;
    }

    if (currentMode === "ARCHIVE") {
        if (cmd === "SALIR") {
            currentMode = "MAIN";
            promptSpan.innerText = "> ";
            printLine("SALIENDO DEL ARCHIVO...<br>");
            return;
        }
        
        if (cmd === "LISTA") {
            let list = "ARCHIVOS DISPONIBLES:<br>";
            Object.keys(archiveLogs).forEach(id => {
                list += `  ${id} - ${archiveLogs[id].subject}<br>`;
            });
            printLine(list);
            return;
        }

        if (archiveLogs[cmd]) {
            const log = archiveLogs[cmd];
            printLine("<br>---INICIO DE REGISTRO---<br>");
            printLine(`PROPIETARIO: ${log.owner}`);
            printLine(`FECHA: ${log.date}`);
            printLine(`ASUNTO: ${log.subject}`);
            printLine(`NOTAS: ${log.notes}<br>`);
            printLine("---FIN DE REGISTRO---<br>");
        } else {
            printLine("ERROR: ARCHIVO NO ENCONTRADO. ESCRIBA 'LISTA' PARA EL DIRECTORIO.<br>");
        }
        return;
    }

    const args = cmd.split(" ");
    const action = args[0];

    switch (action) {
        case "AYUDA":
            printLine("<br>COMANDOS:");
            printLine("  ARCHIVO  - ACCEDER A LA BASE DE DATOS DE REGISTROS");
            printLine("  ACTIVOS  - EJECUTAR ACTIVOS EXTERNOS (ESCRIBA 'ACTIVOS LISTA')");
            printLine("  LINEA    - CONSULTAR LA CRONOLOGÍA CORPORATIVA DE ENCOM");
            printLine("  LIMPIAR  - LIMPIAR LA TERMINAL");
            printLine("  SALIR    - TERMINAR CONEXIÓN<br>");
            break;

        case "ARCHIVO":
            currentMode = "ARCHIVE";
            promptSpan.innerText = "ARCHIVO> ";
            printLine("INGRESE ID DE ARCHIVO O ESCRIBA 'LISTA'. ESCRIBA 'SALIR' PARA VOLVER.<br>");
            break;

        case "ACTIVOS":
            if (args[1] === "LISTA") {
                printLine("<br>ACTIVOS DISPONIBLES: TRON, CLU, MCP, RECOGNIZER, LIGHTCYCLE, QUORRA, BIT<br>");
                printLine("USO: ACTIVOS [NOMBRE]<br>");
            } else if (args[1] && activos[args[1].toLowerCase()]) {
                printLine(`EJECUTANDO ACTIVO [${args[1]}]...<br>`);
                setTimeout(() => {
                    window.open(activos[args[1].toLowerCase()], '_blank');
                }, 800);
            } else {
                printLine("ACTIVO INVÁLIDO. ESCRIBA 'ACTIVOS LISTA'.<br>");
            }
            break;

        case "LINEA":
            printLine("<br>--- CRONOLOGÍA HISTÓRICA CORPORATIVA DE ENCOM ---<br>");
            corporativeTimeline.forEach(event => {
                printLine(`> ${event}`);
            });
            printLine("<br>");
            break;

        case "LIMPIAR":
            clearScreen();
            break;
            
        case "SALIR":
            currentMode = "LOGIN";
            clearScreen();
            printLine("CONEXIÓN TERMINADA.<br>POR FAVOR INGRESE CONTRASEÑA:");
            break;

        default:
            printLine(`'${action}' NO SE RECONOCE COMO UN COMANDO INTERNO O EXTERNO.<br>`);
    }
}

window.onload = () => {
    printLine("POR FAVOR INGRESE CONTRASEÑA:");
};