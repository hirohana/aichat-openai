export type User = {
  id: string;
  name: string;
  image: string;
};

export type ThemeList = Array<{
  id: string;
  theme: string;
  user_id: number;
  created_at: string;
}>;

export type Theme = {
  id: string;
  theme: string;
  user_id: number;
};

export type ErrorInformation = {
  error_message: string;
  error_code: number;
  user_id: number | null;
  request_url: string | null;
  stack_trace: string;
  sql_state: number;
};

export type ChatLog = {
  theme_id: string;
  sender_id: number;
  content: string;
};
