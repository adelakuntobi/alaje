import React from 'react'
import Rectangle38 from '../../images/Rectangle 38.png'
import Rectangle39 from '../../images/Rectangle 39.png'
import Rectangle40 from '../../images/Rectangle 40.png'
import Sample from './Sample'
import Slider from 'infinite-react-carousel';

function Testimonials() {
  const settings =  {
    autoplay: true,
    autoplaySpeed: 7000,
    duration: 400,
    shift: 100,
    centerMode: true,
    dots: true,
  };
  return (
    <div>
      <div id="testimonials" className="blue-bg md:px-12 md:pt-12 pb-32 px-0 pt-8 w-full">
        <div className="container mx-auto">
          <div className="text-center my-8">
            <h1 className="green-text text-2xl font-semibold leading-snug my-2">Testimonials</h1>
            <p>We appreciate reviews from our customers because their satisfaction remains our priority</p>
          </div>

          {/* <div className="flex flex-col lg:flex-row justify-between items-stretch test-contain"> */}
          <Slider { ...settings }>
            <Sample text="Alaje stores is the best, I contatced them via instagram and everything was so
        smooth. Once again, Thank you Alaje, I would always be a customer from today on."
              name="Adelakun Tobi"
              occupation="Engineer"
              image={Rectangle38}
            />
            <Sample className="bg-blue-500 text-white"
              text="Alaje stores is the best, I contatced them via instagram and everything was so
        smooth."
              name="Oguntunde Victor"
              occupation="Footballer"
              image={Rectangle39} />
            <Sample text="Alaje stores is the best, I contatced them via instagram and everything was so
        smooth. I also have to state that the customer service was top notch. Once again, Thank you Alaje, 
        I would always be a customer from today on."
              name="Adenike Aderonke"
              occupation="Entrepreneur"
              image={Rectangle40}
            />

            <Sample text="Alaje stores is the best, I contatced them via instagram and everything was so
        smooth. Once again, Thank you Alaje, I would always be a customer from today on."
              name="Adelakun Tobi"
              occupation="Engineer"
              image={Rectangle38}
            />
            <Sample className="bg-blue-500 text-white"
              text="Alaje stores is the best, I contatced them via instagram and everything was so
        smooth."
              name="Oguntunde Victor"
              occupation="Footballer"
              image={Rectangle39} />
            <Sample text="Alaje stores is the best, I contatced them via instagram and everything was so
        smooth. I also have to state that the customer service was top notch. Once again, Thank you Alaje, 
        I would always be a customer from today on."
              name="Adenike Aderonke"
              occupation="Entrepreneur"
              image={Rectangle40}
            />

            <Sample text="Alaje stores is the best, I contatced them via instagram and everything was so
        smooth. Once again, Thank you Alaje, I would always be a customer from today on."
              name="Adelakun Tobi"
              occupation="Engineer"
              image={Rectangle38}
            />
            <Sample className="bg-blue-500 text-white"
              text="Alaje stores is the best, I contatced them via instagram and everything was so
        smooth."
              name="Oguntunde Victor"
              occupation="Footballer"
              image={Rectangle39} />
            <Sample text="Alaje stores is the best, I contatced them via instagram and everything was so
        smooth. I also have to state that the customer service was top notch. Once again, Thank you Alaje, 
        I would always be a customer from today on."
              name="Adenike Aderonke"
              occupation="Entrepreneur"
              image={Rectangle40}
            />

            <Sample text="Alaje stores is the best, I contatced them via instagram and everything was so
        smooth. Once again, Thank you Alaje, I would always be a customer from today on."
              name="Adelakun Tobi"
              occupation="Engineer"
              image={Rectangle38}
            />
            <Sample className="bg-blue-500 text-white"
              text="Alaje stores is the best, I contatced them via instagram and everything was so
        smooth."
              name="Oguntunde Victor"
              occupation="Footballer"
              image={Rectangle39} />
            <Sample text="Alaje stores is the best, I contatced them via instagram and everything was so
        smooth. I also have to state that the customer service was top notch. Once again, Thank you Alaje, 
        I would always be a customer from today on."
              name="Adenike Aderonke"
              occupation="Entrepreneur"
              image={Rectangle40}
            />

            <Sample text="Alaje stores is the best, I contatced them via instagram and everything was so
        smooth. Once again, Thank you Alaje, I would always be a customer from today on."
              name="Adelakun Tobi"
              occupation="Engineer"
              image={Rectangle38}
            />
            <Sample className="bg-blue-500 text-white"
              text="Alaje stores is the best, I contatced them via instagram and everything was so
        smooth."
              name="Oguntunde Victor"
              occupation="Footballer"
              image={Rectangle39} />
            <Sample text="Alaje stores is the best, I contatced them via instagram and everything was so
        smooth. I also have to state that the customer service was top notch. Once again, Thank you Alaje, 
        I would always be a customer from today on."
              name="Adenike Aderonke"
              occupation="Entrepreneur"
              image={Rectangle40}
            />

            <Sample text="Alaje stores is the best, I contatced them via instagram and everything was so
        smooth. Once again, Thank you Alaje, I would always be a customer from today on."
              name="Adelakun Tobi"
              occupation="Engineer"
              image={Rectangle38}
            />
            <Sample className="bg-blue-500 text-white"
              text="Alaje stores is the best, I contatced them via instagram and everything was so
        smooth."
              name="Oguntunde Victor"
              occupation="Footballer"
              image={Rectangle39} />
            <Sample text="Alaje stores is the best, I contatced them via instagram and everything was so
        smooth. I also have to state that the customer service was top notch. Once again, Thank you Alaje, 
        I would always be a customer from today on."
              name="Adenike Aderonke"
              occupation="Entrepreneur"
              image={Rectangle40}
            />

            <Sample text="Alaje stores is the best, I contatced them via instagram and everything was so
        smooth. Once again, Thank you Alaje, I would always be a customer from today on."
              name="Adelakun Tobi"
              occupation="Engineer"
              image={Rectangle38}
            />
            <Sample className="bg-blue-500 text-white"
              text="Alaje stores is the best, I contatced them via instagram and everything was so
        smooth."
              name="Oguntunde Victor"
              occupation="Footballer"
              image={Rectangle39} />
            <Sample text="Alaje stores is the best, I contatced them via instagram and everything was so
        smooth. I also have to state that the customer service was top notch. Once again, Thank you Alaje, 
        I would always be a customer from today on."
              name="Adenike Aderonke"
              occupation="Entrepreneur"
              image={Rectangle40}
            />
            </Slider>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
