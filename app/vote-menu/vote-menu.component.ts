import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    selector: 'vote-menu',
    templateUrl: 'app/vote-menu/vote-menu.template.html',
    styleUrls: ['app/vote-menu/vote-menu.css']
})

export class VoteMenuComponent {
    @Input() voteCount = 11;
    @Input() myVote = -1;
    @Output() Vote = new EventEmitter();

    clickUp() {

        if (this.myVote === 1)return;
        this.myVote++;
        this.Vote.emit('I love it');
    }

    clickDown() {
        if (this.myVote === -1) return;
        this.myVote--;
        this.Vote.emit('I hate it');

    }


}