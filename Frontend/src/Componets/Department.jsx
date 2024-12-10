import React from 'react'

const Department = () => {

    const departments=[{
       id:"1",
       img:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubSneQ_ldwHfi5cbRUMN9K0eN3mEr2XS5ne-7aKWTc9x18RQNqM-fqHdVXuFiVZojwDo_Z0Ok0Ni7pDl4vrGxcTjAP0YTF922DDsWB_fHlw",
       name:"ent"
    },{
        id:"2",
        img:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubSneQ_ldwHfi5cbRUMN9K0eN3mEr2XS5ne-7aKWTc9x18RQNqM-fqHdVXuFiVZojwDo_Z0Ok0Ni7pDl4vrGxcTjAP0YTF922DDsWB_fHlw",
        name:"ent"
    },
    {
        id:"3",
        img:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubSneQ_ldwHfi5cbRUMN9K0eN3mEr2XS5ne-7aKWTc9x18RQNqM-fqHdVXuFiVZojwDo_Z0Ok0Ni7pDl4vrGxcTjAP0YTF922DDsWB_fHlw",
        name:"ent"
     },
     {
        id:"4",
        img:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubSneQ_ldwHfi5cbRUMN9K0eN3mEr2XS5ne-7aKWTc9x18RQNqM-fqHdVXuFiVZojwDo_Z0Ok0Ni7pDl4vrGxcTjAP0YTF922DDsWB_fHlw",
        name:"ent"
     },
     {
        id:"5",
        img:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubSneQ_ldwHfi5cbRUMN9K0eN3mEr2XS5ne-7aKWTc9x18RQNqM-fqHdVXuFiVZojwDo_Z0Ok0Ni7pDl4vrGxcTjAP0YTF922DDsWB_fHlw",
        name:"ent"
     },
    ]

  return (
    <div className=' flex flex-col mt-72 gap-12 m-auto w-5/6 '>
        <div className=' '>
             <p className='text-3xl flex items-center justify-center  font-semibold'>Various Departments</p>
        </div>
        <div className='flex  justify-center flex-row gap-5'>
           {
            departments.map((department,index)=>{
                return(
                    <div className='flex cursor-pointer flex-col gap-3' key={index}>
                    <img className='h-36 w-36 rounded-full object-cover' src={department.img} alt="" />
                    <p className='flex justify-center'>{department.name}</p>
                     </div>
                )
            })
           }
        </div>
    </div>
  )
}

export default Department