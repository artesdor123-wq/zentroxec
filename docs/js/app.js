```javascript
/* =========================================================
   ZENTROX
   SISTEMA DE APRENDIZAJE V1

   app.js

   Funciones principales:

   1. Seleccionar la palabra del día.
   2. Mostrar el concepto en aprender.html.
   3. Mostrar múltiples ejemplos empresariales.
   4. Presentar una situación empresarial.
   5. Permitir elegir una respuesta.
   6. Evaluar la respuesta.
   7. Mostrar retroalimentación.
   8. Desbloquear aplicación práctica.
   9. Guardar progreso.
   10. Calcular días activos.
   11. Calcular racha.
   12. Gestionar repaso.
   13. Mostrar progreso.
========================================================= */


/* =========================================================
   CONFIGURACIÓN
========================================================= */

const ZENTROX_STORAGE_KEY = "zentrox_v1";


/* =========================================================
   FUNCIONES GENERALES
========================================================= */


/**
 * Obtiene todos los datos guardados.
 */
function getData() {

    const savedData =
        localStorage.getItem(ZENTROX_STORAGE_KEY);


    if (!savedData) {

        return {

            completedWords: [],

            activeDays: [],

            currentStreak: 0,

            lastStudyDate: null,

            reviewData: {},

            dailyWordDate: null,

            dailyWordId: null

        };

    }


    try {

        return JSON.parse(savedData);

    } catch (error) {

        console.error(
            "Error leyendo los datos de ZENTROX:",
            error
        );


        return {

            completedWords: [],

            activeDays: [],

            currentStreak: 0,

            lastStudyDate: null,

            reviewData: {},

            dailyWordDate: null,

            dailyWordId: null

        };

    }

}


/**
 * Guarda los datos.
 */
function saveData(data) {

    localStorage.setItem(
        ZENTROX_STORAGE_KEY,
        JSON.stringify(data)
    );

}


/**
 * Devuelve la fecha actual en formato YYYY-MM-DD.
 */
function getTodayString() {

    const date =
        new Date();


    const year =
        date.getFullYear();


    const month =
        String(
            date.getMonth() + 1
        ).padStart(2, "0");


    const day =
        String(
            date.getDate()
        ).padStart(2, "0");


    return `${year}-${month}-${day}`;

}


/**
 * Convierte una fecha YYYY-MM-DD
 * en objeto Date.
 */
function dateFromString(dateString) {

    const parts =
        dateString.split("-");


    return new Date(
        Number(parts[0]),
        Number(parts[1]) - 1,
        Number(parts[2])
    );

}


/**
 * Devuelve la diferencia en días
 * entre dos fechas.
 */
function daysBetween(dateA, dateB) {

    const millisecondsPerDay =
        1000 * 60 * 60 * 24;


    return Math.round(
        (
            dateB.getTime() -
            dateA.getTime()
        ) / millisecondsPerDay
    );

}


/* =========================================================
   OBTENER PALABRAS
========================================================= */


/**
 * Devuelve el arreglo de palabras disponible
 * desde palabras.js.
 *
 * Se admiten varios nombres para facilitar
 * compatibilidad con versiones anteriores.
 */
function getWords() {

    if (
        typeof palabras !== "undefined" &&
        Array.isArray(palabras)
    ) {

        return palabras;

    }


    if (
        typeof PALABRAS !== "undefined" &&
        Array.isArray(PALABRAS)
    ) {

        return PALABRAS;

    }


    if (
        typeof words !== "undefined" &&
        Array.isArray(words)
    ) {

        return words;

    }


    console.error(
        "No se encontró el arreglo de palabras."
    );


    return [];

}


/**
 * Obtiene una palabra utilizando su ID.
 */
function getWordById(id) {

    const words =
        getWords();


    return words.find(
        word =>
            String(word.id) === String(id)
    );

}


/* =========================================================
   PALABRA DEL DÍA
========================================================= */


/**
 * Selecciona una palabra estable para cada día.
 *
 * Esto significa que si el usuario entra varias
 * veces el mismo día, verá la misma palabra.
 */
function getDailyWord() {

    const words =
        getWords();


    if (!words.length) {

        return null;

    }


    const today =
        getTodayString();


    const data =
        getData();


    /*
     * Si ya existe una palabra asignada para hoy
     * y todavía existe en palabras.js, la usamos.
     */

    if (
        data.dailyWordDate === today &&
        data.dailyWordId !== null
    ) {

        const savedWord =
            getWordById(
                data.dailyWordId
            );


        if (savedWord) {

            return savedWord;

        }

    }


    /*
     * Selección basada en la fecha.
     *
     * No utiliza números aleatorios para evitar
     * que la palabra cambie durante el mismo día.
     */

    const startDate =
        new Date(
            2026,
            0,
            1
        );


    const todayDate =
        new Date();


    const difference =
        Math.floor(
            (
                todayDate.getTime() -
                startDate.getTime()
            ) /
            (1000 * 60 * 60 * 24)
        );


    const index =
        Math.abs(difference) %
        words.length;


    const word =
        words[index];


    data.dailyWordDate =
        today;


    data.dailyWordId =
        word.id;


    saveData(data);


    return word;

}


/* =========================================================
   APRENDER.HTML
========================================================= */

function initializeLearningPage() {

    const title =
        document.getElementById(
            "word-title"
        );


    /*
     * Si no existe este elemento,
     * no estamos en aprender.html.
     */

    if (!title) {

        return;

    }


    const word =
        getDailyWord();


    if (!word) {

        console.error(
            "No hay palabras disponibles."
        );


        return;

    }


    loadWordIntoPage(
        word
    );


    initializeAnswerSystem(
        word
    );


    updateStreakDisplay();

}


/* =========================================================
   CARGAR PALABRA
========================================================= */

function loadWordIntoPage(word) {


    /* -----------------------------------------------
       CATEGORÍA
    ------------------------------------------------ */

    const category =
        document.getElementById(
            "word-category"
        );


    if (category) {

        category.textContent =
            word.categoria ||
            word.category ||
            "NEGOCIOS";

    }



    /* -----------------------------------------------
       TÍTULO
    ------------------------------------------------ */

    const title =
        document.getElementById(
            "word-title"
        );


    if (title) {

        title.textContent =
            word.palabra ||
            word.word ||
            "Concepto";

    }



    /* -----------------------------------------------
       DEFINICIÓN
    ------------------------------------------------ */

    const definition =
        document.getElementById(
            "word-definition"
        );


    if (definition) {

        definition.textContent =
            word.significado ||
            word.definition ||
            "";

    }



    /* -----------------------------------------------
       SIGNIFICADO SENCILLO
    ------------------------------------------------ */

    const simpleDefinition =
        document.getElementById(
            "simple-definition"
        );


    if (simpleDefinition) {

        simpleDefinition.textContent =
            word.significado_sencillo ||
            word.simpleDefinition ||
            word.significado ||
            word.definition ||
            "";

    }



    /* -----------------------------------------------
       SITUACIÓN EMPRESARIAL
    ------------------------------------------------ */

    const situation =
        document.getElementById(
            "business-situation"
        );


    if (situation) {

        situation.textContent =
            word.situacion ||
            word.situation ||
            "";

    }



    /* -----------------------------------------------
       PREGUNTA
    ------------------------------------------------ */

    const question =
        document.getElementById(
            "question-text"
        );


    if (question) {

        question.textContent =
            word.pregunta ||
            word.question ||
            "";

    }



    /* -----------------------------------------------
       APLICACIÓN
    ------------------------------------------------ */

    const applicationText =
        document.getElementById(
            "application-text"
        );


    if (applicationText) {

        applicationText.textContent =
            word.aplicacion ||
            word.application ||
            "";

    }



    const applicationQuestion =
        document.getElementById(
            "application-question"
        );


    if (applicationQuestion) {

        applicationQuestion.textContent =
            word.pregunta_aplicacion ||
            word.applicationQuestion ||
            "";

    }



    /* -----------------------------------------------
       EJEMPLOS
    ------------------------------------------------ */

    loadExamples(
        word
    );


    /* -----------------------------------------------
       OPCIONES
    ------------------------------------------------ */

    loadOptions(
        word
    );

}


/* =========================================================
   EJEMPLOS EMPRESARIALES
========================================================= */

function loadExamples(word) {

    const container =
        document.getElementById(
            "examples-container"
        );


    if (!container) {

        return;

    }


    const examples =
        word.ejemplos ||
        word.examples ||
        [];


    /*
     * Si palabras.js tiene ejemplos,
     * se generan automáticamente.
     */

    if (
        Array.isArray(examples) &&
        examples.length
    ) {

        container.innerHTML = "";


        examples.forEach(
            (
                example,
                index
            ) => {


                /*
                 * Permite que un ejemplo sea:
                 *
                 * "texto"
                 *
                 * o:
                 *
                 * {
                 *   titulo: "...",
                 *   texto: "..."
                 * }
                 */

                let title =
                    "";


                let text =
                    "";


                if (
                    typeof example === "string"
                ) {

                    title =
                        `Ejemplo empresarial ${index + 1}`;

                    text =
                        example;

                } else {

                    title =
                        example.titulo ||
                        example.title ||
                        `Ejemplo empresarial ${index + 1}`;


                    text =
                        example.texto ||
                        example.text ||
                        example.descripcion ||
                        "";

                }


                const article =
                    document.createElement(
                        "article"
                    );


                article.className =
                    "example-card";


                article.innerHTML = `

                    <span class="example-number">
                        EJEMPLO ${String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>
                        ${escapeHTML(title)}
                    </h3>

                    <p>
                        ${escapeHTML(text)}
                    </p>

                `;


                container.appendChild(
                    article
                );

            }
        );

    }

}


/* =========================================================
   OPCIONES DE RESPUESTA
========================================================= */

function loadOptions(word) {

    const container =
        document.getElementById(
            "options-container"
        );


    if (!container) {

        return;

    }


    const options =
        word.opciones ||
        word.options ||
        [];


    if (
        !Array.isArray(options) ||
        !options.length
    ) {

        return;

    }


    container.innerHTML = "";


    options.forEach(
        (
            option,
            index
        ) => {


            let text =
                "";


            let value =
                "";


            /*
             * Formato permitido:
             *
             * {
             *   id: "A",
             *   texto: "..."
             * }
             */

            if (
                typeof option === "string"
            ) {

                text =
                    option;


                value =
                    String.fromCharCode(
                        65 + index
                    );

            } else {

                value =
                    option.id ||
                    option.letra ||
                    String.fromCharCode(
                        65 + index
                    );


                text =
                    option.texto ||
                    option.text ||
                    option.respuesta ||
                    "";

            }


            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "answer-option";


            button.dataset.answer =
                value;


            button.innerHTML = `

                <span class="option-letter">
                    ${escapeHTML(value)}
                </span>

                <span>
                    ${escapeHTML(text)}
                </span>

            `;


            container.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   SISTEMA DE RESPUESTAS
========================================================= */

function initializeAnswerSystem(word) {

    const container =
        document.getElementById(
            "options-container"
        );


    if (!container) {

        return;

    }


    const options =
        container.querySelectorAll(
            ".answer-option"
        );


    options.forEach(
        button => {


            button.addEventListener(
                "click",
                function () {

                    evaluateAnswer(
                        word,
                        this.dataset.answer
                    );

                }
            );

        }
    );

}


/* =========================================================
   EVALUAR RESPUESTA
========================================================= */

function evaluateAnswer(
    word,
    selectedAnswer
) {


    const correctAnswer =
        word.respuesta_correcta ||
        word.correctAnswer ||
        word.respuesta ||
        word.answer;


    const options =
        document.querySelectorAll(
            ".answer-option"
        );


    /*
     * Desactivamos todas las opciones.
     *
     * Esto evita que el usuario cambie
     * de respuesta después de conocer
     * el resultado.
     */

    options.forEach(
        button => {

            button.disabled =
                true;

        }
    );


    const selectedButton =
        document.querySelector(
            `.answer-option[data-answer="${CSS.escape(selectedAnswer)}"]`
        );


    const correctButton =
        document.querySelector(
            `.answer-option[data-answer="${CSS.escape(String(correctAnswer))}"]`
        );


    const isCorrect =
        String(selectedAnswer).toUpperCase() ===
        String(correctAnswer).toUpperCase();



    /* -----------------------------------------------
       MARCAR RESPUESTAS
    ------------------------------------------------ */

    if (isCorrect) {

        if (selectedButton) {

            selectedButton.classList.add(
                "correct"
            );

        }

    } else {

        if (selectedButton) {

            selectedButton.classList.add(
                "incorrect"
            );

        }


        if (correctButton) {

            correctButton.classList.add(
                "correct"
            );

        }

    }



    /* -----------------------------------------------
       MOSTRAR FEEDBACK
    ------------------------------------------------ */

    showAnswerFeedback(
        word,
        isCorrect
    );



    /* -----------------------------------------------
       DESBLOQUEAR APLICACIÓN
    ------------------------------------------------ */

    const applicationSection =
        document.getElementById(
            "application-section"
        );


    if (applicationSection) {

        applicationSection.classList.remove(
            "hidden"
        );

    }



    /* -----------------------------------------------
       MOSTRAR COMPLETAR
    ------------------------------------------------ */

    const completionArea =
        document.getElementById(
            "completion-area"
        );


    if (completionArea) {

        completionArea.classList.remove(
            "hidden"
        );

    }



    /*
     * Guardamos temporalmente el resultado
     * de la pregunta.
     */

    window.zentroxCurrentResult = {

        wordId:
            word.id,

        correct:
            isCorrect,

        answered:
            true

    };

}


/* =========================================================
   MOSTRAR RETROALIMENTACIÓN
========================================================= */

function showAnswerFeedback(
    word,
    isCorrect
) {


    const feedback =
        document.getElementById(
            "answer-feedback"
        );


    if (!feedback) {

        return;

    }


    const title =
        document.getElementById(
            "feedback-title"
        );


    const message =
        document.getElementById(
            "feedback-message"
        );


    const explanation =
        document.getElementById(
            "feedback-explanation"
        );


    feedback.classList.remove(
        "hidden"
    );


    if (isCorrect) {

        if (title) {

            title.textContent =
                "¡Correcto!";

            title.className =
                "correct-title";

        }


        if (message) {

            message.textContent =
                "Has identificado correctamente el concepto.";

        }

    } else {

        if (title) {

            title.textContent =
                "No exactamente.";

            title.className =
                "incorrect-title";

        }


        if (message) {

            message.textContent =
                "La respuesta correcta está marcada. Ahora revisa por qué.";

        }

    }


    if (explanation) {

        explanation.textContent =
            word.explicacion ||
            word.explanation ||
            word.respuesta_explicada ||
            word.answerExplanation ||
            "";

    }

}


/* =========================================================
   COMPLETAR CONCEPTO
========================================================= */

function initializeCompletionButton() {

    const button =
        document.getElementById(
            "complete-button"
        );


    if (!button) {

        return;

    }


    button.addEventListener(
        "click",
        function () {


            const current =
                window.zentroxCurrentResult;


            if (!current) {

                return;

            }


            completeWord(
                current.wordId,
                current.correct
            );

        }
    );

}


/* =========================================================
   GUARDAR CONCEPTO
========================================================= */

function completeWord(
    wordId,
    wasCorrect
) {


    const data =
        getData();


    /*
     * Evita duplicar el concepto.
     */

    const alreadyCompleted =
        data.completedWords.some(
            item =>
                String(item.id) ===
                String(wordId)
        );


    if (!alreadyCompleted) {

        data.completedWords.push({

            id:
                wordId,

            date:
                getTodayString(),

            correct:
                Boolean(wasCorrect)

        });

    }


    registerActiveDay(
        data
    );


    /*
     * Guardamos información para repaso.
     */

    if (!data.reviewData) {

        data.reviewData = {};

    }


    data.reviewData[wordId] = {

        lastReview:
            getTodayString(),

        correct:
            Boolean(wasCorrect),

        times:
            (
                data.reviewData[wordId]?.times ||
                0
            ) + 1

    };


    saveData(
        data
    );


    /*
     * Mostrar mensaje de éxito.
     */

    const message =
        document.getElementById(
            "success-message"
        );


    if (message) {

        message.classList.remove(
            "hidden"
        );


        message.textContent =
            "✓ Concepto guardado en tu progreso.";

    }


    const button =
        document.getElementById(
            "complete-button"
        );


    if (button) {

        button.disabled =
            true;


        button.textContent =
            "Concepto completado";

    }


    updateStreakDisplay();

}


/* =========================================================
   DÍAS ACTIVOS
========================================================= */

function registerActiveDay(data) {

    const today =
        getTodayString();


    if (
        !data.activeDays.includes(today)
    ) {

        data.activeDays.push(
            today
        );

    }


    calculateStreak(
        data
    );

}


/* =========================================================
   CALCULAR RACHA
========================================================= */

function calculateStreak(data) {

    const days =
        [...data.activeDays]
            .sort();


    if (!days.length) {

        data.currentStreak =
            0;

        data.lastStudyDate =
            null;

        return;

    }


    let streak =
        1;


    const today =
        dateFromString(
            days[days.length - 1]
        );


    for (
        let i = days.length - 2;
        i >= 0;
        i--
    ) {


        const current =
            dateFromString(
                days[i]
            );


        const next =
            dateFromString(
                days[i + 1]
            );


        const difference =
            daysBetween(
                current,
                next
            );


        if (difference === 1) {

            streak++;

        } else {

            break;

        }

    }


    /*
     * Si el último día registrado
     * no es hoy ni ayer, la racha actual
     * debe considerarse 0.
     */

    const currentDate =
        new Date();


    currentDate.setHours(
        0,
        0,
        0,
        0
    );


    const differenceFromToday =
        daysBetween(
            today,
            currentDate
        );


    if (
        differenceFromToday > 1
    ) {

        streak =
            0;

    }


    data.currentStreak =
        streak;


    data.lastStudyDate =
        days[days.length - 1];

}


/* =========================================================
   MOSTRAR RACHA
========================================================= */

function updateStreakDisplay() {

    const data =
        getData();


    calculateStreak(
        data
    );


    saveData(
        data
    );


    const element =
        document.getElementById(
            "streak-display"
        );


    if (!element) {

        return;

    }


    element.textContent =
        `🔥 ${data.currentStreak} ${
            data.currentStreak === 1
                ? "día"
                : "días"
        }`;

}


/* =========================================================
   PROGRESO.HTML
========================================================= */

function initializeProgressPage() {

    const completedCount =
        document.getElementById(
            "completed-count"
        );


    /*
     * Si no existe, no estamos
     * en progreso.html.
     */

    if (!completedCount) {

        return;

    }


    const data =
        getData();


    const words =
        getWords();


    calculateStreak(
        data
    );


    saveData(
        data
    );


    /*
     * Conceptos completados
     */

    completedCount.textContent =
        data.completedWords.length;



    /*
     * Días activos
     */

    const activeDays =
        document.getElementById(
            "active-days"
        );


    if (activeDays) {

        activeDays.textContent =
            data.activeDays.length;

    }



    /*
     * Racha
     */

    const streak =
        document.getElementById(
            "current-streak"
        );


    if (streak) {

        streak.textContent =
            data.currentStreak;

    }



    /*
     * Total de conceptos
     */

    const totalWords =
        document.getElementById(
            "total-words"
        );


    if (totalWords) {

        totalWords.textContent =
            words.length;

    }



    /*
     * Porcentaje
     */

    const percentage =
        words.length
            ? Math.round(
                (
                    data.completedWords.length /
                    words.length
                ) * 100
            )
            : 0;


    const percentageElement =
        document.getElementById(
            "progress-percentage"
        );


    if (percentageElement) {

        percentageElement.textContent =
            `${percentage}%`;

    }


    const fill =
        document.getElementById(
            "progress-fill"
        );


    if (fill) {

        fill.style.width =
            `${percentage}%`;

    }


    renderConceptList(
        words,
        data
    );


    initializeResetButton();

}


/* =========================================================
   LISTA DE CONCEPTOS
========================================================= */

function renderConceptList(
    words,
    data
) {


    const container =
        document.getElementById(
            "concept-list"
        );


    if (!container) {

        return;

    }


    container.innerHTML =
        "";


    words.forEach(
        word => {


            const completed =
                data.completedWords.some(
                    item =>
                        String(item.id) ===
                        String(word.id)
                );


            const article =
                document.createElement(
                    "article"
                );


            article.className =
                "concept-item";


            const category =
                word.categoria ||
                word.category ||
                "NEGOCIOS";


            const name =
                word.palabra ||
                word.word ||
                "Concepto";


            article.innerHTML = `

                <div>

                    <span class="category">
                        ${escapeHTML(category)}
                    </span>

                    <h3>
                        ${escapeHTML(name)}
                    </h3>

                </div>


                <span class="concept-status">

                    ${
                        completed
                            ? "✓ Completado"
                            : "Pendiente"
                    }

                </span>

            `;


            container.appendChild(
                article
            );

        }
    );

}


/* =========================================================
   REINICIAR PROGRESO
========================================================= */

function initializeResetButton() {

    const button =
        document.getElementById(
            "reset-progress"
        );


    if (!button) {

        return;

    }


    button.addEventListener(
        "click",
        function () {


            const confirmed =
                confirm(
                    "¿Seguro que quieres eliminar todo tu progreso en ZENTROX?"
                );


            if (!confirmed) {

                return;

            }


            localStorage.removeItem(
                ZENTROX_STORAGE_KEY
            );


            location.reload();

        }
    );

}


/* =========================================================
   REPASO.HTML
========================================================= */

function initializeReviewPage() {

    const reviewCard =
        document.getElementById(
            "review-card"
        );


    if (!reviewCard) {

        return;

    }


    const data =
        getData();


    const words =
        getWords();


    /*
     * Solo mostramos conceptos que
     * el usuario ya haya completado.
     */

    const completedWords =
        data.completedWords;


    if (
        !completedWords.length
    ) {

        return;

    }


    const emptyState =
        document.getElementById(
            "review-empty"
        );


    if (emptyState) {

        emptyState.classList.add(
            "hidden"
        );

    }


    reviewCard.classList.remove(
        "hidden"
    );


    /*
     * Seleccionamos un concepto para repasar.
     *
     * Priorizamos el que tenga peor resultado.
     */

    let selectedRecord =
        completedWords.find(
            record =>
                record.correct === false
        );


    if (!selectedRecord) {

        selectedRecord =
            completedWords[
                completedWords.length - 1
            ];

    }


    const word =
        getWordById(
            selectedRecord.id
        );


    if (!word) {

        return;

    }


    loadReviewWord(
        word
    );


    initializeReviewAnswer(
        word
    );

}


/* =========================================================
   CARGAR REPASO
========================================================= */

function loadReviewWord(word) {


    const category =
        document.getElementById(
            "review-category"
        );


    if (category) {

        category.textContent =
            word.categoria ||
            word.category ||
            "NEGOCIOS";

    }


    const title =
        document.getElementById(
            "review-word"
        );


    if (title) {

        title.textContent =
            word.palabra ||
            word.word ||
            "";

    }


    const definition =
        document.getElementById(
            "review-definition"
        );


    if (definition) {

        definition.textContent =
            word.significado ||
            word.definition ||
            "";

    }


    const example =
        document.getElementById(
            "review-example"
        );


    if (example) {

        const examples =
            word.ejemplos ||
            word.examples ||
            [];


        if (
            Array.isArray(examples) &&
            examples.length
        ) {

            const first =
                examples[0];


            if (
                typeof first === "string"
            ) {

                example.textContent =
                    first;

            } else {

                example.textContent =
                    first.texto ||
                    first.text ||
                    "";

            }

        }

    }

}


/* =========================================================
   REPASO — MOSTRAR RESPUESTA
========================================================= */

function initializeReviewAnswer(word) {

    const button =
        document.getElementById(
            "review-answer-button"
        );


    if (!button) {

        return;

    }


    button.addEventListener(
        "click",
        function () {


            const answer =
                document.getElementById(
                    "review-answer"
                );


            const actions =
                document.getElementById(
                    "review-actions"
                );


            if (answer) {

                answer.classList.remove(
                    "hidden"
                );


                const paragraph =
                    answer.querySelector(
                        "p"
                    );


                if (paragraph) {

                    paragraph.textContent =
                        word.explicacion ||
                        word.explanation ||
                        word.respuesta_explicada ||
                        word.significado ||
                        "";

                }

            }


            if (actions) {

                actions.classList.remove(
                    "hidden"
                );

            }


            button.disabled =
                true;


            button.textContent =
                "Explicación mostrada";


            initializeReviewButtons(
                word
            );

        }
    );

}


/* =========================================================
   BOTONES DE REPASO
========================================================= */

function initializeReviewButtons(word) {

    const buttons =
        document.querySelectorAll(
            ".review-button"
        );


    buttons.forEach(
        button => {


            button.addEventListener(
                "click",
                function () {


                    const result =
                        this.dataset.result;


                    saveReviewResult(
                        word,
                        result
                    );


                    this.textContent =
                        "✓ Guardado";


                    buttons.forEach(
                        otherButton => {

                            otherButton.disabled =
                                true;

                        }
                    );

                }
            );

        }
    );

}


/* =========================================================
   GUARDAR RESULTADO DEL REPASO
========================================================= */

function saveReviewResult(
    word,
    result
) {


    const data =
        getData();


    if (!data.reviewData) {

        data.reviewData = {};

    }


    data.reviewData[word.id] = {

        lastReview:
            getTodayString(),

        result:
            result,

        times:
            (
                data.reviewData[word.id]?.times ||
                0
            ) + 1

    };


    saveData(
        data
    );

}


/* =========================================================
   SEGURIDAD BÁSICA PARA TEXTO HTML
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   INICIALIZACIÓN
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /*
         * Página aprender
         */

        initializeLearningPage();


        /*
         * Botón completar
         */

        initializeCompletionButton();


        /*
         * Página progreso
         */

        initializeProgressPage();


        /*
         * Página repaso
         */

        initializeReviewPage();


        /*
         * Actualizar racha
         */

        updateStreakDisplay();

    }
);
```
