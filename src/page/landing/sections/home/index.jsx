import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const Home = () => {
    return (
        <div className=" flex flex-col items-center gap-1">
            <h3 className=" leading-8 text-[32px] text-[#f1f2f3] font-medium font-poppins">Salam, <span className=" text-[#ff764d]">Biz</span></h3>
            <h1 className=" leading-normal text-[64px] text-[#ff764d] font-semibold font-poppins">Bığzsız Kuryer</h1>
            <h3 className=" text-[32px] text-[#f1f2f3] font-medium font-poppins">Çatdırılmalar edirik!</h3>
            <p className=" text-[#9fa1ad] w-[550px] text-center">
                İllərdir qazandığımız &quot;Bığsız Kuryer&quot; təcrübəsi əsasında,
                sizlərə öz xidmətlərimizi göstəririk.
            </p>
            <div className="flex gap-2 my-1">
                <a href="https://api.whatsapp.com/send?phone=994997564177&text=Salam,%20mənə%20Bığsız%20Kuryer%20lazımdır" target="_blank" className=" bg-[#ff764d] text-[#f1f2f3] font-medium rounded-[8px] py-3 px-7 ">Whatsapp</a>
                <a href="tel:+994997564177" target="_blank" className=" bg-[#ff764d] text-[#f1f2f3] font-medium rounded-[8px] py-3 px-7 ">Zəng et</a>
            </div>
            <div className=" flex items-center gap-2 my-3">
                <a
                    href="https://api.whatsapp.com/send?phone=994997564177&text=Salam,%20mənə%20Bığsız%20Kuryer%20lazımdır"
                    target="_blank"
                    style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                    className="bg-[#8b3f27] text-[#f1f2f3] p-2"
                >
                    <FaWhatsapp className="h-6 w-6" />
                </a>
                <a
                    href="https://www.instagram.com/urfun8/"
                    target="_blank"
                    style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                    className="bg-[#8b3f27] text-[#f1f2f3] p-2"><FaInstagram className="h-6 w-6" /></a>
                <a
                    href="https://www.tiktok.com/"
                    target="_blank"
                    style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                    className="bg-[#8b3f27] text-[#f1f2f3] p-2"><FaTiktok className="h-6 w-6" /></a>
                <a
                    href="mailto:urfankarim@gmail.com"
                    target="_blank"
                    style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                    className="bg-[#8b3f27] text-[#f1f2f3] p-2"><FiMail className="h-6 w-6" /></a>
            </div>
        </div>
    )
}

export default Home