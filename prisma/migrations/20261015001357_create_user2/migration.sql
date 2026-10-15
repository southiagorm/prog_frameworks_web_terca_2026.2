/*
  Warnings:

  - The values [PESSOA] on the enum `Usuario_role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `usuario` MODIFY `role` ENUM('ADMIN', 'ALUNO', 'PROFESSOR') NOT NULL;
