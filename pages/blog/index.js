import React from 'react'
import Head from 'next/head'
import Navbar from '../../Components/Navbar'

export const getStaticProps= async()=>{
      const data= await fetch("https://jsonplaceholder.typicode.com/users");
      const res=await data.json();

      return{
        props:{
          res
        }
      }
}

export default function blog({res}) {
  return (
    <>
    <Head>
     <title>Blog</title>
    </Head>
   <Navbar />
   <h1>Blog Page</h1>
   <div>
      {
        res.slice(0,5).map((val)=>{
          return(
            <>
              <h3>{val.id}</h3>
              <h2> {val.name}</h2>
            </>
          )
        })
      }
   </div>
   </>
  )
}
