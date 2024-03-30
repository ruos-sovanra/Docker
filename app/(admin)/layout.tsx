'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import SideBarComponent from "@/Components/sidebar/SideBarComponent";

const inter = Inter({ subsets: ["latin"] });
import {Hamburger} from "@/Components/icons/FontAwsome";
import { useState } from "react";

export default function AdminLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
    return (
        <html lang="en">
        <body className="flex none-scroll-bar">
        <Hamburger classname="h-8 w-8 fixed m-4 bottom-0 cursor-pointer lg:hidden z-50"  onClick={()=>setIsSidebarOpen(!isSidebarOpen)}/>
        <aside className={`sticky left-0 z-10 h-screen ${isSidebarOpen && "hidden"} lg:block`} >
            <SideBarComponent />
        </aside>
        <main className="flex-1">
            <section>
                {children}
            </section>
        </main>
        </body>
        </html>
    );
}
