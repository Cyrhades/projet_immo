-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 24 nov. 2023 à 08:33
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `immo`
--

-- --------------------------------------------------------

--
-- Structure de la table `realty`
--

DROP TABLE IF EXISTS `realty`;
CREATE TABLE IF NOT EXISTS `realty` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11)  NOT NULL,
  `id_contact` int(11)  NOT NULL,
  `address1` varchar(80) NOT NULL,
  `address2` varchar(80) NOT NULL,
  `zipcode` varchar(10) NOT NULL,
  `town` varchar(120) NOT NULL,
  `info_address` text NOT NULL,
  `type` int(11) NOT NULL DEFAULT '1',
  `price` int(11) NOT NULL DEFAULT '0',
  `area` int(11) NOT NULL DEFAULT '0',
  `room` int(11) NOT NULL DEFAULT '0',
  `info` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
