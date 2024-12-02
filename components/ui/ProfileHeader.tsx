"use client"

import Link from "next/link";

type Prop = {
  name: string;
  loader: boolean
}
const ProfileHeader = ({ name, loader }: Prop) => {
  return (
    <div className="flex items-center gap-4">
      {
        loader ? <button className=' md:w-[7rem] md:h-10  duration-200 rounded-xl  bg-[#161616] dark:bg-[#efeff3]  text-white dark:text-slate-900 dark:font-semibold p-2'>Loading...</button>
          :

          (
            !name && !loader ?
              <Link href={"/signup"}><button className=' md:w-[7rem] md:h-10 duration-200 rounded-xl  bg-[#1c1c1d] dark:bg-[#efeff3]  text-white dark:text-slate-900 dark:font-semibold p-2'>SignUp</button></Link>
              :
              <button className=' md:w-[7rem] md:h-10 duration-200 rounded-xl  bg-[#1c1c1d] dark:bg-[#efeff3]  text-white dark:text-slate-900 dark:font-semibold p-2'>Logout</button>
          )}
    </div>
  )
}
export default ProfileHeader