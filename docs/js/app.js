/* =========================================================
   EMPRESA DIARIO
   SISTEMA PRINCIPAL V1

   Funciones:

   1. Seleccionar palabra del día
   2. Guardar progreso
   3. Controlar conceptos aprendidos
   4. Controlar repaso
   5. Calcular racha
   6. Mostrar estadísticas
   7. Reiniciar progreso
========================================================= */


/* =========================================================
   CONFIGURACIÓN
========================================================= */

const STORAGE_KEY = "empresaDiarioV1";


/* =========================================================
   ESTADO INICIAL
========================================================= */

function obtenerEstado() {

    const guardado = localStorage.getItem(STORAGE_KEY);

    if (guardado) {

        try {

            return JSON.parse(guardado);

        } catch (error) {

            console.error(
                "No se pudo leer el progreso.",
                error
            );

        }

    }


    return {

        completed: [],

        reviews: {},

        activeDays: [],

        lastStudyDate: null,

        streak: 0

    };

}


/* =========================================================
   GUARDAR ESTADO
========================================================= */

function guardarEstado(estado) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(estado)
    );

}


/* =========================================================
   FECHA LOCAL
========================================================= */

function obtenerFechaLocal() {

    const ahora = new Date();

    const year = ahora.getFullYear();

    const month = String(
        ahora.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        ahora.getDate()
    ).padStart(2, "0");


    return `${year}-${month}-${day}`;

}


/* =========================================================
   PALABRA DEL DÍA
========================================================= */

function obtenerIndiceDia() {

    const inicio = new Date(
        "2026-01-01T00:00:00"
    );

    const hoy = new Date();

    const diferencia =
        hoy.getTime() -
        inicio.getTime();

    const dias = Math.floor(
        diferencia / 86400000
    );


    return (
        Math.abs(dias) % palabras.length
    );

}


function obtenerPalabraDelDia() {

    const indice = obtenerIndiceDia();

    return palabras[indice];

}


/* =========================================================
   REGISTRAR ACTIVIDAD
========================================================= */

function registrarActividad() {

    const estado = obtenerEstado();

    const hoy = obtenerFechaLocal();


    if (!estado.activeDays.includes(hoy)) {

        estado.activeDays.push(hoy);

    }


    actualizarRacha(estado);


    guardarEstado(estado);

}


/* =========================================================
   CALCULAR RACHA
========================================================= */

function actualizarRacha(estado) {

    if (!estado.activeDays.length) {

        estado.streak = 0;

        return;

    }


    const fechas = [
        ...new Set(
            estado.activeDays
        )
    ].sort().reverse();


    let racha = 1;


    for (let i = 0; i < fechas.length - 1; i++) {

        const fechaActual =
            new Date(fechas[i]);

        const fechaAnterior =
            new Date(fechas[i + 1]);


        const diferencia =
            (
                fechaActual -
                fechaAnterior
            ) / 86400000;


        if (diferencia === 1) {

            racha++;

        } else {

            break;

        }

    }


    estado.streak = racha;

}


/* =========================================================
   MARCAR PALABRA COMO COMPLETADA
========================================================= */

function marcarComoCompletada(id) {

    const estado = obtenerEstado();


    if (!estado.completed.includes(id)) {

        estado.completed.push(id);

    }


    registrarActividad();


    const nuevoEstado = obtenerEstado();

    nuevoEstado.completed = estado.completed;

    guardarEstado(nuevoEstado);

}


/* =========================================================
   INICIALIZAR APRENDER.HTML
========================================================= */

function iniciarAprendizaje() {

    const wordElement =
        document.getElementById("word");


    if (!wordElement) {

        return;

    }


    const palabra =
        obtenerPalabraDelDia();


    document.getElementById(
        "category"
    ).textContent =
        palabra.categoria;


    document.getElementById(
        "word"
    ).textContent =
        palabra.palabra;


    document.getElementById(
        "short-definition"
    ).textContent =
        palabra.definicionCorta;


    document.getElementById(
        "definition"
    ).textContent =
        palabra.definicion;


    document.getElementById(
        "example"
    ).textContent =
        palabra.ejemplo;


    document.getElementById(
        "question"
    ).textContent =
        palabra.pregunta;


    document.getElementById(
        "answer"
    ).textContent =
        palabra.respuesta;


    document.getElementById(
        "application"
    ).textContent =
        palabra.aplicacion;


    const estado =
        obtenerEstado();


    document.getElementById(
        "streak"
    ).textContent =
        estado.streak;


    document.getElementById(
        "day-counter"
    ).textContent =
        `Concepto ${obtenerIndiceDia() + 1} de ${palabras.length}`;


    const showAnswer =
        document.getElementById(
            "show-answer"
        );


    const answerBox =
        document.getElementById(
            "answer-box"
        );


    showAnswer.addEventListener(
        "click",
        function () {

            answerBox.classList.remove(
                "hidden"
            );

            showAnswer.classList.add(
                "hidden"
            );

            registrarActividad();

        }
    );


    const completeButton =
        document.getElementById(
            "complete-button"
        );


    const completionMessage =
        document.getElementById(
            "completion-message"
        );


    if (
        estado.completed.includes(
            palabra.id
        )
    ) {

        completeButton.textContent =
            "✓ Ya aprendido";

        completeButton.disabled = true;

        completionMessage.classList.remove(
            "hidden"
        );

    }


    completeButton.addEventListener(
        "click",
        function () {

            marcarComoCompletada(
                palabra.id
            );


            completeButton.textContent =
                "✓ Aprendizaje completado";

            completeButton.disabled = true;


            completionMessage.classList.remove(
                "hidden"
            );


            const estadoActual =
                obtenerEstado();


            document.getElementById(
                "streak"
            ).textContent =
                estadoActual.streak;

        }
    );

}


/* =========================================================
   OBTENER CONCEPTOS PARA REPASAR
========================================================= */

function obtenerConceptosParaRepaso() {

    const estado =
        obtenerEstado();


    return palabras.filter(
        palabra =>
            estado.completed.includes(
                palabra.id
            )
    );

}


/* =========================================================
   INICIALIZAR REPASO
========================================================= */

function iniciarRepaso() {

    const reviewCard =
        document.getElementById(
            "review-card"
        );


    if (!reviewCard) {

        return;

    }


    const conceptos =
        obtenerConceptosParaRepaso();


    const emptyState =
        document.getElementById(
            "review-empty"
        );


    if (!conceptos.length) {

        reviewCard.classList.add(
            "hidden"
        );

        emptyState.classList.remove(
            "hidden"
        );

        return;

    }


    /*
       Seleccionamos un concepto
       de manera sencilla.
    */

    const estado =
        obtenerEstado();


    let concepto =
        conceptos.find(
            palabra =>
                estado.reviews[
                    palabra.id
                ] !== "easy"
        );


    if (!concepto) {

        concepto =
            conceptos[
                Math.floor(
                    Math.random() *
                    conceptos.length
                )
            ];

    }


    document.getElementById(
        "review-category"
    ).textContent =
        concepto.categoria;


    document.getElementById(
        "review-word"
    ).textContent =
        concepto.palabra;


    document.getElementById(
        "review-definition"
    ).textContent =
        concepto.definicion;


    document.getElementById(
        "review-example"
    ).textContent =
        concepto.ejemplo;


    const answerButton =
        document.getElementById(
            "review-answer-button"
        );


    const answer =
        document.getElementById(
            "review-answer"
        );


    const actions =
        document.getElementById(
            "review-actions"
        );


    answerButton.addEventListener(
        "click",
        function () {

            answer.classList.remove(
                "hidden"
            );

            actions.classList.remove(
                "hidden"
            );

            answerButton.classList.add(
                "hidden"
            );

        }
    );


    const reviewButtons =
        document.querySelectorAll(
            ".review-button"
        );


    reviewButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                function () {

                    const result =
                        button.dataset.result;


                    const estadoActual =
                        obtenerEstado();


                    estadoActual.reviews[
                        concepto.id
                    ] = result;


                    registrarActividad();


                    guardarEstado(
                        estadoActual
                    );


                    answer.innerHTML = `
                        <strong>Repaso registrado</strong>
                        <p>
                            Has marcado este concepto como:
                            <strong>${textoResultado(result)}</strong>.
                        </p>
                    `;


                    actions.classList.add(
                        "hidden"
                    );


                    answerButton.classList.remove(
                        "hidden"
                    );


                    answerButton.textContent =
                        "Repasar otro concepto";


                    answerButton.onclick =
                        function () {

                            window.location.reload();

                        };

                }
            );

        }
    );

}


/* =========================================================
   TEXTO DE RESULTADO
========================================================= */

function textoResultado(resultado) {

    if (resultado === "difficult") {

        return "Necesito repasarlo";

    }


    if (resultado === "good") {

        return "Lo recordé";

    }


    if (resultado === "easy") {

        return "Lo domino";

    }


    return resultado;

}


/* =========================================================
   INICIALIZAR PROGRESO
========================================================= */

function iniciarProgreso() {

    const completedCount =
        document.getElementById(
            "completed-count"
        );


    if (!completedCount) {

        return;

    }


    const estado =
        obtenerEstado();


    const completados =
        estado.completed.length;


    const total =
        palabras.length;


    const porcentaje =
        total === 0
            ? 0
            : Math.round(
                (
                    completados /
                    total
                ) * 100
            );


    completedCount.textContent =
        completados;


    document.getElementById(
        "active-days"
    ).textContent =
        estado.activeDays.length;


    document.getElementById(
        "current-streak"
    ).textContent =
        estado.streak;


    document.getElementById(
        "total-words"
    ).textContent =
        total;


    document.getElementById(
        "progress-percentage"
    ).textContent =
        `${porcentaje}%`;


    document.getElementById(
        "progress-fill"
    ).style.width =
        `${porcentaje}%`;


    mostrarListaConceptos(
        estado
    );


    const resetButton =
        document.getElementById(
            "reset-progress"
        );


    resetButton.addEventListener(
        "click",
        function () {

            const confirmar =
                confirm(
                    "¿Seguro que quieres eliminar todo tu progreso?"
                );


            if (!confirmar) {

                return;

            }


            localStorage.removeItem(
                STORAGE_KEY
            );


            window.location.reload();

        }
    );

}


/* =========================================================
   MOSTRAR LISTA DE CONCEPTOS
========================================================= */

function mostrarListaConceptos(
    estado
) {

    const container =
        document.getElementById(
            "concept-list"
        );


    container.innerHTML = "";


    palabras.forEach(
        palabra => {

            const aprendido =
                estado.completed.includes(
                    palabra.id
                );


            const article =
                document.createElement(
                    "article"
                );


            article.className =
                "concept-item";


            article.innerHTML = `

                <div>

                    <span class="category">
                        ${palabra.categoria}
                    </span>

                    <h3>
                        ${palabra.palabra}
                    </h3>

                </div>

                <div class="concept-status">

                    ${
                        aprendido
                        ? "✓ Aprendido"
                        : "Pendiente"
                    }

                </div>

            `;


            container.appendChild(
                article
            );

        }
    );

}


/* =========================================================
   EJECUTAR SEGÚN LA PÁGINA
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        iniciarAprendizaje();

        iniciarRepaso();

        iniciarProgreso();

    }
);
