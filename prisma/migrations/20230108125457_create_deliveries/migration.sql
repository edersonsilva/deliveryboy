-- CreateTable
CREATE TABLE "deliveries" (
    "id" TEXT NOT NULL,
    "deliverboyId" TEXT NOT NULL,
    "clientsId" TEXT NOT NULL,

    CONSTRAINT "deliveries_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_deliverboyId_fkey" FOREIGN KEY ("deliverboyId") REFERENCES "deliveryboy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_clientsId_fkey" FOREIGN KEY ("clientsId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
