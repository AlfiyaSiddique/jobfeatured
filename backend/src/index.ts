import express from "express"
import router from "./routes/jobRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', router)


app.get("/", (req,res)=>{
    res.json("Job Feature server is running")
})

app.listen(port, ()=>{
    console.log("Server up and running on port:", port)
})
