import { DataSource } from "./DataSource";

import type { Theme, ThemeList } from "../types";

export class Themes {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  public async selectByUserId(userId: string): Promise<ThemeList> {
    const query =
      "SELECT `id`, `theme`, `created_at` FROM txn_themes WHERE created_by = ? ORDER BY created_at DESC";
    const params = [userId];

    const [result]: [ThemeList] = await this.dataSource.executeQuery(
      query,
      params
    );
    return result;
  }

  public async insert(themeObj: Theme) {
    const { id, theme, user_id } = themeObj;
    const query =
      "INSERT INTO txn_themes (`id`, `theme`, `created_by`) VALUES (?, ?, ?)";
    const params = [id, theme, user_id];

    const [result]: any = await this.dataSource.executeQuery(query, params);
    const isSuccess = result.affectedRows > 0;
    return isSuccess;
  }

  public async delete(id: string) {
    const query = "DELETE FROM txn_themes WHERE id = ?;";
    const params = [id];

    const [result]: any = await this.dataSource.executeQuery(query, params);
    const isSuccess = result.affectedRows > 0;
    return isSuccess;
  }
}
