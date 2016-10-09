import {Component, Input} from "angular2/core";

@Component({
    selector: 'like',
    templateUrl: 'app/glyphicon-heart/glyphicon-heart.template.html',
    styles: [`
       .glyphicon{
            color:#CCC;
            cursor: pointer;
       }
       .iLike {
            color:deeppink;
       }
`]
})

export class HeartComponents {
    @Input() isLike = false;
    @Input() totalLike = 10;

    Ilike() {
        this.isLike = !this.isLike;
        this.totalLike += this.isLike ? 1 : -1;
    }
}