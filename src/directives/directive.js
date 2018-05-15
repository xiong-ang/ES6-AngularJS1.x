const boldDirective = function()
{
    class bold{
        constructor(){
            this.restrict="E";
            this.template="<h1><p ng-transclude/></h1>",
            this.replace=true;
            this.transclude=true;
        }
    }
    return new bold;
}

export default boldDirective;