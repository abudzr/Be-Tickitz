-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 03 Apr 2021 pada 14.31
-- Versi server: 10.4.17-MariaDB
-- Versi PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tickitz`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `cinemas`
--

CREATE TABLE `cinemas` (
  `idCinemas` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `location` varchar(32) NOT NULL,
  `image` varchar(255) NOT NULL,
  `adress` text NOT NULL,
  `price` int(11) NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `cinemas`
--

INSERT INTO `cinemas` (`idCinemas`, `name`, `location`, `image`, `adress`, `price`, `createAt`, `updatedAt`) VALUES
(1, 'ebv.id', 'Purwokerto', 'http://localhost:8000/img/1617213860036-cardSchedule.png', ' Whatever street No.12, South Purwokerto', 10, '2021-03-31 16:04:14', '2021-03-31 18:06:22'),
(2, 'CineOne21', 'Jakarta', 'http://localhost:8000/img/1617214218958-cardSchedule1.png', 'Downcare street  No. 21, East Jakarta', 10, '2021-03-31 15:58:07', '2021-04-02 09:47:10'),
(3, 'Hiflix', 'Bandung', 'http://localhost:8000/img/1617446689668-cardSchedu...', 'Colonel street No. 2, East Bandung', 10, '2021-03-31 15:58:07', '2021-04-03 10:45:56'),
(4, 'ebv.id', 'Jakarta', 'http://localhost:8000/img/1617213860036-cardSchedule.png', 'Whatever street No.12, South Jakarta', 10, '2021-03-31 18:04:20', '2021-04-02 09:57:29'),
(5, 'ebv.id', 'Bandung', 'http://localhost:8000/img/1617357302592-cardSchedule.png', 'Whatever street No.12, South Bandung', 10, '2021-04-02 09:55:02', '2021-04-02 09:57:21'),
(6, 'CineOne21', 'Puwokerto', 'http://localhost:8000/img/1617357413056-cardSchedule1.png', 'Whatever street No.12, South Purwokerto', 10, '2021-04-02 09:56:53', '2021-04-02 09:57:42'),
(80, 'Hiflix', 'Puwokerto', 'http://localhost:8000/img/1617446689668-cardSchedule2.png', 'Whatever street No.12, South Purwokerto', 10, '2021-04-03 10:44:49', '2021-04-03 10:44:49');

-- --------------------------------------------------------

--
-- Struktur dari tabel `genre`
--

CREATE TABLE `genre` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `genre`
--

INSERT INTO `genre` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Crime', '2021-03-31 16:10:59', '2021-03-31 16:11:08'),
(2, 'Drama', '2021-03-31 16:10:59', '2021-03-31 16:11:14'),
(3, 'Action', '2021-03-31 16:10:59', '2021-03-31 16:12:15'),
(4, 'Sci-Fi', '2021-03-31 16:10:59', '2021-03-31 16:12:11'),
(5, 'Thriller', '2021-03-31 16:10:59', '2021-03-31 16:11:44'),
(6, 'Adventure', '2021-03-31 16:10:59', '2021-03-31 16:11:41'),
(7, 'Animation', '2021-03-31 16:10:59', '2021-03-31 16:11:38'),
(8, 'Sport', '2021-03-31 16:10:59', '2021-03-31 16:11:36'),
(9, 'Family', '2021-03-31 16:10:59', '2021-03-31 16:11:32'),
(10, 'Comedy', '2021-03-31 16:10:59', '2021-03-31 16:11:29'),
(11, 'Horror', '2021-03-31 16:10:59', '2021-03-31 16:11:26'),
(12, 'War', '2021-03-31 16:10:59', '2021-03-31 16:11:24'),
(13, 'Fantasy', '2021-03-31 16:10:59', '2021-03-31 16:11:55'),
(14, 'Romance', '2021-04-02 11:03:30', '2021-04-02 11:03:30');

-- --------------------------------------------------------

--
-- Struktur dari tabel `movie`
--

CREATE TABLE `movie` (
  `id` int(11) NOT NULL,
  `movieName` varchar(64) NOT NULL,
  `releaseDate` date NOT NULL,
  `directedBy` varchar(64) NOT NULL,
  `duration` time NOT NULL,
  `casts` varchar(100) NOT NULL,
  `synopsis` varchar(1000) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `category` varchar(50) NOT NULL,
  `status` varchar(64) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `movie`
--

INSERT INTO `movie` (`id`, `movieName`, `releaseDate`, `directedBy`, `duration`, `casts`, `synopsis`, `image`, `category`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Spider-Man: Homecoming', '2021-03-03', 'Jon Watss', '02:00:00', 'Tom Holland, Michael Keaton, Robert Downey Jr., ...', 'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.', 'https://bookingtickitz.netlify.app/assets/img/spider.png', 'PG-13', 'nowShowing', '2021-04-02 14:07:18', '2021-04-02 17:37:39'),
(2, 'Black Widow', '2021-03-08', 'Cate Shortland', '02:15:02', ' Scarlett Johansson, Florence Pugh, David Harbour', 'At birth the Black Widow \"aka Natasha Romanova\" is given to the KGB, which grooms her to become its ', 'https://bookingtickitz.netlify.app/assets/img/Black.png', 'PG-13', 'nowShowing', '2021-04-02 14:07:18', '2021-04-02 17:42:02'),
(3, 'John Wick: Chapter 3 - Parabellum', '2021-03-04', 'Chad Stahelski', '02:15:02', 'Keanu Reeves, Halle Berry, Ian McShane', 'In this third installment of the adrenaline-fueled action franchise, skilled assassin John Wick (Kea', 'https://bookingtickitz.netlify.app/assets/img/johnwick.png', 'PG-13', 'nowShowing', '2021-04-02 14:07:18', '2021-04-02 17:42:09'),
(4, 'Demon Slayer', '2021-03-07', '	Ufotable', '02:15:02', 'Tanjiro, Nezuko', 'Ceritanya mengisahkan tentang Tanjiro', 'https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg/220px-Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg', 'PG-13', 'upComing', '2021-04-02 14:07:18', '2021-04-03 03:52:37'),
(5, 'Attack Of Titan', '2021-03-07', 'Hajime Isayama', '02:15:02', 'Eren Jaeger, Mikasa Ackerman, Armin Arlert', 'Dalam suatu sejarah alternatif sekitar 1800 tahun yang lalu, seorang manusia bernama Ymir Fritz berubah menjadi raksasa mirip manusia yang dikenal sebagai Titan (巨人 Kyojin) setelah melakukan perjanjian dengan \"Iblis dari Seluruh Bumi\". ', 'https://foto.kontan.co.id/vfg5YWYH_jnPVtMMi-hnX9QO3G8=/smart/2020/12/28/95694032p.jpg', 'PG-13', 'upComing', '2021-04-02 14:07:18', '2021-04-02 17:42:44'),
(6, 'The Witches', '2021-03-08', 'Robert Zemeckis', '02:15:02', 'Anne Hathaway, Octavia Spencer, Stanley Tucci', 'A young boy and his grandmother have a run-in with a coven of witches and their leader.', 'https://bookingtickitz.netlify.app/assets/img/witches.png', 'PG-13', 'nowShowing', '2021-04-02 14:07:18', '2021-04-03 03:55:36'),
(7, 'Transformers last knight', '2021-03-18', 'David Benioff, D.B. Weiss', '02:15:02', 'Shia LaBeouf, Megan Fox', 'The film opens with Optimus Prime (Peter Cullen), heroic leader of the benevolent Autobots, describi', 'https://upload.wikimedia.org/wikipedia/en/b/bf/Transformers_dark_of_the_moon_ver5.jpg', 'PG-13', 'upComing', '2021-04-02 14:07:18', '2021-04-02 17:42:47'),
(8, 'Tenet', '2021-03-15', 'Christopher Nolan', '02:15:02', ' John David Washington, Robert Pattinson, Elizabeth Debicki', 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.', 'https://bookingtickitz.netlify.app/assets/img/tenet.png', 'PG-13', 'nowShowing', '2021-04-02 14:07:18', '2021-04-02 17:42:25'),
(9, 'Money Heist ', '2021-04-28', 'David Benioff, D.B. Weiss', '02:01:00', 'Shia LaBeouf, Megan Fox', 'The film opens with Optimus Prime (Peter Cullen), heroic leader of the benevolent Autobots, describing in a voice-over the destruction of the Transformers\' home world, Cybertron. It was destroyed by the evil Decepticon leader Megatron (Hugo Weaving) in his quest to obtain the All Spark, a cube-like artifact that can create life.', 'http://localhost:8000/img/1617418407389-Money_Heist_Poster.jpg', 'PG - 14', 'upComing', '2021-04-02 14:07:18', '2021-04-03 02:53:27'),
(19, 'Avengers: Endgame', '2021-05-28', 'Anthony Russo, Joe Russo', '03:01:00', 'Robert Downey Jr., Chris Evans, Mark Ruffalo', 'In the opening, Clint Barton is teaching his daughter archery on his secluded farm while his wife prepares a picnic lunch for them. Suddenly, Clint\'s daughter vanishes and the rest of Clint\'s family disintegrates, along with half of all life across the universe, the result of Thanos\' snapping his fingers after acquiring all six Infinity Stones. Nebula and Tony Stark are stranded in space following their defeat by Thanos on Titan, but are returned to Earth by Carol Danvers and reunited with Natasha Romanoff, Bruce Banner, Steve Rogers, Rocket, Thor, and James Rhodes. The team formulates a plan to steal the Infinity Stones back from Thanos and use them to reverse his actions, but learn upon finding him that he had used the stones a second time to destroy them, preventing their further use. He tells the remaining Avengers that he did so to avoid using the Stones for further nefarious purposes. Enraged, Thor cuts off Thanos\' head, saying it\'s what he should have done in Wakanda.', 'http://localhost:8000/img/1617416683850-Avengers_Endgame_poster.jpg', 'PG-13', 'upComing', '2021-04-03 02:24:43', '2021-04-03 02:24:43');

-- --------------------------------------------------------

--
-- Struktur dari tabel `movie_genre`
--

CREATE TABLE `movie_genre` (
  `id` int(11) NOT NULL,
  `idMovie` int(11) NOT NULL,
  `idGenre` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `movie_genre`
--

INSERT INTO `movie_genre` (`id`, `idMovie`, `idGenre`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2, '2021-03-30 06:13:49', '2021-04-02 18:31:51'),
(2, 1, 3, '2021-03-30 06:13:49', '2021-04-02 18:31:54'),
(3, 1, 6, '2021-03-30 06:13:49', '2021-04-02 18:31:57'),
(4, 2, 1, '2021-03-30 06:13:49', '2021-04-02 18:32:01'),
(5, 2, 2, '2021-03-30 06:13:49', '2021-04-02 18:32:05'),
(6, 2, 3, '2021-03-30 06:18:48', '2021-04-02 18:32:08'),
(7, 3, 4, '2021-03-30 06:18:48', '2021-04-02 18:32:15'),
(8, 3, 5, '2021-03-30 06:18:48', '2021-04-02 18:32:17'),
(9, 4, 6, '2021-03-30 06:21:39', '2021-04-02 18:32:20'),
(10, 4, 9, '2021-03-30 06:21:39', '2021-04-02 18:32:24'),
(11, 4, 13, '2021-03-30 06:21:39', '2021-04-02 18:32:27'),
(12, 7, 2, '2021-03-30 06:21:39', '2021-04-02 18:32:31'),
(13, 7, 3, '2021-03-30 06:21:39', '2021-04-02 18:32:36'),
(14, 7, 6, '2021-03-30 06:21:39', '2021-04-02 18:32:38'),
(15, 8, 1, '2021-03-30 08:17:34', '2021-04-02 18:32:42'),
(16, 8, 3, '2021-03-30 08:17:34', '2021-04-02 18:32:44'),
(17, 8, 5, '2021-03-30 08:17:34', '2021-04-02 18:32:48'),
(18, 9, 1, '2021-03-30 08:19:04', '2021-04-03 02:42:45'),
(19, 9, 3, '2021-03-30 08:19:04', '2021-04-03 02:42:47'),
(21, 5, 13, '2021-04-02 15:11:08', '2021-04-02 18:32:59'),
(22, 5, 7, '2021-04-02 15:11:08', '2021-04-02 18:33:01'),
(23, 6, 2, '2021-04-02 15:16:55', '2021-04-02 18:33:04'),
(24, 6, 9, '2021-04-02 15:16:55', '2021-04-02 18:33:07'),
(158, 19, 3, '2021-04-03 02:24:46', '2021-04-03 02:24:46'),
(159, 19, 4, '2021-04-03 02:24:46', '2021-04-03 02:24:46'),
(160, 9, 5, '2021-04-03 02:49:13', '2021-04-03 02:49:13');

-- --------------------------------------------------------

--
-- Struktur dari tabel `seats`
--

CREATE TABLE `seats` (
  `id` int(11) NOT NULL,
  `idShowtime` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `seats`
--

INSERT INTO `seats` (`id`, `idShowtime`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'F11, F12', '2021-04-01 19:54:08', '2021-04-02 09:22:55'),
(2, 1, 'A2', '2021-04-01 19:54:08', '2021-04-02 09:22:37'),
(26, 1, 'C9', '2021-04-03 11:47:01', '2021-04-03 11:47:01'),
(27, 1, 'C10', '2021-04-03 11:47:01', '2021-04-03 11:47:01'),
(28, 1, 'C9', '2021-04-03 11:48:43', '2021-04-03 11:48:43'),
(29, 1, 'C10', '2021-04-03 11:48:43', '2021-04-03 11:48:43'),
(30, 1, 'C9', '2021-04-03 12:22:11', '2021-04-03 12:22:11'),
(31, 1, 'C10', '2021-04-03 12:22:11', '2021-04-03 12:22:11'),
(32, 1, 'C9', '2021-04-03 12:22:38', '2021-04-03 12:22:38'),
(33, 1, 'C10', '2021-04-03 12:22:38', '2021-04-03 12:22:38'),
(34, 1, 'C9', '2021-04-03 12:23:25', '2021-04-03 12:23:25'),
(35, 1, 'C10', '2021-04-03 12:23:25', '2021-04-03 12:23:25'),
(36, 1, 'C9', '2021-04-03 12:24:56', '2021-04-03 12:24:56'),
(37, 1, 'C10', '2021-04-03 12:24:56', '2021-04-03 12:24:56');

-- --------------------------------------------------------

--
-- Struktur dari tabel `showtimes`
--

CREATE TABLE `showtimes` (
  `id` int(11) NOT NULL,
  `idCinemas` int(11) NOT NULL,
  `idMovie` int(11) NOT NULL,
  `showtimeDate` date NOT NULL,
  `showtime` time NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `showtimes`
--

INSERT INTO `showtimes` (`id`, `idCinemas`, `idMovie`, `showtimeDate`, `showtime`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2021-04-01', '10:30:00', '2021-04-01 08:09:17', '2021-04-03 09:56:44'),
(2, 1, 1, '2021-04-01', '12:30:00', '2021-04-01 08:09:17', '2021-04-03 09:56:46'),
(3, 1, 1, '2021-04-01', '14:30:00', '2021-04-01 08:09:17', '2021-04-03 09:56:46'),
(4, 1, 1, '2021-04-01', '16:00:00', '2021-04-01 08:09:17', '2021-04-03 09:56:46'),
(5, 1, 1, '2021-04-01', '18:30:00', '2021-04-01 08:09:17', '2021-04-03 09:56:46'),
(42, 2, 2, '2021-03-28', '08:30:00', '2021-04-03 03:46:21', '2021-04-03 03:46:21'),
(43, 2, 2, '2021-03-28', '10:30:00', '2021-04-03 03:46:21', '2021-04-03 03:46:21'),
(44, 2, 2, '2021-03-28', '12:30:00', '2021-04-03 03:46:21', '2021-04-03 03:46:21'),
(45, 2, 2, '2021-03-28', '14:30:00', '2021-04-03 03:46:21', '2021-04-03 03:46:21'),
(46, 2, 2, '2021-03-28', '16:00:00', '2021-04-03 03:46:21', '2021-04-03 03:46:21'),
(47, 2, 2, '2021-03-28', '18:30:00', '2021-04-03 03:46:21', '2021-04-03 03:46:21'),
(48, 3, 2, '2021-03-28', '08:30:00', '2021-04-03 03:46:21', '2021-04-03 03:46:21'),
(49, 3, 2, '2021-03-28', '10:30:00', '2021-04-03 03:46:21', '2021-04-03 03:46:21'),
(50, 3, 2, '2021-03-28', '12:30:00', '2021-04-03 03:46:21', '2021-04-03 03:46:21'),
(51, 3, 2, '2021-03-28', '14:30:00', '2021-04-03 03:46:21', '2021-04-03 03:46:21'),
(52, 3, 2, '2021-03-28', '16:00:00', '2021-04-03 03:46:21', '2021-04-03 03:46:21'),
(53, 3, 2, '2021-03-28', '18:30:00', '2021-04-03 03:46:21', '2021-04-03 03:46:21'),
(55, 4, 2, '2021-03-28', '10:30:00', '2021-04-03 03:46:21', '2021-04-03 03:46:21'),
(56, 4, 2, '2021-03-28', '12:30:00', '2021-04-03 03:46:21', '2021-04-03 03:46:21'),
(57, 4, 2, '2021-03-28', '14:30:00', '2021-04-03 03:46:21', '2021-04-03 03:46:21'),
(58, 4, 2, '2021-03-28', '16:00:00', '2021-04-03 03:46:21', '2021-04-03 03:46:21'),
(59, 4, 2, '2021-03-28', '18:30:00', '2021-04-03 03:46:21', '2021-04-03 03:46:21'),
(60, 2, 3, '2021-03-28', '08:30:00', '2021-04-03 03:49:56', '2021-04-03 03:49:56'),
(61, 2, 3, '2021-03-28', '10:30:00', '2021-04-03 03:49:56', '2021-04-03 03:49:56'),
(62, 2, 3, '2021-03-28', '12:30:00', '2021-04-03 03:49:56', '2021-04-03 03:49:56'),
(63, 2, 3, '2021-03-28', '14:30:00', '2021-04-03 03:49:56', '2021-04-03 03:49:56'),
(64, 2, 3, '2021-03-28', '16:00:00', '2021-04-03 03:49:56', '2021-04-03 03:49:56'),
(65, 2, 3, '2021-03-28', '18:30:00', '2021-04-03 03:49:56', '2021-04-03 03:49:56'),
(66, 3, 3, '2021-03-28', '08:30:00', '2021-04-03 03:49:56', '2021-04-03 03:49:56'),
(67, 3, 3, '2021-03-28', '10:30:00', '2021-04-03 03:49:56', '2021-04-03 03:49:56'),
(68, 3, 3, '2021-03-28', '12:30:00', '2021-04-03 03:49:56', '2021-04-03 03:49:56'),
(69, 3, 3, '2021-03-28', '14:30:00', '2021-04-03 03:49:56', '2021-04-03 03:49:56'),
(70, 3, 3, '2021-03-28', '16:00:00', '2021-04-03 03:49:56', '2021-04-03 03:49:56'),
(71, 3, 3, '2021-03-28', '18:30:00', '2021-04-03 03:49:56', '2021-04-03 03:49:56'),
(72, 4, 3, '2021-03-28', '08:30:00', '2021-04-03 03:49:56', '2021-04-03 03:49:56'),
(73, 4, 3, '2021-03-28', '10:30:00', '2021-04-03 03:49:56', '2021-04-03 03:49:56'),
(74, 4, 3, '2021-03-28', '12:30:00', '2021-04-03 03:49:56', '2021-04-03 03:49:56'),
(75, 4, 3, '2021-03-28', '14:30:00', '2021-04-03 03:49:56', '2021-04-03 03:49:56'),
(76, 4, 3, '2021-03-28', '16:00:00', '2021-04-03 03:49:56', '2021-04-03 03:49:56'),
(77, 4, 3, '2021-03-28', '18:30:00', '2021-04-03 03:49:56', '2021-04-03 03:49:56'),
(96, 1, 6, '2021-03-29', '08:30:00', '2021-04-03 04:04:47', '2021-04-03 04:04:47'),
(97, 1, 6, '2021-03-29', '10:30:00', '2021-04-03 04:04:47', '2021-04-03 04:04:47'),
(98, 1, 6, '2021-03-29', '12:30:00', '2021-04-03 04:04:47', '2021-04-03 04:04:47'),
(99, 1, 6, '2021-03-29', '14:30:00', '2021-04-03 04:04:47', '2021-04-03 04:04:47'),
(100, 1, 6, '2021-03-29', '16:00:00', '2021-04-03 04:04:47', '2021-04-03 04:04:47'),
(101, 1, 6, '2021-03-29', '18:30:00', '2021-04-03 04:04:47', '2021-04-03 04:04:47'),
(102, 4, 6, '2021-03-29', '08:30:00', '2021-04-03 04:04:47', '2021-04-03 04:04:47'),
(103, 4, 6, '2021-03-29', '10:30:00', '2021-04-03 04:04:47', '2021-04-03 04:04:47'),
(104, 4, 6, '2021-03-29', '12:30:00', '2021-04-03 04:04:47', '2021-04-03 04:04:47'),
(105, 4, 6, '2021-03-29', '14:30:00', '2021-04-03 04:04:47', '2021-04-03 04:04:47'),
(106, 4, 6, '2021-03-29', '16:00:00', '2021-04-03 04:04:47', '2021-04-03 04:04:47'),
(107, 4, 6, '2021-03-29', '18:30:00', '2021-04-03 04:04:47', '2021-04-03 04:04:47'),
(108, 5, 6, '2021-03-29', '08:30:00', '2021-04-03 04:04:47', '2021-04-03 04:04:47'),
(109, 5, 6, '2021-03-29', '10:30:00', '2021-04-03 04:04:47', '2021-04-03 04:04:47'),
(110, 5, 6, '2021-03-29', '12:30:00', '2021-04-03 04:04:47', '2021-04-03 04:04:47'),
(111, 5, 6, '2021-03-29', '14:30:00', '2021-04-03 04:04:47', '2021-04-03 04:04:47'),
(112, 5, 6, '2021-03-29', '16:00:00', '2021-04-03 04:04:47', '2021-04-03 04:04:47'),
(113, 5, 6, '2021-03-29', '18:30:00', '2021-04-03 04:04:47', '2021-04-03 04:04:47'),
(114, 2, 8, '2021-03-29', '08:30:00', '2021-04-03 04:17:45', '2021-04-03 04:17:45'),
(115, 2, 8, '2021-03-29', '10:30:00', '2021-04-03 04:17:45', '2021-04-03 04:17:45'),
(116, 2, 8, '2021-03-29', '12:30:00', '2021-04-03 04:17:45', '2021-04-03 04:17:45'),
(117, 2, 8, '2021-03-29', '14:30:00', '2021-04-03 04:17:45', '2021-04-03 04:17:45'),
(118, 2, 8, '2021-03-29', '16:00:00', '2021-04-03 04:17:45', '2021-04-03 04:17:45'),
(119, 2, 8, '2021-03-29', '18:30:00', '2021-04-03 04:17:45', '2021-04-03 04:17:45'),
(120, 3, 8, '2021-03-29', '08:30:00', '2021-04-03 04:17:45', '2021-04-03 04:17:45'),
(121, 3, 8, '2021-03-29', '10:30:00', '2021-04-03 04:17:45', '2021-04-03 04:17:45'),
(122, 3, 8, '2021-03-29', '12:30:00', '2021-04-03 04:17:45', '2021-04-03 04:17:45'),
(123, 3, 8, '2021-03-29', '14:30:00', '2021-04-03 04:17:45', '2021-04-03 04:17:45'),
(124, 3, 8, '2021-03-29', '16:00:00', '2021-04-03 04:17:45', '2021-04-03 04:17:45'),
(125, 3, 8, '2021-03-29', '18:30:00', '2021-04-03 04:17:45', '2021-04-03 04:17:45'),
(126, 6, 8, '2021-03-29', '08:30:00', '2021-04-03 04:17:45', '2021-04-03 04:17:45'),
(127, 6, 8, '2021-03-29', '10:30:00', '2021-04-03 04:17:45', '2021-04-03 04:17:45'),
(128, 6, 8, '2021-03-29', '12:30:00', '2021-04-03 04:17:45', '2021-04-03 04:17:45'),
(129, 6, 8, '2021-03-29', '14:30:00', '2021-04-03 04:17:45', '2021-04-03 04:17:45'),
(130, 6, 8, '2021-03-29', '16:00:00', '2021-04-03 04:17:45', '2021-04-03 04:17:45'),
(131, 6, 8, '2021-03-29', '18:30:00', '2021-04-03 04:17:45', '2021-04-03 04:17:45'),
(132, 1, 1, '2021-04-01', '19:30:00', '2021-04-03 04:28:55', '2021-04-03 09:56:46');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `idUsers` int(11) NOT NULL,
  `idMovie` int(11) NOT NULL,
  `idCinemas` int(11) NOT NULL,
  `idShowtime` int(11) NOT NULL,
  `seats` varchar(100) NOT NULL,
  `ticketCount` int(11) NOT NULL,
  `totalPayment` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `transactions`
--

INSERT INTO `transactions` (`id`, `idUsers`, `idMovie`, `idCinemas`, `idShowtime`, `seats`, `ticketCount`, `totalPayment`, `createdAt`, `updatedAt`) VALUES
(2, 85, 1, 1, 1, 'C9, C10', 2, 20, '2021-04-03 12:23:25', '2021-04-03 12:23:25');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `idUsers` int(11) NOT NULL,
  `role` int(11) NOT NULL,
  `email` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `image` varchar(255) NOT NULL,
  `isVerified` tinyint(4) NOT NULL,
  `reset` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`idUsers`, `role`, `email`, `password`, `firstName`, `lastName`, `phone`, `image`, `isVerified`, `reset`) VALUES
(1, 0, 'abudzaralghifari821@gmail.com', '$2a$10$wRbOFJ36MgnoiFVKgT9KreirQzf77jfjZGAYBOtzBnymJZZ3hgt.S', 'abu dzar', 'al-ghifari', '082298992329', '', 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXJzIjoiYzIzZGVjZDEtY2Q0Yi00NGY0LTgzNmItZjM1MTM2ZTMwMzg4IiwiaWF0IjoxNjE2NTkzMDg4LCJleHAiOjE2MTY1OTY2ODh9.isxA9MWaTM7NQwLvk-zkXFVJubgBcWRnlNhySG3i5z4'),
(2, 1, 'abudzaralghifari8@gmail.com', '$2a$10$1hIccBw4DwQzddneAztrDuUQQTm7cdaU0E0j6bZ7.yEp.epMkHyMK', 'abu', 'dzar', '0823819013', 'http://localhost:8000/img/1617132644589-RF1.jpg', 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXJzIjoiMzBlMDc0Y2MtZGNkNy00ODg2LTlmZmYtYTI3NzY2OWM3YjVlIiwiaWF0IjoxNjE3MTI5MDMyLCJleHAiOjE2MTcxMzI2MzJ9.lkMSK8xeNUVVHNh1nfvLCTYkX9J6ma3czPTq6pPWGAk'),
(4, 0, 'abudzaralghifari821@gmail.com', '$2a$10$wRbOFJ36MgnoiFVKgT9KreirQzf77jfjZGAYBOtzBnymJZZ3hgt.S', 'abu dzar', 'al-ghifari', '082298992329', '', 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXJzIjoiYzIzZGVjZDEtY2Q0Yi00NGY0LTgzNmItZjM1MTM2ZTMwMzg4IiwiaWF0IjoxNjE2NTkzMDg4LCJleHAiOjE2MTY1OTY2ODh9.isxA9MWaTM7NQwLvk-zkXFVJubgBcWRnlNhySG3i5z4'),
(85, 0, 'ghifari290598@gmail.com', '$2a$10$6O7CYmF.XuGK1uiKre3pFuMpx5uHUHfshzIFsiB7BpZPJT1NSpUAe', 'abu dzar', 'al-ghifari', '082298992329', 'http://localhost:8000/img/1617452282573-RF1 (1).jpg', 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXJzIjo4NSwiaWF0IjoxNjE3NDUyNDY0LCJleHAiOjE2MTc0NTYwNjR9.4hkzjpb9PyMj2reaeksXvd71F_O7aE7Oe6ehNJngTZQ');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `cinemas`
--
ALTER TABLE `cinemas`
  ADD PRIMARY KEY (`idCinemas`);

--
-- Indeks untuk tabel `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `movie_genre`
--
ALTER TABLE `movie_genre`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idMovie` (`idMovie`),
  ADD KEY `idGenre` (`idGenre`);

--
-- Indeks untuk tabel `seats`
--
ALTER TABLE `seats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idShowtime` (`idShowtime`);

--
-- Indeks untuk tabel `showtimes`
--
ALTER TABLE `showtimes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCinemas` (`idCinemas`),
  ADD KEY `idMovie` (`idMovie`);

--
-- Indeks untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUsers` (`idUsers`),
  ADD KEY `idMovie` (`idMovie`),
  ADD KEY `idCinemas` (`idCinemas`),
  ADD KEY `idShowtime` (`idShowtime`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUsers`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `cinemas`
--
ALTER TABLE `cinemas`
  MODIFY `idCinemas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT untuk tabel `genre`
--
ALTER TABLE `genre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT untuk tabel `movie`
--
ALTER TABLE `movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT untuk tabel `movie_genre`
--
ALTER TABLE `movie_genre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=161;

--
-- AUTO_INCREMENT untuk tabel `seats`
--
ALTER TABLE `seats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT untuk tabel `showtimes`
--
ALTER TABLE `showtimes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=150;

--
-- AUTO_INCREMENT untuk tabel `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `idUsers` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `movie_genre`
--
ALTER TABLE `movie_genre`
  ADD CONSTRAINT `movie_genre_ibfk_1` FOREIGN KEY (`idGenre`) REFERENCES `genre` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `movie_ibfk_1` FOREIGN KEY (`idMovie`) REFERENCES `movie` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `seats`
--
ALTER TABLE `seats`
  ADD CONSTRAINT `seats_ibfk_1` FOREIGN KEY (`idShowtime`) REFERENCES `showtimes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `showtimes`
--
ALTER TABLE `showtimes`
  ADD CONSTRAINT `cinema_ibfk_2` FOREIGN KEY (`idCinemas`) REFERENCES `cinemas` (`idCinemas`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `movie_ibfk_2` FOREIGN KEY (`idMovie`) REFERENCES `movie` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `cinemas_ibfk_3` FOREIGN KEY (`idCinemas`) REFERENCES `cinemas` (`idCinemas`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `movie_ibfk_3` FOREIGN KEY (`idMovie`) REFERENCES `movie` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `showtimes_ibfk_2` FOREIGN KEY (`idShowtime`) REFERENCES `showtimes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`idUsers`) REFERENCES `users` (`idUsers`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
