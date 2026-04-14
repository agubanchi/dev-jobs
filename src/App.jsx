import Footer from "./components/Footer"
import Header from "./components/Header"
import Jobcard from "./components/Jobcard"
import Pagination from "./components/Pagination"
import SearchFormSection from "./components/SearchFormSection"

function App() {


  return (
    <>
<Header/>

  <main>
<SearchFormSection/>
    <div className="jobs-listings">
    
<Jobcard/>
      
    </div>
  </main>

<Pagination/>
<Footer/>
    </>
  )
}

export default App
