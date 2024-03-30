
'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';
import {useState} from "react";
import {MenuList} from "@/Components/navbar/Menu";
import {usePathname} from "next/navigation";
type NavbarProps = {
    name: string;
    path: string;
    active: boolean;
}
export default function NavbarComponent() {
    const pathName = usePathname();
    const [menu, setMenu] = useState<NavbarProps[]>(MenuList);
    const handleActive = (path: string) => {
        setMenu(menu.map((item) => {
            if (item.path === path) {
                return {...item, active: true}
            } else {
                return {...item, active: false}
            }
        }))
    }
    return (
        <Navbar fluid rounded>
            <Navbar.Brand as={Link} href="https://flowbite-react.com">
                <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                {menu.map((item, index)=>(
                    <Navbar.Link onClick={()=>handleActive(pathName)} key={index} href={item.path} as={Link} active={item.active}>
                        {item.name}
                    </Navbar.Link>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}
