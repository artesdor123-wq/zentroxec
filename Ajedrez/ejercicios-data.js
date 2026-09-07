/* Módulo 1 — Base de datos normalizada de ejercicios tácticos.
 * Fuente: ejercicios1.txt + Temas para ejercicios FEN ajdrez.txt
 * No se inventan FEN; la legalidad completa se comprueba con ChessEngine.
 */
const EXERCISE_DATABASE = {"schemaVersion":"1.0.0","sourceFiles":["ejercicios1.txt","Temas para ejercicios FEN ajdrez.txt"],"description":"Base normalizada del Módulo 1. No sustituye ni corrige el contenido editorial de las fuentes.","importantRule":"No se inventan FEN. Si la fuente no permite reconstruir el tablero completo, fen queda en null y fenStatus indica missing-in-source.","themes":[{"id":"ruy-lopez","name":"Apertura Ruy López","sourceSection":"A","exercises":[{"id":"ruy-lopez-01","title":"El sacrificio sobre f7","playerColor":"w","fen":null,"fenStatus":"source-turn-conflict","solutionSan":["Bxf7+","Kxf7","Qb3+"],"pattern":"Sacrificio en f7 + exposición del rey.","context":"1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3.","notes":"Línea principal didáctica indicada en la fuente. La secuencia de contexto termina en una jugada blanca, pero la fuente indica que las blancas juegan a continuación; no se fuerza un FEN hasta resolver esta inconsistencia."},{"id":"ruy-lopez-02","title":"Abrir el centro cuando el negro está mal coordinado","playerColor":"w","fen":null,"fenStatus":"source-turn-conflict","solutionSan":["d4","exd4","cxd4"],"pattern":"Ruptura central en el momento correcto.","context":"1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 O-O 8.c3 d5 9.exd5.","notes":"Se conserva la continuación principal del texto; la alternativa ...e4/Nfd2 queda fuera de la línea principal. La secuencia de contexto termina en una jugada blanca, pero la fuente indica que las blancas juegan a continuación; no se fuerza un FEN hasta resolver esta inconsistencia."},{"id":"ruy-lopez-03","title":"Clavada y sobrecarga","playerColor":"w","fen":null,"fenStatus":"missing-in-source","solutionSan":["d4","exd4","e5"],"pattern":"Ganancia de tiempos mediante ruptura central.","context":"Estructura típica de Española; la fuente solo enumera varias piezas, no la posición completa."}]},{"id":"italiana","name":"Apertura Italiana","sourceSection":"B","exercises":[{"id":"italiana-01","title":"Ataque al punto f7","playerColor":"w","fen":"r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 6 5","fenStatus":"derived-from-complete-context","solutionSan":["Ng5","O-O","Bxf7+"],"pattern":"Ataque doble a f7.","context":"1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.O-O Nf6"},{"id":"italiana-02","title":"El centro contra el rey","playerColor":"w","fen":null,"fenStatus":"source-turn-conflict","solutionSan":["d4","exd4","cxd4"],"pattern":"Gambito/ruptura central para conseguir iniciativa.","context":"1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.c3 Nf6 5.d4","notes":"La secuencia de contexto termina en una jugada blanca, pero la fuente indica que las blancas juegan a continuación; no se fuerza un FEN hasta resolver esta inconsistencia."},{"id":"italiana-03","title":"Descubrir la debilidad del enroque","playerColor":"w","fen":null,"fenStatus":"missing-in-source","solutionSan":["Bxf7+","Rxf7","Qe6+"],"pattern":"Sacrificio de eliminación del defensor.","context":"La fuente proporciona piezas concretas, pero no una posición completa."}]},{"id":"escocesa","name":"Apertura Escocesa","sourceSection":"C","exercises":[{"id":"escocesa-01","title":"Abrir el centro antes de desarrollar","playerColor":"w","fen":null,"fenStatus":"source-turn-conflict","solutionSan":["Nc3","Nf6","Nxc6","bxc6","e5"],"pattern":"Cambio del defensor + ataque al centro.","context":"1.e4 e5 2.Nf3 Nc6 3.d4 exd4 4.Nxd4","notes":"La secuencia de contexto termina en una jugada blanca, pero la fuente indica que las blancas juegan a continuación; no se fuerza un FEN hasta resolver esta inconsistencia."},{"id":"escocesa-02","title":"Atacar la pieza clavada","playerColor":"w","fen":"r1bqk2r/pppp1ppp/2n2n2/8/1b1NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 3 6","fenStatus":"derived-from-complete-context","solutionSan":["Nxc6","bxc6","e5"],"pattern":"Cambio estructural para ganar tiempos.","context":"1.e4 e5 2.Nf3 Nc6 3.d4 exd4 4.Nxd4 Nf6 5.Nc3 Bb4"},{"id":"escocesa-03","title":"La ruptura e5","playerColor":"w","fen":null,"fenStatus":"missing-in-source","solutionSan":["e5","Nd5","Nxd5"],"pattern":"Ataque a una pieza mediante avance de peón central.","context":"La fuente describe una posición parcial: rey blanco g1, torre e1, caballos c3/f3, rey negro g8, caballo f6 y alfil c8."}]},{"id":"siciliana","name":"Defensa Siciliana","sourceSection":"D","exercises":[{"id":"siciliana-01","title":"El peón venenoso","playerColor":"w","fen":"rnb1kb1r/1p3ppp/pq1ppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R w KQkq - 1 8","fenStatus":"derived-from-complete-context","solutionSan":["Qd2","Qxb2","Rb1"],"pattern":"Peón envenenado + pérdida de tiempos de la dama.","context":"1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Bg5 e6 7.f4 Qb6"},{"id":"siciliana-02","title":"Ataque en el flanco de rey","playerColor":"w","fen":null,"fenStatus":"missing-in-source","solutionSan":["h5","Nxh5","Rxh5"],"pattern":"Ataque de peones sobre el enroque opuesto.","context":"Posición conceptual; la fuente no da todas las piezas."},{"id":"siciliana-03","title":"Sacrificio en d5","playerColor":"w","fen":null,"fenStatus":"missing-in-source","solutionSan":["Nd5","Nxd5","Bxd8"],"pattern":"Pieza avanzada + desviación.","context":"Estructura de Siciliana con dama blanca d1, caballo f3 y alfil g5; no se especifica el tablero completo."}]},{"id":"francesa","name":"Defensa Francesa","sourceSection":"E","exercises":[{"id":"francesa-01","title":"Ataque contra la cadena","playerColor":"w","fen":"r1b1kbnr/pp3ppp/1qn1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq - 3 6","fenStatus":"derived-from-complete-context","solutionSan":["Bd3","O-O","Bxh7+"],"pattern":"Ataque a la base del enroque.","context":"1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6"},{"id":"francesa-02","title":"Romper la cadena","playerColor":"b","fen":null,"fenStatus":"missing-in-source","solutionSan":["c5","dxc5","Bxc5"],"pattern":"Atacar la base de la cadena de peones.","context":"Francesa avanzada; la fuente no proporciona posición completa."},{"id":"francesa-03","title":"Ataque sobre d4","playerColor":"b","fen":null,"fenStatus":"missing-in-source","solutionSan":["cxd4","cxd4"],"pattern":"Ataque acumulativo a un peón fijo.","context":"Solo se especifican d4/e5 blancos, c5/c6/b6 negros."}]},{"id":"caro-kann","name":"Defensa Caro-Kann","sourceSection":"F","exercises":[{"id":"caro-kann-01","title":"Presión contra f7","playerColor":"w","fen":"r2qkbnr/pp1npppp/2p3b1/8/3P4/5NN1/PPP2PPP/R1BQKB1R w KQkq - 5 7","fenStatus":"derived-from-complete-context","solutionSan":["h4","h6","Nf4"],"pattern":"Ataque al alfil desarrollador.","context":"1.e4 c6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Bf5 5.Ng3 Bg6 6.Nf3 Nd7"},{"id":"caro-kann-02","title":"Ruptura e5","playerColor":"w","fen":null,"fenStatus":"missing-in-source","solutionSan":["e5","Nd5","Bc4"],"pattern":"Ganancia de espacio + expulsión de piezas.","context":"Caro-Kann clásica; no se proporciona el tablero completo."},{"id":"caro-kann-03","title":"Sacrificio sobre h7","playerColor":"w","fen":null,"fenStatus":"missing-in-source","solutionSan":["Bxh7+","Kxh7","Qh5+"],"pattern":"Alfil sacrificado + dama entrando por h5.","context":"Solo se especifican rey negro g8, peones g7/h7, alfil d3, dama e2 y caballo g5."}]},{"id":"gambito-dama","name":"Gambito de Dama","sourceSection":"G","exercises":[{"id":"gambito-dama-01","title":"La estructura del Gambito de Dama","playerColor":"w","fen":"rnbq1rk1/ppp1bppp/4pn2/3p2B1/2PP4/2N1P3/PP3PPP/R2QKBNR w KQ - 1 6","fenStatus":"derived-from-complete-context","solutionSan":["cxd5","exd5"],"pattern":"Crear una debilidad estructural duradera.","context":"1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.Bg5 Be7 5.e3 O-O"},{"id":"gambito-dama-02","title":"La clavada sobre el caballo","playerColor":"w","fen":null,"fenStatus":"missing-in-source","solutionSan":["e5","Ne4"],"pattern":"Clavada + avance que obliga a reaccionar.","context":"Solo se especifican rey negro g8, caballo f6, alfil blanco g5 y dama negra d8."},{"id":"gambito-dama-03","title":"Sacrificio para destruir el enroque","playerColor":"w","fen":null,"fenStatus":"missing-in-source","solutionSan":["Bxh7+","Kxh7","Qh5+"],"pattern":"Sacrificio griego.","context":"Solo se especifican rey negro g8, peones g7/h7, alfil d3, dama c2 y caballo g5."}]},{"id":"holandesa","name":"Defensa Holandesa","sourceSection":"H","exercises":[{"id":"holandesa-01","title":"Debilidad de f7","playerColor":"w","fen":"rnbq1rk1/ppppb1pp/4pn2/5p2/3P4/5NP1/PPP1PPBP/RNBQ1RK1 w - - 4 6","fenStatus":"derived-from-complete-context","solutionSan":["c4","d6","Nc3"],"pattern":"Luchar contra el centro de la Holandesa.","context":"1.d4 f5 2.g3 Nf6 3.Bg2 e6 4.Nf3 Be7 5.O-O O-O"},{"id":"holandesa-02","title":"Ataque en el flanco de rey","playerColor":"w","fen":null,"fenStatus":"missing-in-source","solutionSan":["h4","h5"],"pattern":"Fijación de peones antes de atacar.","context":"Estructura Holandesa con rey negro g8 y peón f5; no se proporciona posición completa."},{"id":"holandesa-03","title":"La ruptura e4","playerColor":"w","fen":null,"fenStatus":"missing-in-source","solutionSan":["e4","fxe4","Ng5"],"pattern":"Ruptura central contra una defensa de flanco.","context":"Posición parcial: rey g1, caballo f3, alfil g2, peones d4/c4; rey g8, peones f5/e6/d6."}]},{"id":"gambitos","name":"Gambitos","sourceSection":"I","exercises":[{"id":"gambitos-01","title":"Gambito de Rey","playerColor":"w","fen":"rnbqkbnr/pppp1ppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 1 3","fenStatus":"derived-from-complete-context","solutionSan":["Bc4","Nf6","e5"],"pattern":"Peón sacrificado = tiempos de desarrollo.","context":"1.e4 e5 2.f4 exf4 3.Nf3"},{"id":"gambitos-02","title":"Gambito Evans","playerColor":"w","fen":"r1bqk1nr/pppp1ppp/2n5/4p3/1bB1P3/5N2/P1PP1PPP/RNBQK2R w KQkq - 0 5","fenStatus":"derived-from-complete-context","solutionSan":["c3","d4"],"pattern":"Sacrificio de peón para abrir líneas y ganar tiempos.","context":"1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4 Bxb4"},{"id":"gambitos-03","title":"Gambito Smith-Morra","playerColor":"w","fen":null,"fenStatus":"source-turn-conflict","solutionSan":["Bc4"],"pattern":"Material por iniciativa.","context":"1.e4 c5 2.d4 cxd4 3.c3 dxc3 4.Nxc3","notes":"La secuencia de contexto termina en una jugada blanca, pero la fuente indica que las blancas juegan a continuación; no se fuerza un FEN hasta resolver esta inconsistencia."}]},{"id":"trampas","name":"Trampas de apertura","sourceSection":"J","exercises":[{"id":"trampas-01","title":"Blackburne-Shilling","playerColor":"b","fen":"r1bqkbnr/pppp1ppp/8/4N3/2BnP3/8/PPPP1PPP/RNBQK2R b KQkq - 0 4","fenStatus":"derived-from-complete-context","solutionSan":["Qg5","Nxf7","Qxg2"],"pattern":"Cebo + ataque sobre g2.","context":"1.e4 e5 2.Nf3 Nc6 3.Bc4 Nd4 4.Nxe5?"},{"id":"trampas-02","title":"Trampa de Legal","playerColor":"w","fen":"r2qkbnr/ppp2ppp/2np4/4p3/2B1P1b1/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 2 5","fenStatus":"derived-from-complete-context","solutionSan":["Nxe5","Bxd1","Bxf7+","Kd8","Ne5"],"pattern":"No toda clavada es real.","context":"1.e4 e5 2.Nf3 Nc6 3.Bc4 d6 4.Nc3 Bg4"},{"id":"trampas-03","title":"Lasker en el Gambito de Dama","playerColor":"w","fen":"r1b1kb1r/pp1n1ppp/2p1pn2/q2p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQkq - 2 7","fenStatus":"derived-from-complete-context","solutionSan":[],"pattern":"Calcular la posición de las piezas y del rey antes de aceptar material.","context":"1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.Bg5 Nbd7 5.e3 c6 6.Nf3 Qa5","notes":"La fuente da una idea táctica, pero no una secuencia concreta de solución."}]},{"id":"en-passant","name":"Captura al paso","sourceSection":"Regla especial","exercises":[{"id":"en-passant-01","title":"La captura al paso da jaque descubierto","playerColor":"w","fen":"4k3/5p2/8/4Pp2/8/8/8/4R1K1 w - f6 0 1","fenStatus":"derived-from-explicit-position-and-last-move","solutionSan":["exf6"],"pattern":"En passant + apertura de línea.","context":"Rey g1, torre e1, peón e5; rey e8, peón f7. Las negras acaban de jugar ...f7-f5.","notes":"La casilla en passant f6 es esencial y queda expresada en el FEN."},{"id":"en-passant-02","title":"La única forma de impedir el mate","playerColor":"w","fen":"6k1/5p1p/8/6P1/8/8/8/6KR w - h6 0 1","fenStatus":"derived-from-explicit-position-and-last-move","solutionSan":["gxh6"],"pattern":"En passant como apertura forzada de una línea.","context":"Rey g1, torre h1, peón g5; rey g8, peones h7/f7. Las negras acaban de jugar ...h7-h5.","notes":"La casilla en passant h6 es esencial y queda expresada en el FEN."},{"id":"en-passant-03","title":"El peón que parecía defender, pero está sobrecargado","playerColor":"w","fen":"4k3/5p2/8/4Pp1Q/8/8/8/4R1K1 w - f6 0 1","fenStatus":"derived-from-explicit-position-and-last-move","solutionSan":["exf6"],"pattern":"Desviación + descubrimiento.","context":"Rey g1, torre e1, peón e5, dama h5; rey e8, peones f7/f5. Las negras acaban de jugar ...f7-f5.","notes":"La fuente lo presenta como posición conceptual; aquí solo se normaliza lo explícitamente indicado, sin inventar piezas."},{"id":"en-passant-04","title":"El principio táctico más importante","playerColor":"w","fen":"4k3/5p2/8/4P3/8/8/8/4R1K1 w - f6 0 1","fenStatus":"derived-from-explicit-position-and-last-move","solutionSan":["exf6"],"pattern":"Regla temporal + táctica.","context":"Rey g1, torre e1, peón e5; rey e8, peón f7. Las negras juegan ...f5 suponiendo que llegaron on desde f7-f5.","notes":"Se representa la posición inmediatamente después de ...f5 para que el ejercicio sea interactivo."}]}]};

/** Devuelve todos los ejercicios en una lista plana. */
function getAllExercises() {
    return EXERCISE_DATABASE.themes.flatMap(theme =>
        theme.exercises.map(exercise => ({
            ...exercise,
            themeId: theme.id,
            themeName: theme.name
        }))
    );
}

/** Busca un ejercicio por ID. */
function getExerciseById(id) {
    return getAllExercises().find(exercise => exercise.id === id) || null;
}

/** Busca un tema por ID. */
function getThemeById(id) {
    return EXERCISE_DATABASE.themes.find(theme => theme.id === id) || null;
}

/**
 * Validación sintáctica de FEN.
 * La legalidad ajedrecística completa se comprobará contra ChessEngine.
 */
function validateFenSyntax(fen) {
    if (typeof fen !== "string") return { ok: false, error: "FEN no es string." };

    const parts = fen.trim().split(/\s+/);
    if (parts.length !== 6) {
        return { ok: false, error: "Un FEN debe tener 6 campos." };
    }

    const [placement, turn, castling, enPassant, halfmove, fullmove] = parts;
    const ranks = placement.split("/");

    if (ranks.length !== 8) {
        return { ok: false, error: "El tablero FEN debe tener 8 filas." };
    }

    for (const rank of ranks) {
        let count = 0;
        for (const ch of rank) {
            if (/^[1-8]$/.test(ch)) count += Number(ch);
            else if (/^[prnbqkPRNBQK]$/.test(ch)) count += 1;
            else return { ok: false, error: `Símbolo FEN inválido: ${ch}` };
        }
        if (count !== 8) {
            return { ok: false, error: `Fila FEN con ${count} casillas en lugar de 8.` };
        }
    }

    if (!/^[wb]$/.test(turn)) {
        return { ok: false, error: "Turno FEN inválido." };
    }

    if (!/^(?:-|K?Q?k?q?)$/.test(castling)) {
        return { ok: false, error: "Derechos de enroque inválidos." };
    }

    if (!/^(?:-|[a-h][36])$/.test(enPassant)) {
        return { ok: false, error: "Casilla en passant inválida." };
    }

    if (!/^\d+$/.test(halfmove) || !/^\d+$/.test(fullmove)) {
        return { ok: false, error: "Contadores FEN inválidos." };
    }

    return { ok: true };
}

/**
 * Valida la estructura de la base y la sintaxis de los FEN presentes.
 * No sustituye la comprobación de legalidad de ChessEngine.
 */
function validateExerciseDatabase() {
    const errors = [];
    const ids = new Set();

    for (const theme of EXERCISE_DATABASE.themes) {
        if (!theme.id || !theme.name) errors.push("Tema sin id o nombre.");

        for (const exercise of theme.exercises) {
            if (!exercise.id) errors.push("Ejercicio sin id.");
            if (ids.has(exercise.id)) errors.push(`ID duplicado: ${exercise.id}`);
            ids.add(exercise.id);

            if (!exercise.title) errors.push(`${exercise.id}: falta title.`);
            if (!["w", "b"].includes(exercise.playerColor)) {
                errors.push(`${exercise.id}: playerColor debe ser w o b.`);
            }
            if (!Array.isArray(exercise.solutionSan)) {
                errors.push(`${exercise.id}: solutionSan debe ser array.`);
            }

            if (exercise.fen !== null) {
                const result = validateFenSyntax(exercise.fen);
                if (!result.ok) {
                    errors.push(`${exercise.id}: ${result.error}`);
                }
            }
        }
    }

    const all = getAllExercises();
    return {
        ok: errors.length === 0,
        errors,
        themeCount: EXERCISE_DATABASE.themes.length,
        exerciseCount: all.length,
        exercisesWithFen: all.filter(e => e.fen).length,
        exercisesPendingFen: all.filter(e => !e.fen).length,
        exercisesByStatus: all.reduce((acc, e) => {
            acc[e.fenStatus] = (acc[e.fenStatus] || 0) + 1;
            return acc;
        }, {})
    };
}

/** Solo ejercicios que ya tienen FEN listo para la siguiente capa. */
function getExercisesWithFen() {
    return getAllExercises().filter(exercise => exercise.fen);
}

window.EXERCISE_DATABASE = EXERCISE_DATABASE;
window.getAllExercises = getAllExercises;
window.getExerciseById = getExerciseById;
window.getThemeById = getThemeById;
window.validateFenSyntax = validateFenSyntax;
window.validateExerciseDatabase = validateExerciseDatabase;
window.getExercisesWithFen = getExercisesWithFen;