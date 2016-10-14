import {Component} from "angular2/src/core/metadata";
@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact-form/contact-form.component.html',
    styleUrls: ['app/contact-form/contact-form.css']
})

export class ContactForm {
    log(x) {
        console.log(x);
    }

}

