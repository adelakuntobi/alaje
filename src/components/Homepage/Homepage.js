import React from 'react';
import alajelogo from '../../images/alaje-logo.svg'
import header2 from '../../images/header2.svg'
// import Group24 from '../../images/Group 24.png'
import Union from '../../images/Union.png'
import Rectangle1 from '../../images/Rectangle 1.png'
import Rectangle38 from '../../images/Rectangle 38.png'
import Rectangle39 from '../../images/Rectangle 39.png'
import Rectangle40 from '../../images/Rectangle 40.png'
import Popular from '../Popular/Popular';
import { FaFacebookF, FaInstagram } from  'react-icons/fa';
import { SiGmail, SiTwitter } from  'react-icons/si';
import { ImWhatsapp } from 'react-icons/im'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();
function Homepage() {
  return (
    <div>
      <header className="container mx-auto px-5 pt-8 pb-0 lg:p-8">
        <nav>
          <img src={alajelogo} loading="lazy" alt="alaje logo" />
        </nav>

        <div className="flex pt-8 pb-0 lg:pb-8 justify-between items-center">
          <div className="w-1/2 pr-16 mx-auto hidden lg:block" data-aos="fade-left">
            <span className="uppercase font-light pb-4 orange-text">Online gadget store</span>
            <h1 className="green-text text-4xl font-semibold leading-snug my-6">
              Your Best Stop for Phones,<br />
                Laptops, Accessories
        </h1>
            <p className="my-5">Buy warranty Phones, Tablets, Computers, Electronics, Game consoles, accessories & more online
            in Nigeria at
            best prices | Easy Return | Quick Refund.
        </p>
            <button className="py-2 px-12 border outline-none my-5 green-text orange-bg font-normal">
              <a href="https://github.com/evcohen">
                Shop Now
          </a>
            </button>

            <ul className="list-disc my-12 pl-6">
              <li className="my-4">Payment on Delivery</li>
              <li className="my-4">Nationwide Delivery </li>
              <li className="my-4">Easy Return. Quick Refund</li>
              <li className="my-4">Warranty Products</li>
            </ul>
          </div>
          <div>
            <img className="mx-auto lg:mb-6" src={Rectangle1} alt="the-img" data-aos="fade-right" />
            <div className="block lg:hidden" data-aos="fade-up-right">
              <h1 className="green-text text-4xl font-semibold leading-tight my-6">
                Your Best Stop for Phones,
                Laptops, Accessories
          </h1>
              <p className="mt-5 mb-3">Buy warranty Phones, Tablets, Computers, Electronics, Game consoles, accessories & more online
              in Nigeria at
              best prices | Easy Return | Quick Refund.
          </p>
              <button className="py-2 px-12 border outline-none mb-16 green-text orange-bg font-normal">
                <a href="https://github.com/evcohen">
                  Shop Now
            </a>
              </button>
            </div>
            <img className="mx-auto lg:mb-6" src={header2} alt="alternate" data-aos="fade-right" data-aos-delay="150" />
            <ul className="list-disc my-6 pl-6 block lg:hidden">
              <li data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" className="mt-4">Payment on Delivery</li>
              <li data-aos="fade-right" data-aos-delay="250" data-aos-duration="1000" className="mt-4">Nationwide Delivery </li>
              <li data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" className="mt-4">Easy Return. Quick Refund</li>
              <li data-aos="fade-right" data-aos-delay="350" data-aos-duration="1000" className="mt-4">Warranty Products</li>
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


        <div className="container mx-auto flex flex-col lg:flex-row px-5 py-8 md:p-8 items-center">
          <div className="lg:pr-12 pt-0 lg:py-8 text-center lg:text-left">
            <h1 className="green-text text-2xl font-semibold leading-snug my-6">About Our Company</h1>
            <p className="">We are Alaje, we provide quality provide.
            A trial will change your mind. Slide in now
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Eum minus, molestias eius veritatis rerum earum quia nulla
            quae dolor reiciendis atque nemo. Harum maxime sed eveniet error quam in dicta?</p>
            <button className="py-2 px-12 border outline-none my-5 green-text orange-bg font-normal">
              <a href="https://github.com/evcohen">Shop Now </a>
            </button>
          </div>
          <img className="w-4/12 w-full lg:w-8/12 my-5" src={Union} alt="alternate" />
        </div>

        {/* Testimonials */}

        <div className="blue-bg md:p-12 px-5 py-8 w-full">
          <div className="container mx-auto">
            <div className="text-center">
              <h1 className="green-text text-2xl font-semibold leading-snug my-2">Testimonials</h1>
              <p>We appreciate reviews fromour customers because their satisfaction remains our priority</p>
            </div>
            <div className="grid gap-4 grid-flow-col py-12 lg:px-8">
              <div className="flex items-baseline w-full lg:w-1/2">
                <img data-aos="fade-down"
                  data-aos-easing="linear" 
                  className="hidden lg:block pr-4" src={Rectangle38} alt="testimonial" />
                <img data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-delay="250" className="hidden lg:block pr-4" src={Rectangle39} alt="testimonial" />
                <img data-aos="fade-down"
                  data-aos-easing="linear" data-aos-delay="500"
                  className="w-full lg:pr-4" src={Rectangle40} alt="testimonial" />
              </div>
              <div className="w-full md:w-9/12 my-auto mx-6 lg:mx-auto">
                <h2 className="font-semibold text-2xl">Adelakun Tobiloba</h2>
                <p className="pb-12">Engineer</p>
                <p>Thank you Alaje! You have been the best site I have ever patronized. Thank you so much again </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className=" lg:px-16">
        <footer className="container mx-auto my-16 lg:my-20 p-12 md:p-16 lg:p-20 text-center text-white">
          <div>
            <h2 className="text-3xl">We sell the best Phones, Laptops, Accessories</h2>
            <p className="mt-8">Be the first to know about our new products (Phones, Tablets, Computers, Electronics, Game
            consoles,
          accessories & more) at best prices | Easy Return | Quick Refund.</p>
            <button className="text-white py-2 px-12 outline-none my-5 green-text orange-bg font-normal">
              <a className="text-white" href="https://github.com/evcohen">
                Shop Now
          </a>
            </button>
          </div>
        </footer>
      </div>
      <div className="blue-bg px-5 py-8 md:p-12 w-full">
        <div className="container mx-auto">
          <div className="grid gap-6 grid-rows-1 lg:grid-cols-7">
            <div className="flex flex-col items-center lg:items-start lg:col-span-2">
              <img className="my-4" src={alajelogo} alt="alaje" />
              <div className="flex">
                <FaFacebookF className="mx-2"/>
                <SiTwitter className="mx-2" />
                <FaInstagram className="mx-2" />
                <ImWhatsapp className="mx-2" />
                <SiGmail className="mx-2" />
                {/* <i className="mx-2 fab fa-whatsapp"></i> */}
                {/* <i className="mx-2 far fa-envelope"></i> */}
              </div>
            </div>
            <ul className="flex flex-col">
              <li className="py-0 lg:py-2">Home</li>
              <li className="py-0 lg:py-2">About Us</li>
              <li className="py-0 lg:py-2">Testimonials</li>
            </ul>
            <ul className="flex flex-col">
              <li className="py-0 lg:py-2">Shop Now</li>
              <li className="py-0 lg:py-2">Contact Us</li>
              <li className="py-0 lg:py-2">Popular categories</li>
            </ul>
            <form className="flex flex-col lg:flex-row items-start justify-between lg:pl-8 lg:col-span-3 ">
              <div className="flex bg-white items-center hover:shadow w-full my-2 lg:my-0 lg:mx-2">
                <i className="mx-4 fas fa-envelope"></i>
                <input className="py-2 w-full text-black outline-none" placeholder="Enter Email Address"
                  type="email" for="email" />
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

    </div>
  )
}

export default Homepage
