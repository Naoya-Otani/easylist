/*
  Warnings:

  - You are about to drop the column `area_name` on the `CourseSummary` table. All the data in the column will be lost.
  - You are about to drop the column `count` on the `CourseSummary` table. All the data in the column will be lost.
  - You are about to drop the column `ent_no` on the `CourseSummary` table. All the data in the column will be lost.
  - You are about to drop the column `establishment` on the `CourseSummary` table. All the data in the column will be lost.
  - You are about to drop the column `field_name` on the `CourseSummary` table. All the data in the column will be lost.
  - You are about to drop the column `school_year` on the `CourseSummary` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[entry_number]` on the table `CourseSummary` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `academic_field_name` to the `CourseSummary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `campus_name` to the `CourseSummary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entry_number` to the `CourseSummary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `season` to the `CourseSummary` table without a default value. This is not possible if the table is not empty.
  - Made the column `subject_name` on table `CourseSummary` required. This step will fail if there are existing NULL values in that column.
  - Made the column `day_of_week_period` on table `CourseSummary` required. This step will fail if there are existing NULL values in that column.
  - Made the column `location_name` on table `CourseSummary` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lesson_mode` on table `CourseSummary` required. This step will fail if there are existing NULL values in that column.
  - Made the column `timetable_year` on table `CourseSummary` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "CourseSummary_ent_no_key";

-- AlterTable
ALTER TABLE "CourseSummary" DROP COLUMN "area_name",
DROP COLUMN "count",
DROP COLUMN "ent_no",
DROP COLUMN "establishment",
DROP COLUMN "field_name",
DROP COLUMN "school_year",
ADD COLUMN     "academic_field_name" TEXT NOT NULL,
ADD COLUMN     "campus_name" TEXT NOT NULL,
ADD COLUMN     "entry_number" TEXT NOT NULL,
ADD COLUMN     "faculty" TEXT[],
ADD COLUMN     "season" TEXT NOT NULL,
ALTER COLUMN "subject_name" SET NOT NULL,
ALTER COLUMN "day_of_week_period" SET NOT NULL,
ALTER COLUMN "location_name" SET NOT NULL,
ALTER COLUMN "lesson_mode" SET NOT NULL,
ALTER COLUMN "timetable_year" SET NOT NULL;

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "detail" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CourseSummary_entry_number_key" ON "CourseSummary"("entry_number");
