/*
  Warnings:

  - You are about to drop the column `totalExpense` on the `ExpenseSummary` table. All the data in the column will be lost.
  - The primary key for the `Purchases` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `purchaseID` on the `Purchases` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the `PurchasesSummary` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `totalExpenses` to the `ExpenseSummary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purchaseId` to the `Purchases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalAmount` to the `Sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExpenseSummary" DROP COLUMN "totalExpense",
ADD COLUMN     "totalExpenses" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Purchases" DROP CONSTRAINT "Purchases_pkey",
DROP COLUMN "purchaseID",
ADD COLUMN     "purchaseId" TEXT NOT NULL,
ADD CONSTRAINT "Purchases_pkey" PRIMARY KEY ("purchaseId");

-- AlterTable
ALTER TABLE "Sales" DROP COLUMN "totalPrice",
ADD COLUMN     "totalAmount" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "PurchasesSummary";

-- CreateTable
CREATE TABLE "PurchaseSummary" (
    "purchaseSummaryId" TEXT NOT NULL,
    "totalPurchased" DOUBLE PRECISION NOT NULL,
    "changePercentage" DOUBLE PRECISION,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PurchaseSummary_pkey" PRIMARY KEY ("purchaseSummaryId")
);
