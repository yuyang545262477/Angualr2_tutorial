System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AuthorsService;
    return {
        setters:[],
        execute: function() {
            AuthorsService = (function () {
                function AuthorsService() {
                }
                AuthorsService.prototype.getAuthors = function () {
                    return ['韩寒', '郭敬明', '矛盾'];
                };
                return AuthorsService;
            }());
            exports_1("AuthorsService", AuthorsService);
        }
    }
});
//# sourceMappingURL=authors.services.js.map