import { FaPhone, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../../app/globals.css'
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-auto">
      <div className="container items-center mx-auto px-2 sm:px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Contact Column */}
          <div className="w-full sm:w-64 md:w-1/3 px-4 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <div className="flex items-center mb-2">
              <FaPhone className="mr-2" />
              <span>+123 456 7890</span>
            </div>
            <div className="flex items-center mb-2">
              <a href="https://facebook.com" className="flex items-center mr-4">
                <FaFacebook className="mr-2" />
                <span>Facebook</span>
              </a>
              <a href="https://twitter.com" className="flex items-center mr-4">
                <FaTwitter className="mr-2" />
                <span>Twitter</span>
              </a>
              <a href="https://instagram.com" className="flex items-center">
                <FaInstagram className="mr-2" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Payment Column */}
          <div className="w-80 sm:w-64 md:w-1/3 px-4 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Payment</h2>
            <div className="border border-gray-500 p-4 rounded-lg">
              <p>Account Number: 1234 5678 9012</p>
              <p>Business Number: 987654</p>
            </div>
          </div>

          {/* Links Column */}
          <div className="w-full sm:w-64 md:w-1/3 px-4">
            <h2 className="text-lg font-semibold mb-4">Links</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li>
                <a href="/home" className="hover:underline">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:underline">About Us</a>
              </li>
              <li>
                <a href="/services" className="hover:underline">Services</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">Contact</a>
              </li>
              <li>
                <a href="/blog" className="hover:underline">Blog</a>
              </li>
              <li>
                <a href="/faq" className="hover:underline">FAQ</a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
