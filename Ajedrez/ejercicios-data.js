const listaEjercicios = [
  {
    id: "ruy-lopez-01",
    categoria: "Apertura Ruy López",
    titulo: "El sacrificio sobre f7",
    fen: "r1bq1rk1/2p1bpp1/p1np1n1p/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w - - 0 10",
    patron: "Sacrificio en f7",
    descripcion: "Reconoce el momento en que f7 puede sacrificarse para expulsar o desviar al rey y continuar el ataque con tempo.",
    solucion: [
      {
        jugada: "Bxf7+",
        esMia: true,
        explicacionBien: "Bxf7+ es el sacrificio temático: elimina el peón que protege al rey y fuerza una decisión inmediata.",
        explicacionMal: "Una jugada tranquila desperdicia la oportunidad de exponer al rey y permite que las negras consoliden el enroque."
      },
      {
        jugada: "Kxf7",
        esMia: false,
        explicacionBien: "Kxf7 es la respuesta concreta de la línea: captura el objetivo creado por la maniobra anterior y conserva la lógica del ejercicio.",
        explicacionMal: "Una respuesta defensiva distinta puede cambiar la posición; el objetivo es calcular esta defensa crítica y continuar con precisión."
      },
      {
        jugada: "Qb3+",
        esMia: true,
        explicacionBien: "Qb3+ mantiene el jaque y obliga al rey a responder; es la continuación concreta que justifica la idea inicial.",
        explicacionMal: "Una continuación distinta pierde parte de la ventaja obtenida; el ejercicio exige mantener la misma idea táctica hasta el final."
      }
    ]
  },
  {
    id: "ruy-lopez-02",
    categoria: "Apertura Ruy López",
    titulo: "Abrir el centro cuando el negro está mal coordinado",
    fen: "r1bq1rk1/1pp1bppp/p1np1n2/4p3/B3P3/2P2N2/PP1P1PPP/RNBQR1K1 w - - 0 8",
    patron: "Ruptura central",
    descripcion: "Convierte la ventaja de coordinación y desarrollo en una ruptura central antes de que las piezas negras se organicen.",
    solucion: [
      {
        jugada: "d4",
        esMia: true,
        explicacionBien: "d4 es la ruptura crítica: abre el centro cuando las piezas negras todavía no están coordinadas para responder con comodidad.",
        explicacionMal: "Esperar con una maniobra lenta permite que el rival complete el desarrollo y hace menos efectiva la ruptura central."
      },
      {
        jugada: "exd4",
        esMia: false,
        explicacionBien: "exd4 es la respuesta concreta de la línea: captura el objetivo creado por la maniobra anterior y conserva la lógica del ejercicio.",
        explicacionMal: "Una respuesta defensiva distinta puede cambiar la posición; el objetivo es calcular esta defensa crítica y continuar con precisión."
      },
      {
        jugada: "cxd4",
        esMia: true,
        explicacionBien: "cxd4 concreta la ganancia prevista: la continuación aprovecha exactamente la debilidad creada en el paso anterior.",
        explicacionMal: "Una continuación distinta pierde parte de la ventaja obtenida; el ejercicio exige mantener la misma idea táctica hasta el final."
      }
    ]
  },
  {
    id: "ruy-lopez-03",
    categoria: "Apertura Ruy López",
    titulo: "Clavada y sobrecarga",
    fen: "r1bqkb1r/1pp2ppp/p1p2n2/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 2 6",
    patron: "Eliminación del defensor",
    descripcion: "Después del cambio en c6, identifica qué defensa del peón e5 ha desaparecido y gana el peón con desarrollo.",
    solucion: [
      {
        jugada: "Nxe5",
        esMia: true,
        explicacionBien: "Nxe5 aprovecha que el cambio del alfil por el caballo de c6 ha eliminado al defensor principal del peón e5.",
        explicacionMal: "No capturar el peón central cuando su defensor ha sido eliminado deja escapar una ganancia concreta de material."
      }
    ]
  },
  {
    id: "italiana-01",
    categoria: "Apertura Italiana",
    titulo: "Ataque al punto f7",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
    patron: "Presión sobre f7",
    descripcion: "Coordina caballo y alfil para crear una amenaza concreta sobre f7 mientras las negras aún están desarrollando.",
    solucion: [
      {
        jugada: "Ng5",
        esMia: true,
        explicacionBien: "Ng5 coordina caballo y alfil contra f7 y plantea una amenaza concreta antes de que el negro termine su desarrollo.",
        explicacionMal: "Sin Ng5, la presión combinada sobre f7 disminuye y las negras pueden desarrollar con mucha más libertad."
      },
      {
        jugada: "d5",
        esMia: false,
        explicacionBien: "d5 es la defensa o continuación temática de esta variante; debes reconocerla antes de decidir el siguiente golpe.",
        explicacionMal: "Una respuesta defensiva distinta puede cambiar la posición; el objetivo es calcular esta defensa crítica y continuar con precisión."
      },
      {
        jugada: "exd5",
        esMia: true,
        explicacionBien: "exd5 concreta la ganancia prevista: la continuación aprovecha exactamente la debilidad creada en el paso anterior.",
        explicacionMal: "Una continuación distinta pierde parte de la ventaja obtenida; el ejercicio exige mantener la misma idea táctica hasta el final."
      }
    ]
  },
  {
    id: "italiana-02",
    categoria: "Apertura Italiana",
    titulo: "El centro contra el rey",
    fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 1 5",
    patron: "Ruptura d4 contra ...d5",
    descripcion: "La ruptura d4 obliga a Black a responder en el centro; si ...d5, exd5 abre líneas mientras el rey negro todavía no está enrocado.",
    solucion: [
      {
        jugada: "d4",
        esMia: true,
        explicacionBien: "d4 golpea el centro y obliga a las negras a definir su defensa mientras el rey todavía no tiene una posición completamente segura.",
        explicacionMal: "Evitar el choque central permite que las negras estabilicen el centro y protejan su rey sin conceder actividad."
      },
      {
        jugada: "d5",
        esMia: false,
        explicacionBien: "d5 es la defensa o continuación temática de esta variante; debes reconocerla antes de decidir el siguiente golpe.",
        explicacionMal: "Una respuesta defensiva distinta puede cambiar la posición; el objetivo es calcular esta defensa crítica y continuar con precisión."
      },
      {
        jugada: "exd5",
        esMia: true,
        explicacionBien: "exd5 concreta la ganancia prevista: la continuación aprovecha exactamente la debilidad creada en el paso anterior.",
        explicacionMal: "Una continuación distinta pierde parte de la ventaja obtenida; el ejercicio exige mantener la misma idea táctica hasta el final."
      }
    ]
  },
  {
    id: "italiana-03",
    categoria: "Apertura Italiana",
    titulo: "Descubrir la debilidad del enroque",
    fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQ1RK1 w - - 1 6",
    patron: "Sacrificio en f7",
    descripcion: "El sacrificio en f7 desvía una torre y expone al rey; después aprovecha que el centro sigue sensible.",
    solucion: [
      {
        jugada: "Bxf7+",
        esMia: true,
        explicacionBien: "Bxf7+ sacrifica el alfil para desviar al rey hacia f7 y convertir la exposición del rey en una ventaja táctica.",
        explicacionMal: "Sin el sacrificio, el rey negro puede mantenerse seguro y el ataque blanco pierde la coordinación inmediata."
      },
      {
        jugada: "Kxf7",
        esMia: false,
        explicacionBien: "Kxf7 es la respuesta concreta de la línea: captura el objetivo creado por la maniobra anterior y conserva la lógica del ejercicio.",
        explicacionMal: "Una respuesta defensiva distinta puede cambiar la posición; el objetivo es calcular esta defensa crítica y continuar con precisión."
      },
      {
        jugada: "Nxe5+",
        esMia: true,
        explicacionBien: "Nxe5+ mantiene el jaque y obliga al rey a responder; es la continuación concreta que justifica la idea inicial.",
        explicacionMal: "Una continuación distinta pierde parte de la ventaja obtenida; el ejercicio exige mantener la misma idea táctica hasta el final."
      }
    ]
  },
  {
    id: "escocesa-01",
    categoria: "Apertura Escocesa",
    titulo: "Abrir el centro antes de desarrollar",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
    patron: "Ruptura central inmediata",
    descripcion: "La Escocesa se define por golpear el centro en la tercera jugada, antes de completar el desarrollo del alfil.",
    solucion: [
      {
        jugada: "d4",
        esMia: true,
        explicacionBien: "d4 es la idea fundacional de la Escocesa: abrir el centro inmediatamente y convertir el tiempo de desarrollo en actividad.",
        explicacionMal: "Una jugada de espera renuncia a la característica principal de la Escocesa: aprovechar desde ya el desarrollo mediante el centro."
      },
      {
        jugada: "exd4",
        esMia: false,
        explicacionBien: "exd4 es la respuesta concreta de la línea: captura el objetivo creado por la maniobra anterior y conserva la lógica del ejercicio.",
        explicacionMal: "Una respuesta defensiva distinta puede cambiar la posición; el objetivo es calcular esta defensa crítica y continuar con precisión."
      },
      {
        jugada: "Nxd4",
        esMia: true,
        explicacionBien: "Nxd4 concreta la ganancia prevista: la continuación aprovecha exactamente la debilidad creada en el paso anterior.",
        explicacionMal: "Una continuación distinta pierde parte de la ventaja obtenida; el ejercicio exige mantener la misma idea táctica hasta el final."
      }
    ]
  },
  {
    id: "escocesa-02",
    categoria: "Apertura Escocesa",
    titulo: "Atacar la pieza clavada",
    fen: "r1bqk2r/pppp1ppp/2n2n2/8/1b1NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 3 6",
    patron: "Cambio del defensor y ganancia de tiempo",
    descripcion: "Elimina el caballo de c6 y después usa e5 para expulsar al otro caballo y conservar la iniciativa central.",
    solucion: [
      {
        jugada: "Nxc6",
        esMia: true,
        explicacionBien: "Nxc6 elimina el caballo de c6, un defensor central importante; después la ruptura e5 gana otro tiempo.",
        explicacionMal: "Si no eliminas al defensor de c6, la presión sobre el centro negro sigue intacta y el avance e5 pierde parte de su efecto."
      },
      {
        jugada: "bxc6",
        esMia: false,
        explicacionBien: "bxc6 es la respuesta concreta de la línea: captura el objetivo creado por la maniobra anterior y conserva la lógica del ejercicio.",
        explicacionMal: "Una respuesta defensiva distinta puede cambiar la posición; el objetivo es calcular esta defensa crítica y continuar con precisión."
      },
      {
        jugada: "e5",
        esMia: true,
        explicacionBien: "e5 completa el plan: mantiene la iniciativa y demuestra por qué la secuencia anterior era necesaria.",
        explicacionMal: "Una continuación distinta pierde parte de la ventaja obtenida; el ejercicio exige mantener la misma idea táctica hasta el final."
      }
    ]
  },
  {
    id: "escocesa-03",
    categoria: "Apertura Escocesa",
    titulo: "La ruptura e5",
    fen: "r1bqkb1r/1ppp1ppp/p1n2n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
    patron: "Peón avanzado que gana tiempos",
    descripcion: "El avance e5 obliga al caballo f6 a reaccionar; el cambio posterior elimina ese defensor avanzado.",
    solucion: [
      {
        jugada: "e5",
        esMia: true,
        explicacionBien: "e5 avanza con tempo sobre el caballo de f6 y explota la ventaja de espacio creada en el centro.",
        explicacionMal: "No jugar e5 deja al caballo f6 cómodo y reduce el valor de la mayoría de tiempos ganados por el centro."
      },
      {
        jugada: "Nd5",
        esMia: false,
        explicacionBien: "Nd5 es la defensa o continuación temática de esta variante; debes reconocerla antes de decidir el siguiente golpe.",
        explicacionMal: "Una respuesta defensiva distinta puede cambiar la posición; el objetivo es calcular esta defensa crítica y continuar con precisión."
      },
      {
        jugada: "Nxd5",
        esMia: true,
        explicacionBien: "Nxd5 concreta la ganancia prevista: la continuación aprovecha exactamente la debilidad creada en el paso anterior.",
        explicacionMal: "Una continuación distinta pierde parte de la ventaja obtenida; el ejercicio exige mantener la misma idea táctica hasta el final."
      }
    ]
  },
  {
    id: "siciliana-01",
    categoria: "Defensa Siciliana",
    titulo: "El peón venenoso",
    fen: "rnb1kb1r/1p3ppp/pq1ppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R w KQkq - 1 8",
    patron: "Peón envenenado",
    descripcion: "La dama que toma b2 puede ganar un peón, pero permite que las blancas ganen tiempos de desarrollo y la obliguen a moverse.",
    solucion: [
      {
        jugada: "Qd2",
        esMia: true,
        explicacionBien: "Qd2 prepara Rb1 para castigar la incursión de la dama negra en b2 con ganancia de tiempos.",
        explicacionMal: "Perseguir el peón sin preparar Rb1 deja que la dama negra capture material y escape sin pagar tiempos de desarrollo."
      },
      {
        jugada: "Qxb2",
        esMia: false,
        explicacionBien: "Qxb2 es la respuesta concreta de la línea: captura el objetivo creado por la maniobra anterior y conserva la lógica del ejercicio.",
        explicacionMal: "Una respuesta defensiva distinta puede cambiar la posición; el objetivo es calcular esta defensa crítica y continuar con precisión."
      },
      {
        jugada: "Rb1",
        esMia: true,
        explicacionBien: "Rb1 completa el plan: mantiene la iniciativa y demuestra por qué la secuencia anterior era necesaria.",
        explicacionMal: "Una continuación distinta pierde parte de la ventaja obtenida; el ejercicio exige mantener la misma idea táctica hasta el final."
      }
    ]
  },
  {
    id: "siciliana-02",
    categoria: "Defensa Siciliana",
    titulo: "Ataque en el flanco de rey",
    fen: "rnbq1rk1/1p2ppbp/p2p1np1/8/3NP3/2N1B3/PPPQ1PPP/2KR1B1R w - - 0 9",
    patron: "Ataque con peones en flancos opuestos",
    descripcion: "Con los reyes en flancos opuestos, el peón h puede abrir líneas y expulsar a un defensor antes de activar la torre.",
    solucion: [
      {
        jugada: "h4",
        esMia: true,
        explicacionBien: "h4 inicia el ataque de peones con los reyes en flancos opuestos; en estas posiciones la velocidad del ataque importa.",
        explicacionMal: "Un ataque lento permite que el rival consolide el flanco de rey antes de que puedan abrirse líneas."
      },
      {
        jugada: "h6",
        esMia: false,
        explicacionBien: "h6 es la defensa o continuación temática de esta variante; debes reconocerla antes de decidir el siguiente golpe.",
        explicacionMal: "Una respuesta defensiva distinta puede cambiar la posición; el objetivo es calcular esta defensa crítica y continuar con precisión."
      },
      {
        jugada: "h5",
        esMia: true,
        explicacionBien: "h5 es la continuación agresiva: fija el peón de h6 y sigue ganando espacio en el flanco de rey.",
        explicacionMal: "Cambiar el orden o elegir una continuación pasiva permite que la oportunidad táctica se reduzca o desaparezca."
      },
      {
        jugada: "Nxh5",
        esMia: false,
        explicacionBien: "Nxh5 es la respuesta concreta de la línea: captura el peón avanzado y trata de neutralizar el ataque.",
        explicacionMal: "Una respuesta distinta cambia la estructura; el objetivo es comprobar que puedes calcular la recaptura antes de comprometer la torre."
      },
      {
        jugada: "Rxh5",
        esMia: true,
        explicacionBien: "Rxh5 recaptura y activa la torre en el flanco de rey, manteniendo presión sobre las casillas debilitadas.",
        explicacionMal: "No recapturar permite que las negras conserven material y elimina gran parte de la fuerza del ataque."
      }
    ]
  },
  {
    id: "siciliana-03",
    categoria: "Defensa Siciliana",
    titulo: "Sacrificio en d5",
    fen: "rnbqkb1r/1p3ppp/p2ppn2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R w KQkq - 0 7",
    patron: "Desviación del caballo",
    descripcion: "Nd5 desvía al caballo f6 y abre la diagonal del alfil g5 hacia la dama en d8.",
    solucion: [
      {
        jugada: "Nd5",
        esMia: true,
        explicacionBien: "Nd5 es el sacrificio táctico: desvía al caballo de f6 y abre la diagonal del alfil g5 hacia la dama negra.",
        explicacionMal: "Sin la desviación en d5, el caballo f6 continúa defendiendo la zona y la diagonal del alfil sigue bloqueada."
      },
      {
        jugada: "Nxd5",
        esMia: false,
        explicacionBien: "Nxd5 es la respuesta concreta de la línea: captura el objetivo creado por la maniobra anterior y conserva la lógica del ejercicio.",
        explicacionMal: "Una respuesta defensiva distinta puede cambiar la posición; el objetivo es calcular esta defensa crítica y continuar con precisión."
      },
      {
        jugada: "Bxd8",
        esMia: true,
        explicacionBien: "Bxd8 concreta la ganancia prevista: la continuación aprovecha exactamente la debilidad creada en el paso anterior.",
        explicacionMal: "Una continuación distinta pierde parte de la ventaja obtenida; el ejercicio exige mantener la misma idea táctica hasta el final."
      }
    ]
  },
  {
    id: "francesa-01",
    categoria: "Defensa Francesa",
    titulo: "Ataque contra la cadena",
    fen: "r1b1kbnr/pp3ppp/1qn1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq - 3 6",
    patron: "Ataque a la base de la cadena",
    descripcion: "Desarrolla el alfil y comprende que la base d4 es el punto crítico de la estructura.",
    solucion: [
      {
        jugada: "Bd3",
        esMia: true,
        explicacionBien: "Bd3 desarrolla el alfil hacia la zona de ataque y prepara la presión sobre la base d4 de la cadena blanca.",
        explicacionMal: "Una jugada pasiva no ataca la base de la cadena y permite que las negras mantengan la tensión bajo buenas condiciones."
      },
      {
        jugada: "cxd4",
        esMia: false,
        explicacionBien: "cxd4 es la respuesta concreta de la línea: captura el objetivo creado por la maniobra anterior y conserva la lógica del ejercicio.",
        explicacionMal: "Una respuesta defensiva distinta puede cambiar la posición; el objetivo es calcular esta defensa crítica y continuar con precisión."
      },
      {
        jugada: "cxd4",
        esMia: true,
        explicacionBien: "cxd4 concreta la ganancia prevista: la continuación aprovecha exactamente la debilidad creada en el paso anterior.",
        explicacionMal: "Una continuación distinta pierde parte de la ventaja obtenida; el ejercicio exige mantener la misma idea táctica hasta el final."
      }
    ]
  },
  {
    id: "francesa-02",
    categoria: "Defensa Francesa",
    titulo: "Romper la cadena",
    fen: "rnbqkb1r/ppp2ppp/4pn2/3pP3/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 2 4",
    patron: "Ruptura ...c5",
    descripcion: "El contragolpe ...c5 ataca la base de la cadena y evita que White consolide demasiado espacio.",
    solucion: [
      {
        jugada: "c5",
        esMia: true,
        explicacionBien: "...c5 es la ruptura temática de la Francesa: golpea la base de la cadena antes de que las blancas la consoliden.",
        explicacionMal: "No jugar ...c5 deja a las blancas conservar espacio y facilita la consolidación de su cadena de peones."
      },
      {
        jugada: "dxc5",
        esMia: false,
        explicacionBien: "dxc5 es la respuesta concreta de la línea: captura el objetivo creado por la maniobra anterior y conserva la lógica del ejercicio.",
        explicacionMal: "Una respuesta defensiva distinta puede cambiar la posición; el objetivo es calcular esta defensa crítica y continuar con precisión."
      },
      {
        jugada: "Bxc5",
        esMia: true,
        explicacionBien: "Bxc5 concreta la ganancia prevista: la continuación aprovecha exactamente la debilidad creada en el paso anterior.",
        explicacionMal: "Una continuación distinta pierde parte de la ventaja obtenida; el ejercicio exige mantener la misma idea táctica hasta el final."
      }
    ]
  },
  {
    id: "francesa-03",
    categoria: "Defensa Francesa",
    titulo: "Ataque sobre d4",
    fen: "rnbq1rk1/pp2bppp/4pn2/2pp2B1/3PP3/2P2N1P/PP2BPP1/RN1QK2R b KQ - 0 7",
    patron: "Presión acumulativa sobre d4",
    descripcion: "Varias piezas y peones pueden concentrarse contra d4; calcula el intercambio y la estructura resultante.",
    solucion: [
      {
        jugada: "cxd4",
        esMia: true,
        explicacionBien: "...cxd4 elimina el peón central que sostiene la estructura y fuerza a las blancas a decidir cómo recapturar.",
        explicacionMal: "Si las negras no cambian en d4, el peón central blanco puede sostener un espacio cómodo y limitar el contrajuego."
      },
      {
        jugada: "cxd4",
        esMia: false,
        explicacionBien: "cxd4 concreta la ganancia prevista: la continuación aprovecha exactamente la debilidad creada en el paso anterior.",
        explicacionMal: "Una continuación distinta pierde parte de la ventaja obtenida; el ejercicio exige mantener la misma idea táctica hasta el final."
      }
    ]
  },
  {
    id: "caro-kann-01",
    categoria: "Defensa Caro-Kann",
    titulo: "Presión contra f7",
    fen: "r2qkbnr/pp1npppp/2p3b1/8/3P4/5NN1/PPP2PPP/R1BQKB1R w KQkq - 5 7",
    patron: "Presión y doble ataque en f7",
    descripcion: "El caballo g5 aumenta la presión sobre f7; tras ...h6, Nxf7 gana el ritmo necesario para atacar dama y torre.",
    solucion: [
      {
        jugada: "Ng5",
        esMia: true,
        explicacionBien: "Ng5 crea presión directa sobre f7 y prepara una captura que ataca simultáneamente piezas de alto valor.",
        explicacionMal: "Una maniobra sin amenaza permite que las negras terminen el desarrollo y reduzcan la presión sobre f7."
      },
      {
        jugada: "h6",
        esMia: false,
        explicacionBien: "h6 es la defensa o continuación temática de esta variante; debes reconocerla antes de decidir el siguiente golpe.",
        explicacionMal: "Una respuesta defensiva distinta puede cambiar la posición; el objetivo es calcular esta defensa crítica y continuar con precisión."
      },
      {
        jugada: "Nxf7",
        esMia: true,
        explicacionBien: "Nxf7 captura el peón con jaque o amenaza decisiva según la posición y mantiene la presión sobre las piezas negras.",
        explicacionMal: "Retirar el caballo sin concretar permite que la defensa negra se reorganice y reduce la compensación obtenida."
      }
    ]
  },
  {
    id: "caro-kann-02",
    categoria: "Defensa Caro-Kann",
    titulo: "Ruptura e5",
    fen: "r1bqkbnr/pp2pppp/2n2n2/2pp4/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 5",
    patron: "Ganancia de espacio central",
    descripcion: "La ruptura e5 gana espacio y obliga a las piezas negras a buscar nuevas casillas.",
    solucion: [
      {
        jugada: "e5",
        esMia: true,
        explicacionBien: "e5 fija el centro y gana espacio, restringiendo especialmente al caballo que necesita encontrar una casilla activa.",
        explicacionMal: "No avanzar e5 permite que las negras mantengan una estructura compacta y desarrollen sin restricciones."
      },
      {
        jugada: "Nd5",
        esMia: false,
        explicacionBien: "Nd5 es la defensa o continuación temática de esta variante; debes reconocerla antes de decidir el siguiente golpe.",
        explicacionMal: "Una respuesta distinta puede cambiar la naturaleza de la posición; aquí se entrena el cálculo frente a la reacción crítica."
      },
      {
        jugada: "Bc4",
        esMia: true,
        explicacionBien: "Bc4 desarrolla el alfil con actividad y aprovecha el espacio obtenido para apuntar al sector del rey.",
        explicacionMal: "Una continuación pasiva deja que las negras completen el desarrollo y reduzcan la ventaja de espacio."
      }
    ]
  },
  {
    id: "caro-kann-03",
    categoria: "Defensa Caro-Kann",
    titulo: "Sacrificio sobre h7",
    fen: "r1bq1rk1/ppp2ppp/2n2n2/8/3P2N1/3BP2N/PPP1QPPP/R3K2R w KQ - 0 9",
    patron: "Sacrificio griego en h7",
    descripcion: "El alfil se sacrifica en h7 para atraer al rey y permitir la entrada de la dama por h5.",
    solucion: [
      {
        jugada: "Bxh7+",
        esMia: true,
        explicacionBien: "Bxh7+ fuerza una decisión del rey y elimina el peón escudo que protege las casillas próximas al monarca.",
        explicacionMal: "Un ataque lento permite al negro mantener intacto el refugio de su rey."
      },
      {
        jugada: "Kxh7",
        esMia: false,
        explicacionBien: "Kxh7 acepta el sacrificio y permite comprobar la continuación táctica.",
        explicacionMal: "Una defensa distinta cambiaría la posición; aquí se entrena la variante crítica."
      },
      {
        jugada: "Qh5+",
        esMia: true,
        explicacionBien: "Qh5+ aprovecha la posición expuesta del rey y continúa el ataque con jaque.",
        explicacionMal: "Sin un jaque inmediato, el sacrificio pierde gran parte de su fuerza porque el rey puede reorganizarse."
      }
    ]
  },
  {
    id: "gambito-dama-01",
    categoria: "Gambito de Dama",
    titulo: "La estructura del Gambito de Dama",
    fen: "rnbq1rk1/ppp1bppp/4pn2/3p2B1/2PP4/2N1P3/PP3PPP/R2QKBNR w KQ - 1 6",
    patron: "Transformación de la estructura",
    descripcion: "El cambio en d5 define la estructura de peones y determina qué lado puede atacar las debilidades resultantes.",
    solucion: [
      {
        jugada: "cxd5",
        esMia: true,
        explicacionBien: "cxd5 transforma la estructura y crea una decisión estratégica sobre el peón central negro.",
        explicacionMal: "Evitar el cambio cuando la estructura lo permite puede dejar al rival con un centro cómodo."
      },
      {
        jugada: "exd5",
        esMia: false,
        explicacionBien: "exd5 es la recaptura crítica y produce la estructura temática del ejercicio.",
        explicacionMal: "Otra recaptura cambiaría la estructura y ya no representaría el objetivo pedagógico de este ejercicio."
      }
    ]
  },
  {
    id: "gambito-dama-02",
    categoria: "Gambito de Dama",
    titulo: "La clavada sobre el caballo",
    fen: "r2q1rk1/ppp2ppp/2n1pn2/3pP1B1/3P4/2N2N2/PP3PPP/R2QK2R w KQ - 0 9",
    patron: "Clavada y expulsión",
    descripcion: "El alfil mantiene al caballo f6 ligado a la protección del rey mientras el avance e5 gana espacio y tiempo.",
    solucion: [
      {
        jugada: "e5",
        esMia: true,
        explicacionBien: "e5 gana espacio y ataca al caballo f6, obligándolo a reaccionar mientras la clavada limita sus opciones.",
        explicacionMal: "Una jugada lenta deja al caballo cómodamente defendiendo el centro y permite la consolidación negra."
      },
      {
        jugada: "Ne4",
        esMia: false,
        explicacionBien: "Ne4 es la respuesta concreta que busca una casilla activa para el caballo.",
        explicacionMal: "Cualquier otra respuesta debe calcularse, porque puede modificar completamente la estructura y la táctica."
      }
    ]
  },
  {
    id: "gambito-dama-03",
    categoria: "Gambito de Dama",
    titulo: "Sacrificio para destruir el enroque",
    fen: "r1bq1rk1/ppp2ppp/2n2n2/8/3P2N1/3BP2N/PPQ2PPP/R3K2R w KQ - 0 9",
    patron: "Sacrificio griego",
    descripcion: "El sacrificio en h7 busca destruir el escudo del rey y abrir una ruta directa para la dama.",
    solucion: [
      {
        jugada: "Bxh7+",
        esMia: true,
        explicacionBien: "Bxh7+ es el sacrificio clásico para atraer al rey y destruir el peón que protege su refugio.",
        explicacionMal: "Sin abrir la estructura del enroque, el ataque tiene menos posibilidades de crear amenazas concretas."
      },
      {
        jugada: "Kxh7",
        esMia: false,
        explicacionBien: "Kxh7 acepta el sacrificio y permite ejecutar la segunda parte de la combinación.",
        explicacionMal: "Otra defensa cambia la variante; aquí interesa comprobar la continuación contra la captura natural."
      },
      {
        jugada: "Qh5+",
        esMia: true,
        explicacionBien: "Qh5+ lleva la dama inmediatamente al sector debilitado y mantiene al rey negro bajo jaque.",
        explicacionMal: "Una jugada sin jaque permite al rey consolidarse y puede hacer insuficiente el sacrificio."
      }
    ]
  },
  {
    id: "holandesa-01",
    categoria: "Defensa Holandesa",
    titulo: "Debilidad de f7",
    fen: "rnbq1rk1/ppppb1pp/4pn2/5p2/3P4/5NP1/PPP1PPBP/RNBQ1RK1 w - - 4 6",
    patron: "Lucha contra el centro de la Holandesa",
    descripcion: "La expansión c4 cuestiona el centro negro y prepara el desarrollo de las piezas blancas hacia casillas activas.",
    solucion: [
      {
        jugada: "c4",
        esMia: true,
        explicacionBien: "c4 desafía el centro negro y gana influencia sobre d5 antes de que las negras puedan construir un bloque estable.",
        explicacionMal: "No luchar por el centro permite que la estructura negra se consolide cómodamente."
      },
      {
        jugada: "d6",
        esMia: false,
        explicacionBien: "d6 refuerza el centro negro y representa la respuesta crítica que hay que saber enfrentar.",
        explicacionMal: "Ignorar el centro permitiría una expansión blanca todavía mayor."
      },
      {
        jugada: "Nc3",
        esMia: true,
        explicacionBien: "Nc3 completa el desarrollo y aumenta el control sobre las casillas centrales.",
        explicacionMal: "Una jugada lenta desaprovecha la ventaja de espacio y coordinación."
      }
    ]
  },
  {
    id: "holandesa-02",
    categoria: "Defensa Holandesa",
    titulo: "Ataque en el flanco de rey",
    fen: "r1bq1rk1/ppp3pp/2n2p2/3p1p2/3P3P/2N1P3/PP3PP1/R1BQ1RK1 w - - 0 9",
    patron: "Avance de peones contra el enroque",
    descripcion: "El avance h4-h5 fija el flanco de rey y prepara la apertura de líneas contra el refugio del monarca negro.",
    solucion: [
      {
        jugada: "h4",
        esMia: true,
        explicacionBien: "h4 gana espacio y fija el objetivo antes de abrir las columnas del flanco de rey.",
        explicacionMal: "Atacar sin fijar primero los peones permite al defensor cerrar las líneas."
      },
      {
        jugada: "h5",
        esMia: false,
        explicacionBien: "h5 intenta cerrar el flanco y reducir la velocidad del ataque blanco.",
        explicacionMal: "Una respuesta que no controle el avance permite una ruptura más directa."
      },
      {
        jugada: "g4",
        esMia: true,
        explicacionBien: "g4 continúa la expansión y amenaza abrir líneas hacia el rey negro.",
        explicacionMal: "Retroceder o jugar pasivamente permite al rival estabilizar el flanco."
      }
    ]
  },
  {
    id: "holandesa-03",
    categoria: "Defensa Holandesa",
    titulo: "La ruptura e4",
    fen: "r1bq1rk1/ppp2ppp/3ppn2/5p2/2PP4/5NP1/PP3PBP/RNBQ1RK1 w - - 0 8",
    patron: "Ruptura central contra una defensa de flanco",
    descripcion: "La ruptura e4 devuelve el golpe en el centro y busca abrir líneas antes de que la estructura holandesa quede consolidada.",
    solucion: [
      {
        jugada: "e4",
        esMia: true,
        explicacionBien: "e4 desafía inmediatamente la estructura negra y abre líneas para las piezas blancas.",
        explicacionMal: "Esperar demasiado permite que las negras fortalezcan el centro y hagan más difícil la ruptura."
      },
      {
        jugada: "fxe4",
        esMia: false,
        explicacionBien: "fxe4 acepta el choque y abre la posición; debes estar preparado para utilizar las líneas recién creadas.",
        explicacionMal: "Una respuesta distinta cambia la estructura y puede eliminar el motivo concreto del ejercicio."
      },
      {
        jugada: "Ng5",
        esMia: true,
        explicacionBien: "Ng5 activa el caballo hacia el flanco de rey y combina la ruptura central con presión sobre h7 y f7.",
        explicacionMal: "Una jugada pasiva pierde el momento de aprovechar las líneas abiertas."
      }
    ]
  },
  {
    id: "gambitos-01",
    categoria: "Gambitos",
    titulo: "Gambito de Rey",
    fen: "rnbqkbnr/pppp1ppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 1 3",
    patron: "Peón por iniciativa",
    descripcion: "Después del sacrificio en f4, las blancas deben usar su ventaja de desarrollo para atacar antes de recuperar el material.",
    solucion: [
      {
        jugada: "Bc4",
        esMia: true,
        explicacionBien: "Bc4 desarrolla con tempo potencial contra f7 y demuestra la compensación del peón sacrificado.",
        explicacionMal: "Intentar recuperar el peón inmediatamente puede desperdiciar los tiempos ganados."
      },
      {
        jugada: "Nf6",
        esMia: false,
        explicacionBien: "Nf6 es la continuación natural del desarrollo negro y constituye una defensa crítica.",
        explicacionMal: "Una respuesta pasiva puede permitir que el ataque blanco gane todavía más fuerza."
      },
      {
        jugada: "e5",
        esMia: true,
        explicacionBien: "e5 gana espacio y ataca al caballo, obligando a las negras a perder otro tiempo.",
        explicacionMal: "No aprovechar el centro permite que las negras terminen de desarrollar y neutralicen el gambito."
      }
    ]
  },
  {
    id: "gambitos-02",
    categoria: "Gambitos",
    titulo: "Gambito Evans",
    fen: "r1bqk1nr/pppp1ppp/2n5/4p3/1bB1P3/5N2/P1PP1PPP/RNBQK2R w KQkq - 0 5",
    patron: "Sacrificio de peón para ganar tiempos",
    descripcion: "El peón de b4 se sacrifica para obligar al alfil negro a desviarse y permitir c3 y d4.",
    solucion: [
      {
        jugada: "c3",
        esMia: true,
        explicacionBien: "c3 prepara el centro d4 y, al mismo tiempo, proporciona soporte para la expansión central.",
        explicacionMal: "Una jugada lenta reduce el beneficio de haber desviado al alfil negro."
      },
      {
        jugada: "d4",
        esMia: true,
        explicacionBien: "d4 abre inmediatamente el centro, que es precisamente la compensación buscada por el Gambito Evans.",
        explicacionMal: "No abrir el centro permite que las negras reagrupen el alfil y hagan valer el peón de más."
      }
    ]
  },
  {
    id: "gambitos-03",
    categoria: "Gambitos",
    titulo: "Gambito Smith-Morra",
    fen: "rnbqkbnr/pp2pppp/3p4/8/4P3/2N5/PP3PPP/R1BQKBNR w KQkq - 0 5",
    patron: "Material por iniciativa",
    descripcion: "El peón sacrificado se transforma en desarrollo rápido y presión contra f7.",
    solucion: [
      {
        jugada: "Bc4",
        esMia: true,
        explicacionBien: "Bc4 usa la ventaja de desarrollo comprada con el peón para apuntar directamente hacia f7.",
        explicacionMal: "Buscar recuperar el peón antes de desarrollar desperdicia la compensación y deja las piezas blancas sin coordinación."
      },
      {
        jugada: "Nc6",
        esMia: false,
        explicacionBien: "Nc6 es la defensa o continuación temática de esta variante; debes reconocerla antes de decidir el siguiente golpe.",
        explicacionMal: "Una respuesta defensiva distinta puede cambiar la posición; el objetivo es calcular esta defensa crítica y continuar con precisión."
      },
      {
        jugada: "Nf3",
        esMia: true,
        explicacionBien: "Nf3 completa el plan: mantiene la iniciativa y desarrolla una pieza hacia una casilla activa.",
        explicacionMal: "Una continuación distinta permite que las negras completen el desarrollo y reduzcan la compensación."
      }
    ]
  },
  {
    id: "trampas-01",
    categoria: "Trampas de apertura",
    titulo: "Blackburne-Shilling",
    fen: "r1bqkbnr/pppp1ppp/8/4N3/2BnP3/8/PPPP1PPP/RNBQK2R b KQkq - 0 4",
    patron: "Cebo y ataque sobre g2",
    descripcion: "El peón e5 parece gratuito, pero ...Qg5 crea amenazas simultáneas sobre el caballo y g2.",
    solucion: [
      {
        jugada: "Qg5",
        esMia: true,
        explicacionBien: "...Qg5 es el cebo táctico: la dama ataca el caballo e5 y prepara la entrada sobre g2.",
        explicacionMal: "Tomar el peón sin comprobar ...Qg5 permite la entrada de la dama sobre g2 y deja al rey demasiado expuesto."
      },
      {
        jugada: "Nxf7",
        esMia: false,
        explicacionBien: "Nxf7 es la respuesta concreta de la línea: el caballo busca material adicional y permite que la dama complete su incursión.",
        explicacionMal: "Una retirada prudente cambiaría la trampa; aquí debes reconocer el recurso táctico que castiga la codicia."
      },
      {
        jugada: "Qxg2",
        esMia: true,
        explicacionBien: "Qxg2 captura el peón crítico y crea amenazas alrededor del rey blanco.",
        explicacionMal: "No aprovechar g2 después de haber atraído al caballo reduce drásticamente la fuerza de la combinación."
      }
    ]
  },
  {
    id: "trampas-02",
    categoria: "Trampas de apertura",
    titulo: "Trampa de Legal",
    fen: "rn1qkbnr/ppp2p1p/3p2p1/4p3/2B1P1b1/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5",
    patron: "Clavada ilusoria y sacrificio de dama",
    descripcion: "La clavada del caballo no es absoluta: si Black captura la dama, la red Bxf7+ y Nd5# fuerza el mate.",
    solucion: [
      {
        jugada: "Nxe5",
        esMia: true,
        explicacionBien: "Nxe5 es el golpe de la Trampa de Legal: las blancas aceptan entregar la dama porque existe una red de mate forzada.",
        explicacionMal: "La alternativa de aceptar la clavada como absoluta pierde la posibilidad de la combinación de mate; aquí hay que calcular la red completa."
      },
      {
        jugada: "Bxd1",
        esMia: false,
        explicacionBien: "Bxd1 captura la dama, cayendo en la combinación preparada.",
        explicacionMal: "No aceptar el sacrificio evita la continuación concreta, aunque cambia la variante."
      },
      {
        jugada: "Bxf7+",
        esMia: true,
        explicacionBien: "Bxf7+ continúa con jaque, por lo que la defensa rival queda limitada y la iniciativa permanece en manos del atacante.",
        explicacionMal: "Cambiar el orden o elegir una continuación pasiva permite que la oportunidad táctica desaparezca."
      },
      {
        jugada: "Ke7",
        esMia: false,
        explicacionBien: "Ke7 es la defensa crítica y coloca al rey en la casilla desde la que debe enfrentarse al golpe final.",
        explicacionMal: "Otra respuesta cambia la línea; aquí se practica el cálculo de la defensa principal."
      },
      {
        jugada: "Nd5#",
        esMia: true,
        explicacionBien: "Nd5# completa la combinación y da mate, demostrando que el sacrificio de dama estaba justificado.",
        explicacionMal: "Cualquier otra continuación pierde la coordinación que hace posible el mate."
      }
    ]
  },
  {
    id: "trampas-03",
    categoria: "Trampas de apertura",
    titulo: "Lasker en el Gambito de Dama",
    fen: "rnbqk1nr/ppp2ppp/8/4P3/1BP5/4p3/PP3PPP/RN1QKBNR b KQkq - 0 6",
    patron: "Subpromoción a caballo con jaque",
    descripcion: "La secuencia del Albin culmina con ...fxg1=N+, porque el caballo promocionado da jaque y crea una amenaza decisiva.",
    solucion: [
      {
        jugada: "exf2+",
        esMia: true,
        explicacionBien: "...exf2+ comienza la secuencia táctica y avanza el peón con jaque hacia la promoción.",
        explicacionMal: "Cambiar la idea de promoción elimina el recurso táctico de la subpromoción."
      },
      {
        jugada: "Ke2",
        esMia: false,
        explicacionBien: "Ke2 es la defensa crítica y permite continuar con el avance del peón negro.",
        explicacionMal: "Otra respuesta cambia la secuencia táctica que se pretende practicar."
      },
      {
        jugada: "fxg1=N+",
        esMia: true,
        explicacionBien: "fxg1=N+ es la subpromoción característica: en vez de una dama o torre, el caballo promocionado da jaque y crea una amenaza adicional.",
        explicacionMal: "Promocionar a dama o torre elimina el motivo táctico especial de esta trampa."
      }
    ]
  },
  {
    id: "en-passant-01",
    categoria: "Captura al paso",
    titulo: "La captura al paso da jaque descubierto",
    fen: "4k3/8/8/4Pp2/8/8/8/4R1K1 w - f6 0 1",
    patron: "En passant y apertura de línea",
    descripcion: "El derecho temporal permite retirar el peón de f5 y abrir la columna de la torre sobre el rey.",
    solucion: [
      {
        jugada: "exf6+",
        esMia: true,
        explicacionBien: "exf6 e.p. es legal solamente ahora y, al retirar el peón de f5, abre la columna e de la torre contra el rey.",
        explicacionMal: "Después de una jugada distinta se pierde el derecho al en passant y la columna e deja de poder abrirse de esta manera."
      }
    ]
  },
  {
    id: "en-passant-02",
    categoria: "Captura al paso",
    titulo: "Jaque descubierto por en passant",
    fen: "3k4/8/8/3Pp3/8/8/8/3R2K1 w - e6 0 1",
    patron: "En passant y descubrimiento",
    descripcion: "La captura al paso retira el peón de e5 y abre la columna d de la torre contra el rey.",
    solucion: [
      {
        jugada: "dxe6+",
        esMia: true,
        explicacionBien: "dxe6 e.p. elimina el peón de e5 aunque no termina en la casilla que ocupaba; al hacerlo descubre la torre de d1.",
        explicacionMal: "Esperar una jugada significa perder el derecho al en passant y conservar el bloqueo sobre la columna d."
      }
    ]
  },
  {
    id: "en-passant-03",
    categoria: "Captura al paso",
    titulo: "Peón defensor sobrecargado",
    fen: "3k4/8/8/2pP2Q1/8/8/8/3R2K1 w - c6 0 1",
    patron: "En passant y desviación",
    descripcion: "El peón de c5 desaparece sin ocupar c6, dejando libre la línea de la torre y conservando una amenaza adicional de dama.",
    solucion: [
      {
        jugada: "dxc6+",
        esMia: true,
        explicacionBien: "dxc6 e.p. elimina el peón de c5 inmediatamente después de su doble avance y abre la línea de la torre.",
        explicacionMal: "Cualquier jugada que no capture al paso desperdicia la ocasión creada por el doble avance del peón negro."
      }
    ]
  },
  {
    id: "en-passant-04",
    categoria: "Captura al paso",
    titulo: "La regla temporal decisiva",
    fen: "4k3/8/8/3pP3/8/8/8/4K3 w - d6 0 1",
    patron: "Regla temporal",
    descripcion: "El FEN registra d6 como casilla en passant: la captura solo es legal ahora, inmediatamente después de que el peón negro avanzara dos casillas de d7 a d5.",
    solucion: [
      {
        jugada: "exd6",
        esMia: true,
        explicacionBien: "exd6 e.p. demuestra la regla temporal: el doble avance ...d7-d5 deja d6 disponible solo para esta respuesta inmediata.",
        explicacionMal: "Si se deja pasar el turno, d6 deja de ser una casilla de captura al paso y la misma captura se vuelve ilegal."
      }
    ]
  }
];
