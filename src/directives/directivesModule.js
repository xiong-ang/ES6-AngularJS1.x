const directives = angular.module("directivesModule",[]);

import directive from "./directive";
directives.directive("hDirective", directive);

export default directives.name;