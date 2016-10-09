System.register(["angular2/core", "./authors.services"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, authors_services_1;
    var AuthorsComponents;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authors_services_1_1) {
                authors_services_1 = authors_services_1_1;
            }],
        execute: function() {
            AuthorsComponents = (function () {
                function AuthorsComponents(authorsService) {
                    this.title = 'I\'am the Authors';
                    this.authors = authorsService.getAuthors();
                }
                AuthorsComponents = __decorate([
                    core_1.Component({
                        selector: 'authors',
                        template: "\n          <h2>authors</h2>\n          {{title}}\n          <ul>\n          <li *ngFor=\"#author of authors\">\n          {{author}}\n           </li> \n          </ul>\n          ",
                        providers: [authors_services_1.AuthorsService]
                    }), 
                    __metadata('design:paramtypes', [authors_services_1.AuthorsService])
                ], AuthorsComponents);
                return AuthorsComponents;
            }());
            exports_1("AuthorsComponents", AuthorsComponents);
        }
    }
});
//# sourceMappingURL=authors.component.js.map