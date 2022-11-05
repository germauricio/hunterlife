import Image from "next/image";
import Link from "next/link";
export const ProductCard = ({ title, image__original}: any) => {
  return (
    <Link 
      href={`/products/${title}`} 
      className="backdrop-opacity-10 backdrop-invert bg-neutral-100/30 shadow rounded-md w-44 h-60 m-4 flex flex-col justify-around"
    >
      <div className="flex justify-center">
        <Image src={image__original} alt={title} width={150} height={150} />
      </div>
      <p className="flex justify-center font-FuturaMed text-neutral-900">{title}</p>
    </Link>
  )
}