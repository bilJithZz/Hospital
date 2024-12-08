import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16 py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <ul className="flex justify-center gap-6 mt-4">
          <li>
            <a 
              href="/privacy-policy" 
              className="text-gray-400 hover:text-white transition duration-200"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a 
              href="/terms-of-service" 
              className="text-gray-400 hover:text-white transition duration-200"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a 
              href="/contact" 
              className="text-gray-400 hover:text-white transition duration-200"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer