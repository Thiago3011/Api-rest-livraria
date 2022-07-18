import app from './src/app.js'

const port = process.env.PORT  || 3000 // checa a porta que ta sendo usado na produção, se não tiver, usa a 3000

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${[port]}`)
})