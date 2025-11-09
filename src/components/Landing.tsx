
const Landing = () => {
  return (
    <section className='flex items-center justify-evenly w-[80%] m-[auto 0] '>
      <div className="s-first w-[60%]">
        <div className="s-f-line text-6xl flex flex-col gap-2 font-thin mb-4">
          <h1 className=''>The next generation</h1><h1>of code review.</h1>
        </div>
        <div className='s-s-line mb-5 text-gray-300 text-[17px] font-black'>
          <h4>Graphite is the AI code review platform</h4>
          <h4>where teams ship higher quality code, faster.</h4>
        </div>
        <div className="s-t-line">
          <div className="btn-wrapper flex  gap-2 mb-8">
            <button className='rounded p-1.5 cursor-pointer bg-[#202020]'>Get started for free</button>
            <button className='rounded p-1.5 cursor-pointer bg-[#202020]'>Request a demo</button>
          </div>
        </div>
        <div className="s-f-line">
          <p className='text-[12px] text-gray-300'>Free for your first 30 days. No credit card required. Synced with your GitHub account.</p>
        </div>
      </div>
      <div className="s-second relative w-[40%]">
        <img src="https://graphite.com/nextImageExportOptimizer/neon-hex-logo.d69de1a0-opt-480.WEBP" alt="" className='pt-[30px] mt-5'/>
      </div>
    </section>
  )
}

export default Landing