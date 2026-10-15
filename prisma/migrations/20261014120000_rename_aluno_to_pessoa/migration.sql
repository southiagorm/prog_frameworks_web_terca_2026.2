-- DropForeignKey
ALTER TABLE `Aluno` DROP FOREIGN KEY `Aluno_usuarioId_fkey`;

-- RenameTable
RENAME TABLE `Aluno` TO `Pessoa`;

-- RenameIndex
ALTER TABLE `Pessoa` RENAME INDEX `Aluno_usuarioId_key` TO `Pessoa_usuarioId_key`;

-- AlterEnum without losing existing ALUNO values
ALTER TABLE `Usuario` MODIFY `role` ENUM('ADMIN', 'ALUNO', 'PESSOA', 'PROFESSOR') NOT NULL;
UPDATE `Usuario` SET `role` = 'PESSOA' WHERE `role` = 'ALUNO';
ALTER TABLE `Usuario` MODIFY `role` ENUM('ADMIN', 'PESSOA', 'PROFESSOR') NOT NULL;

-- AddForeignKey
ALTER TABLE `Pessoa` ADD CONSTRAINT `Pessoa_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
