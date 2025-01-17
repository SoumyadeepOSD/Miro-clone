"use client";

import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Star } from "lucide-react";
import { useSearchParams } from "next/navigation";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});

export const OrgSidebar = () => {
    const searchParams = useSearchParams();
    const favorites = searchParams.get("favorites");
    return(
        <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
            <Link href="/">
                <div className="flex items-center gap-x-2">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={60}
                        height={60}
                    />
                    <span className={cn(
                        "font-semibold text-2xl",
                        font.className
                    )}>
                        Board
                    </span>
                </div>
            </Link>
            
            <div className="space-y-1 w-full">
              <Button
                variant={favorites?"ghost":"secondary"}
                asChild
                size="lg"
                className="font-normal justify-start px-2"
              >
                <Link href="/">
                    <LayoutDashboard className="h-4 w-4 mr-2"/>
                    Team Board
                </Link>
              </Button>  
              <Button
                variant={favorites?"secondary":"ghost"}
                asChild
                size="lg"
                className="font-normal justify-start px-2"
              >
                <Link href={{
                    pathname: "/",
                    query: {favorites: true}
                }}>
                    <Star className="h-4 w-4 mr-2"/>
                    Favourite Board
                </Link>
              </Button>  
            </div>
        </div>
    );
}