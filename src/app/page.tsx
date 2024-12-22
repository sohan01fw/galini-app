import { Navbar } from "@/components/index/Navbar";
import { GetStartedBtn } from "@/components/sharedui/Buttonui";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="grid grid-rows-[20px_1fr_20px] bg-custom items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start">
          <div className="mt-14">
            <div>
              <h1 className="text-7xl font-semibold"> AI you can trust </h1>
              <p className=" m-2 text-sm text-gray-600">
                Ensure your AI applications comply with your company policies,
                industry standards and regulations
              </p>
            </div>
            <div className="flex gap-4 items-center flex-col sm:flex-row mt-5 ">
              <GetStartedBtn />
            </div>
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/2luqEuXK-34"
              width="560"
              height="315"
              title="YouTube video"
              className="rounded-xl"
            ></iframe>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </div>
  );
}
