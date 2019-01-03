import { Injectable } from '@angular/core';
import { Tile, TableRow } from 'src/app/body/dashboard/dashboard.model';

@Injectable()
export class DashboardService {

    constructor() { }

    getTileData(): Tile[] {
        return [
            {
                'title': 'Introduction to Native Cloud Application Architecture',
                'instructors': ['Linjith Kunnon', 'Adithya Prabhu'],
                'rating': 3,
                'price': 3000,
                'summary': 'Build and deploy an app from the scratch completely on AWS',
                'category': 'Architecture',
                'longDescription': 'Cloud native is an approach to building and running applications that fully exploit the advantages of the cloud computing model.',
                'difficulty': 'Basic',
                'hours': 20,
                'courseId': '1',
                'imageUrl': 'https://container-solutions.com/content/uploads/2017/05/cloud.png'
            },
            {
                'title': 'JavaScript Design Patterns',
                'instructors': ['MadhuBala'],
                'rating': 5,
                'price': 5000,
                'summary': 'Write better code by learning about the standard design patterns in JS',
                'category': 'Programming',
                'longDescription': 'Every developer strives to write maintainable, readable, and reusable code. Code structuring becomes more important as applications become larger. Design patterns prove crucial to solving this challenge - providing an organization structure for common issues in a particular circumstance.',
                'difficulty': 'Advanced',
                'hours': 19,
                'courseId': '2',
                'imageUrl': 'https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png'
            },
            {
                'title': 'Web Assembly',
                'instructors': ['Adithya Prabhu'],
                'rating': 3,
                'price': 8000,
                'summary': 'Introductory course to web assembly',
                'category': 'Languages',
                'longDescription': 'WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable target for compilation of high-level languages like C/C++/Rust, enabling deployment on the web for client and server applications.',
                'difficulty': 'Basic',
                'hours': 29,
                'courseId': '3',
                'imageUrl': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Web_Assembly_Logo.svg/220px-Web_Assembly_Logo.svg.png'
            },
            {
                'title': 'Reactive Programming : A fad or the future',
                'instructors': ['Linjith Kunnon', 'MadhuBala'],
                'rating': 4,
                'price': 9000,
                'summary': 'Why is it so cool among devs? Will it stick?',
                'category': 'Languages',
                'longDescription': 'Reactive Programming is an asynchronous programming paradigm concerned with data streams and the propagation of change.',
                'difficulty': 'Advanced',
                'hours': 13,
                'courseId': '4',
                'imageUrl': 'https://cdn-images-1.medium.com/max/1000/1*NkhhBPaaZXD9NSYC_xQ0LA.png'
            },
            {
                'title': 'Learn GoLang in 30 hours',
                'instructors': ['MadhuBala', 'Adithya Prabhu'],
                'rating': 3,
                'price': 5000,
                'summary': 'Go from zero to hero in Google\'s GoLang in 30 hours',
                'category': 'Languages',
                'longDescription': 'Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.',
                'difficulty': 'Intermediate',
                'hours': 10,
                'courseId': '5',
                'imageUrl': 'https://cdn-images-1.medium.com/max/1600/1*yh90bW8jL4f8pOTZTvbzqw.png'
            },
            {
                'title': 'Intro to AI/ML',
                'instructors': ['Adithya Prabhu', 'Linjith Kunnon', 'MadhuBala'],
                'rating': 3,
                'price': 2000,
                'summary': 'Introductory course to AI and ML using R',
                'category': 'AI-ML',
                'longDescription': 'Artificial intelligence (AI), sometimes called machine intelligence, is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans and other animals. In computer science AI research is defined as the study of "intelligent agents": any device that perceives its environment and takes actions that maximize its chance of successfully achieving its goals.[1] Colloquially, the term "artificial intelligence" is applied when a machine mimics "cognitive" functions that humans associate with other human minds, such as "learning" and "problem solving"',
                'difficulty': 'Intermediate',
                'hours': 23,
                'courseId': '6',
                'imageUrl': 'http://constems-ai.com/wp-content/uploads/2017/07/AI-and-ML-explained.jpg'
            }
        ];
    }

    getTableData(): TableRow[] {
        return [
            {
                'country': 'Argentina',
                'language': 'Spanish (official), English, Italian, German, French',
                'population': '41,803,125',
                'medianAge': '31.3',
                'area': '2,780,387'
            },
            {
                'country': 'Australia',
                'language': 'English 79%, native and other languages',
                'population': '23,630,169',
                'medianAge': '37.3',
                'area': '7,739,983'
            },
            {
                'country': 'Greece',
                'language': 'Greek 99% (official), English, French',
                'population': '11,128,404',
                'medianAge': '43.2',
                'area': '131,956'
            },
            {
                'country': 'Luxembourg',
                'language': 'Luxermbourgish (national) French, German (both administrative)',
                'population': '536,761',
                'medianAge': '39.1',
                'area': '2,586'
            },
            {
                'country': 'Russia',
                'language': 'Russian, others',
                'population': '142,467,651',
                'medianAge': '38.4',
                'area': '17,076,310'
            },
            {
                'country': 'Sweden',
                'language': 'Swedish, small Sami- and Finnish-speaking minorities',
                'population': '9,631,261',
                'medianAge': '41.1',
                'area': '449,954'
            }
        ];
    }
}
