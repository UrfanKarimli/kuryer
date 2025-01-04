import { RiMailLine, RiInstagramLine, RiWhatsappLine, RiTiktokFill } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className=" py-16 bg-[#21232c] w-full">

      <div className=" container w-full flex items-center justify-between">
        <div>
          <a href="https://biglikuryer.az/"><h1 className="text-[#f1f2f3] text-3xl font-semibold mb-1">
            Bığlı <span className="text-[#ff764d]">Kuryer</span>
          </h1>
          </a>
          <h2 className="text-[#f1f2f3] text-base font-semibold">
            Sürətli Kuryer xidməti
          </h2>
        </div>
        <div className=" flex items-center gap-6 my-3">
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
        <div>
          <ul className=" flex flex-col gap-[10px] text-white font-medium [&>li]:cursor-pointer">
            <li>Bığlı Kuryer çatdırılma</li>
            <li>Bığlı Kuryer - kuryer</li>
            <li>Çatdırılma xidməti</li>
            <li>Çatdırılma</li>
            <li>Kuryer şirkətləri</li>
            <li>Kuryer vakansiya</li>
            <li>Kuryer xidməti</li>
            <li>Kuryer</li>
            <li>Moto kuryer</li>
            <li>Piyada kuryer</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer