```javascript
/* =========================================================
   ZENTROX
   SISTEMA PRINCIPAL V1

   Metodología:

   COMPRENDER
        ↓
   VER CONTEXTO
        ↓
   RAZONAR
        ↓
   ELEGIR
        ↓
   RECIBIR FEEDBACK
        ↓
   APLICAR
        ↓
   REPASAR
========================================================= */


const STORAGE_KEY = "zentroxV1";


/* =========================================================
   ESTADO
========================================================= */

function obtenerEstado() {

    const guardado =
        localStorage.getItem(STORAGE_KEY);


    if (guardado) {

        try {

            return JSON.parse(guardado);

        } catch (error) {

            console.error(
                "Error leyendo el progreso:",
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
   GUARDAR
========================================================= */

function guardarEstado(estado) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(estado)
    );

}


/* =========================================================
   FECHA
========================================================= */

function obtenerFechaLocal() {

    const ahora =
        new Date();


    const year =
        ahora.getFullYear();


    const month =
        String(
            ahora.getMonth() + 1
        ).padStart(2, "0");


    const day =
        String(
            ahora.getDate()
        ).padStart(2, "0");


    return `${year}-${month}-${day}`;

}


/* =========================================================
   ÍNDICE DE LA PALABRA DEL DÍA
========================================================= */

function obtenerIndiceDia() {

    const inicio =
        new Date(
            "2026-01-01T00:00:00"
        );


    const hoy =
        new Date();


    const diferencia =
        hoy.getTime() -
        inicio.getTime();


    const dias =
        Math.floor(
            diferencia / 86400000
        );


    return Math.abs(dias)
        % palabras.length;

}


/* =========================================================
   PALABRA DEL DÍA
========================================================= */

function obtenerPalabraDelDia() {

    return palabras[
        obtenerIndiceDia()
    ];

}


/* =========================================================
   REGISTRAR ACTIVIDAD
========================================================= */

function registrarActividad() {

    const estado =
        obtenerEstado();


    const hoy =
        obtenerFechaLocal();


    if (
        !estado.activeDays.includes(
            hoy
        )
    ) {

        estado.activeDays.push(
            hoy
        );

    }


    actualizarRacha(
        estado
    );


    estado.lastStudyDate =
        hoy;


    guardarEstado(
        estado
    );

}


/* =========================================================
   RACHA
========================================================= */

function actualizarRacha(
    estado
) {

    if (
        !estado.activeDays.length
    ) {

        estado.streak = 0;

        return;

    }


    const fechas = [
        ...new Set(
            estado.activeDays
        )
    ].sort().reverse();


    let racha = 1;


    for (
        let i = 0;
        i < fechas.length - 1;
        i++
    ) {

        const fechaActual =
            new Date(
                fechas[i]
            );


        const fechaAnterior =
            new Date(
                fechas[i + 1]
            );


        const diferencia =
            (
                fechaActual -
                fechaAnterior
            ) / 86400000;


        if (
            diferencia === 1
        ) {

            racha++;

        } else {

            break;

        }

    }


    estado.streak =
        racha;

}


/* =========================================================
   MARCAR COMO APRENDIDO
========================================================= */

function marcarComoCompletada(
    id
) {

    const estado =
        obtenerEstado();


    if (
        !estado.completed.includes(
            id
        )
    ) {

        estado.completed.push(
            id
        );

    }


    registrarActividad();


    const nuevoEstado =
        obtenerEstado();


    nuevoEstado.completed =
        estado.completed;


    guardarEstado(
        nuevoEstado
    );

}


/* =========================================================
   APRENDIZAJE
========================================================= */

function iniciarAprendizaje() {

    const wordElement =
        document.getElementById(
            "word"
        );


    if (!wordElement) {

        return;

    }


    const palabra =
        obtenerPalabraDelDia();


    /* -----------------------------------------
       INFORMACIÓN PRINCIPAL
    ----------------------------------------- */

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
        "question"
    ).textContent =
        palabra.pregunta;


    document.getElementById(
        "application"
    ).textContent =
        palabra.aplicacion;


    document.getElementById(
        "day-counter"
    ).textContent =
        `Concepto ${
            obtenerIndiceDia() + 1
        } de ${
            palabras.length
        }`;


    const estado =
        obtenerEstado();


    document.getElementById(
        "streak"
    ).textContent =
        estado.streak;



    /* -----------------------------------------
       EJEMPLOS
    ----------------------------------------- */

    const examplesContainer =
        document.getElementById(
            "examples-container"
        );


    examplesContainer.innerHTML = "";


    palabra.ejemplos.forEach(
        (ejemplo, index) => {

            const box =
                document.createElement(
                    "div"
                );


            box.className =
                "example-card";


            box.innerHTML = `

                <span class="example-number">
                    Ejemplo ${index + 1}
                </span>

                <h3>
                    ${ejemplo.titulo}
                </h3>

                <p>
                    ${ejemplo.texto}
                </p>

            `;


            examplesContainer.appendChild(
                box
            );

        }
    );



    /* -----------------------------------------
       OPCIONES
    ----------------------------------------- */

    const optionsContainer =
        document.getElementById(
            "options-container"
        );


    optionsContainer.innerHTML = "";


    palabra.opciones.forEach(
        (opcion, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer-option";


            button.dataset.index =
                index;


            button.innerHTML = `

                <span class="option-letter">
                    ${String.fromCharCode(
                        65 + index
                    )}
                </span>

                <span>
                    ${opcion}
                </span>

            `;


            button.addEventListener(
                "click",
                function () {

                    seleccionarRespuesta(
                        index,
                        palabra
                    );

                }
            );


            optionsContainer.appendChild(
                button
            );

        }
    );



    /* -----------------------------------------
       ESTADO DE COMPLETADO
    ----------------------------------------- */

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

        completeButton.disabled =
            true;


        completeButton.textContent =
            "✓ Ya aprendido";


        completionMessage.classList.remove(
            "hidden"
        );

    }

}


/* =========================================================
   SELECCIONAR RESPUESTA
========================================================= */

function seleccionarRespuesta(
    indiceSeleccionado,
    palabra
) {

    const botones =
        document.querySelectorAll(
            ".answer-option"
        );


    botones.forEach(
        boton => {

            boton.disabled =
                true;

        }
    );


    const correcto =
        indiceSeleccionado ===
        palabra.respuestaCorrecta;


    botones.forEach(
        (boton, index) => {

            if (
                index ===
                palabra.respuestaCorrecta
            ) {

                boton.classList.add(
                    "correct"
                );

            }


            if (
                index ===
                indiceSeleccionado &&
                !correcto
            ) {

                boton.classList.add(
                    "incorrect"
                );

            }

        }
    );


    const feedback =
        document.getElementById(
            "answer-feedback"
        );


    const title =
        document.getElementById(
            "feedback-title"
        );


    const text =
        document.getElementById(
            "feedback-text"
        );


    const explanation =
        document.getElementById(
            "answer-explanation-text"
        );


    feedback.classList.remove(
        "hidden"
    );


    if (correcto) {

        title.textContent =
            "✓ Correcto";


        title.className =
            "correct-title";


        text.textContent =
            "Bien. No solo elegiste la respuesta correcta: ahora revisa por qué."


    } else {

        title.textContent =
            "✗ No exactamente";


        title.className =
            "incorrect-title";


        text.textContent =
            "La respuesta correcta está marcada. Revisa la explicación y vuelve a pensar en el concepto.";

    }


    explanation.textContent =
        palabra.explicacion;


    registrarActividad();


    const completeButton =
        document.getElementById(
            "complete-button"
        );


    completeButton.disabled =
        false;


    completeButton.dataset.answered =
        "true";


    completeButton.dataset.correct =
        correcto
            ? "true"
            : "false";

}


/* =========================================================
   BOTÓN COMPLETAR
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const completeButton =
            document.getElementById(
                "complete-button"
            );


        if (completeButton) {

            completeButton.addEventListener(
                "click",
                function () {

                    const palabra =
                        obtenerPalabraDelDia();


                    if (
                        completeButton.dataset.answered
                        !==
                        "true"
                    ) {

                        return;

                    }


                    marcarComoCompletada(
                        palabra.id
                    );


                    completeButton.disabled =
                        true;


                    completeButton.textContent =
                        "✓ Aprendizaje completado";


                    document
                        .getElementById(
                            "completion-message"
                        )
                        .classList.remove(
                            "hidden"
                        );

                }
            );

        }

    }
);


/* =========================================================
   REPASO
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
        concepto.ejemplos[0].texto;


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

                        <strong>
                            Repaso registrado
                        </strong>

                        <p>
                            Has marcado este concepto como:
                            <strong>
                                ${textoResultado(
                                    result
                                )}
                            </strong>.
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
   TEXTO REPASO
========================================================= */

function textoResultado(
    resultado
) {

    if (
        resultado ===
        "difficult"
    ) {

        return "Necesito repasarlo";

    }


    if (
        resultado ===
        "good"
    ) {

        return "Lo recordé";

    }


    if (
        resultado ===
        "easy"
    ) {

        return "Lo domino";

    }


    return resultado;

}


/* =========================================================
   PROGRESO
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


    if (resetButton) {

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

}


/* =========================================================
   LISTA DE CONCEPTOS
========================================================= */

function mostrarListaConceptos(
    estado
) {

    const container =
        document.getElementById(
            "concept-list"
        );


    if (!container) {

        return;

    }


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
   INICIO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        iniciarAprendizaje();

        iniciarRepaso();

        iniciarProgreso();

    }
);
```
