import mysql from "mysql2/promise";
import { DataSource } from "./DataSource";

export class TransactionManager {
  private connection: mysql.Connection | null = null;

  constructor(private dataSource: DataSource) {}

  /**
   * トランザクションを使用する場合は呼び出し側でDataSourceのconnectionを閉じるメソッド`closeConnection`を呼び出してください。
   */
  public async beginTransaction() {
    this.connection = this.dataSource.getConnection();
    await this.connection.beginTransaction();
  }

  /**
   * トランザクションを使用する場合は呼び出し側でDataSourceのconnectionを閉じるメソッド`closeConnection`を呼び出してください。
   */
  public async commit() {
    if (!this.connection) {
      throw new Error("Transaction not started.");
    }
    await this.connection.commit();
    this.connection = null;
  }

  /**
   * トランザクションを使用する場合は呼び出し側でDataSourceのconnectionを閉じるメソッド`closeConnection`を呼び出してください。
   */
  public async rollback() {
    if (!this.connection) {
      throw new Error("Transaction not started.");
    }
    await this.connection.rollback();
    this.connection = null;
  }
}
