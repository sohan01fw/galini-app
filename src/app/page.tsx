import { Navbar } from "@/components/index/Navbar";
import Image from "next/image";
import { HomeBtn } from "../components/sharedui/Buttonui";

export default async function page() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="grid grid-rows-[20px_1fr_20px] mt-[-4rem] bg-custom items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start">
          <div className="mt-14 flex flex-col justify-center">
            <div className="text-center">
              <h1 className="text-7xl font-semibold "> AI you can trust </h1>
              <p className=" m-2 text-sm text-gray-600">
                Ensure your AI applications comply with your company policies,
                industry standards and regulations
              </p>
            </div>
            <div className="flex gap-5 items-center flex-col sm:flex-row mt-5 justify-center ">
              <div>
                <HomeBtn sizes="lg" />
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* <div className="flex justify-center">
        <iframe
          src="https://www.youtube.com/embed/2luqEuXK-34"
          width="1000"
          height="700"
          title="YouTube video"
          className="rounded-xl"
          allowFullScreen
        ></iframe>
      </div> */}

      <div className="relative h-20 w-full bg-purple-700">
        {/* Top wave */}
        <svg
          className="absolute top-0 w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#6b46c1"
            d="M0,128L48,138.7C96,149,192,171,288,181.3C384,192,480,192,576,181.3C672,171,768,149,864,144C960,139,1056,149,1152,165.3C1248,181,1344,203,1392,213.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        {/* Bottom wave */}
        <svg
          className="absolute bottom-0 w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#6b46c1"
            d="M0,64L48,85.3C96,107,192,149,288,160C384,171,480,149,576,149.3C672,149,768,171,864,186.7C960,203,1056,213,1152,213.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="flex justify-center w-full mt-40 ">
        <h4 className="w-[40rem] text-center font-semibold text-xl text-gray-500">
          Trusted by thousands of developers, ML and AI Platform engineers
          across leading enterprises
        </h4>
      </div>
      <div className="flex justify-center m-10">
        <div className=" flex flex-col text-center justify-center p-10 gap-10">
          <h2 className="text-2xl font-semibold">
            Compliance guardrails for AI apps
          </h2>

          <Image
            src="https://static.wixstatic.com/media/72c66f_1a1c684637f048b5b33b399bcb709320~mv2.png/v1/fill/w_864,h_601,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%2033129%20(2).png"
            width={400}
            height={600}
            alt="guardrails_process_img"
            className="w-[40rem] h-[30rem]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
