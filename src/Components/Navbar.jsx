import { Icon } from '@iconify/react';
import React from 'react';

function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#fff] p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {/* <span className="font-semibold text-xl tracking-tight">Logo</span> */}
        <Icon icon="icon-park-outline:search"  color='black' width={30}/>
      </div>
      {/* <div className="flex items-center">
        <div className="flex-shrink-0 text-white mr-4">
          <img className="h-8 w-8  rounded-full" src="https://media-mct1-1.cdn.whatsapp.net/v/t61.24694-24/325956470_684102867083489_5356536878164923581_n.jpg?ccb=11-4&oh=01_AdSKc5ACfX1IzAVt_hS1SuPlJUe6JbA4SW6GbN1FPrev2A&oe=66003B4C&_nc_sid=e6ed6c&_nc_cat=101" alt="User Profile" />
        </div>
        <span className="text-black">Admin name </span>
      </div> */}
    </nav>
  );
}

export default Navbar;
