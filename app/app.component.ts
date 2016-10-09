import {Component} from "angular2/core";
import {FavoriteComponent} from "./favorite.component";
import {HeartComponent} from "./glyphicon-heart/glyphicon-heart.component";

@Component({
    selector: 'my-app',
    template: '<heart (DingDing)="Ding()"></heart>' +
    '{{post.number}}',
    directives: [FavoriteComponent, HeartComponent]
})
export class AppComponent {
    post = {
        title: 'title',
        number: 10,
        isFavorite: true
    };

    Ding() {
        this.post.number = this.post.number === 11 ? 10 : 11;
    }

    getChange($event) {
        console.log($event)
    }
}