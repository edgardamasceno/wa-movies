-- -----------------------------------------------------
-- Schema wa_movies
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `wa_movies` ;
CREATE SCHEMA IF NOT EXISTS `wa_movies` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `wa_movies` ;

--
-- Estrutura da tabela "movies"
--
DROP TABLE IF EXISTS `wa_movies`.`movies` ;
CREATE TABLE IF NOT EXISTS `wa_movies`.`movie` (
    `id` VARCHAR(32) NOT NULL,
    `title` VARCHAR(100) NULL,
    `original_title` VARCHAR(100) NULL,
    `original_title_romanized` VARCHAR(100) NULL,
    `description` TEXT NULL,
    `director` VARCHAR(50) NULL,
    `producer` VARCHAR(50) NULL,
    `duration` INT NULL,
    `year` VARCHAR(4) NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `movie_id_UNIQUE` (`id` ASC) VISIBLE,
    FULLTEXT INDEX `ft_dx` (`title`, `original_title`, `original_title_romanized`, `description`, `director`, `producer`, `year`) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4;
