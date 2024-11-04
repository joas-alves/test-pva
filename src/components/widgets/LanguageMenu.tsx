import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";


export const LanguageMenu = () => {
  return (
    <div className="flex items-center gap-1">
      <Image src="/images/united kingdom.svg" width={28} height={28} alt="flag" />
      <FiChevronDown />
    </div>
  )
}
