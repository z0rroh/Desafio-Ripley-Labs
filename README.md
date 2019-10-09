# Desafio Ripley Labs

 
Proceso de postulación al area de innovación de la compañía Ripley. Las tecnologías requeridas para este desafío son:
+ JavaScript
+ React
+ NodeJS
+ Redis
+ Git
+ Proveedor cloud a elección

Para la realización de este desafío se crearon dos servicios, uno para el frontend (cliente), el cual se encuentra desarrollado bajo la librería ReactJS y otro para el backend (server), el cual se encuentra desarrollado bajo el framework ExpressJS. A modo de dividir el trabajo y la lógica de negocio de cada servicio. En donde el servidor o API solo se encarga de manipular los datos y exponer a travez de la web los recursos disponibles, mientras que el cliente se encarga de consumir estos recursos y presentarlos de manera visual a los usuarios. Ademas, parte del desafío consiste en el despliegue de la aplicación en el ambiente de un proveedor cloud a elección, por lo tanto, el proveedor seleccionado para llevar a cabo esta tarea fue Amazon Web Services.

A continuación se describe de manera simplificada y descriptiva el proceso de despliegue de estos servicios, utilizando el proveedor cloud AWS. 

 
## PROCESO DE DESPLIEGUE

### 1. CLIENTE
Para el caso del cliente se utilizo el servicio de AWS - Amplify.
Los pasos realizados para desplegar la aplicación web en este servicio fueron los siguientes:
+ Poseer o crear una cuenta AWS con la capa gratuita
+ Aprovisionar el servicio de Amplify con los permisos requeridos:
	- Crear y configurar permisos de IAM.
	-  Crear y configurar políticas.
+ Seleccionar el servicio Amplify en la consola de AWS.
	- Conectar una APP.
	- Seleccionar un proveedor GIT; GitHub, GitLab, GitBucket, AWS CodeCommit.
	- Seleccionar el repositorio o proyecto que se desea conectar.
	- Seleccionar la o las ramas de trabajo.
	- Asignar un nombre al proyecto.
	- Generar un archivo "build settings" (configuración de compilación), el cual posee el conjunto de instrucciones y comandos para ejecutar la compilación del código.
	- Finalmente, se ejecuta la opción "guardar y desplegar", donde, si todo sale bien, la aplicación se desplegara en una DNS proporcionada por AWS.
+ La app generada se puede visualizar en el siguiente enlace: [WebAp-DesafioRipley](https://master.d3bwgaojfazfgp.amplifyapp.com/).

### 2. SERVIDOR
Para el caso del servidor se utilizo el servicio AWS - EC2. A modo de crear un VPS en el cual desplegar el servicio del backend.

Los pasos realizados para desplegar el servicio Express en estos servicios fueron los siguientes:
+ Poseer o crear una cuenta AWS con la capa gratuita
+ Aprovisionar el servicio EC2 con los permisos requeridos:
	- Crear y configurar permisos de IAM.
	-  Crear y configurar políticas.
+ Seleccionar el servicio EC2 en la consola de AWS y crear una instancia de trabajo:
	- Seleccionar la imagen de sistema operativo con el cual se desea trabajar.
	- Seleccionar, configurar los atributos de hardware que poseerá la maquina (Disco, RAM, CPU).
	- Finalmente, lanzar la nueva instancia.
+ Configurar una VPC y su respectiva Subnet a modo de proporcionar comunicación entre los recursos usados en la cuenta de AWS y la web.
+ Conectarse a la instancia de EC2 por medio de SSH a modo de manipular remotamente el servidor creado.
+ Aprovisionar el sistema operativo linux con los recursos y servicios que se estimen convenientes.
+ Correr el backend Express en la instancia de EC2:
	- Clonar el proyecto del servidor desde el repositorio GitHub o copiar los archivos a la instancia por medio de ssh.
	- Instalar Redis (necesario para ejecutar el proyecto Express)
	- Ejecutar `node index.js` y `redis-server`
+ Exponer el servicio a la web de manera segura:
	- Obtener un dominio, en mi caso desde [Freenom](https://my.freenom.com/) 
	- Instalar Nginx y Cerbot para la generación de certificados SSL.
		* Generar los certificados con Cerbot y el dominio creado.
		* Configurar el proxy de Nginx con el dominio y los certificados obtenidos, a modo de redireccionar las peticiones HTTP a HTTPS.
+ Con estos procedimientos, la API queda desplegada a la web de manera segura en el sitio: [API-DESAFIO-RIPLEY](https://desafioripley.tk/api/product).
		