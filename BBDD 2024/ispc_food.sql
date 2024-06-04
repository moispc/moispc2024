-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 03-06-2024 a las 17:28:54
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `food_ispc`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `authtoken_token`
--

DROP TABLE IF EXISTS `authtoken_token`;
CREATE TABLE IF NOT EXISTS `authtoken_token` (
  `key` varchar(40) COLLATE utf8mb3_spanish_ci NOT NULL,
  `created` datetime(6) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`key`),
  UNIQUE KEY `user_id` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
CREATE TABLE IF NOT EXISTS `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) COLLATE utf8mb3_spanish_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
CREATE TABLE IF NOT EXISTS `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissions_group_id_b120cbf9` (`group_id`),
  KEY `auth_group_permissions_permission_id_84c5c92e` (`permission_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
CREATE TABLE IF NOT EXISTS `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb3_spanish_ci NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) COLLATE utf8mb3_spanish_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  KEY `auth_permission_content_type_id_2f476e4b` (`content_type_id`)
) ENGINE=MyISAM AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add content type', 4, 'add_contenttype'),
(14, 'Can change content type', 4, 'change_contenttype'),
(15, 'Can delete content type', 4, 'delete_contenttype'),
(16, 'Can view content type', 4, 'view_contenttype'),
(17, 'Can add session', 5, 'add_session'),
(18, 'Can change session', 5, 'change_session'),
(19, 'Can delete session', 5, 'delete_session'),
(20, 'Can view session', 5, 'view_session'),
(21, 'Can add Token', 6, 'add_token'),
(22, 'Can change Token', 6, 'change_token'),
(23, 'Can delete Token', 6, 'delete_token'),
(24, 'Can view Token', 6, 'view_token'),
(25, 'Can add Token', 7, 'add_tokenproxy'),
(26, 'Can change Token', 7, 'change_tokenproxy'),
(27, 'Can delete Token', 7, 'delete_tokenproxy'),
(28, 'Can view Token', 7, 'view_tokenproxy'),
(29, 'Can add Usuario', 8, 'add_usuario'),
(30, 'Can change Usuario', 8, 'change_usuario'),
(31, 'Can delete Usuario', 8, 'delete_usuario'),
(32, 'Can view Usuario', 8, 'view_usuario'),
(33, 'Can add Categoriaproducto', 9, 'add_categoriaproducto'),
(34, 'Can change Categoriaproducto', 9, 'change_categoriaproducto'),
(35, 'Can delete Categoriaproducto', 9, 'delete_categoriaproducto'),
(36, 'Can view Categoriaproducto', 9, 'view_categoriaproducto'),
(37, 'Can add Producto', 10, 'add_producto'),
(38, 'Can change Producto', 10, 'change_producto'),
(39, 'Can delete Producto', 10, 'delete_producto'),
(40, 'Can view Producto', 10, 'view_producto'),
(41, 'Can add carrito', 11, 'add_carrito'),
(42, 'Can change carrito', 11, 'change_carrito'),
(43, 'Can delete carrito', 11, 'delete_carrito'),
(44, 'Can view carrito', 11, 'view_carrito'),
(45, 'Can add Detallepedido', 12, 'add_detallepedido'),
(46, 'Can change Detallepedido', 12, 'change_detallepedido'),
(47, 'Can delete Detallepedido', 12, 'delete_detallepedido'),
(48, 'Can view Detallepedido', 12, 'view_detallepedido'),
(49, 'Can add Pedido', 13, 'add_pedido'),
(50, 'Can change Pedido', 13, 'change_pedido'),
(51, 'Can delete Pedido', 13, 'delete_pedido'),
(52, 'Can view Pedido', 13, 'view_pedido');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

DROP TABLE IF EXISTS `carrito`;
CREATE TABLE IF NOT EXISTS `carrito` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `cantidad` int UNSIGNED NOT NULL,
  `comprado` tinyint(1) NOT NULL,
  `id_pedido_id` int NOT NULL,
  `producto_id` int NOT NULL,
  `usuario_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `carrito_id_pedido_id_689e7946` (`id_pedido_id`),
  KEY `carrito_producto_id_5365637e` (`producto_id`),
  KEY `carrito_usuario_id_55385271` (`usuario_id`)
) ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria_producto`
--

DROP TABLE IF EXISTS `categoria_producto`;
CREATE TABLE IF NOT EXISTS `categoria_producto` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(45) COLLATE utf8mb3_spanish_ci NOT NULL,
  `descripcion` varchar(45) COLLATE utf8mb3_spanish_ci NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `categoria_producto`
--

INSERT INTO `categoria_producto` (`id_categoria`, `nombre_categoria`, `descripcion`) VALUES
(1, 'Empanadas', ''),
(2, 'Hambuguesas', ''),
(3, 'Lomitos', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_pedido`
--

DROP TABLE IF EXISTS `detalle_pedido`;
CREATE TABLE IF NOT EXISTS `detalle_pedido` (
  `id_detalle` int NOT NULL AUTO_INCREMENT,
  `cantidad_productos` int DEFAULT NULL,
  `precio_producto` double NOT NULL,
  `subtotal` double DEFAULT NULL,
  `id_pedido_id` int NOT NULL,
  `id_producto_id` int NOT NULL,
  PRIMARY KEY (`id_detalle`),
  KEY `detalle_pedido_id_pedido_id_829ebbd4` (`id_pedido_id`),
  KEY `detalle_pedido_id_producto_id_a170aa3b` (`id_producto_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
CREATE TABLE IF NOT EXISTS `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext COLLATE utf8mb3_spanish_ci,
  `object_repr` varchar(200) COLLATE utf8mb3_spanish_ci NOT NULL,
  `action_flag` smallint UNSIGNED NOT NULL,
  `change_message` longtext COLLATE utf8mb3_spanish_ci NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6` (`user_id`)
) ;

--
-- Volcado de datos para la tabla `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2024-06-03 17:21:14.414339', '5', 'Lomito', 2, '[{\"changed\": {\"fields\": [\"Id categoria\"]}}]', 10, 1),
(2, '2024-06-03 17:21:24.943055', '3', 'Empanadas de jamon y queso', 2, '[{\"changed\": {\"fields\": [\"Id categoria\"]}}]', 10, 1),
(3, '2024-06-03 17:21:40.682494', '2', 'Empanadas Criollas', 2, '[{\"changed\": {\"fields\": [\"Id categoria\"]}}]', 10, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
CREATE TABLE IF NOT EXISTS `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) COLLATE utf8mb3_spanish_ci NOT NULL,
  `model` varchar(100) COLLATE utf8mb3_spanish_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(2, 'auth', 'permission'),
(3, 'auth', 'group'),
(4, 'contenttypes', 'contenttype'),
(5, 'sessions', 'session'),
(6, 'authtoken', 'token'),
(7, 'authtoken', 'tokenproxy'),
(8, 'appUSERS', 'usuario'),
(9, 'appFOOD', 'categoriaproducto'),
(10, 'appFOOD', 'producto'),
(11, 'appCART', 'carrito'),
(12, 'appCART', 'detallepedido'),
(13, 'appCART', 'pedido');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
CREATE TABLE IF NOT EXISTS `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) COLLATE utf8mb3_spanish_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb3_spanish_ci NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2024-06-03 15:55:49.344916'),
(2, 'contenttypes', '0002_remove_content_type_name', '2024-06-03 15:55:49.670986'),
(3, 'auth', '0001_initial', '2024-06-03 15:55:52.721649'),
(4, 'auth', '0002_alter_permission_name_max_length', '2024-06-03 15:55:53.322246'),
(5, 'auth', '0003_alter_user_email_max_length', '2024-06-03 15:55:53.328246'),
(6, 'auth', '0004_alter_user_username_opts', '2024-06-03 15:55:53.335247'),
(7, 'auth', '0005_alter_user_last_login_null', '2024-06-03 15:55:53.342233'),
(8, 'auth', '0006_require_contenttypes_0002', '2024-06-03 15:55:53.345233'),
(9, 'auth', '0007_alter_validators_add_error_messages', '2024-06-03 15:55:53.350231'),
(10, 'auth', '0008_alter_user_username_max_length', '2024-06-03 15:55:53.356237'),
(11, 'auth', '0009_alter_user_last_name_max_length', '2024-06-03 15:55:53.362233'),
(12, 'auth', '0010_alter_group_name_max_length', '2024-06-03 15:55:53.506659'),
(13, 'auth', '0011_update_proxy_permissions', '2024-06-03 15:55:53.513655'),
(14, 'auth', '0012_alter_user_first_name_max_length', '2024-06-03 15:55:53.519670'),
(15, 'appUSERS', '0001_initial', '2024-06-03 15:55:55.409863'),
(16, 'admin', '0001_initial', '2024-06-03 15:55:56.311372'),
(17, 'admin', '0002_logentry_remove_auto_add', '2024-06-03 15:55:56.319369'),
(18, 'admin', '0003_logentry_add_action_flag_choices', '2024-06-03 15:55:56.326370'),
(19, 'appFOOD', '0001_initial', '2024-06-03 15:55:56.636032'),
(20, 'appCART', '0001_initial', '2024-06-03 15:55:56.778677'),
(21, 'appCART', '0002_initial', '2024-06-03 15:55:58.494346'),
(22, 'authtoken', '0001_initial', '2024-06-03 15:55:58.629985'),
(23, 'authtoken', '0002_auto_20160226_1747', '2024-06-03 15:55:58.658974'),
(24, 'authtoken', '0003_tokenproxy', '2024-06-03 15:55:58.662988'),
(25, 'authtoken', '0004_alter_tokenproxy_options', '2024-06-03 15:55:58.668973'),
(26, 'sessions', '0001_initial', '2024-06-03 15:55:58.780788');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_session`
--

DROP TABLE IF EXISTS `django_session`;
CREATE TABLE IF NOT EXISTS `django_session` (
  `session_key` varchar(40) COLLATE utf8mb3_spanish_ci NOT NULL,
  `session_data` longtext COLLATE utf8mb3_spanish_ci NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('252f0dpk3zhbl2ey6dg3dep029rejvum', '.eJxVjMsOwiAQRf-FtSEwU14u3fsNBBiQqoGktCvjv2uTLnR7zzn3xXzY1uq3kRc_EzszyU6_WwzpkdsO6B7arfPU27rMke8KP-jg1075eTncv4MaRv3WKUIGR6qIjGgJrZGoHJIuSphCRk4AhRxZKyYIWusYCQUWm1OAKBV7fwDYxTem:1sEBLe:6QLwmKwLi8EMYt6hYjTMptnMYgg1ikhu4exzKbIN21s', '2024-06-17 17:19:54.471598');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

DROP TABLE IF EXISTS `pedido`;
CREATE TABLE IF NOT EXISTS `pedido` (
  `id_pedidos` int NOT NULL AUTO_INCREMENT,
  `fecha_pedido` date DEFAULT NULL,
  `hora_pedido` time(6) DEFAULT NULL,
  `direccion_entrega` varchar(100) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `estado` varchar(50) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `id_usuario_id` int NOT NULL,
  PRIMARY KEY (`id_pedidos`),
  KEY `pedido_id_usuario_id_4d81476b` (`id_usuario_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

DROP TABLE IF EXISTS `producto`;
CREATE TABLE IF NOT EXISTS `producto` (
  `id_producto` int NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(45) COLLATE utf8mb3_spanish_ci NOT NULL,
  `descripcion` varchar(200) COLLATE utf8mb3_spanish_ci NOT NULL,
  `precio` double NOT NULL,
  `stock` int NOT NULL,
  `imageURL` varchar(100) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `id_categoria_id` int NOT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `producto_id_categoria_id_38d5c68d` (`id_categoria_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_producto`, `nombre_producto`, `descripcion`, `precio`, `stock`, `imageURL`, `id_categoria_id`) VALUES
(1, 'Empanadas Arabes', 'Masa rellena de una mezcla de carne picada, cebolla, tomate, perejil y especias', 570, 100, 'assets/carta/arabes.webp', 1),
(2, 'Empanadas Criollas', 'Empanada jugosa picante y rellena de carne, huevo duro, aceitunas y ají', 570, 100, 'assets/carta/criolla.webp', 1),
(3, 'Empanadas de jamon y queso', 'Masa rellena con jamón y queso muzarella', 570, 100, 'assets/carta/j&q.webp', 1),
(4, 'Hamburguesa', 'Burger, tomate, lechuga, cebolla morada, morrón, queso, chimi y mayonesa casera', 3800, 100, 'assets/carta/hamburguesa.webp', 2),
(5, 'Lomito', 'Bife de lomo, tomate, lechuga, jamón, queso, huevo y mayonesa casera', 4500, 100, 'assets/carta/lomito.webp', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) COLLATE utf8mb3_spanish_ci NOT NULL,
  `email` varchar(254) COLLATE utf8mb3_spanish_ci NOT NULL,
  `apellido` varchar(45) COLLATE utf8mb3_spanish_ci NOT NULL,
  `telefono` varchar(13) COLLATE utf8mb3_spanish_ci NOT NULL,
  `password` varchar(128) COLLATE utf8mb3_spanish_ci NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`last_login`, `is_superuser`, `id_usuario`, `nombre`, `email`, `apellido`, `telefono`, `password`, `is_staff`, `is_active`) VALUES
('2024-06-03 17:19:54.469598', 1, 1, '', 'admin@admin.com', '', '', 'pbkdf2_sha256$600000$OBU26oE8HEKIgYOD9ofUp7$XOghf75Kk1HTSK8nWTICkAYQxzryz/cH8tZir4iZAY4=', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_groups`
--

DROP TABLE IF EXISTS `usuario_groups`;
CREATE TABLE IF NOT EXISTS `usuario_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuario_groups_usuario_id_group_id_2e3cd638_uniq` (`usuario_id`,`group_id`),
  KEY `usuario_groups_usuario_id_161fc80c` (`usuario_id`),
  KEY `usuario_groups_group_id_c67c8651` (`group_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_user_permissions`
--

DROP TABLE IF EXISTS `usuario_user_permissions`;
CREATE TABLE IF NOT EXISTS `usuario_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuario_user_permissions_usuario_id_permission_id_3db58b8c_uniq` (`usuario_id`,`permission_id`),
  KEY `usuario_user_permissions_usuario_id_693d9c50` (`usuario_id`),
  KEY `usuario_user_permissions_permission_id_a8893ce7` (`permission_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
