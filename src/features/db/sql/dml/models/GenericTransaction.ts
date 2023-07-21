import mysql from "mysql2/promise";
import { DataSource } from "./DataSource";

/**
 * トランザクション制御を行ってCRUD処理をするめのクラスです。
 */
export class GenericTransaction {
  private connection: mysql.Connection | null = null;
  private dataSource: DataSource | null = null;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  public async performTransaction(callback: any) {
    this.connection = await this.dataSource!.getConnection();

    try {
      await this.connection!.beginTransaction();

      await callback();

      await this.connection!.commit();
    } catch (err) {
      await this.connection!.rollback();
      throw err;
    }
  }
}
