import { Link } from 'react-router-dom';
import Auth from "../../utils/auth"
import Logo from '../../assets/Logo.png';
import Cart from '../Cart';

export default function Header() {
  function showNav() {
      return (
        <header>
        <nav class='navbar is-dark is-fixed-top' role="navigation" aria-label="main navigation">
          <div class='navbar-brand'>
            <Link to='/' class='navbar-item'>
              <img className= "Logo" src={Logo} alt='MoMart' />
            </Link>
            <a href='/'
              role='button'
              class='navbar-burger'
              aria-label='menu'
              aria-expanded='false'>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </a>
          </div>


          {Auth.loggedIn() ? (
        <>
          <div class="navbar-menu"> 
            <div class="navbar-start">
              <Link to='/catalog' class='navbar-item is-hoverable pt-1'>
              <p>Catalog </p><span class='material-icons'>sell</span>
              </Link>
            </div>
            <div class='navbar-end'>
              <p class='pt-3 navbar-item'>Hello, {Auth.getUserName()}</p>
              <div class="navbar-item">
                <Link to='/' onClick={() => Auth.logout()} id='logout' class='navbar-item is-hoverable pt-1'>
                <span class='material-icons icon has-text-danger'>logout</span></Link> 
              </div>
            </div>
          </div>
          </> ) : (

            
         <div className= "navbar-menu ">
            <div class='navbar-end'>
              <Link to='/catalog' class='navbar-item is-hoverable pt-1'>
              <span class='material-icons'>sell</span>
              </Link>
              <Link to='/login' class='navbar-item is-hoverable pt-1'>
              <span class='material-icons'>account_circle</span>
              </Link>
            </div>
          

   {/* <li className="mx-1">
          <Link to="/signup">
              Signup
            </Link>
          </li> */}

         </div>
          )}
      </nav>
    </header>
    )
  }


  return (
      <nav>
        {showNav()}
      </nav>
  );
}  
