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

## Estructura del proyecto

```mermaid
graph LR
    root[.] --> 1[readme.md]
    root[.] --> 1[package.json]
    root[.] --> 1[.gitignore]
    root[.] --> 1[.eslintrc.js]
    subgraph 1g[Arhivos de congiruación en raiz]
        1        
    end



style 1g fill:transparent,stroke:#E5E5E5,stroke-width:1px,stroke-dasharray:5;
style 2g fill:transparent,stroke:#323232,stroke-width:1px,stroke-dasharray:5;
style 3g fill:transparent,stroke:#323232,stroke-width:1px,stroke-dasharray:5;
```