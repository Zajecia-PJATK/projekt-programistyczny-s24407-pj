import express from "express"
import cors from "cors"
//import _app from "./api/app.route"

const app = express();

app.use(cors())
app.use(express.json())

//app.use("/api/app", _app)
app.use("*",(req, res)=>
res.status(404).json({error: "not found"}));

export default app;