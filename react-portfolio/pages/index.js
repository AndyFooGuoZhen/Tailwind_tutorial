import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillCiCircle,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-32">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbyed</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-500 font-medium">
              Andy Foo
            </h2>
            <h3 className="text-2xl py-2">Developer and tester.</h3>
            <p className="text-md py-5 leading-8 text-gray-700 max-w-xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              inventore placeat vero ipsam aspernatur quae delectus facilis,
              doloribus ipsum id accusamus, perspiciatis error reprehenderit
              vitae, exercitationem aut enim in aperiam.
            </p>
          </div>
          <div className="text-5xl justify-center flex gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          {/* <div className="flex justify-center ">
            <div className=" flex relative  justify-center items-center bg-gradient-to-b from-teal-500 w-80 h-80 rounded-full mt-20 overflow-hidden">
              <Image src={deved} layout="fill" objectFit="cover" />
              <h1 className="text-5xl">hello</h1>
            </div>
          </div> */}

          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl font-medium">Services I offer</h3>
            <p className="text-md py-5 leading-8 text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              voluptates inventore ad doloribus, consectetur, obcaecati quis
              corrupti animi sit nostrum ratione illo ipsam labore, cum autem
              maxime. Rerum, distinctio assumenda?
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
