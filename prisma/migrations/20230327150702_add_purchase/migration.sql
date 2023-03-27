-- CreateTable
CREATE TABLE "Purchased" (
    "id" TEXT NOT NULL,
    "purchaseDate" TEXT NOT NULL,
    "purchasePrice" TEXT NOT NULL,
    "userId" TEXT,
    "gameId" TEXT,

    CONSTRAINT "Purchased_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Purchased" ADD CONSTRAINT "Purchased_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchased" ADD CONSTRAINT "Purchased_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE SET NULL ON UPDATE CASCADE;
