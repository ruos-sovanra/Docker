
'use client';

import { Sidebar } from 'flowbite-react';
import Link from 'next/link';
import {usePathname} from "next/navigation";
import {MenuList} from "@/Components/sidebar/Menu";
import {useState} from "react";

type SideBarProps = {
    name: string;
    path: string;
    active: boolean;
}
export default function SideBarComponent() {
    const pathname = usePathname();
    const [menu, setMenu] = useState<SideBarProps[]>(MenuList);
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
        <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    {menu.map((item,index)=>(
                        <Sidebar.Item key={index} as={Link} onClick={()=>handleActive(pathname)} href={item.path} active={item.active}>
                            {item.name}
                        </Sidebar.Item>
                    ))}

                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}
