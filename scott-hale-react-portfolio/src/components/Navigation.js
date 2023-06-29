import { gsap } from "gsap";

function Navigation( {currentPage, handlePageChange } ) {
  
  
  const page = ["About", "Portfolio", "Resume", "Contact"];

  return (
    <div >
        <nav className='flex justify-end space-x-3'>
          {page.map((tab, i) => (

          <a
            id="navText"
            key={i} 
            className="font-bold py-1 text-slate-400 rounded-md hover:text-blue-400 hover:scale-125"
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