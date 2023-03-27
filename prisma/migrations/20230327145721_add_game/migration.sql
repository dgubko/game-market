-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "salePrice" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "releaseDate" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "developer" TEXT NOT NULL,
    "minSystemReq" TEXT NOT NULL,
    "recSystemReq" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_name_key" ON "Game"("name");
