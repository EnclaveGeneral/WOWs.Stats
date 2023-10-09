import { OpenAI } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const openai = new OpenAI({apiKey: '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'});

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/", async(req, req) => {

  const {message} = req.body;

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {role: "user", content: "Hello World"},
    ]
  })

  res.json({
    completion: completion.data.choices[0].message
  })

});

app.listen(port, () => {
  console.log('Example app listening at http://localhost:${port}');
});