class ApiError extends Error {
    constructor(
        statusCode, 
        message="something went wrong",
        errors= [],
        stack=""
){

        super(message);
        this.ststusCode= ststusCode        
        this.message= message 
        this.errors= this.errors 
        this.data= null 
        this.success= false ;


        if (stack){
          this.stack= stack
       } else{
                   Error.captureStackTrace(this,this.constructor)
            }
      }
    }

    export {ApiError}