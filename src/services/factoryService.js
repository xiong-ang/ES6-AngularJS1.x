const serviceFactory = ()=>{
    class message{
        constructor(){
        }

        get smessage()
        {
            return "Hello, this is serviceFactory~";
        }
    }

    return new message;
};

export default serviceFactory;