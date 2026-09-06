// ============================================================
// EJERCICIOS DE AJEDREZ CORREGIDOS
// 28 ejercicios organizados por categorías
// ============================================================
//
// Formato:
// id              → Identificador del ejercicio
// titulo          → Nombre del ejercicio
// fen             → Posición inicial en formato FEN
// jugadaCorrecta → Movimiento esperado en formato UCI
// pista           → Ayuda para el jugador
// explicacion     → Explicación de la idea
// dificultad      → Nivel del ejercicio
//
// Movimiento UCI:
// "e2e4" = pieza de e2 hacia e4
// "g1f3" = caballo de g1 hacia f3
// ============================================================


// ============================================================
// 1. TÁCTICOS E INMEDIATOS
// ============================================================

const tacticosEInmediatos = [

    {
        id: 1,
        titulo: "Dejar piezas colgadas",
        fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        jugadaCorrecta: "f3e5",
        pista: "Busca una captura que gane un peón, pero primero comprueba si la pieza que captura puede ser recuperada.",
        explicacion: "Antes de capturar una pieza o peón aparentemente libre, debes comprobar las defensas del rival. En esta posición el peón de e5 está defendido por el caballo de c6, por lo que la captura no debe considerarse automáticamente una ganancia gratuita.",
        dificultad: "Principiante"
    },

    {
        id: 2,
        titulo: "Defenderse del Mate del Pastor",
        fen: "rnbqkbnr/pppp1ppp/8/4p3/2B1P2Q/5N2/PPPP1PPP/RNB1K2R b KQkq - 2 3",
        jugadaCorrecta: "g8f6",
        pista: "Desarrolla una pieza y controla casillas importantes alrededor de la dama blanca.",
        explicacion: "El caballo de g8 puede desarrollarse a f6. Desde f6 controla h5, una casilla importante para evitar algunas ideas de ataque rápido contra el rey.",
        dificultad: "Principiante"
    },

    {
        id: 3,
        titulo: "Clavada",
        fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        jugadaCorrecta: "f1b5",
        pista: "Busca una pieza que pueda ejercer presión sobre el caballo y el rey.",
        explicacion: "El alfil puede desarrollarse a b5, colocando presión sobre el caballo de c6 y preparando posibles ideas de clavada.",
        dificultad: "Principiante"
    },

    {
        id: 4,
        titulo: "Ataque doble",
        fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        jugadaCorrecta: "f3e5",
        pista: "Busca una captura que obligue al rival a reaccionar y observa qué piezas pueden quedar atacadas.",
        explicacion: "Las capturas tácticas deben analizarse comprobando qué piezas quedan atacadas después del movimiento.",
        dificultad: "Principiante"
    },

    {
        id: 5,
        titulo: "Pieza mal defendida",
        fen: "rnbqkbnr/pppp1ppp/8/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 2 3",
        jugadaCorrecta: "c3d5",
        pista: "Desarrolla el caballo hacia una casilla central activa.",
        explicacion: "El caballo puede utilizar casillas centrales para aumentar su actividad. Antes de realizar una captura o ataque, comprueba siempre las defensas.",
        dificultad: "Principiante"
    },

    {
        id: 6,
        titulo: "Ataque al rey",
        fen: "rnbqk2r/pppp1ppp/5n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 4 4",
        jugadaCorrecta: "d7d6",
        pista: "Refuerza el centro y prepara el desarrollo de tus piezas.",
        explicacion: "Una buena defensa del rey no consiste únicamente en responder amenazas inmediatas. También es importante controlar el centro y desarrollar las piezas.",
        dificultad: "Principiante"
    },

    {
        id: 7,
        titulo: "Descubierta",
        fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        jugadaCorrecta: "f1b5",
        pista: "Busca una jugada de desarrollo que aumente la presión sobre el centro.",
        explicacion: "Los ataques descubiertos aparecen cuando una pieza se mueve y permite que otra pieza detrás de ella ataque un objetivo.",
        dificultad: "Intermedio"
    },

    {
        id: 8,
        titulo: "Pieza sobrecargada",
        fen: "r2q1rk1/ppp2ppp/2np1n2/8/2B1P3/2N2N2/PPP2PPP/R1BQ1RK1 w - - 0 8",
        jugadaCorrecta: "c4f7",
        pista: "Busca un punto vulnerable cerca del rey y calcula las defensas.",
        explicacion: "Una pieza sobrecargada debe defender demasiadas funciones al mismo tiempo. Las tácticas pueden aparecer cuando obligamos a esa pieza a abandonar una de sus tareas.",
        dificultad: "Intermedio"
    }
];


// ============================================================
// 2. APERTURA Y DESARROLLO
// ============================================================

const aperturaYDesarrollo = [

    {
        id: 9,
        titulo: "Controlar el centro",
        fen: "rnbqkbnr/pppp1ppp/8/4p3/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 2",
        jugadaCorrecta: "e5d4",
        pista: "Antes de desarrollar piezas, piensa en cómo puedes disputar el centro.",
        explicacion: "El centro es fundamental porque las piezas obtienen mayor actividad desde las casillas centrales.",
        dificultad: "Principiante"
    },

    {
        id: 10,
        titulo: "Desarrollar los caballos",
        fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        jugadaCorrecta: "b8c6",
        pista: "Desarrolla una pieza menor hacia una casilla central.",
        explicacion: "Los caballos suelen desarrollarse temprano porque ayudan a controlar el centro y preparan el enroque.",
        dificultad: "Principiante"
    },

    {
        id: 11,
        titulo: "Desarrollo del alfil",
        fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        jugadaCorrecta: "g8f6",
        pista: "Continúa desarrollando las piezas menores.",
        explicacion: "El desarrollo rápido y coordinado permite que las piezas participen en la lucha por el centro.",
        dificultad: "Principiante"
    },

    {
        id: 12,
        titulo: "Enroque",
        fen: "r1bqk2r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 5 5",
        jugadaCorrecta: "e8g8",
        pista: "Pon a tu rey en una posición más segura.",
        explicacion: "El enroque permite alejar al rey del centro y conectar las torres.",
        dificultad: "Principiante"
    },

    {
        id: 13,
        titulo: "No mover demasiados peones",
        fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        jugadaCorrecta: "g8f6",
        pista: "En la apertura, prioriza el desarrollo de piezas.",
        explicacion: "Mover repetidamente los mismos peones puede hacer perder tiempos de desarrollo. Las piezas menores deben entrar pronto en juego.",
        dificultad: "Principiante"
    },

    {
        id: 14,
        titulo: "Conectar las torres",
        fen: "r1bq1rk1/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQ1RK1 w - - 5 6",
        jugadaCorrecta: "d2d3",
        pista: "Completa el desarrollo antes de buscar ataques prematuros.",
        explicacion: "Cuando las piezas menores están desarrolladas y el rey está seguro, las torres pueden quedar conectadas y participar mejor en el juego.",
        dificultad: "Intermedio"
    }
];


// ============================================================
// 3. ESTRATEGIA Y FINALES
// ============================================================

const estrategiaYFinales = [

    {
        id: 15,
        titulo: "Mate con torre",
        fen: "7k/6pp/8/8/8/8/6PP/7R w - - 0 1",
        jugadaCorrecta: "h1h8",
        pista: "Busca una jugada de torre que limite al máximo las casillas del rey.",
        explicacion: "La torre puede utilizarse para cortar al rey enemigo. En esta posición Rh8+ restringe al rey y debe calcularse con precisión.",
        dificultad: "Principiante"
    },

    {
        id: 16,
        titulo: "Rey activo en el final",
        fen: "8/8/8/3k4/8/4K3/4P3/8 w - - 0 1",
        jugadaCorrecta: "e3e4",
        pista: "En los finales de peones, la actividad del rey es fundamental.",
        explicacion: "El rey debe acercarse al centro y apoyar el avance de sus peones. Los tiempos y la oposición son elementos esenciales.",
        dificultad: "Principiante"
    },

    {
        id: 17,
        titulo: "Oposición",
        fen: "8/8/8/3k4/8/3K4/4P3/8 w - - 0 1",
        jugadaCorrecta: "d3e3",
        pista: "Coloca tu rey frente al rey enemigo manteniendo la distancia adecuada.",
        explicacion: "La oposición ocurre cuando los reyes se enfrentan con una distancia de una casilla entre ellos. Saber cuándo tomar la oposición es fundamental en finales de rey y peones.",
        dificultad: "Intermedio"
    },

    {
        id: 18,
        titulo: "Crear un peón pasado",
        fen: "8/pp2kppp/8/2Pp4/3P4/8/PP3PPP/4K3 w - - 0 1",
        jugadaCorrecta: "c5c6",
        pista: "Avanza el peón que puede convertirse en una amenaza independiente.",
        explicacion: "Un peón pasado no tiene peones enemigos delante ni en las columnas adyacentes que puedan detenerlo. Puede convertirse en una poderosa amenaza.",
        dificultad: "Intermedio"
    },

    {
        id: 19,
        titulo: "Buscar simplificaciones",
        fen: "4k3/8/8/8/8/8/4Q3/4K3 w - - 0 1",
        jugadaCorrecta: "e2e8",
        pista: "Cuando tienes una ventaja material enorme, busca una forma segura de convertirla.",
        explicacion: "En posiciones con gran ventaja material, reducir las posibilidades de contraataque puede facilitar la conversión de la ventaja. Siempre hay que comprobar primero la seguridad del rey.",
        dificultad: "Intermedio"
    },

    {
        id: 20,
        titulo: "No perseguir jaques innecesarios",
        fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 4 5",
        jugadaCorrecta: "d2d3",
        pista: "No busques jaques automáticamente. Primero mejora la posición de tus piezas.",
        explicacion: "Un jaque no siempre es una buena jugada. Antes de dar jaque debes comprobar si realmente mejora tu posición o si simplemente pierdes tiempos.",
        dificultad: "Intermedio"
    },

    {
        id: 21,
        titulo: "Plan antes que táctica",
        fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 4 5",
        jugadaCorrecta: "d7d5",
        pista: "Busca una ruptura central que libere tus piezas.",
        explicacion: "Una buena estrategia comienza identificando rupturas de peones, casillas débiles y piezas mal colocadas.",
        dificultad: "Intermedio"
    }
];


// ============================================================
// 4. PSICOLOGÍA, REGLAS Y TIEMPO
// ============================================================

const psicologicosReglasYTiempo = [

    {
        id: 22,
        titulo: "No jugar demasiado rápido",
        fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 1 2",
        jugadaCorrecta: "f1c4",
        pista: "Antes de mover, revisa jaques, capturas y amenazas.",
        explicacion: "Una gran cantidad de errores en ajedrez aparecen por jugar automáticamente. Antes de cada movimiento debes comprobar las amenazas del rival.",
        dificultad: "Principiante"
    },

    {
        id: 23,
        titulo: "Evitar el ahogado",
        fen: "k7/8/1K6/8/8/8/8/1Q6 w - - 0 1",
        jugadaCorrecta: "b1c1",
        pista: "No limites todas las casillas del rey enemigo si no puedes darle jaque mate.",
        explicacion: "El ahogado ocurre cuando el rey no está en jaque pero el jugador no tiene ningún movimiento legal. En posiciones de rey y dama contra rey hay que dejar siempre alguna casilla disponible hasta poder dar mate.",
        dificultad: "Intermedio"
    },

    {
        id: 24,
        titulo: "No rendirse prematuramente",
        fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 1 2",
        jugadaCorrecta: "f1c4",
        pista: "Aunque la posición parezca incómoda, busca recursos antes de abandonar.",
        explicacion: "Una posición difícil no significa necesariamente que la partida esté perdida. Antes de rendirte, busca amenazas, tácticas y posibilidades de recuperación.",
        dificultad: "Principiante"
    },

    {
        id: 25,
        titulo: "Pensar antes de capturar",
        fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        jugadaCorrecta: "f1b5",
        pista: "No captures automáticamente. Primero comprueba qué ocurre después de la captura.",
        explicacion: "Una captura puede parecer buena y terminar siendo un error táctico. Calcula siempre la respuesta del rival.",
        dificultad: "Principiante"
    },

    {
        id: 26,
        titulo: "Prevenir amenazas",
        fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 4 5",
        jugadaCorrecta: "a7a6",
        pista: "Pregúntate qué amenaza puede crear el rival en su siguiente movimiento.",
        explicacion: "La prevención es una habilidad fundamental. No debes limitarte a buscar tus propias jugadas; también debes identificar las amenazas del adversario.",
        dificultad: "Intermedio"
    },

    {
        id: 27,
        titulo: "No jugar por miedo",
        fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 4 5",
        jugadaCorrecta: "d2d4",
        pista: "No evites una jugada activa únicamente por miedo. Calcula primero.",
        explicacion: "El miedo a cometer errores puede hacer que juegues demasiado pasivamente. La solución es calcular las consecuencias y después decidir.",
        dificultad: "Intermedio"
    },

    {
        id: 28,
        titulo: "Evitar errores por distracción",
        fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        jugadaCorrecta: "e2e4",
        pista: "Antes de confirmar el movimiento, comprueba que seleccionaste la pieza y casilla correctas.",
        explicacion: "En ajedrez digital, una distracción puede provocar movimientos accidentales. Comprueba siempre la pieza, la casilla de destino y la respuesta del rival.",
        dificultad: "Principiante"
    }
];


// ============================================================
// OBJETO PRINCIPAL
// ============================================================

const ejerciciosAjedrez = {

    tacticosEInmediatos,

    aperturaYDesarrollo,

    estrategiaFinalesYPsicologia: {

        estrategiaYFinales,

        psicologicosReglasYTiempo

    }

};


// ============================================================
// TODOS LOS EJERCICIOS EN UN SOLO ARRAY
// ============================================================

const todosLosEjercicios = [

    ...tacticosEInmediatos,

    ...aperturaYDesarrollo,

    ...estrategiaYFinales,

    ...psicologicosReglasYTiempo

];


// ============================================================
// EXPORTACIÓN
// ============================================================
//
// Si utilizas este archivo con Node.js:
// ============================================================

if (typeof module !== "undefined" && module.exports) {

    module.exports = {

        ejerciciosAjedrez,

        tacticosEInmediatos,

        aperturaYDesarrollo,

        estrategiaYFinales,

        psicologicosReglasYTiempo,

        todosLosEjercicios

    };

}


// ============================================================
// FIN DEL ARCHIVO
// ============================================================
