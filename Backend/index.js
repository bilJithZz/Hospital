import express from "express"

const app=express()
import alldoctors from "./routes/routes.js"

const PORT=process.env.PORT

app.use("/api",alldoctors)

app.listen(PORT, () => {
    console.log(`Server is connected to port ${PORT}`);
  })
