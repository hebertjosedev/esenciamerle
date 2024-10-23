# Ecommerce de perfumería

El siguiente proyecto se llevó a cabo para un negocio de perfumería, usando vite+reactjs para la creación del front-end y firebase en el lado del back-en.
  
# Páginas de la tienda

* Menú de navegación

* Home, carrito de compra, perfumes, cosméticos, login (solo para administrador)

* Pagina para ver el detalle de cada producto con sus características

* El carrito permite hacer una orden de compra directamente al WhatsApp de dicha tienda, con los productos que existen en carrito mas su monto total.
  

## Backend firebase

Se usa el modulo de Firestore Database para todos los productos existentes y Authentication para el login de la persona encargada de registrar los productos de la tienda. Sin este login no se pueden crear productos

## Conexión con Firebase

En cuanto a la conexión del servicio de firebase es necesario el uso de variables de entorno, esto para curarse en salud en cuanto al backend.

> **Note:** Para el desarrollo local puedes usarlo sin variables de entorno o con ellas, pero en producción lo mas correcto es usar variables de entorno.
