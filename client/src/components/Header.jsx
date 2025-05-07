import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector(state => state.user);

  return (
    <header className="shadow-md" style={{ backgroundColor: '#B4C5B9' }}>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/* Logo */}
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex">
            <span className="text-slate-700">Zo</span>
            <span className="text-slate-950">teo</span>
          </h1>
        </Link>

        {/* Search Bar */}
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>

        {/* Navigation Links */}
        <ul className="flex gap-4 items-center">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
          </Link>

          {/* User Profile or Sign In */}
          {currentUser ? (
            <Link to="/profile">
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt="profile"
              />
            </Link>
          ) : (
            <Link to="/signin">
              <li className="text-slate-700 hover:underline">Sign in</li>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
}
