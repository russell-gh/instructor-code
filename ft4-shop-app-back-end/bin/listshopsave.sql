-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2023 at 03:22 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `listshopsave`
--

-- --------------------------------------------------------

--
-- Table structure for table `tokens`
--

CREATE TABLE `tokens` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `token` varchar(256) NOT NULL,
  `entry_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tokens`
--

INSERT INTO `tokens` (`id`, `user_id`, `token`, `entry_date`) VALUES
(1, 3, '4233776660533691701265665977', '2023-11-29 13:47:45'),
(2, 3, '4751817510116001701265676194', '2023-11-29 13:47:56'),
(3, 3, '7511035006312121701265676374', '2023-11-29 13:47:56'),
(4, 3, '9484423748809911701265676577', '2023-11-29 13:47:56'),
(5, 3, '5108542070993361701265676821', '2023-11-29 13:47:56'),
(6, 3, '6021041768418491701265677065', '2023-11-29 13:47:57'),
(7, 3, '566327677140121701265677235', '2023-11-29 13:47:57'),
(8, 3, '2583278224293261701265677417', '2023-11-29 13:47:57'),
(9, 3, '3221986434164391701265677628', '2023-11-29 13:47:57'),
(10, 3, '8546528567400621701265677860', '2023-11-29 13:47:57'),
(11, 3, '1395022473429081701265678055', '2023-11-29 13:47:58'),
(12, 3, '5673047789722621701265678273', '2023-11-29 13:47:58'),
(13, 3, '3882133746176581701265678471', '2023-11-29 13:47:58'),
(14, 3, '8636526089453451701265678688', '2023-11-29 13:47:58'),
(15, 3, '8277864966369901701265678898', '2023-11-29 13:47:58'),
(16, 3, '8072374762680021701265679093', '2023-11-29 13:47:59'),
(17, 3, '9695495243552591701265679307', '2023-11-29 13:47:59'),
(18, 3, '7855499018757561701266102927', '2023-11-29 13:55:02'),
(19, 6, '9420760789078511701266424144', '2023-11-29 14:00:24'),
(20, 6, '4386311398475411701266472324', '2023-11-29 14:01:12'),
(21, 6, '4022031205052641701266480356', '2023-11-29 14:01:20'),
(22, 6, '5338077373275771701267042003', '2023-11-29 14:10:42'),
(23, 6, '8559000736303551701267335026', '2023-11-29 14:15:35'),
(24, 6, '4393987398979641701267401833', '2023-11-29 14:16:41');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(331) NOT NULL,
  `password` varchar(256) NOT NULL,
  `entry_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `entry_date`) VALUES
(6, 'a@b.c', '3edff2f674616259b3364248a51628d4f52d842d3198e6ecab78f69a89c3f737', '2023-11-29 13:58:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
