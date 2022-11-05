import { Menu } from "../../src/components/Menu/Menu";
import Image from "next/image";

const About = () => {
  return (
    <div className="h-[100vh] w-full bg-[url('/mainBackground.jpg')] bg-cover">
      <Menu/>
      <div className="m-10">
        <div className="flex flex-col bg-opacity-50 bg-neutral-100 w-full p-10 rounded-md">
          <h1 className="font-Minerva text-6xl">Quiénes somos</h1>
          <p className="font-FuturaLight mt-10">
            Somos una empresa dedicada al suministro de artículos deportivos.
            Hunter Life se dedica a cumplir y superar las expectativas de nuestros clientes <span className="font-Minerva">ofreciendo  calidad y atención integral</span>.
          </p>
          <div className="mt-10">
            <p className="font-FuturaMed">Amamos lo que hacemos</p>
            <p className="font-Minerva">Nos une la pasión por la naturaleza.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;