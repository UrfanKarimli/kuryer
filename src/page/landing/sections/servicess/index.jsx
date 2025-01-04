import { RiEmotionHappyLine, RiTruckLine, RiWindyFill } from "react-icons/ri";
const Services = () => {
  return (
    <div className="container w-full flex  flex-col items-center">
      <h3 className='text-[#ff764d] text-base font-semibold mb-1 flex items-center'>Xidmətlərimiz</h3>
      <h2 className='text-[#f1f2f3] text-4xl font-semibold mb-6'>Nələr edirik?</h2>
      <div className="w-full flex items-center justify-center gap-8 pt-10 pb-16" >
        <article className=" flex flex-col items-center justify-center bg-[#21232C] p-4 md:p-0 w-full sm:w-[49%] h-[250px]  md:h-[312px] rounded-[16px] border border-[#21232C] hover:border-[#ff764d] transition-[border] duration-300 ease-in-out">
          <RiWindyFill className=" h-16 w-16 text-[#ff764d] mb-3" />
          <h2 className='text-[#f1f2f3] text-2xl font-semibold mb-6'>Bığ saxlayırıq</h2>
          <p className=' text-[#9FA1AD] flex items-center gap-1'>
          Bu bizim üçün önəmlidir  <RiEmotionHappyLine className="" />
          </p>
        </article>
        <article className="hidden sm:flex flex-col items-center justify-center bg-[#21232C] p-4 md:p-0 w-[49%] h-[250px] md:h-[312px] rounded-[16px] border border-[#21232C] hover:border-[#ff764d] transition-[border] duration-300 ease-in-out">
          <RiTruckLine className=" h-16 w-16 text-[#ff764d] mb-3" />
          <h2 className='text-[#f1f2f3] text-2xl font-semibold mb-6'>Çatdırılmalar edirik</h2>
          <p className=' text-[#9FA1AD] flex items-center gap-1'>
          Həm də yüksək keyfiyyətdə
          </p>
        </article>
      </div>
    </div>
  )
}

export default Services