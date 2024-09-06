import Image from "next/image"
import Girassol from "@/public/girassol.png"
import Statics from "@/public/statics.svg"

export const Navbar = () => {
  return (
    <nav className="flex w-full justify-around items-center p-2">
      <div className="flex justify-center items-center">
        <button className="border-solid border-[2px] border-[#B7AEB4] p-1 rounded-md">
          <Image src={Girassol} alt="Logo" width={35} height={35} />
        </button>
      </div>
      <div>TER AMO</div>
      <div className="">
        <button className="border-solid border-[2px] border-[#B7AEB4] p-1 rounded-md">
          <Image src={Statics} alt="Logo" width={30} height={30} />
        </button>
      </div>
    </nav>
  )
}