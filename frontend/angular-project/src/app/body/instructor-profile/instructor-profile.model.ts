export interface InstructorProfile {
    name: string;
    description: string;
    expertise: string[];
    courseIds: CourseLinks[];
    profileLinks: Links[];
    publications: Links[];
    totalStudents: number;
    averageReview: 1 | 2 | 3 | 4 | 5;
}

export interface Links {
    title: string;
    url: string;
}

export interface CourseLinks {
    title: string;
    id: string;
}
