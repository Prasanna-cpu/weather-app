

import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import cn from "../utils/cn"

type Props={
    className?:string;
    value:string;
    onChange:React.FormEventHandler<HTMLInputElement>|undefined;
    onSubmit:React.FormEventHandler<HTMLFormElement>|undefined
}


function SearchBox(props:Props) {


  return (
    <div>
        {/* Search Box */}
        <form className={cn("flex relative items-center justify-center h-10",props.className)} >
            <input type="text" value={props.value} placeholder='Search location...' onSubmit={props.onSubmit} className='rounded-l-md px-4 py-2 w-[230px] border-gray-300 outline-none focus:border-gray-200 focus:outline-none' />
            <button className='px-4 py-[9px] bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-500 whitespace-nowrap h-full'     onChange={props.onChange}>
                <IoIosSearch/>
            </button>
            
        </form>
    </div>
  )
}

export default SearchBox