import Image from 'next/image';
import { LeicaIcon } from '../../icons/Leica';

export const Footer = () => {
  return(
    <div className="flex justify-center items-center bg-black flex flex-col">
      <div className="bg-cyan-500 uppercase font-FuturaMed text-white w-full flex justify-center py-2">Representante oficial Argentina 🇦🇷</div>
      <div className="flex flex-row justify-center items-center">
        <LeicaIcon onClick={()=>{}} className="mt-10" />
        <span className="text-neutral-100 mt-10 font-FuturaMed text-4xl relative right-14">Leica Camera AG</span>
      </div>
      <Image src="/footer.png" width={400} height={400} alt='footer' className="my-10"/>
    </div>
    )
}