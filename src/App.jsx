import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import JobListings from "./components/JobListings"
import Pagination from "./components/Pagination"
import SearchFormSection from "./components/SearchFormSection"
import jobsData from './data.json'

const RESULTS_PER_PAGE = 5

function App() {

  const [currentPage, setCurrentPage] =useState(1)
  const totalPages = Math.ceil(jobsData.length / RESULTS_PER_PAGE)
const pageResults = jobsData.slice(
  currentPage -1 * RESULTS_PER_PAGE, // Página 1 -> 0, Página 2 -> 5, Página 3 -> 10
  currentPage * RESULTS_PER_PAGE // Página 1 -> 5 Página 2 -> 10, Página 3 -> 15
)
  const handlePageChange = (page)=>{
    setCurrentPage(page)
  }

  return (
    <>
<Header/>

  <main>
<SearchFormSection/>
<JobListings jobs={pageResults}/>
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
