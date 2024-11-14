-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 05-Dez-2023 às 15:41
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `motoboys`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `entregas`
--

CREATE TABLE `entregas` (
  `registro` int(11) NOT NULL,
  `data` varchar(12) NOT NULL,
  `horaEntrada` varchar(6) NOT NULL,
  `horaSaida` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `entregas`
--

INSERT INTO `entregas` (`registro`, `data`, `horaEntrada`, `horaSaida`) VALUES
(33, '2023-11-11', '10:56', '12:55'),
(39, '2023-12-05', '19:55', '20:55'),
(40, '2023-12-06', '21:56', '22:56'),
(41, '2023-12-12', '23:14', '23:18');

-- --------------------------------------------------------

--
-- Estrutura da tabela `motos`
--

CREATE TABLE `motos` (
  `codMotoboy` int(11) NOT NULL,
  `codEntrega` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `motos`
--

INSERT INTO `motos` (`codMotoboy`, `codEntrega`) VALUES
(1, 33),
(27, 39),
(27, 41),
(31, 39),
(32, 40);

-- --------------------------------------------------------

--
-- Estrutura da tabela `newmotoboys`
--

CREATE TABLE `newmotoboys` (
  `nome` varchar(50) NOT NULL,
  `endereco` varchar(100) NOT NULL,
  `cpf` varchar(15) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `codigo` int(11) NOT NULL,
  `dataCadastro` varchar(12) NOT NULL,
  `codPedido` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `newmotoboys`
--

INSERT INTO `newmotoboys` (`nome`, `endereco`, `cpf`, `telefone`, `codigo`, `dataCadastro`, `codPedido`) VALUES
('jose', 'rua 8', '111.111.111-11', '(11) 11111-1111', 20, '2023-11-10', 1),
('marcelo', 'rua 8', '262.435.424-22', '(12) 12421-3212', 26, '2023-11-17', 1),
('mario', 'rua 18', '424.242.535-35', '(35) 35355-3553', 27, '2023-11-13', 30),
('mauricio', 'Av. w.luis', '325.253.453-52', '(53) 52532-4535', 31, '2023-12-05', 33),
('ricardo', 'rua 8', '457.567.276-75', '(75) 75757-5457', 32, '2023-12-05', 30);

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

CREATE TABLE `pedidos` (
  `codigoPed` int(11) NOT NULL,
  `descricao` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`codigoPed`, `descricao`) VALUES
(20, '40,00'),
(30, '55,00'),
(33, '100,00');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `entregas`
--
ALTER TABLE `entregas`
  ADD PRIMARY KEY (`registro`);

--
-- Índices para tabela `motos`
--
ALTER TABLE `motos`
  ADD PRIMARY KEY (`codMotoboy`,`codEntrega`),
  ADD KEY `fk_codigoEntrega` (`codEntrega`);

--
-- Índices para tabela `newmotoboys`
--
ALTER TABLE `newmotoboys`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `fk_pedido` (`codPedido`);

--
-- Índices para tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`codigoPed`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `entregas`
--
ALTER TABLE `entregas`
  MODIFY `registro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT de tabela `newmotoboys`
--
ALTER TABLE `newmotoboys`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de tabela `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `codigoPed` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
