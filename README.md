# Curso Angular Básico

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 16.2.15.

## Instalación de Angular

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

