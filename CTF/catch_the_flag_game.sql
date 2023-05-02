-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 11, 2023 at 11:54 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `catch_the_flag_game`
--

-- --------------------------------------------------------

--
-- Table structure for table `levels`
--

CREATE TABLE `levels` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `hint` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `points` int(6) NOT NULL,
  `pass` varchar(30) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `levels`
--

INSERT INTO `levels` (`id`, `title`, `hint`, `picture`, `points`, `pass`, `link`) VALUES
(1, 'The introduction', 'Here you do not need help =)', NULL, 5, '/l1-z4c1470k\\', NULL),
(2, 'Encoding', 'You can decode these files?', NULL, 15, '/l2-3nc0d1100100110ng\\', 'https://drive.google.com/file/d/1BJUzT9yk-NDdwzLUwj6sbMO3D2rpaYVB/view?usp=sharing'),
(3, 'Cat ?', NULL, NULL, 10, '/l3-m30w\\', NULL),
(4, 'Cat ¿?', NULL, NULL, 10, '/l4-$73gan0gr4f1k\\', NULL),
(5, 'Whos this?', 'This is Petra Bottová to explore her photo and find out what social network she stores his photos', NULL, 15, '/l5-1n574gr4m1k\\', NULL),
(6, 'petraAgain', 'Peter is known to give people tasks, solve them.', NULL, 15, '/l6-dzt22\\', NULL),
(7, 'Discord', 'On the Discord Server, the user \ "MichalPriemerna \" saved the folder Find it', NULL, 25, '/l7-:d1sc0rd807:\\', 'https://discord.gg/Tvcq7a7RAW'),
(8, 'Communication', 'We have caught communication, you will find a password? ', NULL, 20, '/l8-w1r3$h.4rk\\', 'https://drive.google.com/file/d/1dP1j30Gew_LFKymRvFd1DZ2Z86i3XJ-C/view?usp=sharing'),
(9, 'Linux', 'In a public local network, someone tried to break into the SSH Linux server, vieš zistiť kedy sa mu podarilo preniknúť? Heslo vo forme HH-MM-SS', NULL, 5, '22:59:50', 'https://drive.google.com/file/d/1aXZC3RLHV935pEZXefIu-QFuM1t_VMj5/view?usp=sharing'),
(10, 'We know the characters', 'Try to decode this message', NULL, 5, 'enchantmcpass', 'https://drive.google.com/file/d/1q9M-No7RAVioeqB0ClJBMisaQbB4GXN0/view?usp=sharing'),
(11, 'PHP sites are fine', 'Michal Average has made a page.Find someone interesting.', NULL, 25, '/l11-=)$qlinject10n=)\\', 'http://178.40.39.207/');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `points` int(6) DEFAULT NULL,
  `role` varchar(10) NOT NULL DEFAULT 'hrac'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_levels`
--

CREATE TABLE `user_levels` (
  `userID` int(11) DEFAULT NULL,
  `levelID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `levels`
--
ALTER TABLE `levels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
