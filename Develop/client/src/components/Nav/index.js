import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import Logo from '../../assets/Logo.png';
import Cart from '../Cart';

export default function Header() {
  function showNav() {
      return (
        <header>
        <nav className='navbar is-light is-fixed-top'>
          <div class='navbar-brand'>
            <Link to='/' class='navbar-item'>
              <img src={Logo} alt='Thingamabobs' />
            </Link>

            <a
              href='/'
              role='button'
              class='navbar-burger'
              aria-label='menu'
              aria-expanded='false'
            >
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </a>
          </div>
          {Auth.loggedIn() ? (
            <>
              <Link to='/catalog' class='navbar-item is-hoverable pt-1'>
                <span class='material-icons'>sell</span>
              </Link>
              <div class='navbar-end'>
                <p class='navbar-item pt-1'>Hello, {Auth.getUserName()}</p>
              </div>

              <div class='navbar-end'>
                <div class='navbar-item pt-1'>
                  <span class='material-icons'>shopping_bag</span>
                </div>
              </div>
              <Link
                to='/'
                onClick={() => Auth.logout()}
                id='logout'
                class='navbar-item is-hoverable pt-1'
              >
                <span class='material-icons icon has-text-danger'>logout</span>
              </Link>
            </>
          ) : (
            <ul className='flex-row myNav'>
              <Link to='/catalog' class='navbar-item is-hoverable pt-1'>
                <span class='material-icons'>sell</span>
              </Link>
              <li className='mx-1'>
                <Link to='/signup'>Signup</Link>
              </li>
              <Link to='/login' class='navbar-item is-hoverable pt-1'>
                <span class='material-icons'>account_circle</span>
              </Link>
            </ul>
          )}
        </nav>
      </header>
    );
  }
  return <nav>{showNav()}</nav>;
}
