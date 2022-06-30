# asynchrony_js
Repository about asynchrony in JS

# Spanish section
### **¿Qué es el asincronismo?**
Los lenguajes de programación por si mismos son sincronos, es decir que se ejecutan tarea por tarea, en la evolución del tiempo se encontraron formas para que los lenguajes de programación trabajen de manera asincrona.

JavaScript es un lenguaje de programación síncrono por defecto y tiene un solo subproceso (Un solo hilo para trabajar).

Se pueden encontrar la siguiente definición:
JavaScript es síncrono y no bloqueante, con un bucle de eventos (concurrencia), implementado con un único hilo para sus interfaes de I/O.
**Conceptos**
**JS es single-threaded**, aún con múltiples procesadores, solo se puede ejecutar tareas en un solo hilo, llamado el hilo principal. No es problema de la PC asi se concibio el lenguaje.

**Bloqueante:** Una tarea no devuelve el control hasta que se ha completado. Un ejemplo es el uso del alert, si no le das OK la aplicación no avanza por lo que la implementación del codigo se bloquea.

**No Bloqueante:** Una tarea se devuelve inmediatamente con independencia del resultado. Si se completó, devuelve los datos. Si no, un error.

**Síncrono:** Las tareas se ejecutan de forma secuencial, se debe esperar a que se complete para continuar con la siguiente tarea.

**Asíncrono:** Las tareas pueden ser realizadas más tarde, lo que hace posible que una respuesta sea procesada en diferido.

**Concurrencia en JavaScript:** Utiliza un modelo de concurrencia basado en un "loop de eventos".
- **EventLoop:** El bucle de eventos es un pátron de diseño que espera y distribuye eventos o mensajes en un programa.

### **Formas de manejar la asincronía en JavaScript**
**Callbacks:** Una función que se pasa como argumento de otra función y que será invocada.

**Promesas (ES6):** Función no-bloqueantes y asíncrona la cual puede retornar un valor ahora, en el futuro o nunca.

**Async / Await (ES2017):** Permite estructurar una función asincrónica sin bloqueo de una manera similar a una función sincrónica ordinaria.

JavaScript acaba de convertirse en Multi-Threaded con la capacidad de realizar múltiples tareas simultáneamente. **La respuesta es SI y NO.**

JS fue concebido sincrono pero tenemos herramientas para utilizar el asincronismo.

**Definición de JavaScript:** Es asíncrono y no bloqueante, con un bucle de eventos (concurrencia) implementado con un único hilo para sus interfaces de I/O.