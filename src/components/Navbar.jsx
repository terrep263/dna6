import { Link } from 'react-router-dom';

function Navbar({ trialStatus, subscribed }) {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="MyDatingDNA" className="h-10 w-auto" />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {trialStatus.isTrial && !trialStatus.ended && (
              <Link to="/trial" className="text-gray-700 hover:text-purple-600">
                Trial (Day {trialStatus.day + 1})
              </Link>
            )}
            
            {subscribed && (
              <Link to="/premium" className="text-gray-700 hover:text-purple-600">
                Premium
              </Link>
            )}
            
            <Link to="/education" className="text-gray-700 hover:text-purple-600">
              Education
            </Link>
            {!trialStatus.isTrial && !subscribed && (
              <Link to="/assessment" data-testid="nav-assessment" className="text-gray-700 hover:text-purple-600">
                Get Started
              </Link>
            )}
            
            {trialStatus.isTrial && trialStatus.ended && !subscribed && (
              <Link to="/subscribe" className="text-gray-700 hover:text-purple-600">
                Subscribe
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
