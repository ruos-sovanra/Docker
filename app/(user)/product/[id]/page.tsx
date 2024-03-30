import PageDetailComponent from "@/Components/detailPage/PageDetailComponent";
import {Metadata, ResolvingMetadata} from "next";


type PropsParams = {
    params: {
        id: number;
    };
    searchParams: any;
};

const ENDPOINT = "https://fakestoreapi.com/products/";

 const getData = async (id: number) => {
    const res = await fetch(`${ENDPOINT}${id}`,{next: {revalidate: 3600}});
    const data = await res.json();
    console.log(data);
    return data;
};

export async function generateMetadata(
    { params, searchParams }: PropsParams,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.id;

    // fetch data
    const product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json());

    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || [];

    return {
        title: product.title,
        description: product.description,
        openGraph: {
            images: product.image,
        },
    };
}

const  AboutPageDetail = async (props:PropsParams) =>{

    let data = await getData(props.params.id);
    console.log(data)
    return (
       <>
       <section className="h-screen grid place-content-center">
            <PageDetailComponent title={data?.title || "Default Title"} description={data?.description || "Default Description"} image={data?.image || "No Image "}   price={data?.price || "00"}  />
       </section>
       </>
    )
}

export default AboutPageDetail;