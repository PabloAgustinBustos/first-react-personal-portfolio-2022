import htmlSrc from "./assets/icons/frontSkills/html.png"
import cssSrc from "./assets/icons/frontSkills/css.png"
import tsSrc from "./assets/icons/frontSkills/ts.png"
import reactSrc from "./assets/icons/frontSkills/react.png"
import materialSrc from "./assets/icons/frontSkills/materialUI.png"
import bootstrapSrc from "./assets/icons/frontSkills/bootstrap.png"
import jsSrc from "./assets/icons/frontSkills/js.png"
import nextSrc from "./assets/icons/frontSkills/NextJS.png"
import reactRouterDomSrc from "./assets/icons/frontSkills/reactRouterDom.png"
import motionSrc from "./assets/icons/frontSkills/motion.png"

import nodeSrc from "./assets/icons/backSkills/node.png"
import expressSrc from "./assets/icons/backSkills/express.png"
import postgressSrc from "./assets/icons/backSkills/postgress.png"
import sequelizeSrc from "./assets/icons/backSkills/sequelize.png"
import mongoSrc from "./assets/icons/backSkills/mongoDB.png"

import gitSrc from "./assets/icons/agileSkills/git.png"
import devopsSrc from "./assets/icons/agileSkills/devops.png"
import scrumSrc from "./assets/icons/agileSkills/scrum.png"
import mvcSrc from "./assets/icons/agileSkills/mvc.png"

import frontSrc from "./assets/img/positFront.png"
import backSrc from "./assets/img/positBack.png"
import agileSrc from "./assets/img/positAgil.png"

import pokePI1 from "./assets/img/pokedex/1.png"
import pokePI2 from "./assets/img/pokedex/2.png"
import pokePI3 from "./assets/img/pokedex/3.png"
import pokePI4 from "./assets/img/pokedex/4.png"

import climApp1 from "./assets/img/climapp/1.jpg"
import climApp2 from "./assets/img/climapp/2.jpg"

import techCommerce1 from "./assets/img/techCommerce/1.jpg"
import techCommerce2 from "./assets/img/techCommerce/2.jpg"
import techCommerce3 from "./assets/img/techCommerce/3.jpg"
import techCommerce4 from "./assets/img/techCommerce/4.jpg"
import techCommerce5 from "./assets/img/techCommerce/5.jpg"

import myToDo1 from "./assets/img/myToDo/1.jpg"
import myToDo2 from "./assets/img/myToDo/2.jpg"
import myToDo3 from "./assets/img/myToDo/3.jpg"

import vanilla1 from "./assets/img/vanillaTasks/1.jpg"
import vanilla2 from "./assets/img/vanillaTasks/2.jpg"
import vanilla3 from "./assets/img/vanillaTasks/3.jpg"

import portfolio1 from "./assets/img/portfolio/1.jpg"
import portfolio2 from "./assets/img/portfolio/2.jpg"
import portfolio3 from "./assets/img/portfolio/3.jpg"
import portfolio4 from "./assets/img/portfolio/4.jpg"

const techIcons = {
    front: [htmlSrc, cssSrc, tsSrc, reactSrc, materialSrc, nextSrc],
    back: [nodeSrc, expressSrc, postgressSrc, sequelizeSrc, mongoSrc],
    agile: [gitSrc, devopsSrc, scrumSrc, mvcSrc]
}

const positOf = {
    front: frontSrc,
    back: backSrc,
    agile: agileSrc
}

const softSkills = [
    {
        skill: "Autodidacta",
        description: [
            "Una de las características que más destaco de mi persona es el aprender por mi propia cuenta.",
            "Me considero un estudiante eterno, tanto de programación como de la vida, todo lo que aprendo, lo aplico.",
            "Me gusta mucho ver cursos de distintas cosas. Siempre tuve facilidad para tomar el control de mi propia educación y no depender de una institución que me enseñe."
        ]
    },

    {
        skill: "Flexible",
        description: [
            "No me gusta quedarme estancado en un solo lugar, siempre me atrajeron los desafíos y las cosas nuevas. Todo lo que me permita practicar y aprender cosas nuevas es muy bienvenido en mi vida. Por eso aspiro a expandirme a otras ramas y descubrir nuevas metodologías"
        ]
    },

    {
        skill: "Curioso",
        description: [
            "La informática es mi profesión. Todo me gusta y me interesa muchísimo, por eso siempre estoy informándome sobre últimas tecnologías, aprendiendo nuevas cosas y jugando con los lenguajes.",
            "Mi curiosidad no se limita solo a la informática, también me interesan muchas otras áreas como el diseño, la edición de video, las historias, los trabajos de otras personas, etc."
        ]
    },

    {
        skill: "Trabajo en equipo",
        description: [
            "Al trabajar en equipo, suelo dejar mi independencia para poder solucionar un problema entre varias personas de un equipo.",
            "Me gusta mucho trabajar en equipo, tratar de comprender una situación, organizar proyectos, analizar varias posibles soluciones, etc. Siempre con buena comunicación"
        ]
    },

    {
        skill: "Organizado",
        description: [
            "Mi manera de trabajar es analizando la problemática, dividiéndolo en partes, asignando fecha y hora a cada tarea y asignando los requerimientos.", 
            "Si debo aprender una herramienta para resolver un problema, organizo cuando voy a aprender esa herramienta, asigno cuando voy a aplicar lo que aprendí y asigno cuando debería tener terminada la solución.",
            "Me gusta mucho trabajar en base a objetivos."
        ]
    },
    
    {
        skill: "Versátil",
        description: [
            "Adaptarse a las situaciones es una de las cosas más importantes del día al día en el trabajo y considero muy importante tratar de hacerlo con rapidez.",
            "Siempre destaqué mi facilidad para adaptarme a las circunstancias, por ejemplo si un proyecto requiere de una tecnología nueva, la aprendo con facilidad y rápidamente la aplico."
        ]
    }
]

const projects = [
    {
        id: 1,
        version: "1.0.0-alpha",
        name: "PokePI",
        thumbnail: pokePI1,
        images: [pokePI1, pokePI2, pokePI3, pokePI4],
        link: "https://pokemon-pi-beta.vercel.app/",

        techStack: {
            cardList: [
                reactSrc,
                expressSrc,
                postgressSrc,
                sequelizeSrc
            ],

            fullList: [
                reactSrc,
                reactRouterDomSrc,
                cssSrc,
                nodeSrc,
                expressSrc,
                postgressSrc,
                sequelizeSrc,
                gitSrc
            ]
        },

        description: [
            {
                title: "Descripción del proyecto",
                content: [
                    "En este proyecto desarrollé una SPA en React que viene a simular una pokedex y lo desarrolle para un bootcamp de desarollo web full stack.",
                    "La idea del proyecto era una app que muestre pokemons y que el usuario pueda filtrarlos segun el tipo, ordenarlos alfabeticamente, buscar un pokemon en específico y crear un nuevo pokemon que se guardan en una base de datos.",
                    "El objetivo era implementar la librería de React, Express y sequelize en la realización de una SPA."
                ]
            },
            {
                title: "¿Cómo fue el proceso?",
                content: [
                    "Si bien no es el primer proyecto que hago, es el primero en el que trabajo exhaustivamente, teniendo una deadline establecida.",
                    "Fue interesante organizar cuándo trabajar los aspectos del proyecto. La primera semana me encargue de preparar la base de datos en sequelize, la segunda semana toqué las rutas en el back-end para las peticiones y en la tercer semana trabaje el front-end, el diseño mobile, los filtrados, la paginación, etc."
                ]
            },
            {
                title: "¿Qué aprendí?",
                content: [
                    "Aprendí mucho a trabajar con git, a conectar el front-end con el back-end y por sobre todo a ser organizado con mis objetivos y la deadline.",
                    "También aprendí a llevar comunicación, no con el equipo ya que es un proyecto que hice solo, pero si a comunicar la idea del proyecto a alguien que no está dentro del ambito de la programación. Básicamente aprendí a vender el proyecto sin llegar a palabras técnicas.",
                    "Es importante agregar que es el primer proyecto donde aplico mobile first, donde hago primero el diseño mobile y luego el diseño de la pantalla de computadora."
                ]
            },
        ]
    },

    {
        id: 2,
        version: "1.0.0",
        name: "ClimApp",
        thumbnail: climApp1,
        images: [climApp1, climApp2],

        techStack: {
            cardList: [
                reactSrc,
                reactRouterDomSrc,
                cssSrc
                // expressSrc,
                // postgressSrc,
                // sequelizeSrc
            ],

            fullList: [
                reactSrc,
                reactRouterDomSrc,
                cssSrc
            ]
        },

        description: [
            {
                title: "Descripción del proyecto",
                content: ["Es un proyecto básico en el que el usuario puede consultar el clima de multiples paises, provincias o ciudades y se agrega en una card en la ruta principal."]
            },
            {
                title: "¿Cómo fue el proceso?",
                content: ["Fue un poco confuso al principio ya que fué mi primera experiencia práctica con React, dentro del bootcamp SoyHenry, pero la verdad fue muy interesante y volver a re-hacerlo desde cero me ayudó mucho a expandir el proyecto, ya que al principio solo era un sitio web sin animaciones, con estilos muy simples y además sin animaciones."]
            },
            {
                title: "¿Qué aprendí?",
                content: ["Básicamente aprendí mucho a cómo crear un proyecto en react y practicar lo básico (input controlado, rutas, estados, useEffect y otros hooks), dandome cuenta de errores y malas practicas que estaba siguiendo y corrigiendolas. Además aprendí a manejarme con el paquete react-router-dom y a hacer uso de animaciones y transiciones con CSS vanilla. También le di un estilo más estético al sitio, dibujando un sol y mostrando las cards como si fueran otras nubes. Básicamente la idea del diseño era tener coherencia con la temática del proyecto."]
            },
        ]
    },

    {
        id: 3,
        version: "1.0.0",
        name: "TechCommerce",
        thumbnail: techCommerce1,
        images: [
            techCommerce1,
            techCommerce2,
            techCommerce3,
            techCommerce4,
            techCommerce5
        ],

        techStack: {
            cardList: [
                reactSrc,
                nodeSrc,
                expressSrc,
                postgressSrc,
                sequelizeSrc
            ],

            fullList: [
                reactSrc,
                reactRouterDomSrc,
                cssSrc,
                materialSrc,
                nodeSrc,
                expressSrc,
                postgressSrc,
                sequelizeSrc,
                gitSrc
            ]
        },

        description: [
            {
                title: "Descripción del proyecto",
                content: [
                    "Plataforma e-commerce que permite ver productos de diferentes categorías de tecnologías y poder armar un carrito de compra para poder adquirirlos.",
                    "Además permite crearse una cuenta de usuario para poder realizar la compra y tener un historial de compras.",
                    "El proyecto también cuenta con un usuario admin que tiene acceso a un Dashboard en donde puede administrar el contenido del sitio, agregar y eliminar productos, crear usuarios, hacerlos administradores, etc."
                ]
            },
            {
                title: "¿Cómo fue el proceso?",
                content: [
                    "Fué el primer proyecto más complicado en el que he trabajado en toda mi vida como desarrollador ya que este era un trabajo de final de curso para la carrera de desarrollador full-stack en SoyHenry.",
                    "También fué un proyecto grupal en donde tuvimos que hacer división de roles (front, back), división de tareas (user's stories) y hacer uso de la metodología SCRUM para una mejor organización del proyecto en donde participamos en reuniones dailys para asegurar el proceso de desarrollar la web.",
                    "Fueron horas y horas trabajadas para realizar varias funcionalidades como el login, el registrarse, un apartado en el dashboard del admin donde pueda vree la tabla de usuarios, crear, editar y eliminar usuarios y convertirlos en admins."
                ]
            },
            {
                title: "¿Qué aprendí?",
                content: [
                    "Aprendí muchisimo sobre git-flow y aplicar el mismo para un desarrollo de un producto escalable.",
                    "También destaco mucho el aprender nuevas tecnologías como firebase, materialUI, etc.",
                    "Lo más importante fue asimilar el uso de SCRUM y aplicarlo día a día, dividiendo el proyecto en tareas, usando Trello para tener la organización de las tareas por cada sprint y hacer reuniones todos los días."
                ]
            },
        ]
    },

    {
        id: 4,
        version: "1.0.0",
        name: "MyToDo",
        thumbnail: myToDo1,
        images: [myToDo1, myToDo2, myToDo3],

        techStack: {
            cardList: [
                reactSrc,
                expressSrc,
                mongoSrc
            ],

            fullList: [
                reactSrc,
                cssSrc,
                nodeSrc,
                expressSrc,
                mongoSrc,
                gitSrc
            ]
        },

        description: [
            {
                title: "Descripción del proyecto",
                content: ["hola"]
            },
            {
                title: "¿Cómo fue el proceso?",
                content: ["hola"]
            },
            {
                title: "¿Qué aprendí?",
                content: ["hola"]
            },
        ]
    },

    {
        id: 5,
        version: "1.0.0",
        name: "VanillaTasks",
        thumbnail: vanilla2,
        images: [vanilla2, vanilla1, vanilla3],

        techStack: {
            cardList: [
                htmlSrc,
                bootstrapSrc,
                jsSrc
            ],

            fullList: [
                reactSrc,
                cssSrc,
                nodeSrc,
                expressSrc,
                mongoSrc,
                gitSrc
            ]
        },

        description: [
            {
                title: "Descripción del proyecto",
                content: ["hola"]
            },
            {
                title: "¿Cómo fue el proceso?",
                content: ["hola"]
            },
            {
                title: "¿Qué aprendí?",
                content: ["hola"]
            },
        ]
    },

    {
        id: 6,
        version: "1.0.0",
        name: "PersonalPortfolio",
        thumbnail: portfolio1,
        images: [
            portfolio1,
            portfolio2,
            portfolio3,
            portfolio4
        ],

        techStack: {
            cardList: [
                reactSrc,
                cssSrc,
                reactRouterDomSrc,
                motionSrc
            ],

            fullList: [
                reactSrc,
                cssSrc,
                nodeSrc,
                expressSrc,
                mongoSrc,
                gitSrc
            ]
        },

        description: [
            {
                title: "Descripción del proyecto",
                content: ["hola"]
            },
            {
                title: "¿Cómo fue el proceso?",
                content: ["hola"]
            },
            {
                title: "¿Qué aprendí?",
                content: ["hola"]
            },
        ]
    },
]

const colors = {
    0: "color1",
    1: "color2",
    2: "color3"
}

const courses = [
    {
        id: 1,
        title: "CIENCIAS DE LA COMPUTACIÓN",
        institution: "UBA",
        progress: "En curso"
    },

    {
        id: 2,
        title: "DESARROLLO WEB FULL-STACK",
        institution: "SoyHenry",
        progress: "ENE/2022"
    },

    {
        id: 3,
        title: "TÉCNICO EN COMPUTACIÓN",
        institution: "Escuela Técnica N°32 D.E. 14",
        progress: "DIC/2019"
    },
    {
        id: 4,
        title: "DESARROLLO WEB FRONT-END",
        institution: "Curso: 'aprender programando': GBA",
        progress: "DIC/2018"
    },
    {
        id: 5,
        title: "PROGRAMACIÓN",
        institution: "Autodidacta",
        progress: "En curso desde el año 2016"
    },
]

const stats = {
    techSkills: techIcons.front.length + techIcons.back.length + techIcons.agile.length,
    softSkills: softSkills.length,
    skills: techIcons.front.length + techIcons.back.length + techIcons.agile.length + softSkills.length,
    projects: projects.length,
    courses: courses.length
}

export {
    techIcons, 
    positOf, 
    softSkills, 
    projects, 
    colors,
    stats, 
    courses
}