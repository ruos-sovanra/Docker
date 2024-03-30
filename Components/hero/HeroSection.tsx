import Image from "next/image";
import styles from "./style.module.css";
import runningShoes from "@/public/running-shoes-2048px-9718.jpg";
const {heroWrapper, heroImage,heroContent} = styles;

const HeroSection = () => {
    return (
        <section className={heroWrapper}>
            <Image src={runningShoes} alt="" priority fill className={heroImage}/>
            <div className={heroContent}>
                <h1>Hero Image</h1>
                <p>Next.js 13 hero image example.</p>
            </div>
        </section>
    )
}

export default HeroSection;