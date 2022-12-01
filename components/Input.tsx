import React from 'react'
import { useState } from 'react'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

export default function Input() {
    const [charecterName,setCharecterName] = useState("");
    console.log(charecterName)
  return (
    <div className='w-3/4 flex justify-center max-md:w-full text-center'>  
        <div className='w-3/4 max-sm:w-5/6'>
        <label htmlFor="price" className="block text-sm font-medium text-wotlk-light-blue ">
           Search by charecter name / server / region
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">  
            </div>
            <input
            type="text"
            name="price"
            id="price"
            className="block w-full h-10 rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="SnackyPacky"
            onChange={(e) => setCharecterName(e.target.value) }
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
                Currency
            </label>
            <select
                id="currency"
                name="currency"
                className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-wotlk-light-blue focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
                <option>Mankrik</option>
                <option>EU</option>
            </select>
            <select
                id="currency"
                name="currency"
                className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-wotlk-light-blue focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
                <option>US</option>
                <option>EU</option>
            </select>
            </div>
        
        </div>

    </div>
  </div>
  )
}
