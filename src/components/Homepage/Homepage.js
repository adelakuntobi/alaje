import React from 'react';
import alajelogo from '../../images/alaje-logo.svg'
import header2 from '../../images/header2.svg'
// import Group24 from '../../images/Group 24.png'
import Union from '../../images/Union.png'
import Rectangle1 from '../../images/Rectangle 1.png'
import Popular from '../Popular/Popular';
import { FaEnvelope, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiGmail, SiTwitter } from 'react-icons/si';
import { ImWhatsapp } from 'react-icons/im'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Testimonials from '../Testimonials/Testimonials';
import { Link } from 'react-scroll';

AOS.init();
function Homepage() {
  return (
    <div>
      <header className="container mx-auto px-5 pt-8 pb-0 lg:p-8">
        <nav>
          <img src={alajelogo} loading="lazy" alt="alaje logo" />
        </nav>

        <div id="home" className="flex pt-8 pb-0 lg:pb-8 justify-between items-center">
          <div className="w-1/2 pr-16 mx-auto hidden lg:block" data-aos="fade-left">
            <span className="uppercase font-light pb-4 orange-text">Online gadget store</span>
            <h1 className="green-text text-4xl font-semibold leading-snug my-6">
              Your Best Stop for Phones,<br />
                Laptops, Accessories
        </h1>
            <p className="my-5">Buy Quality Phones, Laptops ,Gaming Consoles ,accessories and more at Best Prices.
        </p>
            <a href="https://api.whatsapp.com/send?phone=2347080915046&text=Hello%20welcome%20to%20Alajeonline%20">
              <button className="py-2 px-12 border outline-none my-5 green-text orange-bg font-normal">
                Shop Now
            </button>
            </a>

            <ul className="list-disc my-12 pl-6">
              <li className="my-4">Nationwide Delivery </li>
              <li className="my-4">Products Warranty</li>
              <li className="my-4">Free delivery in Lagos</li>
            </ul>
          </div>
          <div>
            <img className="border-img mx-auto lg:mb-6" src={Rectangle1} alt="the-img" data-aos="fade-right" />
            <div className="block lg:hidden" data-aos="fade-up-right">
              <h1 className="green-text text-4xl font-semibold leading-tight my-6">
                Your Best Stop for Phones,
                Laptops, Accessories
          </h1>
              <p className="mt-5 mb-3">Buy Quality Phones, Laptops ,Gaming Consoles ,accessories and more at Best Prices.
          </p>
              <a href="https://api.whatsapp.com/send?phone=2347080915046&text=Hello%20welcome%20to%20Alajeonline%20">
                <button className="py-2 px-12 border outline-none mb-16 green-text orange-bg font-normal">
                  Shop Now
              </button>
              </a>
            </div>
            <img className="mx-auto lg:mb-6" src={header2} alt="alternate" data-aos="fade-right" data-aos-delay="150" />
            <ul className="list-disc my-6 pl-6 block lg:hidden">
              <li data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" className="mt-4">Nationwide Delivery </li>
              <li data-aos="fade-right" data-aos-delay="250" data-aos-duration="1000" className="mt-4">Products Warranty</li>
              <li data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" className="mt-4">Free delivery in Lagos</li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        {/* Popular categories */}
        <Popular />

        {/* 
              About Us
          */}


        <div id="about" className="container mx-auto flex flex-col lg:flex-row px-5 py-8 md:p-8 items-center">
          <div className="lg:pr-12 pt-0 lg:py-8 text-center lg:text-left">
            <h1 className="green-text text-2xl font-semibold leading-snug my-6">About Our Company</h1>
            <p className="">Alaje is a team of Tech guys thats provides a safe market place to purchase your gadgets and accessories online. We also provide quality repair service for your faulty devices.</p>
            <a href="https://api.whatsapp.com/send?phone=2347080915046&text=Hello%20welcome%20to%20Alajeonline%20">
              <button className="py-2 px-12 border outline-none my-5 green-text orange-bg font-normal">
                Shop Now
            </button>
            </a>
          </div>
          <img className="w-full lg:w-8/12 my-5" src={Union} alt="alternate" />
        </div>

        {/* Testimonials */}

        <Testimonials />
      </main>

      <div className=" lg:px-16">
        <footer className="container mx-auto my-16 lg:my-20 p-12 md:p-16 lg:p-20 text-center text-white">
          <div>
            <h2 className="text-3xl">We sell the best Phones, Laptops, Accessories</h2>
            <p className="mt-8">Be the first to know about our new products (Phones, Tablets, Computers, Electronics, Game
            consoles,
          accessories & more) at best prices | Easy Return | Quick Refund.</p>
            {/* <a className="text-white" href="https://api.whatsapp.com/send?phone=2347080915046&text=Hello%20welcome%20to%20Alajeonline%20">
              <button className="text-white py-2 px-12 outline-none my-5 green-text orange-bg font-normal">
                Shop Now
            </button>
            </a> */}
            <form className="flex flex-col lg:flex-row items-start justify-between lg:pl-8 lg:w-8/12 my-4 mx-auto ">
              <div className="flex bg-white items-center hover:shadow w-full my-2 lg:my-0 lg:mx-2">
                {/* <i className="mx-4 fas fa-envelope"></i> */}
                <FaEnvelope className="mx-4" />
                <input className="py-2 w-full text-black outline-none" placeholder="Enter Email Address"
                  type="email" htmlFor="email" />
              </div>
              <button className="py-2 px-4 w-full lg:w-auto outline-none green-text orange-bg font-normal" value="submit" type="submit">
                <a href="https://github.com/evcohen">
                  Subscribe
            </a>
              </button>
            </form>
          </div>
        </footer>
      </div>
      <div className="blue-bg px-5 py-8 md:p-12 w-full">
        <div className="container mx-auto">
          <div className="grid gap-6 grid-rows-1 lg:grid-cols-7">
            <div className="flex flex-col items-center lg:items-start lg:col-span-2">
              <img className="my-4" src={alajelogo} alt="alaje" />
              <div className="flex">

                <a href="https://web.facebook.com/alajeonline" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="mx-2" />
                </a>
                <a href="https://twitter.com/alajeonline" target="_blank" rel="noopener noreferrer">
                  <SiTwitter className="mx-2" />
                </a>
                <a href="https://www.instagram.com/alajeonline/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="mx-2" />
                </a>
                <a href="https://www.wa.link/9okvfh" target="_blank" rel="noopener noreferrer">
                  <ImWhatsapp className="mx-2" />
                </a>
                <SiGmail className="mx-2" />
              </div>
            </div>
            <ul className="flex flex-col">
              <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
                <li className="py-0 lg:py-2">Home</li>
              </Link>
              <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
                <li className="py-0 lg:py-2">About Us</li>
              </Link>
              <Link to="testimonials" spy={true} smooth={true} offset={-70} duration={500}>
                <li className="py-0 lg:py-2">Testimonials</li>
              </Link>
            </ul>
            <ul className="flex flex-col">
              <Link to="popular" spy={true} smooth={true} offset={-70} duration={500}>
                <li className="py-0 lg:py-2">Shop Now</li>
              </Link>
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                <li className="py-0 lg:py-2">Contact Us</li>
              </Link>
              <Link to="popular" spy={true} smooth={true} offset={-70} duration={500}>
                <li className="py-0 lg:py-2">Popular categories</li>
              </Link>
            </ul>
            <form className="flex flex-col lg:flex-row items-start justify-between lg:pl-8 lg:col-span-3 ">
              <div className="flex bg-white items-center hover:shadow w-full my-2 lg:my-0 lg:mx-2">
                {/* <i className="mx-4 fas fa-envelope"></i> */}
                <FaEnvelope className="mx-4" />
                <input className="py-2 w-full text-black outline-none" placeholder="Enter Email Address"
                  type="email" htmlFor="email" />
              </div>
              <button className="py-2 px-4 w-full lg:w-auto outline-none green-text orange-bg font-normal" value="submit" type="submit">
                <a href="https://github.com/evcohen">
                  Subscribe
            </a>
              </button>
            </form>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Homepage
