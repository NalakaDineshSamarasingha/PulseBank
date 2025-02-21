import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap" style={{ color: '#000' }}> <span style={{ color: '#E70606' }}>P</span>ulse<span style={{ color: '#E70606' }}>B</span>ank</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6 text-gray-500">About</a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6 text-gray-500">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6 text-gray-500">Licensing</a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-500">Contact</a>
              </li>
            </ul>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center">
            © 2024 <a href="" className="hover:underline" style={{ color: '#E70606' }}>TeamName™</a>. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
