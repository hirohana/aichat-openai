import mysql from "mysql2/promise";
import { DataSource } from "./DataSource";

/**
 * トランザクション制御を行わないテーブルに対するCRUD処理を行うためのクラスです。
 */
export class GenericTransaction {
  private connection: mysql.Connection | null = null;

  constructor(dataSource: DataSource) {
    this.connection = dataSource.getConnection();
  }

  public async performTransaction(callback: any) {
    if (!this.connection) return;

    try {
      await this.connection.beginTransaction();

      await callback();

      await this.connection.commit();
    } catch (error) {
      await this.connection.rollback();
      throw error;
    }
  }
}
