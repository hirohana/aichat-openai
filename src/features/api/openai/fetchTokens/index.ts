import { OpenAIApi, Configuration } from "openai";

import {
  AI_MODEL_GPT_3_5,
  SERVER_ERROR_STATUS_CODE_500,
  STATUS_CODE_200,
  STATUS_CODE_500,
  USER,
} from "src/const";

import { verifyApiKey } from "./verifyApiKey";

export async function fetchTokens(userMessage: string) {
  const {
    apiKey,
    message: verifyMessage,
    status: verifyStatus,
  } = verifyApiKey();
  const hasApiKey = verifyStatus === STATUS_CODE_200;
  if (!hasApiKey) {
    return {
      message: verifyMessage,
      status: verifyStatus,
    };
  }

  const {
    tokens,
    message: errMessage,
    status,
  } = await getTokenFromOpenAI(userMessage, apiKey);

  return { tokens, errMessage, status };
}

export async function getTokenFromOpenAI(userMessage: string, apiKey: string) {
  const openAi = new OpenAIApi(new Configuration({ apiKey }));

  try {
    const response = await openAi.createChatCompletion({
      model: AI_MODEL_GPT_3_5,
      messages: [{ role: USER, content: userMessage }],
    });

    return {
      tokens: response.data.choices[0].message,
      status: STATUS_CODE_200,
    };
  } catch (err) {
    return {
      message: SERVER_ERROR_STATUS_CODE_500,
      status: STATUS_CODE_500,
    };
  }
}
