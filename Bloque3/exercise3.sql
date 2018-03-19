-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 29-09-2017 a las 14:17:33
-- Versión del servidor: 10.1.26-MariaDB-0+deb9u1
-- Versión de PHP: 7.0.19-1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `exercise3`
--
CREATE DATABASE IF NOT EXISTS `exercise3` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `exercise3`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `event`
--

CREATE TABLE `event` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(200) NOT NULL,
  `date` datetime NOT NULL,
  `description` varchar(4000) NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `image` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `event`
--

INSERT INTO `event` (`id`, `name`, `date`, `description`, `price`, `image`) VALUES
(2, 'This is an event', '2018-09-24 00:00:00', 'This is the description of the event\nWhich has many lines\nAt least three....', '24.95', '206/2aafb87911d7641787df5fe0f833777a49f64.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`),
  ADD KEY `name` (`name`),
  ADD KEY `date` (`date`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `event`
--
ALTER TABLE `event`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
