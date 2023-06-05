// import { Course, CourseSummary, PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// const getOverLappeds = async (): Promise<[string, string, string][]> => {
//   const groupedCourses = await prisma.course.groupBy({
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

//   const overLappeds: [string, string, string][] = [];

//   for (const groupedCourse of groupedCourses) {
//     if (groupedCourse._count.SBJTNM > 1 && groupedCourse._count.ESTB > 1) {
//       const dowpd = groupedCourse.DOWPD;
//       const lctnm = groupedCourse.LCTNM;
//       const sjtnm = groupedCourse.SBJTNM;
//       overLappeds.push([dowpd, lctnm, sjtnm]);
//     }
//   }

//   return overLappeds;
// };

// const getOverLappedCourses = async (
//   overLappeds: [string, string, string][]
// ) => {
//   const overLappedCourses: Course[] = [];

//   if (overLappeds.length > 0) {
//     for (const overLapped of overLappeds) {
//       const courses: Course[] = await prisma.course.findMany({
//         where: {
//           DOWPD: overLapped[0],
//           LCTNM: overLapped[1],
//           SBJTNM: overLapped[2],
//         },
//       });
//       overLappedCourses.push(...courses);
//     }
//   }

//   return overLappedCourses;
// };

// const groupCourse = async () => {
//   const overLappeds = await getOverLappeds();
//   const overLappedCourses = await getOverLappedCourses(overLappeds);

//   const result: Course[] = [];

//   overLappedCourses.forEach((course) => {
//     const existingCourse: Course | undefined = result.find(
//       (c) =>
//         c.SBJTNM === course.SBJTNM &&
//         c.DOWPD === course.DOWPD &&
//         c.LCTNM === course.LCTNM
//     );
//     if (existingCourse) {
//       if (!existingCourse.ESTB.includes(course.ESTB[0])) {
//         existingCourse.ESTB.push(course.ESTB[0]);
//       }
//     } else {
//       result.push({
//         ...course,
//         ESTB: [course.ESTB[0]],
//       });
//     }
//   });

//   for (const course of result) {
//     await prisma.courseSummary.create({
//       data: {
//         campusName: course.AREANM,
//         academicFieldName: course.FLDNM,
//         season: course.SMS,
//         subjectName: course.SBJTNM,
//         dayOfWeekPeriod: course.DOWPD,
//         locationName: course.LCTNM,
//         lessonModeName: course.KNLESSONMODENM,
//         timetableYear: course.TTBLYR.toString(),
//         faculties: { set: course.ESTB },
//         entryNumber: course.ENTNO,
//         syllabusDetailUrl: course.SYLLABUS_DETAIL_URL,
//       },
//     });
//   }
// };

// groupCourse();
