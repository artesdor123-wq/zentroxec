```javascript
/* =========================================================
   ZENTROX
   BASE DE CONOCIMIENTO EMPRESARIAL V1

   Cada concepto contiene:

   - palabra
   - categoría
   - definición sencilla
   - varios ejemplos
   - pregunta
   - opciones
   - respuesta correcta
   - explicación
   - aplicación práctica
========================================================= */


const palabras = [

    {
        id: "activo",

        palabra: "Activo",

        categoria: "Contabilidad",

        definicionCorta:
            "Algo que tiene valor económico para una empresa y puede utilizarse para generar beneficios o realizar sus operaciones.",

        definicion:
            "Un activo es un recurso que una empresa controla y que tiene valor económico. Puede utilizarse para operar, producir, vender o generar beneficios en el futuro.",


        ejemplos: [

            {
                titulo: "Tienda",

                texto:
                    "Una tienda compra $1.000 en productos para venderlos. Mientras esos productos permanecen en inventario, forman parte de los activos de la empresa."
            },


            {
                titulo: "Restaurante",

                texto:
                    "Un restaurante tiene hornos, refrigeradores y otros equipos que utiliza para preparar y vender alimentos. Estos recursos tienen valor y forman parte de los activos del negocio."
            },


            {
                titulo: "Empresa de transporte",

                texto:
                    "Una empresa de transporte posee vehículos que utiliza para prestar sus servicios. Esos vehículos representan recursos económicos utilizados por la empresa."
            }

        ],


        pregunta:
            "Compras $1.000 de productos para venderlos. ¿Qué representan inicialmente esos productos?",


        opciones: [

            "Un gasto",

            "Un activo",

            "Una utilidad"

        ],


        respuestaCorrecta: 1,


        explicacion:
            "La respuesta correcta es activo. Los productos comprados para vender forman parte del inventario. El inventario es un recurso económico de la empresa. Cuando los productos se venden, se reconoce el costo correspondiente y disminuye el inventario.",


        aplicacion:
            "Cuando analices un negocio, intenta identificar qué recursos posee: dinero, inventario, equipos, vehículos, cuentas por cobrar y otros recursos con valor económico."
    },



    {
        id: "ingreso",

        palabra: "Ingreso",

        categoria: "Finanzas",

        definicionCorta:
            "Valor económico que una empresa obtiene como resultado de sus actividades.",

        definicion:
            "Un ingreso representa el valor que una empresa obtiene al vender productos, prestar servicios u realizar otras actividades que forman parte de su operación.",


        ejemplos: [

            {
                titulo: "Venta de productos",

                texto:
                    "Una tienda vende un teléfono por $500. Esa venta genera un ingreso de $500 para el negocio."
            },


            {
                titulo: "Servicio",

                texto:
                    "Un diseñador cobra $100 por realizar un trabajo para un cliente. El servicio genera un ingreso para su negocio."
            },


            {
                titulo: "Restaurante",

                texto:
                    "Un restaurante vende 20 almuerzos a $5 cada uno. Las ventas generan $100 de ingresos."
            }

        ],


        pregunta:
            "Una tienda vende 10 productos a $20 cada uno. ¿Cuál es el ingreso generado por esas ventas?",


        opciones: [

            "$20",

            "$200",

            "$2.000"

        ],


        respuestaCorrecta: 1,


        explicacion:
            "La respuesta correcta es $200. Se vendieron 10 productos a $20 cada uno: 10 × $20 = $200. Sin embargo, esos $200 son ingresos, no necesariamente utilidad.",


        aplicacion:
            "Cuando veas que un negocio vende mucho, no concluyas automáticamente que gana mucho. Primero diferencia ingresos, costos, gastos y utilidad."
    },



    {
        id: "costo",

        palabra: "Costo",

        categoria: "Finanzas",

        definicionCorta:
            "Recurso económico utilizado para adquirir o producir aquello que permite generar ingresos.",

        definicion:
            "El costo está relacionado con los recursos necesarios para obtener o producir los bienes o servicios que una empresa vende.",


        ejemplos: [

            {
                titulo: "Comercio",

                texto:
                    "Una tienda compra un producto por $30 y lo vende por $50. Los $30 representan el costo de adquisición del producto."
            },


            {
                titulo: "Restaurante",

                texto:
                    "Un restaurante necesita ingredientes para preparar sus platos. El costo de esos ingredientes está relacionado con los productos que vende."
            },


            {
                titulo: "Fabricación",

                texto:
                    "Una fábrica utiliza materias primas para producir sus artículos. Esos recursos forman parte de los costos relacionados con la producción."
            }

        ],


        pregunta:
            "Compras un producto por $30 y lo vendes por $50. ¿Cuál es el costo de adquisición del producto?",


        opciones: [

            "$20",

            "$30",

            "$50"

        ],


        respuestaCorrecta: 1,


        explicacion:
            "La respuesta correcta es $30 porque ese fue el valor utilizado para adquirir el producto. Los $50 corresponden al precio de venta. La diferencia entre ambos es de $20 antes de considerar otros gastos y elementos.",


        aplicacion:
            "Cuando analices una venta, no mires únicamente el precio. Pregunta cuánto costó obtener o producir aquello que se vendió."
    },



    {
        id: "gasto",

        palabra: "Gasto",

        categoria: "Finanzas",

        definicionCorta:
            "Desembolso o consumo de recursos relacionado con el funcionamiento de una empresa.",

        definicion:
            "Un gasto representa recursos utilizados para mantener y administrar las operaciones de una empresa. Su tratamiento contable depende de su naturaleza y de las normas aplicables.",


        ejemplos: [

            {
                titulo: "Alquiler",

                texto:
                    "Una empresa paga $500 mensuales por el alquiler del local donde funciona."
            },


            {
                titulo: "Publicidad",

                texto:
                    "Un negocio paga una campaña publicitaria para atraer clientes y aumentar sus ventas."
            },


            {
                titulo: "Servicios",

                texto:
                    "Una empresa paga servicios como electricidad, internet o telefonía necesarios para operar."
            }

        ],


        pregunta:
            "Una empresa paga $500 mensuales por el alquiler de su local. ¿Qué representa normalmente ese pago?",


        opciones: [

            "Un gasto de operación",

            "Una utilidad",

            "Un ingreso"

        ],


        respuestaCorrecta: 0,


        explicacion:
            "La respuesta correcta es un gasto de operación. El alquiler permite que el negocio funcione, pero normalmente no representa directamente el costo de adquirir cada unidad del producto vendido.",


        aplicacion:
            "Cuando estudies un negocio, separa mentalmente los recursos utilizados para obtener el producto de aquellos necesarios para mantener funcionando la empresa."
    },



    {
        id: "utilidad",

        palabra: "Utilidad",

        categoria: "Finanzas",

        definicionCorta:
            "Resultado positivo que queda después de considerar los costos y gastos correspondientes.",

        definicion:
            "La utilidad representa un resultado económico positivo. En términos generales, surge cuando los ingresos superan los costos y gastos considerados durante un período determinado.",


        ejemplos: [

            {
                titulo: "Tienda",

                texto:
                    "Una tienda obtiene $10.000 en ingresos y, después de considerar sus costos y gastos correspondientes, determina una utilidad de $2.000."
            },


            {
                titulo: "Restaurante",

                texto:
                    "Un restaurante puede tener muchas ventas durante un mes, pero si los costos de alimentos, personal, alquiler y otros gastos son elevados, su utilidad puede ser mucho menor."
            },


            {
                titulo: "Negocio online",

                texto:
                    "Una tienda online puede vender $5.000, pero debe considerar productos, publicidad, plataformas, envíos y otros costos antes de determinar su resultado."
            }

        ],


        pregunta:
            "Una empresa tiene $10.000 de ingresos y $9.000 entre costos y gastos considerados. ¿Cuál sería el resultado antes de otros elementos que correspondan?",


        opciones: [

            "$1.000",

            "$9.000",

            "$10.000"

        ],


        respuestaCorrecta: 0,


        explicacion:
            "La respuesta correcta es $1.000. Si se parte de $10.000 de ingresos y se restan $9.000 de costos y gastos considerados, queda un resultado de $1.000.",


        aplicacion:
            "Nunca confundas ventas con ganancias. Una empresa puede vender mucho y tener poca utilidad si sus costos y gastos son elevados."
    },



    {
        id: "margen",

        palabra: "Margen",

        categoria: "Finanzas",

        definicionCorta:
            "Medida utilizada para analizar cuánto queda de una venta después de considerar determinados costos.",

        definicion:
            "El margen permite analizar la relación entre las ventas y determinados costos o resultados. Es útil para evaluar productos, servicios y negocios.",


        ejemplos: [

            {
                titulo: "Producto",

                texto:
                    "Un producto se vende por $100 y su costo directo es $60. La diferencia es de $40 antes de considerar otros gastos."
            },


            {
                titulo: "Restaurante",

                texto:
                    "Un plato se vende por $10 y los ingredientes directamente asociados cuestan $4. La diferencia antes de otros gastos es $6."
            },


            {
                titulo: "Comercio",

                texto:
                    "Una tienda compra un accesorio por $8 y lo vende por $15. La diferencia entre precio de venta y costo es $7 antes de otros gastos."
            }

        ],


        pregunta:
            "Vendes un producto por $100 y su costo directo es $60. ¿Cuál es la diferencia antes de considerar otros gastos?",


        opciones: [

            "$20",

            "$40",

            "$60"

        ],


        respuestaCorrecta: 1,


        explicacion:
            "La respuesta correcta es $40. Se calcula restando el costo de $60 al precio de venta de $100. Ese valor no debe confundirse automáticamente con la utilidad neta.",


        aplicacion:
            "Cuando compares productos, observa no solamente cuál vende más, sino cuál deja un margen suficiente después de considerar los costos relevantes."
    },



    {
        id: "flujo-de-caja",

        palabra: "Flujo de caja",

        categoria: "Finanzas",

        definicionCorta:
            "Movimiento de dinero que entra y sale de una empresa durante un período.",

        definicion:
            "El flujo de caja permite observar cómo entra y sale efectivo de una empresa. Es fundamental para evaluar la capacidad del negocio de cumplir sus obligaciones de pago.",


        ejemplos: [

            {
                titulo: "Venta a crédito",

                texto:
                    "Una empresa vende $5.000 a crédito y cobrará dentro de 60 días. La venta existe, pero el dinero todavía no ha entrado a caja."
            },


            {
                titulo: "Pago a proveedores",

                texto:
                    "Una empresa recibe productos de un proveedor y posteriormente paga la factura. Cuando realiza el pago, existe una salida de efectivo."
            },


            {
                titulo: "Cobro",

                texto:
                    "Un cliente paga una factura pendiente. Ese cobro representa una entrada de efectivo para el negocio."
            }

        ],


        pregunta:
            "Una empresa vende $5.000 a crédito y cobrará dentro de 60 días. ¿Tiene esos $5.000 disponibles en efectivo hoy?",


        opciones: [

            "Sí, porque ya vendió",

            "No necesariamente",

            "Sí, automáticamente"

        ],


        respuestaCorrecta: 1,


        explicacion:
            "La respuesta correcta es 'No necesariamente'. La empresa puede haber realizado la venta, pero el dinero todavía no ha sido cobrado. Esto demuestra por qué ventas y efectivo no son exactamente lo mismo.",


        aplicacion:
            "Cuando analices un negocio, pregunta no solamente cuánto vende, sino cuándo cobra y cuándo debe pagar."
    },



    {
        id: "capital",

        palabra: "Capital",

        categoria: "Finanzas",

        definicionCorta:
            "Recursos económicos destinados a iniciar, mantener o hacer crecer una actividad empresarial.",

        definicion:
            "El capital puede representar recursos destinados a financiar las operaciones de una empresa, adquirir activos, desarrollar productos o expandirse.",


        ejemplos: [

            {
                titulo: "Inicio",

                texto:
                    "Una persona aporta $5.000 para comprar inventario, herramientas y otros recursos necesarios para iniciar un negocio."
            },


            {
                titulo: "Expansión",

                texto:
                    "Una empresa utiliza recursos para abrir una segunda sucursal y adquirir nuevos equipos."
            },


            {
                titulo: "Tecnología",

                texto:
                    "Un negocio invierte recursos en computadoras, sistemas y herramientas para mejorar sus operaciones."
            }

        ],


        pregunta:
            "¿Por qué los recursos aportados para poner en marcha un negocio pueden considerarse capital?",


        opciones: [

            "Porque financian la actividad empresarial",

            "Porque son automáticamente una utilidad",

            "Porque siempre representan un gasto"

        ],


        respuestaCorrecta: 0,


        explicacion:
            "La respuesta correcta es que esos recursos financian la actividad empresarial. El capital puede utilizarse para adquirir recursos, comenzar operaciones o financiar crecimiento.",


        aplicacion:
            "Antes de iniciar un negocio, analiza cuánto capital necesitas, para qué lo utilizarás y cuánto tiempo puede tardar en recuperarse."
    },



    {
        id: "rentabilidad",

        palabra: "Rentabilidad",

        categoria: "Finanzas",

        definicionCorta:
            "Capacidad de generar un resultado económico en relación con los recursos utilizados.",

        definicion:
            "La rentabilidad permite evaluar qué tan eficientemente una empresa o inversión genera resultados económicos en relación con los recursos utilizados.",


        ejemplos: [

            {
                titulo: "Dos negocios",

                texto:
                    "Dos negocios generan $2.000 de utilidad, pero uno necesitó mucho más capital que el otro. Su rentabilidad puede ser diferente."
            },


            {
                titulo: "Inversión",

                texto:
                    "Una persona compara dos oportunidades y analiza cuánto resultado puede obtener en relación con el dinero que necesita invertir."
            },


            {
                titulo: "Negocio",

                texto:
                    "Un empresario analiza si el resultado obtenido por una nueva sucursal justifica los recursos utilizados para abrirla."
            }

        ],


        pregunta:
            "Dos negocios generan exactamente la misma utilidad. ¿Necesariamente tienen la misma rentabilidad?",


        opciones: [

            "Sí, siempre",

            "No necesariamente",

            "Solo si venden lo mismo"

        ],


        respuestaCorrecta: 1,


        explicacion:
            "La respuesta correcta es 'No necesariamente'. La rentabilidad también considera la relación entre el resultado obtenido y los recursos utilizados para conseguirlo.",


        aplicacion:
            "Cuando compares oportunidades empresariales, no preguntes únicamente cuánto dinero generan. Pregunta también cuánto capital y recursos requieren."
    },



    {
        id: "punto-de-equilibrio",

        palabra: "Punto de equilibrio",

        categoria: "Gestión",

        definicionCorta:
            "Nivel de ventas en el que los ingresos alcanzan para cubrir los costos y gastos considerados.",

        definicion:
            "El punto de equilibrio representa el nivel de actividad en el que los ingresos son suficientes para cubrir los costos y gastos considerados, sin generar utilidad ni pérdida bajo los supuestos utilizados.",


        ejemplos: [

            {
                titulo: "Tienda",

                texto:
                    "Una tienda necesita vender determinada cantidad de productos cada mes para cubrir alquiler, servicios, personal y otros costos."
            },


            {
                titulo: "Restaurante",

                texto:
                    "Un restaurante calcula cuántos platos necesita vender para cubrir sus costos antes de comenzar a generar utilidad."
            },


            {
                titulo: "Negocio online",

                texto:
                    "Una tienda online calcula cuánto necesita vender para cubrir productos, publicidad, plataformas, envíos y otros costos."
            }

        ],


        pregunta:
            "¿Qué ocurre cuando un negocio vende por debajo de su punto de equilibrio?",


        opciones: [

            "Genera automáticamente una gran utilidad",

            "Los ingresos no alcanzan para cubrir los costos y gastos considerados",

            "No ocurre nada"

        ],


        respuestaCorrecta: 1,


        explicacion:
            "La respuesta correcta es que los ingresos no alcanzan para cubrir los costos y gastos considerados bajo los supuestos utilizados para calcular el punto de equilibrio.",


        aplicacion:
            "Antes de abrir un negocio, intenta calcular cuánto necesitas vender para cubrir tus obligaciones. Esto convierte una idea en una pregunta empresarial concreta."
    }

];
```
