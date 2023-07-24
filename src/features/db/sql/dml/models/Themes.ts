import { DataSource } from "./DataSource";

import type { Theme, themeList } from "../types";

export class Themes {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  public async selectByUserId(userId: string): Promise<themeList> {
    const query =
      "SELECT `id`, `title`, `created_at` FROM txn_themes WHERE user_id = ? ORDER BY created_at DESC";
    const params = [userId];

    const [result]: [themeList] = await this.dataSource.executeQuery(
      query,
      params
    );
    return result;
  }

  // TODO txn_messagesとtxn_responsesテーブルを結合してtheme_idと一致するデータを取得するメソッド。
  public async select(id: string) {
    const query = "SELECT `id, title, created_at` FROM txn_themes WHERE id = ?";
    const params = [id];

    const [result]: any = await this.dataSource.executeQuery(query, params);
    const isExist = result.length > 0;
    return isExist;
  }

  public async insert(theme: Theme) {
    const { id, title, user_id } = theme;
    const query =
      "INSERT INTO txn_themes (`id`, `title`, `user_id`) VALUES (?, ?, ?)";
    const params = [id, title, user_id];

    const [result]: any = await this.dataSource.executeQuery(query, params);
    const isSuccess = result.affectedRows > 0;
    return isSuccess;
  }

  public delete(id: string) {}
}
