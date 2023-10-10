import { Review } from "@prisma/client";

export type SavedReview = {
  id: number;
  courseId: number;
  attendance: boolean;
  hasReport: boolean;
  hasExam: boolean;
  reputation: number;
};

export type Rakutan = {
  id: number;
  subjectName: string;
  locationName: string;
  academicFieldName: string;
  dayOfWeekPeriod: string;
  lessonModeName: string;
  faculties: string[];
  avg_reputation: number;
  count_reviews: number;
  agg_attendance: boolean;
  agg_hasReport: boolean;
  agg_hasExam: boolean;
  entryNumber?: number | null;
};

export type RakutanWithReviews = {
  course: Rakutan;
  reviews: Review[];
};
