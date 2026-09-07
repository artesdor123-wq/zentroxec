/*
 * MÓDULO 5 — MODO ANÁLISIS / LIBRE
 *
 * Dependencias:
 *   - tactical-arbiter.js
 *   - feedback-panel.js
 *   - ChessEngine existente
 *   - StockfishJudge existente
 *
 * Función:
 *   - Activa/desactiva el Modo Libre.
 *   - En Modo Libre el TacticalArbiter deja pasar las jugadas legales.
 *   - En Modo Estricto se restaura la validación normal.
 *   - Stockfish continúa recibiendo las posiciones después de cada jugada.
 */

class AnalysisModeController {
    constructor() {
        this.freeMode = false;
        this.button = null;
        this.status = null;
        this.originalIntercept = null;
        this.wrapped = false;
    }

    init() {
        this.button = document.getElementById("btn-toggle-analysis");
        this.status = document.getElementById("analysis-mode-status");

        if (!this.button) {
            console.error("[Módulo 5] No existe #btn-toggle-analysis.");
            return false;
        }

        this.button.addEventListener("click", () => this.toggle());

        this.waitForArbiter();
        this.updateUI();

        return true;
    }

    waitForArbiter(attempt = 0) {
        if (window.tacticalArbiter) {
            this.installBridge(window.tacticalArbiter);
            return;
        }

        if (attempt >= 80) {
            console.error("[Módulo 5] TacticalArbiter no apareció.");
            return;
        }

        setTimeout(() => {
            this.waitForArbiter(attempt + 1);
        }, 25);
    }

    installBridge(arbiter) {
        if (this.wrapped) {
            return;
        }

        /*
         * Guardamos la versión original del interceptador.
         * Cuando Modo Libre esté activo, no llamaremos a esa función.
         */
        this.originalIntercept = arbiter.interceptMove.bind(arbiter);

        const controller = this;

        arbiter.interceptMove = function(move) {

            /*
             * MODO LIBRE
             *
             * Se salta la validación del TacticalArbiter y se entrega
             * directamente el movimiento al ChessEngine.
             */
            if (controller.freeMode) {
                return arbiter.originalMakeMove(move);
            }

            /*
             * MODO ESTRICTO
             *
             * Utiliza exactamente la lógica del Módulo 3.
             */
            return controller.originalIntercept(move);
        };

        this.wrapped = true;
    }

    toggle() {
        this.freeMode = !this.freeMode;

        /*
         * Dejamos también reflejado el estado en TacticalArbiter
         * para que otros módulos puedan consultarlo.
         */
        if (window.tacticalArbiter) {
            window.tacticalArbiter.isFreeMode = this.freeMode;
        }

        this.updateUI();

        /*
         * Feedback visual.
         */
        if (window.feedbackPanel) {

            if (this.freeMode) {

                window.feedbackPanel.showInfo(
                    "Modo Libre activado",
                    "Las jugadas ya no se validan contra la solución. Stockfish analizará las posiciones."
                );

            } else {

                window.feedbackPanel.showInfo(
                    "Modo estricto activado",
                    "Las jugadas vuelven a validarse contra la solución del ejercicio."
                );
            }
        }

        /*
         * Evento público para futuros módulos.
         */
        window.dispatchEvent(
            new CustomEvent("analysis-mode-changed", {
                detail: {
                    freeMode: this.freeMode
                }
            })
        );
    }

    setFreeMode(enabled) {
        const desired = Boolean(enabled);

        if (this.freeMode !== desired) {
            this.toggle();
        }
    }

    updateUI() {
        if (!this.button) {
            return;
        }

        /*
         * Estado visual del botón.
         */
        this.button.classList.toggle(
            "is-free",
            this.freeMode
        );

        this.button.classList.toggle(
            "is-strict",
            !this.freeMode
        );

        /*
         * Accesibilidad.
         */
        this.button.setAttribute(
            "aria-pressed",
            String(this.freeMode)
        );

        /*
         * Texto del botón.
         */
        this.button.textContent = this.freeMode
            ? "Modo Libre: ON"
            : "Modo Libre: OFF";

        /*
         * Texto descriptivo.
         */
        if (this.status) {

            this.status.textContent = this.freeMode
                ? "Validación desactivada · análisis libre"
                : "Entrenamiento estricto activo";
        }
    }

    getState() {
        return {
            freeMode: this.freeMode,

            /*
             * true = el árbitro está validando
             * false = estamos en análisis libre
             */
            validationEnabled: !this.freeMode,

            /*
             * Comprobamos si StockfishJudge tiene un Worker activo.
             */
            stockfishAvailable: Boolean(
                window.judge &&
                window.judge.worker
            )
        };
    }
}

/*
 * API GLOBAL
 *
 * Permite utilizar desde consola:
 *
 *   analysisModeController
 *   AnalysisModeController
 *   analysisModeController.getState()
 *   analysisModeController.setFreeMode(true)
 *   analysisModeController.setFreeMode(false)
 */
window.analysisModeController = null;

window.AnalysisModeController =
    AnalysisModeController;


/*
 * Inicialización cuando el DOM esté preparado.
 */
document.addEventListener("DOMContentLoaded", () => {

    const init = () => {

        /*
         * Evitamos crear dos instancias.
         */
        if (!window.analysisModeController) {

            const controller =
                new AnalysisModeController();

            if (controller.init()) {

                window.analysisModeController =
                    controller;

                return true;
            }
        }

        return Boolean(
            window.analysisModeController
        );
    };


    /*
     * Intento inicial.
     */
    if (!init()) {

        /*
         * Si TacticalArbiter todavía no está listo,
         * esperamos brevemente y volvemos a intentarlo.
         */
        let attempts = 0;

        const timer = setInterval(() => {

            attempts++;

            if (
                init() ||
                attempts >= 80
            ) {
                clearInterval(timer);
            }

        }, 25);
    }
});