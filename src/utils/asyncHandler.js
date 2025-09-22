
// using Promise we can eassly or not say easly but different approcah hai

const  asyncHandler =(requestHandler)=>{
(req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
}
}
export { asyncHandler} 





// this all are using for error handling in async function in express js
// and use by try and actch 

// // const asyncHandler=()=>{}
// // const asyncHandler=(fun)=>()=>{}
// // const asyncHandler=(fun)=> async()=>{}

//     const asyncHandler = (fun)  =>  async (req , res, next ) => {

//         try{

//             await fun (req , res , next)

//         }catch(error){
//          res.status(err.code||500).json({
//             success:false,
//             message:err.massage||" internal server error "
//          })
//         }
//     }
