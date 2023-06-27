
function Navigation( {currentPage, handlePageChange } ) {
  
  
  const page = ["About", "Portfolio", "Resume", "Contact"];

  return (
    <div>
        <nav className='flex justify-end space-x-3'>
          {page.map((tab, i) => (

          <a 
            key={i} 
            className="font-bold py-1 text-slate-400 rounded-md hover:bg-blue-900 hover:text-blue-400 hover:scale-125"
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