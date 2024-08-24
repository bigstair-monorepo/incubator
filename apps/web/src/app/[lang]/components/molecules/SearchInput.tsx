import React from 'react'

const SearchInput = () => {
  return (
    <div>
      <span className="sr-only">Search</span>
      <span
        className="
          absolute md:top-[180px] md:left-[190px]
          sm:top-[250px] left-[30px]
          flex items-center  pl-2
          tablet:top-[188px] tablet:left-[168px] 
          phone-xs:top-[235px] phone-xs:left-[2px]
          phone-sm:top-[235px] phone-sm:left-[30px]
          phone-md:top-[235px] phone-md:left-[65px]
           desktop:top-[187px] desktop:left-[455px]
          laptop:top-[187px] laptop:left-[320px]">
        
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-4 w-4">
         <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
        </svg>

      </span>
      
      <span className="h-[51px]  rounded-tl-md rounded-bl-md">

      <input
        type="text"
        title='search electric panels'
        id="Search"
        placeholder="&quot;Try electric panels&quot;..."
        className="
        h-[51px]  rounded-tl-md rounded-bl-md
          lg:w-1/3 sm:w-1/2 tablet:w-1/2  border-gray-200
          py-2.5 pe-10 shadow-sm sm:text-sm pl-10
        placeholder:text-slate-600 laptop:w-1/3"/>

        <button className='bg-black text-white h-[51px] border-left-none rounded-tr-md rounded-br-md phone-xs:px-1'> Search </button>
      </span>
  </div>
  )
}

export default SearchInput