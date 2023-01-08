/*
  Warnings:

  - You are about to drop the `Deliverboy` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Deliverboy";

-- CreateTable
CREATE TABLE "deliveryboy" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "deliveryboy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "deliveryboy_username_key" ON "deliveryboy"("username");
