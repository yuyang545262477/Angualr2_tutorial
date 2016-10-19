import {Component} from "angular2/src/core/metadata";
@Component({
    selector: 'form-test',
    templateUrl: 'app/form-example/form.component.html'
})

export class FormComponent {
    onSubmit(value) {
        console.log(value);
    }

}