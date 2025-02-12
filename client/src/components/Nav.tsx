



const Nav = () => {
    
    return (
      <div>
        <nav>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to='/assessmentForm'>Crashout Form</Link>
                  </li>
                
                  <li>
                      <Link to='/SavedCandidates'>Results</Link>
                  </li>
              </ul>
          </nav>
      </div>
    )
  };
  
  export default Nav;