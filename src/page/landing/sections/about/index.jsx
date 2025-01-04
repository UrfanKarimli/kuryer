import logo from '../../../../assets/logo.png'

const About = () => {
    return (
        <div className='container w-full flex flex-col-reverse md:flex-row justify-center items-center  gap-[72px]'>
            <div
                style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
                className=' bg-[#ff764d] w-[310px] h-[310px] sm:w-[380px] sm:h-[380px] lg:w-[460px] lg:h-[460px] flex items-center justify-center overflow-hidden'>
                <div
                    style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                    className=' bg-white w-[300px] h-[300px] sm:w-[370px] sm:h-[370px] lg:w-[450px] lg:h-[450px] flex items-center justify-center overflow-hidden'>
                    <img src={logo} alt="" />
                </div>
            </div>
            
            <div className=' w-3/5 md:w-2/5  lg:w-[460px] flex flex-col items-center md:items-start'>
                <a href="/">
                    <h3 className='text-[#f1f2f3] text-[15px] lg:text-base font-semibold mb-1 flex items-center gap-1'>Bığlı <span className='text-[#ff764d] flex gap-1 items-center'> Kuryer </span></h3>
                </a>
                <h2 className='text-[#f1f2f3] text-2xl lg:text-4xl font-semibold mb-6'> Haqqımızda</h2>
                <p className=' mb-12 text-[#9FA1AD]'>
                    Biz &quot;Bığlı Kuryer&quot; komandası olaraq, daima müştərilərin məhsullarının çatdırılması
                    ilə məşğul oluruq. İstər onlayn, istərsə də böyük mağazalar.. Bir zənglə &quot;Bığlı Kuryer&quot;
                    sizin ünvanınıza çatacaqdır!
                    <span> Unutmayın ki, <strong>&quot;Bığlı Kuryer&quot;</strong> sizin üçün çalışır!</span>
                </p>
                <a href="/#contact" className='text-[#f1f2f3] bg-[#ff764d] py-4 px-7 rounded-[8px] font-medium transition-all duration-300 hover:shadow-[0_8px_20px_rgba(204,48,0,0.25)]'>Əlaqəyə keç</a>
            </div>
        </div>
    )
}

export default About