import htmlSrc from "./assets/icons/frontSkills/html.png"
import cssSrc from "./assets/icons/frontSkills/css.png"
import tsSrc from "./assets/icons/frontSkills/ts.png"
import reactSrc from "./assets/icons/frontSkills/react.png"
import materialSrc from "./assets/icons/frontSkills/materialUI.png"
import bootstrapSrc from "./assets/icons/frontSkills/bootstrap.png"
import jsSrc from "./assets/icons/frontSkills/js.png"
import nextSrc from "./assets/icons/frontSkills/NextJS.png"
import reactRouterDomSrc from "./assets/icons/frontSkills/reactRouterDom.png"

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
        name: "PokePI",
        thumbnail: pokePI1,
        images: [pokePI1, pokePI2, pokePI3, pokePI4],

        techStack: {
            cardList: [
                reactSrc,
                expressSrc,
                postgressSrc,
                sequelizeSrc
            ],

            fullList: [
                reactSrc,
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
        id: 2,
        name: "ClimApp",
        thumbnail: climApp1,
        images: [climApp1, climApp2],

        techStack: {
            cardList: [
                reactSrc,
                reactRouterDomSrc
                // expressSrc,
                // postgressSrc,
                // sequelizeSrc
            ],

            fullList: [
                reactSrc,
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
        id: 3,
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
                expressSrc,
                postgressSrc,
                sequelizeSrc
            ],

            fullList: [
                reactSrc,
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
        id: 4,
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
]

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

export {techIcons, positOf, softSkills, projects, stats, courses}