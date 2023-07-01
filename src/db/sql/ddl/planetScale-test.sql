DROP TABLE IF EXISTS `users`;

set time_zone = '+09:00';

CREATE TABLE `users` (
  `id` int(10) PRIMARY KEY AUTO_INCREMENT COMMENT 'ユーザーID',
  `nickname` varchar(10) NOT NULL COMMENT 'ニックネーム',
  `email` varchar(100) NOT NULL COMMENT 'Eメールアドレス',
  `password` varchar(20) NOT NULL COMMENT 'パスワード',
  `del_flg` int(1) NOT NULL DEFAULT '0' COMMENT '削除フラグ(1: 削除、0: 有効)',
  `updated_by` varchar(20) NOT NULL DEFAULT 'root' COMMENT '最終更新者',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最終更新日時'
);

-- START TRANSACTION;

INSERT INTO `users` (`nickname`, `email`, `password`) VALUES
("test1", "test1@gmail.com", "test1"),
("test2", "test2@gmail.com", "test2"),
("test3", "test3@gmail.com", "test3");

-- COMMIT;