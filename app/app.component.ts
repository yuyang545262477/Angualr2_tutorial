import {Component} from "angular2/core";
import {CoursesComponent} from "./courses.component";
import {AuthorsComponents} from "./authors.component";
import {FavoriteComponent} from "./favorite.component";

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>' +
    '<courses></courses>' +
    '<authors></authors>' +
    '<favorite></favorite>',
    directives: [CoursesComponent, AuthorsComponents, FavoriteComponent]
})
export class AppComponent {

}