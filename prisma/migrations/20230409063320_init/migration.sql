-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "AREANM" TEXT NOT NULL,
    "LVL" TEXT NOT NULL,
    "FLDNM" TEXT NOT NULL,
    "SMS" TEXT NOT NULL,
    "ESTB" TEXT[],
    "ENTNO" TEXT NOT NULL,
    "SYLLABUS_DETAIL_URL" TEXT NOT NULL,
    "SBJTNM" TEXT NOT NULL,
    "DOWPD" TEXT NOT NULL,
    "SUBTITLE" TEXT NOT NULL,
    "LCTNM" TEXT NOT NULL,
    "KNLESSONMODENM" TEXT NOT NULL,
    "TTBLYR" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "courseId" INTEGER NOT NULL,
    "attendance" BOOLEAN,
    "hasReport" BOOLEAN,
    "reportLength" INTEGER,
    "hasExam" BOOLEAN,
    "allowedCheatsheet" BOOLEAN,
    "reputation" INTEGER NOT NULL,
    "detail" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
