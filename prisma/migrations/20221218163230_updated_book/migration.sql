/*
  Warnings:

  - You are about to drop the column `formatId` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `format_id` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the `Format` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `format` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_format_id_fkey";

-- DropIndex
DROP INDEX "Book_format_id_key";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "formatId",
DROP COLUMN "format_id",
ADD COLUMN     "format" JSONB NOT NULL;

-- DropTable
DROP TABLE "Format";
