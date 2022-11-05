import Image from 'next/image';

export const Footer = () => {
  return(
    <div className="flex justify-center items-center bg-black flex flex-col">
      <div className="bg-cyan-500 uppercase font-FuturaMed text-white w-full flex justify-center py-2">Representante oficial Argentina 🇦🇷</div>
      <Image src="/footer.png" width={400} height={400} alt='footer' className="my-10"/>
    </div>
    )
}