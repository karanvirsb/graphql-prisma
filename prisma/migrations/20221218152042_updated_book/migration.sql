/*
  Warnings:

  - You are about to drop the `_AuthorToBook` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BookToLibrary` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `author_id` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `library_id` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_AuthorToBook" DROP CONSTRAINT "_AuthorToBook_A_fkey";

-- DropForeignKey
ALTER TABLE "_AuthorToBook" DROP CONSTRAINT "_AuthorToBook_B_fkey";

-- DropForeignKey
ALTER TABLE "_BookToLibrary" DROP CONSTRAINT "_BookToLibrary_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookToLibrary" DROP CONSTRAINT "_BookToLibrary_B_fkey";

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "author_id" INTEGER NOT NULL,
ADD COLUMN     "library_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_AuthorToBook";

-- DropTable
DROP TABLE "_BookToLibrary";

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_library_id_fkey" FOREIGN KEY ("library_id") REFERENCES "Library"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
