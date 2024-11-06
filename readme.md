# Pre-entrega 01

**Autor:** Carlos Biénzobas.

## Descripción del Proyecto
Este proyecto es un simulador de costos de servicios para bodas o matrimonios, desarrollado en HTML y JavaScript.
Mediante este simulador, el usuario final puede seleccionar entre 3 servicios diferentes y calcular el costo total de los servicios seleccionados. En el detalle entregado al usuario se le provee de un subtotal con los costos de los servicios, el impuesto asociado y el costo total con la suma de ambos montos.

## Conocimientos Aplicados
El desarrollo de este proyecto integra en su gran mayoria los conceptos enseñados en clase, aplicados en un contexto de simulación que es solicitado para la presente entrega. Sin embargo, para facilitar la visualización de la presente entrega, es que puntualmente se incorpora y reutilizan conocimientos previos adiquiridos en los cursos de `Desarrollo Web` y `Python`. De `Desarrollo Web` la visualización sencilla del texto en el front para proveer de contexto al usuario final del simulador, junto con un `botón` sencillo para acceder o iniciar las funcionalidades del simulador por parte del usuario. Mientras que de `Python`, puntualmente conocimientos generales de programación en la inclusión de métodos para facilitar el formato de moneda local de Chile como `toLocalString()` y `slice` para remover caracteres sobrantes.


### Funcionalidades:
1. **Selección de servicios**: 
   - El usuario puede seleccionar entre tres servicios: Decoración, Banquete, y Música.
   - La selección se realiza de manera interactiva a través de `prompt` en el navegador, donde el usuario ingresa "S" para sí y "N" para no.
   - El usuario puede optar por ingresar "0" para salir del programa o hacer clic en el botón cancelar.

2. **Cálculo del Costo Total**:
   - El simulador calcula el costo total en función de los servicios seleccionados, aplicando una impuesto de IVA del 19%.
   - Una vez finalizada la selección, el programa muestra el siguiente resumen:
     - Los servicios seleccionados.
     - El costo total sin IVA.
     - El monto correspondiente al IVA.
     - El costo total con IVA incluido.

### Estructura del Proyecto
El proyecto consta de dos archivos:
1. `index.html`: HTML con la guía de uso del simulador y un botón para iniciar la cotización.
2. `script.js`: JavaScript que realiza el cálculo y la lógica de interacción con el usuario a través de `prompt` y `alert`.

**Nota:** Dentro de cada uno de los presentes archivos se encuentran comentarios que sustentan la lógica utilizada en la programación del presente simulador.

### Cumplimiento criterios de evaluación ###

**1. Estructura HTML y archivo JS**
La estructura HTML está completa y ejecutada con buenas prácticas o utiliza el el starter template de Bootstrap u otro framework para el uso adecuado de HTML5 *. El archivo JS está correctamente referenciado en el HTML.

**Comentarios:** Como profesor menciona en clases, no es necesario la utilización de framework front para la presente entrega. Por otro lado, el presente proyecto cumple la siguiente parte del criterio de evaluación, es decir, la utilización de una estructura base de HTML5 funcional y una correcta referencia del archivo `script.js` hacia el `HTML` mediante con <script src="script.js"></script>. 

**2. Algoritmos**
Se utiliza algoritmo condicional y con ciclo (IF, bucles for) de manera óptima , reflejando lo aprendido en clase.

**Comentarios:** El presente proyecto cuenta con la utilización uso de condicionales y ciclos. En específico, la utilización de `if ` en múltiples instancias dentro de la función usoCotización() con el fin de , entre otros, validar los valores ingresados por el usuario en la interacción con el simulador. Por otro lado, se utiliza en múltiples instancias el ciclo `while ` con el propósito de gestionar la selección del usuario de cada uno de los servicios. Es relevante indicar que en conjunto se pueden identificar ciclos con `if ` anidados, cumpliendo así con parte de los objetivos y ejercicios vistos en clase.

**3. Funciones**
Los nombres de las funciones son claros y dan a entender que acción realizan. Se emplea la estructura correcta para el armado de las mismas. Crea funciones dinámicas de manera correcta. Generan un resultado correcto cuando se ejecutan.

**Comentarios:** En este punto se genera un grado de contradicción respecto de las rubricas de evaluación de la presente entrega respecto de los comentarios realizados por el profesor en clase. Donde se indica en especifico la no utilización de funciones dentro de lo posible para la presente entrega (punto reforzado en específico dentro de sesión “after “del día 30 de Octubre 2024). Sin embargo, con el objetivo de llegar a un punto medio que cubra un poco de ambas partes, es que se ha agrupado la totalidad del código dentro de la función `usoCotizacion` que, entre otros beneficios, permite llamar a las funcionalidades del presente simulador bajo demanda al usuario final por medio del a explotación de un botón sencillo en el front HTML.