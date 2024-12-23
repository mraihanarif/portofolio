import React from 'react'

const herotest = () => {
  return (
    <>
    <section id="hero" className={`${Ogg.className} text-white relative w-[100vw] h-[100vh]`}>
          <div className="flex flex-col leading-tight text-[2.5rem] lg:text-[5rem] xl:text-[4rem] font-extrabold">
              <div className=" absolute top-[15vh] lg:top-[10vh] left-0 lg:left-[5vw] xl:left-[3vw] px-4  text-start">
                <h1><span className={`${Ogg1.className} text-[3rem] lg:text-[9rem] xl:text-[7rem]`}>D</span>EVELOPER</h1>
                <h1><span className={`${bodoni.className} text-[3rem] lg:text-[9rem] xl:text-[7rem] font-semibold`}>&nbsp;&&nbsp;&nbsp;</span><span className={`${Ogg1.className} text-[3rem] lg:text-[9rem] xl:text-[7rem]`}>D</span>ESIGNER</h1>
                <h1><span className={`${Ogg1.className} text-[3rem] lg:text-[9rem] xl:text-[7rem]`}>F</span>OR UR <span className={`text-[3rem] lg:text-[9rem] xl:text-[7rem]`}>W</span>EBSITE</h1>
              </div>
              <div className="absolute bottom-[15vh] lg:bottom-[10vh] xl:bottom-[1vh] right-0 lg:right-[5vw] xl:right-[6vw] text-end px-4 ">
                <h1><span className={`${Ogg1.className} text-[3rem] lg:text-[9rem] xl:text-[7rem]`}>B</span>ASED IN</h1>
                <h1><span className={`${Ogg1.className} text-[3rem] lg:text-[9rem] xl:text-[7rem]`}>I</span>NDONESIA</h1>
              </div>
          </div>
        <div className="absolute bottom-0 left-0 p-2 font-extrabold">
          <p>SCROLL</p>
        </div>
      </section>

      <section id="about" className="text-white w-[100vw] h-[100vh] bg-black overflow-hidden">
        <div>
          <div className={`${Ogg.className} font-semibold max-w-none p-2 text-[3.6vh] md:max-w-[45rem] 2xl:max-w-[70rem] md:p-4 2xl:text-[5.1vh] tracking-loose`}>
            <p>Passionate about Web Development and Design, and tackling complex challenges with desire to find creative solutions.</p>
            <br />
            <p>the combination of analytical thinking and artistic skills allows me to create interesting and powerful digital experiences for users.</p>
            <br />
            <p>With Experienced such as HTML, CSS, PHP, JavaScript, SQL and some Frameworks like Laravel, Codeigniter, and Next.js </p>
            <p>[ Lets work with me :) ]</p>
          </div>
          <a
              href="./Resume.pdf"
              download
              className="w-64 h-[2.5rem] border mx-2 mt-4 p-2 2xl:m-0 2xl:ml-4 flex cursor-pointer bg-black hover:bg-white hover:text-black text-white font-bold hover:font-extrabold duration-500 transition-all" 
          >
              Download CV
          </a>
        </div>
      </section>

      <section className={`${Ogg.className} w-[100vw] h-[80vh] md:h-[100vh] bg-black text-white xl:h-[80vh] pt-0 2xl:pt-[2rem]`}>
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

      <section className={`${Ogg.className} text-white bg-black w-[100vw] h-auto lg:h-[200vh]`}>
        <div className="pt-[2rem]">
          <div className="marquee">
          <ScrollingTextComponent />
          </div>
          <div className="flex flex-col gap-1 pt-[5rem]">
          <div className="container mx-auto p-4">
              <div className="border rounded-lg flex flex-col lg:flex-row text-white">
                  <div className="border-b xl:border-r xl:border-b-0 w-full lg:w-4/5"> {/* 80% lebar untuk bagian pertama */}
                      <div className="p-4">
                          <div>
                              <h1>Freelance</h1>
                              <h2 className="text-4xl py-[2rem]">Digital Queue Website</h2>
                          </div>
                          <p className="text-white text-2xl leading-loose tracking-wide max-w-[90vw]">Designed and developed a complete digital queue management system for the Disdukcapil in 
                          Merangin, Jambi.
                          Collaborated with Disdukcapil employee to gather requirements, implement key features, and 
                          ensure the system met organizational needs. 
                          </p>
                      </div>
                  </div>
                  <a href="/" className="w-full lg:w-1/5 p-4 rounded-lg items-end flex"> {/* 20% lebar untuk bagian kedua */}
                      <h2 className=" text-7xl">SEE ✦</h2>
                  </a>
              </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default herotest