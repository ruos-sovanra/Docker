import {FaMapMarker} from "react-icons/fa";
import {BiGlobe, BiLogoFacebook, BiLogoTelegram, BiLogoYoutube, BiPhone} from "react-icons/bi";
import {MdEmail} from "react-icons/md";

export const metadata = {
    title: 'About CSTAD Ecommerce',
    openGraph: {
        title: 'Cstad Ecommerce is the best Ecommerce platform in the world',
        description: 'An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location',
        images: "https://i.ytimg.com/vi/ZeFFV7i2LZY/hq720.jpg?sqp=-oaymwExCK4FEIIDSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYfyA2KCMwDw==&rs=AOn4CLD8O17NTr_qMEuYinP1P9PfLWcTIg"
    },
}
const Page = () => {
    return <section><h1 className="uppercase text-2xl font-bold text-center text-primary tracking-[0.25rem]">IF YOU HAVE
        ANY
        QUESTIONS, PLEASE FEEL FREE TO CONTACT US.</h1>
        <div className="bg-white p-6 grid grid-cols-1 gap-2">
            <p className="flex items-center gap-2"><FaMapMarker/>No. 24, St. 562, Sangkat Boeung kak I, Khan
                Toul
                Kork, Phnom Penh, Cambodia</p>
            <p className="flex items-center gap-2"><BiPhone/>(+855) 95 990 910 | (+855) 93 990 910</p>
            <p className="flex items-center gap-2"><BiLogoTelegram/>Telegram Channel</p>
            <p className="flex items-center gap-2"><BiLogoFacebook/>Facebook</p>
            <p className="flex items-center gap-2"><MdEmail/>info.istad@gmail.com</p>
            <p className="flex items-center gap-2"><BiGlobe/>www.istad.co</p>
            <p className="flex items-center gap-2"><BiLogoYoutube/>YouTube</p>
        </div>
    </section>
}

export default Page;