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

export {techIcons, positOf}