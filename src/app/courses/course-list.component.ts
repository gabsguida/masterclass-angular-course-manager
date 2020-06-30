import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{
    
    filteredCourses: Course[] = [];
    
    _courses: Course[] = [];
    
    // uso do anderline para indicar que esta variável seja usada somente aqui
    _filterBy: string;

    // chamará o course.service porque está injectable em root
    constructor(private courseService: CourseService){}

    ngOnInit(): void {
        // recebe a lista de cursos pelo courseService
        this._courses = this.courseService.retrieveAll();
        
        // recebe a lista de cursos
        this.filteredCourses = this._courses;
    }

    // quando digita
    set filter(value: string) {
        // valor recebido pelo input
        this._filterBy = value;

        // irá filtrar o nome do curso da lista pela posição do 1° substring dada no input
        // os valores devem ficar em minúsculo para que não haja discrepâncias
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    // pegará as alterações
    get filter(){
        return this._filterBy;
    }
}

/*  
        ngOnInit is a lifecycle hook that is called after Angular has initialized all
        data-bound properties of a directive. Allways receives a void type
*/