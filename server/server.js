import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const app = express();

app.use(express.json())
app.use(cors());

app.post('/', (req, res) => {
  const data = req.body
  console.log(data);
})

const PORT = process.env.PORT;
app.listen(3000, () => console.log("Listening on port " + PORT))