# :rocket: Code Challenge - Visual Thinking API



Proyecto desarrollado para el programa de formación [©Launch X 2022](https://launchx.rocks/) de [Innovaccionvirtual](https://www.instagram.com/innovaccionvirtual/) impulsado por [Microsoft](https://www.microsoft.com/es-mx/)



## :grey_question: Descripción

Desarrollando una API para exponer una base de datos basada en un archivo json, ello a través de 3 los siguientes end point's

| endpoint | url | descripción |
| --- | --- | --- |
| /api/students/ | http:3000//localhost/api/students/ | Obtiene todos los estudiantes de la base de datos |
| /api/students/certified | http:3000//localhost/api/students/certifiedStudents/ | Obtiene los estudiantes que tengan certificación |
| /api/students/credits/top500 | http:3000//api/students/credits/top500 | Obtienes los estudiantes con credits mayor a 500 |

![Drag Racing](https://user-images.githubusercontent.com/17634377/165870375-fe5a730a-eada-4abe-ac9c-42334e003b18.png)
> :art: Arte realizado por @carlogilmar para @LaunchX-InnovaccionVirtual



## :ticket: Estructura del proyecto

```mermaid
graph LR
    root[.] --> 1[readme.md, package.json, .gitignore, .eslintrc.js]
    root --> 2[.github/workflows]
    root --> 3[data]
    root --> 4[node_modules]
    root --> 5[lib]
    root --> 6[test]
    
    subgraph 1g[Arhivos de congiruación en raiz]
        1   
    end
    subgraph 2g[Pruebas automzatidas para github]
        2
    end
    subgraph 3g[base de datos]
        3
    end
    subgraph 4g[modulos npm]
        4
    end
    subgraph 5g[archivos de la aplicación]
        5 --> 51[controllers]
        5 --> 52[services]
        5 --> 53[utils]
    end
    subgraph 6g[pruesbas aplicadas a la apliación]
        6
    end

style 1g fill:transparent,stroke:#E5E5E5,stroke-width:1px,stroke-dasharray:5;
style 2g fill:transparent,stroke:#323232,stroke-width:1px,stroke-dasharray:5;
style 3g fill:transparent,stroke:#323232,stroke-width:1px,stroke-dasharray:5;
style 4g fill:transparent,stroke:#323232,stroke-width:1px,stroke-dasharray:5;
style 5g fill:transparent,stroke:#323232,stroke-width:1px,stroke-dasharray:5;
style 6g fill:transparent,stroke:#323232,stroke-width:1px,stroke-dasharray:5;
```


## :construction: Diseño de componentes

```mermaid
graph TD
    Reader --> VisualPartnerService    
    VisualPartnerService --> VisualPartnerController
    VisualPartnerController --> Server
```

Estos componentes se ubican dentro de la carpteta **lib**

### Reader

El componente **Reader** se encarga de la lectura de la base de datos, en nuestro caso se maneja en un archivo de .json

### VisualPartnerService

Este componente se encarga de procesar los datos aplicando las reglas de negocio

### VisualPartnerController

Este componente se ecarga de cargar los datos del origine y aplicar las reglas de negocio con el componente **VisualPartnerService**

### Server

Este compenente se encarga de exponer la **API** mendiante un servidor de express


## Como utilizar el proyecto

### Correr la aplicación

```bash
npm run server
```

![npm](/docs/images/npm%20run%20server.gif)

### ejecutar las pruebas unitarias

![npm](/docs/images/npm%20run%20test.gif)

### Comprobación de syntaxis con **Linnter**

![npm](/docs/images/npm%20run%20linter.gif)

### Corrección de systenxis con **Linter**

![npm](/docs/images/npm%20run%20linter-fix.gif)



## :checkered_flag: Dependencias

El proyecto usa la siguiente dependencias para su ejecución

- eslint ^8.14.0,
- express ^4.18.1
- jest ^26.0.0