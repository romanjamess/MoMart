import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import Home from '../../pages/Home';
export default function Header() {
  return (
    <header>
      <nav class='navbar is-light is-fixed-top'>
        <div class='navbar-brand'>
          <Link to={Home} class='navbar-item'>
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

        <Link to='/catalog' class='navbar-item is-hoverable pt-1'>
          <span class='material-icons'>sell</span>
        </Link>
        <div class='navbar-end'>
          <p class='pt-3'>Hello, </p>
          <Link to='/cart' class='navbar-item is-hoverable pt-1'>
            <span class='material-icons'>shopping_bag</span>
          </Link>
          <Link to='/' id='logout' class='navbar-item is-hoverable pt-1'>
            <span class='material-icons icon has-text-danger'>logout</span>
          </Link>
        </div>

        <div class='navbar-end'>
          <Link to='/cart' class='navbar-item pt-1'>
            <span class='material-icons'>shopping_bag</span>
          </Link>
          <Link to='/login' class='navbar-item is-hoverable pt-1'>
            <span class='material-icons'>account_circle</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
