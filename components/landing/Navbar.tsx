import Link from "next/link";
import ProfileHeader from "../ui/ProfileHeader";
import Image from "next/image";
import logo from "@/public/image.png";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/mode-toggle";

type Prop = {
  name: string;
  loader: boolean;
};

const navItems = [{ label: "Contact Us", href: "/contact" }];

export default function Navbar({ name, loader }: Prop) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="inset-x-0 fixed top-0 z-50 bg-white dark:bg-black shadow-sm">
      <div className="sm:max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between px-28 h-20 items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={logo}
                alt="Vora AI"
                height={40}
                width={120}
                priority
              />
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            {navItems.map((item, index) => (
              <Button
                key={index}
                className="inline-block border-none group hover:border text-sm font-medium transition-colors duration-300"
                variant="ghost"
              >
                <Link
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 border-none hover:border group-hover:text-pink-500 dark:group-hover:text-pink-400 text-sm font-medium transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </Button>
            ))}
            <ProfileHeader name={name} loader={loader} />
            <ModeToggle />
          </div>
          <div className="sm:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden bg-white dark:bg-black"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="block px-3"
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-[#4F46E5] dark:hover:text-[#818CF8] block py-2 text-base font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 px-3">
                <ProfileHeader name={name} loader={loader} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}