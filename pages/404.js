import Link from 'next/link'
  import {useEffect} from 'react'
import { useRouter } from 'next/router'
export default function ErrorPage() {
  const router = useRouter();

  const handleClick =()=>{
    router.push("/");
  }

  useEffect(()=>{
    setTimeout(()=>{
    router.push("/");
    },2000)
  },[])
  return (
    <>
        <h2>We ar sorry , Page not Found</h2>

        {/* <Link href='/'>
        <button>back to home</button>
        </Link> */}

        {/* <button onClick={()=>router.push("/")}>back to home</button> */}


        <button onClick={handleClick}>back to home</button>

    </>
  )
}
