function foo(obj){
    // 1- la comprobación de que existan los atributos
    // 2- la comprobación de que min sea menor a max
    // 3- el filtrado

    
}

// min
// max
// games
// foo({
//     min: "1",
//     max: "8",
//     games: ["aaaaaa", "bbbbbb"]
// })


const objeto = {
    min: "3",
    max: "5",
    games: ["aaaaa", "bbbbbb"]
}

console.log(objeto)

if(!objeto.min){
    objeto.min = "1"
}

if(!objeto.max){
    objeto.max = "8"
}

if(!objeto.games){
    objeto.games = ["predeterminado"]
}

console.log(objeto)