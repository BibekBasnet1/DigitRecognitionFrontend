import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">

          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-2">Digit Recognition</h2>
            <p className="text-gray-400">Bringing you the best experiences.</p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Bibek Basnet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
