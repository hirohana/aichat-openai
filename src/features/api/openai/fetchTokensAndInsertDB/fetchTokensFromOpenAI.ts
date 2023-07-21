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
  // try {
  //   const response = await openAi.createChatCompletion({
  //     model: AI_MODEL_GPT_3_5,
  //     messages: [{ role: USER, content: userMessage }],
  //   });

  //   return {
  //     tokens: response.data.choices[0].message,
  //     status: STATUS_CODE_200,
  //   };
  // } catch (err) {
  //   return {
  //     message: SERVER_ERROR_STATUS_CODE_500,
  //     status: STATUS_CODE_500,
  //   };
  // }
}
