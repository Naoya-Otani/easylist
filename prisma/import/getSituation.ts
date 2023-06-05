// import { PrismaClient, Course } from "@prisma/client";

// const prisma = new PrismaClient();

// (async function grouping1() {
//   const grouped = await prisma.course.groupBy({
//     by: ["DOWPD", "LCTNM", "SBJTNM"],
//     where: {
//       NOT: {
//         ESTB: undefined,
//       },
//     },
//     _count: {
//       SBJTNM: true,
//       ESTB: true,
//     },
//   });

//   let overDOWPD: string[] = [];
//   let overLCTNM: string[] = [];
//   let overSBJTNM: string[] = [];

//   for (const obj of grouped) {
//     if ((obj._count.ESTB && obj._count.SBJTNM) === 1) {
//       overDOWPD = grouped.map((groupedCourse) => groupedCourse.DOWPD);
//       overLCTNM = grouped.map((groupedCourse) => groupedCourse.LCTNM);
//       overSBJTNM = grouped.map((groupedCourse) => groupedCourse.SBJTNM);
//     }
//   }

//   const orConditions = [];

//   for (
//     let i = 0;
//     i < overDOWPD.length && i < overLCTNM.length && i < overSBJTNM.length;
//     i++
//   ) {
//     orConditions.push({
//       AND: [
//         {
//           DOWPD: overDOWPD[i],
//         },
//         {
//           LCTNM: overLCTNM[i],
//         },
//         {
//           SBJTNM: overSBJTNM[i],
//         },
//       ],
//     });
//   }

//   const otherCourses: Course[] = await prisma.course.findMany({
//     where: {
//       NOT: {
//         OR: orConditions,
//       },
//     },
//     select: {
//       id: true,
//       AREANM: true,
//       LVL: true,
//       FLDNM: true,
//       SMS: true,
//       ESTB: true,
//       ENTNO: true,
//       SYLLABUS_DETAIL_URL: true,
//       DOWPD: true,
//       SUBTITLE: true,
//       LCTNM: true,
//       KNLESSONMODENM: true,
//       SBJTNM: true,
//       TTBLYR: true,
//       createdAt: true,
//     },
//   });
// })();
// // const groupedcourses = grouped.filter(
// //   (course) => course._count.ESTB > 1 && course._count.SBJTNM
// // );

// // console.log(grouped, grouped.length)
// // 実行結果 total count -> 1298 courses

// // const allCourses = await prisma.course.findMany();
// // console.log(allCourses, allCourses.length);

// // allCourses.filter(courses => )

// // const otherCourses: Course[] = await prisma.course.findMany({
// //   where: {
// //     NOT: {
// //       AND: [
// //         { DOWPD: { in: grouped.map(groupedCourse => groupedCourse.DOWPD) } },
// //         { LCTNM: { in: grouped.map(groupedCourse => groupedCourse.LCTNM) } },
// //         { SBJTNM: { in: grouped.map(groupedCourse => groupedCourse.SBJTNM) } }
// //       ]
// //     }
// //   },
// //   select: {
// //     id: true,
// //     AREANM: true,
// //     LVL: true,
// //     FLDNM: true,
// //     SMS: true,
// //     ESTB: true,
// //     ENTNO: true,
// //     SYLLABUS_DETAIL_URL: true,
// //     DOWPD: true,
// //     SUBTITLE: true,
// //     LCTNM: true,
// //     KNLESSONMODENM: true,
// //     SBJTNM: true,
// //     TTBLYR: true,
// //     createdAt: true
// //   }
// // });

// // for (const course of otherCourses) {
// //   await prisma.courseSummary.create({
// //     data: {
// //       campusName: course.AREANM,
// //       academicFieldName: course.FLDNM,
// //       season: course.SMS,
// //       subjectName: course.SBJTNM,
// //       dayOfWeekPeriod: course.DOWPD,
// //       locationName: course.LCTNM,
// //       lessonModeName: course.KNLESSONMODENM,
// //       timetableYear: course.TTBLYR.toString(),
// //       faculties: { set: course.ESTB },
// //       entryNumber: course.ENTNO,
// //       syllabusDetailUrl: course.SYLLABUS_DETAIL_URL,
// //     },
// //   });
// // }
