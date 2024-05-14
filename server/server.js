import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import OpenAI from "openai";

dotenv.config()

const app = express();

app.use(express.json())
app.use(cors());

app.post('/', async (req, res) => {

  const openai = new OpenAI();

  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }, {
        role: "user", content: req.body.prompt
      }],
      model: "gpt-3.5-turbo",
    });

    const result = response.choices[0].message.content;
    res.send(result.json())

  } catch (error) {
    console.log(error);
  }

})

const PORT = process.env.PORT;
app.listen(3000, () => console.log("Listening on port " + PORT))