-- AlterTable
ALTER TABLE "Investor" ADD COLUMN     "hidden" BOOLEAN DEFAULT false,
ALTER COLUMN "twitterVerified" SET DEFAULT false;
