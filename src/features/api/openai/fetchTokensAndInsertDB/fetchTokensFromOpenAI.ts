import { OpenAIApi, Configuration } from "openai";

import { AI_MODEL_GPT_3_5, USER } from "src/const";

export async function fetchTokensFromOpenAI(
  userMessage: string,
  apiKey: string
) {
  const openAi = new OpenAIApi(new Configuration({ apiKey }));

  const response = await openAi.createChatCompletion({
    model: AI_MODEL_GPT_3_5,
    messages: [{ role: USER, content: userMessage }],
  });

  return response.data.choices[0].message;
}
