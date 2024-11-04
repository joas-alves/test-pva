import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { RiMenuLine } from "react-icons/ri";
import { LanguageMenu } from "@/components/widgets";

const Header = () => {
  return (
    <header className="container mx-auto flex items-center py-4">
      <RiMenuLine className="cursor-pointer mr-5 flex-shrink-0 block md:hidden" />
      <Image className="mr-10 w-[100px] sm:w-auto" src="/images/logo.svg" width={170} height={70} alt="logo" />
      <nav className="hidden md:flex gap-4">
        <div className="text-primary font-semibold">Home</div>
        <div className="flex items-center gap-0.5">
          Service
          <FiChevronDown />
        </div>
        <div className="flex items-center gap-0.5">
          About
          <FiChevronDown />
        </div>
        <div>News</div>
        <div>Contact</div>
      </nav>
      <div className="flex-1" />
      <div className="flex items-center gap-8">
        <div className="hidden md:block">Global Site</div>
        <span className="hidden md:block">
          <LanguageMenu />
        </span>
        <button className="btn primary-outline-btn">Book a demo</button>
      </div>
    </header>
  )
}

export default Header
