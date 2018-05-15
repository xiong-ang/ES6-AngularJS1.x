class controller{
    constructor(service, messageService){
        this.service=service;
        this.messageService=messageService;
        this.x=1;
        this.y=2;
    }
    add(){
        this.z=this.service.add(this.x, this.y);
    }
}
controller.$inject=[
    'wapperService',
    'factoryService'
];

export default controller;