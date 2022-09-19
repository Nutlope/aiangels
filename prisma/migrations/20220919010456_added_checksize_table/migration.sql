-- AlterTable
ALTER TABLE "Investor" ADD COLUMN     "checksize_id" INTEGER;

-- CreateTable
CREATE TABLE "CheckSize" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "CheckSize_id_key" ON "CheckSize"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CheckSize_name_key" ON "CheckSize"("name");

-- AddForeignKey
ALTER TABLE "Investor" ADD CONSTRAINT "Investor_checksize_id_fkey" FOREIGN KEY ("checksize_id") REFERENCES "CheckSize"("id") ON DELETE SET NULL ON UPDATE CASCADE;
