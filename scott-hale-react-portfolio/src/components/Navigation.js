function Navigation( {currentPage, handlePageChange } ) {
  
  const pages = ["About", "Portfolio", "Resume", "Contact"];

  return (
    <div >
        <nav className='flex justify-end space-x-3'>
          {pages.map((page, i) => (

          <a
            id="navText"
            key={i} 
            className={`font-bold py-1 text-slate-400 rounded-md hover:text-blue-400 hover:scale-125 ${
              currentPage === page ? "text-blue-500 scale-110" : ""
            }`}
            href={"#" + page}
            onClick={() => handlePageChange(page)}
            >
              {page}
          </a>
          ))
          }
      </nav>
    </div>
  );
}

export default Navigation;