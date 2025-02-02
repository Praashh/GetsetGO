"use client";

import Link from "next/link";
import authService from "@/appwrite/auth";
import { Button } from "./button";

type Prop = {
  name: string;
  loader: boolean;
};
const ProfileHeader = ({ name, loader }: Prop) => {
  async function handleLogout() {
    await authService.logout();
  }
  return (
    <div className="flex items-center gap-4">
      {loader ? (
        <Button className="md:w-[7rem] md:h-10 duration-200 rounded-xl bg-indigo-800 dark:bg-[#efeff3] text-white dark:text-slate-900 dark:font-semibold p-2 flex items-center justify-center">
          <div className="loader"></div>
        </Button>
      ) : !name && !loader ? (
        <Link href={"/signup"}>
          <Button className=" md:w-[7rem] md:h-10 duration-200 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-6 flex items-center justify-center gap-2 p-2">
            Try it out
          </Button>
        </Link>
      ) : (
        <Button
          onClick={handleLogout}
          className=" md:w-[7rem] md:h-10 duration-200 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-6 flex items-center justify-center gap-2 p-2"
        >
          Loguout
        </Button>
      )}
    </div>
  );
};
export default ProfileHeader;
