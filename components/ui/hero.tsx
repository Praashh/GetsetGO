"use client";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ReactWrapBalancer from "react-wrap-balancer";

export function Hero() {
  return (
    <div className="flex justify-center items-center h-screen w-[100%]">
    <motion.div
      className="container mx-auto px-4 sm:px-6 py-12 md:py-24"
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, delay: 0.25 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-around">
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-900 via-pink-500 to-orange-400 bg-clip-text text-transparent pb-2">
            <ReactWrapBalancer>
              AI Digital Workers for Hiring Teams
            </ReactWrapBalancer>
          </h1>

          <p className="mt-6 text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Our AI recruiter Rachel screens your inbound applications, shortlists
            candidates and conducts phone screens so you can focus on closing the
            top candidates.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/dashboard">
              <Button className="w-full sm:w-auto bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-6 rounded-xl flex items-center justify-center gap-2 text-lg">
                Talk to Rachel
                <PlayCircle className="w-10 h-10 ml-1" />
              </Button>
            </Link>

            <Link href="#demo">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-pink-400 text-pink-500 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/10 px-8 py-6 rounded-xl text-lg"
              >
                Book a demo
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex-1 max-w-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <img
              src="https://www.usevora.ai/images/rachel-pied-piper.webp"
              alt="AI Digital Workers Illustration"
              width={100}
              height={100}
              className="w-full h-auto rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
    </div>
  );
}

export default Hero;