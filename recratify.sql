-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 05, 2024 at 08:23 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recratify`
--

-- --------------------------------------------------------

--
-- Table structure for table `blacklist`
--

CREATE TABLE `blacklist` (
  `id` int(11) NOT NULL,
  `token` text NOT NULL,
  `expiresAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `craft_posts`
--

CREATE TABLE `craft_posts` (
  `postId` varchar(11) NOT NULL,
  `userId` varchar(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `URL_Image` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `data_video`
--

CREATE TABLE `data_video` (
  `Youtube_ID` varchar(20) NOT NULL,
  `label_id` int(11) NOT NULL,
  `title` text NOT NULL,
  `URL_Thumbnail` text NOT NULL,
  `URL_Video` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `data_video`
--

INSERT INTO `data_video` (`Youtube_ID`, `label_id`, `title`, `URL_Thumbnail`, `URL_Video`) VALUES
('-7I1xBVe8kY', 12, 'Recycle Aluminum cans at home - Easy way to pure aluminum', 'https://img.youtube.com/vi/-7I1xBVe8kY/hqdefault.jpg', 'https://www.youtube.com/watch?v=-7I1xBVe8kY'),
('-zo5ynJULgI', 19, 'How To Recycle/Repurpose wooden Spatula|3 wooden spatula craft ideas/best out of waste', 'https://img.youtube.com/vi/-zo5ynJULgI/hqdefault.jpg', 'https://www.youtube.com/watch?v=-zo5ynJULgI'),
('0QMvYFWwt10', 14, 'Food Waste Composting Machine with inbuilt Shredder - A Smart Solution', 'https://img.youtube.com/vi/0QMvYFWwt10/hqdefault.jpg', 'https://www.youtube.com/watch?v=0QMvYFWwt10'),
('18oxQkP4qQ0', 11, 'How do we recycle glass?', 'https://img.youtube.com/vi/18oxQkP4qQ0/hqdefault.jpg', 'https://www.youtube.com/watch?v=18oxQkP4qQ0'),
('1hyQscoaGhw', 21, 'Saya Mengubah Sampah Dapur Menjadi Gas Gratis', 'https://img.youtube.com/vi/1hyQscoaGhw/hqdefault.jpg', 'https://www.youtube.com/watch?v=1hyQscoaGhw'),
('1yoM-Ro02EM', 5, '12 COOL PAPER CRAFTS YOU\'LL WANT TO MAKE ASAP', 'https://img.youtube.com/vi/1yoM-Ro02EM/hqdefault.jpg', 'https://www.youtube.com/watch?v=1yoM-Ro02EM'),
('26DIw3itV5k', 3, 'Ide Kreatif Kaleng Bekas jadi Wadah Serbaguna || Tempat Pensil dari Kaleng Bekas', 'https://img.youtube.com/vi/26DIw3itV5k/hqdefault.jpg', 'https://www.youtube.com/watch?v=26DIw3itV5k'),
('2I8Tjb4Fy-Q', 21, 'Food waste recycling - creating a circular economy', 'https://img.youtube.com/vi/2I8Tjb4Fy-Q/hqdefault.jpg', 'https://www.youtube.com/watch?v=2I8Tjb4Fy-Q'),
('3I7wunWZ5tU', 17, 'Amazing Idea! Recycle Your Plastic Waste at Home Easily', 'https://img.youtube.com/vi/3I7wunWZ5tU/hqdefault.jpg', 'https://www.youtube.com/watch?v=3I7wunWZ5tU'),
('3j80OY0Ns2g', 9, 'emas, dari limbah elektronik | gold, from electronic waste', 'https://img.youtube.com/vi/3j80OY0Ns2g/hqdefault.jpg', 'https://www.youtube.com/watch?v=3j80OY0Ns2g'),
('3LyJSGK2ZrA', 16, 'How to Recycle Food Waste at Home (0:30 spot) | Trash Talks', 'https://img.youtube.com/vi/3LyJSGK2ZrA/hqdefault.jpg', 'https://www.youtube.com/watch?v=3LyJSGK2ZrA'),
('4-nuxQu2H8o', 13, 'Surgical mask reuse idea/hair band and bracelet using use and throw mask /Mask craft', 'https://img.youtube.com/vi/4-nuxQu2H8o/hqdefault.jpg', 'https://www.youtube.com/watch?v=4-nuxQu2H8o'),
('44nrDe4jpGU', 10, 'SIAPA SANGKA KABEL CAS HP RUSAK BISA JADI BARANG SEKEREN INI !!', 'https://img.youtube.com/vi/44nrDe4jpGU/hqdefault.jpg', 'https://www.youtube.com/watch?v=44nrDe4jpGU'),
('4aXHb0_zWp4', 11, 'How to recycle glass at home', 'https://img.youtube.com/vi/4aXHb0_zWp4/hqdefault.jpg', 'https://www.youtube.com/watch?v=4aXHb0_zWp4'),
('4JkCBwlCxjA', 21, 'CARA MEMBUAT BRIKET DARI DAUN KERING', 'https://img.youtube.com/vi/4JkCBwlCxjA/hqdefault.jpg', 'https://www.youtube.com/watch?v=4JkCBwlCxjA'),
('4r9tLvMVIKM', 7, 'Turning Plastic Trash Into Luxury Bags | One Small Step', 'https://img.youtube.com/vi/4r9tLvMVIKM/hqdefault.jpg', 'https://www.youtube.com/watch?v=4r9tLvMVIKM'),
('5BMOL4VwlII', 20, 'How Recycled Plastic Bottles Are Building Homes', 'https://img.youtube.com/vi/5BMOL4VwlII/hqdefault.jpg', 'https://www.youtube.com/watch?v=5BMOL4VwlII'),
('5G_fqVV-cFo', 21, 'Kreatif! Daun Kering Disulap Jadi Kerajinan Beromset Puluhan Juta Rupiah', 'https://img.youtube.com/vi/5G_fqVV-cFo/hqdefault.jpg', 'https://www.youtube.com/watch?v=5G_fqVV-cFo'),
('5JNe-hce0sY', 7, 'How To Make Plastic Bag Sleeping Mats (Where You Live)', 'https://img.youtube.com/vi/5JNe-hce0sY/hqdefault.jpg', 'https://www.youtube.com/watch?v=5JNe-hce0sY'),
('5V2SGnAoE8A', 17, 'Beautiful butterfly Plastic spoon in Butterfly| recycle those plastic spoons| Rajni art n crafts', 'https://img.youtube.com/vi/5V2SGnAoE8A/hqdefault.jpg', 'https://www.youtube.com/watch?v=5V2SGnAoE8A'),
('5XiY7EIjRmI', 11, 'Melting GLASS Bottles Into A Huge Glass Ingot AND Coins - Melting Glass At Home', 'https://img.youtube.com/vi/5XiY7EIjRmI/hqdefault.jpg', 'https://www.youtube.com/watch?v=5XiY7EIjRmI'),
('6nYTMI6wFxs', 11, 'Glass Crusher, glass recycler, DIY, mini glass crusher', 'https://img.youtube.com/vi/6nYTMI6wFxs/hqdefault.jpg', 'https://www.youtube.com/watch?v=6nYTMI6wFxs'),
('79NlX4kVNUs', 20, 'How to Make a Bowl from Recycled Plastic | Beginner&#39;s HDPE Project', 'https://img.youtube.com/vi/79NlX4kVNUs/hqdefault.jpg', 'https://www.youtube.com/watch?v=79NlX4kVNUs'),
('7dPlIY6GPho', 15, '100 Amazing DIY Phone Case Life Hacks! Phone DIY Projects Easy and Cheap', 'https://img.youtube.com/vi/7dPlIY6GPho/hqdefault.jpg', 'https://www.youtube.com/watch?v=7dPlIY6GPho'),
('7gAQzBSqNkA', 3, '18 Genius Tin Can Upcycling Ideas: Transforming Trash into Treasure', 'https://img.youtube.com/vi/7gAQzBSqNkA/hqdefault.jpg', 'https://www.youtube.com/watch?v=7gAQzBSqNkA'),
('7gYvwZfmD8k', 18, 'Membuat Frame Foto dari Styrofoam -  Bingkai Foto dari Gabus', 'https://img.youtube.com/vi/7gYvwZfmD8k/hqdefault.jpg', 'https://www.youtube.com/watch?v=7gYvwZfmD8k'),
('80IiJrYyabU', 19, 'Amazing ! Super Recycling ideas with Broken Plates | Jute Craft ideas', 'https://img.youtube.com/vi/80IiJrYyabU/hqdefault.jpg', 'https://www.youtube.com/watch?v=80IiJrYyabU'),
('89d_obnzFnI', 8, '7 Amazing Old Clothes Reuse Ideas | Sewing Tips & Tricks | @Artkala', 'https://img.youtube.com/vi/89d_obnzFnI/hqdefault.jpg', 'https://www.youtube.com/watch?v=89d_obnzFnI'),
('8kHvDSLpqmg', 13, 'Ide kreatif kerajinan dari masker bekas! How to reuse disposable mask', 'https://img.youtube.com/vi/8kHvDSLpqmg/hqdefault.jpg', 'https://www.youtube.com/watch?v=8kHvDSLpqmg'),
('8pcvlxokF-k', 6, 'Cool Ideas From Scrap Tires And Pallet Wood // A Unique Way To Make A Useful Home Medicine Cabinet', 'https://img.youtube.com/vi/8pcvlxokF-k/hqdefault.jpg', 'https://www.youtube.com/watch?v=8pcvlxokF-k'),
('8sEb0eJKO4c', 17, 'How To recycle plastic spoon and glass jar lid| How to make candle holder|best reuse idea', 'https://img.youtube.com/vi/8sEb0eJKO4c/hqdefault.jpg', 'https://www.youtube.com/watch?v=8sEb0eJKO4c'),
('998Kr0gX_bY', 15, 'Membuat Case Hp Bekas Jadi Keren Lagi Pakai Bungkus Rokok Bekas | Ide Kreatif', 'https://img.youtube.com/vi/998Kr0gX_bY/hqdefault.jpg', 'https://www.youtube.com/watch?v=998Kr0gX_bY'),
('A3wLKpZi76w', 3, 'Daur Ulang Kaleng Bekas | Ide Kreatif Dari Kaleng Bekas | DIY', 'https://img.youtube.com/vi/A3wLKpZi76w/hqdefault.jpg', 'https://www.youtube.com/watch?v=A3wLKpZi76w'),
('aBXOqyOHcoM', 6, 'Upcycle a tire into a stylish ottoman!', 'https://img.youtube.com/vi/aBXOqyOHcoM/hqdefault.jpg', 'https://www.youtube.com/watch?v=aBXOqyOHcoM'),
('aCbpKtAb5IM', 13, '4 EASY DIY IDEAS WITH MASK | Waste Mask Idea | Reuse Idea | How to make Cute Craft Idea With Mask', 'https://img.youtube.com/vi/aCbpKtAb5IM/hqdefault.jpg', 'https://www.youtube.com/watch?v=aCbpKtAb5IM'),
('AeOEI5oOVt8', 18, 'CARA MEMBUAT BUNGA DARI STYROFOAM BEKAS || Ide kreatif dari styrofoam || Kerajinan dari styrofoam', 'https://img.youtube.com/vi/AeOEI5oOVt8/hqdefault.jpg', 'https://www.youtube.com/watch?v=AeOEI5oOVt8'),
('alljc5elqqw', 16, 'Empat Cara Menarik Mengubah Sampah Menjadi Bahan Bakar | Sampah di Seluruh Dunia | Bisnis Orang Dalam', 'https://img.youtube.com/vi/alljc5elqqw/hqdefault.jpg', 'https://www.youtube.com/watch?v=alljc5elqqw'),
('Am677q312ww', 14, 'Indoor foodcycler Food waste composting machine Smart Trash', 'https://img.youtube.com/vi/Am677q312ww/hqdefault.jpg', 'https://www.youtube.com/watch?v=Am677q312ww'),
('ApdkhWd7SfQ', 9, 'How To Recycle E-Waste | Wilma Rodrigues | #OneForChange', 'https://img.youtube.com/vi/ApdkhWd7SfQ/hqdefault.jpg', 'https://www.youtube.com/watch?v=ApdkhWd7SfQ'),
('ArXaJ8g8Tx4', 4, '29 CARDBOARD BOXES CRAFTS', 'https://img.youtube.com/vi/ArXaJ8g8Tx4/hqdefault.jpg', 'https://www.youtube.com/watch?v=ArXaJ8g8Tx4'),
('avdOxtKywbk', 20, 'How to Make Recycled BEAMS from Plastic Waste at Home', 'https://img.youtube.com/vi/avdOxtKywbk/hqdefault.jpg', 'https://www.youtube.com/watch?v=avdOxtKywbk'),
('BAy3Lk1OQTo', 12, '3000 Soda Cans Transformed | THOUSANDS of Them', 'https://img.youtube.com/vi/BAy3Lk1OQTo/hqdefault.jpg', 'https://www.youtube.com/watch?v=BAy3Lk1OQTo'),
('bpjpvxos200', 15, '30 AMAZING DIY PHONE CASE IDEAS', 'https://img.youtube.com/vi/bpjpvxos200/hqdefault.jpg', 'https://www.youtube.com/watch?v=bpjpvxos200'),
('bQl1ls6zA5A', 11, 'Everyday Design - Hacks Ideas For Glass Bottle - Product Upcycling', 'https://img.youtube.com/vi/bQl1ls6zA5A/hqdefault.jpg', 'https://www.youtube.com/watch?v=bQl1ls6zA5A'),
('BT84Woe-CXc', 5, '10 COOL PAPER CRAFTS YOU SHOULD TRY TO DO in Quarantine AT HOME - Origami Hacks', 'https://img.youtube.com/vi/BT84Woe-CXc/hqdefault.jpg', 'https://www.youtube.com/watch?v=BT84Woe-CXc'),
('c1adiK8nLbA', 14, 'How Rotting Vegetables Make Electricity | World Wide Waste', 'https://img.youtube.com/vi/c1adiK8nLbA/hqdefault.jpg', 'https://www.youtube.com/watch?v=c1adiK8nLbA'),
('Cg0pN1gjLzk', 13, '5 Ideas To Recycle Medical Masks', 'https://img.youtube.com/vi/Cg0pN1gjLzk/hqdefault.jpg', 'https://www.youtube.com/watch?v=Cg0pN1gjLzk'),
('CVVmBuyZWnw', 19, 'Reuse Broken Plate Craft ideas | Best Out of waste | How to reuse broken plates DIY Room Home Decor', 'https://img.youtube.com/vi/CVVmBuyZWnw/hqdefault.jpg', 'https://www.youtube.com/watch?v=CVVmBuyZWnw'),
('cYwFeoceYMg', 5, '10 Easy kids craft ideas with paper | Origami ideas | cool crafts for kids', 'https://img.youtube.com/vi/cYwFeoceYMg/hqdefault.jpg', 'https://www.youtube.com/watch?v=cYwFeoceYMg'),
('dAAyxz_1CO4', 10, 'Amazing projects with copper wire', 'https://img.youtube.com/vi/dAAyxz_1CO4/hqdefault.jpg', 'https://www.youtube.com/watch?v=dAAyxz_1CO4'),
('DKfcF0i4HvA', 5, '13 EASY PAPER CRAFTS AND ORIGAMI IDEAS', 'https://img.youtube.com/vi/DKfcF0i4HvA/hqdefault.jpg', 'https://www.youtube.com/watch?v=DKfcF0i4HvA'),
('dxNto3xgadw', 8, '10 Easy Crafts With Old Clothes', 'https://img.youtube.com/vi/dxNto3xgadw/hqdefault.jpg', 'https://www.youtube.com/watch?v=dxNto3xgadw'),
('e35oVfYRdT0', 8, 'DIY, How To Make Easy Door Mat With Waste Clothes', 'https://img.youtube.com/vi/e35oVfYRdT0/hqdefault.jpg', 'https://www.youtube.com/watch?v=e35oVfYRdT0'),
('eDOAKQFSLgA', 19, 'How To Recycle Old Clothes | One Small Step', 'https://img.youtube.com/vi/eDOAKQFSLgA/hqdefault.jpg', 'https://www.youtube.com/watch?v=eDOAKQFSLgA'),
('eFlhYS-_tpY', 14, 'Make kitchen waste compost easily at home (English subtitles )', 'https://img.youtube.com/vi/eFlhYS-_tpY/hqdefault.jpg', 'https://www.youtube.com/watch?v=eFlhYS-_tpY'),
('eFR25qWzJiY', 13, 'Best Out Of Waste Surgical Mask Wall Decor |  Walldecor Making Craft Idea | Recycled Material Craft', 'https://img.youtube.com/vi/eFR25qWzJiY/hqdefault.jpg', 'https://www.youtube.com/watch?v=eFR25qWzJiY'),
('EhsE3wgf-Jw', 9, 'SIAPA  SANGKA BATERAI BEKAS HP ADA KANDUNGAN EMASNYA...??', 'https://img.youtube.com/vi/EhsE3wgf-Jw/hqdefault.jpg', 'https://www.youtube.com/watch?v=EhsE3wgf-Jw'),
('EMIIKHLb07Y', 5, 'Ide Kreatif Dengan Kertas Yang Ada Di Level Lain', 'https://img.youtube.com/vi/EMIIKHLb07Y/hqdefault.jpg', 'https://www.youtube.com/watch?v=EMIIKHLb07Y'),
('Ev5clZKeiGA', 4, '17 COOL CARDBOARD CRAFTS AND IDEAS', 'https://img.youtube.com/vi/Ev5clZKeiGA/hqdefault.jpg', 'https://www.youtube.com/watch?v=Ev5clZKeiGA'),
('ez3xep2j0rc', 2, 'Membuat botol hias dari botol bekas & benang sulam', 'https://img.youtube.com/vi/ez3xep2j0rc/hqdefault.jpg', 'https://www.youtube.com/watch?v=ez3xep2j0rc'),
('EZekQTq0OqA', 20, 'A Guide to Recycling Plastic Safely', 'https://img.youtube.com/vi/EZekQTq0OqA/hqdefault.jpg', 'https://www.youtube.com/watch?v=EZekQTq0OqA'),
('f1mtDRLJbCE', 21, 'DAUR ULANG SAMPAH DAUN BAWANG', 'https://img.youtube.com/vi/f1mtDRLJbCE/hqdefault.jpg', 'https://www.youtube.com/watch?v=f1mtDRLJbCE'),
('FIb8wRXluXE', 15, 'DIY case hp pakai benang wol | diy kreatif | kerajinan tangan', 'https://img.youtube.com/vi/FIb8wRXluXE/hqdefault.jpg', 'https://www.youtube.com/watch?v=FIb8wRXluXE'),
('fKddqY-oFf4', 21, 'Membuat bahan bakar gas dari sayuran', 'https://img.youtube.com/vi/fKddqY-oFf4/hqdefault.jpg', 'https://www.youtube.com/watch?v=fKddqY-oFf4'),
('fLEkneZS6-0', 7, 'Flowers Making With Plastic Carry Bags | DIY | Carry Bags Re Use Ideas | Best Out Of Waste', 'https://img.youtube.com/vi/fLEkneZS6-0/hqdefault.jpg', 'https://www.youtube.com/watch?v=fLEkneZS6-0'),
('FpsXvO5LsTY', 20, '3 Easy Recycled Plastic Projects | Recycling for Beginners', 'https://img.youtube.com/vi/FpsXvO5LsTY/hqdefault.jpg', 'https://www.youtube.com/watch?v=FpsXvO5LsTY'),
('G3l6vJNSzlY', 12, 'Recycle Right Lancaster: How to Recycle Metal at Home', 'https://img.youtube.com/vi/G3l6vJNSzlY/hqdefault.jpg', 'https://www.youtube.com/watch?v=G3l6vJNSzlY'),
('Gcewl2CDip0', 13, 'Face Mask Recycling Idea | Face Mask Craft Tutorial | How to Reuse Surgical Face Mask', 'https://img.youtube.com/vi/Gcewl2CDip0/hqdefault.jpg', 'https://www.youtube.com/watch?v=Gcewl2CDip0'),
('gsHs1kb7m-k', 3, 'Recycle cans into Airplane | Recycle Craft', 'https://img.youtube.com/vi/gsHs1kb7m-k/hqdefault.jpg', 'https://www.youtube.com/watch?v=gsHs1kb7m-k'),
('h090hOfqtM4', 2, 'DIY : Botol Kaca Bekas | Farmhouse Decoration From Trash Bottle', 'https://img.youtube.com/vi/h090hOfqtM4/hqdefault.jpg', 'https://www.youtube.com/watch?v=h090hOfqtM4'),
('H16O7kJhjVU', 10, 'How to make a DIY Wire Sculpture', 'https://img.youtube.com/vi/H16O7kJhjVU/hqdefault.jpg', 'https://www.youtube.com/watch?v=H16O7kJhjVU'),
('HBXjr982vDI', 1, 'Ide Kreatif Membuat Bunga dari Botol Bekas', 'https://img.youtube.com/vi/HBXjr982vDI/hqdefault.jpg', 'https://www.youtube.com/watch?v=HBXjr982vDI'),
('Hcn3xk-2ZTc', 14, '6 Easy Ideas For Food Waste Recycling At Home', 'https://img.youtube.com/vi/Hcn3xk-2ZTc/hqdefault.jpg', 'https://www.youtube.com/watch?v=Hcn3xk-2ZTc'),
('HEI77wllj10', 18, 'Ide kreatif Cara buat DEKORASI DINDING dari Styrofoam bekas - kerajinan tangan terbaru', 'https://img.youtube.com/vi/HEI77wllj10/hqdefault.jpg', 'https://www.youtube.com/watch?v=HEI77wllj10'),
('HhjLliBtT-Q', 1, 'cara membuat mobil karet bertenaga dari botol bekas', 'https://img.youtube.com/vi/HhjLliBtT-Q/hqdefault.jpg', 'https://www.youtube.com/watch?v=HhjLliBtT-Q'),
('HjVEIMDwPOA', 2, 'Ide Daur Ulang Botol Kaca Bekas | Simple Upcycling Glass bottle', 'https://img.youtube.com/vi/HjVEIMDwPOA/hqdefault.jpg', 'https://www.youtube.com/watch?v=HjVEIMDwPOA'),
('HQyQkHtt5is', 12, 'How to recycle steel', 'https://img.youtube.com/vi/HQyQkHtt5is/hqdefault.jpg', 'https://www.youtube.com/watch?v=HQyQkHtt5is'),
('hrqDU2PqnqY', 10, '10 Crazy Ideas With Cables And Wires', 'https://img.youtube.com/vi/hrqDU2PqnqY/hqdefault.jpg', 'https://www.youtube.com/watch?v=hrqDU2PqnqY'),
('iCDFDW_VCa8', 1, 'From Plastic Bottle to Plane | Kreasi dari botol bekas', 'https://img.youtube.com/vi/iCDFDW_VCa8/hqdefault.jpg', 'https://www.youtube.com/watch?v=iCDFDW_VCa8'),
('IckQlRNXP-w', 18, 'Ide kreatif dari styrofoam || membuat bunga pompom dari styrofoam || bunga cantik dari styrofoam', 'https://img.youtube.com/vi/IckQlRNXP-w/hqdefault.jpg', 'https://www.youtube.com/watch?v=IckQlRNXP-w'),
('IH3KzcrLmqI', 5, '10 Easy Paper Crafts for Kids | Paper Circle Crafts | DIY Paper Toys', 'https://img.youtube.com/vi/IH3KzcrLmqI/hqdefault.jpg', 'https://www.youtube.com/watch?v=IH3KzcrLmqI'),
('IizRZhCDkQc', 19, '3 Best Craft Ideas Out Of Waste Pens | Reuse Of Old Pens | Best Out Of Waste Craft Ideas', 'https://img.youtube.com/vi/IizRZhCDkQc/hqdefault.jpg', 'https://www.youtube.com/watch?v=IizRZhCDkQc'),
('INnmCJ-xzMU', 9, 'Dari limbah elektronik bisa jadi Big Powerbank', 'https://img.youtube.com/vi/INnmCJ-xzMU/hqdefault.jpg', 'https://www.youtube.com/watch?v=INnmCJ-xzMU'),
('InVTZvTOGLA', 6, 'Mendaur ulang ban bekas menjadi pot bunga berwarna-warni untuk taman dan halaman Anda', 'https://img.youtube.com/vi/InVTZvTOGLA/hqdefault.jpg', 'https://www.youtube.com/watch?v=InVTZvTOGLA'),
('IoHXIlzpUYg', 18, 'Ide Kreatif Bonsai Sakura dari Styrofoam dan koran bekas | Styrofoam Craft Ideas | Best waste', 'https://img.youtube.com/vi/IoHXIlzpUYg/hqdefault.jpg', 'https://www.youtube.com/watch?v=IoHXIlzpUYg'),
('iOIP_qXNsoU', 7, '26 ORIGINAL WAYS TO USE PLASTIC BAGS', 'https://img.youtube.com/vi/iOIP_qXNsoU/hqdefault.jpg', 'https://www.youtube.com/watch?v=iOIP_qXNsoU'),
('IoNBhE_Cjm8', 18, 'DIY Rak dinding Styrofoam | GRZ.M', 'https://img.youtube.com/vi/IoNBhE_Cjm8/hqdefault.jpg', 'https://www.youtube.com/watch?v=IoNBhE_Cjm8'),
('ip20iizTFrg', 17, 'A New Way to Recycle Plastic Bottles', 'https://img.youtube.com/vi/ip20iizTFrg/hqdefault.jpg', 'https://www.youtube.com/watch?v=ip20iizTFrg'),
('iTWJxTXItV4', 3, 'SANGAT BERGUNA! Anda tidak akan membuang Kaleng ke tempat sampah setelah mengetahui ide ini.', 'https://img.youtube.com/vi/iTWJxTXItV4/hqdefault.jpg', 'https://www.youtube.com/watch?v=iTWJxTXItV4'),
('ixZvATfISXo', 19, 'How Old Toys Are Recycled Into Furniture', 'https://img.youtube.com/vi/ixZvATfISXo/hqdefault.jpg', 'https://www.youtube.com/watch?v=ixZvATfISXo'),
('iYRMzgPoUp0', 15, 'Making a ballgown out of 1000 old phone cases (because I have no chill) #ad #CASETiFY #ReCASETiFY', 'https://img.youtube.com/vi/iYRMzgPoUp0/hqdefault.jpg', 'https://www.youtube.com/watch?v=iYRMzgPoUp0'),
('j-7grMXIXs0', 7, 'Beginners\' Guide to Plastic Bag Recycling - How to Make a Wallet', 'https://img.youtube.com/vi/j-7grMXIXs0/hqdefault.jpg', 'https://www.youtube.com/watch?v=j-7grMXIXs0'),
('J8lWh4PDaew', 1, 'Wadah serbaguna dari botol plastik bekas ! Tanpa biaya ! | Ide kreatif dari barang bekas', 'https://img.youtube.com/vi/J8lWh4PDaew/hqdefault.jpg', 'https://www.youtube.com/watch?v=J8lWh4PDaew'),
('jBvEWB8Uwn8', 1, 'Membuat Hiasan Pot Dari Botol Bekas Tugas Kelas 2 Tema 5 || Vas Bunga Dari Botol Plastik Bekas', 'https://img.youtube.com/vi/jBvEWB8Uwn8/hqdefault.jpg', 'https://www.youtube.com/watch?v=jBvEWB8Uwn8'),
('JQocEeIuKxM', 1, 'Cara Membuat Celengan Dari Botol Bekas Yang Bikin Tetangga Nyinyir || Ide Kreatif', 'https://img.youtube.com/vi/JQocEeIuKxM/hqdefault.jpg', 'https://www.youtube.com/watch?v=JQocEeIuKxM'),
('JsltDFdXETg', 2, 'pressed flower || kerajinan dari botol kaca bekas', 'https://img.youtube.com/vi/JsltDFdXETg/hqdefault.jpg', 'https://www.youtube.com/watch?v=JsltDFdXETg'),
('JTa75n-iai8', 4, '27 FUN AND SIMPLE CARDBOARD DIYS FOR KIDS', 'https://img.youtube.com/vi/JTa75n-iai8/hqdefault.jpg', 'https://www.youtube.com/watch?v=JTa75n-iai8'),
('jW2VJIXlS-s', 6, 'Garden Decoration Ideas from Cement and Old tires | Garden design with beautiful Small Aquarium', 'https://img.youtube.com/vi/jW2VJIXlS-s/hqdefault.jpg', 'https://www.youtube.com/watch?v=jW2VJIXlS-s'),
('k1u0II1KrPs', 16, 'Peluang Bisnis dari Sampah, Urban Compost Bali Mengubah Sisa Makanan Jadi Pupuk', 'https://img.youtube.com/vi/k1u0II1KrPs/hqdefault.jpg', 'https://www.youtube.com/watch?v=k1u0II1KrPs'),
('K22n6OUIh4c', 4, 'DIY - 10 Awesome Cardboard Crafts Ideas - Best out of Waste', 'https://img.youtube.com/vi/K22n6OUIh4c/hqdefault.jpg', 'https://www.youtube.com/watch?v=K22n6OUIh4c'),
('k5kvPQ1qtc8', 17, '4 AMAZINGLY EASY WAYS TO REUSE/RECYCLE DISPOSABLE PLASTIC SPOON AND FORK RECYCLING IDEAS', 'https://img.youtube.com/vi/k5kvPQ1qtc8/hqdefault.jpg', 'https://www.youtube.com/watch?v=k5kvPQ1qtc8'),
('KIKAhhO4xQA', 16, '5 Easy Food Waste Solutions | Food Waste Recycling at Home', 'https://img.youtube.com/vi/KIKAhhO4xQA/hqdefault.jpg', 'https://www.youtube.com/watch?v=KIKAhhO4xQA'),
('KkBF3h_ZZPk', 16, 'How to Recycle Food Waste at Home', 'https://img.youtube.com/vi/KkBF3h_ZZPk/hqdefault.jpg', 'https://www.youtube.com/watch?v=KkBF3h_ZZPk'),
('KLM8zx2E72k', 3, 'cara membuat bunga dari kaleng bekas', 'https://img.youtube.com/vi/KLM8zx2E72k/hqdefault.jpg', 'https://www.youtube.com/watch?v=KLM8zx2E72k'),
('kwajGch9cKA', 21, 'Cara membuat kompos dari sampah rumah tangga tanpa bau', 'https://img.youtube.com/vi/kwajGch9cKA/hqdefault.jpg', 'https://www.youtube.com/watch?v=kwajGch9cKA'),
('L0sC4NzsslY', 4, '30 COOL CARDBOARD CRAFTS AND IDEAS', 'https://img.youtube.com/vi/L0sC4NzsslY/hqdefault.jpg', 'https://www.youtube.com/watch?v=L0sC4NzsslY'),
('l7esyMuhKsc', 2, '13 Ide Dekorasi Botol yang Menakjubkan dengan Rami | Gunakan kembali Botol Kaca Tua', 'https://img.youtube.com/vi/l7esyMuhKsc/hqdefault.jpg', 'https://www.youtube.com/watch?v=l7esyMuhKsc'),
('lFrDc225ZZs', 9, 'Amazing Electronic Projects From Old Scrap Circuit Boards', 'https://img.youtube.com/vi/lFrDc225ZZs/hqdefault.jpg', 'https://www.youtube.com/watch?v=lFrDc225ZZs'),
('LM9nRUwOSdw', 20, 'Plant Pots made from Recycled Plastic', 'https://img.youtube.com/vi/LM9nRUwOSdw/hqdefault.jpg', 'https://www.youtube.com/watch?v=LM9nRUwOSdw'),
('Lp6ZexUduKU', 6, 'Tinker With Old Tires | DIY Decoration & Furniture Ideas', 'https://img.youtube.com/vi/Lp6ZexUduKU/hqdefault.jpg', 'https://www.youtube.com/watch?v=Lp6ZexUduKU'),
('LR9FtWVjk2c', 11, 'What *REALLY* happens to &#39;Recycled&#39; Glass?! - (you might be surprised)', 'https://img.youtube.com/vi/LR9FtWVjk2c/hqdefault.jpg', 'https://www.youtube.com/watch?v=LR9FtWVjk2c'),
('lt5g749k2pY', 21, 'Waste Coconut Husks recycle #shorts #diy #viral #youtubeshorts #trending #crafts #homedecor', 'https://img.youtube.com/vi/lt5g749k2pY/hqdefault.jpg', 'https://www.youtube.com/watch?v=lt5g749k2pY'),
('lTT2utfcHF0', 7, 'BESI tas belanja Plastik, Anda tidak akan percaya dengan hasil yang luar biasa. ide daur ulang', 'https://img.youtube.com/vi/lTT2utfcHF0/hqdefault.jpg', 'https://www.youtube.com/watch?v=lTT2utfcHF0'),
('M6Yw6mlSH-0', 18, 'Bikin mainan seru cuma modal styrofoam bekas  #styrofoam #diyideas #idebermainanak #diytoys', 'https://img.youtube.com/vi/M6Yw6mlSH-0/hqdefault.jpg', 'https://www.youtube.com/watch?v=M6Yw6mlSH-0'),
('mAEsmuzQkhk', 10, 'waste electrical wire crafts/easy wire crafts/copper wire reuse ideas/wire tree making/waste reuse', 'https://img.youtube.com/vi/mAEsmuzQkhk/hqdefault.jpg', 'https://www.youtube.com/watch?v=mAEsmuzQkhk'),
('mGNpYEQM7Sw', 20, 'Mengolah Sampah Plastik Tertolak jadi Barang yang Lebih Berguna - Mikroplastik', 'https://img.youtube.com/vi/mGNpYEQM7Sw/hqdefault.jpg', 'https://www.youtube.com/watch?v=mGNpYEQM7Sw'),
('mhqjcPHFOaE', 10, '30+ EASY WIRE CRAFTS YOU`LL FALL IN LOVE', 'https://img.youtube.com/vi/mhqjcPHFOaE/hqdefault.jpg', 'https://www.youtube.com/watch?v=mhqjcPHFOaE'),
('MHxudHu4VK4', 5, '17 FUN AND CUTE PAPER CRAFTS', 'https://img.youtube.com/vi/MHxudHu4VK4/hqdefault.jpg', 'https://www.youtube.com/watch?v=MHxudHu4VK4'),
('Mk1diybYcR8', 19, '5 Beauty Waste Items You Can Recycle With Green Circle Salons', 'https://img.youtube.com/vi/Mk1diybYcR8/hqdefault.jpg', 'https://www.youtube.com/watch?v=Mk1diybYcR8'),
('MNFm3pyVp6g', 14, 'How to recycle your food waste', 'https://img.youtube.com/vi/MNFm3pyVp6g/hqdefault.jpg', 'https://www.youtube.com/watch?v=MNFm3pyVp6g'),
('MObulHcfPWs', 3, 'Cara Membuat Motor Mainan Dari Kaleng Bekas', 'https://img.youtube.com/vi/MObulHcfPWs/hqdefault.jpg', 'https://www.youtube.com/watch?v=MObulHcfPWs'),
('mq2gXRozdT8', 8, 'Doormat Using Waste Cloth Easy , Craft With Priya', 'https://img.youtube.com/vi/mq2gXRozdT8/hqdefault.jpg', 'https://www.youtube.com/watch?v=mq2gXRozdT8'),
('MRpLQQHOB9A', 12, 'Scrap Metal Furniture Ideas / Metal recycling ideas', 'https://img.youtube.com/vi/MRpLQQHOB9A/hqdefault.jpg', 'https://www.youtube.com/watch?v=MRpLQQHOB9A'),
('nAAoqsNv1R4', 8, 'Just Cut Off Your Shirt ll Like Magic it Turns Into Wonderful Works ll', 'https://img.youtube.com/vi/nAAoqsNv1R4/hqdefault.jpg', 'https://www.youtube.com/watch?v=nAAoqsNv1R4'),
('NdJP6Bzr53E', 10, 'DIY | Waste Electical Wire Into A Beautiful Glowing Beads Tree | Easy Electrical Wire Craft', 'https://img.youtube.com/vi/NdJP6Bzr53E/hqdefault.jpg', 'https://www.youtube.com/watch?v=NdJP6Bzr53E'),
('Nf3En7l3-40', 6, 'DIY Making of Tyre Seat at Home', 'https://img.youtube.com/vi/Nf3En7l3-40/hqdefault.jpg', 'https://www.youtube.com/watch?v=Nf3En7l3-40'),
('nfVcmIpGB8M', 1, 'Plastic Bottle Crat Ideas | 2 Ide Kreatif Wadah Serbaguna dari Botol Plastik Bekas', 'https://img.youtube.com/vi/nfVcmIpGB8M/hqdefault.jpg', 'https://www.youtube.com/watch?v=nfVcmIpGB8M'),
('Nhhcc_28dks', 9, '6 SMART WAYS TO REUSE/RECYCLE OLD CDS|Best Reuse Ideas', 'https://img.youtube.com/vi/Nhhcc_28dks/hqdefault.jpg', 'https://www.youtube.com/watch?v=Nhhcc_28dks'),
('nHsex8cf2fs', 2, '3 Ideas to Recycle Beautiful Decorations from Glass Bottles | EP.1 | DIY Channel', 'https://img.youtube.com/vi/nHsex8cf2fs/hqdefault.jpg', 'https://www.youtube.com/watch?v=nHsex8cf2fs'),
('nKx_pXWQLKQ', 18, 'ini MANTAP !! Ide kreatif Styrofoam bekas', 'https://img.youtube.com/vi/nKx_pXWQLKQ/hqdefault.jpg', 'https://www.youtube.com/watch?v=nKx_pXWQLKQ'),
('Nulpilk4WYw', 8, '10 Min DIY Tote bag made with unused Jeans', 'https://img.youtube.com/vi/Nulpilk4WYw/hqdefault.jpg', 'https://www.youtube.com/watch?v=Nulpilk4WYw'),
('NVgVTowOMeY', 8, 'DIY-Floor Sofa With Cover - Use Old Clothes/ Reuse Old T-shirts, Saree/Waste Katran Use', 'https://img.youtube.com/vi/NVgVTowOMeY/hqdefault.jpg', 'https://www.youtube.com/watch?v=NVgVTowOMeY'),
('NwE2jgaxX64', 9, 'DIY e Waste Craft | Pencil Stand - LETS BE CREATIVE!! | ARZOO VLOGS', 'https://img.youtube.com/vi/NwE2jgaxX64/hqdefault.jpg', 'https://www.youtube.com/watch?v=NwE2jgaxX64'),
('nyRU8o6YQIQ', 17, 'Plastic Recycle | #shorts #youtubeshorts #mravi', 'https://img.youtube.com/vi/nyRU8o6YQIQ/hqdefault.jpg', 'https://www.youtube.com/watch?v=nyRU8o6YQIQ'),
('N_H1W739pJU', 1, 'Cara Membuat Toples Dari Botol Plastik | Craft Ideas For Plastic Bottle', 'https://img.youtube.com/vi/N_H1W739pJU/hqdefault.jpg', 'https://www.youtube.com/watch?v=N_H1W739pJU'),
('O7JkFJXcOKM', 17, 'Clever ways to reuse and recycle empty plastic bottles', 'https://img.youtube.com/vi/O7JkFJXcOKM/hqdefault.jpg', 'https://www.youtube.com/watch?v=O7JkFJXcOKM'),
('ogE3n_KdYfg', 1, 'Ide Kreatif dari Gelas Plastik Bekas || Ide yang Tak terpikirkan dari Gelas Plastik Minuman', 'https://img.youtube.com/vi/ogE3n_KdYfg/hqdefault.jpg', 'https://www.youtube.com/watch?v=ogE3n_KdYfg'),
('OKlQQKE-0kI', 17, 'Superb Home Decor Ideas Using Plastic Spoons and Paper Cups | Recycle | Best Out Of Waste', 'https://img.youtube.com/vi/OKlQQKE-0kI/hqdefault.jpg', 'https://www.youtube.com/watch?v=OKlQQKE-0kI'),
('OMTguDCjeTU', 21, 'Best Food Waste Recycle method ! Easy Dispose', 'https://img.youtube.com/vi/OMTguDCjeTU/hqdefault.jpg', 'https://www.youtube.com/watch?v=OMTguDCjeTU'),
('oOg4qkGA964', 2, 'KREASI BOTOL KACA BEKAS | BOTOL BEKAS JADI CANTIK | GLASS BOTTLE CRAFT', 'https://img.youtube.com/vi/oOg4qkGA964/hqdefault.jpg', 'https://www.youtube.com/watch?v=oOg4qkGA964'),
('ot6Sa1JR93A', 14, 'Organic Waste Recycling Line for Composting', 'https://img.youtube.com/vi/ot6Sa1JR93A/hqdefault.jpg', 'https://www.youtube.com/watch?v=ot6Sa1JR93A'),
('OwmgYUJXCyM', 20, '7 Ways to Make Stuff from Recycled Plastic | From Tin Cans to Wazer Waterjet cutting!', 'https://img.youtube.com/vi/OwmgYUJXCyM/hqdefault.jpg', 'https://www.youtube.com/watch?v=OwmgYUJXCyM'),
('Pl97OBNaRF0', 17, '5 Things You Can Do to Recycle Plastic Forks and Spoons', 'https://img.youtube.com/vi/Pl97OBNaRF0/hqdefault.jpg', 'https://www.youtube.com/watch?v=Pl97OBNaRF0'),
('p_qRi_gimFU', 12, 'DIY Metal Melting Furnace at Home l Homemade Metal Foundry l', 'https://img.youtube.com/vi/p_qRi_gimFU/hqdefault.jpg', 'https://www.youtube.com/watch?v=p_qRi_gimFU'),
('qHerkpmK1YQ', 16, 'DIY Indoor Compost #shorts', 'https://img.youtube.com/vi/qHerkpmK1YQ/hqdefault.jpg', 'https://www.youtube.com/watch?v=qHerkpmK1YQ'),
('ql-rRp_7j1I', 15, 'Cara Modifikasi casing hp lama menjadi keren || Diy phone case || Ide kreatif tak terfikirkan !!!', 'https://img.youtube.com/vi/ql-rRp_7j1I/hqdefault.jpg', 'https://www.youtube.com/watch?v=ql-rRp_7j1I'),
('QnZ3LSsQkSw', 14, 'How To Make Compost | IN 10 DAYS', 'https://img.youtube.com/vi/QnZ3LSsQkSw/hqdefault.jpg', 'https://www.youtube.com/watch?v=QnZ3LSsQkSw'),
('QtmCpr_B7nI', 13, 'Ide Kreatif Masker Sekali Pakai |  Membuat Bonsai Bunga Sakura Dari Masker Bekas', 'https://img.youtube.com/vi/QtmCpr_B7nI/hqdefault.jpg', 'https://www.youtube.com/watch?v=QtmCpr_B7nI'),
('qTrsFgGBwcs', 7, 'How to make FABRIC from PLASTIC grocery bags - Upcycling Plastic', 'https://img.youtube.com/vi/qTrsFgGBwcs/hqdefault.jpg', 'https://www.youtube.com/watch?v=qTrsFgGBwcs'),
('r5hehRmMfEk', 7, '15 AWESOME DIY CRAFTS WITH PLASTIC BAGS', 'https://img.youtube.com/vi/r5hehRmMfEk/hqdefault.jpg', 'https://www.youtube.com/watch?v=r5hehRmMfEk'),
('rEaqfA-1JnM', 19, '21 Surprising Ways To Upcycle Old Plastic Products', 'https://img.youtube.com/vi/rEaqfA-1JnM/hqdefault.jpg', 'https://www.youtube.com/watch?v=rEaqfA-1JnM'),
('REC7X1-wyIk', 8, '20 WAYS TO GIVE NEW LIFE TO YOUR OLD CLOTHES', 'https://img.youtube.com/vi/REC7X1-wyIk/hqdefault.jpg', 'https://www.youtube.com/watch?v=REC7X1-wyIk'),
('rgEEXhbar3A', 12, 'How to recycle metal at home', 'https://img.youtube.com/vi/rgEEXhbar3A/hqdefault.jpg', 'https://www.youtube.com/watch?v=rgEEXhbar3A'),
('RH7F44-okp0', 18, 'IDE KREATIF DARI BARANG BEKAS styrofoam', 'https://img.youtube.com/vi/RH7F44-okp0/hqdefault.jpg', 'https://www.youtube.com/watch?v=RH7F44-okp0'),
('RN38c0oTc9o', 10, 'Easy Recycled Cable Spool crafts Ideas   DIY Furniture Ideas from Wooden Wire Cable Spools', 'https://img.youtube.com/vi/RN38c0oTc9o/hqdefault.jpg', 'https://www.youtube.com/watch?v=RN38c0oTc9o'),
('rP5OP1IkCkM', 10, 'DIY HOME DECOR | Wire Art | Art And Craft | Easy Wire Art | New Ways to Decorate Home Using Wire', 'https://img.youtube.com/vi/rP5OP1IkCkM/hqdefault.jpg', 'https://www.youtube.com/watch?v=rP5OP1IkCkM'),
('RY29qJZjMO0', 13, 'Best Out Of Waste SURGICAL MASK | Easy CARDBOARD Craft Idea | Recycled Material Craft', 'https://img.youtube.com/vi/RY29qJZjMO0/hqdefault.jpg', 'https://www.youtube.com/watch?v=RY29qJZjMO0'),
('rZFH5PvsbJE', 9, 'Ide kreatif canggih dari MOUSE rusak', 'https://img.youtube.com/vi/rZFH5PvsbJE/hqdefault.jpg', 'https://www.youtube.com/watch?v=rZFH5PvsbJE'),
('SFxS3a8fw4M', 19, 'How to Reuse Old Waste Toothbrush at home | Best out of waste | Artkala 473', 'https://img.youtube.com/vi/SFxS3a8fw4M/hqdefault.jpg', 'https://www.youtube.com/watch?v=SFxS3a8fw4M'),
('SGScH477yDA', 4, '20 EASY CARDBOARD CRAFTS FOR YOU', 'https://img.youtube.com/vi/SGScH477yDA/hqdefault.jpg', 'https://www.youtube.com/watch?v=SGScH477yDA'),
('SHfhiaezqdg', 5, '10 Fun and Easy Origami and Paper Crafts', 'https://img.youtube.com/vi/SHfhiaezqdg/hqdefault.jpg', 'https://www.youtube.com/watch?v=SHfhiaezqdg'),
('SlfYTmUVgEQ', 5, '10 FUN PAPER CRAFTS FOR KIDS', 'https://img.youtube.com/vi/SlfYTmUVgEQ/hqdefault.jpg', 'https://www.youtube.com/watch?v=SlfYTmUVgEQ'),
('Sr6DgQ18drA', 20, '32 GENIUS WAYS TO RECYCLE PLASTIC', 'https://img.youtube.com/vi/Sr6DgQ18drA/hqdefault.jpg', 'https://www.youtube.com/watch?v=Sr6DgQ18drA'),
('TCo7jEF-aDE', 8, '10 Beautiful Doormat Making || Old Clothes Reuse Idea || Jeans Handmade Things', 'https://img.youtube.com/vi/TCo7jEF-aDE/hqdefault.jpg', 'https://www.youtube.com/watch?v=TCo7jEF-aDE'),
('TuREEO8he74', 2, 'Kreasi Botol Kaca Bekas | Glass Bottle Craft | DIY Home Decoration Ideas | Bottle Art', 'https://img.youtube.com/vi/TuREEO8he74/hqdefault.jpg', 'https://www.youtube.com/watch?v=TuREEO8he74'),
('U2K39iS4dwk', 9, 'HARTA KARUN NIH !!! 2 IDE KREATIF CANGGIH DARI BARANG BEKAS', 'https://img.youtube.com/vi/U2K39iS4dwk/hqdefault.jpg', 'https://www.youtube.com/watch?v=U2K39iS4dwk'),
('ug8x-EDZFQc', 6, 'RECYCLING OLD TIRES HACKS', 'https://img.youtube.com/vi/ug8x-EDZFQc/hqdefault.jpg', 'https://www.youtube.com/watch?v=ug8x-EDZFQc'),
('UMy9NyHfxmU', 12, 'Scrap Metal Sorting And Storage - How To Organize Your Scrap', 'https://img.youtube.com/vi/UMy9NyHfxmU/hqdefault.jpg', 'https://www.youtube.com/watch?v=UMy9NyHfxmU'),
('uR57PlRoA6s', 20, 'Turning Plastic Waste into 100% Recycled Tiles', 'https://img.youtube.com/vi/uR57PlRoA6s/hqdefault.jpg', 'https://www.youtube.com/watch?v=uR57PlRoA6s'),
('USnUpjKG99c', 11, 'GLASS BOTTLES to SAND glass recycling DIY colored glass', 'https://img.youtube.com/vi/USnUpjKG99c/hqdefault.jpg', 'https://www.youtube.com/watch?v=USnUpjKG99c'),
('v-tyyxF46cE', 21, 'Membuat Kompos dari Sampah Daun || Mengubah Sampah jadi Pupuk Organik', 'https://img.youtube.com/vi/v-tyyxF46cE/hqdefault.jpg', 'https://www.youtube.com/watch?v=v-tyyxF46cE'),
('V31LQHO2Ioo', 13, 'Surgical Facemask Craft Ideas / Recycling Disposable Face Mask / Mask Reuse Ideas', 'https://img.youtube.com/vi/V31LQHO2Ioo/hqdefault.jpg', 'https://www.youtube.com/watch?v=V31LQHO2Ioo'),
('vef3JKIsDgI', 5, 'Origami melompat kertas gurita | Cara membuat mainan gelisah', 'https://img.youtube.com/vi/vef3JKIsDgI/hqdefault.jpg', 'https://www.youtube.com/watch?v=vef3JKIsDgI'),
('VN9Lezlm3RU', 4, '25 INCREDIBLE CARDBOARD CRAFTS TO MAKE AT HOME', 'https://img.youtube.com/vi/VN9Lezlm3RU/hqdefault.jpg', 'https://www.youtube.com/watch?v=VN9Lezlm3RU'),
('w-Ud0SzgFHc', 7, '18 PLASTIC BAG HACKS AND IDEAS', 'https://img.youtube.com/vi/w-Ud0SzgFHc/hqdefault.jpg', 'https://www.youtube.com/watch?v=w-Ud0SzgFHc'),
('w0IJs9iS1w8', 15, 'Let’s decorate a phone cover #handmade #satisfying #diy #journal', 'https://img.youtube.com/vi/w0IJs9iS1w8/hqdefault.jpg', 'https://www.youtube.com/watch?v=w0IJs9iS1w8'),
('w91ayV3VYKI', 2, 'vas aesthetic dari botol kaca bekas || DIY Flower Vase tutorial', 'https://img.youtube.com/vi/w91ayV3VYKI/hqdefault.jpg', 'https://www.youtube.com/watch?v=w91ayV3VYKI'),
('WfCoeXlosF4', 4, '30+ Creative Cardboard Crafts For DIY Enthusiasts', 'https://img.youtube.com/vi/WfCoeXlosF4/hqdefault.jpg', 'https://www.youtube.com/watch?v=WfCoeXlosF4'),
('wGJH4_l0uVc', 6, 'Creative ideas potted plants at home // Make potted plants from cement and old tires', 'https://img.youtube.com/vi/wGJH4_l0uVc/hqdefault.jpg', 'https://www.youtube.com/watch?v=wGJH4_l0uVc'),
('wXe3pH64C7s', 16, 'Mengolah Sisa Makanan Agar Tak Menjadi Sampah.', 'https://img.youtube.com/vi/wXe3pH64C7s/hqdefault.jpg', 'https://www.youtube.com/watch?v=wXe3pH64C7s'),
('xIVONw9Pr4w', 12, 'Did you know this about aluminum cans?', 'https://img.youtube.com/vi/xIVONw9Pr4w/hqdefault.jpg', 'https://www.youtube.com/watch?v=xIVONw9Pr4w'),
('XKI52QBxG48', 6, 'Make a water bath from used tires', 'https://img.youtube.com/vi/XKI52QBxG48/hqdefault.jpg', 'https://www.youtube.com/watch?v=XKI52QBxG48'),
('xnqMf2AtxDo', 17, 'USEFUL IDEAS TO RECYCLE ALMOST ANYTHING AROUND YOU', 'https://img.youtube.com/vi/xnqMf2AtxDo/hqdefault.jpg', 'https://www.youtube.com/watch?v=xnqMf2AtxDo'),
('xozxIO_oLjU', 15, '16 PHONE CASE IDEAS YOU CAN MAKE IN 5 MINUTES', 'https://img.youtube.com/vi/xozxIO_oLjU/hqdefault.jpg', 'https://www.youtube.com/watch?v=xozxIO_oLjU'),
('xqJg9AsOEAI', 12, 'Make Money Smelting Ingots - Pewter - Simple DIY Melting and Casting Metal at Home', 'https://img.youtube.com/vi/xqJg9AsOEAI/hqdefault.jpg', 'https://www.youtube.com/watch?v=xqJg9AsOEAI'),
('XSP2ldMx2yQ', 1, 'Plastic Bottle Craft DIY Ideas | Best Out of waste bottle | Ide kreatif Botol plastik bekas aqua', 'https://img.youtube.com/vi/XSP2ldMx2yQ/hqdefault.jpg', 'https://www.youtube.com/watch?v=XSP2ldMx2yQ'),
('xyQ5ukvSRnA', 16, 'Top tips for food recycling at home', 'https://img.youtube.com/vi/xyQ5ukvSRnA/hqdefault.jpg', 'https://www.youtube.com/watch?v=xyQ5ukvSRnA'),
('x_7HuUJ7Ifo', 3, 'Cara membuat miniatur drum set dari kaleng bekas', 'https://img.youtube.com/vi/x_7HuUJ7Ifo/hqdefault.jpg', 'https://www.youtube.com/watch?v=x_7HuUJ7Ifo'),
('x_AYxFAyPr8', 11, 'Making art from Recycled Glass', 'https://img.youtube.com/vi/x_AYxFAyPr8/hqdefault.jpg', 'https://www.youtube.com/watch?v=x_AYxFAyPr8'),
('X_xf25QWry4', 14, 'Organic Waste Recycling', 'https://img.youtube.com/vi/X_xf25QWry4/hqdefault.jpg', 'https://www.youtube.com/watch?v=X_xf25QWry4'),
('y6-uY-w1lVI', 7, 'DIY Basket Bag from Plastic | Upcycling Crafts for Eco-Friendly Handmade Bags', 'https://img.youtube.com/vi/y6-uY-w1lVI/hqdefault.jpg', 'https://www.youtube.com/watch?v=y6-uY-w1lVI'),
('yLZgrSpCAVs', 8, '17 Marvelous DIY Ideas For Upcycling Old Clothes', 'https://img.youtube.com/vi/yLZgrSpCAVs/hqdefault.jpg', 'https://www.youtube.com/watch?v=yLZgrSpCAVs'),
('ysaWHG3PFa4', 19, 'How to recycle your skincare products | good light', 'https://img.youtube.com/vi/ysaWHG3PFa4/hqdefault.jpg', 'https://www.youtube.com/watch?v=ysaWHG3PFa4'),
('YZW_QbCQ45o', 9, 'Ide Elektronik Kreatif Paling Berguna', 'https://img.youtube.com/vi/YZW_QbCQ45o/hqdefault.jpg', 'https://www.youtube.com/watch?v=YZW_QbCQ45o'),
('Z-uYoU3UljU', 3, 'Cara Buat Celengan dari Kaleng Bekas || DIY Celengan', 'https://img.youtube.com/vi/Z-uYoU3UljU/hqdefault.jpg', 'https://www.youtube.com/watch?v=Z-uYoU3UljU'),
('z-XeUOhu46M', 11, 'Will Glass Bottles Melt? TKOR Takes Glass Melting To The Next Level With Our DIY Foundry!', 'https://img.youtube.com/vi/z-XeUOhu46M/hqdefault.jpg', 'https://www.youtube.com/watch?v=z-XeUOhu46M'),
('Z7KPL5bq4qs', 2, 'Kerajinan bahan keras buatan dari botol kaca bekas', 'https://img.youtube.com/vi/Z7KPL5bq4qs/hqdefault.jpg', 'https://www.youtube.com/watch?v=Z7KPL5bq4qs'),
('ZAWsflWbSQQ', 16, 'How to Recycle Food Waste at Home', 'https://img.youtube.com/vi/ZAWsflWbSQQ/hqdefault.jpg', 'https://www.youtube.com/watch?v=ZAWsflWbSQQ'),
('ZEVq0oxL4_A', 11, 'Glass Bottle Recycling - Factory Installation Trial in Australia', 'https://img.youtube.com/vi/ZEVq0oxL4_A/hqdefault.jpg', 'https://www.youtube.com/watch?v=ZEVq0oxL4_A'),
('ZhXq3oOYLyA', 3, 'HOW TO TURN TIN CANS INTO BEAUTIFUL DECOR', 'https://img.youtube.com/vi/ZhXq3oOYLyA/hqdefault.jpg', 'https://www.youtube.com/watch?v=ZhXq3oOYLyA'),
('ZqWopILSq2o', 4, '18 BRILLIANT DIYs YOU CAN MAKE FROM CARDBOARD', 'https://img.youtube.com/vi/ZqWopILSq2o/hqdefault.jpg', 'https://www.youtube.com/watch?v=ZqWopILSq2o'),
('Zs7jENQwUEw', 6, '50+ Creative Ideas To Reuse Old Tires', 'https://img.youtube.com/vi/Zs7jENQwUEw/hqdefault.jpg', 'https://www.youtube.com/watch?v=Zs7jENQwUEw'),
('Zw9IrKlmEyE', 10, 'How to make a wire tree | electric wire craft ideas | DIY wire tree', 'https://img.youtube.com/vi/Zw9IrKlmEyE/hqdefault.jpg', 'https://www.youtube.com/watch?v=Zw9IrKlmEyE'),
('zy70DAaeFBI', 14, 'How to Make Compost at Home | Kitchen Waste Compost Update', 'https://img.youtube.com/vi/zy70DAaeFBI/hqdefault.jpg', 'https://www.youtube.com/watch?v=zy70DAaeFBI'),
('_9yYfAgmL9A', 15, 'Merubah Casing HP Lama Menjadi Keren dan Modern | Ide Kreatif', 'https://img.youtube.com/vi/_9yYfAgmL9A/hqdefault.jpg', 'https://www.youtube.com/watch?v=_9yYfAgmL9A'),
('_hAv9wrPAvc', 16, 'Membuat kompos dari sampah dapur di galon, 1 bulan jadi, tanpa EM4, bau &amp; maggot', 'https://img.youtube.com/vi/_hAv9wrPAvc/hqdefault.jpg', 'https://www.youtube.com/watch?v=_hAv9wrPAvc'),
('_JmqqmDRt1Y', 13, 'Ide daur ulang masker bekas pakai yang belum pernah kamu lihat - Indah sekali !', 'https://img.youtube.com/vi/_JmqqmDRt1Y/hqdefault.jpg', 'https://www.youtube.com/watch?v=_JmqqmDRt1Y'),
('_TBwdDp20kY', 4, '21 DIY CARDBOARD TOYS AND CRAFTS FOR THE WHOLE FAMILY', 'https://img.youtube.com/vi/_TBwdDp20kY/hqdefault.jpg', 'https://www.youtube.com/watch?v=_TBwdDp20kY'),
('_VfHLf67SNs', 18, 'Ide Kreatif Bunga Mawar dari Styrofoam Bekas | DIY Styrofoam Rose Flowers', 'https://img.youtube.com/vi/_VfHLf67SNs/hqdefault.jpg', 'https://www.youtube.com/watch?v=_VfHLf67SNs'),
('_WJ9-zNu07E', 15, 'DIY Phone Cover | How To Revamp Your Dirty Mobile Case | #shorts #diy #diyideas', 'https://img.youtube.com/vi/_WJ9-zNu07E/hqdefault.jpg', 'https://www.youtube.com/watch?v=_WJ9-zNu07E');

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `userId` varchar(100) NOT NULL,
  `label_id` int(11) NOT NULL,
  `Youtube_ID` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Table structure for table `label`
--

CREATE TABLE `label` (
  `id` int(11) NOT NULL,
  `label_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `label`
--

INSERT INTO `label` (`id`, `label_name`) VALUES
(1, 'Plastic-Bottle'),
(2, 'Glass-Bottle'),
(3, 'Cans'),
(4, 'Cardbox'),
(5, 'Paper'),
(6, 'Tires'),
(7, 'Plastic-Bag'),
(8, 'Cloth'),
(9, 'E-Waste'),
(10, 'Electric-Cable'),
(11, 'Glass'),
(12, 'Metal'),
(13, 'Medical-Mask'),
(14, 'Organic-Waste'),
(15, 'Phone-Case'),
(16, 'Food-Organic'),
(17, 'Spoon'),
(18, 'Styrofoam'),
(19, 'Miscellaneous-Trash'),
(20, 'Plastic'),
(21, 'Vegetation');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` varchar(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `resetCode` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


--
-- Indexes for dumped tables
--

--
-- Indexes for table `blacklist`
--
ALTER TABLE `blacklist`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token` (`token`) USING HASH;

--
-- Indexes for table `craft_posts`
--
ALTER TABLE `craft_posts`
  ADD PRIMARY KEY (`postId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `data_video`
--
ALTER TABLE `data_video`
  ADD PRIMARY KEY (`Youtube_ID`),
  ADD KEY `label_id` (`label_id`);

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD KEY `userId` (`userId`),
  ADD KEY `label_id` (`label_id`),
  ADD KEY `Youtube_ID` (`Youtube_ID`);

--
-- Indexes for table `label`
--
ALTER TABLE `label`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blacklist`
--
ALTER TABLE `blacklist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `craft_posts`
--
ALTER TABLE `craft_posts`
  ADD CONSTRAINT `craft_posts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `data_video`
--
ALTER TABLE `data_video`
  ADD CONSTRAINT `data_video_ibfk_1` FOREIGN KEY (`label_id`) REFERENCES `label` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `favorites_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `favorites_ibfk_2` FOREIGN KEY (`label_id`) REFERENCES `label` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `favorites_ibfk_3` FOREIGN KEY (`Youtube_ID`) REFERENCES `data_video` (`Youtube_ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
