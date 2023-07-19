import { DataSource } from "./DataSource";
import type { User } from "../types/index";

export class Users {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }
  public async exist(name: User["name"]): Promise<boolean> {
    const query = "SELECT * FROM txn_users WHERE name = ?";
    const params = [name];

    // TODO [result]をany型ではなく適切な型に修正を行う。
    const [result]: any = await this.dataSource.executeQuery(query, params);
    const isExist = result.length > 0;
    this.dataSource.closeConnection();
    return isExist;
  }

  public async insert(user: User): Promise<boolean> {
    const query =
      "INSERT INTO txn_users (`name`, `image_url`, `updated_by`) VALUES (?, ?, ?)";
    const params = [user.name, user.image, user.name];

    // TODO [result]をany型ではなく適切な型に修正を行う。
    const [result]: any = await this.dataSource.executeQuery(query, params);
    const isSuccess = result.affectedRows > 0;
    this.dataSource.closeConnection();
    return isSuccess;
  }

  // TODO Google OAuthに登録されているユーザー情報が更新されることを考慮して作る必要があるかもしれない。
  public update(user: User) {}

  // TODO 物理削除(ソフトデリート)でユーザーを削除するメソッド。余裕があれば実装する。
  public delete() {}
}
