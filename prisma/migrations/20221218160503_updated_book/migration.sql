/*
  Warnings:

  - You are about to drop the column `format` on the `Book` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[format_id]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `formatId` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `format_id` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "format",
ADD COLUMN     "formatId" INTEGER NOT NULL,
ADD COLUMN     "format_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Format" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Format_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Book_format_id_key" ON "Book"("format_id");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_format_id_fkey" FOREIGN KEY ("format_id") REFERENCES "Format"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
