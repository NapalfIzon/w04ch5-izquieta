# formulario

## Components

### App

### PersonalData

- Renderiza un formulario que pedirá:
  · Nombre
  · Apellido
  · Fecha de nacimiento
  · Email
- Renderizará la edad del usuario, en función de la fecha de nacimiento introducida
- Renderizará un botón "Continuar".
- En caso que falte algún dato a introducir, el botón estará desactivado.
- Al haber introducido todos los datos, en caso de haberlos introducido correctamente, habilitará el botón para continuar con el proceso de alta.
- El botón añadirá una clase "off" a e

### AccessData

- Renderizará un formulario que pedirá:
  · Nombre de usuario
  · Contraseña
  · Repetir contraseña
- Renderizará un botón "Continuar".
- Comprobará que el campo de "contraseña" y "repetir contraseña" sean los mismos, de lo contrario dará un aviso de error.
- Al haber introducido todos los datos, en caso de haberlos introducido correctamente, habilitará el botón para continuar con el proceso de alta.

### Login

- Renderizará un formulario que pedirá:
  · Nombre de usuario
  · Contraseña
- Renderizará un botón "Acceder".
- Comprobará que el campo de "nombre de usuario" y "contraseña" sean los introducidos en AccessData.
- En caso que los datos introducidos no sean los mismos que en AccessData, dará un aviso de error.
- Al haber introducido todos los datos, en caso de ser los correctos, habilitará el botón para continuar.

### Display

- Renderiza los datos introducidos por el usuario
