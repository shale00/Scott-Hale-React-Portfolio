function Navigation( {currentPage, handlePageChange } ) {
  
  const pages = ["Home", "Projects", "Resume", "Contact"];

  return (
    <div className="p-2">
        <nav className='flex justify-center space-x-3 md:space-x-5 uppercase rounded-2xl p-8 lg:max-w-prose mx-auto c-bord bg-gray-700'>
          {pages.map((page, i) => (
          <a
            id="navText"
            key={i} 
            className={`font-bold py-1 rounded-md hover:scale-[120%] transition-all ease-in-out hover:text-slate-400 ${
              currentPage === page ? page : ""
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