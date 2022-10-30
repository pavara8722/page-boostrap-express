const app = require("./app/app")
const port = app.get("port")
app.listen(port, ()=>{
    console.log(`------server on port ${port}`)
})

