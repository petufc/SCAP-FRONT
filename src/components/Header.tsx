"use client";
import Image from 'next/image';
import BackButton from "@/assets/arrow-left.png";
import Link from "next/link";
import Logo from '@/assets/SCAP.png';

function Header() {
  return (
    <header className="bg-neutral-900 pb-4 pt-5 flex items-left">
            <Link href="index.js" 
            className="pl-6 w-auto h-auto">
                <Image 
                src={BackButton} 
                alt="Voltar"
                className="back-button" />
            </Link>
            <div className='pl-3 w-auto h-auto'>
                <Image 
                src={Logo} 
                alt="Logo"
                className="logo" 
                />
            </div>
            
      </header>
  );
}

export default Header;
