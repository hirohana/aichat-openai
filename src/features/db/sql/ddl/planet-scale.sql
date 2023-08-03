set time_zone = '+09:00';

DROP TABLE IF EXISTS `txn_users`;

CREATE TABLE `txn_users` (
  `id` int PRIMARY KEY AUTO_INCREMENT COMMENT 'ユーザーID',
  `name` varchar(50) NOT NULL UNIQUE COMMENT 'ユーザーの名称',
  `image_url` text COMMENT 'ユーザーのプロフィール写真',
  `del_flg` int(1) NOT NULL DEFAULT '0' COMMENT '削除フラグ(1: 削除、0: 有効)',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
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
  `theme` varchar(50) COMMENT "チャットのテーマ",
  `created_by` int NOT NULL COMMENT "テーマ作成者。user_idが入る。",
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT "テーマの作成日時"
);

DROP TABLE IF EXISTS `mst_senders`;

CREATE TABLE `mst_senders` (
  `id` int PRIMARY KEY AUTO_INCREMENT COMMENT "送信者の一意の識別子",
  `sender` varchar(20) NOT NULL COMMENT "送信者の名称",
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最終更新日時'
);

DROP TABLE IF EXISTS `txn_chat_logs`;

CREATE TABLE `txn_chat_logs` (
  `id` int PRIMARY KEY AUTO_INCREMENT COMMENT "チャットの一意の識別子",
  `theme_id` varchar(50) NOT NULL COMMENT "テーマの一意の識別子",
  `sender_id` int NOT NULL COMMENT "ユーザーorAIメッセージ作成者",
  `content` text NOT NULL COMMENT "ユーザーorAIが送信したメッセージ",
  `created_at` timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) COMMENT "メッセージの作成日時"
);

INSERT INTO mst_senders (`sender`) VALUES ("user");
INSERT INTO mst_senders (`sender`) VALUES ("assistant");