-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jan 21, 2020 at 03:25 AM
-- Server version: 5.7.25
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `dodolan`
--

-- --------------------------- -----------------------------

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
  `status` tinyint(1) NOT NULL,
  `password_disributor` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `distributor`
--

INSERT INTO `distributor` (`id_distributor`, `nama_distributor`, `alamat_distributor`, `no_ktp_distributor`, `username_distributor`, `email_distributor`, `x_distributor`, `y_distributor`, `no_hp_distributor`, `deskripsi_distributor`, `catatan_distributor`, `foto_ktp_distributor`, `foto_profile_distributor`, `status`, `password_disributor`) VALUES
(1, 'PT. XYZ', 'jalan xyz', '12312312', 'mahrus', 'mahrus@pcr.ac.id', '100', '1990', '081275575929', 'Pt xyz jualan barang bangunan', 'cat gratis ongkir dalam kota', '', '', 1, '');

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
-- Table structure for table `distributor_penagihan`
--

CREATE TABLE `distributor_penagihan` (
  `id_distributor_penagihan` int(11) NOT NULL,
  `no_invoice_distributor_penagihan` int(11) NOT NULL,
  `id_penjualan_distributor` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `distrubutor_penagihan_bayar`
--

CREATE TABLE `distrubutor_penagihan_bayar` (
  `id_distrubutor_penagihan_bayar` int(11) NOT NULL,
  `id_pembayaran` int(11) NOT NULL,
  `jumlah_penagihan` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `id_distributor_penagihan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `keranjang`
--

CREATE TABLE `keranjang` (
  `id_keranjang` int(11) NOT NULL,
  `id_retail` int(11) NOT NULL,
  `id_distributor` int(11) NOT NULL,
  `id_produk` int(11) NOT NULL,
  `jumlah_produk` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `pembayaran`
--

CREATE TABLE `pembayaran` (
  `id_pembayaran` int(11) NOT NULL,
  `id_penjualan_distributor_produk` int(11) NOT NULL,
  `tanggal_bayar` datetime NOT NULL,
  `status` int(11) NOT NULL COMMENT '1 sudah selesai 2 sudah diterima 3 diajukan',
  `no_pembayaran` int(11) NOT NULL,
  `bukti_faktur_pembayaran` int(11) NOT NULL,
  `nominal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `pengajuan_blacklist`
--

CREATE TABLE `pengajuan_blacklist` (
  `id_pengajuan_blacklist` int(11) NOT NULL,
  `id_distributor` int(11) NOT NULL,
  `id_retail` int(11) NOT NULL,
  `alasan` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `penjualan`
--

CREATE TABLE `penjualan` (
  `id_penjualan` int(11) NOT NULL,
  `tanggal_penjualan` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_retail` int(11) NOT NULL,
  `no_invoice_penjualan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `penjualan_distributor`
--

CREATE TABLE `penjualan_distributor` (
  `id_penjualan_distributor` int(11) NOT NULL,
  `id_retail_alamat` int(11) NOT NULL,
  `id_penjualan` int(11) NOT NULL,
  `tanggal_jatuh_tempo` date NOT NULL,
  `id_promosi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `penjualan_distributor_produk`
--

CREATE TABLE `penjualan_distributor_produk` (
  `id_penjualan_distributor_produk` int(11) NOT NULL,
  `id_penjualan_distributor` int(11) NOT NULL,
  `id_produk` int(11) NOT NULL,
  `jumlah` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `penjualan_serah_terima`
--

CREATE TABLE `penjualan_serah_terima` (
  `id_penjualan_serah_terima` int(11) NOT NULL,
  `datetime` datetime NOT NULL,
  `id_penjualan_distributor` int(11) NOT NULL,
  `no_faktur_serah_terima` varchar(255) NOT NULL,
  `foto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `penjualan_status_history`
--

CREATE TABLE `penjualan_status_history` (
  `id_penjualan_status_history` int(11) NOT NULL,
  `id_penjualan_distributor` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `status` int(11) NOT NULL COMMENT '1:diajukan, 2:diterima, 3:diproses, 4:dikirim, 5:diterima toko, 6:retur, 7:selesai; 8: ditolak',
  `keterangan` text NOT NULL
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
  `id_distributor` int(11) NOT NULL,
  `top` int(11) NOT NULL COMMENT '30Hari, 40Hari,60hari dan 67Hari'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id_produk`, `nama_produk`, `deskripsi_produk`, `harga_dalam_produk`, `harga_luar_produk`, `harga_pulau_produk`, `id_kelas_pasaran`, `id_sub_sub_kategori`, `id_brand`, `id_satuan`, `id_ukuran`, `id_warna`, `id_distributor`, `top`) VALUES
(8, 'DULUX Cat Tembok Weathershield\r\n', 'DULUX Cat Tembok Weathershield adalah cat bermutu tinggi khusus untuk eksterior, berbahan dasar air. Dibuat dari 100% bahan acrylic untuk dinding luar yang baru atau sudah pernah dicat sebelumnya. Cat ini cocok untuk digunakan untuk semua permukaan tembok normal termasuk pasangan bata, semen, plaster, dan semi permanen permukaan luar. Diformulasikan untuk memberikan perlindungan 5 tahun terhadap pertumbuhan jamur dan lumut.\r\n\r\nPerlindungan unggul bagaimana pun cuacanya\r\nDULUX Cat Tembok Weathershield ukuran 2,5 liter\r\nDaya sebar: 12-13 m persegi/liter\r\nWaktu pengeringan: 1-2 jam', 292000, 302000, 312000, 1, 1, 1, 1, 1, 1, 1, 0),
(9, 'HEATGARD 20 Liter Abu Cat Pelapis Anti Bocor', 'Jual cat HEATGARD HA4 harga & spesifikasi lengkap. Harga distributor, supplier cat, cairan yang biasa digunakan untuk melindungi dan memperindah rumah', 1470000, 1570000, 1670000, 1, 1, 1, 1, 1, 1, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `produk_brand`
--

CREATE TABLE `produk_brand` (
  `id_produk_brand` int(11) NOT NULL,
  `nama_produk_brand` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `produk_brand`
--

INSERT INTO `produk_brand` (`id_produk_brand`, `nama_produk_brand`) VALUES
(1, 'Avian');

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

--
-- Dumping data for table `produk_kategori`
--

INSERT INTO `produk_kategori` (`id_produk_kategori`, `nama_produk_kategori`) VALUES
(1, 'Bahan Bangunan');

-- --------------------------------------------------------

--
-- Table structure for table `produk_kualitas_pasaran`
--

CREATE TABLE `produk_kualitas_pasaran` (
  `id_kualitas_pasaran` int(11) NOT NULL,
  `nama_kualitas_pasaran` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `produk_kualitas_pasaran`
--

INSERT INTO `produk_kualitas_pasaran` (`id_kualitas_pasaran`, `nama_kualitas_pasaran`) VALUES
(1, 'Menengah');

-- --------------------------------------------------------

--
-- Table structure for table `produk_satuan`
--

CREATE TABLE `produk_satuan` (
  `id_produk_satuan` int(11) NOT NULL,
  `nama_produk_satuan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `produk_satuan`
--

INSERT INTO `produk_satuan` (`id_produk_satuan`, `nama_produk_satuan`) VALUES
(1, 'Dus');

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

--
-- Dumping data for table `produk_sub_kategori`
--

INSERT INTO `produk_sub_kategori` (`id_produk_sub_kategori`, `nama_produk_sub_kategori`, `id_kategori`) VALUES
(1, 'Cat', 1);

-- --------------------------------------------------------

--
-- Table structure for table `produk_sub_sub_kategori`
--

CREATE TABLE `produk_sub_sub_kategori` (
  `id_produk_sub_sub_kategori` int(11) NOT NULL,
  `nama_produk_sub_sub_kategori` varchar(255) NOT NULL,
  `id_produk_sub_kategori` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `produk_sub_sub_kategori`
--

INSERT INTO `produk_sub_sub_kategori` (`id_produk_sub_sub_kategori`, `nama_produk_sub_sub_kategori`, `id_produk_sub_kategori`) VALUES
(1, 'Cat Avian', 1);

-- --------------------------------------------------------

--
-- Table structure for table `produk_ukuran`
--

CREATE TABLE `produk_ukuran` (
  `id_produk_ukuran` int(11) NOT NULL,
  `nama_produk_ukuran` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `produk_ukuran`
--

INSERT INTO `produk_ukuran` (`id_produk_ukuran`, `nama_produk_ukuran`) VALUES
(1, 'Kaleng');

-- --------------------------------------------------------

--
-- Table structure for table `produk_warna`
--

CREATE TABLE `produk_warna` (
  `id_produk_warna` int(11) NOT NULL,
  `nama_produk_warna` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `produk_warna`
--

INSERT INTO `produk_warna` (`id_produk_warna`, `nama_produk_warna`) VALUES
(1, 'Hijau');

-- --------------------------------------------------------

--
-- Table structure for table `promosi`
--

CREATE TABLE `promosi` (
  `id_promosi` int(11) NOT NULL,
  `id_distributor` int(11) NOT NULL,
  `nama_promosi` int(11) NOT NULL,
  `keterangan` int(11) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `tanggal_mulai` datetime NOT NULL,
  `tanggal_selesai` datetime NOT NULL,
  `status` int(11) NOT NULL,
  `id_promosi_khusus` int(11) NOT NULL,
  `jenis` int(11) NOT NULL,
  `jenis_bonus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `promosi_khusus`
--

CREATE TABLE `promosi_khusus` (
  `id_promosi_khusus` int(11) NOT NULL,
  `id_distributor` int(11) NOT NULL,
  `id_retail` int(11) NOT NULL,
  `tanggal_pengajuan` datetime NOT NULL,
  `keterangan` varchar(255) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `promosi_produk`
--

CREATE TABLE `promosi_produk` (
  `id_promosi_produk` int(11) NOT NULL,
  `id_produk` int(11) NOT NULL,
  `id_promosi` int(11) NOT NULL,
  `jumlah` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `promosi_produk_bonus`
--

CREATE TABLE `promosi_produk_bonus` (
  `id_promosi_produk_bonus` int(11) NOT NULL,
  `id_produk` varchar(255) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `id_promosi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `rating_transaksi`
--

CREATE TABLE `rating_transaksi` (
  `id_rating_transaksi` int(11) NOT NULL,
  `id_penjualan_distributor` int(11) NOT NULL,
  `kecepatan` int(11) NOT NULL,
  `kelengkapan` int(11) NOT NULL,
  `kesesuaian` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `retail`
--

CREATE TABLE `retail` (
  `id_retail` int(11) NOT NULL,
  `nama_retail` varchar(255) NOT NULL,
  `alamat_retail` text NOT NULL,
  `no_ktp_retail` varchar(20) NOT NULL,
  `username_retail` varchar(255) NOT NULL,
  `email_retail` varchar(255) NOT NULL,
  `x_retail` varchar(255) NOT NULL,
  `y_retail` varchar(255) NOT NULL,
  `no_hp_retail` varchar(255) NOT NULL,
  `deskripsi_retail` longtext NOT NULL,
  `catatan_retail` text NOT NULL,
  `foto_ktp_retail` varchar(255) NOT NULL,
  `foto_profile_retail` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `password_disributor` varchar(255) NOT NULL,
  `no_izin_retail` varchar(255) NOT NULL,
  `foto_izin_retail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `retail_alamat`
--

CREATE TABLE `retail_alamat` (
  `id_retail_alamat` int(11) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `x` varchar(255) NOT NULL,
  `y` varchar(255) NOT NULL,
  `nama_penerima` varchar(255) NOT NULL,
  `kontak_penerima` varchar(255) NOT NULL,
  `id_retail` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `retail_foto`
--

CREATE TABLE `retail_foto` (
  `id_foto_retail` int(11) NOT NULL,
  `foto_retail` varchar(255) NOT NULL,
  `id_retail` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `retur`
--

CREATE TABLE `retur` (
  `id_retur` int(11) NOT NULL,
  `no_invoice_retur` int(11) NOT NULL,
  `id_penjualan_distributor` int(11) NOT NULL,
  `tanggal` datetime NOT NULL,
  `status` int(11) NOT NULL COMMENT '1:diajukan, 2:diterima, 3:diproses, 4:selesai, 5:ditolak'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `retur_produk`
--

CREATE TABLE `retur_produk` (
  `id_retur_produk` int(11) NOT NULL,
  `id_retur` int(11) NOT NULL,
  `id_produk` int(11) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `alasan` text NOT NULL
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
-- Indexes for table `distributor_penagihan`
--
ALTER TABLE `distributor_penagihan`
  ADD PRIMARY KEY (`id_distributor_penagihan`),
  ADD KEY `id_penjualan_distributor` (`id_penjualan_distributor`);

--
-- Indexes for table `distrubutor_penagihan_bayar`
--
ALTER TABLE `distrubutor_penagihan_bayar`
  ADD PRIMARY KEY (`id_distrubutor_penagihan_bayar`),
  ADD KEY `id_pembayaran` (`id_pembayaran`),
  ADD KEY `id_distributor_penagihan` (`id_distributor_penagihan`);

--
-- Indexes for table `keranjang`
--
ALTER TABLE `keranjang`
  ADD PRIMARY KEY (`id_keranjang`),
  ADD KEY `id_retail` (`id_retail`),
  ADD KEY `id_distributor` (`id_distributor`),
  ADD KEY `id_produk` (`id_produk`);

--
-- Indexes for table `pembayaran`
--
ALTER TABLE `pembayaran`
  ADD PRIMARY KEY (`id_pembayaran`),
  ADD KEY `id_penjualan_distributor_produk` (`id_penjualan_distributor_produk`);

--
-- Indexes for table `pengajuan_blacklist`
--
ALTER TABLE `pengajuan_blacklist`
  ADD PRIMARY KEY (`id_pengajuan_blacklist`),
  ADD KEY `id_distributor` (`id_distributor`),
  ADD KEY `id_retail` (`id_retail`);

--
-- Indexes for table `penjualan`
--
ALTER TABLE `penjualan`
  ADD PRIMARY KEY (`id_penjualan`);

--
-- Indexes for table `penjualan_distributor`
--
ALTER TABLE `penjualan_distributor`
  ADD PRIMARY KEY (`id_penjualan_distributor`),
  ADD KEY `id_retail_alamat` (`id_retail_alamat`),
  ADD KEY `id_penjualan` (`id_penjualan`),
  ADD KEY `id_promosi` (`id_promosi`),
  ADD KEY `id_promosi_2` (`id_promosi`);

--
-- Indexes for table `penjualan_distributor_produk`
--
ALTER TABLE `penjualan_distributor_produk`
  ADD PRIMARY KEY (`id_penjualan_distributor_produk`),
  ADD KEY `id_penjualan_distributor` (`id_penjualan_distributor`),
  ADD KEY `id_produk` (`id_produk`);

--
-- Indexes for table `penjualan_serah_terima`
--
ALTER TABLE `penjualan_serah_terima`
  ADD PRIMARY KEY (`id_penjualan_serah_terima`),
  ADD KEY `id_penjualan_distributor` (`id_penjualan_distributor`);

--
-- Indexes for table `penjualan_status_history`
--
ALTER TABLE `penjualan_status_history`
  ADD PRIMARY KEY (`id_penjualan_status_history`),
  ADD KEY `id_penjualan_distributor` (`id_penjualan_distributor`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id_produk`),
  ADD KEY `id_kelas_pasaran` (`id_kelas_pasaran`),
  ADD KEY `id_sub_sub_kategori` (`id_sub_sub_kategori`),
  ADD KEY `id_brand` (`id_brand`),
  ADD KEY `id_satuan` (`id_satuan`),
  ADD KEY `id_ukuran` (`id_ukuran`),
  ADD KEY `id_warna` (`id_warna`),
  ADD KEY `id_kelas_pasaran_2` (`id_kelas_pasaran`,`id_sub_sub_kategori`,`id_brand`,`id_satuan`,`id_ukuran`,`id_warna`),
  ADD KEY `id_distributor` (`id_distributor`);

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
-- Indexes for table `promosi`
--
ALTER TABLE `promosi`
  ADD PRIMARY KEY (`id_promosi`),
  ADD KEY `id_distributor` (`id_distributor`);

--
-- Indexes for table `promosi_khusus`
--
ALTER TABLE `promosi_khusus`
  ADD PRIMARY KEY (`id_promosi_khusus`),
  ADD KEY `id_distributor` (`id_distributor`),
  ADD KEY `id_retail` (`id_retail`);

--
-- Indexes for table `promosi_produk`
--
ALTER TABLE `promosi_produk`
  ADD PRIMARY KEY (`id_promosi_produk`),
  ADD KEY `id_produk` (`id_produk`),
  ADD KEY `id_promosi` (`id_promosi`);

--
-- Indexes for table `promosi_produk_bonus`
--
ALTER TABLE `promosi_produk_bonus`
  ADD PRIMARY KEY (`id_promosi_produk_bonus`),
  ADD KEY `id_produk` (`id_produk`),
  ADD KEY `id_promosi` (`id_promosi`);

--
-- Indexes for table `rating_transaksi`
--
ALTER TABLE `rating_transaksi`
  ADD PRIMARY KEY (`id_rating_transaksi`),
  ADD KEY `id_penjualan_distributor` (`id_penjualan_distributor`);

--
-- Indexes for table `retail`
--
ALTER TABLE `retail`
  ADD PRIMARY KEY (`id_retail`);

--
-- Indexes for table `retail_alamat`
--
ALTER TABLE `retail_alamat`
  ADD PRIMARY KEY (`id_retail_alamat`),
  ADD KEY `id_retail` (`id_retail`),
  ADD KEY `id_retail_2` (`id_retail`);

--
-- Indexes for table `retail_foto`
--
ALTER TABLE `retail_foto`
  ADD PRIMARY KEY (`id_foto_retail`),
  ADD KEY `id_retail` (`id_retail`);

--
-- Indexes for table `retur`
--
ALTER TABLE `retur`
  ADD PRIMARY KEY (`id_retur`),
  ADD KEY `no_invoice_retur` (`no_invoice_retur`),
  ADD KEY `id_penjualan_distributor` (`id_penjualan_distributor`);

--
-- Indexes for table `retur_produk`
--
ALTER TABLE `retur_produk`
  ADD PRIMARY KEY (`id_retur_produk`),
  ADD KEY `id_retur` (`id_retur`),
  ADD KEY `id_produk` (`id_produk`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `distributor`
--
ALTER TABLE `distributor`
  MODIFY `id_distributor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `distributor_foto`
--
ALTER TABLE `distributor_foto`
  MODIFY `id_foto_distributor` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `distributor_penagihan`
--
ALTER TABLE `distributor_penagihan`
  MODIFY `id_distributor_penagihan` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `distrubutor_penagihan_bayar`
--
ALTER TABLE `distrubutor_penagihan_bayar`
  MODIFY `id_distrubutor_penagihan_bayar` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pembayaran`
--
ALTER TABLE `pembayaran`
  MODIFY `id_pembayaran` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pengajuan_blacklist`
--
ALTER TABLE `pengajuan_blacklist`
  MODIFY `id_pengajuan_blacklist` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `penjualan`
--
ALTER TABLE `penjualan`
  MODIFY `id_penjualan` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `penjualan_distributor`
--
ALTER TABLE `penjualan_distributor`
  MODIFY `id_penjualan_distributor` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `penjualan_distributor_produk`
--
ALTER TABLE `penjualan_distributor_produk`
  MODIFY `id_penjualan_distributor_produk` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `penjualan_serah_terima`
--
ALTER TABLE `penjualan_serah_terima`
  MODIFY `id_penjualan_serah_terima` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `penjualan_status_history`
--
ALTER TABLE `penjualan_status_history`
  MODIFY `id_penjualan_status_history` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id_produk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `produk_brand`
--
ALTER TABLE `produk_brand`
  MODIFY `id_produk_brand` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `produk_foto`
--
ALTER TABLE `produk_foto`
  MODIFY `id_foto_produk` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `produk_kategori`
--
ALTER TABLE `produk_kategori`
  MODIFY `id_produk_kategori` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `produk_kualitas_pasaran`
--
ALTER TABLE `produk_kualitas_pasaran`
  MODIFY `id_kualitas_pasaran` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `produk_satuan`
--
ALTER TABLE `produk_satuan`
  MODIFY `id_produk_satuan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
  MODIFY `id_produk_sub_kategori` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `produk_sub_sub_kategori`
--
ALTER TABLE `produk_sub_sub_kategori`
  MODIFY `id_produk_sub_sub_kategori` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `produk_ukuran`
--
ALTER TABLE `produk_ukuran`
  MODIFY `id_produk_ukuran` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `produk_warna`
--
ALTER TABLE `produk_warna`
  MODIFY `id_produk_warna` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `promosi`
--
ALTER TABLE `promosi`
  MODIFY `id_promosi` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `promosi_khusus`
--
ALTER TABLE `promosi_khusus`
  MODIFY `id_promosi_khusus` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `promosi_produk`
--
ALTER TABLE `promosi_produk`
  MODIFY `id_promosi_produk` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `promosi_produk_bonus`
--
ALTER TABLE `promosi_produk_bonus`
  MODIFY `id_promosi_produk_bonus` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rating_transaksi`
--
ALTER TABLE `rating_transaksi`
  MODIFY `id_rating_transaksi` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `retail`
--
ALTER TABLE `retail`
  MODIFY `id_retail` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `retail_alamat`
--
ALTER TABLE `retail_alamat`
  MODIFY `id_retail_alamat` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `retail_foto`
--
ALTER TABLE `retail_foto`
  MODIFY `id_foto_retail` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `retur`
--
ALTER TABLE `retur`
  MODIFY `id_retur` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `retur_produk`
--
ALTER TABLE `retur_produk`
  MODIFY `id_retur_produk` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `distributor_foto`
--
ALTER TABLE `distributor_foto`
  ADD CONSTRAINT `distributor_foto_ibfk_1` FOREIGN KEY (`id_distributor`) REFERENCES `distributor` (`id_distributor`);

--
-- Constraints for table `distributor_penagihan`
--
ALTER TABLE `distributor_penagihan`
  ADD CONSTRAINT `distributor_penagihan_ibfk_1` FOREIGN KEY (`id_penjualan_distributor`) REFERENCES `penjualan_distributor` (`id_penjualan_distributor`);

--
-- Constraints for table `distrubutor_penagihan_bayar`
--
ALTER TABLE `distrubutor_penagihan_bayar`
  ADD CONSTRAINT `distrubutor_penagihan_bayar_ibfk_1` FOREIGN KEY (`id_pembayaran`) REFERENCES `pembayaran` (`id_pembayaran`),
  ADD CONSTRAINT `distrubutor_penagihan_bayar_ibfk_2` FOREIGN KEY (`id_distributor_penagihan`) REFERENCES `distributor_penagihan` (`id_distributor_penagihan`);

--
-- Constraints for table `keranjang`
--
ALTER TABLE `keranjang`
  ADD CONSTRAINT `keranjang_ibfk_1` FOREIGN KEY (`id_distributor`) REFERENCES `distributor` (`id_distributor`),
  ADD CONSTRAINT `keranjang_ibfk_2` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id_produk`),
  ADD CONSTRAINT `keranjang_ibfk_3` FOREIGN KEY (`id_retail`) REFERENCES `retail` (`id_retail`);

--
-- Constraints for table `pembayaran`
--
ALTER TABLE `pembayaran`
  ADD CONSTRAINT `pembayaran_ibfk_1` FOREIGN KEY (`id_penjualan_distributor_produk`) REFERENCES `penjualan_distributor_produk` (`id_penjualan_distributor_produk`);

--
-- Constraints for table `pengajuan_blacklist`
--
ALTER TABLE `pengajuan_blacklist`
  ADD CONSTRAINT `pengajuan_blacklist_ibfk_1` FOREIGN KEY (`id_distributor`) REFERENCES `distributor` (`id_distributor`),
  ADD CONSTRAINT `pengajuan_blacklist_ibfk_2` FOREIGN KEY (`id_retail`) REFERENCES `retail` (`id_retail`);

--
-- Constraints for table `penjualan_distributor`
--
ALTER TABLE `penjualan_distributor`
  ADD CONSTRAINT `penjualan_distributor_ibfk_1` FOREIGN KEY (`id_penjualan`) REFERENCES `penjualan` (`id_penjualan`),
  ADD CONSTRAINT `penjualan_distributor_ibfk_2` FOREIGN KEY (`id_retail_alamat`) REFERENCES `retail_alamat` (`id_retail_alamat`),
  ADD CONSTRAINT `penjualan_distributor_ibfk_3` FOREIGN KEY (`id_promosi`) REFERENCES `promosi` (`id_promosi`);

--
-- Constraints for table `penjualan_distributor_produk`
--
ALTER TABLE `penjualan_distributor_produk`
  ADD CONSTRAINT `penjualan_distributor_produk_ibfk_1` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id_produk`),
  ADD CONSTRAINT `penjualan_distributor_produk_ibfk_2` FOREIGN KEY (`id_penjualan_distributor`) REFERENCES `penjualan_distributor` (`id_penjualan_distributor`);

--
-- Constraints for table `penjualan_serah_terima`
--
ALTER TABLE `penjualan_serah_terima`
  ADD CONSTRAINT `penjualan_serah_terima_ibfk_1` FOREIGN KEY (`id_penjualan_distributor`) REFERENCES `penjualan_distributor` (`id_penjualan_distributor`);

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

--
-- Constraints for table `promosi_produk`
--
ALTER TABLE `promosi_produk`
  ADD CONSTRAINT `promosi_produk_ibfk_1` FOREIGN KEY (`id_promosi`) REFERENCES `promosi` (`id_promosi`),
  ADD CONSTRAINT `promosi_produk_ibfk_2` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id_produk`);

--
-- Constraints for table `rating_transaksi`
--
ALTER TABLE `rating_transaksi`
  ADD CONSTRAINT `rating_transaksi_ibfk_1` FOREIGN KEY (`id_penjualan_distributor`) REFERENCES `penjualan_distributor` (`id_penjualan_distributor`);

--
-- Constraints for table `retail_alamat`
--
ALTER TABLE `retail_alamat`
  ADD CONSTRAINT `retail_alamat_ibfk_1` FOREIGN KEY (`id_retail`) REFERENCES `retail` (`id_retail`);

--
-- Constraints for table `retail_foto`
--
ALTER TABLE `retail_foto`
  ADD CONSTRAINT `retail_foto_ibfk_1` FOREIGN KEY (`id_retail`) REFERENCES `retail` (`id_retail`);

--
-- Constraints for table `retur`
--
ALTER TABLE `retur`
  ADD CONSTRAINT `retur_ibfk_1` FOREIGN KEY (`id_penjualan_distributor`) REFERENCES `penjualan_distributor` (`id_penjualan_distributor`);

--
-- Constraints for table `retur_produk`
--
ALTER TABLE `retur_produk`
  ADD CONSTRAINT `retur_produk_ibfk_1` FOREIGN KEY (`id_retur`) REFERENCES `retur` (`id_retur`),
  ADD CONSTRAINT `retur_produk_ibfk_2` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id_produk`);
