import { useEffect, useState } from 'react';
import { RiPhoneFill, RiWhatsappLine } from "react-icons/ri";

const BottomNav = () => {
    const [isHidden, setIsHidden] = useState(false);
    let lastScrollY = 0;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
            lastScrollY = currentScrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className=' md:hidden'>
            <div
                className={`bg-transparent backdrop-blur-md w-full  fixed bottom-0 left-0 right-0 z-20 p-[10px] flex justify-between transform transition-transform duration-500 ${isHidden ? 'translate-y-[145%]' : 'translate-y-0'}`}>
                <a
                    href="tel:+994709559904"
                    target="_blank"
                    className=" bg-[#ff764d] text-[#f1f2f3] font-medium rounded-[8px] m-1  py-4 px-5 flex flex-col items-center justify-center  flex-1"
                >
                    <RiPhoneFill />
                    Zəng et
                </a>
                <a
                    href="https://api.whatsapp.com/send?phone=994709559904&text=Salam,%20mənə%20Bığlı%20Kuryer%20lazımdır"
                    target="_blank"
                    className=" bg-[#ff764d] text-[#f1f2f3] font-medium rounded-[8px] m-1  py-4 px-5 flex flex-col items-center justify-center flex-1"
                >
                    <RiWhatsappLine />
                    Whatsapp
                </a>
            </div>
        </div >
    )
}

export default BottomNav