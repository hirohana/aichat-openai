DROP TABLE IF EXISTS `txn_users`;

set time_zone = '+09:00';

CREATE TABLE `txn_users` (
  `id` int PRIMARY KEY AUTO_INCREMENT COMMENT 'ユーザーID',
  `name` varchar(50) NOT NULL UNIQUE COMMENT 'ユーザーの名称',
  `image_url` text COMMENT 'ユーザーのプロフィール写真',
  `del_flg` int(1) NOT NULL DEFAULT '0' COMMENT '削除フラグ(1: 削除、0: 有効)',
  `updated_by` varchar(20) NOT NULL DEFAULT 'root' COMMENT '最終更新者',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最終更新日時'
);

CREATE TABLE `txn_error_logs` (
  `id` int PRIMARY KEY AUTO_INCREMENT COMMENT 'エラー番号',
  `error_message` varchar(100) COMMENT 'エラーメッセージ',
  `error_code` int COMMENT 'エラーコード',
  `user_id` int COMMENT 'ユーザー番号',
  `request_url` text COMMENT 'リクエストURL',
  `stack_trace` text COMMENT 'スタックトレース',
  `sql_state` int COMMENT 'SQLのエラーコード',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- START TRANSACTION;

INSERT INTO `txn_users` (`name`) VALUES
("test1"),
("test2"),
("test3"),
("Hirohana");

INSERT INTO `txn_error_log` (`error_message`, `error_code`, `user_id`, `request_url`, `stack_trace`) VALUES ("test", "test_code", 4, "http://localhost:3000/auth", "test_trace");

-- COMMIT;