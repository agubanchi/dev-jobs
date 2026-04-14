import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Jobcard from "./components/Jobcard"
import JobListings from "./components/JobListings"
import Pagination from "./components/Pagination"
import SearchFormSection from "./components/SearchFormSection"

function App() {

  const [currentPage, setCurrentPage] =useState(1)
  const totalPages = 5

  const handlePageChange = (page)=>{
    console.log('cambiando pagina...', page);
    setCurrentPage(page)
  }

  return (
    <>
<Header/>

  <main>
<SearchFormSection/>
<JobListings/>
  </main>

<Pagination
currentPage={currentPage}
totalPages={totalPages}
onpageChange={handlePageChange}
/>
<Footer/>
    </>
  )
}

export default App
