/*
  Warnings:

  - Changed the type of `price` on the `Game` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `salePrice` on the `Game` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `rating` on the `Game` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "price",
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
DROP COLUMN "salePrice",
ADD COLUMN     "salePrice" DOUBLE PRECISION NOT NULL,
DROP COLUMN "rating",
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "minSystemReq" DROP NOT NULL,
ALTER COLUMN "recSystemReq" DROP NOT NULL;
