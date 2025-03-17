import Image from "next/image";
import Card from "@/components/Card"

interface ItemProps {
    item: {
      _id: number;
      title: string;
      description: string;
      url: string;
    };
}

const Item = ({item}) => {
    return (
        <Card >
            <Image src={item.url} alt={item.title} width='0' height='0' sizes='100vw' className="w-full h-auto rounded-md" />
            <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
        </Card>
    );
}
export default Item;