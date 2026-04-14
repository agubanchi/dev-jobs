import Jobcard from "./components/Jobcard"

function App() {


  return (
    <>
        <header>
    <h1><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-code">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 8l-4 4l4 4" />
        <path d="M17 8l4 4l-4 4" />
        <path d="M14 4l-4 16" />
      </svg>
      DevJobs</h1>
    <nav>
      <a href="">Inicio</a>
      <a href="empleos.html">Empleos</a>
    </nav>
    <div>
      <a href="">Publicar Empleo</a>
      <a href="">Iniciar Sesión</a>
    </div>
  </header>

  <main>
    <section className="jobs-searchs">
      <h1>Encuentra tu próximo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnológico.</p>

      <form role="search">
        <div className="search-bar">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
          <input type="text" placeholder="Buscar empleos por título, habilidad o empresa"/>
          <button type="submit">Buscar</button>
        </div>
      </form>
      <div className="search-filters">
        <select name="technology" id="filter-technology">
          <option value="">Tecnología</option>
          <option value="Javascript">Javascript</option>
          <option value="Java">Java</option>
          <option value="React">React</option>
          <option value="Phyton">Phyton</option>
        </select>
        <select name="location" id="filter-location">
          <option value="">Ubicación</option>
          <option value="remoto">Remoto</option>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="cdmx">Ciudad de Mexico</option>
          <option value="guadalajara">Guadalajara</option>
          <option value="España">España</option>
        </select>
        <select name="experience" id="filter-experience">
          <option value="">Experiencia</option>
          <option value="Junior">junior</option>
          <option value="semisr">Semi sr</option>
          <option value="senior">Senior</option>
          <option value="Leader">Leader</option>
        </select>
      </div>

    </section>
    <div className="jobs-listings">
    
<Jobcard/>
      
    </div>
  </main>
  <nav className="pagination">
    <a href="#">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 6l-6 6l6 6" />
      </svg>
    </a>
    <a className="is-active" href="#">1</a>
    <a href="#">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <a href="#">5</a>
    <a href="#">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 6l6 6l-6 6" />
      </svg>
    </a>
  </nav>
  <footer>
    <small> &copy; 2025 DevJobs. Todos los derechos reservados.</small>
  </footer>

    </>
  )
}

export default App
