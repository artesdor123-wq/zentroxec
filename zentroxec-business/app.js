/* ============================================================
   ZENTROXEC BUSINESS V1
   BASE DE CONOCIMIENTOS
============================================================ */

const concepts = [

    /* ========================================================
       1. ACTIVO
    ======================================================== */

    {
        id: 1,
        term: "Activo",
        category: "Fundamentos",
        level: "Básico",

        shortDescription:
            "Algo que tiene valor económico para una empresa y puede utilizarse para operar o generar beneficios.",

        meaning:
            "Un activo es un recurso económico que controla una empresa y que tiene valor para sus operaciones o puede contribuir a generar beneficios.",

        example:
            "Una tienda compra $1.000 de productos para venderlos posteriormente. Mientras esos productos permanecen en la empresa, forman parte de su inventario y representan un activo.",

        why:
            "La empresa todavía posee esos productos y puede utilizarlos para generar ingresos cuando los venda. Por eso no debemos confundir automáticamente una compra de inventario con un gasto.",

        question:
            "Compras $1.000 de productos para venderlos posteriormente. ¿Qué representan inicialmente esos productos?",

        options: [
            "Un ingreso",
            "Una utilidad",
            "Un activo / inventario",
            "Un impuesto"
        ],

        correct: 2,

        explanation:
            "Correcto. Inicialmente los productos forman parte del inventario de la empresa, que es un activo. Cuando se vendan, aparecerá el costo correspondiente y también se reconocerá el ingreso según el contexto contable.",

        case:
            "Una tienda compra 100 productos por $1.000. Después vende 40 unidades. ¿Qué debería ocurrir con el inventario que todavía no ha vendido?",

        caseAnswer:
            "El inventario restante continúa siendo un activo de la empresa hasta que sea vendido, utilizado o deje de cumplir las condiciones correspondientes.",

        commonError:
            "Pensar que todo dinero que sale de una empresa es automáticamente un gasto. Una empresa puede utilizar dinero para comprar inventario, activos, pagar deudas o cubrir gastos.",

        application:
            "Si administras una tienda online, entender qué recursos posee tu negocio te ayuda a distinguir entre inventario, gastos, deudas y otros elementos financieros.",

        related: [
            "Inventario",
            "Costo",
            "Ingreso",
            "Gasto",
            "Pasivo",
            "Utilidad"
        ]
    },


    /* ========================================================
       2. PASIVO
    ======================================================== */

    {
        id: 2,
        term: "Pasivo",
        category: "Fundamentos",
        level: "Básico",

        shortDescription:
            "Una obligación económica que la empresa debe pagar o cumplir.",

        meaning:
            "Un pasivo representa una obligación presente de la empresa frente a terceros, como préstamos, cuentas por pagar u otras deudas.",

        example:
            "Una empresa compra mercancía a crédito y acuerda pagar al proveedor dentro de 30 días. La cantidad pendiente representa una obligación para la empresa.",

        why:
            "Conocer los pasivos permite saber qué obligaciones tiene una empresa y cuánto debe cumplir en el futuro.",

        question:
            "Una empresa recibe productos hoy y acuerda pagarlos al proveedor dentro de 30 días. ¿Qué representa inicialmente la cantidad pendiente?",

        options: [
            "Un ingreso",
            "Un pasivo",
            "Una utilidad",
            "Un activo intangible"
        ],

        correct: 1,

        explanation:
            "Correcto. La empresa tiene una obligación pendiente con el proveedor, por lo que existe un pasivo.",

        case:
            "Una empresa debe $5.000 a proveedores y tiene $20.000 en recursos. ¿Por qué es importante conocer ambas cifras?",

        caseAnswer:
            "Porque conocer solamente los recursos no muestra toda la situación financiera. También es necesario saber qué obligaciones existen.",

        commonError:
            "Pensar que una deuda siempre significa que el negocio está fracasando. La deuda puede tener distintos usos y riesgos; lo importante es analizar su costo, capacidad de pago y finalidad.",

        application:
            "Antes de asumir una obligación financiera, una empresa debe analizar cuánto deberá pagar, cuándo y si sus operaciones pueden sostener esa obligación.",

        related: [
            "Activo",
            "Patrimonio",
            "Deuda",
            "Capital"
        ]
    },


    /* ========================================================
       3. PATRIMONIO
    ======================================================== */

    {
        id: 3,
        term: "Patrimonio",
        category: "Fundamentos",
        level: "Básico",

        shortDescription:
            "La participación económica residual de los propietarios después de considerar las obligaciones.",

        meaning:
            "De forma simplificada, el patrimonio representa lo que corresponde a los propietarios después de restar los pasivos de los activos.",

        example:
            "Si una empresa tiene $20.000 en activos y $8.000 en pasivos, su patrimonio contable simplificado sería de $12.000.",

        why:
            "Permite observar cuánto valor neto corresponde a los propietarios después de considerar las obligaciones.",

        question:
            "Una empresa tiene $50.000 en activos y $20.000 en pasivos. ¿Cuál sería su patrimonio simplificado?",

        options: [
            "$70.000",
            "$30.000",
            "$20.000",
            "$50.000"
        ],

        correct: 1,

        explanation:
            "Correcto. De forma simplificada: activos menos pasivos = patrimonio. $50.000 - $20.000 = $30.000.",

        case:
            "Si los activos de una empresa aumentan pero sus pasivos también aumentan, ¿el patrimonio necesariamente aumenta?",

        caseAnswer:
            "No necesariamente. Depende de cómo cambien ambos elementos.",

        commonError:
            "Confundir patrimonio con dinero disponible en la cuenta bancaria.",

        application:
            "El patrimonio ayuda a analizar la posición económica de los propietarios dentro del negocio.",

        related: [
            "Activo",
            "Pasivo",
            "Capital",
            "Utilidad"
        ]
    },


    /* ========================================================
       4. INGRESO
    ======================================================== */

    {
        id: 4,
        term: "Ingreso",
        category: "Fundamentos",
        level: "Básico",

        shortDescription:
            "Valor que una empresa obtiene por sus actividades económicas.",

        meaning:
            "Un ingreso representa recursos o valor generado por las actividades de la empresa, como la venta de productos o prestación de servicios.",

        example:
            "Una tienda vende un producto por $50. Esa venta genera un ingreso de $50, considerando el tratamiento correspondiente.",

        why:
            "Los ingresos permiten medir cuánto valor está generando la actividad comercial antes de considerar costos y gastos.",

        question:
            "Una empresa vende un producto por $100. ¿Qué representa principalmente ese valor para la empresa?",

        options: [
            "Un ingreso por la venta",
            "Un pasivo",
            "Una pérdida",
            "Un impuesto automáticamente"
        ],

        correct: 0,

        explanation:
            "Correcto. La venta genera un ingreso. El ingreso no es lo mismo que la utilidad porque todavía deben considerarse los costos y otros elementos.",

        case:
            "Una empresa vende $10.000 en productos, pero esos productos tuvieron un costo de $6.000. ¿Los $10.000 representan automáticamente la utilidad?",

        caseAnswer:
            "No. Los $10.000 representan ventas/ingresos en el ejemplo. Para determinar la utilidad hay que considerar costos, gastos y otros elementos.",

        commonError:
            "Confundir ventas o ingresos con utilidad.",

        application:
            "Analizar los ingresos permite saber cuánto está generando comercialmente una empresa.",

        related: [
            "Ventas",
            "Costo",
            "Gasto",
            "Utilidad",
            "Margen"
        ]
    },


    /* ========================================================
       5. GASTO
    ======================================================== */

    {
        id: 5,
        term: "Gasto",
        category: "Fundamentos",
        level: "Básico",

        shortDescription:
            "Un desembolso o consumo relacionado con el funcionamiento de una empresa.",

        meaning:
            "Un gasto representa un consumo de recursos relacionado con la operación de la empresa que afecta su resultado según las reglas contables aplicables.",

        example:
            "Una empresa paga $300 por publicidad durante el mes. Ese pago puede representar un gasto de publicidad, dependiendo del tratamiento correspondiente.",

        why:
            "Distinguir gastos de costos y activos permite comprender mejor cómo se utilizan los recursos de una empresa.",

        question:
            "Una empresa paga mensualmente por un servicio de internet utilizado para operar. ¿Qué concepto describe normalmente ese consumo?",

        options: [
            "Un gasto operativo",
            "Un ingreso",
            "Un activo por ventas",
            "Una utilidad"
        ],

        correct: 0,

        explanation:
            "Correcto. Un servicio utilizado para las operaciones normalmente se reconoce como gasto bajo el tratamiento contable correspondiente.",

        case:
            "Una empresa vende más que el mes anterior pero también aumenta considerablemente sus gastos. ¿Qué debería analizar antes de concluir que está mejor?",

        caseAnswer:
            "Debe analizar ingresos, costos, gastos, utilidad, flujo de caja y otros indicadores relevantes.",

        commonError:
            "Pensar que reducir cualquier gasto siempre mejora el negocio. Algunos gastos pueden ser necesarios para vender, operar o crecer.",

        application:
            "El objetivo no es gastar lo menos posible, sino utilizar los recursos de manera eficiente para generar resultados sostenibles.",

        related: [
            "Costo",
            "Ingreso",
            "Utilidad",
            "Flujo de caja"
        ]
    },


    /* ========================================================
       6. COSTO
    ======================================================== */

    {
        id: 6,
        term: "Costo",
        category: "Fundamentos",
        level: "Básico",

        shortDescription:
            "Recurso económico relacionado con la adquisición o producción de aquello que la empresa vende.",

        meaning:
            "El costo representa los recursos asociados con obtener o producir los bienes o servicios que posteriormente se venden.",

        example:
            "Una tienda compra un producto por $20 y posteriormente lo vende por $35. Los $20 forman parte del costo del producto vendido, considerando el tratamiento aplicable.",

        why:
            "Conocer el costo permite analizar cuánto queda de una venta antes de otros gastos y determinar márgenes.",

        question:
            "Compras un producto por $20 y lo vendes por $35. ¿Cuál es el dato fundamental para analizar el margen bruto de esa venta?",

        options: [
            "El costo del producto",
            "Solo el precio de venta",
            "Solo el número de clientes",
            "La cantidad de seguidores"
        ],

        correct: 0,

        explanation:
            "Correcto. Para analizar el margen bruto necesitas comparar el ingreso por la venta con el costo asociado al producto vendido.",

        case:
            "Dos productos se venden al mismo precio, pero uno cuesta el doble que el otro. ¿Tienen necesariamente el mismo margen?",

        caseAnswer:
            "No. Si sus costos son diferentes, sus márgenes también pueden ser diferentes.",

        commonError:
            "Confundir costo con precio de venta.",

        application:
            "Conocer el costo real de lo que vendes es esencial para establecer precios y evaluar la rentabilidad.",

        related: [
            "Ingreso",
            "Margen",
            "Utilidad",
            "Inventario"
        ]
    },


    /* ========================================================
       7. UTILIDAD
    ======================================================== */

    {
        id: 7,
        term: "Utilidad",
        category: "Fundamentos",
        level: "Básico",

        shortDescription:
            "Resultado positivo que queda después de considerar los elementos correspondientes.",

        meaning:
            "La utilidad representa un resultado positivo después de considerar ingresos y los costos, gastos y otros elementos relevantes según el tipo de utilidad analizada.",

        example:
            "Una empresa obtiene ingresos y, después de considerar sus costos y gastos correspondientes, termina el período con un resultado positivo.",

        why:
            "La utilidad ayuda a determinar si las operaciones están generando un resultado económico positivo.",

        question:
            "Una empresa vende $10.000 y tiene costos y gastos por $8.000. ¿Qué concepto describe de forma general el resultado positivo de $2.000?",

        options: [
            "Utilidad",
            "Ingreso total",
            "Activo",
            "Pasivo"
        ],

        correct: 0,

        explanation:
            "Correcto. De forma simplificada, $10.000 - $8.000 = $2.000 de resultado positivo.",

        case:
            "¿Una empresa puede tener muchas ventas y aun así poca utilidad?",

        caseAnswer:
            "Sí. Si sus costos y gastos son elevados, una gran cantidad de ventas puede producir una utilidad pequeña.",

        commonError:
            "Pensar que vender mucho significa automáticamente ganar mucho.",

        application:
            "La utilidad debe analizarse junto con márgenes, flujo de caja y otros indicadores.",

        related: [
            "Ingreso",
            "Costo",
            "Gasto",
            "Margen",
            "Rentabilidad"
        ]
    },


    /* ========================================================
       8. PÉRDIDA
    ======================================================== */

    {
        id: 8,
        term: "Pérdida",
        category: "Fundamentos",
        level: "Básico",

        shortDescription:
            "Resultado económico negativo cuando los elementos correspondientes superan los ingresos.",

        meaning:
            "De manera simplificada, existe pérdida cuando el resultado económico de un período es negativo.",

        example:
            "Una empresa genera $5.000 de ingresos pero, después de considerar los costos y gastos correspondientes, termina con un resultado negativo.",

        why:
            "Analizar pérdidas permite identificar problemas de costos, precios, gastos, ventas o estructura del negocio.",

        question:
            "Si una empresa tiene ingresos inferiores a sus costos y gastos durante un período, ¿qué puede ocurrir?",

        options: [
            "Una pérdida",
            "Una utilidad automáticamente",
            "Un ingreso adicional",
            "Un activo automáticamente"
        ],

        correct: 0,

        explanation:
            "Correcto. Si el resultado total es negativo, la empresa puede registrar una pérdida según el contexto contable.",

        case:
            "Una empresa pierde dinero durante varios meses. ¿Qué debería analizar antes de simplemente aumentar los precios?",

        caseAnswer:
            "Debería analizar ventas, precios, costos, gastos, clientes, competencia, flujo de caja y estructura del negocio.",

        commonError:
            "Intentar solucionar todas las pérdidas únicamente aumentando precios.",

        application:
            "Una pérdida es una señal para investigar qué está ocurriendo, no simplemente un número que debe ocultarse.",

        related: [
            "Utilidad",
            "Costo",
            "Gasto",
            "Margen"
        ]
    },


    /* ========================================================
       9. CAPITAL
    ======================================================== */

    {
        id: 9,
        term: "Capital",
        category: "Fundamentos",
        level: "Básico",

        shortDescription:
            "Recursos destinados a financiar o desarrollar una actividad económica.",

        meaning:
            "El capital puede referirse a recursos financieros o económicos utilizados para iniciar, mantener o desarrollar una actividad empresarial.",

        example:
            "Una persona aporta $5.000 para iniciar una tienda y utilizar ese dinero para adquirir inventario y cubrir necesidades iniciales.",

        why:
            "Comprender el capital ayuda a analizar cómo se financia un negocio y qué recursos están disponibles para operar.",

        question:
            "Una persona aporta dinero para iniciar un negocio. ¿Para qué puede utilizarse ese capital?",

        options: [
            "Para financiar operaciones",
            "Únicamente para pagar impuestos",
            "Solamente para publicidad",
            "Para eliminar automáticamente todas las deudas"
        ],

        correct: 0,

        explanation:
            "Correcto. El capital puede utilizarse para financiar diferentes necesidades del negocio.",

        case:
            "Dos negocios empiezan con cantidades de capital muy diferentes. ¿Significa necesariamente que el que tiene más capital tendrá éxito?",

        caseAnswer:
            "No. El capital es un recurso, pero el éxito depende también del modelo de negocio, ejecución, mercado, costos, clientes y otros factores.",

        commonError:
            "Pensar que tener más capital garantiza un negocio exitoso.",

        application:
            "El capital debe asignarse de manera estratégica para aumentar las posibilidades de que el negocio sea sostenible.",

        related: [
            "Activo",
            "Patrimonio",
            "Flujo de caja",
            "Inversión"
        ]
    },


    /* ========================================================
       10. INVENTARIO
    ======================================================== */

    {
        id: 10,
        term: "Inventario",
        category: "Fundamentos",
        level: "Básico",

        shortDescription:
            "Productos o materiales que una empresa mantiene para venderlos o utilizarlos en sus operaciones.",

        meaning:
            "El inventario comprende bienes que una empresa mantiene para vender, producir o utilizar dentro de sus actividades, dependiendo del negocio.",

        example:
            "Una tienda online tiene 200 adaptadores almacenados esperando ser vendidos. Esos productos forman parte de su inventario.",

        why:
            "El inventario representa recursos que están inmovilizados hasta que se venden o utilizan.",

        question:
            "Una tienda tiene productos almacenados que todavía no ha vendido. ¿Cómo se clasifican normalmente?",

        options: [
            "Inventario",
            "Ingreso",
            "Utilidad",
            "Publicidad"
        ],

        correct: 0,

        explanation:
            "Correcto. Los productos almacenados para vender forman parte del inventario.",

        case:
            "Una empresa compra demasiado inventario que permanece meses sin venderse. ¿Qué problema puede generar?",

        caseAnswer:
            "Puede inmovilizar capital, aumentar costos de almacenamiento y generar riesgo de obsolescencia o deterioro.",

        commonError:
            "Pensar que tener más inventario siempre significa tener un negocio más fuerte.",

        application:
            "Una empresa debe buscar un equilibrio entre disponibilidad de productos y capital inmovilizado.",

        related: [
            "Activo",
            "Costo",
            "Capital",
            "Flujo de caja"
        ]
    },


    /* ========================================================
       11. FLUJO DE CAJA
    ======================================================== */

    {
        id: 11,
        term: "Flujo de caja",
        category: "Finanzas",
        level: "Intermedio",

        shortDescription:
            "Movimiento de efectivo que entra y sale de una empresa durante un período.",

        meaning:
            "El flujo de caja permite observar las entradas y salidas de efectivo de una empresa.",

        example:
            "Una empresa cobra $5.000 de clientes y paga $3.000 a proveedores y otros compromisos durante un período.",

        why:
            "Una empresa puede tener ventas y utilidad contable y aun así enfrentar problemas de efectivo.",

        question:
            "Una empresa vende bastante pero sus clientes pagan 60 días después. ¿Qué aspecto puede verse afectado mientras espera cobrar?",

        options: [
            "El flujo de caja",
            "La existencia del mercado",
            "El nombre de la empresa",
            "El logotipo"
        ],

        correct: 0,

        explanation:
            "Correcto. El momento en que entra y sale el efectivo es fundamental para el flujo de caja.",

        case:
            "Una empresa tiene muchas ventas a crédito pero poco efectivo disponible. ¿Qué debería vigilar?",

        caseAnswer:
            "Debe vigilar sus cobros, obligaciones, calendario de pagos y necesidades de capital de trabajo.",

        commonError:
            "Pensar que ventas y efectivo disponible son exactamente lo mismo.",

        application:
            "Controlar el flujo de caja ayuda a evitar problemas de liquidez.",

        related: [
            "Liquidez",
            "Ingreso",
            "Capital de trabajo",
            "Ventas"
        ]
    },


    /* ========================================================
       12. LIQUIDEZ
    ======================================================== */

    {
        id: 12,
        term: "Liquidez",
        category: "Finanzas",
        level: "Intermedio",

        shortDescription:
            "Capacidad de una empresa para disponer de recursos suficientes para cumplir sus obligaciones de corto plazo.",

        meaning:
            "La liquidez se relaciona con la capacidad de una empresa para cumplir sus obligaciones próximas utilizando efectivo y recursos que pueden convertirse en efectivo.",

        example:
            "Una empresa tiene suficientes recursos líquidos para pagar proveedores y obligaciones que vencen próximamente.",

        why:
            "Una empresa puede ser rentable y aun así tener problemas para pagar obligaciones si no dispone de efectivo suficiente en el momento necesario.",

        question:
            "Una empresa es rentable pero no tiene efectivo suficiente para pagar una obligación que vence mañana. ¿Qué concepto debería analizarse?",

        options: [
            "Liquidez",
            "Logotipo",
            "Segmentación",
            "Publicidad"
        ],

        correct: 0,

        explanation:
            "Correcto. La liquidez se relaciona con la capacidad de cumplir obligaciones de corto plazo.",

        case:
            "Una empresa vende mucho a crédito. ¿Por qué podría tener problemas de liquidez?",

        caseAnswer:
            "Porque las ventas pueden haber ocurrido pero el efectivo todavía no ha sido cobrado.",

        commonError:
            "Confundir rentabilidad con liquidez.",

        application:
            "La administración de efectivo y cobros es fundamental para mantener la capacidad de pago.",

        related: [
            "Flujo de caja",
            "Capital de trabajo",
            "Rentabilidad"
        ]
    },


    /* ========================================================
       13. RENTABILIDAD
    ======================================================== */

    {
        id: 13,
        term: "Rentabilidad",
        category: "Finanzas",
        level: "Intermedio",

        shortDescription:
            "Capacidad de generar un resultado económico en relación con los recursos utilizados.",

        meaning:
            "La rentabilidad analiza qué tan bien una empresa o inversión genera resultados en relación con los recursos empleados.",

        example:
            "Dos negocios obtienen $5.000 de utilidad, pero uno necesitó invertir muchos más recursos que el otro. Su rentabilidad puede ser diferente.",

        why:
            "La cantidad absoluta de utilidad no siempre permite comparar correctamente negocios o inversiones.",

        question:
            "Dos negocios obtienen la misma utilidad, pero uno utilizó mucho menos capital. ¿Podrían tener diferente rentabilidad?",

        options: [
            "Sí",
            "No, nunca",
            "Solo si venden productos distintos",
            "Solo si tienen redes sociales"
        ],

        correct: 0,

        explanation:
            "Correcto. La rentabilidad considera la relación entre resultados y recursos utilizados.",

        case:
            "Una inversión genera $1.000 de resultado utilizando $10.000. Otra genera $1.500 utilizando $50.000. ¿Cuál parece utilizar mejor el capital desde una perspectiva porcentual?",

        caseAnswer:
            "La primera: $1.000 sobre $10.000 representa 10%, mientras que $1.500 sobre $50.000 representa 3%. Es una comparación simplificada.",

        commonError:
            "Confundir utilidad total con rentabilidad.",

        application:
            "La rentabilidad permite comparar qué tan eficientemente se utilizan determinados recursos.",

        related: [
            "Utilidad",
            "ROI",
            "Margen",
            "Capital"
        ]
    },


    /* ========================================================
       14. MARGEN
    ======================================================== */

    {
        id: 14,
        term: "Margen",
        category: "Finanzas",
        level: "Intermedio",

        shortDescription:
            "Proporción que queda de una venta después de considerar determinados costos o gastos.",

        meaning:
            "El margen expresa cuánto queda de los ingresos después de considerar ciertos costos o gastos, dependiendo del tipo de margen analizado.",

        example:
            "Un producto se vende por $100 y tiene un costo de $60. La diferencia de $40 representa el margen bruto en esta simplificación.",

        why:
            "El margen permite evaluar cuánto de las ventas queda disponible para cubrir otros gastos y generar resultado.",

        question:
            "Vendes un producto por $100 y su costo es $60. ¿Cuál es la diferencia antes de otros gastos?",

        options: [
            "$40",
            "$60",
            "$100",
            "$160"
        ],

        correct: 0,

        explanation:
            "Correcto. $100 - $60 = $40 de margen bruto simplificado.",

        case:
            "Una empresa aumenta ventas pero su margen disminuye. ¿Significa necesariamente que está mejor?",

        caseAnswer:
            "No necesariamente. Vender más con márgenes mucho menores puede no producir un resultado mejor.",

        commonError:
            "Mirar únicamente el volumen de ventas sin analizar el margen.",

        application:
            "El margen ayuda a evaluar si los precios y costos permiten sostener el negocio.",

        related: [
            "Costo",
            "Ingreso",
            "Utilidad",
            "Rentabilidad"
        ]
    },


    /* ========================================================
       15. PUNTO DE EQUILIBRIO
    ======================================================== */

    {
        id: 15,
        term: "Punto de equilibrio",
        category: "Finanzas",
        level: "Intermedio",

        shortDescription:
            "Nivel de ventas en el que los ingresos cubren los costos y gastos considerados, sin generar utilidad ni pérdida.",

        meaning:
            "El punto de equilibrio indica aproximadamente cuánto debe vender un negocio para cubrir sus costos y gastos bajo determinados supuestos.",

        example:
            "Si una empresa necesita generar $5.000 de contribución para cubrir sus costos fijos, su nivel de ventas deberá permitir alcanzar esa cantidad.",

        why:
            "Permite conocer el mínimo de actividad necesario para cubrir la estructura de costos bajo los supuestos utilizados.",

        question:
            "¿Qué ocurre en el punto de equilibrio?",

        options: [
            "Los ingresos cubren los costos y gastos considerados",
            "La empresa siempre obtiene una gran utilidad",
            "La empresa deja de vender",
            "No existen costos"
        ],

        correct: 0,

        explanation:
            "Correcto. En el punto de equilibrio el resultado es aproximadamente cero bajo el modelo utilizado.",

        case:
            "Si los costos fijos aumentan y todo lo demás permanece igual, ¿qué puede ocurrir con el punto de equilibrio?",

        caseAnswer:
            "Generalmente aumentará, porque será necesario generar más contribución para cubrir los mayores costos fijos.",

        commonError:
            "Pensar que llegar al punto de equilibrio significa que el negocio ya es rentable.",

        application:
            "Ayuda a establecer objetivos mínimos de ventas y analizar la estructura de costos.",

        related: [
            "Costo",
            "Gasto",
            "Margen",
            "Utilidad"
        ]
    },


    /* ========================================================
       16. ROI
    ======================================================== */

    {
        id: 16,
        term: "ROI",
        category: "Finanzas",
        level: "Intermedio",

        shortDescription:
            "Indicador que relaciona el resultado obtenido con la inversión realizada.",

        meaning:
            "ROI significa Return on Investment y se utiliza para evaluar el rendimiento de una inversión en relación con el capital invertido.",

        example:
            "Si una inversión de $1.000 genera $200 de retorno neto atribuible, una forma simplificada de calcular ROI sería 20%.",

        why:
            "Permite comparar el rendimiento de diferentes inversiones, aunque siempre debe analizarse el período, riesgos y método de cálculo.",

        question:
            "Inviertes $1.000 y obtienes $200 de retorno neto atribuible a esa inversión. ¿Cuál sería el ROI simplificado?",

        options: [
            "2%",
            "20%",
            "50%",
            "200%"
        ],

        correct: 1,

        explanation:
            "Correcto. $200 / $1.000 = 0,20, equivalente a 20%. El cálculo real depende de qué se incluya como retorno e inversión.",

        case:
            "Una campaña publicitaria cuesta $500 y genera $1.000 de beneficio atribuible según el método utilizado. ¿Qué indicador puede ayudar a evaluar su rendimiento?",

        caseAnswer:
            "ROI, siempre teniendo cuidado de definir correctamente costos, beneficios y período.",

        commonError:
            "Usar ROI sin definir qué se considera inversión y qué se considera retorno.",

        application:
            "Puede utilizarse para analizar inversiones en marketing, equipos, proyectos y otras iniciativas.",

        related: [
            "Rentabilidad",
            "Capital",
            "Utilidad",
            "Inversión"
        ]
    },


    /* ========================================================
       17. CAPITAL DE TRABAJO
    ======================================================== */

    {
        id: 17,
        term: "Capital de trabajo",
        category: "Finanzas",
        level: "Intermedio",

        shortDescription:
            "Recursos que una empresa necesita para sostener sus operaciones de corto plazo.",

        meaning:
            "El capital de trabajo se relaciona con los recursos corrientes disponibles para financiar las operaciones y cubrir obligaciones de corto plazo.",

        example:
            "Una empresa necesita dinero para comprar inventario, pagar proveedores y cubrir gastos mientras espera cobrar a sus clientes.",

        why:
            "Incluso un negocio con buenas ventas puede necesitar capital de trabajo para mantener sus operaciones mientras cobra y paga.",

        question:
            "¿Por qué una empresa puede necesitar capital de trabajo aunque tenga clientes?",

        options: [
            "Porque debe financiar operaciones mientras entra el efectivo",
            "Porque los clientes eliminan todos los costos",
            "Porque las ventas siempre generan efectivo inmediatamente",
            "Porque no puede tener inventario"
        ],

        correct: 0,

        explanation:
            "Correcto. Existe una diferencia entre cuándo se realizan operaciones y cuándo entra o sale el efectivo.",

        case:
            "Una empresa debe pagar proveedores en 15 días pero sus clientes pagan en 45 días. ¿Qué problema puede aparecer?",

        caseAnswer:
            "Puede aparecer una necesidad de capital de trabajo para cubrir el período entre pagos y cobros.",

        commonError:
            "Pensar que tener ventas significa tener efectivo disponible inmediatamente.",

        application:
            "Gestionar correctamente el capital de trabajo ayuda a mantener las operaciones.",

        related: [
            "Liquidez",
            "Flujo de caja",
            "Inventario",
            "Pasivo"
        ]
    },


    /* ========================================================
       18. MODELO DE NEGOCIO
    ======================================================== */

    {
        id: 18,
        term: "Modelo de negocio",
        category: "Negocios",
        level: "Intermedio",

        shortDescription:
            "La manera en que una empresa crea, entrega y captura valor.",

        meaning:
            "Un modelo de negocio explica cómo una empresa ofrece valor a sus clientes y cómo obtiene ingresos de esa actividad.",

        example:
            "Una tienda online puede adquirir productos, venderlos a clientes, cobrar un precio superior a sus costos y utilizar diferentes canales para realizar las ventas.",

        why:
            "Una empresa necesita entender cómo funciona económicamente su actividad, no solamente qué producto vende.",

        question:
            "¿Qué pregunta ayuda a entender un modelo de negocio?",

        options: [
            "¿Cómo crea valor y cómo obtiene ingresos?",
            "¿Qué color tiene el logotipo?",
            "¿Cuántas publicaciones hace al día?",
            "¿Qué nombre tiene el dueño?"
        ],

        correct: 0,

        explanation:
            "Correcto. El modelo de negocio describe cómo funciona económicamente la empresa.",

        case:
            "Dos empresas venden productos similares pero utilizan modelos de negocio diferentes. ¿Pueden competir de manera diferente?",

        caseAnswer:
            "Sí. Pueden tener diferentes canales, costos, precios, clientes, fuentes de ingresos y estructuras operativas.",

        commonError:
            "Confundir modelo de negocio con simplemente el producto que vende la empresa.",

        application:
            "Analizar el modelo de negocio ayuda a detectar cómo se crea y captura valor.",

        related: [
            "Propuesta de valor",
            "Cliente objetivo",
            "Ingresos",
            "Costos"
        ]
    },


    /* ========================================================
       19. PROPUESTA DE VALOR
    ======================================================== */

    {
        id: 19,
        term: "Propuesta de valor",
        category: "Negocios",
        level: "Intermedio",

        shortDescription:
            "La razón por la que un cliente debería elegir una oferta frente a otras alternativas.",

        meaning:
            "La propuesta de valor explica qué beneficio relevante ofrece una empresa a un determinado cliente y por qué esa oferta puede ser preferida.",

        example:
            "Una tienda puede diferenciarse ofreciendo productos difíciles de encontrar, entrega rápida y asesoría antes de comprar.",

        why:
            "Un producto por sí solo no garantiza que alguien quiera comprarlo. El cliente necesita percibir un valor.",

        question:
            "¿Cuál de estas opciones se acerca más a una propuesta de valor?",

        options: [
            "Vendemos algo porque nosotros queremos venderlo",
            "Ayudamos a determinado cliente a resolver un problema concreto",
            "Tenemos un logotipo rojo",
            "Publicamos todos los días"
        ],

        correct: 1,

        explanation:
            "Correcto. Una propuesta de valor debe centrarse en el beneficio o problema relevante para el cliente.",

        case:
            "Dos tiendas venden exactamente el mismo producto. Una ofrece entrega más rápida y asesoría. ¿Dónde podría estar su diferenciación?",

        caseAnswer:
            "En la experiencia y beneficios adicionales que forman parte de su propuesta de valor.",

        commonError:
            "Pensar que una propuesta de valor consiste simplemente en decir que el producto es de buena calidad.",

        application:
            "Una propuesta de valor clara ayuda a comunicar por qué un cliente debería prestar atención a una oferta.",

        related: [
            "Cliente objetivo",
            "Diferenciación",
            "Posicionamiento",
            "Competencia"
        ]
    },


    /* ========================================================
       20. CLIENTE OBJETIVO
    ======================================================== */

    {
        id: 20,
        term: "Cliente objetivo",
        category: "Negocios",
        level: "Intermedio",

        shortDescription:
            "Grupo de personas o empresas al que una oferta está principalmente dirigida.",

        meaning:
            "El cliente objetivo es el segmento que una empresa considera especialmente relevante para su producto o servicio.",

        example:
            "Una empresa que vende accesorios para computadoras puede dirigirse principalmente a estudiantes, técnicos y usuarios de PC que necesitan determinados productos.",

        why:
            "Intentar venderle exactamente lo mismo a todo el mundo puede hacer que el mensaje sea poco relevante.",

        question:
            "¿Por qué una empresa debería conocer a su cliente objetivo?",

        options: [
            "Para adaptar mejor su oferta y comunicación",
            "Para evitar conocer el mercado",
            "Para eliminar a todos sus competidores",
            "Para garantizar ventas"
        ],

        correct: 0,

        explanation:
            "Correcto. Conocer al cliente ayuda a adaptar producto, precio, comunicación y canales.",

        case:
            "Una empresa publica el mismo mensaje para estudiantes, empresas y técnicos. ¿Qué problema puede existir?",

        caseAnswer:
            "El mensaje puede ser demasiado general y no responder claramente a las necesidades de cada segmento.",

        commonError:
            "Pensar que definir un cliente objetivo significa que los demás clientes están prohibidos.",

        application:
            "El cliente objetivo ayuda a concentrar recursos de marketing y ventas.",

        related: [
            "Mercado",
            "Propuesta de valor",
            "Conversión",
            "Retención"
        ]
    },


    /* ========================================================
       21. MERCADO
    ======================================================== */

    {
        id: 21,
        term: "Mercado",
        category: "Negocios",
        level: "Intermedio",

        shortDescription:
            "Conjunto de compradores y vendedores que participan en el intercambio de determinados bienes o servicios.",

        meaning:
            "Un mercado está formado por personas o empresas que tienen necesidades o deseos relacionados con una oferta y por los proveedores que buscan atenderlos.",

        example:
            "El mercado de accesorios para computadoras incluye diferentes compradores, necesidades, vendedores, productos y alternativas.",

        why:
            "Entender el mercado permite evaluar demanda, competencia, precios y oportunidades.",

        question:
            "¿Qué deberías analizar para entender un mercado?",

        options: [
            "Clientes, demanda, competencia y alternativas",
            "Solo el logotipo",
            "Solo el precio de tu producto",
            "Solo el número de empleados"
        ],

        correct: 0,

        explanation:
            "Correcto. Un mercado implica diferentes participantes y factores.",

        case:
            "Descubres que muchas personas necesitan un producto, pero existen numerosos competidores con precios bajos. ¿Qué deberías investigar?",

        caseAnswer:
            "Deberías analizar demanda, competencia, diferenciación, costos y posibilidad real de obtener clientes de forma rentable.",

        commonError:
            "Confundir que exista una necesidad con que exista automáticamente una oportunidad rentable.",

        application:
            "El análisis de mercado reduce decisiones basadas únicamente en intuición.",

        related: [
            "Competencia",
            "Cliente objetivo",
            "Demanda",
            "Propuesta de valor"
        ]
    },


    /* ========================================================
       22. COMPETENCIA
    ======================================================== */

    {
        id: 22,
        term: "Competencia",
        category: "Negocios",
        level: "Intermedio",

        shortDescription:
            "Empresas u ofertas que buscan satisfacer necesidades similares de los clientes.",

        meaning:
            "La competencia está formada por alternativas que los clientes pueden elegir en lugar de tu producto o servicio.",

        example:
            "Si varias tiendas venden adaptadores similares, todas pueden competir por los mismos clientes.",

        why:
            "El cliente no compara solamente tu producto contigo mismo; lo compara con las alternativas disponibles.",

        question:
            "¿Por qué es importante estudiar a los competidores?",

        options: [
            "Para entender alternativas y encontrar oportunidades de diferenciación",
            "Para copiar absolutamente todo",
            "Para garantizar que desaparezcan",
            "Para evitar mejorar el producto"
        ],

        correct: 0,

        explanation:
            "Correcto. Analizar competencia ayuda a entender las alternativas que tiene el cliente.",

        case:
            "Tu competidor vende más barato que tú. ¿Significa automáticamente que debes bajar tu precio?",

        caseAnswer:
            "No. Primero debes entender costos, propuesta de valor, clientes y posición competitiva.",

        commonError:
            "Responder automáticamente a cualquier movimiento del competidor.",

        application:
            "La competencia puede revelar oportunidades y amenazas para el negocio.",

        related: [
            "Diferenciación",
            "Posicionamiento",
            "Mercado",
            "Propuesta de valor"
        ]
    },


    /* ========================================================
       23. CONVERSIÓN
    ======================================================== */

    {
        id: 23,
        term: "Conversión",
        category: "Negocios",
        level: "Intermedio",

        shortDescription:
            "Cuando una persona realiza la acción que una empresa busca conseguir.",

        meaning:
            "Una conversión ocurre cuando un usuario realiza una acción objetivo, como comprar, registrarse, solicitar información o contactar.",

        example:
            "100 personas visitan una página y 5 realizan una compra. Esas compras representan conversiones.",

        why:
            "Tener visitas no significa necesariamente tener ventas. La conversión permite medir cuántas personas realizan la acción deseada.",

        question:
            "Una página recibe 1.000 visitas y consigue 20 compras. ¿Qué concepto ayuda a analizar esa relación?",

        options: [
            "Conversión",
            "Patrimonio",
            "Inventario",
            "Pasivo"
        ],

        correct: 0,

        explanation:
            "Correcto. La conversión permite analizar qué proporción realiza la acción objetivo.",

        case:
            "Tu página recibe muchas visitas pero pocas personas compran. ¿Qué deberías investigar?",

        caseAnswer:
            "Oferta, confianza, precio, experiencia de usuario, velocidad, claridad, proceso de compra y calidad del tráfico.",

        commonError:
            "Pensar que más tráfico automáticamente significa más ventas.",

        application:
            "Medir conversiones permite identificar puntos débiles en el proceso comercial.",

        related: [
            "Ventas",
            "Cliente objetivo",
            "Retención",
            "Propuesta de valor"
        ]
    },


    /* ========================================================
       24. RETENCIÓN
    ======================================================== */

    {
        id: 24,
        term: "Retención",
        category: "Negocios",
        level: "Intermedio",

        shortDescription:
            "Capacidad de una empresa para mantener clientes durante un período determinado.",

        meaning:
            "La retención analiza qué tan bien una empresa consigue que sus clientes continúen utilizando o comprando su producto o servicio.",

        example:
            "Una tienda logra que muchos clientes vuelvan a comprar meses después de su primera compra.",

        why:
            "Conseguir clientes puede ser costoso. Mantener clientes satisfechos puede tener un impacto importante en el negocio.",

        question:
            "Un cliente compra una vez y nunca vuelve. ¿Qué aspecto podría analizar la empresa?",

        options: [
            "Retención",
            "Patrimonio",
            "Inventario",
            "Punto de equilibrio"
        ],

        correct: 0,

        explanation:
            "Correcto. La empresa puede estudiar por qué los clientes no regresan y cómo mejorar la retención.",

        case:
            "Una empresa consigue muchos clientes nuevos pero pierde casi todos después de la primera compra. ¿Qué debería investigar?",

        caseAnswer:
            "Experiencia, producto, servicio, expectativas, precio, calidad y motivos por los que los clientes abandonan.",

        commonError:
            "Concentrarse exclusivamente en conseguir nuevos clientes sin analizar los actuales.",

        application:
            "La retención ayuda a evaluar la relación a largo plazo con los clientes.",

        related: [
            "Cliente objetivo",
            "Conversión",
            "Ventas",
            "Propuesta de valor"
        ]
    },


    /* ========================================================
       25. VENTAJA COMPETITIVA
    ======================================================== */

    {
        id: 25,
        term: "Ventaja competitiva",
        category: "Estrategia",
        level: "Avanzado",

        shortDescription:
            "Factor que permite a una empresa competir favorablemente de una manera que puede sostenerse.",

        meaning:
            "Una ventaja competitiva es una característica, capacidad o posición que permite a una empresa crear más valor o competir mejor que determinadas alternativas.",

        example:
            "Una empresa puede tener una cadena de suministro difícil de replicar, una marca fuerte, costos estructuralmente bajos o una tecnología propia.",

        why:
            "No toda diferencia es una ventaja. Para ser realmente competitiva, una diferencia debe tener relevancia y cierta capacidad de sostenerse.",

        question:
            "Una empresa tiene una característica que cualquier competidor puede copiar mañana. ¿Es necesariamente una ventaja competitiva sostenible?",

        options: [
            "No",
            "Sí, siempre",
            "Solo si cuesta dinero",
            "Solo si tiene publicidad"
        ],

        correct: 0,

        explanation:
            "Correcto. Una diferencia fácilmente copiable puede ser una ventaja temporal, pero no necesariamente sostenible.",

        case:
            "Una empresa tiene acceso a un proveedor exclusivo durante varios años. ¿Por qué podría ser relevante estratégicamente?",

        caseAnswer:
            "Porque podría darle una posición difícil de replicar, dependiendo de las condiciones y duración de ese acceso.",

        commonError:
            "Llamar ventaja competitiva a cualquier característica diferente.",

        application:
            "El objetivo estratégico es desarrollar capacidades que permitan competir de manera favorable y difícil de replicar.",

        related: [
            "Competencia",
            "Diferenciación",
            "Posicionamiento",
            "Economías de escala"
        ]
    },


    /* ========================================================
       26. COSTE DE OPORTUNIDAD
    ======================================================== */

    {
        id: 26,
        term: "Coste de oportunidad",
        category: "Estrategia",
        level: "Avanzado",

        shortDescription:
            "El valor de la mejor alternativa que se deja de elegir al tomar una decisión.",

        meaning:
            "El coste de oportunidad representa el valor de la mejor alternativa sacrificada cuando se utiliza un recurso de una determinada manera.",

        example:
            "Si utilizas $1.000 para comprar inventario, esos $1.000 ya no pueden utilizarse simultáneamente para otra inversión.",

        why:
            "Los recursos son limitados. Cada decisión implica renunciar a otras posibilidades.",

        question:
            "Tienes $5.000 y decides utilizarlos completamente para inventario. ¿Qué concepto te ayuda a analizar aquello a lo que renunciaste?",

        options: [
            "Coste de oportunidad",
            "Ingreso",
            "Inventario",
            "Pasivo"
        ],

        correct: 0,

        explanation:
            "Correcto. El coste de oportunidad ayuda a analizar la alternativa sacrificada.",

        case:
            "Un emprendedor dedica todo su tiempo a un proyecto. ¿Existe coste de oportunidad?",

        caseAnswer:
            "Sí. El tiempo utilizado en un proyecto no puede utilizarse simultáneamente en otras alternativas.",

        commonError:
            "Pensar que solo existe coste de oportunidad cuando se utiliza dinero.",

        application:
            "Este concepto ayuda a tomar decisiones sobre dinero, tiempo, personal y otros recursos limitados.",

        related: [
            "Capital",
            "Inversión",
            "Estrategia",
            "Rentabilidad"
        ]
    },


    /* ========================================================
       27. DIFERENCIACIÓN
    ======================================================== */

    {
        id: 27,
        term: "Diferenciación",
        category: "Estrategia",
        level: "Avanzado",

        shortDescription:
            "Forma de hacer que una oferta sea percibida como diferente y valiosa frente a alternativas.",

        meaning:
            "La diferenciación consiste en desarrollar características o beneficios que hagan que una oferta sea percibida de manera distinta frente a sus competidores.",

        example:
            "Una tienda puede diferenciarse mediante disponibilidad inmediata, asesoría especializada, garantía o una experiencia de compra superior.",

        why:
            "Si el cliente percibe todas las ofertas como iguales, el precio puede convertirse en un factor dominante.",

        question:
            "¿Cuál podría ser una forma de diferenciación?",

        options: [
            "Ofrecer una experiencia o beneficio relevante que los competidores no ofrecen igual",
            "Copiar exactamente al competidor",
            "Eliminar toda atención al cliente",
            "Aumentar costos sin razón"
        ],

        correct: 0,

        explanation:
            "Correcto. La diferenciación debe aportar algo relevante para el cliente.",

        case:
            "Todos tus competidores venden el mismo producto. ¿Qué podrías investigar para diferenciarte?",

        caseAnswer:
            "Servicio, disponibilidad, garantía, experiencia, velocidad, especialización, conveniencia, marca o combinación de factores.",

        commonError:
            "Pensar que ser diferente siempre significa ser mejor.",

        application:
            "La diferenciación funciona cuando la diferencia tiene valor para el cliente y puede sostenerse económicamente.",

        related: [
            "Propuesta de valor",
            "Competencia",
            "Posicionamiento",
            "Ventaja competitiva"
        ]
    },


    /* ========================================================
       28. POSICIONAMIENTO
    ======================================================== */

    {
        id: 28,
        term: "Posicionamiento",
        category: "Estrategia",
        level: "Avanzado",

        shortDescription:
            "La posición que una marca u oferta ocupa en la percepción del cliente frente a alternativas.",

        meaning:
            "El posicionamiento se refiere a cómo una empresa busca ser percibida por un segmento de clientes en comparación con otras alternativas.",

        example:
            "Una marca puede posicionarse como económica, premium, especializada, rápida o altamente técnica, dependiendo de su estrategia.",

        why:
            "La percepción del cliente influye en cómo compara una oferta frente a otras.",

        question:
            "Una marca busca ser reconocida principalmente por ofrecer soluciones técnicas para profesionales. ¿Qué está construyendo?",

        options: [
            "Posicionamiento",
            "Pasivo",
            "Inventario",
            "Flujo de caja"
        ],

        correct: 0,

        explanation:
            "Correcto. Está buscando ocupar una posición específica en la mente del cliente.",

        case:
            "Una marca intenta ser simultáneamente la más barata, la más exclusiva y la más especializada. ¿Qué problema podría aparecer?",

        caseAnswer:
            "Su posicionamiento puede volverse confuso si intenta comunicar demasiadas posiciones contradictorias.",

        commonError:
            "Confundir posicionamiento con simplemente tener un logotipo atractivo.",

        application:
            "El posicionamiento ayuda a definir cómo quieres que el mercado interprete tu oferta.",

        related: [
            "Marca",
            "Diferenciación",
            "Propuesta de valor",
            "Cliente objetivo"
        ]
    },


    /* ========================================================
       29. ECONOMÍAS DE ESCALA
    ======================================================== */

    {
        id: 29,
        term: "Economías de escala",
        category: "Estrategia",
        level: "Avanzado",

        shortDescription:
            "Reducción del costo promedio por unidad cuando aumenta la escala de producción, bajo determinadas condiciones.",

        meaning:
            "Las economías de escala ocurren cuando aumentar la producción permite distribuir determinados costos sobre más unidades o conseguir eficiencias que reducen el costo promedio.",

        example:
            "Una fábrica puede producir 10.000 unidades utilizando una infraestructura cuyo costo no aumenta proporcionalmente con cada unidad adicional.",

        why:
            "Las empresas grandes pueden tener ventajas de costos cuando su escala permite distribuir determinados costos o negociar mejores condiciones.",

        question:
            "Si una empresa produce más unidades y su costo promedio por unidad disminuye, ¿qué concepto podría explicar esa situación?",

        options: [
            "Economías de escala",
            "Pérdida",
            "Liquidez",
            "Retención"
        ],

        correct: 0,

        explanation:
            "Correcto. Las economías de escala pueden reducir el costo promedio cuando aumenta la escala bajo determinadas condiciones.",

        case:
            "¿Significa que aumentar la producción siempre reduce costos?",

        caseAnswer:
            "No. También pueden aparecer deseconomías de escala, limitaciones operativas, capacidad insuficiente u otros problemas.",

        commonError:
            "Pensar que ser más grande siempre significa ser más eficiente.",

        application:
            "Analizar la escala ayuda a entender por qué algunos modelos de negocio funcionan mejor cuando crecen.",

        related: [
            "Costo",
            "Ventaja competitiva",
            "Competencia",
            "Apalancamiento"
        ]
    },


    /* ========================================================
       30. APALANCAMIENTO
    ======================================================== */

    {
        id: 30,
        term: "Apalancamiento",
        category: "Estrategia",
        level: "Avanzado",

        shortDescription:
            "Uso de recursos externos o estructuras que permiten aumentar la capacidad de una actividad, aunque también pueden aumentar el riesgo.",

        meaning:
            "El apalancamiento puede referirse a utilizar deuda, recursos, tecnología, sistemas u otros mecanismos para aumentar la capacidad o exposición de una actividad. El significado exacto depende del contexto.",

        example:
            "Una empresa utiliza financiamiento para adquirir maquinaria que le permite aumentar su capacidad productiva.",

        why:
            "El apalancamiento puede acelerar el crecimiento, pero también puede aumentar obligaciones y riesgos.",

        question:
            "Una empresa utiliza deuda para financiar una expansión. ¿Qué concepto puede utilizarse para analizar esta decisión?",

        options: [
            "Apalancamiento",
            "Inventario",
            "Conversión",
            "Retención"
        ],

        correct: 0,

        explanation:
            "Correcto. El uso de deuda para ampliar una actividad puede representar apalancamiento financiero.",

        case:
            "Una empresa utiliza deuda para crecer, pero sus ventas no aumentan como esperaba. ¿Qué riesgo puede aparecer?",

        caseAnswer:
            "Las obligaciones financieras continúan existiendo y pueden aumentar la presión sobre el flujo de caja y la capacidad de pago.",

        commonError:
            "Pensar que el apalancamiento siempre es bueno porque permite crecer más rápido.",

        application:
            "El apalancamiento debe analizarse junto con capacidad de pago, riesgo, retorno esperado y flujo de caja.",

        related: [
            "Deuda",
            "Capital",
            "Flujo de caja",
            "Rentabilidad",
            "Ventaja competitiva"
        ]
    }

];
