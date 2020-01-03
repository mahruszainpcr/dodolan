-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 03, 2020 at 05:30 PM
-- Server version: 5.7.15-log
-- PHP Version: 5.6.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dodolan`
--

-- --------------------------------------------------------

--
-- Table structure for table `distributor`
--

CREATE TABLE `distributor` (
  `id_distributor` int(11) NOT NULL,
  `nama_distributor` varchar(255) NOT NULL,
  `alamat_distributor` text NOT NULL,
  `no_ktp_distributor` varchar(20) NOT NULL,
  `username_distributor` varchar(255) NOT NULL,
  `email_distributor` varchar(255) NOT NULL,
  `x_distributor` varchar(255) NOT NULL,
  `y_distributor` varchar(255) NOT NULL,
  `no_hp_distributor` varchar(255) NOT NULL,
  `deskripsi_distributor` longtext NOT NULL,
  `catatan_distributor` text NOT NULL,
  `foto_ktp_distributor` varchar(255) NOT NULL,
  `foto_profile_distributor` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `distributor_foto`
--

CREATE TABLE `distributor_foto` (
  `id_foto_distributor` int(11) NOT NULL,
  `foto_distributor` varchar(255) NOT NULL,
  `id_distributor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id_produk` int(11) NOT NULL,
  `nama_produk` varchar(255) NOT NULL,
  `deskripsi_produk` longtext NOT NULL,
  `harga_dalam_produk` int(11) NOT NULL,
  `harga_luar_produk` int(11) NOT NULL,
  `harga_pulau_produk` int(11) NOT NULL,
  `id_kelas_pasaran` int(11) NOT NULL,
  `id_sub_sub_kategori` int(11) NOT NULL,
  `id_brand` int(11) NOT NULL,
  `id_satuan` int(11) NOT NULL,
  `id_ukuran` int(11) NOT NULL,
  `id_warna` int(11) NOT NULL,
  `id_distributor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `produk_brand`
--

CREATE TABLE `produk_brand` (
  `id_produk_brand` int(11) NOT NULL,
  `nama_produk_brand` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `produk_foto`
--

CREATE TABLE `produk_foto` (
  `id_foto_produk` int(11) NOT NULL,
  `foto_produk` varchar(255) NOT NULL,
  `id_produk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `produk_kategori`
--

CREATE TABLE `produk_kategori` (
  `id_produk_kategori` int(11) NOT NULL,
  `nama_produk_kategori` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `produk_kualitas_pasaran`
--

CREATE TABLE `produk_kualitas_pasaran` (
  `id_kualitas_pasaran` int(11) NOT NULL,
  `nama_kualitas_pasaran` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `produk_satuan`
--

CREATE TABLE `produk_satuan` (
  `id_produk_satuan` int(11) NOT NULL,
  `nama_produk_satuan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `produk_stock`
--

CREATE TABLE `produk_stock` (
  `id_produk_stock` int(11) NOT NULL,
  `nama_pabrik_produk_stock` varchar(255) NOT NULL,
  `no_invoice_produk_stock` varchar(255) NOT NULL,
  `tanggal_produk_stock` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `produk_stock_detail`
--

CREATE TABLE `produk_stock_detail` (
  `id_produk_stock_detail` int(11) NOT NULL,
  `id_produk` int(11) NOT NULL,
  `id_produk_stock` int(11) NOT NULL,
  `jumlah` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `produk_sub_kategori`
--

CREATE TABLE `produk_sub_kategori` (
  `id_produk_sub_kategori` int(11) NOT NULL,
  `nama_produk_sub_kategori` varchar(255) NOT NULL,
  `id_kategori` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `produk_sub_sub_kategori`
--

CREATE TABLE `produk_sub_sub_kategori` (
  `id_produk_sub_sub_kategori` int(11) NOT NULL,
  `nama_produk_sub_sub_kategori` varchar(255) NOT NULL,
  `id_produk_sub_kategori` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `produk_ukuran`
--

CREATE TABLE `produk_ukuran` (
  `id_produk_ukuran` int(11) NOT NULL,
  `nama_produk_ukuran` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `produk_warna`
--

CREATE TABLE `produk_warna` (
  `id_produk_warna` int(11) NOT NULL,
  `nama_produk_warna` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `distributor`
--
ALTER TABLE `distributor`
  ADD PRIMARY KEY (`id_distributor`);

--
-- Indexes for table `distributor_foto`
--
ALTER TABLE `distributor_foto`
  ADD PRIMARY KEY (`id_foto_distributor`),
  ADD KEY `id_distributor` (`id_distributor`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id_produk`),
  ADD UNIQUE KEY `id_distributor` (`id_distributor`),
  ADD KEY `id_kelas_pasaran` (`id_kelas_pasaran`),
  ADD KEY `id_sub_sub_kategori` (`id_sub_sub_kategori`),
  ADD KEY `id_brand` (`id_brand`),
  ADD KEY `id_satuan` (`id_satuan`),
  ADD KEY `id_ukuran` (`id_ukuran`),
  ADD KEY `id_warna` (`id_warna`);

--
-- Indexes for table `produk_brand`
--
ALTER TABLE `produk_brand`
  ADD PRIMARY KEY (`id_produk_brand`);

--
-- Indexes for table `produk_foto`
--
ALTER TABLE `produk_foto`
  ADD PRIMARY KEY (`id_foto_produk`),
  ADD KEY `id_distributor` (`id_produk`),
  ADD KEY `id_produk` (`id_produk`);

--
-- Indexes for table `produk_kategori`
--
ALTER TABLE `produk_kategori`
  ADD PRIMARY KEY (`id_produk_kategori`);

--
-- Indexes for table `produk_kualitas_pasaran`
--
ALTER TABLE `produk_kualitas_pasaran`
  ADD PRIMARY KEY (`id_kualitas_pasaran`);

--
-- Indexes for table `produk_satuan`
--
ALTER TABLE `produk_satuan`
  ADD PRIMARY KEY (`id_produk_satuan`);

--
-- Indexes for table `produk_stock`
--
ALTER TABLE `produk_stock`
  ADD PRIMARY KEY (`id_produk_stock`);

--
-- Indexes for table `produk_stock_detail`
--
ALTER TABLE `produk_stock_detail`
  ADD PRIMARY KEY (`id_produk_stock_detail`),
  ADD KEY `id_produk` (`id_produk`),
  ADD KEY `id_produk_stock` (`id_produk_stock`);

--
-- Indexes for table `produk_sub_kategori`
--
ALTER TABLE `produk_sub_kategori`
  ADD PRIMARY KEY (`id_produk_sub_kategori`),
  ADD UNIQUE KEY `id_kategori` (`id_kategori`);

--
-- Indexes for table `produk_sub_sub_kategori`
--
ALTER TABLE `produk_sub_sub_kategori`
  ADD PRIMARY KEY (`id_produk_sub_sub_kategori`),
  ADD KEY `id_produk_sub_kategori` (`id_produk_sub_kategori`);

--
-- Indexes for table `produk_ukuran`
--
ALTER TABLE `produk_ukuran`
  ADD PRIMARY KEY (`id_produk_ukuran`);

--
-- Indexes for table `produk_warna`
--
ALTER TABLE `produk_warna`
  ADD PRIMARY KEY (`id_produk_warna`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `distributor`
--
ALTER TABLE `distributor`
  MODIFY `id_distributor` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `distributor_foto`
--
ALTER TABLE `distributor_foto`
  MODIFY `id_foto_distributor` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id_produk` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `produk_brand`
--
ALTER TABLE `produk_brand`
  MODIFY `id_produk_brand` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `produk_foto`
--
ALTER TABLE `produk_foto`
  MODIFY `id_foto_produk` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `produk_kategori`
--
ALTER TABLE `produk_kategori`
  MODIFY `id_produk_kategori` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `produk_kualitas_pasaran`
--
ALTER TABLE `produk_kualitas_pasaran`
  MODIFY `id_kualitas_pasaran` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `produk_satuan`
--
ALTER TABLE `produk_satuan`
  MODIFY `id_produk_satuan` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `produk_stock`
--
ALTER TABLE `produk_stock`
  MODIFY `id_produk_stock` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `produk_stock_detail`
--
ALTER TABLE `produk_stock_detail`
  MODIFY `id_produk_stock_detail` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `produk_sub_kategori`
--
ALTER TABLE `produk_sub_kategori`
  MODIFY `id_produk_sub_kategori` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `produk_sub_sub_kategori`
--
ALTER TABLE `produk_sub_sub_kategori`
  MODIFY `id_produk_sub_sub_kategori` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `produk_ukuran`
--
ALTER TABLE `produk_ukuran`
  MODIFY `id_produk_ukuran` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `produk_warna`
--
ALTER TABLE `produk_warna`
  MODIFY `id_produk_warna` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `distributor_foto`
--
ALTER TABLE `distributor_foto`
  ADD CONSTRAINT `distributor_foto_ibfk_1` FOREIGN KEY (`id_distributor`) REFERENCES `distributor` (`id_distributor`);

--
-- Constraints for table `produk`
--
ALTER TABLE `produk`
  ADD CONSTRAINT `produk_ibfk_1` FOREIGN KEY (`id_kelas_pasaran`) REFERENCES `produk_kualitas_pasaran` (`id_kualitas_pasaran`),
  ADD CONSTRAINT `produk_ibfk_2` FOREIGN KEY (`id_sub_sub_kategori`) REFERENCES `produk_sub_sub_kategori` (`id_produk_sub_sub_kategori`),
  ADD CONSTRAINT `produk_ibfk_3` FOREIGN KEY (`id_brand`) REFERENCES `produk_brand` (`id_produk_brand`),
  ADD CONSTRAINT `produk_ibfk_4` FOREIGN KEY (`id_satuan`) REFERENCES `produk_satuan` (`id_produk_satuan`),
  ADD CONSTRAINT `produk_ibfk_5` FOREIGN KEY (`id_ukuran`) REFERENCES `produk_ukuran` (`id_produk_ukuran`),
  ADD CONSTRAINT `produk_ibfk_6` FOREIGN KEY (`id_warna`) REFERENCES `produk_warna` (`id_produk_warna`),
  ADD CONSTRAINT `produk_ibfk_7` FOREIGN KEY (`id_distributor`) REFERENCES `distributor` (`id_distributor`);

--
-- Constraints for table `produk_foto`
--
ALTER TABLE `produk_foto`
  ADD CONSTRAINT `produk_foto_ibfk_1` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id_produk`);

--
-- Constraints for table `produk_sub_kategori`
--
ALTER TABLE `produk_sub_kategori`
  ADD CONSTRAINT `produk_sub_kategori_ibfk_1` FOREIGN KEY (`id_kategori`) REFERENCES `produk_kategori` (`id_produk_kategori`);

--
-- Constraints for table `produk_sub_sub_kategori`
--
ALTER TABLE `produk_sub_sub_kategori`
  ADD CONSTRAINT `produk_sub_sub_kategori_ibfk_1` FOREIGN KEY (`id_produk_sub_kategori`) REFERENCES `produk_sub_sub_kategori` (`id_produk_sub_sub_kategori`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
