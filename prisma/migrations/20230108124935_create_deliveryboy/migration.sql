-- CreateTable
CREATE TABLE "Deliverboy" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Deliverboy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Deliverboy_username_key" ON "Deliverboy"("username");
