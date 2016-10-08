import {Component} from "angular2/core";
import {AuthorsService} from "./authors.services";

@Component({
    selector: 'authors',
    template: `
          <h2>authors</h2>
          {{title}}
          <ul>
          <li *ngFor="#author of authors">
          {{author}}
</li> 
          </ul>
          `,
    providers: [AuthorsService]
})

export class AuthorsComponents {
    title = 'I\'am the Authors';
    authors;

    constructor(authorsService: AuthorsService) {
        this.authors = authorsService.getAuthors();
    }


}

