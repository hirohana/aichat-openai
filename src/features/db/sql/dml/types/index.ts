export type User = {
  id: string;
  name: string;
  image: string;
};

export type themeList = Array<{
  id: string;
  title: string;
  user_id: number;
  created_at: string;
}>;

export type ErrorInformation = {
  error_message: string;
  error_code: number;
  user_id: number | null;
  request_url: string | null;
  stack_trace: string;
  sql_state: number;
};

export type Theme = {
  id: string;
  title: string;
  user_id: number;
};

export type UserMessage = {
  theme_id: string;
  content: string;
};

export type AIResponse = {
  theme_id: string;
  content: string;
};
