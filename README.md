<p align="center">
  <a href="https://tcgpocket.pokemon.com/es-es/" target="blank"><img src="https://tcgpocket.pokemon.com/_images/global/footer/tcgpocketlogo_footer_es.png" alt="tcg Logo" /></a>
</p>

  <p align="center">Proyecto de prueba con pokemon tcg pocket, hecho en Nest Js.</p>
    <p align="center">

</p>

## Iniciar Next Js

Procuparar tener intalada la versión 18.18 o mayor de Node Js

Para la instalación automática de Next Js se debe iniciar un nuevo proyecto con el siguiente comando:

```bash
$ npx create-next-app@latest
```

## instalación de Ant Design

Para la instalación se debe ejecutar el siguiente comando:

```bash
$ npm install antd --save
```

## Instalación de Paquetes

Se deben instalar todos los paquetes para un funcionamento sin problemas del proyecto
```bash
$ npm install
or 
$ npm i
``` 

## Variable de Entorno
Para poder configurar el puerto 3000 se debe dejar con la siguiente variable:
```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Compilar Proyecto
Primero siempre se debe compilar el *Back-End* de esta forma aseguramos que, si el puerto 3000 esta en uso, automaticamente el *Front-End* cambie a puerto 3001

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)  en su navegador para ver el resultado.
*Si compiló primero Nest Js debera abrir [http://localhost:3001](http://localhost:3001)* 
