// INFO アプリケーション全体で使う定数を入れる。

// OpenAI
export const API_KEY = "api_key";
export const AI_MODEL_GPT_3_5 = "gpt-3.5-turbo";

// Google Auth
export const GOOGLE = "google";
export const REGISTER_WITH_GOOGLE = "Register With Google";
export const CONTINUE_WITH_GOOGLE = "Continue With Google";
export const WELCOME_BACK = "Welcome Back!!";
export const PLEASE_REGISTER = "Please Register!!";

// URL
export const HOME = "/";
export const LOGIN = "login";
export const CALLBACK_URL = "callbackUrl";

// CharacterMessage Judgement
export const USER = "user";
export const ASSISTANT = "assistant";

// Status Code
export const STATUS_CODE_200 = 200;
export const STATUS_CODE_400 = 400;
export const STATUS_CODE_401 = 401;
export const STATUS_CODE_403 = 403;
export const STATUS_CODE_404 = 404;
export const STATUS_CODE_500 = 500;

// Info Message
export const REGISTER_API_KEY = "APIキーが保存されました。";
export const DELETE_API_KEY = "APIキーが削除されました。";

// Error Message
export const RE_LOGIN_AND_RE_QUEST_MESSAGE =
  "エラーが発生しました。時間をおいて再度リクエストを送信してみてください。";
export const RE_INPUT_APIKEY_TYPING_WRONG_TOKEN =
  "APIキーを打ち間違えている可能性があります。もう一度APIキーを入力しなおしてください。";
export const LOGIN_AND_RE_REQUEST_MESSAGE =
  "ログインを行ってから再度メッセージを送信してください。";
export const EXPIRED_API_KEY_AND_NOT_REGISTER_API_KEY =
  "APIキーの有効期限が切れている or APIキーが登録されていません。";
export const SERVER_ERROR_STATUS_CODE_500 =
  "サーバー側でエラーが発生しました。時間を置いて再度お試しください。";
