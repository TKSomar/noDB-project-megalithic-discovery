const megaliths = require('../src/data/Megaliths.json')

let id = megaliths[megaliths.length -1].id + 1

module.exports = {
    getAllMegaliths: (req, res) => {
        const { name } = req.query

        if (name) {
            const filteredMegaliths = megaliths.filter((element) =>
                element.name.includes(name)
            )
            res.status(200).send(filteredMegaliths)
        } else {
            res.status(200).send(megaliths)
        }
    },

    getMegalithById: (req, res) => {
        const { megalith_id } = req.params
        const megalith = megaliths.find((element) => element.id === +megalith_id)

        if (megalith) {
            res.status(200).send(megalith)
        } else {
            res.status(404).send('Megalith not found.')
        }
    },

    createMegalith: (req, res) => {
        const {name, details, image} = req.body

        const newMegalith = {id, name, details, image}

        megaliths.push(newMegalith)

        id++
    },

    editMegalith: (req, res) => {
        const {megalith_id} = req.params
        const {name, details, image} = req.body
        
        const index = megaliths.findIndex((elem) => elem.id === +megalith_id)

        if (index === -1){
            return res.status(404).send('Megalith not found.')
        }

        const updatedMegalith = {
            id: +megalith_id,
            name: name || megaliths[index].name,
            details: details || megaliths[index].details,
            image: image || megaliths[index].image
        }

        megaliths[index] = updatedMegalith

        res.status(200).send(megaliths)
    },
    deleteMegalith: (req, res) => {
        const {megalith_id} = req.params
        const index = megaliths.findIndex(elem => elem.id === +megalith_id)

        if (index === -1){
            return res.status(404).send('Megalith not found.')
        }

        megaliths.splice(index, 1)

        res.status(200).send(megaliths)
    },

}