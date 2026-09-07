/*
 * MÓDULO 3 — ÁRBITRO Y VALIDADOR DE MOVIMIENTOS
 *
 * Dependencias:
 *   ejercicios-data.js → exercise-menu.js → tactical-arbiter.js
 *
 * Responsabilidades:
 *   - Interceptar las jugadas del usuario.
 *   - Compararlas con la solución del ejercicio.
 *   - Aceptar jugadas correctas.
 *   - Rechazar jugadas incorrectas mediante undo().
 *   - Ejecutar automáticamente las respuestas del rival.
 *   - Avanzar currentStep.
 *   - Detectar la finalización del ejercicio.
 *
 * NO implementa todavía:
 *   - Panel verde/rojo.
 *   - Modo Libre.
 */

class TacticalArbiter {

    constructor(engine, menu) {

        this.engine = engine;
        this.menu = menu;

        this.currentExercise = null;
        this.currentStep = 0;

        // Evita que el usuario juegue mientras responde el rival.
        this.isBusy = false;

        // Indica que la jugada viene del propio árbitro.
        this.isTrainingMove = false;

        // Referencia al makeMove original del ChessEngine.
        this.originalMakeMove = null;

        // Tiempo de espera antes de la respuesta automática.
        this.autoReplyDelay = 500;

        this.initialized = false;
    }


    /*
     * Inicializa el árbitro.
     */
    init() {

        if (!this.engine || !this.menu) {

            console.error(
                "[Módulo 3] Faltan ChessEngine o ExerciseMenu."
            );

            return false;
        }


        /*
         * El ChessEngine existente no tiene undo().
         *
         * Utilizamos su historial mediante stepBackward().
         * Así mantenemos un único sistema de historial.
         */
        if (typeof this.engine.undo !== "function") {

            this.engine.undo = () => {

                if (this.engine.historyIndex < 0) {
                    return false;
                }

                this.engine.stepBackward();

                return true;
            };
        }


        /*
         * Guardamos el makeMove original.
         */
        this.originalMakeMove =
            this.engine.makeMove.bind(this.engine);


        /*
         * Interceptamos las jugadas.
         */
        const arbiter = this;

        this.engine.makeMove = function(move) {

            return arbiter.interceptMove(move);
        };


        /*
         * Nos sincronizamos cuando el usuario selecciona
         * un ejercicio desde el Módulo 2.
         */
        const originalSelectExercise =
            this.menu.selectExercise.bind(this.menu);


        this.menu.selectExercise = function(exerciseId) {

            const result =
                originalSelectExercise(exerciseId);

            arbiter.syncWithMenu();

            return result;
        };


        /*
         * Estado inicial.
         */
        this.syncWithMenu();

        this.initialized = true;

        console.log(
            "[Módulo 3] TacticalArbiter inicializado correctamente."
        );

        return true;
    }


    /*
     * Sincroniza el árbitro con el ejercicio seleccionado.
     */
    syncWithMenu() {

        this.currentExercise =
            this.menu.activeExercise || null;

        this.currentStep = 0;

        this.isBusy = false;

        this.isTrainingMove = false;
    }


    /*
     * Obtiene la solución del ejercicio.
     *
     * Compatible con:
     *
     *   ejercicio.solucion
     *   ejercicio.solution
     *   ejercicio.solutionSan
     */
    getSolutionSteps() {

        if (!this.currentExercise) {
            return [];
        }


        /*
         * Formato español:
         *
         * solucion: [
         *     {
         *         san: "Bxf7+",
         *         esMia: true
         *     }
         * ]
         */
        if (
            Array.isArray(
                this.currentExercise.solucion
            )
        ) {

            return this.currentExercise.solucion;
        }


        /*
         * Formato inglés:
         */
        if (
            Array.isArray(
                this.currentExercise.solution
            )
        ) {

            return this.currentExercise.solution;
        }


        /*
         * Formato actual del Módulo 1:
         *
         * solutionSan: [
         *     "Bxf7+",
         *     "Kxf7",
         *     "Qb3+"
         * ]
         */
        if (
            Array.isArray(
                this.currentExercise.solutionSan
            )
        ) {

            return this.currentExercise.solutionSan.map(
                (san, index) => {

                    return {
                        san: san,
                        esMia: this.inferPlayerMove(index)
                    };
                }
            );
        }


        return [];
    }


    /*
     * Determina quién debe jugar según el índice
     * cuando la solución viene solamente como SAN.
     */
    inferPlayerMove(index) {

        const playerColor =
            this.currentExercise.playerColor;


        const fenTurn =
            this.currentExercise.fen
                ? this.currentExercise.fen
                    .trim()
                    .split(/\s+/)[1]
                : playerColor;


        const turnAtStep =
            index % 2 === 0
                ? fenTurn
                : (
                    fenTurn === "w"
                        ? "b"
                        : "w"
                );


        return turnAtStep === playerColor;
    }


    /*
     * Normaliza SAN para evitar diferencias como:
     *
     * Bxf7+
     * Bxf7
     * Bxf7!
     */
    normalizeSAN(value) {

        if (typeof value !== "string") {
            return "";
        }


        return value
            .trim()
            .replace(/[!?]+/g, "")
            .replace(/[+#]+$/g, "")
            .replace(/\s+/g, "")
            .replace(/0-0-0/g, "O-O-O")
            .replace(/0-0/g, "O-O");
    }


    /*
     * Extrae el SAN de un paso.
     */
    stepSAN(step) {

        if (typeof step === "string") {
            return step;
        }


        if (!step || typeof step !== "object") {
            return "";
        }


        return (
            step.san ||
            step.movimiento ||
            step.move ||
            step.jugada ||
            ""
        );
    }


    /*
     * Determina si el paso corresponde al usuario.
     *
     * Prioridad:
     *
     *   esMia
     *   isMine
     *   inferencia automática
     */
    stepBelongsToUser(step, index) {

        if (
            step &&
            typeof step === "object" &&
            typeof step.esMia === "boolean"
        ) {

            return step.esMia;
        }


        if (
            step &&
            typeof step === "object" &&
            typeof step.isMine === "boolean"
        ) {

            return step.isMine;
        }


        return this.inferPlayerMove(index);
    }


    /*
     * Busca dentro de los movimientos legales
     * el movimiento que corresponde al SAN esperado.
     */
    findMoveForSAN(expectedSAN) {

        const target =
            this.normalizeSAN(expectedSAN);


        if (!target) {
            return null;
        }


        const legalMoves =
            this.engine.getAllLegalMoves(
                this.engine.turn
            );


        for (const move of legalMoves) {

            const disambiguation =
                this.engine.getDisambiguation(move);


            const generatedSAN =
                this.engine.getSAN(
                    move,
                    disambiguation
                );


            if (
                this.normalizeSAN(generatedSAN) ===
                target
            ) {

                return move;
            }
        }


        return null;
    }


    /*
     * Compara dos movimientos por coordenadas.
     *
     * No depende de SAN.
     */
    sameMove(a, b) {

        return Boolean(

            a &&
            b &&

            a.from.r === b.from.r &&
            a.from.c === b.from.c &&

            a.to.r === b.to.r &&
            a.to.c === b.to.c &&

            (a.promotion || null) ===
            (b.promotion || null)
        );
    }


    /*
     * Punto central de interceptación.
     */
    interceptMove(move) {


        /*
         * Si es una jugada automática del rival,
         * no vuelve a pasar por la validación.
         */
        if (this.isTrainingMove) {

            return this.originalMakeMove(move);
        }


        /*
         * Si no hay ejercicio activo o no existe FEN,
         * mantenemos el comportamiento normal del tablero.
         */
        if (
            !this.currentExercise ||
            !this.currentExercise.fen
        ) {

            return this.originalMakeMove(move);
        }


        /*
         * Mientras responde el rival,
         * bloqueamos nuevas jugadas.
         */
        if (this.isBusy) {

            return false;
        }


        return this.validateUserMove(move);
    }


    /*
     * Valida la jugada del usuario.
     */
    validateUserMove(move) {

        const steps =
            this.getSolutionSteps();


        const expectedStep =
            steps[this.currentStep];


        /*
         * No quedan pasos.
         */
        if (!expectedStep) {

            this.finishExercise();

            return false;
        }


        /*
         * En este momento debe jugar el usuario.
         */
        if (
            !this.stepBelongsToUser(
                expectedStep,
                this.currentStep
            )
        ) {

            console.warn(
                "[Módulo 3] Ahora corresponde una respuesta automática del rival."
            );

            return false;
        }


        /*
         * SAN esperado.
         */
        const expectedSAN =
            this.stepSAN(expectedStep);


        /*
         * Convertimos el SAN esperado
         * a un movimiento legal real.
         */
        const expectedMove =
            this.findMoveForSAN(expectedSAN);


        /*
         * La solución no es legal desde la posición.
         *
         * Esto normalmente indica una discrepancia
         * entre FEN y solución.
         */
        if (!expectedMove) {

            console.error(
                "[Módulo 3] La solución no es legal desde la posición actual.",
                {
                    exercise:
                        this.currentExercise.id,

                    step:
                        this.currentStep,

                    expectedSAN:
                        expectedSAN,

                    fen:
                        this.engine.generateFEN()
                }
            );

            return false;
        }


        /*
         * JUGADA INCORRECTA
         */
        if (!this.sameMove(move, expectedMove)) {


            /*
             * Ejecutamos temporalmente el movimiento
             * para que el historial del ChessEngine
             * registre la jugada.
             */
            this.originalMakeMove(move);


            /*
             * Volvemos atrás mediante undo().
             */
            this.engine.undo();


            /*
             * IMPORTANTE:
             * currentStep NO cambia.
             *
             * El usuario puede volver a intentar.
             */
            return false;
        }


        /*
         * JUGADA CORRECTA
         */
        this.originalMakeMove(move);


        /*
         * Avanzamos al siguiente paso.
         */
        this.currentStep++;


        /*
         * Sincronizamos también el Módulo 2.
         */
        this.menu.currentStep =
            this.currentStep;


        this.updateContextStep();


        /*
         * Procesamos el siguiente paso.
         */
        this.processNextStep();


        return true;
    }


    /*
     * Procesa el paso posterior a una jugada correcta.
     */
    processNextStep() {

        const steps =
            this.getSolutionSteps();


        const nextStep =
            steps[this.currentStep];


        /*
         * No queda ningún paso:
         * ejercicio terminado.
         */
        if (!nextStep) {

            this.finishExercise();

            return;
        }


        /*
         * Si el siguiente paso pertenece al usuario,
         * liberamos el tablero.
         */
        if (
            this.stepBelongsToUser(
                nextStep,
                this.currentStep
            )
        ) {

            this.isBusy = false;

            return;
        }


        /*
         * El siguiente paso es del rival.
         */
        this.isBusy = true;


        setTimeout(
            () => this.executeOpponentStep(),
            this.autoReplyDelay
        );
    }


    /*
     * Ejecuta la respuesta automática del rival.
     */
    executeOpponentStep() {

        if (!this.currentExercise) {

            this.isBusy = false;

            return;
        }


        const steps =
            this.getSolutionSteps();


        const step =
            steps[this.currentStep];


        /*
         * Seguridad.
         */
        if (
            !step ||
            this.stepBelongsToUser(
                step,
                this.currentStep
            )
        ) {

            this.isBusy = false;

            return;
        }


        /*
         * SAN de la respuesta rival.
         */
        const expectedSAN =
            this.stepSAN(step);


        /*
         * Convertimos SAN a movimiento legal.
         */
        const move =
            this.findMoveForSAN(expectedSAN);


        /*
         * No se pudo encontrar la respuesta.
         */
        if (!move) {

            console.error(
                "[Módulo 3] No se pudo ejecutar la respuesta del rival.",
                {
                    exercise:
                        this.currentExercise.id,

                    step:
                        this.currentStep,

                    expectedSAN:
                        expectedSAN,

                    fen:
                        this.engine.generateFEN()
                }
            );


            this.isBusy = false;

            return;
        }


        /*
         * Marcamos la jugada como automática.
         */
        this.isTrainingMove = true;


        try {

            this.originalMakeMove(move);

        } finally {

            this.isTrainingMove = false;
        }


        /*
         * Avanzamos después de la respuesta rival.
         */
        this.currentStep++;


        this.menu.currentStep =
            this.currentStep;


        this.updateContextStep();


        /*
         * Comprobamos qué viene después.
         */
        this.processNextStep();
    }


    /*
     * Finaliza el ejercicio.
     */
    finishExercise() {

        this.isBusy = false;

        this.isTrainingMove = false;


        this.menu.currentStep =
            this.currentStep;


        const title =
            this.currentExercise?.title ||
            "Ejercicio";


        /*
         * Utilizamos el indicador de estado existente
         * si está presente.
         */
        const status =
            document.getElementById(
                "game-status"
            );


        if (status) {

            status.textContent =
                `¡Ejercicio completado! ${title}`;
        }


        /*
         * Evento que podrá utilizar el
         * Módulo 4 de Feedback.
         */
        window.dispatchEvent(

            new CustomEvent(
                "tactical-exercise-completed",
                {
                    detail: {

                        exerciseId:
                            this.currentExercise?.id ||
                            null,

                        steps:
                            this.currentStep
                    }
                }
            )
        );
    }


    /*
     * Actualiza el texto de contexto del Módulo 2
     * para reflejar el paso actual.
     */
    updateContextStep() {

        if (
            this.currentExercise &&
            typeof this.menu.updateContext ===
            "function"
        ) {

            this.menu.updateContext(

                this.currentExercise,

                Boolean(
                    this.currentExercise.fen
                )
            );
        }
    }


    /*
     * Estado público para depuración.
     *
     * Desde consola:
     *
     * tacticalArbiter.getState()
     */
    getState() {

        const steps =
            this.getSolutionSteps();


        return {

            exerciseId:
                this.currentExercise?.id ||
                null,

            currentStep:
                this.currentStep,

            isBusy:
                this.isBusy,

            isTrainingMove:
                this.isTrainingMove,

            solutionLength:
                steps.length,

            expectedSAN:
                steps[this.currentStep]
                    ? this.stepSAN(
                        steps[this.currentStep]
                    )
                    : null
        };
    }
}


/*
 * Instancia global.
 */
window.tacticalArbiter = null;


/*
 * Inicialización.
 */
document.addEventListener(
    "DOMContentLoaded",
    () => {

        const start = () => {

            if (
                window.chess &&
                window.exerciseMenu &&
                !window.tacticalArbiter
            ) {

                window.tacticalArbiter =
                    new TacticalArbiter(

                        window.chess,

                        window.exerciseMenu
                    );


                window.tacticalArbiter.init();

                return true;
            }


            return false;
        };


        /*
         * Intentamos inmediatamente.
         */
        if (!start()) {

            /*
             * Si ChessEngine o ExerciseMenu
             * todavía no están listos,
             * esperamos brevemente.
             */
            let attempts = 0;


            const timer =
                setInterval(
                    () => {

                        attempts++;


                        if (
                            start() ||
                            attempts >= 50
                        ) {

                            clearInterval(timer);
                        }

                    },
                    20
                );
        }
    }
);