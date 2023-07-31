import { ChatLog } from "../types";
import { DataSource } from "./DataSource";

export class ChatLogs {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  public async insert(message: ChatLog) {
    const { theme_id, sender_id, content } = message;

    const query =
      "INSERT INTO txn_chat_logs (`theme_id`, `sender_id`,`content`) VALUES(?, ?, ?)";
    const params = [theme_id, sender_id, content];

    const [result]: any = await this.dataSource.executeQuery(query, params);
    const isSuccess = result.affectedRows > 0;
    return isSuccess;
  }

  public delete(theme_id: string) {}
}
