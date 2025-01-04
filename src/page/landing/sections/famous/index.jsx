import image1 from '../../../../assets/project-img-1.jpg'
import image2 from '../../../../assets/project-img-2.jpg'
import image3 from '../../../../assets/project-img-3.jpg'

import { LuExternalLink } from "react-icons/lu";
import { RiBardFill } from "react-icons/ri";
const Famous = () => {
    return (
        <div className='container w-full flex flex-col items-center '>
            <h3 className='text-[#f1f2f3] text-base font-semibold mb-1 flex items-center'>Bığ<span className='text-[#ff764d] flex gap-1 items-center'>lılarımız <RiBardFill /></span></h3>
            <h2 className='text-[#f1f2f3] text-4xl font-semibold mb-6'> Bığlı Kuryerlərimizi seçən məhşurlar</h2>
            <div className=" grid grid-cols-1 gap-6 pt-10 pb-16  md:grid-cols-2 xl:grid-cols-3">
                    <article>
                        <figure className=" relative overflow-hidden rounded-[16px] group ">
                            <img src={image1} alt="" className=' w-[350px] h-[235px]' />
                            <figcaption className=' w-full h-full bg-gradient-to-b from-transparent to-[#ad401fcc] backdrop-blur-sm rounded-[16px]  transition-[bottom] duration-500 flex flex-col items-center justify-center absolute left-0 -bottom-full group-hover:bottom-0'>
                                <span className=' text-[#f1f2f3] text-sm block mb-1'>Onun da bığı var</span>
                                <span className='text-[#f1f2f3] text-2xl mb-3 font-medium'>İlkin Xəlil</span>
                                <a href="https://www.instagram.com/p/CzzMZXJrCws/" target='_blank' className=' text-base text-[#f1f2f3] font-medium flex items-center gap-2'>
                                    Daha ətraflı
                                    <LuExternalLink />
                                </a>
                            </figcaption>
                        </figure>
                    </article>
                    <article>
                        <figure className=" relative overflow-hidden rounded-[16px] group ">
                            <img src={image2} alt="" className=' w-[350px] h-[235px]' />
                            <figcaption className=' w-full h-full bg-gradient-to-b from-transparent to-[#ad401fcc] backdrop-blur-sm rounded-[16px]  transition-[bottom] duration-500 flex flex-col items-center justify-center absolute left-0 -bottom-full group-hover:bottom-0'>
                                <span className=' text-[#f1f2f3] text-sm block mb-1'>O bir xanımdır, olmasaydı onun da bığı olardı</span>
                                <span className='text-[#f1f2f3] text-2xl mb-3 font-medium'>Aysel Ələkbərzadə</span>
                                <a href="https://www.instagram.com/p/C1DLwgzJT_U/" target='_blank' className=' text-base text-[#f1f2f3] font-medium flex items-center gap-2'>
                                    Daha ətraflı
                                    <LuExternalLink />
                                </a>
                            </figcaption>
                        </figure>
                    </article>
                    <article>
                        <figure className=" relative overflow-hidden rounded-[16px] group ">
                            <img src={image3} alt="" className=' w-[350px] h-[235px]' />
                            <figcaption className=' w-full h-full bg-gradient-to-b from-transparent to-[#ad401fcc] backdrop-blur-sm rounded-[16px]  transition-[bottom] duration-500 flex flex-col items-center justify-center absolute left-0 -bottom-full group-hover:bottom-0'>
                                <span className=' text-[#f1f2f3] text-sm block mb-1'>Onun da bığı var</span>
                                <span className='text-[#f1f2f3] text-2xl mb-3 font-medium'>Munis Əhmədov</span>
                                <a href="https://www.instagram.com/p/CzzODvbL0X5/" target='_blank' className=' text-base text-[#f1f2f3] font-medium flex items-center gap-2'>
                                    Daha ətraflı
                                    <LuExternalLink />
                                </a>
                            </figcaption>
                        </figure>
                    </article>
                </div>
        </div>
    )
}
 
export default Famous