import Image from "next/image";
import { useRouter } from "next/router";
import { Menu } from "../../../src/components/Menu/Menu";
import { accoladeLRF, mergerLRF, helion2XpPro, axion2, axion2LRF, axionXM30F } from "../../../src/mocks/products";

const ProductView = () => {
  const products = [mergerLRF, accoladeLRF, helion2XpPro, axion2, axion2LRF, axionXM30F];
  
  const router = useRouter();
  const product = products.find( product => product.title === router.query.id);

  return (
    <div className="h-[100vh] bg-cover bg-[url('/productBackground.jpg')]">
      <Menu/>
      <div className="flex flex-col mt-20 items-center justify-center">
        <Image src={product?.image__original as string} width={400} height={400} alt={'main'} />
        <h1 className="font-FuturaMed text-white uppercase text-8xl relative bottom-2">{product?.title}</h1>
      </div>
    </div>
  )
};

export default ProductView;