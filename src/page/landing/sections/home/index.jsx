
import { RiMailLine, RiInstagramLine , RiWhatsappLine, RiTiktokFill } from "react-icons/ri";

const Home = () => {
    return (
        <div className="container w-full flex flex-col items-center gap-1">
            <h3 className=" leading-8 text-2xl sm:text-[32px] text-[#f1f2f3] font-medium font-poppins">Salam, <span className=" text-[#ff764d]">Biz</span></h3>
            <h1 className=" leading-normal text-[42px]  sm:text-[64px] text-[#ff764d] font-semibold font-poppins">Bığlı Kuryer</h1>
            <h3 className=" text-2xl sm:text-[32px] text-[#f1f2f3] font-medium font-poppins">Çatdırılmalar edirik!</h3>
            <p className=" text-[#9fa1ad] w-full md:w-[550px] text-center">
                İllərdir qazandığımız &quot;Bığlı Kuryer&quot; təcrübəsi əsasında,
                sizlərə öz xidmətlərimizi göstəririk.
            </p>
            <div className="flex gap-2 my-1">
                <a href="https://api.whatsapp.com/send?phone=994709559904&text=Salam,%20mənə%20Bığlı%20Kuryer%20lazımdır" target="_blank" className=" bg-[#ff764d] text-[#f1f2f3] font-medium rounded-[8px] py-3 px-7 ">Whatsapp</a>
                <a href="tel:+994709559904" target="_blank" className=" bg-[#ff764d] text-[#f1f2f3] font-medium rounded-[8px] py-3 px-7 ">Zəng et</a>
            </div>
            <div className=" flex items-center gap-2 my-3">
                <a
                    href="https://api.whatsapp.com/send?phone=994997564177&text=Salam,%20mənə%20Bığlı%20Kuryer%20lazımdır"
                    target="_blank"
                    style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                    className="bg-[#8b3f27] text-[#f1f2f3] p-2"
                >
                    <RiWhatsappLine className="h-6 w-6" />
                </a>
                <a
                    href="https://www.instagram.com/biglikuryer/"
                    target="_blank"
                    style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                    className="bg-[#8b3f27] text-[#f1f2f3] p-2"><RiInstagramLine className="h-6 w-6" /></a>
                <a
                    href="https://www.tiktok.com/"
                    target="_blank"
                    style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                    className="bg-[#8b3f27] text-[#f1f2f3] p-2"><RiTiktokFill className="h-6 w-6" /></a>
                <a
                    href="mailto:elaqe@biglikuryer.az"
                    target="_blank"
                    style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                    className="bg-[#8b3f27] text-[#f1f2f3] p-2"><RiMailLine className="h-6 w-6" /></a>
            </div>
        </div>
    )
}
export default Home