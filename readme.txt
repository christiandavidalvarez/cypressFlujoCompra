PRECONDICION: tener instalado nodejs en el equipo donde se vaya a ejecutar el proyecto

//Instalar version 9
npm install cypress@9.7.0 --save-dev

//Abrir cypress en powershell
.\node_modules\.bin\cypress.cmd open

//Ejecucion desde consola de comandos con chrome
 npm run cy:run:chrome
 
 //Ejecucion desde consola de comandos con firefox
 npm run cy:run:firefox
 
 
//Esto ejecuta cuando en el archivo package.json
//Se tiene configurado "cy:run:chrome":"cypress run -b chrome"