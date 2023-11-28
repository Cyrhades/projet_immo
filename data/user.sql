CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(120) NOT NULL,
  `password` varchar(128) NOT NULL,
  `civility` enum('1','2') NOT NULL DEFAULT '1',
  `lastname` varchar(80) DEFAULT NULL,
  `firstname` varchar(80) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `user` ADD PRIMARY KEY (`id`);

ALTER TABLE `user` MODIFY `id` int NOT NULL AUTO_INCREMENT;
