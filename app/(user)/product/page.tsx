import ProductPage from "@/Components/about/ProductPage";


const Test = () =>{
    return(
        <>
            <section className="container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <ProductPage />
            </section>
        </>
    )
}

export default Test;