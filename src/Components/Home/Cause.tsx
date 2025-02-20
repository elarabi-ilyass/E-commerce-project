import React from 'react';

const Cause = () => {
  return (
    
    <section aria-labelledby="cause-heading">
    <div className="relative overflow-hidden bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0">
        <img
          alt="https://www.thoughtco.com/thmb/C7RiS4QG5TXcBG2d_Sh9i4hFpg0=/3620x2036/smart/filters:no_upscale()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg"
          src="https://www.thoughtco.com/thmb/C7RiS4QG5TXcBG2d_Sh9i4hFpg0=/3620x2036/smart/filters:no_upscale()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg"
          className="h-full w-full object-cover"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50 "></div>
      <div className="relative mx-auto max-w-3xl text-center">
        <h2
          id="cause-heading"
          className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl"
        >
          Long-term thinking
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-400">
          We're committed to responsible, sustainable, and ethical
          manufacturing. Our small-scale approach allows us to focus on
          quality and reduce our impact. We're doing our best to delay the
          inevitable heat-death of the universe.
        </p>
        <a
          href="#"
          className="mt-8 inline-block rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Read our story
        </a>
      </div>
    </div>
  </section>
    
  );
};

export default Cause;
