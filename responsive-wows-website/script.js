import {config} from "dotenv"
config()

import { Configuration, OpenAIApi } from "openai"

const openai = new OpenAIApi(new Configuration({
  apikey: process.env.API_KEY
}))

openai.createChatCompletion({
  model: "gpt-4",
  messages: [{role: "user", content: "Hello ChatGPT"}]
})
.then(res => {
  console.log(res.data.choices[0].message.content)
})

