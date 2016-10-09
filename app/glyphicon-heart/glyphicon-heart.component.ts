import {Component, Output, EventEmitter} from "angular2/core";

@Component({
    selector: 'heart',
    templateUrl: 'app/glyphicon-heart/glyphicon-heart.template.html',
    styles: [`
       .glyphicon{
       color:#CCC;
       cursor: pointer;
       }
       .glyphicon.active{
            color:deeppink;
       }
`]
})

export class HeartComponent {

    isActive = false;
    @Output() DingDing = new EventEmitter();

    Clicked() {
        this.isActive = !this.isActive;
        this.DingDing.emit();
    }

}