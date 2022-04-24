import type { NextPage } from 'next'
import Link from "next/link";


const Home: NextPage = () => {
  return (
      <>
          <h1 className="text-3xl font-bold underline text-red-900">
            Hello world!
          </h1>
          <Link href="post/list"><button className="btn bg-teal-400 rounded-lg px-2">post_list</button></Link>
      </>
  )
}

export default Home
