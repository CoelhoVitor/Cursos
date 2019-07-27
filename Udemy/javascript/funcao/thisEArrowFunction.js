let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports) // this

// mesmo com bind, o arrow function mantém a referência do objeto que foi originalmente atribuído
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)