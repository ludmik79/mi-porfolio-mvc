# MVC

  
Iniciales de 

 - Modelo  
 - Vista  
 - Controlador

Es un **paradigma de desarrollo** que plantea una división y encapsulamiento de responsabilidades:

 - El modelo se encargará de la capa de datos. **MODELA** las entidades del sistema (Producto, Usuario, etc.)
 - El controlador se encargará de la lógica funcional / de negocio. **CONTROLA** el funcionamiento de la aplicación (que un usuario tenga permiso para hacer una acción, verificar la petición, decidir que ocurrirá en un momento determinado). Tiene la mayor responsabilidad.
 - La vista se encargará de la capa de presentación. Recibirá datos del controlador y los **PRESENTA** al usuario.

Modelo y controlador son abstractos, la vista es la que terminará renderizando contenido para el usuario, es el último paso de la interacción de los elementos de MVC.

## Ejemplo con Facebook

  

- Ingreso a la página de login, y visualizo la vista con el formulario de login (input email y password con el botón enviar)

- Al enviar el formulario, envío una petición POST a la ruta /login del servidor.

- El Router de express se encarga de vincular el POST a /login con un controlador, por ejemplo:
	- app.post('/login', authController.login)
- Es decir, el router vincula rutas a controladores (métodos de controladores), y les pasa req y res para que hagan la lógica que corresponda

- Controlador recibe req y res del router y comienza a trabajar en la lógica
	- Verifica que en el body de la petición tenga un email y password
		- Si la petición no tiene email y password: Devuelve una respuesta con una vista de error: Debe completar email y password.
		- Sino controlador le pregunta al **modelo Usuario**: ¿**Existe un usuario con este email ?** Modelo puede responder
			- No existe: Controlador devuelve respuesta con vista de error
			- Si existe continúa
		- Ahora controlador le pregunta a **modelo Usuario**:  **¿La clave del usuario que existe coincide con la que me envió el cliente?** Modelo puede responder:
			- No existe: Controlador devuelve respuesta con vista de error
			- Si existe: Continúa
		- Controlador le pide a **modelo Publicación** todas las publicaciones que puede ver este usuario.
	- Esta interacción termina generando una estructura de datos, por ejemplo un objeto así:

        
    {
	    usuario: {....}, objeto con datos del usuario
	    posts: [...], array con posts que verá el usuario
    }
	
- Controlador -> Le pasa estos datos a la **VISTA**. Esta mostrará los datos recibidos del controlador.