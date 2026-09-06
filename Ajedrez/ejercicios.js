const tacticosEInmediatos = [
  {
    id: "pieza_colgada",
    titulo: "1. Dejar piezas colgadas (sin defensa)",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
    jugadaCorrecta: "f3e5",
    pista: "El peón de e5 está completamente colgado sin protector. Captúralo con el caballo."
  },
  {
    id: "mate_pastor",
    titulo: "2. Regalar el jaque mate en pocas jugadas",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR b KQkq - 1 2",
    jugadaCorrecta: "g8f6",
    pista: "Cubre la casilla f7 e impide el patrón del Mate del Pastor desarrollando tu caballo."
  },
  {
    id: "no_ver_ataques",
    titulo: "3. No ver los ataques del rival",
    fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 5 4",
    jugadaCorrecta: "d7d6",
    pista: "Revisa qué amenazó el oponente en su último movimiento antes de continuar tu plan."
  },
  {
    id: "alineacion_vulnerable",
    titulo: "4. Alineación vulnerable de piezas",
    fen: "r1bqk2r/pppp1ppp/2n2n2/4p3/1b2P3/3P1N2/PPP1BPPP/RNBQK2R w KQkq - 3 5",
    jugadaCorrecta: "c2c3",
    pista: "Interpón un peón para romper la alineación en diagonal que permite la clavada sobre tu rey."
  },
  {
    id: "subestimar_largo_alcance",
    titulo: "5. Subestimar piezas de largo alcance",
    fen: "r1bqk2r/pppp1ppp/2n5/4p3/1b6/2N2N2/PPPPPPPP/R1BQKB1R w KQkq - 2 4",
    jugadaCorrecta: "c3d5",
    pista: "Ten en cuenta el alcance completo del alfil rival en la diagonal antes de dejar piezas expuestas."
  },
  {
    id: "defender_piezas_clavadas",
    titulo: "6. Incapacidad para defender piezas clavadas",
    fen: "r1bqk1nr/pppp1ppp/2n5/4p3/1b2P3/2NP1N2/PPP2PPP/R1BQKB1R b KQkq - 2 4",
    jugadaCorrecta: "d7d6",
    pista: "Agrega un defensor a la pieza clavada o retira la pieza de mayor valor situada detrás de ella."
  },
  {
    id: "prioridad_amenazas",
    titulo: "7. Confundir la prioridad de las amenazas",
    fen: "r1bqk2r/pppp1p1p/2n3p1/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 0 5",
    jugadaCorrecta: "h5f7",
    pista: "No atiendas ataques menores en peones cuando tienes la oportunidad de dar mate directo en f7."
  },
  {
    id: "piezas_sobrecargadas",
    titulo: "8. Crear piezas sobrecargadas",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 5 4",
    jugadaCorrecta: "d7d6",
    pista: "No asignes a una sola pieza la tarea de defender múltiples puntos críticos a la vez."
  }
];

const aperturaYDesarrollo = [
  {
    id: "dama_prematura",
    titulo: "1. Mover la reina demasiado pronto",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    jugadaCorrecta: "g1f3",
    pista: "No saques la dama en las primeras jugadas para evitar perder tiempos cuando la persigan. Saca primero tu caballo."
  },
  {
    id: "misma_pieza_varias_veces",
    titulo: "2. Mover la misma pieza varias veces",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
    jugadaCorrecta: "b8c6",
    pista: "No gastes turnos moviendo una sola pieza repetidamente. Desarrolla otras piezas como tu caballo para dominar el centro."
  },
  {
    id: "olvidar_enroque",
    titulo: "3. Olvidarse del enroque",
    fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R b KQkq - 0 5",
    jugadaCorrecta: "e8g8",
    pista: "No dejes a tu rey expuesto en el centro del tablero durante toda la partida. Ponlo a salvo haciendo el enroque."
  },
  {
    id: "seguridad_rey_tras_enroque",
    titulo: "4. Ignorar la seguridad del rey tras enrocar",
    fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQ1RK1 w - - 1 6",
    jugadaCorrecta: "b2b4",
    pista: "Evita mover innecesariamente los peones de tu enroque (como g3 o h3) para no abrir vías de ataque al rival. Busca juego en otro lado."
  },
  {
    id: "bloquear_peones_piezas",
    titulo: "5. Bloquear sus propios peones y piezas",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    jugadaCorrecta: "d2d4",
    pista: "Avanza los peones centrales e4/d4 en lugar de colocar piezas directamente delante de ellos e impedir un desarrollo fluido."
  },
  {
    id: "piezas_inactivas_vs_activas",
    titulo: "6. Piezas inactivas vs. activas",
    fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 4 5",
    jugadaCorrecta: "d2d3",
    pista: "Abre paso a tu alfil encerrado en c1 para activar tus piezas en lugar de dejarlas inactivas en sus casillas originales."
  }
];

const estrategiaFinalesYPsicologia = {
  // 4. Errores Estratégicos y de Final de Partida
  estrategiaYFinales: [
    {
      id: "mates_basicos_final",
      titulo: "1. No saber dar mates básicos de final",
      fen: "4k3/8/4K3/8/8/8/8/7R w - - 0 1",
      jugadaCorrecta: "h1h8",
      pista: "Coordina tus piezas para acorralar al rey rival sin dejarlo ahogado y dar mate en la octava fila."
    },
    {
      id: "manejo_peones",
      titulo: "2. Ignorar la estructura y manejo de peones",
      fen: "8/8/4k3/p7/8/4P3/8/4K3 w - - 0 1",
      jugadaCorrecta: "e3e4",
      pista: "Avanza tus peones pasados con control evitando crear casillas débiles o permite bloquear los del rival."
    },
    {
      id: "coordinacion_piezas",
      titulo: "3. Falta de coordinación entre piezas",
      fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 4 4",
      jugadaCorrecta: "d2d3",
      pista: "No ataques con una sola pieza aislada; apoya tus fuerzas combinando varias piezas a la vez."
    },
    {
      id: "evaluacion_intercambios",
      titulo: "4. Evaluación incorrecta e impulso en intercambios",
      fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq - 5 5",
      jugadaCorrecta: "d7d6",
      pista: "No captures por impulso de inmediato. Evalúa si el cambio es equitativo antes de entregar piezas de mayor valor."
    },
    {
      id: "miedo_simplificar",
      titulo: "5. Miedo a simplificar o intercambiar",
      fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPPQPPP/R1B2RK1 w - - 6 6",
      jugadaCorrecta: "c4f7",
      pista: "Si tienes ventaja material clara, simplifica la posición cambiando piezas para asegurar una partida ganada."
    },
    {
      id: "jaques_fantasma",
      titulo: "6. Hacer jaques 'fantasma' sin propósito",
      fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
      jugadaCorrecta: "d2d3",
      pista: "No des jaque solo porque la regla lo permite. Si no ganas nada, regalas un tiempo que el rival aprovecha."
    },
    {
      id: "casillas_fortaleza_debilidad",
      titulo: "7. No identificar casillas fuertes y débiles",
      fen: "r1bqk2r/pppp1ppp/2n2n2/4p3/1b2P3/3P1N2/PPP1BPPP/RNBQ1RK1 b kq - 0 5",
      jugadaCorrecta: "d7d5",
      pista: "Busca casillas donde tus piezas no puedan ser expulsadas fácilmente por los peones del rival."
    }
  ],

  // 5. Errores Psicológicos, Reglas y Gestión de Tiempo
  psicologicosReglasYTiempo: [
    {
      id: "juego_rapido_tiempo",
      titulo: "1. Jugar demasiado rápido o colapso del tiempo",
      fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
      jugadaCorrecta: "b8c6",
      pista: "Tómate unos segundos para verificar si la casilla es segura antes de mover por impulso."
    },
    {
      id: "reglas_especiales",
      titulo: "2. Desconocer reglas especiales",
      fen: "k7/8/1K6/8/8/8/8/1Q6 w - - 0 1",
      jugadaCorrecta: "b1c1",
      pista: "Conoce las condiciones de ahogado para evitar tablas accidentales cuando vas ganando."
    },
    {
      id: "rendicion_prematura",
      titulo: "3. Rendirse prematuramente",
      fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
      jugadaCorrecta: "d2d4",
      pista: "No abandones tras perder una pieza; a este nivel las partidas se pueden remontar tras fallos del rival."
    },
    {
      id: "calculo_un_paso",
      titulo: "4. Incapacidad para calcular un paso adelante",
      fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQ1RK1 b kq - 0 5",
      jugadaCorrecta: "d7d6",
      pista: "Visualiza la posición resultante después de una secuencia simple de captura y recaptura."
    },
    {
      id: "tunel_vision_central",
      titulo: "5. Túnel de visión central y evaluación por piezas",
      fen: "r1bqk2r/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 5 5",
      jugadaCorrecta: "a7a6",
      pista: "No mires solo el número de piezas o el centro; atiende amenazas laterales sobre la seguridad de tu rey."
    },
    {
      id: "trampas_una_jugada",
      titulo: "6. Dependencia de trampas de una jugada y falta de análisis",
      fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 5 4",
      jugadaCorrecta: "d7d6",
      pista: "Crea un plan sólido en lugar de depender de un truco evidente que arruinaría tu posición si el rival lo defiende."
    },
    {
      id: "errores_interfaz",
      titulo: "7. Errores de interfaz (Misclicks)",
      fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
      jugadaCorrecta: "e7e5",
      pista: "Asegúrate de soltar la pieza en la casilla deseada para no perder turnos por clics equivocados."
    }
  ]
};