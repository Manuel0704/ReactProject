# Este es el repositorio del proyecto final del curso de React.js

Para la construcción de este e-commerce se hizo uso de la [API de rick & morty](https://rickandmortyapi.com/) para subir todos los datos a [firestore](https://firebase.google.com/products/firestore?hl=es-419&gclsrc=ds&gclsrc=ds&gclid=CPWVkLnNzvUCFQfcHwodOKwI8A) y poder traerlos desde allí.

## Inicio

En la página principal se encontrará los items surtidos cuyos detalles seras capaz de acceder. Para más detalles de lo que es el detalle de item ir a **Detalle de Item**

## Categorias

Todos los items pertenecen a una categoría específica y puedes seleccionarla desde el menu de navegación

### Detalle de item

Aqui encontrarás la descripción del producto acompañada del precio unitario y un selector de la cantidad que necesites para añadir a tu carrito de compras. Ve a **carrito de compras** para saber más de el.

### Carrito de compras

Para acceder necesitarás al menos 1 producto añadido, posterior a ello se habilitará un icono en la barra de navegación que te llevará al carrito de compras el cual te mostrará todos los productos seleccionados, y si lo deseas podrás eliminar un grupo de items específico. Cuando estés seguro, tendrás que llenar el formulario ubicado en la parte inferior de la lista, Ve a **Confirmación de orden** para saber más de el.

### Confirmación de orden

Para finalizar tu orden deberás rellenar el formulario de con tu nombre, número telefónico y correo electrónico (este último requerirá una segunda confirmación). Una vez rellenado dale al botón de Comprar! para terminar tu orden, y finalmente deberás recibir tu número de orden.

### `Notas de el proyecto`

En este proyecto no se implemento local storage por lo que si hay productos en el carrito, estos se eliminarán al recargar la página.