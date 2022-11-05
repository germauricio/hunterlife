import Link from "next/link"
import Image from "next/image"
import { BurgerIcon } from "../../icons/Burger"
import { CloseIcon } from "../../icons/Close";
import { useState } from "react";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickBurger = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="flex flex-row w-full justify-between bg-neutral-900 drop-shadow-xl">
        <Link href={'/'}>
          <Image alt="logo" width={75} height={75} src="/rojo.png" className="mr-10 sm:hidden flex" />
          <Image alt="largeLogo" width={150} height={150} src="/largeLogo.png" className="m-5 mr-10 sm:flex hidden" />
        </Link>
        <div className="flex-row items-center justify-start grow hidden sm:flex gap-10">
          <div className="flex flex-row gap-10 group h-24 items-center">
            <p className="text-white font-FuturaLight text-xl">Productos</p>
            <Link href="/products/leica" className="group-hover:flex hidden text-neutral-300 font-FuturaLight text-xl">Leica</Link>
            <span className="group-hover:flex hidden text-neutral-300 font-FuturaLight text-xl">|</span>
            <Link href="/products/pulsar" className="group-hover:flex hidden text-neutral-300 font-FuturaLight text-xl mr-4">Pulsar</Link>
          </div>
          <Link href="/about" className="text-white font-FuturaLight text-xl">Información</Link>
        </div>
        {
          isOpen ? (
            <CloseIcon onClick={handleClickBurger} className="h-6 w-6 m-4 text-white sm:hidden block" />
            ) : (
            <BurgerIcon onClick={handleClickBurger} className="h-6 w-6 m-4 text-white sm:hidden block" />
          )
        }
      </div>
      {isOpen && (
        <div className="h-full bg-neutral-900 flex flex-col items-center sm:hidden">
          <Link href="/about" className="text-white text-xl font-FuturaLight mb-10">Información</Link>
          <div className="flex flex-col gap-10 group h-52 items-center">
            <p className="text-white font-FuturaLight text-xl">Productos</p>
            <Link href="/products/leica" className="group-hover:flex hidden relative text-neutral-300 font-FuturaLight text-xl">
              Leica
            </Link>
            <Link href="/products/pulsar" className="group-hover:flex hidden relative text-neutral-300 font-FuturaLight text-xl">
              Pulsar
            </Link>
          </div>
        </div>
      )}
    </>
  )
}