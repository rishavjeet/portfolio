import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header
      className="bg-black px-[10px] py-[10px] text-white"
      >
        <h1>
          <Link
          href="http://localhost:3000"
          >
            Rishav.dev
          </Link>
        </h1>
      </header>
      <section>
        <Image alt="background-image"  width={1440} height={500} src="/assets/background-image.jpg"/>
      </section>
    </>
  );
}
