import React, { useState } from 'react';


function Navigation( {currentPage, handlePageChange } ) {
  
  
  const [ page, setPage] = useState(["About", "Portfolio", "Resume", "Contact"]);

  return (
    <div>
        <nav className='flex justify-end space-x-4'>
          {page.map((tab, i) => (

          <a 
            key={i} 
            className="font-bold px-1 py-1 text-slate-400 rounded-md hover:bg-blue-900 hover:text-blue-400"
            size="sm" 
            href={"#" + tab}
            onClick={() => handlePageChange(tab)}
            // isActive={currentPage === tab}
            >
              {tab}
          </a>
          ))
          }
      </nav>
    </div>
  );
}

export default Navigation;