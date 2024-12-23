import React from 'react'
import Image from 'next/image';


const Detailed = () => {
  return (
    <section className="w-[100vw] h-[80vh] md:h-[100vh] bg-black text-white xl:h-[80vh] pt-0 2xl:pt-[2rem]">
        <div className="relative">
          <div className="">
                <div className="bg-white w-[95vw] h-[50vh] rounded-lg mx-auto xl:hidden relative">
                  <Image
                    src="/img/about.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="About Image"
                    className="rounded-lg"
                  />
                </div>
                <div className="text-[2.7vh] md:text-[2vh] flex flex-row justify-between space-x-0 p-0 lg:p-4 xl:mr-[2rem] tracking-wide font-semibold">
                  <div className="p-2 hidden md:block">
                    <p>Cogito</p>
                    <p>Discens</p>
                  </div>
                  <div className="flex flex-col p-2 space-y-2">
                    <a href="https://www.instagram.com/mraihan_arif/">Instagram</a>
                    <a href="https://www.linkedin.com/in/mraihanarif/">LinkeIn</a>
                    <a href="https://github.com/mraihanarif">Github</a>
                    <a href="https://www.facebook.com/chuizdraw123">Facebook</a>
                  </div>
                  <div className="p-2 text-start space-y-1"> 
                    <p>04th October 2001</p>
                    <p>Padang</p>
                    <p>Indonesia</p>
                    <br />
                    <p>mraihanarif666@gmail.com</p>
                    <p>+62 82383978374</p>
                  </div>
                  <div className="bg-white w-[50vw] h-[50vh] xl:h-[70vh] rounded-lg mx-auto hidden xl:block relative">
                      <Image
                        src="/img/about.jpg"
                        layout="fill"
                        objectFit="cover"
                        alt="About Image"
                        className="rounded-lg"
                      />
                    </div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Detailed