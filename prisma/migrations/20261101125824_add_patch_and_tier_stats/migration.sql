-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Patch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "version" TEXT NOT NULL,
    "releasedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "TierStat" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "patchId" TEXT NOT NULL,
    "championId" TEXT NOT NULL,
    "championName" TEXT NOT NULL,
    "tier" TEXT NOT NULL,
    "winRate" REAL NOT NULL,
    "wrChange" REAL NOT NULL,
    "banRate" REAL NOT NULL,
    "pickRate" REAL NOT NULL,
    "matches" INTEGER NOT NULL,
    "rank" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "TierStat_patchId_fkey" FOREIGN KEY ("patchId") REFERENCES "Patch" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Patch_version_key" ON "Patch"("version");

-- CreateIndex
CREATE INDEX "TierStat_patchId_idx" ON "TierStat"("patchId");

-- CreateIndex
CREATE INDEX "TierStat_championId_idx" ON "TierStat"("championId");
