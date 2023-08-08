function Navigation( {currentPage, handlePageChange } ) {
  
  const pages = ["Home", "Projects", "Resume", "Contact"];

  return (
    <div >
        <nav className='flex justify-center space-x-3 uppercase p-8'>
          {pages.map((page, i) => (

          <a
            id="navText"
            key={i} 
            className={`font-bold py-1 text-slate-400 rounded-md hover:text-blue-400 hover:scale-125 ${
              currentPage === page ? "text-white" : ""
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