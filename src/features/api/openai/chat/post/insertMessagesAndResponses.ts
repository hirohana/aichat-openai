import { DataSource } from "src/features/db/sql/dml/models/DataSource";
import { ChatLogs } from "src/features/db/sql/dml/models/ChatLogs";

type Args = {
  dataSource: DataSource;
  themeId: string;
  userMessage: string;
  AIResponse: string;
};

export async function insertMessagesAndResponses({
  dataSource,
  themeId,
  userMessage,
  AIResponse,
}: Args) {
  const messagesTable = new ChatLogs(dataSource);
  await messagesTable.insert({
    theme_id: themeId,
    sender_id: 1,
    content: userMessage.trim(),
  });

  const responsesTable = new ChatLogs(dataSource);
  await responsesTable.insert({
    theme_id: themeId,
    sender_id: 2,
    content: AIResponse.trim(),
  });
}
