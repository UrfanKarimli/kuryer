import image1 from '../../../../assets/project-img-1.jpg'
import image2 from '../../../../assets/project-img-2.jpg'
import image3 from '../../../../assets/project-img-3.jpg'

import { LuExternalLink } from "react-icons/lu";
import { RiBardFill } from "react-icons/ri";
const Famous = () => {
    return (
        <div className=' w-full flex flex-col items-center '>
            <h3 className='text-[#f1f2f3] text-base font-semibold mb-1 flex items-center'>Bığ<span className='text-[#ff764d] flex gap-1 items-center'>sızlarımız <RiBardFill /></span></h3>
            <h2 className='text-[#f1f2f3] text-4xl font-semibold mb-6'> Bığsız Kuryerlərimizi seçən məhşurlar</h2>
            <div className=" flex flex-wrap items-center justify-between gap-4 pt-10 pb-16 w-full ">
                <article>
                    <figure className=" relative overflow-hidden rounded-[16px] group ">
                        <img src={image1} alt="" className=' w-[350px] h-[235px]' />
                        <figcaption className=' w-full h-full bg-gradient-to-b from-transparent to-[#ad401fcc] backdrop-blur-sm rounded-[16px]  transition-[bottom] duration-500 flex flex-col items-center justify-center absolute left-0 -bottom-full group-hover:bottom-0'>
                            <span className=' text-[#f1f2f3] text-sm block mb-1'>O da Bığzsızdır</span>
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
                            <span className=' text-[#f1f2f3] text-sm block mb-1'>O da Bığzsızdır</span>
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
                            <span className=' text-[#f1f2f3] text-sm block mb-1'>O da Bığzsızdır</span>
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