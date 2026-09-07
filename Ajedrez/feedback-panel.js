```javascript
/*
 * MÓDULO 4 — PANEL DE RETROALIMENTACIÓN VISUAL
 *
 * Dependencias:
 *   - ejercicios-data.js
 *   - exercise-menu.js
 *   - tactical-arbiter.js
 *
 * No modifica las reglas del ajedrez ni valida movimientos.
 */

class FeedbackPanel {
    constructor() {
        this.element = null;
        this.titleElement = null;
        this.messageElement = null;
        this.iconElement = null;
        this.boundExerciseSelection = false;
    }

    init() {
        this.element = document.getElementById("panel-feedback");

        if (!this.element) {
            console.error("[Módulo 4] No existe #panel-feedback.");
            return false;
        }

        this.titleElement = this.element.querySelector(".feedback-title");
        this.messageElement = this.element.querySelector(".feedback-message");
        this.iconElement = this.element.querySelector(".feedback-icon");

        // Evento de finalización del ejercicio
        window.addEventListener("tactical-exercise-completed", (event) => {
            this.showComplete(
                "¡Ejercicio completado!",
                `Has completado correctamente toda la secuencia${
                    event.detail?.steps
                        ? ` (${event.detail.steps} pasos).`
                        : "."
                }`
            );
        });

        // Esperar a que exista TacticalArbiter
        const waitForArbiter = () => {
            if (!window.tacticalArbiter) {
                setTimeout(waitForArbiter, 25);
                return;
            }

            this.observeArbiter(window.tacticalArbiter);
        };

        waitForArbiter();

        // Esperar a que exista ExerciseMenu
        const waitForMenu = () => {
            if (!window.exerciseMenu) {
                setTimeout(waitForMenu, 25);
                return;
            }

            this.observeMenu(window.exerciseMenu);
        };

        waitForMenu();

        // Estado inicial
        this.clear();

        return true;
    }

    /*
     * Conecta el panel con TacticalArbiter.
     */
    observeArbiter(arbiter) {
        // Evitar envolver varias veces la misma función
        if (arbiter.__feedbackModule4Wrapped) {
            return;
        }

        /*
         * Interceptamos validateUserMove().
         * El resultado true = acierto.
         * El resultado false = movimiento rechazado.
         */
        const originalValidate = arbiter.validateUserMove.bind(arbiter);
        const panel = this;

        arbiter.validateUserMove = function(move) {
            const steps = arbiter.getSolutionSteps();
            const expectedStep = steps[arbiter.currentStep] || null;

            const result = originalValidate(move);

            if (result) {
                panel.showCorrect(
                    "¡Correcto!",
                    expectedStep?.explicacionBien ||
                    "La jugada coincide con el paso esperado."
                );
            } else if (!arbiter.isBusy) {
                panel.showIncorrect(
                    "Movimiento incorrecto",
                    expectedStep?.explicacionMal ||
                    "La jugada ha sido rechazada. Puedes intentarlo de nuevo."
                );
            }

            return result;
        };

        /*
         * Detectar respuesta automática del rival.
         */
        const originalExecuteOpponentStep =
            arbiter.executeOpponentStep.bind(arbiter);

        arbiter.executeOpponentStep = function() {
            const before = arbiter.currentStep;
            const opponentStep = arbiter.getSolutionSteps()[before] || null;

            const result = originalExecuteOpponentStep();

            if (
                arbiter.currentStep > before &&
                arbiter.currentExercise
            ) {
                panel.showInfo(
                    "Respuesta del rival",
                    opponentStep?.explicacionBien ||
                    "El rival ha respondido automáticamente."
                );
            }

            return result;
        };

        arbiter.__feedbackModule4Wrapped = true;
    }

    /*
     * Conecta el panel con ExerciseMenu.
     * Al cambiar de ejercicio, limpiamos el feedback anterior.
     */
    observeMenu(menu) {
        if (this.boundExerciseSelection) {
            return;
        }

        this.boundExerciseSelection = true;

        const originalSelect = menu.selectExercise.bind(menu);
        const panel = this;

        menu.selectExercise = function(exerciseId) {
            const result = originalSelect(exerciseId);

            panel.clear();

            if (
                menu.activeExercise?.fen &&
                result
            ) {
                panel.showInfo(
                    "Ejercicio preparado",
                    "Realiza la siguiente jugada de la solución."
                );
            }

            return result;
        };
    }

    /*
     * Cambia visualmente el estado del panel.
     */
    setState(className, icon, title, message) {
        if (!this.element) {
            return;
        }

        this.element.classList.remove(
            "is-correct",
            "is-incorrect",
            "is-info",
            "is-complete"
        );

        this.element.classList.add(className);

        if (this.iconElement) {
            this.iconElement.textContent = icon;
        }

        if (this.titleElement) {
            this.titleElement.textContent = title;
        }

        if (this.messageElement) {
            this.messageElement.textContent = message;
        }
    }

    /*
     * Feedback de movimiento correcto.
     */
    showCorrect(
        title = "¡Correcto!",
        message = "La jugada es correcta."
    ) {
        this.setState(
            "is-correct",
            "✓",
            title,
            message
        );
    }

    /*
     * Feedback de movimiento incorrecto.
     */
    showIncorrect(
        title = "Movimiento incorrecto",
        message = "La jugada no coincide con la solución."
    ) {
        this.setState(
            "is-incorrect",
            "✕",
            title,
            message
        );
    }

    /*
     * Feedback informativo.
     */
    showInfo(
        title = "Información",
        message = "El ejercicio está listo."
    ) {
        this.setState(
            "is-info",
            "i",
            title,
            message
        );
    }

    /*
     * Feedback de ejercicio completado.
     */
    showComplete(
        title = "¡Ejercicio completado!",
        message = "Has completado correctamente toda la secuencia."
    ) {
        this.setState(
            "is-complete",
            "★",
            title,
            message
        );
    }

    /*
     * Limpia/restablece el panel.
     */
    clear() {
        this.setState(
            "is-info",
            "●",
            "Retroalimentación",
            "Realiza una jugada para recibir feedback."
        );
    }

    /*
     * Estado actual para pruebas desde consola.
     */
    getState() {
        const classes = this.element
            ? [...this.element.classList]
            : [];

        return {
            mode:
                classes.includes("is-correct")
                    ? "correct"
                    : classes.includes("is-incorrect")
                        ? "incorrect"
                        : classes.includes("is-complete")
                            ? "complete"
                            : "info",

            title:
                this.titleElement?.textContent || "",

            message:
                this.messageElement?.textContent || ""
        };
    }
}


/* ==========================================================
   API PÚBLICA DEL MÓDULO 4
   ========================================================== */

/*
 * Exponer la clase globalmente.
 *
 * En consola:
 *   FeedbackPanel
 */
window.FeedbackPanel = FeedbackPanel;


/*
 * Referencia global a la instancia.
 *
 * En consola:
 *   feedbackPanel
 */
window.feedbackPanel = null;


/*
 * Inicialización manual desde consola.
 *
 * Ejemplo:
 *   initFeedbackPanel()
 */
window.initFeedbackPanel = function() {

    // Si ya existe, reutilizarla
    if (window.feedbackPanel) {
        return window.feedbackPanel;
    }

    const panel = new FeedbackPanel();

    if (!panel.init()) {
        return null;
    }

    window.feedbackPanel = panel;

    return panel;
};


/* ==========================================================
   INICIALIZACIÓN AUTOMÁTICA
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    if (!window.feedbackPanel) {

        const panel = new FeedbackPanel();

        if (panel.init()) {
            window.feedbackPanel = panel;
        }

    }

});
```
