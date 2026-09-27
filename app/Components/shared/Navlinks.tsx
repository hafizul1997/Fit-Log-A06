'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
{/* */}
{/*links for menu take as object an array */}
const links=[ 
{name:'WorksOut',
  href:'/Workouts',
},
{
  name:'My Plan',
  href:'/my-plan',
}
];

{/*Typescript for className to give extra style for menu bar as tablet,mobile,leptop */}
interface NavLinksProps{
    className ?: string;
}
{/* Take a separate funciton for only Navigation Bar and sent props in function navbar link class name*/}
const Navlinks = ({className = ''}:NavLinksProps ) => {
    const pathName=usePathname();
    return (
        <>
         {/*map links as per pathname for active links  and check href as === active*/}
        {
           
            links.map((link)=>{
                    const isActive=pathName === link.href;
                    return(
                        <li key={link.href} className='ml-1 sm:ml-2 lg:ml-4'>
                 <Link href={link.href} className={`${className}
    flex items-center gap-1
    rounded-full
    bg-transparent
    px-1.5 py-1
    text-[10px]

    sm:gap-2
    sm:px-3 sm:py-2
    sm:text-sm

    lg:gap-4
    lg:px-4 lg:py-2.5
    lg:text-base

    ${
      isActive
        ? "!bg-[#1A2312] !text-[#C2F800]"
        : "!bg-transparent !text-white hover:!bg-[#1A2312] hover:!text-[#C2F800]"
    }`}>
                        {link.name}
                </Link>
                        </li>
                    )
            })
        }
        </>
    );
};

export default Navlinks;