import {Card} from "flowbite-react";

export type DataType = {
    title: string;
    price: number;
    description: string;
    image: string;

}
// @ts-ignore
const PageDetailComponent = ({title, image, description}: DataType) => {
    return (
        <>
            <Card className="max-w-sm p-4" imgSrc={image} horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
            </Card>

        </>
    )
}

export default PageDetailComponent;