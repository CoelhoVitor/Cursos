db.alunos.aggregate([
    {
        $geoNear: {
            near: {
                coordinates: [],
                type: "Point"
            },
            distanceField: "distancia.calculada",
            spherical: true,
            num: 4
        }
    },
    { $skip: 1 }
])

db.alunos.createIndex({
    localizacao : "2dsphere"
})



db.alunos.aggregate({
    $geoNear : {
        near : {
            coordinates: [-23.955017, -46.342010],
            type : "Point"
        },
        distanceField : "distancia.calculada",
        spherical : true
    }
})