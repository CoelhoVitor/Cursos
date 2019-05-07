db.createCollection("alunos")

db.alunos.insert(
    {
        "nome" : "Gabriela",
        "data_nascimento" : new Date(2001,02,31),
        "notas" : [10, 9, 4.5],
        "curso" : {
            "nome" : "Estética e Cosméticos"
        },
        "habilidades" : [
            {
                "nome" : "Depilação a cera",
                "nivel" : "Intermediário"
            }
        ]
    }
)

db.alunos.remove({
    "_id" : ObjectId("5ca2cc53412084d77ca2eea3")  
})

db.alunos.find().pretty()

db.alunos.find(
    {
        "nome" : "Gabriela" 
    }
).pretty()

// Procura pelos cursos que possuem aluno com nome Gabriela
db.alunos.find(
    {
        $or : [
            { "curso.nome" : "Ciência da Computação" },
            { "curso.nome" : "Estética e Cosmética" }
        ],
        "nome" : "Gabriela"
    }
)
db.alunos.find({
    "curso.nome" : {
        $in : ["Ciência da Computação", "Estética e Cosmética"]
    }
})

// O Update atualiza TODO o conteúdo dentro das chave, a partir do que
// for procurado no primeiro conjuto de {}.
// Para atualizar especificamente um dado, é necessário o uso do "$set"

// Por padrão, o Update atualiza a primeira instância encontrada
db.alunos.update(
    { "curso.nome" : "Ciência da Computação" },
    {
        $set : {
            "curso.nome" : "Ciência Da Computação"
        }
    }
)

// Ao por "multi : true", todos as instâncias encontradas serão atualizadas
db.alunos.update(
    { "curso.nome" : "Ciência da COmputação" },
    {
        $set : {
            "curso.nome" : "Ciência Da Computação"
        }
    }, {
        multi : true
    }
)

// Simplismente adiciona
db.alunos.update(
    { "_id" : ObjectId("5ca2cc53412084d77ca2eea3") },
    {
        $push : {
            notas : 8.5
        }
    }
)

// Adicioana cada valor separadamente "$each",
// no caso de "notas : [8.5, 3], seria adicionado um array em notas"
db.alunos.update(
    { "_id" : ObjectId("5ca2cc53412084d77ca2eea3") },
    {
        $push : {
            notas : { $each : [8.5, 3] }
        }
    }
)

// Greater Then
db.alunos.find({
    notas : { $gt : 5 }
})

// Retorna só uma instância
db.alunos.findOne({
    notas : { $gt : 5 }
})

// Ordena por ordem decrescente
db.alunos.find().sort({"nome" : -1})

// Ordena os 3 primeiros em ordem crescente
db.alunos.find().sort({"nome" : 1}).limit(3)

