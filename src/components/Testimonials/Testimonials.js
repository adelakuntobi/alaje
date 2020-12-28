import React from 'react'
import Rectangle38 from '../../images/Rectangle 38.png'
import Rectangle39 from '../../images/Rectangle 39.png'
import Rectangle40 from '../../images/Rectangle 40.png'
import Carousel from "react-elastic-carousel";
import Sample from './Sample'
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Testimonials() {
  return (
    <div>
      <div id="testimonials" className="blue-bg md:px-12 md:pt-12 pb-32 px-5 pt-8 w-full">
        <div className="container mx-auto">
          <div className="text-center my-8">
            <h1 className="green-text text-2xl font-semibold leading-snug my-2">Testimonials</h1>
            <p>We appreciate reviews fromour customers because their satisfaction remains our priority</p>
          </div>

          {/* <div className="flex flex-col lg:flex-row justify-between items-stretch test-contain"> */}
            <Carousel breakPoints={breakPoints} enableAutoPlay enableMouseSwipe className="testimoney" autoPlaySpeed={7500}>
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
             
            </Carousel>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
