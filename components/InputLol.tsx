import React from 'react'
import { useState } from 'react'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

export default function InputLol() {
    const [charecterName,setCharecterName] = useState("");
    console.log(charecterName)
  return (
    <div className='w-3/4 flex justify-center max-md:w-full text-center'>  
        <div className='w-3/4 max-sm:w-full max-sm:m-3'>
                <label htmlFor="price" className="block text-sm font-medium text-wotlk-light-blue">
           Search by Summoner name
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">  
            </div>
            <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10"
            placeholder="Floppyman"
            onChange={(e) => setCharecterName(e.target.value) }
            />
        </div>

    </div>
  </div>
  )
}
