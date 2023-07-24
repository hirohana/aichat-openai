import { DataSource } from "src/features/db/sql/dml/models/DataSource";
import { Messages } from "src/features/db/sql/dml/models/Messages";
import { Responses } from "src/features/db/sql/dml/models/Responses";

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
  const messagesTable = new Messages(dataSource);
  await messagesTable.insert({
    theme_id: themeId,
    content: userMessage.trim(),
  });

  const responsesTable = new Responses(dataSource);
  await responsesTable.insert({
    theme_id: themeId,
    content: AIResponse.trim(),
  });
}
