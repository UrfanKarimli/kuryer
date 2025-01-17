import { RiBardFill } from "react-icons/ri"

const Skills = () => {
    return (
        <div className="container w-full flex flex-col md:flex-row justify-between items-center gap-14 pb-8">

            <div className='w-full md:w-2/5  lg:w-[460px] flex flex-col items-center md:items-start'>
                <h3 className='text-[#f1f2f3] text-base font-semibold mb-1 flex items-center gap-1'>Xüsusi <span className='text-[#ff764d] flex gap-1 items-center'> Bacarıqlarımız </span></h3>
                <h2 className='text-[#f1f2f3] text-4xl font-semibold mb-6'> Qısa məlumat</h2>
                <p className=' mb-12 text-[#9FA1AD] md:text-start text-center'>
                    Bu bacarıqlarımızı sizlər üçün təmin etməkdə, məmnuniyyət duyuruq.
                </p>
                <a href="#contact" className='text-[#f1f2f3] bg-[#ff764d] h-[55px] w-[218px] flex  items-center justify-center gap-1 rounded-[8px] font-medium transition-all duration-300 hover:shadow-[0_8px_20px_rgba(204,48,0,0.25)] '>Məşhurların seçimi <RiBardFill /></a>
            </div>
            <div>
                <p className=' text-center md:text-start md:w-[370px] px-8 md:px-0 text-[#9FA1AD]'>
                Bizim ən böyük bacarıqlarımızdan biri də,
                məhsulları ünvana daha sürətli çatdırmağımızdır.
                </p>
            </div>
        </div>
    )
}


export default Skills