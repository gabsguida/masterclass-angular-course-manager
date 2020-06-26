import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
    // Com Input você consegue pegar informações de outros componentes. 
    // Essas props viram atributos do selector
    @Input()
    rating: number = 0;

    starWidth: number;

    // com OnChanges você consegue criar modificações 
    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5;
    }
}