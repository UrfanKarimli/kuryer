import { RiInstagramFill, RiMailFill, RiPhoneFill, RiWhatsappFill } from "react-icons/ri";
const ContactUS = () => {
    return (
        <div className="container w-full flex  flex-col items-center">
            <h3 className='text-[#f1f2f3] text-base font-semibold mb-1 flex items-center gap-1'> Bizimlə <span className="text-[#ff764d]">əlaqəyə keçmək</span> üçün növü seçin.</h3>
            <h2 className='text-[#f1f2f3] text-4xl font-semibold mb-6'>Əlaqə</h2>
            <div className=" flex items-center justify-center">
                <div className=" grid grid-cols-2 gap-x-3 gap-y-5">
                    <div className=" pt-7 px-6 pb-6 bg-[#2b2e3b] border-[2px] border-[#ff764d] rounded-[8px] transition duration-300 ease-in-out">
                        <div className=" flex items-start gap-3 mb-5">
                            <div className="bg-[#f1f2f3] p-[6px] rounded-[6px]">
                                <RiPhoneFill className="  text-[#ff764d] h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="text-[#f1f2f3] text-base font-medium">Zəng</h3>
                            </div>
                        </div>
                        <a href="tel:+994709559904" className="w-[150px] h-[50px] flex items-center justify-center font-semibold rounded-[4px] text-[#ff764d] bg-[#f1f2f3]  hover:text-[#f1f2f3] hover:bg-[#ff764d]" >Zəng et</a>
                    </div>
                    <div className=" pt-7 px-6 pb-6 bg-[#2b2e3b] border-[2px] border-[#ff764d] rounded-[8px] transition duration-300 ease-in-out">
                        <div className=" flex items-start gap-3 mb-5">
                            <div className="bg-[#f1f2f3] p-[6px] rounded-[6px]">
                                <RiWhatsappFill className="  text-[#ff764d] h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="text-[#f1f2f3] text-base font-medium">Whatsapp</h3>
                            </div>
                        </div>
                        <a href="https://api.whatsapp.com/send?phone=994709559904&text=Salam,%20mənə%20Bığlı%20Kuryer%20lazımdır" className="w-[150px] h-[50px] flex items-center justify-center font-semibold rounded-[4px] text-[#ff764d] bg-[#f1f2f3]  hover:text-[#f1f2f3] hover:bg-[#ff764d]" >Mesaj yaz</a>
                    </div>
                    <div className=" pt-7 px-6 pb-6 bg-[#2b2e3b] border-[2px] border-[#ff764d] rounded-[8px] transition duration-300 ease-in-out">
                        <div className=" flex items-start gap-3 mb-5">
                            <div className="bg-[#f1f2f3] p-[6px] rounded-[6px]">
                                <RiInstagramFill className="  text-[#ff764d] h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="text-[#f1f2f3] text-base font-medium">İnstagram</h3>
                            </div>
                        </div>
                        <a href="https://www.instagram.com/biglikuryer/" className="w-[150px] h-[50px] flex items-center justify-center font-semibold rounded-[4px] text-[#ff764d] bg-[#f1f2f3]  hover:text-[#f1f2f3] hover:bg-[#ff764d]" >İzlə</a>
                    </div>
                    <div className=" pt-7 px-6 pb-6 bg-[#2b2e3b] border-[2px] border-[#ff764d] rounded-[8px] transition duration-300 ease-in-out">
                        <div className=" flex items-start gap-3 mb-5">
                            <div className="bg-[#f1f2f3] p-[6px] rounded-[6px]">
                                <RiMailFill className="  text-[#ff764d] h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="text-[#f1f2f3] text-base font-medium">Mail</h3>
                            </div>
                        </div>
                        <a href="mailto:elaqe@biglikuryer.az" className="w-[150px] h-[50px] flex items-center justify-center font-semibold rounded-[4px] text-[#ff764d] bg-[#f1f2f3]  hover:text-[#f1f2f3] hover:bg-[#ff764d]" >Mail göndər</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUS