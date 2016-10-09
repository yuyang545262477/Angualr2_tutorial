import {Component} from "angular2/core";
import {FavoriteComponent} from "./favorite.component";

@Component({
    selector: 'my-app',
    template: '<i class="glyphicon glyphicon-star"></i> ' +
    '<favorite [isFavorite]="post.isFavorite" (change)="getChange($event)"></favorite>',
    directives: [FavoriteComponent]
})
export class AppComponent {
    post = {
        title: 'title',
        isFavorite: true
    };

    getChange($event) {
        console.log($event)
    }
}