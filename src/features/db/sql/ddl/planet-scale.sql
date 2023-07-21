set time_zone = '+09:00';

DROP TABLE IF EXISTS `txn_users`;

CREATE TABLE `txn_users` (
  `id` int PRIMARY KEY AUTO_INCREMENT COMMENT 'ユーザーID',
  `name` varchar(50) NOT NULL UNIQUE COMMENT 'ユーザーの名称',
  `image_url` text COMMENT 'ユーザーのプロフィール写真',
  `del_flg` int(1) NOT NULL DEFAULT '0' COMMENT '削除フラグ(1: 削除、0: 有効)',
  `updated_by` varchar(20) NOT NULL DEFAULT 'root' COMMENT '最終更新者',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最終更新日時'
);

DROP TABLE IF EXISTS `txn_error_logs`;

CREATE TABLE `txn_error_logs` (
  `id` int PRIMARY KEY AUTO_INCREMENT COMMENT 'エラー番号',
  `error_message` varchar(100) COMMENT 'エラーメッセージ',
  `error_code` int COMMENT 'エラーコード',
  `user_id` int COMMENT 'ユーザー番号',
  `request_url` text COMMENT 'リクエストURL',
  `sql_state` int COMMENT 'SQLのエラーコード',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `stack_trace` text COMMENT 'スタックトレース'
);

DROP TABLE IF EXISTS `txn_themes`;

CREATE TABLE `txn_themes` (
  `id` varchar(50) PRIMARY KEY COMMENT "テーマの一意の識別子",
  `title` varchar(50) COMMENT "チャットのタイトル",
  `user_id` int NOT NULL COMMENT "ユーザーの一意の値",
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT "メッセージの作成日時"
);

DROP TABLE IF EXISTS `txn_messages`;

CREATE TABLE `txn_messages` (
  `id` int PRIMARY KEY AUTO_INCREMENT COMMENT "ユーザーメッセージの一意の識別子",
  `theme_id` varchar(50) NOT NULL COMMENT "テーマの一意の識別子",
  `content` text NOT NULL COMMENT "ユーザーメッセージの内容",
  `created_at` timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) COMMENT "メッセージの作成日時"
);

DROP TABLE IF EXISTS `txn_responses`;

CREATE TABLE `txn_responses` (
  `id` int PRIMARY KEY AUTO_INCREMENT COMMENT "AI返答の一意の識別子",
  `theme_id` varchar(50) NOT NULL COMMENT "テーマの一意の識別子",
  `content` text NOT NULL COMMENT "AIの返答内容",
  `created_at` timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) COMMENT "AIの返答日時"
);

-- START TRANSACTION;

INSERT INTO `txn_users` (`name`) VALUES
("test1"),
("test2"),
("test3");

INSERT INTO `txn_error_logs` (`error_message`, `error_code`, `user_id`, `request_url`, `stack_trace`) VALUES ("test", 2020, 4, "http://localhost:3000/auth", "test_trace");

-- COMMIT;