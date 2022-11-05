import { Footer } from "../../../src/components/Footer/Footer";
import { Menu } from "../../../src/components/Menu/Menu";
import { ProductCard } from "../../../src/components/ProductCard/ProductCard";
import { mergerLRF, accoladeLRF, axion2, axion2LRF, axionXM30F, helion2XpPro } from "../../../src/mocks/products";

const PulsarPage = () => {
  const products = [mergerLRF, accoladeLRF, axion2, axion2LRF, axionXM30F, helion2XpPro];

  return (
    <div className="h-full bg-cover bg-[url('/productBackground.jpg')] flex flex-col justify-between">
      <div>
        <Menu/>
        <div className="flex flex-wrap h-full min-h-[80vh] justify-center">
          {products.map( product => {
            return (
              <ProductCard {...product}/>
              )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PulsarPage;