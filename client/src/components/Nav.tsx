


const Nav = () => {
    const [ loginCheck, setLoginCheck ] = useState(false);
  
    const checkLogin = () => {
      if(auth.loggedIn()) {
        setLoginCheck(true);
      }
    };
  
    useEffect(() => {
      console.log(loginCheck);
      checkLogin();
    }, [loginCheck])
  
    return (
      <div className='nav'>
        <div className='nav-title'>
          <Link to='/'>Krazy Kanban Board</Link>
        </div>
        <ul>
        {
          !loginCheck ? (
            <li className='nav-item'>
              <button type='button'>
                <Link to='/login'>Login</Link>
              </button>
            </li>
          ) : (
            <li className='nav-item'>
              <button type='button' onClick={() => {
                auth.logout();
              }}>Logout</button>
            </li>
          )
        }
        </ul>
      </div>
    )
  }
  
  export default Nav;