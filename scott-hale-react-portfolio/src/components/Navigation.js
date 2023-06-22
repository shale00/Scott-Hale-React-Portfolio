import React, { useState } from 'react';


function Navigation( {currentPage, handlePageChange } ) {
  
  
  const [ page, setPage] = useState(["About", "Portfolio", "Resume", "Contact"]);

  return (
    <div>
        <div>
          {page.map((tab, i) => (

          <div 
            key={i} 
            color="gradient" 
            size="sm" 
            href={"#" + tab}
            onClick={() => handlePageChange(tab)}
            isActive={currentPage === tab}
            >
              {tab}
          </div>
          ))
          }
      </div>
    </div>
  );
}

export default Navigation;