import htmlSrc from "./assets/icons/frontSkills/html.png"
import cssSrc from "./assets/icons/frontSkills/css.png"
import tsSrc from "./assets/icons/frontSkills/ts.png"
import reactSrc from "./assets/icons/frontSkills/react.png"
import materialSrc from "./assets/icons/frontSkills/materialUI.png"
import nextJSSrc from "./assets/icons/frontSkills/NextJS.png"

import nodeSrc from "./assets/icons/backSkills/node.png"
import expressSrc from "./assets/icons/backSkills/express.png"
import postgressSrc from "./assets/icons/backSkills/postgress.png"
import sequelizeSrc from "./assets/icons/backSkills/sequelize.png"

import gitSrc from "./assets/icons/agileSkills/git.png"
import devopsSrc from "./assets/icons/agileSkills/devops.png"
import scrumSrc from "./assets/icons/agileSkills/scrum.png"
import mvcSrc from "./assets/icons/agileSkills/mvc.png"

import frontSrc from "./assets/img/positFront.png"
import backSrc from "./assets/img/positBack.png"
import agileSrc from "./assets/img/positAgil.png"

const techIcons = {
    front: [htmlSrc, cssSrc, tsSrc, reactSrc, materialSrc, nextJSSrc],
    back: [nodeSrc, expressSrc, postgressSrc, sequelizeSrc],
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

export {techIcons, positOf, softSkills}