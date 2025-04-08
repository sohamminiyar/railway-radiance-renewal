
import React from 'react';
import { Train, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, CreditCard, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Train className="h-8 w-8 text-irctc-yellow" />
              <span className="text-xl font-bold">IRCTC</span>
            </div>
            <p className="text-gray-400 mb-6">
              Indian Railway Catering and Tourism Corporation Ltd. is a public sector enterprise under the Ministry of Railways.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Book Ticket</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">PNR Status</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Train Schedule</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Cancelled Trains</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Refund Rules</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">E-Catering</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">IRCTC Rail Connect App</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Tour Packages</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Luxury Trains</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Corporate Travel</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-irctc-yellow mt-0.5" />
                <div>
                  <p className="text-gray-400">Customer Care</p>
                  <p className="text-white">139</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-irctc-yellow mt-0.5" />
                <div>
                  <p className="text-gray-400">Email Us</p>
                  <p className="text-white">care@irctc.co.in</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-irctc-yellow mt-0.5" />
                <div>
                  <p className="text-gray-400">Corporate Office</p>
                  <p className="text-white">IRCTC Ltd., New Delhi, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 pt-8 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-sm font-medium mb-2 flex items-center">
                <CreditCard className="h-4 w-4 mr-2 text-irctc-yellow" />
                Payment Methods
              </h4>
              <div className="flex space-x-3">
                <div className="bg-white p-1 rounded">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
                </div>
                <div className="bg-white p-1 rounded">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                </div>
                <div className="bg-white p-1 rounded">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/RuPay.svg" alt="RuPay" className="h-6" />
                </div>
                <div className="bg-white p-1 rounded">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/UPI-Logo-vector.svg" alt="UPI" className="h-6" />
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <ShieldCheck className="h-5 w-5 mr-2 text-irctc-yellow" />
              <span className="text-sm text-gray-400">Secured by 256-bit encryption</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} IRCTC. All Rights Reserved. | <a href="#" className="hover:text-white">Terms of Service</a> | <a href="#" className="hover:text-white">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
