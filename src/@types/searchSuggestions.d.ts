export interface SearchSuggestion {
  id: number;
  subjectName: string;
  locationName: string;
  _count: {
    reviews: number;
  };
}
