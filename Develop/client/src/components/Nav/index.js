import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
export default function Header() {
  return (
    <header>
      <nav className='navbar is-light'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <img src={Logo} alt='Thingamabobs' />
          </Link>

          <a
            href='/'
            role='button'
            className='navbar-burger'
            aria-label='menu'
            aria-expanded='false'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <Link to='/catalog' className='navbar-item is-hoverable pt-1'>
          <span className='material-icons'>sell</span>
        </Link>
        <div className='navbar-end'>
          <p className='pt-3'>Hello, </p>
        </div>

        <div className='navbar-end'>
          <Link to='/cart' className='navbar-item pt-1'>
            <span className='material-icons'>shopping_bag</span>
          </Link>
          <Link to='/login' className='navbar-item is-hoverable pt-1'>
            <span className='material-icons'>account_circle</span>
          </Link>
          {/* Write an conditional statement that only displays logout button when user is logged in. */}
          <Link to='/' id='logout' className='navbar-item is-hoverable pt-1'>
            <span className='material-icons icon has-text-danger'>logout</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
