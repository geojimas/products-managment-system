import Head from 'next/head'
import NavBar from '../components/Nav'

export default function Home() {
  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="lg:px-24 md:py-20 md:px-44 px-4 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="absolute">
            <h1 className="text-gray-800 font-bold text-2xl">
              Looks like you found the doorway to the great nothing !
            </h1>
            <p className="my-2 text-gray-800">Welcome to The Page</p>
            <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
              Take me Home
            </button>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt="Image" />
        </div>
      </div>
    </div>
  )
}
