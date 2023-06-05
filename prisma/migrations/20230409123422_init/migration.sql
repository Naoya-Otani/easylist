/*
  Warnings:

  - Made the column `attendance` on table `Review` required. This step will fail if there are existing NULL values in that column.
  - Made the column `hasReport` on table `Review` required. This step will fail if there are existing NULL values in that column.
  - Made the column `reportLength` on table `Review` required. This step will fail if there are existing NULL values in that column.
  - Made the column `hasExam` on table `Review` required. This step will fail if there are existing NULL values in that column.
  - Made the column `allowedCheatsheet` on table `Review` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_courseId_fkey";

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "attendance" SET NOT NULL,
ALTER COLUMN "attendance" SET DEFAULT false,
ALTER COLUMN "hasReport" SET NOT NULL,
ALTER COLUMN "hasReport" SET DEFAULT false,
ALTER COLUMN "reportLength" SET NOT NULL,
ALTER COLUMN "reportLength" SET DEFAULT 0,
ALTER COLUMN "hasExam" SET NOT NULL,
ALTER COLUMN "hasExam" SET DEFAULT false,
ALTER COLUMN "allowedCheatsheet" SET NOT NULL,
ALTER COLUMN "allowedCheatsheet" SET DEFAULT false,
ALTER COLUMN "reputation" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "CourseSummary" (
    "id" SERIAL NOT NULL,
    "area_name" TEXT NOT NULL,
    "field_name" TEXT NOT NULL,
    "school_year" TEXT NOT NULL,
    "subject_name" TEXT,
    "day_of_week_period" TEXT,
    "location_name" TEXT,
    "lesson_mode" TEXT,
    "timetable_year" TEXT,
    "establishment" TEXT[],
    "count" INTEGER,
    "ent_no" TEXT NOT NULL,
    "syllabus_detail_url" TEXT NOT NULL,

    CONSTRAINT "CourseSummary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CourseSummary_ent_no_key" ON "CourseSummary"("ent_no");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "CourseSummary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
