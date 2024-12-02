import Link from "next/link";
import ProfileHeader from "../ui/ProfileHeader";
import Image from "next/image";
import logo from "@/public/logo.png"
type Prop={
name:string;
loader:boolean
}

export default function Navbar({name, loader}:Prop) {
  return (
    <nav className="inset-x-0  top-0 z-50 shadow-sm backgrund bg-[#1c1d1f]">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link className="flex gap-3 items-center" href={"/"}>
            <Image src= {logo} alt="rust" height={50} width={50}/>
            <span className="text-xl font-semibold">GETsetGO</span>
          </Link>
          <div className="flex gap-7 items-center">
            <ProfileHeader name = {name} loader={loader} />
          </div>
        </div>
      </div>
    </nav>
  );
}