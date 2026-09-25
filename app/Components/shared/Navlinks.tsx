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
                        <li key={link.href} className='ml-4'>
                 <Link href={link.href} className={`${className}  rounded-full flex gap-4  ${isActive ? "!bg-[#1A2312] !text-[#C2F800]" : "!text-white hover:!bg-[#1A2312] hover:!text-[#C2F800]" }`}>
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