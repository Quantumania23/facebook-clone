import {getSession} from "next-auth/client";
import Head from 'next/head'
import Header from '../components/Header'
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

export default function Home({session}) {
  if (!session) return <Login />
    
  return (
   <div className="h-screen bg-gray-100 overflow-hidden">
    <Head>
      <title>Facebook2.0</title>
    </Head>
    {/* Header */}
    <Header/>
    <main className="flex">
      {/* sidebar */}
      <Sidebar/>
      {/* feed */}
      <Feed/>
      {/* widgets */}

    </main>
   </div>
  )
}

export async function getServerSideProps(context) {
  // Getting the user
  const session = await getSession(context);

  return{
    props:{
      session
    }
  }
}