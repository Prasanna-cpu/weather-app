import React from 'react'
import { MdWbSunny,MdMyLocation,MdOutlineLocationOn } from "react-icons/md";
import SearchBox from './SearchBox';

type Props = {}

export default function Navbar({}: Props) {
  
  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-slate-300">
        
        <div className="flex  justify-between px-7 py-5 h=[60px] w-full mx-auto items-center px">
            <div className='flex items-center justify-center gap-2'>
                <h2 className='text-gray-500 text-2xl'>Weather</h2>
                <MdWbSunny className='text-4xl mt-1 text-yellow-200 hover:text-yellow-400'/>
            </div>

            <section className='flex items-center gap-2'>
                <MdMyLocation className='text-2xl text-gray-400 hover:opacity-70 cursor-pointer'/>
                <MdOutlineLocationOn className='text-2xl text-gray-400 hover:opacity-70 cursor-pointer'/>
                <p>
                  Chennai
                </p>
                <SearchBox/>
            </section>
                
        </div>
        
    </nav>
  )
}
