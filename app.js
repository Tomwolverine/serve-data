const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const cohortData = require('./cohorts')

app.use(express())
app.use(cors())

const findById = (params, data) => {
    for(let i = 0; i < data.length; i++) {
        let holderString = data[i].id.toString()
        if(params === holderString){
            return data[i]
        }
    } return null
}


app.get('/', (req,res,next) => {
    res.json({cohortData})
})

app.get('/:id',(req,res,next)=> {
    const cohort = findById(req.params.id,cohortData)
    if(cohort) {
        res.json({cohort})
    } else {
        res.json({
            error: {
                "message": "No record found!"
            }
        })
    }
})

app.listen(port,() => {
    console.log(`Hey yoooo I am listening on ${port}`)
})

