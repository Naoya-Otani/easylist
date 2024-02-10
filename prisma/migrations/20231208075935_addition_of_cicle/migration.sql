-- AlterTable
ALTER TABLE "User" ADD COLUMN     "facultyId" INTEGER;

-- CreateTable
CREATE TABLE "Circle" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "circleName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "memberCount" INTEGER NOT NULL,
    "contactInfo" TEXT,
    "recruitmentStatus" BOOLEAN NOT NULL DEFAULT false,
    "establishedAt" TIMESTAMP(3) NOT NULL,
    "isAuthorized" BOOLEAN NOT NULL DEFAULT false,
    "initialCost" INTEGER NOT NULL,
    "membershipFee" INTEGER NOT NULL,
    "schedule" TEXT NOT NULL,
    "websiteURL" TEXT,

    CONSTRAINT "Circle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CircleCategory" (
    "id" SERIAL NOT NULL,
    "circleId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CircleCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "circleId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "usedCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CircleCreator" (
    "id" SERIAL NOT NULL,
    "circleId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "CircleCreator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialMediaLink" (
    "id" SERIAL NOT NULL,
    "circleId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "SocialMediaLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faculty" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Faculty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Major" (
    "id" SERIAL NOT NULL,
    "facultyId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Major_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "circle_category_circle_id_index" ON "CircleCategory"("circleId");

-- CreateIndex
CREATE INDEX "tag_circle_id_index" ON "Tag"("circleId");

-- CreateIndex
CREATE INDEX "circle_creator_circle_id_index" ON "CircleCreator"("circleId");

-- CreateIndex
CREATE INDEX "social_media_link_circle_id_index" ON "SocialMediaLink"("circleId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_facultyId_fkey" FOREIGN KEY ("facultyId") REFERENCES "Faculty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CircleCategory" ADD CONSTRAINT "CircleCategory_circleId_fkey" FOREIGN KEY ("circleId") REFERENCES "Circle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_circleId_fkey" FOREIGN KEY ("circleId") REFERENCES "Circle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CircleCreator" ADD CONSTRAINT "CircleCreator_circleId_fkey" FOREIGN KEY ("circleId") REFERENCES "Circle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CircleCreator" ADD CONSTRAINT "CircleCreator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialMediaLink" ADD CONSTRAINT "SocialMediaLink_circleId_fkey" FOREIGN KEY ("circleId") REFERENCES "Circle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Major" ADD CONSTRAINT "Major_facultyId_fkey" FOREIGN KEY ("facultyId") REFERENCES "Faculty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
