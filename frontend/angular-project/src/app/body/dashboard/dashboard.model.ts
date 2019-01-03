export interface Tile {
    courseId: string;
    title: string;
    category: string;
    summary: string;
    longDescription: string;
    instructors: string[];
    rating: 1 | 2 | 3 | 4 | 5;
    price: number;
    difficulty: string;
    hours: number;
    imageUrl: string;
}

export interface TableRow {
    country: string;
    language: string;
    population: string;
    medianAge: string;
    area: string;
}
