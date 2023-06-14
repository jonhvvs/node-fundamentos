import express, { request, response } from "express"

const app = express()
const PORT = 3000

app.listen (PORT,() => console.log("servidor rodando"))

app.use(express.json())

//Route Params: pega oque vier dos parametros da requisição.
//Query Params: pega oque vier da Query da requisição.
//Body: Params: um objeto/ geralmente (JSON).

// envia um objeto por meio do body
app.post("/teste",(request,response)=>{
    const body = request.body
    response.send(body)
    console.log(body)
  })


         
// Pega por meio da query da requisição
app.get("/teste",(request,response) =>{
    const query = request.query
    response.send(query)
})

// Pega pelo Route params

app.put("/teste/:id",(request,response)=>{
 const {id} = request.params
 response.send(id)
 
})