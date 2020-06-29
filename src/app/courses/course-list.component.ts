import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{
    courses: Course[] = [];

    // chamará o course.service porque está injectable em root
    constructor(private courseService: CourseService){}

    ngOnInit(): void {
        this.courses = this.courseService.retrieveAll();
    }

}

/*  
        ngOnInit is a lifecycle hook that is called after Angular has initialized all
        data-bound properties of a directive. Allways receives a void type
*/