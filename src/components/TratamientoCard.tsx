import Image from "next/image";

type TratamientoCardProps = {
    title: string;
    image: string;
}

export default function TratamientoCard({ title, image }: TratamientoCardProps) {
    return (
        <div className='bg-white rounded-xl w-72 container my-5 overflow-hidden'>
            <div className='image-container'>
                <Image src={image} alt={`Imagen ${image}`} width={200} height={200} className='image w-full'></Image>
            </div>
            <h3 className='text-2xl my-5 font-bold text-center'>{title}</h3>
            <p className="block text-xl pb-5 text-gray-400 font-semibold hover:underline hover:text-gray-500 cursor-pointer">Saber más</p>
        </div>
    )
}
