-- AlterTable
ALTER TABLE "Investor" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "twitterPicture" DROP NOT NULL,
ALTER COLUMN "company" DROP NOT NULL,
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "checkSize" DROP NOT NULL,
ALTER COLUMN "details" DROP NOT NULL,
ALTER COLUMN "site" DROP NOT NULL;
