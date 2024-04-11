import Image from "next/image";
import Link from "next/link";
import {Button} from "@nextui-org/react"

export default function Home() {
  return (
    <>
      <header
      className="bg-black px-3.5 py-3.5 text-white"
      >
        <h1 className="lg:text-3xl">
          <Link
          href="http://localhost:3000"
          >
            Rishav.dev
          </Link>
        </h1>
      </header>
      <section className="grid lg:grid-cols-2 lg:gap-4 sm:grid-cols-1  px-10 min-h-[700px] bg-[url(/assets/background-image.jpg)] bg-cover">
        <div className="flex items-center  w-5/6">
          <h2 className="text-white font-12 text-8xl animate-typing overflow-hidden whitespace-nowrap border-r-[22px] border-r-white font-bold">Hi, I am Rishav</h2>
        </div>
        <div>
          <p className="text-white">I am Developer</p>
        </div>
      </section>
      <section className="bg-black">

      <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-4">
          <div className="bg-white rounded px-4 py-4 mx-2 my-5">
            <Image
              src="/assets/nodejs-logo.png"
              alt="node-js-image"
              width={0}
              height={0}
              sizes="100vw"
              style={{width:'100%', height: 'auto', objectFit: 'cover'}}
            />
            <h2 className="py-2">NodeJs</h2>
            <p>Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.</p>
            <div className="button-container mt-4 flex justify-center">
              <Button className="bg-blue-500 text-white px-2 py-3 rounded">
                Let&apos;s Talk more
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
