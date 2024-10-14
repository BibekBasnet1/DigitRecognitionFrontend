import { Link, useNavigate } from 'react-router-dom';
import pagesData from './Menu';

import { getFromLocalStorage ,removeAllDataFromLocalStorage} from '../utils/localstorage';

const NavBar = () => {

  const token = getFromLocalStorage('access_token');
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (token) {
      removeAllDataFromLocalStorage();
      navigate('/upload');
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className="flex items-center justify-around p-4 text-white py-10 text-lg">

      <div className="flex-shrink-0">
        <Link to="/">
          {/* <img src={logo} alt="Logo" className="h-8 w-auto" /> */}
        </Link>
      </div>

      <ul className="flex-1 flex justify-center space-x-4">
        {pagesData.map(({ path, title }) => (
          <li key={title} className='border-red-700'>
            <Link
              to={`/${path}`}
              className="hover:text-gray-400 text-lg"
            >
              {title.charAt(0).toUpperCase() + title.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex-shrink-0 mr-5">
        <button
          onClick={handleButtonClick}
           className="outline-white border border-white hover:bg-blue-600 text-white px-7 py-3 rounded-lg text-sm">
          {token ? 'Logout' : 'Login'}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
