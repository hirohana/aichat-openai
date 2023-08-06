import { ChatLog } from "../types";
import { DataSource } from "./DataSource";

export class ChatLogs {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  public async selectByThemeId(themeId: string) {
    const query =
      "SELECT `content` as text, `sender` FROM txn_chat_logs as ch JOIN mst_senders as se ON ch.sender_id = se.id WHERE ch.theme_id = ? ORDER BY created_at;";
    const params = [themeId];

    const [result]: any = await this.dataSource.executeQuery(query, params);
    return result;
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

  public async deleteByThemeId(theme_id: string) {
    const query = "DELETE FROM txn_chat_logs WHERE theme_id = ?;";
    const params = [theme_id];

    const [result]: any = await this.dataSource.executeQuery(query, params);
    const isSuccess = result.affectedRows > 0;
    return isSuccess;
  }
}
