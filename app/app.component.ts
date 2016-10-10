import {Component} from "angular2/core";
import {HeartComponents} from "./glyphicon-heart/glyphicon-heart.component";
import {VoteMenuComponent} from "./vote-menu/vote-menu.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    directives: [HeartComponents, VoteMenuComponent]
})
export class AppComponent {
    voteCount = 10;
    myVote = 0;

    test = {
        totalLike: 10,
        isLike: false
    };


    getVote($event) {
        console.log($event);
    }

}