/* ============================================================
   ZENTROXEC BUSINESS V1
   LÓGICA PRINCIPAL
============================================================ */


/* ===========================================================
   CONFIGURACIÓN
============================================================ */

const STORAGE_KEY = "zentroxec_business_v1";


const LESSON_STEPS = [

    "meaning",
    "example",
    "why",
    "question",
    "case",
    "error",
    "application",
    "related",
    "review",
    "complete"

];


/* ============================================================
   ESTADO
============================================================ */

let state = loadState();

let currentConcept = null;

let currentStep = 0;

let selectedAnswer = null;

let questionAnswered = false;


/* ============================================================
   ESTADO INICIAL
============================================================ */

function createInitialState() {

    return {

        xp: 0,

        streak: 0,

        lastActivityDate: null,

        learned: [],

        mastered: [],

        completedToday: false,

        dailyConceptId: null,

        dailyDate: null,

        conceptProgress: {},

        reviewQueue: [],

        answers: {}

    };

}


/* ============================================================
   CARGAR ESTADO
============================================================ */

function loadState() {

    try {

        const saved =
            localStorage.getItem(STORAGE_KEY);

        if (!saved) {

            return createInitialState();

        }

        const parsed = JSON.parse(saved);

        return {
            ...createInitialState(),
            ...parsed
        };

    } catch (error) {

        console.error(
            "No se pudo cargar el progreso:",
            error
        );

        return createInitialState();

    }

}


/* ============================================================
   GUARDAR ESTADO
============================================================ */

function saveState() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state)
    );

}


/* ============================================================
   FECHA LOCAL
============================================================ */

function getLocalDate() {

    const now = new Date();

    const year = now.getFullYear();

    const month =
        String(now.getMonth() + 1).padStart(2, "0");

    const day =
        String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;

}


/* ============================================================
   FECHA ANTERIOR
============================================================ */

function getPreviousDate(dateString) {

    const date =
        new Date(`${dateString}T12:00:00`);

    date.setDate(date.getDate() - 1);

    return date.toISOString().split("T")[0];

}


/* ============================================================
   OBTENER CONCEPTO DEL DÍA
============================================================ */

function getDailyConcept() {

    const today = getLocalDate();


    /*
     * Si ya existe un concepto para hoy,
     * utilizamos el mismo.
     */

    if (
        state.dailyDate === today &&
        state.dailyConceptId
    ) {

        const existing =
            concepts.find(
                concept =>
                    concept.id ===
                    state.dailyConceptId
            );

        if (existing) {

            return existing;

        }

    }


    /*
     * Selección secuencial inicial.
     *
     * Más adelante podemos reemplazar esto por
     * un sistema inteligente basado en:
     *
     * - repasos
     * - dificultad
     * - errores
     * - dominio
     * - spaced repetition
     */

    let index =
        state.learned.length % concepts.length;


    /*
     * Intentar encontrar un concepto
     * que todavía no esté aprendido.
     */

    const newConcept =
        concepts.find(
            concept =>
                !state.learned.includes(
                    concept.id
                )
        );


    if (newConcept) {

        state.dailyConceptId =
            newConcept.id;

    } else {

        state.dailyConceptId =
            concepts[index].id;

    }


    state.dailyDate = today;

    state.completedToday = false;

    saveState();


    return concepts.find(
        concept =>
            concept.id ===
            state.dailyConceptId
    );

}


/* ============================================================
   ACTUALIZAR INICIO
============================================================ */

function updateHome() {

    const concept =
        getDailyConcept();


    currentConcept =
        concept;


    document.getElementById(
        "homeConcept"
    ).textContent =
        concept.term;


    document.getElementById(
        "homeCategory"
    ).textContent =
        concept.category;


    document.getElementById(
        "homeLevel"
    ).textContent =
        `Nivel ${concept.level.toLowerCase()}`;


    document.getElementById(
        "homeShortDescription"
    ).textContent =
        concept.shortDescription;


    document.getElementById(
        "homeStreak"
    ).textContent =
        `${state.streak} ${
            state.streak === 1
                ? "día"
                : "días"
        }`;


    document.getElementById(
        "homeXP"
    ).textContent =
        state.xp;


    document.getElementById(
        "homeLearned"
    ).textContent =
        state.learned.length;


    const percentage =
        Math.round(
            (
                state.learned.length /
                concepts.length
            ) * 100
        );


    document.getElementById(
        "homeProgressPercent"
    ).textContent =
        `${percentage}%`;


    document.getElementById(
        "homeProgressBar"
    ).style.width =
        `${percentage}%`;

}


/* ============================================================
   NAVEGACIÓN ENTRE PANTALLAS
============================================================ */

function showScreen(screenId) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });


    const target =
        document.getElementById(screenId);


    if (target) {

        target.classList.add("active");

    }


    document
        .querySelectorAll(".nav-item")
        .forEach(item => {

            item.classList.remove("active");

        });


    const navItem =
        document.querySelector(
            `.nav-item[data-screen="${screenId}"]`
        );


    if (navItem) {

        navItem.classList.add("active");

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (screenId === "homeScreen") {

        updateHome();

    }


    if (screenId === "libraryScreen") {

        renderLibrary();

    }


    if (screenId === "progressScreen") {

        renderProgress();

    }


    if (screenId === "settingsScreen") {

        // Actualmente no requiere actualización.

    }

}


/* ============================================================
   INICIAR LECCIÓN
============================================================ */

function startLesson(concept = null) {

    if (!concept) {

        concept =
            getDailyConcept();

    }


    currentConcept =
        concept;

    currentStep = 0;

    selectedAnswer = null;

    questionAnswered = false;


    showScreen("lessonScreen");

    renderLesson();

}


/* ============================================================
   RENDERIZAR LECCIÓN
============================================================ */

function renderLesson() {

    if (!currentConcept) {

        currentConcept =
            getDailyConcept();

    }


    const stepName =
        LESSON_STEPS[currentStep];


    const total =
        LESSON_STEPS.length;


    document.getElementById(
        "lessonStepText"
    ).textContent =
        `Paso ${currentStep + 1} de ${total}`;


    document.getElementById(
        "lessonProgressFill"
    ).style.width =
        `${((currentStep + 1) / total) * 100}%`;


    const content =
        document.getElementById(
            "lessonContent"
        );


    switch (stepName) {

        case "meaning":
            renderMeaning(content);
            break;

        case "example":
            renderExample(content);
            break;

        case "why":
            renderWhy(content);
            break;

        case "question":
            renderQuestion(content);
            break;

        case "case":
            renderCase(content);
            break;

        case "error":
            renderError(content);
            break;

        case "application":
            renderApplication(content);
            break;

        case "related":
            renderRelated(content);
            break;

        case "review":
            renderReview(content);
            break;

        case "complete":
            renderComplete(content);
            break;

    }


    updateNextButton();

}


/* ============================================================
   PASO 1 — SIGNIFICADO
============================================================ */

function renderMeaning(container) {

    container.innerHTML = `

        <div class="lesson-section">

            <div class="lesson-kicker">
                CONCEPTO DEL DÍA
            </div>

            <h1 class="lesson-title">
                ${currentConcept.term}
            </h1>

            <p class="lesson-text">
                ${currentConcept.meaning}
            </p>

        </div>

    `;

}


/* ============================================================
   PASO 2 — EJEMPLO
============================================================ */

function renderExample(container) {

    container.innerHTML = `

        <div class="lesson-section">

            <div class="lesson-kicker">
                APRENDE EN CONTEXTO
            </div>

            <h2 class="lesson-title">
                Veámoslo en un negocio
            </h2>

            <div class="example-box">

                <div class="example-box-label">
                    EJEMPLO EMPRESARIAL
                </div>

                <p>
                    ${currentConcept.example}
                </p>

            </div>

        </div>

    `;

}


/* ============================================================
   PASO 3 — POR QUÉ
============================================================ */

function renderWhy(container) {

    container.innerHTML = `

        <div class="lesson-section">

            <div class="lesson-kicker">
                COMPRENDER
            </div>

            <h2 class="lesson-title">
                ¿Por qué importa?
            </h2>

            <div class="reason-box">

                <strong>
                    La idea importante
                </strong>

                <p>
                    ${currentConcept.why}
                </p>

            </div>

        </div>

    `;

}


/* ============================================================
   PASO 4 — PREGUNTA
============================================================ */

function renderQuestion(container) {

    questionAnswered = false;

    selectedAnswer = null;


    let optionsHTML = "";


    currentConcept.options.forEach(
        (option, index) => {

            optionsHTML += `

                <button
                    class="option"
                    data-option="${index}"
                >
                    <strong>
                        ${String.fromCharCode(65 + index)}.
                    </strong>

                    ${option}

                </button>

            `;

        }
    );


    container.innerHTML = `

        <div class="lesson-section">

            <div class="lesson-kicker">
                PON A PRUEBA TU CRITERIO
            </div>

            <h2 class="question">
                ${currentConcept.question}
            </h2>

            <div class="question-card">

                ${optionsHTML}

                <div
                    id="answerFeedback"
                    class="answer-feedback"
                    style="display:none;"
                ></div>

            </div>

        </div>

    `;


    document
        .querySelectorAll(".option")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    answerQuestion(
                        Number(
                            button.dataset.option
                        )
                    );

                }
            );

        });

}


/* ============================================================
   RESPONDER PREGUNTA
============================================================ */

function answerQuestion(index) {

    if (questionAnswered) {

        return;

    }


    questionAnswered = true;

    selectedAnswer = index;


    const buttons =
        document.querySelectorAll(
            ".option"
        );


    buttons.forEach(button => {

        const optionIndex =
            Number(
                button.dataset.option
            );


        if (
            optionIndex ===
            currentConcept.correct
        ) {

            button.classList.add(
                "correct"
            );

        }


        if (
            optionIndex === index &&
            index !== currentConcept.correct
        ) {

            button.classList.add(
                "incorrect"
            );

        }

    });


    const correct =
        index ===
        currentConcept.correct;


    const feedback =
        document.getElementById(
            "answerFeedback"
        );


    feedback.style.display =
        "block";


    feedback.innerHTML = correct

        ? `

            <strong>
                ✅ Correcto
            </strong>

            <p>
                ${currentConcept.explanation}
            </p>

        `

        : `

            <strong>
                ❌ No exactamente
            </strong>

            <p>
                La respuesta correcta es:
                <strong>
                    ${currentConcept.options[
                        currentConcept.correct
                    ]}
                </strong>
                <br><br>
                ${currentConcept.explanation}
            </p>

        `;


    /*
     * Guardamos el resultado.
     */

    if (!state.answers[currentConcept.id]) {

        state.answers[currentConcept.id] = [];

    }


    state.answers[currentConcept.id].push({

        date: getLocalDate(),

        correct: correct

    });


    /*
     * XP por responder.
     */

    if (correct) {

        state.xp += 5;

    }


    saveState();

    updateNextButton();

}


/* ============================================================
   PASO 5 — CASO
============================================================ */

function renderCase(container) {

    container.innerHTML = `

        <div class="lesson-section">

            <div class="lesson-kicker">
                APLICA EL CONCEPTO
            </div>

            <h2 class="lesson-title">
                Caso práctico
            </h2>

            <div class="case-card">

                <div class="case-label">
                    SITUACIÓN EMPRESARIAL
                </div>

                <p>
                    ${currentConcept.case}
                </p>

                <div class="case-answer">

                    <strong>
                        Análisis
                    </strong>

                    <p>
                        ${currentConcept.caseAnswer}
                    </p>

                </div>

            </div>

        </div>

    `;

}


/* ============================================================
   PASO 6 — ERROR COMÚN
============================================================ */

function renderError(container) {

    container.innerHTML = `

        <div class="lesson-section">

            <div class="lesson-kicker">
                EVITA ESTE ERROR
            </div>

            <h2 class="lesson-title">
                Error común
            </h2>

            <div class="error-card">

                <strong>
                    ⚠️ Ten cuidado con esto
                </strong>

                <p>
                    ${currentConcept.commonError}
                </p>

            </div>

        </div>

    `;

}


/* ============================================================
   PASO 7 — APLICACIÓN
============================================================ */

function renderApplication(container) {

    container.innerHTML = `

        <div class="lesson-section">

            <div class="lesson-kicker">
                LLEVÁLO AL NEGOCIO
            </div>

            <h2 class="lesson-title">
                ¿Cómo se aplica?
            </h2>

            <div class="example-box">

                <div class="example-box-label">
                    APLICACIÓN EMPRESARIAL
                </div>

                <p>
                    ${currentConcept.application}
                </p>

            </div>

        </div>

    `;

}


/* ============================================================
   PASO 8 — RELACIONADOS
============================================================ */

function renderRelated(container) {

    const relatedHTML =
        currentConcept.related
            .map(
                item =>
                    `<span class="related-item">
                        ${item}
                    </span>`
            )
            .join("");


    container.innerHTML = `

        <div class="lesson-section">

            <div class="lesson-kicker">
                CONSTRUYE CONEXIONES
            </div>

            <h2 class="lesson-title">
                Conceptos relacionados
            </h2>

            <p class="lesson-text">

                Un concepto empresarial no existe
                aislado. Está conectado con otros.

            </p>

            <div class="related-list">

                ${relatedHTML}

            </div>

        </div>

    `;

}


/* ============================================================
   PASO 9 — REPASO
============================================================ */

function renderReview(container) {

    /*
     * Buscamos un concepto aprendido anteriormente.
     */

    const previous =
        concepts.find(
            concept =>
                concept.id !== currentConcept.id &&
                state.learned.includes(
                    concept.id
                )
        );


    if (!previous) {

        container.innerHTML = `

            <div class="lesson-section">

                <div class="lesson-kicker">
                    REPASO
                </div>

                <h2 class="lesson-title">
                    Construyendo memoria
                </h2>

                <p class="lesson-text">

                    Este es tu primer concepto.
                    A medida que aprendas más,
                    esta sección recuperará conceptos
                    anteriores para ayudarte a recordarlos.

                </p>

            </div>

        `;

        return;

    }


    container.innerHTML = `

        <div class="lesson-section">

            <div class="lesson-kicker">
                REPASO RÁPIDO
            </div>

            <h2 class="lesson-title">
                ¿Recuerdas ${previous.term}?
            </h2>

            <div class="example-box">

                <div class="example-box-label">
                    PIENSA ANTES DE CONTINUAR
                </div>

                <p>

                    Explica mentalmente qué significa
                    <strong>${previous.term}</strong>
                    y cómo podría aparecer dentro
                    de una empresa.

                </p>

            </div>

        </div>

    `;

}


/* ============================================================
   PASO 10 — COMPLETADO
============================================================ */

function renderComplete(container) {

    container.innerHTML = `

        <div class="lesson-section completed-card">

            <div class="completed-icon">
                ✓
            </div>

            <div class="lesson-kicker">
                CONCEPTO COMPLETADO
            </div>

            <h2>
                ${currentConcept.term}
            </h2>

            <p>

                No solamente viste una definición.
                También la comprendiste,
                razonaste sobre ella y la aplicaste
                a una situación empresarial.

            </p>

            <div class="xp-earned">
                +10 XP
            </div>

        </div>

    `;

}


/* ============================================================
   BOTÓN CONTINUAR
============================================================ */

function updateNextButton() {

    const button =
        document.getElementById(
            "lessonNextButton"
        );


    if (
        LESSON_STEPS[currentStep] ===
        "question" &&
        !questionAnswered
    ) {

        button.textContent =
            "RESPONDE PRIMERO";

        button.disabled = true;

        button.style.opacity =
            "0.5";

        return;

    }


    button.disabled = false;

    button.style.opacity =
        "1";


    if (
        currentStep ===
        LESSON_STEPS.length - 1
    ) {

        button.innerHTML =
            `VOLVER AL INICIO <span>→</span>`;

    } else {

        button.innerHTML =
            `CONTINUAR <span>→</span>`;

    }

}


/* ============================================================
   SIGUIENTE PASO
============================================================ */

function nextLessonStep() {

    if (
        LESSON_STEPS[currentStep] ===
        "question" &&
        !questionAnswered
    ) {

        return;

    }


    /*
     * Si estamos en el último paso,
     * finalizamos la lección.
     */

    if (
        currentStep ===
        LESSON_STEPS.length - 1
    ) {

        completeLesson();

        return;

    }


    currentStep++;

    renderLesson();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ============================================================
   COMPLETAR LECCIÓN
============================================================ */

function completeLesson() {

    const today =
        getLocalDate();


    /*
     * Añadir concepto a aprendidos.
     */

    if (
        !state.learned.includes(
            currentConcept.id
        )
    ) {

        state.learned.push(
            currentConcept.id
        );

    }


    /*
     * Progreso individual.
     */

    state.conceptProgress[
        currentConcept.id
    ] = {

        status: "learning",

        completedAt: today,

        reviews: 0

    };


    /*
     * XP por completar.
     */

    state.xp += 10;


    /*
     * Actualizar racha.
     */

    updateStreak();


    state.completedToday = true;


    /*
     * Preparar siguiente día.
     *
     * El concepto actual no se repite
     * inmediatamente mientras queden conceptos nuevos.
     */

    saveState();


    updateHome();

    renderProgress();

    renderLibrary();


    showCompletionScreen();

}


/* ============================================================
   RACHAS
============================================================ */

function updateStreak() {

    const today =
        getLocalDate();


    if (!state.lastActivityDate) {

        state.streak = 1;

        state.lastActivityDate =
            today;

        return;

    }


    if (
        state.lastActivityDate ===
        today
    ) {

        return;

    }


    const yesterday =
        getPreviousDate(today);


    if (
        state.lastActivityDate ===
        yesterday
    ) {

        state.streak += 1;

    } else {

        state.streak = 1;

    }


    state.lastActivityDate =
        today;

}


/* ============================================================
   PANTALLA DE COMPLETADO
============================================================ */

function showCompletionScreen() {

    currentStep =
        LESSON_STEPS.length - 1;


    renderLesson();


    document.getElementById(
        "lessonNextButton"
    ).innerHTML =
        `VOLVER AL INICIO <span>→</span>`;

}


/* ============================================================
   BIBLIOTECA
============================================================ */

function renderLibrary() {

    const container =
        document.getElementById(
            "libraryList"
        );


    container.innerHTML = "";


    concepts.forEach(
        (concept, index) => {

            const learned =
                state.learned.includes(
                    concept.id
                );


            const mastered =
                state.mastered.includes(
                    concept.id
                );


            let status =
                "🆕";


            if (mastered) {

                status = "✅";

            } else if (learned) {

                status = "🧠";

            }


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "concept-item";


            item.innerHTML = `

                <div class="concept-number">
                    ${String(index + 1).padStart(2, "0")}
                </div>

                <div class="concept-item-info">

                    <strong>
                        ${concept.term}
                    </strong>

                    <span>
                        ${concept.category}
                        ·
                        ${concept.level}
                    </span>

                </div>

                <div class="concept-status">
                    ${status}
                </div>

            `;


            item.addEventListener(
                "click",
                () => {

                    startLesson(
                        concept
                    );

                }
            );


            container.appendChild(
                item
            );

        }
    );

}


/* ============================================================
   PROGRESO
============================================================ */

function renderProgress() {

    const learned =
        state.learned.length;


    const mastered =
        state.mastered.length;


    const percentage =
        Math.round(
            (
                learned /
                concepts.length
            ) * 100
        );


    document.getElementById(
        "statsLearned"
    ).textContent =
        learned;


    document.getElementById(
        "statsMastered"
    ).textContent =
        mastered;


    document.getElementById(
        "statsXP"
    ).textContent =
        state.xp;


    document.getElementById(
        "statsStreak"
    ).textContent =
        state.streak;


    document.getElementById(
        "statsPercent"
    ).textContent =
        `${percentage}%`;


    document.getElementById(
        "statsProgressBar"
    ).style.width =
        `${percentage}%`;


    document.getElementById(
        "statsProgressText"
    ).textContent =
        `${learned} de ${concepts.length} conceptos aprendidos.`;


    renderCategoryProgress();

}


/* ============================================================
   PROGRESO POR CATEGORÍA
============================================================ */

function renderCategoryProgress() {

    const container =
        document.getElementById(
            "categoryProgressList"
        );


    const categories = {};


    concepts.forEach(
        concept => {

            if (
                !categories[
                    concept.category
                ]
            ) {

                categories[
                    concept.category
                ] = {

                    total: 0,
                    learned: 0

                };

            }


            categories[
                concept.category
            ].total++;


            if (
                state.learned.includes(
                    concept.id
                )
            ) {

                categories[
                    concept.category
                ].learned++;

            }

        }
    );


    container.innerHTML = "";


    Object.entries(categories)
        .forEach(
            ([name, data]) => {

                const percentage =
                    Math.round(
                        (
                            data.learned /
                            data.total
                        ) * 100
                    );


                const row =
                    document.createElement(
                        "div"
                    );


                row.className =
                    "category-row";


                row.innerHTML = `

                    <div class="category-row-header">

                        <span>
                            ${name}
                        </span>

                        <span>
                            ${data.learned}/${data.total}
                        </span>

                    </div>

                    <div class="progress-bar">

                        <div
                            class="progress-fill"
                            style="width:${percentage}%"
                        ></div>

                    </div>

                `;


                container.appendChild(
                    row
                );

            }
        );

}


/* ============================================================
   REINICIAR PROGRESO
============================================================ */

function resetProgress() {

    const confirmation =
        confirm(
            "¿Seguro que quieres eliminar todo tu progreso?"
        );


    if (!confirmation) {

        return;

    }


    localStorage.removeItem(
        STORAGE_KEY
    );


    state =
        createInitialState();


    currentConcept =
        getDailyConcept();


    updateHome();

    renderProgress();

    renderLibrary();

    showScreen("homeScreen");


    alert(
        "Tu progreso ha sido reiniciado."
    );

}


/* ============================================================
   EVENTOS
============================================================ */


/*
 * Navegación inferior.
 */

document
    .querySelectorAll(".nav-item")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                showScreen(
                    button.dataset.screen
                );

            }
        );

    });


/*
 * Comenzar concepto.
 */

document
    .getElementById(
        "startLearningButton"
    )
    .addEventListener(
        "click",
        () => {

            startLesson();

        }
    );


/*
 * Siguiente paso.
 */

document
    .getElementById(
        "lessonNextButton"
    )
    .addEventListener(
        "click",
        nextLessonStep
    );


/*
 * Volver desde la lección.
 */

document
    .getElementById(
        "lessonBackButton"
    )
    .addEventListener(
        "click",
        () => {

            showScreen(
                "homeScreen"
            );

        }
    );


/*
 * Configuración.
 */

document
    .getElementById(
        "settingsButton"
    )
    .addEventListener(
        "click",
        () => {

            showScreen(
                "settingsScreen"
            );

        }
    );


/*
 * Reiniciar.
 */

document
    .getElementById(
        "resetProgressButton"
    )
    .addEventListener(
        "click",
        resetProgress
    );


/* ============================================================
   INICIALIZACIÓN
============================================================ */

function init() {

    /*
     * Verificar que existen conceptos.
     */

    if (
        !Array.isArray(concepts) ||
        concepts.length === 0
    ) {

        console.error(
            "No existen conceptos en data.js"
        );

        return;

    }


    currentConcept =
        getDailyConcept();


    updateHome();

    renderLibrary();

    renderProgress();

}


init();
