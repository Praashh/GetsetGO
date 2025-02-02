"use client";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="w-full pt-20 bg-gradient-to-b from-white via-purple-50/50 to-pink-100/50 h-[75vh]">
      <div className="max-w-7xl mx-auto px-28 ">
        <motion.div
          className="w-full flex flex-col lg:flex-row items-start justify-between"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.25 }}
        >
    <div className="flex-1 max-w-xl pt-20">
            <h1 className="text-6xl font-bold">
              <span className="text-indigo-900 block 0">AI Digital Workers</span>
              <span className="text-pink-500 mt-4 block ">for Hiring Teams</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Our AI recruiter Rachel screens your inbound applications, shortlists candidates and conducts phone screens so you can focus on closing the top candidates.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard">
                <Button className="w-full sm:w-auto bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-6 rounded-xl flex items-center justify-center gap-2 text-lg font-medium">
                  Talk to Rachel
                  <PlayCircle className="w-6 h-6" />
                </Button>
              </Link>

              <Link href="#demo">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto bg-white border-2 border-pink-400 text-pink-500  hover:bg-pink-50 px-8 py-6 rounded-xl text-lg font-medium"
                >
                  Book a demo
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-end items-start pt-16">
            <div className="relative">
      <div className="relative group">
        <div className="w-[300px] h-[300px] rounded-full overflow-hidden ring-8 ring-white transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-pink-600">
          <img
                  src="https://www.usevora.ai/images/rachel-pied-piper.webp"
                  alt="AI Digital Worker"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
              <Button
                className="absolute bottom-0 right-4 transform translate-y-1/2 bg-gradient-to-r from-[#2D2367] to-[#B75F89] hover:from-[#2D2367]/90 hover:to-[#B75F89]/90 text-white px-6 h-12 rounded-full"
              >
                Hire Rachel Today
              </Button>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}

export default Hero;