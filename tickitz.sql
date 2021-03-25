-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 24 Mar 2021 pada 19.21
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
  `idCinemas` varchar(64) NOT NULL,
  `idMovie` varchar(64) NOT NULL,
  `name` varchar(64) NOT NULL,
  `location` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `cinemas`
--

INSERT INTO `cinemas` (`idCinemas`, `idMovie`, `name`, `location`) VALUES
('1', '9e648030-5ae6-4465-92d1-61dded72557e', 'ebv.id', 'bandung'),
('2', 'MV001', 'CineOne21', 'jakarta'),
('3', '9e648030-5ae6-4465-92d1-61dded72557e', 'CineOne21', 'karawang'),
('4', '9e648030-5ae6-4465-92d1-61dded72557e', 'CineOne21', 'karawang'),
('5', '9e648030-5ae6-4465-92d1-61dded72557e', 'ebv.id', 'karawang'),
('73c7f28a-f235-42a6-a907-dfab0c6eb9b6', 'MV002', 'Hiflix', 'jakarta');

-- --------------------------------------------------------

--
-- Struktur dari tabel `movie`
--

CREATE TABLE `movie` (
  `idMovie` varchar(64) NOT NULL,
  `movieName` varchar(64) NOT NULL,
  `releaseDate` datetime NOT NULL DEFAULT current_timestamp(),
  `directedBy` varchar(64) NOT NULL,
  `duration` varchar(64) NOT NULL,
  `casts` varchar(100) NOT NULL,
  `synopsis` varchar(1000) NOT NULL,
  `genre` varchar(100) NOT NULL,
  `image` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `movie`
--

INSERT INTO `movie` (`idMovie`, `movieName`, `releaseDate`, `directedBy`, `duration`, `casts`, `synopsis`, `genre`, `image`) VALUES
('9e648030-5ae6-4465-92d1-61dded72557e', 'Money Heist new 123', '2021-03-23 15:57:44', 'David Benioff, D.B. Weiss', '2 hours 12 minutes', 'Shia LaBeouf, Megan Fox', 'The film opens with Optimus Prime (Peter Cullen), heroic leader of the benevolent Autobots, describing in a voice-over the destruction of the Transformers\' home world, Cybertron. It was destroyed by the evil Decepticon leader Megatron (Hugo Weaving) in his quest to obtain the All Spark, a cube-like artifact that can create life.', 'action, mafia', 'http://localhost:8000/img/1616489864670-react.jpeg'),
('a7a9d8eb-9cba-49bd-a79a-5f6012b60ed8', 'Money Heist', '2021-03-21 23:57:20', 'David Benioff, D.B. Weiss', '2 hours 12 minutes', 'Shia LaBeouf, Megan Fox', 'The film opens with Optimus Prime (Peter Cullen), heroic leader of the benevolent Autobots, describing in a voice-over the destruction of the Transformers\' home world, Cybertron. It was destroyed by the evil Decepticon leader Megatron (Hugo Weaving) in his quest to obtain the All Spark, a cube-like artifact that can create life.', 'action', 'http://localhost:8000/img/1616345840574-witches.png'),
('MV001', 'Spider-Man: Homecoming', '2021-03-03 20:38:09', 'Jon Watss', '2 hours 13 minutes ', 'Tom Holland, Michael Keaton, Robert Downey Jr., ...', 'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.', 'Adventure, Action, Sci-Fi', 'https://bookingtickitz.netlify.app/assets/img/spider.png'),
('MV002', 'Black Widow', '2021-03-08 20:38:09', 'Cate Shortland', '2 hours 13 minutes ', ' Scarlett Johansson, Florence Pugh, David Harbour', 'At birth the Black Widow \"aka Natasha Romanova\" is given to the KGB, which grooms her to become its ', 'Action, Adventure, Sci-Fi', 'https://bookingtickitz.netlify.app/assets/img/Black.png'),
('MV003', 'John Wick: Chapter 3 - Parabellum', '2021-03-04 20:43:46', 'Chad Stahelski', '2h 10min', 'Keanu Reeves, Halle Berry, Ian McShane', 'In this third installment of the adrenaline-fueled action franchise, skilled assassin John Wick (Kea', 'Action, Crime, Thriller', 'https://bookingtickitz.netlify.app/assets/img/johnwick.png'),
('MV004', 'Demon Slayer', '2021-03-07 22:31:20', '	Ufotable', '2 hours 12 minutes', 'Tanjiro, Nezuko', 'Ceritanya mengisahkan tentang Tanjiro', 'Action', 'https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg/220px-Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg'),
('MV005', 'Attack Of Titan', '2021-03-07 23:50:56', 'Hajime Isayama', '2 hours 12 minutes', 'Eren Jaeger, Mikasa Ackerman, Armin Arlert', 'Dalam suatu sejarah alternatif sekitar 1800 tahun yang lalu, seorang manusia bernama Ymir Fritz berubah menjadi raksasa mirip manusia yang dikenal sebagai Titan (巨人 Kyojin) setelah melakukan perjanjian dengan \"Iblis dari Seluruh Bumi\". ', 'Action', 'https://foto.kontan.co.id/vfg5YWYH_jnPVtMMi-hnX9QO3G8=/smart/2020/12/28/95694032p.jpg'),
('MV006', 'The Witches', '2021-03-08 20:12:45', 'Robert Zemeckis', '2 hours 12 minutes', 'Anne Hathaway, Octavia Spencer, Stanley Tucci', 'A young boy and his grandmother have a run-in with a coven of witches and their leader.', 'Adventure,Comedy,Family', 'https://bookingtickitz.netlify.app/assets/img/witches.png'),
('MV007', 'Transformers last knight', '2021-03-18 10:24:27', 'David Benioff, D.B. Weiss', '2 hours 12 minutes', 'Shia LaBeouf, Megan Fox', 'The film opens with Optimus Prime (Peter Cullen), heroic leader of the benevolent Autobots, describi', 'Action', 'https://upload.wikimedia.org/wikipedia/en/b/bf/Transformers_dark_of_the_moon_ver5.jpg'),
('MV008', 'Tenet', '2021-03-15 15:43:48', 'Christopher Nolan', '2hours 30 minutes', ' John David Washington, Robert Pattinson, Elizabeth Debicki', 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.', 'Action, Sci-Fi', 'https://bookingtickitz.netlify.app/assets/img/tenet.png'),
('MV009', 'Naruto The Movie', '2021-03-16 21:10:11', 'Samehadaku', '2 hours ', 'naruto, sakura, sasuke..', 'desa konoha', 'action,comedy', 'https://i1.wp.com/www.alabn.com/wp/wp-content/uploads/2017/02/naruto-the-movie-Stone-of-Gelel.jpg?resize=795%2C1165'),
('MV011', 'Money Heist ', '2021-03-18 00:54:57', 'David Benioff, D.B. Weiss', '2 hours 12 minutes', 'Shia LaBeouf, Megan Fox', 'The film opens with Optimus Prime (Peter Cullen), heroic leader of the benevolent Autobots, describing in a voice-over the destruction of the Transformers\' home world, Cybertron. It was destroyed by the evil Decepticon leader Megatron (Hugo Weaving) in his quest to obtain the All Spark, a cube-like artifact that can create life.', 'action', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT9Fw-xje4MUvME1Nb5u1RdRmlqJxNe845x0NfF8QQO618gBjcp');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tickets`
--

CREATE TABLE `tickets` (
  `idTickets` varchar(64) NOT NULL,
  `idMovie` varchar(64) NOT NULL,
  `schedule` datetime NOT NULL DEFAULT current_timestamp(),
  `price` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tickets`
--

INSERT INTO `tickets` (`idTickets`, `idMovie`, `schedule`, `price`) VALUES
('5c943325-eb8a-4a0e-b3e6-24973939f8ad', 'MV007', '2021-03-24 22:04:38', 25000),
('5e76071f-755e-4534-905f-414ccac4d766', 'MV006', '2021-03-24 22:03:10', 25000),
('TCKT001', 'MV001', '2021-03-04 20:47:05', 45000),
('TCKT002', 'MV002', '2021-03-05 20:47:05', 45000),
('TCKT003', 'MV003', '2021-03-06 20:49:35', 70000),
('TCKT004', 'MV004', '2021-03-07 23:25:45', 25000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaction`
--

CREATE TABLE `transaction` (
  `idTransaction` varchar(8) NOT NULL,
  `idTickets` varchar(8) NOT NULL,
  `idUsers` varchar(8) NOT NULL,
  `paymentMethod` varchar(20) NOT NULL,
  `dateTime` datetime NOT NULL DEFAULT current_timestamp(),
  `seats` varchar(20) NOT NULL,
  `count` int(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `transaction`
--

INSERT INTO `transaction` (`idTransaction`, `idTickets`, `idUsers`, `paymentMethod`, `dateTime`, `seats`, `count`) VALUES
('TCT002', 'TCKT002', 'USR002', 'GOPAY', '2021-03-06 20:50:18', 'C9', 1),
('TCT004', 'TCKT002', 'USR003', 'dana', '2021-03-08 16:24:43', 'C9, C10', 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `idUsers` varchar(64) NOT NULL,
  `role` int(11) NOT NULL,
  `email` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `reset` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`idUsers`, `role`, `email`, `password`, `firstName`, `lastName`, `phone`, `reset`) VALUES
('0d8dc96d-2a48-47e3-a4dd-8a61a75f8cc8', 0, 'mruhiyat@gmail.com', '$2a$10$Oh1/9IPkYcSQvUqtR0c8I.SKq.CoHzohxv5X9fLJxOTYE52q6Xcw2', 'muhammad', 'ruhiyat new', '082298992329', ''),
('848b8803-9641-44a6-85bf-5bff31c70aae', 1, 'abudzaralghifari8@gmail.com', '$2a$10$D4to9Issh/SsiksTe6HMN.c4bYTtbvklBrd/E5Vu2U99EmSp.MxAq', 'abu dzar', 'al-ghifari', '082298992329', ''),
('c23decd1-cd4b-44f4-836b-f35136e30388', 0, 'abudzaralghifari821@gmail.com', '$2a$10$wRbOFJ36MgnoiFVKgT9KreirQzf77jfjZGAYBOtzBnymJZZ3hgt.S', 'abu dzar', 'al-ghifari', '082298992329', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXJzIjoiYzIzZGVjZDEtY2Q0Yi00NGY0LTgzNmItZjM1MTM2ZTMwMzg4IiwiaWF0IjoxNjE2NTkzMDg4LCJleHAiOjE2MTY1OTY2ODh9.isxA9MWaTM7NQwLvk-zkXFVJubgBcWRnlNhySG3i5z4'),
('USR002', 0, 'nisrinanataraharja@gmail.com', 'nisrina123', 'nisrina', ' hasna nataraharja', '082289093892', ''),
('USR003', 0, 'rijalabdulhakim@gmail.com', 'rijalnewpassword', 'rijal', ' abdul hakim', '082298992382', '');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `cinemas`
--
ALTER TABLE `cinemas`
  ADD PRIMARY KEY (`idCinemas`),
  ADD KEY `idMovie` (`idMovie`);

--
-- Indeks untuk tabel `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`idMovie`);

--
-- Indeks untuk tabel `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`idTickets`),
  ADD KEY `tickets_ibfk_1` (`idMovie`);

--
-- Indeks untuk tabel `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`idTransaction`),
  ADD KEY `idTickets` (`idTickets`),
  ADD KEY `idUsers` (`idUsers`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUsers`);

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `cinemas`
--
ALTER TABLE `cinemas`
  ADD CONSTRAINT `cinemas_ibfk_1` FOREIGN KEY (`idMovie`) REFERENCES `movie` (`idMovie`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `tickets`
--
ALTER TABLE `tickets`
  ADD CONSTRAINT `tickets_ibfk_1` FOREIGN KEY (`idMovie`) REFERENCES `movie` (`idMovie`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`idTickets`) REFERENCES `tickets` (`idTickets`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transaction_ibfk_2` FOREIGN KEY (`idUsers`) REFERENCES `users` (`idUsers`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
