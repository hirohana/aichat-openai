import mysql from "mysql2/promise";
import { DataSource } from "./DataSource";

/**
 * トランザクション制御を行わないテーブルに対するCRUD処理を行うためのクラスです。
 */
export class GenericQuery {
  private connection: mysql.Connection | null = null;
  private dataSource: DataSource | null = null;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  public async performQuery(callback: any) {
    this.connection = await this.dataSource!.getConnection();
    if (!this.connection) return;

    try {
      await callback();
    } catch (err) {
      throw err;
    }
  }
}
