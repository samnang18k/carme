
import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CarFront,
  Clock,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" bg-white text-gray-800  dark:bg-gray-950 dark:text-white">

      {/* Main Footer */}
      <div className="px-6 md:px-16 lg:px-24 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo & Description */}
          <div className="flex flex-col gap-5">

            <div className="flex items-center gap-2 text-white">
              <CarFront size={35} className="text-blue-500" />

              <h1 className="text-2xl font-bold">
                CAR <span className="text-blue-500">REVOLUTION</span>
              </h1>
            </div>

            <p className="text-sm text-gray-800 leading-7 dark:text-gray-400">
              Discover your dream car with us. We provide premium
              vehicles, professional services, and the best
              car-buying experience.
            </p>

            {/* Social Media */}
            <div className="flex gap-3 mt-2">
              {[FaFacebookF, FaInstagram,FaXTwitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={["Facebook", "Instagram", "Twitter"][index]}
                  className="w-10 h-10 flex items-center justify-center
                  rounded-full text-white bg-gray-700 dark:bg-gray-800 hover:bg-blue-500
                  hover:text-white transition-all duration-300"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-gray-800 text-lg font-bold mb-6 dark:text-white">
              Quick Links
            </h2>

            <ul className="flex flex-col gap-4 text-sm">
              {[
                ["Home", "/"],
                ["Cars", "/car"],
                ["Services", "/service"],
                ["About Us", "/about"],
                ["Contact", "/contact"],
              ].map(([name, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="hover:text-blue-500 transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h2 className="text-gray-800 text-lg font-bold mb-6 dark:text-white">
              Our Services
            </h2>

            <ul className="flex flex-col gap-4 text-sm">
              <li>Car Sales</li>
              <li>Car Inspection</li>
              <li>Car Maintenance</li>
              <li>Car Financing</li>
              <li>Customer Support</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-gray-800 text-lg font-bold mb-6 bg:text-white">
              Contact Us
            </h2>

            <div className="flex flex-col gap-5 text-sm">

              <div className="flex gap-3 items-start">
                <MapPin className="text-blue-500 shrink-0" size={20} />
                <p>Phnom Penh, Cambodia</p>
              </div>

              <div className="flex gap-3 items-center">
                <Phone className="text-blue-500 shrink-0" size={20} />
                <p>+855 12 345 678</p>
              </div>

              <div className="flex gap-3 items-center">
                <Mail className="text-blue-500 shrink-0" size={20} />
                <p>info@carrevolution.com</p>
              </div>

              <div className="flex gap-3 items-center">
                <Clock className="text-blue-500 shrink-0" size={20} />
                <p>Mon - Sat: 8:00 AM - 6:00 PM</p>
              </div>

            </div>
          </div>

        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-14 pt-10
        flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-gray-800 text-xl font-bold dark:text-white">
              Subscribe to Our Newsletter
            </h2>

            <p className="text-gray-600 text-sm mt-2 dark:text-gray-400">
              Get the latest car news and exclusive offers.
            </p>
          </div>

          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-72 px-4 py-3 bg-gray-800
              text-white outline-none rounded-l-md
              border border-gray-700 focus:border-blue-500"
            />

            <button className="bg-blue-500 hover:bg-blue-600
            text-white px-5 rounded-r-md flex items-center gap-2
            transition-colors">
              Subscribe
              <ArrowRight size={18} />
            </button>
          </div>

        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 px-6 md:px-16
      lg:px-24 py-6 flex flex-col md:flex-row
      justify-between items-center gap-3 text-sm">

        <p className="text-gray-500">
          © {new Date().getFullYear()} Car Revolution.
          All rights reserved.
        </p>

        <div className="flex gap-6 text-gray-500">
          <a href="#" className="hover:text-blue-500">
            Privacy Policy
          </a>

          <a href="#" className="hover:text-blue-500">
            Terms & Conditions
          </a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
