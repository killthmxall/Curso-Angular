# Curso Angular Básico

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 16.2.15.

## Instalación de Angular

Es recomendable hacer uso de la **Terminal de Windows** y **Powershell**, ambos disponibles desde la Store de Microsoft 

Lo primero antes de instalar Angular será instalar **Node.js** y **npm**

1. Enlace de instalación de Node.js:  https://nodejs.org/en
   
2. Ejecuta lo siguiente en la terminal y verifica que Node.js y npm se instalaron correctamente:
   ```text
   node -v
   ```
   ```text
   npm -v
   ```
Después de haber instalado Node.js y npm será necesario instalar **Angular CLI**

1. En la terminal ejecuta el siguiente comando:
   ```text
   npm install -g @angular/cli
   ```
2. Verifica que Angular CLI se haya instalado correctamente:
   ```text
   ng version
   ```
   
## Creación de un nuevo proyecto
Con Angular CLI una vez instalado, ejecuta el siguiente comando en la terminal:
   ```text
   ng new nombre-del-proyecto
   ```

Te pedirá elegir las siguientes opciones:
* ? Would you like to add Angular routing?
* ? Which stylesheet format would you like to use?
  * > CSS
  * SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
  * Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  * Less   [ http://lesscss.org     

Dependerá de ti otorgarle enrutamiento a tu proyecto y escoger entre los diferentes estilos.

## Creación de componentes

Ejecuta el siguiente comando para generar un nuevo componente.

```text
ng generate component nombre-del-componente
```

También se puede usar:

```text 
ng generate directive|pipe|service|class|guard|interface|enum|module
```


## Ejecutar el Servidor de desarrollo

Ejecuta el siguiente comando para iniciar un servidor de desarrollo. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

```text
ng serve -o
```

## Compilación

Ejecuta `ng build` para compilar el proyecto. Los artefactos de la compilación se almacenarán en el directorio `dist/`.

