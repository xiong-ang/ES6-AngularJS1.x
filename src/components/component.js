class loginCtrl{
    constructor()
    {
        this.userName="Barret";
        this.password="123456";
    }
}


class login{
    constructor(){
        this.template=require("./component.tpl.html");
        this.controller=loginCtrl;
    }
}


export default new login;