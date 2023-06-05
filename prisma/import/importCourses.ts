// import fs from 'fs';
// import path from 'path';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// const dataDir = path.join(path.dirname(new URL(import.meta.url).pathname), 'data');

// fs.readdir(dataDir, (err, files) => {
//   if (err) throw err;

//   files.forEach((file) => {
//     if (path.extname(file) === '.json') {
//       const filePath = path.join(dataDir, file);
//       const jsonData = fs.readFileSync(filePath, 'utf8');
//       const data = JSON.parse(jsonData);

//       data.forEach(async (course: any) => {
//         await prisma.course.create({
//           data: {
//             AREANM: course.AREANM,
//             LVL: course.LVL,
//             FLDNM: course.FLDNM,
//             SMS: course.SMS,
//             ESTB: course.ESTB,
//             ENTNO: course.ENTNO,
//             SYLLABUS_DETAIL_URL: course.SYLLABUS_DETAIL_URL,
//             SBJTNM: course.SBJTNM,
//             DOWPD: course.DOWPD,
//             SUBTITLE: course.SUBTITLE,
//             LCTNM: course.LCTNM,
//             KNLESSONMODENM: course.KNLESSONMODENM,
//             TTBLYR: course.TTBLYR,
//           },
//         });
//       });
//     }
//   });
// });
