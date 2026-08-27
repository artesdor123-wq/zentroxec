const palabras = [

    {
        id: "activo",

        palabra: "Activo",

        categoria: "Contabilidad",

        definicionCorta:
            "Algo que tiene valor económico para una empresa y que puede utilizarse para generar beneficios o realizar sus operaciones.",

        definicion:
            "Un activo es un recurso que una empresa controla y que tiene valor económico. Puede utilizarse para operar, producir, vender o generar beneficios en el futuro.",

        ejemplo:
            "Una empresa compra $1.000 en productos para venderlos. Esos productos forman parte de su inventario, y el inventario es un activo de la empresa.",

        pregunta:
            "Si compras $1.000 de productos para venderlos, ¿esos productos son inicialmente un gasto o un activo?",

        respuesta:
            "Inicialmente forman parte del inventario, que es un activo. Cuando los productos se venden, aparece el costo relacionado con los productos vendidos y el inventario disminuye.",

        aplicacion:
            "Cuando analices un negocio, intenta identificar qué recursos posee: dinero, inventario, equipos, vehículos, cuentas por cobrar u otros recursos con valor económico. Eso te ayuda a entender qué sostiene las operaciones de la empresa."
    },


    {
        id: "ingreso",

        palabra: "Ingreso",

        categoria: "Finanzas",

        definicionCorta:
            "Dinero o valor económico que una empresa obtiene como resultado de sus actividades.",

        definicion:
            "Un ingreso representa el valor que una empresa obtiene al vender productos, prestar servicios u realizar otras actividades que forman parte de su operación.",

        ejemplo:
            "Una tienda vende un producto por $50. La venta genera un ingreso de $50 para el negocio.",

        pregunta:
            "Si una tienda vende 10 productos a $20 cada uno, ¿cuál sería el ingreso generado por esas ventas?",

        respuesta:
            "El ingreso por las ventas sería de $200, porque 10 productos × $20 = $200. Esto no significa necesariamente que la empresa haya ganado $200 de utilidad, porque todavía existen costos y otros gastos que considerar.",

        aplicacion:
            "Cuando veas que una empresa vende mucho, no concluyas automáticamente que gana mucho. Primero diferencia ingresos, costos, gastos y utilidad."
    },


    {
        id: "costo",

        palabra: "Costo",

        categoria: "Finanzas",

        definicionCorta:
            "Recurso económico utilizado para producir o adquirir aquello que permite generar ingresos.",

        definicion:
            "El costo está relacionado con los recursos necesarios para obtener o producir los bienes o servicios que una empresa vende.",

        ejemplo:
            "Una tienda compra un producto por $30 y posteriormente lo vende por $50. Los $30 representan el costo de adquisición de ese producto.",

        pregunta:
            "Si compras un producto por $30 y lo vendes por $50, ¿cuál es la diferencia entre el precio de venta y el costo antes de considerar otros gastos?",

        respuesta:
            "La diferencia es de $20. Sin embargo, esos $20 todavía no representan necesariamente la utilidad final de la empresa porque pueden existir otros gastos, impuestos y costos.",

        aplicacion:
            "Cuando analices una venta, no mires únicamente el precio. Pregunta cuánto costó obtener o producir lo que se vendió y qué otros costos existen."
    },


    {
        id: "gasto",

        palabra: "Gasto",

        categoria: "Finanzas",

        definicionCorta:
            "Desembolso o consumo de recursos relacionado con el funcionamiento de una empresa.",

        definicion:
            "Un gasto representa recursos utilizados para mantener y administrar las operaciones de una empresa. Dependiendo de su naturaleza y del sistema contable, puede tratarse de manera diferente a un costo asociado directamente con los bienes vendidos.",

        ejemplo:
            "Una empresa paga $300 de alquiler mensual por el local donde funciona su negocio.",

        pregunta:
            "Si una empresa vende productos y paga alquiler, ¿el alquiler forma parte directamente del producto que vendió?",

        respuesta:
            "Normalmente el alquiler del local es un gasto de operación. Es necesario para que el negocio funcione, pero no representa directamente el costo de adquirir cada unidad del producto vendido.",

        aplicacion:
            "Cuando estudies un negocio, separa mentalmente los recursos utilizados para obtener el producto de aquellos necesarios para mantener funcionando la empresa."
    },


    {
        id: "utilidad",

        palabra: "Utilidad",

        categoria: "Finanzas",

        definicionCorta:
            "Resultado económico que queda después de restar los costos y gastos correspondientes a los ingresos.",

        definicion:
            "La utilidad es el resultado positivo que queda cuando los ingresos de una empresa superan los costos y gastos correspondientes durante un determinado período.",

        ejemplo:
            "Una empresa obtiene $10.000 de ingresos y, después de considerar sus costos y gastos, determina que su resultado positivo es de $2.000.",

        pregunta:
            "Si una empresa tiene $10.000 de ingresos pero $9.000 entre costos y gastos, ¿significa que ganó $10.000?",

        respuesta:
            "No. Los $10.000 son ingresos. Si los costos y gastos considerados suman $9.000, el resultado sería $1.000 antes de considerar cualquier otro elemento que corresponda.",

        aplicacion:
            "Nunca confundas ventas con ganancias. Una empresa puede vender mucho y tener poca utilidad si sus costos y gastos son elevados."
    },


    {
        id: "margen",

        palabra: "Margen",

        categoria: "Finanzas",

        definicionCorta:
            "Medida que permite observar cuánto queda de una venta después de considerar determinados costos.",

        definicion:
            "El margen permite analizar la relación entre el resultado obtenido y las ventas. Es una herramienta útil para evaluar la rentabilidad de productos, servicios o negocios.",

        ejemplo:
            "Un producto se vende por $100 y su costo directo es de $60. La diferencia de $40 representa un margen bruto de $40 antes de otros gastos.",

        pregunta:
            "Si vendes un producto por $100 y su costo es $60, ¿cuánto queda antes de considerar otros gastos?",

        respuesta:
            "Quedan $40 antes de considerar otros gastos. Ese valor no debe confundirse automáticamente con la utilidad neta.",

        aplicacion:
            "Cuando compares productos, observa no solamente cuál vende más, sino cuál deja un margen suficiente después de considerar todos los costos relevantes."
    },


    {
        id: "flujo-de-caja",

        palabra: "Flujo de caja",

        categoria: "Finanzas",

        definicionCorta:
            "Movimiento de dinero que entra y sale de una empresa durante un período.",

        definicion:
            "El flujo de caja permite observar cómo entra y sale efectivo de una empresa. Es fundamental porque un negocio puede ser rentable en términos contables y aun así tener problemas para pagar sus obligaciones si no dispone de efectivo suficiente en el momento necesario.",

        ejemplo:
            "Una empresa vende $5.000 a crédito, pero sus clientes pagarán dentro de 60 días. Aunque exista una venta, el dinero todavía no ha entrado a caja.",

        pregunta:
            "Si una empresa vende $5.000 a crédito y cobrará dentro de 60 días, ¿ya tiene esos $5.000 disponibles en efectivo?",

        respuesta:
            "No necesariamente. La empresa puede haber realizado una venta y reconocido un ingreso según las reglas contables aplicables, pero el efectivo todavía no ha sido cobrado.",

        aplicacion:
            "Cuando analices un negocio, pregunta no solamente cuánto vende, sino cuándo cobra y cuándo debe pagar. El momento del movimiento de efectivo puede ser decisivo."
    },


    {
        id: "capital",

        palabra: "Capital",

        categoria: "Finanzas",

        definicionCorta:
            "Recursos económicos utilizados para iniciar, mantener o hacer crecer una actividad empresarial.",

        definicion:
            "El capital puede representar recursos que se destinan a una empresa para financiar sus operaciones, adquirir activos, desarrollar productos o expandirse.",

        ejemplo:
            "Una persona aporta $5.000 para comprar inventario, herramientas y otros recursos necesarios para iniciar un negocio.",

        pregunta:
            "Si una persona aporta dinero para poner en marcha un negocio, ¿por qué ese dinero puede considerarse capital?",

        respuesta:
            "Porque los recursos están siendo destinados a financiar la actividad empresarial y permitir que el negocio pueda operar o crecer.",

        aplicacion:
            "Antes de iniciar un negocio, analiza cuánto capital necesitas realmente, para qué lo utilizarás y cuánto tiempo puede tardar en recuperarse."
    },


    {
        id: "rentabilidad",

        palabra: "Rentabilidad",

        categoria: "Finanzas",

        definicionCorta:
            "Capacidad de una inversión o negocio para generar un resultado económico en relación con los recursos utilizados.",

        definicion:
            "La rentabilidad permite evaluar qué tan eficiente es una empresa o inversión para generar resultados económicos en relación con los recursos que utiliza.",

        ejemplo:
            "Dos negocios pueden generar la misma utilidad, pero el que necesitó menos capital para conseguirla puede presentar una rentabilidad diferente.",

        pregunta:
            "Si dos negocios generan la misma utilidad, ¿necesariamente tienen la misma rentabilidad?",

        respuesta:
            "No. Para analizar la rentabilidad también importa cuánto capital o recursos fueron necesarios para generar esa utilidad.",

        aplicacion:
            "Cuando compares oportunidades empresariales, no preguntes únicamente cuánto dinero generan. Pregunta también cuánto capital, tiempo y recursos requieren."
    },


    {
        id: "punto-de-equilibrio",

        palabra: "Punto de equilibrio",

        categoria: "Gestión",

        definicionCorta:
            "Nivel de ventas en el que los ingresos alcanzan para cubrir los costos y gastos considerados.",

        definicion:
            "El punto de equilibrio es el nivel de actividad en el que los ingresos son suficientes para cubrir los costos y gastos correspondientes, sin generar una utilidad ni una pérdida.",

        ejemplo:
            "Un negocio necesita vender determinada cantidad de productos cada mes para cubrir sus costos fijos y variables. Ese nivel representa su punto de equilibrio bajo los supuestos utilizados.",

        pregunta:
            "¿Qué significa para un negocio vender por debajo de su punto de equilibrio?",

        respuesta:
            "Significa que, bajo los supuestos utilizados para calcularlo, los ingresos no son suficientes para cubrir todos los costos y gastos considerados.",

        aplicacion:
            "Antes de abrir un negocio, intenta calcular cuánto necesitas vender para cubrir tus obligaciones. Esto transforma una idea en una pregunta empresarial concreta."
    }

];
