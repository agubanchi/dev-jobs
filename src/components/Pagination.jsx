
export default function Pagination({currentPage=2, totalPages=10, onpageChange}) {
  //generar un array de paginas a mostrar
  const pages = Array.from({length:totalPages},(_,i) => i + 1 )

  const isFirstPage = currentPage === 1
  const isLastPage = totalPages === 10

  const styleLinkLeft = {
    opacity: currentPage === 1 ? 0.5 : 1,
    cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
  }

  const styleLinkRight = {
    opacity: currentPage === totalPages ? 0.5 : 1,
    cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
  }

const handlePrevClick = (event)=>{
  event.preventDefault()
  if(isFirstPage===false){
    onpageChange(currentPage -1)
  }
}


const handleNextClick = (event)=>{
  event.preventDefault()
  if(isLastPage===false){
    onpageChange(currentPage +1)
  }
}


const handleChangePage = (event)=>{
  event.preventDefault()
  const page = Number(event.target.dataset.page)
  if (page !== currentPage){
    onpageChange(page)
  }
}

    return (
    <nav className="pagination">
    <a href="#" style={styleLinkLeft} onClick={handlePrevClick}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 6l-6 6l6 6" />
      </svg>
    </a>
   {pages.map(page=>(
   <a
  data-page={page}
   href="#"
   className={currentPage=== page ? 'is-active' : ''} onClick={handleChangePage}>
    {page}
   </a>

)
   )}
      <a href="#" style={styleLinkRight} onClick={handleNextClick}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 6l6 6l-6 6" />
      </svg>
    </a>
  </nav>
  )
}
