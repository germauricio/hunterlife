import Image from 'next/image'
import { Footer } from '../src/components/Footer/Footer';
import { Menu } from '../src/components/Menu/Menu'

const Home = () => {
  return (
    <div className="h-[100vh] w-full bg-[url('/mainBackground.jpg')] bg-cover">
      <Menu/>
      <div className="flex w-full h-1/2 items-center justify-center">
        <Image src="/mainContent.png" height={300} width={300} alt="mainContent" />
      </div>
      <div className="mt-52">
        <Footer />
      </div>
    </div>
  )
}

export default Home;