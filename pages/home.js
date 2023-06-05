import Navbar  from "../Components/Navbar"
import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
   <>
    <Head>
      <title>Home</title>
  </Head>
   <Navbar />
   <h1>Home Page</h1>
   <Image src="/demo.jpg" width="1000" height="300"></Image>
   </>
  )
}
