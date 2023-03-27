-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "stars" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "userId" TEXT,
    "gameId" TEXT,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE SET NULL ON UPDATE CASCADE;
