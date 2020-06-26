import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: "Angular: Forms",
                imageUrl: "../../assets/images/forms.png",
                price: 99.00,
                code: 'XPS-3490',
                duration: 120,
                rating: 4 
            },
            {
                id: 2,
                name: "Angular: HTTP",
                imageUrl: '../../assets/images/http.png',
                price: 78.60,
                code: 'XPS-5590',
                duration: 120,
                rating: 4.5 
            }
        ]
    }

}

/*  
        ngOnInit is a lifecycle hook that is called after Angular has initialized all
        data-bound properties of a directive. Allways receives a void type
*/