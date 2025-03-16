# Examen 1 Programacion de Tecnologias WEB

### `Componentes`

## Login.js
- Se utilizo Container (que ocupara toda la pantall) , una Row que tuviera dos columnas una parte la del formulario y la otra con la de la parte de diseño. Dentro de la segunda columna se usa un div con una flexbox para poder centrar mas facilmente el formulario.
- Contiene el formulario de inicio de sesión con campos para email y contraseña.
- Incluye validación con restricciones de longitud en el campo de contraseña.
- Se maneja el evento onClick en el botón de login para redirigir a la página principal.
## Home.js
- Se tomo parte de la columna del formulario del Login y se cambiaron los colores y se agregaron los botones para ir al detail.
- Tambien se usa la carpeta public , para agregarlos iconos tomados de internet.
- Presenta las opciones de navegación (Menú, Tiendas, Carrito).
- Se usa el estado onClick para redirigir a la pantalla de detalles al hacer clic en las opciones.
- Se utilizan imágenes representativas para cada opción.
- Se utiliza navigate para poder pasar al detail y tambien para mandar el estado , con el texto y imagen que se selecciono 
## Detail.js
- Se iba a utilizar el navigate del home , para enviar el state y atraparlo con location en detail , despues de esto dentro de Carrousel ,  hacer un .map para mostrar agregar la lista de fotos del API
- Usa el hook useEffect para obtener los datos al renderizar el componente.
- Se almacena la respuesta en el hook useState, actualizando la interfaz automáticamente.
- Se define la estructura de un carrusel para mostrar la información obtenida.
- Las fotos de carrousel se crearon como un array , para poder iterarlas y ir agregar todas sin poner una por una.
- Los objetos que tocaba tomar de Mockaroo , se crearon como objetos anidados , que tenian dentro el texto y la foto , aunque se puede hacer de la misma froma que el de las fotos del carrousel

### `Decisiones`
- Se inicio desarrollando el login , luego el home y despues el detail.
- En la parte del login no se tomo bastante tiempo , lo deje lo mas parecido posible en cuanto diseño.
- En la parte de home fue la que mas me tomo tiempo principalmente porque perdi el tiempo buscando iconos , que se parecieran (mala decision)
- En la ultima y mas importante parte , la deja al final y no alcanze a implementarla completamente.
