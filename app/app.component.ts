import {Component} from "angular2/core";
import {HeartComponents} from "./glyphicon-heart/glyphicon-heart.component";

@Component({
    selector: 'my-app',
    template: '<like [totalLike]="test.totalLike" [isLike]="test.isLike"></like>',
    directives: [HeartComponents]
})
export class AppComponent {
    test = {
        totalLike: 10,
        isLike: false
    };


    // getChange($event) {
    //     console.log($event)
    // }
}