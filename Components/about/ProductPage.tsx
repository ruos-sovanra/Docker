'use client'
import {useEffect, useState} from "react";
import Component from "@/Components/about/Component";
import {useRouter} from "next/navigation";

export type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
}
const ProductPage = () => {
    const router = useRouter();
    const [datas, setDatas] = useState<Product[]>([]) // Initialize with empty array
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setDatas(data))
    },[])
    return (
        <>

                {datas.map((data) => (
                     <Component
                         onClick={() => router.push(`/product/${data.id}`)}
                          key={data.id}
                          image={data.image}
                          title={data.title}
                          price={data.price}
                     />
                ))}
        </>
    )
}
export default ProductPage;6