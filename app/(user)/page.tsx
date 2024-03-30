'use client'
import Image from "next/image";
import {useRouter} from "next/navigation";
import HeroSection from "@/Components/hero/HeroSection";

export default function Home() {
    const router = useRouter();
    return (
        <main className="flex">
            <HeroSection />
        </main>
    );
}
