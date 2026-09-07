/*
 * ==========================================================
 * MÓDULO 2 — MENÚ DE SELECCIÓN DE EJERCICIOS
 * ==========================================================
 *
 * Dependencias:
 *   1. ejercicios-data.js  → Módulo 1
 *   2. ajedrezN3.html       → ChessEngine existente
 *
 * Responsabilidades:
 *   - Renderizar #sidebar-ejercicios.
 *   - Agrupar los ejercicios por temas.
 *   - Seleccionar un ejercicio.
 *   - Cargar su FEN en ChessEngine.
 *   - Reiniciar currentStep a 0.
 *   - Mostrar el contexto preliminar.
 *   - Mantener el ejercicio activo.
 *
 * Este módulo NO:
 *   - valida jugadas;
 *   - compara movimientos con la solución;
 *   - hace undo de jugadas incorrectas;
 *   - mueve automáticamente al rival;
 *   - muestra feedback correcto/incorrecto;
 *   - implementa Modo Libre.
 *
 * Todo eso pertenece a módulos posteriores.
 * ==========================================================
 */


/**
 * ==========================================================
 * CLASE ExerciseMenu
 * ==========================================================
 */
class ExerciseMenu {

    constructor() {

        // Ejercicio actualmente seleccionado
        this.activeExercise = null;

        // Paso actual del ejercicio
        // Siempre comienza en 0 al seleccionar un ejercicio.
        this.currentStep = 0;

        // Elemento HTML de la barra lateral
        this.container = null;

        // Elemento donde se muestra el contexto
        this.contextElement = null;
    }


    /**
     * ======================================================
     * INICIALIZACIÓN
     * ======================================================
     */
    init() {

        // Buscar la barra lateral
        this.container = document.getElementById(
            "sidebar-ejercicios"
        );

        // Buscar el panel de contexto
        this.contextElement = document.getElementById(
            "exercise-context"
        );


        /*
         * Comprobar que existe la barra lateral.
         */
        if (!this.container) {

            console.error(
                "[Módulo 2] No existe #sidebar-ejercicios."
            );

            return false;
        }


        /*
         * Comprobar que existe la base de datos
         * del Módulo 1.
         *
         * Compatibilidad:
         *   - EXERCISE_DATABASE
         *   - listaEjercicios
         */
        if (
            typeof EXERCISE_DATABASE === "undefined" &&
            !Array.isArray(window.listaEjercicios)
        ) {

            console.error(
                "[Módulo 2] No se encontró la base de ejercicios. " +
                "Carga ejercicios-data.js antes de exercise-menu.js."
            );

            return false;
        }


        /*
         * Comprobar que ChessEngine está disponible.
         *
         * En ajedrezN3-modulo5.html la instancia existente
         * debe estar disponible como window.chess.
         */
        if (
            typeof window.chess === "undefined" ||
            !window.chess
        ) {

            console.error(
                "[Módulo 2] ChessEngine todavía no está disponible."
            );

            return false;
        }


        /*
         * Generar el menú.
         */
        this.render();


        return true;
    }


    /**
     * ======================================================
     * OBTENER TEMAS
     * ======================================================
     *
     * Compatible con:
     *
     *   EXERCISE_DATABASE.themes
     *
     * o con:
     *
     *   listaEjercicios[]
     *
     * En el segundo caso se agrupa automáticamente
     * utilizando exercise.categoria.
     */
    getThemes() {

        /*
         * --------------------------------------------------
         * CASO 1:
         * Base estructurada con themes.
         * --------------------------------------------------
         */
        if (
            typeof EXERCISE_DATABASE !== "undefined" &&
            Array.isArray(EXERCISE_DATABASE.themes)
        ) {

            return EXERCISE_DATABASE.themes;
        }


        /*
         * --------------------------------------------------
         * CASO 2:
         * Array plano listaEjercicios.
         * --------------------------------------------------
         */
        if (
            Array.isArray(window.listaEjercicios)
        ) {

            const groups = new Map();


            for (
                const exercise of window.listaEjercicios
            ) {

                const category =
                    exercise.categoria ||
                    "Sin categoría";


                /*
                 * Crear categoría si todavía no existe.
                 */
                if (!groups.has(category)) {

                    const safeId =
                        category
                            .toLowerCase()
                            .normalize("NFD")
                            .replace(
                                /[\u0300-\u036f]/g,
                                ""
                            )
                            .replace(
                                /[^a-z0-9]+/g,
                                "-"
                            )
                            .replace(
                                /^-+|-+$/g,
                                ""
                            );


                    groups.set(
                        category,
                        {
                            id:
                                safeId ||
                                "sin-categoria",

                            name:
                                category,

                            exercises:
                                []
                        }
                    );
                }


                /*
                 * Añadir ejercicio al grupo.
                 */
                groups
                    .get(category)
                    .exercises
                    .push(exercise);
            }


            return [
                ...groups.values()
            ];
        }


        return [];
    }


    /**
     * ======================================================
     * OBTENER TODOS LOS EJERCICIOS
     * ======================================================
     *
     * Se utiliza como respaldo cuando no existe
     * getExerciseById() global.
     */
    getAllExercises() {

        /*
         * Preferir la función oficial si existe.
         */
        if (
            typeof window.getAllExercises ===
                "function"
        ) {

            return window.getAllExercises();
        }


        /*
         * Array plano.
         */
        if (
            Array.isArray(window.listaEjercicios)
        ) {

            return window.listaEjercicios;
        }


        /*
         * Base estructurada.
         */
        const themes =
            this.getThemes();

        return themes.flatMap(
            theme =>
                Array.isArray(theme.exercises)
                    ? theme.exercises
                    : []
        );
    }


    /**
     * ======================================================
     * BUSCAR EJERCICIO POR ID
     * ======================================================
     */
    findExercise(exerciseId) {

        /*
         * Preferir la función global oficial.
         */
        if (
            typeof window.getExerciseById ===
                "function"
        ) {

            const exercise =
                window.getExerciseById(
                    exerciseId
                );

            if (exercise) {
                return exercise;
            }
        }


        /*
         * Respaldo local.
         */
        return this
            .getAllExercises()
            .find(
                exercise =>
                    exercise.id ===
                    exerciseId
            ) || null;
    }


    /**
     * ======================================================
     * RENDERIZAR MENÚ
     * ======================================================
     *
     * Recorre:
     *
     * listaEjercicios
     *      ↓
     * categoria
     *      ↓
     * ejercicios
     *
     * o, si existe:
     *
     * EXERCISE_DATABASE
     *      ↓
     * themes
     *      ↓
     * exercises
     *
     * y genera dinámicamente el HTML.
     */
    render() {

        /*
         * Seguridad.
         */
        if (!this.container) {
            return;
        }


        /*
         * Limpiar el contenido anterior.
         */
        this.container.innerHTML = "";


        /*
         * DocumentFragment para evitar
         * múltiples repintados del DOM.
         */
        const fragment =
            document.createDocumentFragment();


        /*
         * Obtener temas.
         */
        const themes =
            this.getThemes();


        /*
         * Recorrer todos los temas.
         */
        themes.forEach(
            (theme, themeIndex) => {

                /*
                 * Seguridad.
                 */
                if (
                    !theme ||
                    !Array.isArray(
                        theme.exercises
                    )
                ) {
                    return;
                }


                /*
                 * Contenedor del tema.
                 */
                const themeSection =
                    document.createElement(
                        "section"
                    );

                themeSection.className =
                    "exercise-theme";

                themeSection.dataset.themeId =
                    String(
                        theme.id ||
                        `theme-${themeIndex + 1}`
                    );


                /*
                 * ------------------------------------------------
                 * CABECERA DEL TEMA
                 * ------------------------------------------------
                 */
                const header =
                    document.createElement(
                        "button"
                    );

                header.type =
                    "button";

                header.className =
                    "exercise-theme-header";

                header.setAttribute(
                    "aria-expanded",
                    themeIndex === 0
                        ? "true"
                        : "false"
                );


                /*
                 * Estructura visual:
                 *
                 * ▾  Ruy López             3
                 */
                header.innerHTML = `
                    <span class="exercise-theme-arrow">
                        ${themeIndex === 0 ? "▾" : "▸"}
                    </span>

                    <span class="exercise-theme-name"></span>

                    <span class="exercise-theme-count">
                        ${theme.exercises.length}
                    </span>
                `;


                /*
                 * Nombre mediante textContent
                 * para evitar HTML externo.
                 */
                const themeName =
                    header.querySelector(
                        ".exercise-theme-name"
                    );

                if (themeName) {

                    themeName.textContent =
                        theme.name ||
                        "Sin categoría";
                }


                /*
                 * ------------------------------------------------
                 * LISTA DE EJERCICIOS
                 * ------------------------------------------------
                 */
                const list =
                    document.createElement(
                        "div"
                    );

                list.className =
                    "exercise-list";


                /*
                 * Solo el primer tema comienza abierto.
                 */
                list.hidden =
                    themeIndex !== 0;


                /*
                 * Recorrer ejercicios del tema.
                 */
                theme.exercises.forEach(
                    (exercise, exerciseIndex) => {

                        /*
                         * Seguridad.
                         */
                        if (!exercise) {
                            return;
                        }


                        /*
                         * Botón del ejercicio.
                         */
                        const item =
                            document.createElement(
                                "button"
                            );

                        item.type =
                            "button";

                        item.className =
                            "exercise-item";

                        item.dataset.exerciseId =
                            String(
                                exercise.id ||
                                ""
                            );


                        /*
                         * Si no existe FEN,
                         * marcamos visualmente
                         * el ejercicio como pendiente.
                         */
                        if (!exercise.fen) {

                            item.classList.add(
                                "exercise-item-pending"
                            );

                            item.title =
                                "Este ejercicio todavía no tiene " +
                                "un FEN completo disponible.";
                        }


                        /*
                         * Número del ejercicio.
                         */
                        const number =
                            document.createElement(
                                "span"
                            );

                        number.className =
                            "exercise-number";

                        number.textContent =
                            `${exerciseIndex + 1}.`;


                        /*
                         * Título.
                         */
                        const title =
                            document.createElement(
                                "span"
                            );

                        title.className =
                            "exercise-title";

                        title.textContent =
                            exercise.titulo ||
                            exercise.title ||
                            "Ejercicio sin título";


                        /*
                         * Estado FEN.
                         */
                        const status =
                            document.createElement(
                                "span"
                            );

                        status.className =
                            "exercise-status";

                        status.textContent =
                            exercise.fen
                                ? "FEN"
                                : "Pendiente";


                        /*
                         * Añadir elementos al botón.
                         */
                        item.append(
                            number,
                            title,
                            status
                        );


                        /*
                         * Evento click.
                         */
                        item.addEventListener(
                            "click",
                            () => {

                                this.selectExercise(
                                    exercise.id
                                );

                            }
                        );


                        /*
                         * Añadir ejercicio a la lista.
                         */
                        list.appendChild(
                            item
                        );
                    }
                );


                /*
                 * ------------------------------------------------
                 * ABRIR / CERRAR TEMA
                 * ------------------------------------------------
                 */
                header.addEventListener(
                    "click",
                    () => {

                        /*
                         * Si estaba cerrado,
                         * lo abrimos.
                         */
                        const willOpen =
                            list.hidden;


                        list.hidden =
                            !willOpen;


                        header.setAttribute(
                            "aria-expanded",
                            String(
                                willOpen
                            )
                        );


                        /*
                         * Cambiar flecha.
                         */
                        const arrow =
                            header.querySelector(
                                ".exercise-theme-arrow"
                            );

                        if (arrow) {

                            arrow.textContent =
                                willOpen
                                    ? "▾"
                                    : "▸";
                        }
                    }
                );


                /*
                 * Añadir cabecera y lista
                 * al tema.
                 */
                themeSection.append(
                    header,
                    list
                );


                /*
                 * Añadir tema al fragmento.
                 */
                fragment.appendChild(
                    themeSection
                );
            }
        );


        /*
         * Insertar todo en el DOM.
         */
        this.container.appendChild(
            fragment
        );


        /*
         * Marcar ejercicio activo si existe.
         */
        this.updateActiveItem();
    }


    /**
     * ======================================================
     * SELECCIONAR EJERCICIO
     * ======================================================
     *
     * Flujo:
     *
     * click
     *   ↓
     * buscar ejercicio
     *   ↓
     * activeExercise
     *   ↓
     * currentStep = 0
     *   ↓
     * contexto
     *   ↓
     * cargar FEN
     *   ↓
     * verificar FEN
     */
    selectExercise(exerciseId) {

        /*
         * Buscar ejercicio.
         */
        const exercise =
            this.findExercise(
                exerciseId
            );


        /*
         * Si no existe.
         */
        if (!exercise) {

            console.error(
                `[Módulo 2] No existe el ejercicio: ${exerciseId}`
            );

            return false;
        }


        /*
         * Guardar ejercicio activo.
         */
        this.activeExercise =
            exercise;


        /*
         * Cada ejercicio comienza
         * desde el primer paso.
         */
        this.currentStep =
            0;


        /*
         * Actualizar resaltado visual.
         */
        this.updateActiveItem();


        /*
         * Mostrar contexto.
         */
        this.updateContext(
            exercise
        );


        /*
         * --------------------------------------------------
         * COMPROBAR FEN
         * --------------------------------------------------
         */
        if (
            typeof exercise.fen !== "string" ||
            !exercise.fen.trim()
        ) {

            this.showPendingFenMessage(
                exercise
            );

            return false;
        }


        /*
         * --------------------------------------------------
         * CARGAR FEN EN CHESSENGINE
         * --------------------------------------------------
         */
        try {

            window.chess.loadFEN(
                exercise.fen,
                true
            );


            /*
             * ------------------------------------------------
             * VERIFICACIÓN
             * ------------------------------------------------
             */
            const loadedFEN =
                window.chess.generateFEN();


            /*
             * El ChessEngine puede normalizar
             * campos secundarios del FEN.
             *
             * Por eso solo advertimos.
             */
            if (
                loadedFEN !==
                exercise.fen
            ) {

                console.warn(
                    "[Módulo 2] El FEN cargado " +
                    "no coincide literalmente con " +
                    "el FEN de datos.",
                    {
                        expected:
                            exercise.fen,

                        loaded:
                            loadedFEN
                    }
                );
            }


            /*
             * Actualizar contexto
             * indicando que fue cargado.
             */
            this.updateContext(
                exercise,
                true
            );


            return true;

        } catch (error) {

            /*
             * Error durante loadFEN().
             */
            console.error(
                `[Módulo 2] No se pudo cargar el FEN de ${exercise.id}:`,
                error
            );


            /*
             * Mostrar error en contexto.
             */
            this.updateContext(
                exercise,
                false,
                error?.message ||
                "Error desconocido"
            );


            return false;
        }
    }


    /**
     * ======================================================
     * ACTUALIZAR EJERCICIO ACTIVO EN EL MENÚ
     * ======================================================
     */
    updateActiveItem() {

        if (!this.container) {
            return;
        }


        /*
         * Obtener todos los ejercicios
         * actualmente renderizados.
         */
        this.container
            .querySelectorAll(
                ".exercise-item"
            )
            .forEach(
                item => {

                    /*
                     * Aplicar clase is-active
                     * únicamente al ejercicio seleccionado.
                     */
                    item.classList.toggle(
                        "is-active",

                        Boolean(
                            this.activeExercise &&
                            item.dataset.exerciseId ===
                                String(
                                    this.activeExercise.id
                                )
                        )
                    );
                }
            );
    }


    /**
     * ======================================================
     * ACTUALIZAR CONTEXTO
     * ======================================================
     */
    updateContext(
        exercise,
        fenLoaded = false,
        errorMessage = ""
    ) {

        /*
         * El panel de contexto es opcional.
         */
        if (!this.contextElement) {
            return;
        }


        /*
         * Limpiar contenido anterior.
         */
        this.contextElement.innerHTML =
            "";


        /*
         * Título.
         */
        const title =
            document.createElement(
                "strong"
            );

        title.textContent =
            exercise.titulo ||
            exercise.title ||
            "Ejercicio";


        /*
         * Descripción.
         */
        const description =
            document.createElement(
                "p"
            );

        description.textContent =
            exercise.descripcion ||
            exercise.description ||
            exercise.context ||
            "Sin descripción disponible.";


        /*
         * Patrón táctico.
         */
        const pattern =
            document.createElement(
                "p"
            );

        pattern.textContent =
            exercise.patron
                ? `Patrón: ${exercise.patron}`
                : "";


        /*
         * Información básica.
         */
        const meta =
            document.createElement(
                "div"
            );

        meta.className =
            "exercise-context-meta";


        /*
         * Determinar color.
         *
         * Prioridad:
         *   playerColor
         *   FEN
         *   blanco por defecto
         */
        let playerColor =
            exercise.playerColor;


        if (
            playerColor !== "w" &&
            playerColor !== "b" &&
            typeof exercise.fen === "string"
        ) {

            const fenParts =
                exercise.fen
                    .trim()
                    .split(/\s+/);

            playerColor =
                fenParts[1] === "b"
                    ? "b"
                    : "w";
        }


        meta.textContent =
            `Paso: ${this.currentStep} · ` +
            `Juegan: ${
                playerColor === "b"
                    ? "Negras"
                    : "Blancas"
            }`;


        /*
         * Añadir elementos.
         */
        this.contextElement.append(
            title,
            description
        );


        if (
            pattern.textContent
        ) {

            this.contextElement.append(
                pattern
            );
        }


        this.contextElement.append(
            meta
        );


        /*
         * Si había FEN pero ocurrió
         * algún problema durante la carga.
         */
        if (
            !fenLoaded &&
            exercise.fen
        ) {

            const warning =
                document.createElement(
                    "p"
                );

            warning.className =
                "exercise-context-warning";


            warning.textContent =
                errorMessage
                    ? `No se pudo cargar el FEN: ${errorMessage}`
                    : "El FEN está definido, pero no pudo verificarse tras la carga.";


            this.contextElement.appendChild(
                warning
            );
        }
    }


    /**
     * ======================================================
     * AVISO DE FEN PENDIENTE
     * ======================================================
     */
    showPendingFenMessage(
        exercise
    ) {

        if (!this.contextElement) {
            return;
        }


        const warning =
            document.createElement(
                "p"
            );


        warning.className =
            "exercise-context-warning";


        warning.textContent =
            "Este ejercicio está listado, " +
            "pero su posición FEN completa " +
            "no está disponible.";


        this.contextElement.appendChild(
            warning
        );
    }


    /**
     * ======================================================
     * OBTENER ESTADO ACTUAL
     * ======================================================
     *
     * Esta función será especialmente útil
     * para TacticalArbiter y depuración.
     */
    getState() {

        return {

            activeExerciseId:
                this.activeExercise
                    ? this.activeExercise.id
                    : null,

            currentStep:
                this.currentStep,

            activeExercise:
                this.activeExercise
        };
    }
}


/**
 * ==========================================================
 * INSTANCIA GLOBAL
 * ==========================================================
 *
 * Se utiliza window.exerciseMenu para poder inspeccionarla
 * desde la consola del navegador.
 */
window.exerciseMenu = null;


/**
 * ==========================================================
 * INICIALIZACIÓN AL CARGAR LA PÁGINA
 * ==========================================================
 */
document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
         * Evitar crear una segunda instancia.
         */
        if (
            window.exerciseMenu
        ) {

            return;
        }


        /*
         * Crear instancia.
         */
        window.exerciseMenu =
            new ExerciseMenu();


        /*
         * Inicializar.
         */
        if (
            !window.exerciseMenu.init()
        ) {

            /*
             * Si algo falla,
             * eliminamos la referencia.
             */
            window.exerciseMenu =
                null;
        }
    }
);


/**
 * ==========================================================
 * FUNCIÓN GLOBAL PARA PRUEBAS
 * ==========================================================
 *
 * Desde la consola:
 *
 *     selectExercise("italiana-01")
 *
 * Esto permite probar el módulo sin necesidad
 * de hacer click manualmente.
 */
window.selectExercise =
    function(exerciseId) {

        /*
         * Comprobar inicialización.
         */
        if (
            !window.exerciseMenu
        ) {

            console.error(
                "[Módulo 2] exerciseMenu todavía " +
                "no está inicializado."
            );

            return false;
        }


        /*
         * Delegar en ExerciseMenu.
         */
        return window.exerciseMenu.selectExercise(
            exerciseId
        );
    };