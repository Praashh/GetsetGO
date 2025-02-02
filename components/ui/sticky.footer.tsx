
import Link from "next/link";

const StickyFooter= () => {
  return (
    <footer className="w-full bg-[#ebe8e84b] items-center justify-center h-full overflow-auto no-scrollbar">
      <div className="relative h-full w-full z-10 text-2xl md:text-7xl font-bold uppercase flex justify-center items-center">
      </div>

      <div className="sticky z-0 bottom-0 left-0 w-full h-80 flex justify-center items-center">
        <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 ">
          <div className="flex flex-row space-x-12 sm:pace-x-16  md:space-x-24 text-sm sm:text-lg md:text-xl">
            <ul>
               {
                footerLinks.map((link, index) => (
                  <li key={index} className="hover:underline cursor-pointer mt-2">
                  <Link key={index} className="hover:underline cursor-pointer" href={link.url}>
                    {link.name}
                  </Link>
                </li>
                ))
               }
            </ul>
            <ul>
              {
                socials.map((social, index) => (
                  <li key={index} className="hover:underline cursor-pointer mt-2">
                  <Link key={index} className="hover:underline cursor-pointer" href={social.url}>
                    {social.name}
                  </Link>
                </li>
                ))
              }
            </ul>
          </div>
          <h2 className="absolute bottom-0 left-0  translate-y-1/3 sm:text-[192px]  text-[80px] text-[#000000] font-calendas">
            Vora AI
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default StickyFooter;



export const socials = [
    {
       name: "LinkedIn",
       url: "https://www.linkedin.com/in/prashant-varma-666735230/"
    },
    {
        name: "Twitter",
        url: "https://twitter.com/10Xpraash"
    },
]

export const footerLinks = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Product",
        url: "/product"
    },
    {
        name: "Pricing",
        url: "/pricing"
    },
    {
        name: "Contact US",
        url: "/contact"
    }
]