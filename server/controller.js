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

    getMegalithByName: (req, res) => {
        const { megalith_name } = req.params
        const megalith = megaliths.find((element) => element.name === +megalith_name)

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

    editMegalithName: (req, res) => {
        const {megalith_id} = req.params
        const {newName} = req.body
        
        const index = megaliths.findIndex((elem) => elem.id === +megalith_id)

        if (index === -1){
            return res.status(404).send('Megalith not found.')
        }

        megaliths[index].name = newName

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