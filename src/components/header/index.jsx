
const Header = () => {
    return (
        <header className=" fixed top-0 left-0 w-full z-50 bg-[#21232c] ">
            <nav className="h-20 flex justify-between items-center mx-6">
                <a href="/" className=" text-[#f1f2f3] font-medium font-poppins">Bığzsız <span className=" text-[#ff764d]">Kuryer</span></a>
                <ul className=" flex items-center gap-7 text-[#f1f2f3] font-medium">
                    <li>
                        <a href="" className=" hover:text-[#ff764d] transition-colors ease-in-out duration-300">Ana səhifə</a>
                    </li>
                    <li>
                        <a href="" className=" hover:text-[#ff764d] transition-colors ease-in-out duration-300">Məşhurların seçimi</a>
                    </li>
                    <li>
                        <a href="" className=" hover:text-[#ff764d] transition-colors ease-in-out duration-300">Haqqımızda</a>
                    </li>
                    <li>
                        <a href="" className=" hover:text-[#ff764d] transition-colors ease-in-out duration-300">Xidmətlərimiz</a>
                    </li>
                    <li>
                        <a href="" className=" hover:text-[#ff764d] transition-colors ease-in-out duration-300">Əlaqə</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header