import gsap from 'gsap'
import { split } from 'lodash'
import { NextPage } from 'next'
import { useEffect } from 'react'

const HomePage: NextPage = () => {
  const textSplit = () => {
    const text = `I'm a Web Developer, Hardance Music Producer who loves to work hands-on — based in Vietnam.`
    return split(text, ' ').map((i, idx) => (
      <div
        className="text inline-block translate-y-[500%] text-[#000000]   opacity-0 blur-3xl drop-shadow-sm"
        key={idx}
      >
        {i}
      </div>
    ))
  }

  useEffect(() => {
    gsap.to('.text', {
      y: 0,
      stagger: 0.1,
      opacity: 1,
      webkitFilter: 'blur(0px)',
    })
  }, [])
  return (
    <div className="h-screen  selection:bg-black selection:text-white">
      {/* <header className="fixed  top-0 flex h-[100px] w-full items-center justify-between">
        <div>Work</div>
        <div className="font-cuzknothz text-[2rem] uppercase tracking-wider">cuzknothz</div>
        <div>Info</div>
      </header> */}
      <div>
        <div className="flex min-h-screen w-full flex-col items-center justify-center">
          <div className="flex w-full flex-wrap items-center justify-center gap-[15px] px-[15%] text-center font-gt-cinetype text-[5rem] font-bold leading-[5.2rem]">
            {textSplit()}
          </div>
          {/* <div className="text-[5rem]">✌</div> */}
        </div>

        <div className="h-[500px] w-full bg-black">PROJECT</div>
      </div>
    </div>
  )
}

export default HomePage
