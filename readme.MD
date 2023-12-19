# Proyecto Final Tramo III - Argentina Programa 4.0 - EPICA
![Argentina Programa 4.0](https://www.argentina.gob.ar/sites/default/files/untitled-3-01_2.png)

![EPICA](https://epica.educativa.org/archivos/logos/EPICA1.png)

## Paso 1

### Github

Importar proyecto de Git
[Github] (https://github.com/csilvera73/comision03-carlos-silvera.git)

> [!NOTE]
> **Rama main: proyecto de Backend**
> **Rama Dev: proyecto de frontend**  *en desarrollo*


## Paso 2

Descargar Base de Datos MongoDB
[MongoBD] (https://www.mongodb.com/try/download/community)

La versión community, incluye si desean (tilde) la instalación de compass

## Paso 3

### Backend

a) Abrir una terminal, cambiar al directorio **backend**
```cd backend```

b) Instalar dependencias:

~~~
npm i nodemon -D
~~~
~~~
npm i express dotenv cors morgan mongoose
~~~

c) Configurar las varibles del archivo **.env**

d) Inicalizar la Base de Datos Mongo

e) Poner en funcionamiento el backend

``` npm run dev ```

f) Se puede realizar pruebas, usando **Thunder Client**
    **Usuarios:**
    i) Registro: POST http://localhost:3000/register
    *crea un usuario con username, password, correo electrónico y una imnagen del avatar*
    ii) Login: POST http://localhost:3000/login
    *permite el logueo de un usuario*
    iii) Logout: POST http://localhost:3000/logout
    *permite el deslogueo de un usuario*
    iv) Perfil: GET http://localhost:3000/profile
    *permite acceder al perfil del usuario logueado*

g) **Post** y **Comments**
    Analogamente se puede para los usuarios logueados, Crear un Post, Listar todos los Posts, Buscar un Post por el *Identificador*, Modificar un Post por el *Identificador* y Eliminar el Post.
    El post guarda la relación de su creador (usuario)
    Los comentarios se asocian a un Post en particular y al usuario que lo crea

## Paso 4

### Frontend

a) Abrir una terminal, cambiar al directorio **frontend**
```cd frontend```

b) Instalar dependencias:

~~~ 
npm create vite@latest
~~~
~~~
npm i react-router-dom
~~~
~~~
npm i cookie-parser
~~~

c) Instalar React Boostrap

 ```npm install react-bootstrap bootstrap```
 agregar el script:

~~~
<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
~~~


### Paso 5

ejecutar el frontend

```npm run dev```

### Capturas del Sitio

### Home

![Inicio](https://i.postimg.cc/jdSQ7Rf0/Home.png)

![Inicio Sesión](https://i.postimg.cc/4dMw5dhS/Login.png)

![Logueado](https://i.postimg.cc/MTRfCKF4/Logueado.png)
