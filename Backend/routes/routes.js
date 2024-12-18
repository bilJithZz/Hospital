import express from express

const router=express.Router()

router.get("/alldoctors",async (req,res)=>{
     
     try{

          const alldoctors=await find({})
          res.status(200).json(alldoctors)

     }
     catch(err)
     {
          res.status(404).json("not found")
     }
})