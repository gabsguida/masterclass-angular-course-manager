// O Angular sempre terá um módulo pai, mesmo que não haja outros módulos.
// O módulo seria um limitador de contexto. 
// Exs.: módulo de compras, módulo de login..
// Todos os componentes criados devem ser declarados no app.module

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {CourseListComponent} from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';

@NgModule({
  // declaração dos componentes que estarão nesse módulo
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
