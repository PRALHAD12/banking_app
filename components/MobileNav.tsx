"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ITEMS, sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
            />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
         
          <Link
          
          href="/"
            className="gap-1 px-4
cursor pointer 
items-center gap-2 flex"
          >
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="idk logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              Idk
            </h1>
          </Link>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((items) => {
                  const isActive =
                    pathname === items.route ||
                    pathname.startsWith(`${items.route}/`);

                  return (
                    <SheetClose asChild key={items.route}>

                    <Link
                      href={items.route}
                      key={items.label}
                      className={cn("mobilenav-sheet_close w-full ", {
                        "bg-bank-gradient": isActive,
                      })}
                      >
                      <div
                        className="relative
                        size-6"
                        >
                        <Image
                          src={items.imgURL}
                          alt="item.label"
                       width={20}
                       height={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                          />
                      </div>
                      <p
                        className={cn("text-16 font-semibold text-black-2", {
                          "text-white": isActive,
                        })}
                        >
                        {" "}
                        {items.label}{" "}
                      </p>
                    </Link>
                        </SheetClose>
                  );
                })}

                USER
              </nav>
            </SheetClose>

           <Footer user={user} type="mobile" />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
