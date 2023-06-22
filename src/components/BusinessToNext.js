import React from 'react';
import { Link } from 'react-router-dom';

const BusinessToNext = () => {
  const data = [
    {
      title: 'Reviews',
      description: 'Improve ratings & get chosen more.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>

      ),
    },
    {
      title: 'Listings',
      description: 'Improve listings & get seen more.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>

      ),
    },
    {
      title: 'Marketing',
      description: 'Reach out to customers on text & email.',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M12 0C8.926 0 5.852 1.17 3.511 3.511c-4.37 4.371-4.66 11.299-.869 16.01a3.138 3.138 0 01.719-3.314 3.138 3.138 0 013.672-.56 6.163 6.163 0 019.324-8.004 2.921 2.921 0 104.132-4.132A11.968 11.968 0 0012 0zm9.36 4.481a3.138 3.138 0 01-.72 3.313 3.138 3.138 0 01-3.672.56 6.165 6.165 0 01-.61 8.003 2.921 2.921 0 104.131 4.132c4.37-4.37 4.66-11.298.87-16.008zM5.576 15.501a2.92 2.92 0 00-2.922 2.922 2.92 2.92 0 002.922 2.922 2.92 2.92 0 002.922-2.922A2.92 2.92 0 005.577 15.5zm10.07 1.467a6.168 6.168 0 01-7.293 0 3.14 3.14 0 01-.56 3.672 3.136 3.136 0 01-3.314.718c4.376 3.523 10.665 3.523 15.04 0a3.136 3.136 0 01-3.313-.718 3.138 3.138 0 01-.56-3.672z" />
        </svg>
      ),
    },
    {
      title: 'SmartPages',
      description: 'Engage more with our AI SEO.',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M22.363 1.636H1.635C.732 1.636 0 2.37.001 3.273L0 20.727v.003c0 .903.733 1.634 1.635 1.634h20.73c.904 0 1.635-.734 1.635-1.637V3.273c.016-.89-.76-1.64-1.637-1.637zM3.979 2.886c.492-.507 1.279.28.77.772-.491.508-1.278-.279-.77-.771zM1.8 2.89c.507-.509 1.28.265.772.771-.493.502-1.274-.28-.772-.771zm21.7 17.838c.012.611-.524 1.148-1.137 1.136H1.635A1.137 1.137 0 01.5 20.727L.501 4.91H23.5v15.819zM11 16.159l5.946-4.577c.235-.2.576.129.389.372l-.002-.002-3.936 6.35a1.638 1.638 0 01-2.448.405c-.785-.668-.811-1.835.05-2.548zm4.763-.75c.09-.168 2.002-3.181 2.06-3.35 2.056 1.813 3.029 4.382 2.898 7.026h-3.819c.073-1.39-.29-2.678-1.139-3.676zm-8.679 3.682H3.278c-.357-7.022 7.148-11.735 13.39-7.92l-3.461 2.618c-3.3-.762-6.364 1.71-6.123 5.302z" />
        </svg>
      ),
    },
  ];


  const Engage = [{
    title: 'WebChat',
    description: 'Convert leads on website chat with our AI.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>

    ),
  },
  {
    title: 'Messaging',
    description: 'Engage with customers across all channels.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>

    ),
  },
  {
    title: 'Referrals',
    description: 'Let your customers refer you.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>

    ),
  },
  {
    title: 'Payments',
    description: 'Modernize your integrated payment tools.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

    ),
  },
  ];


  const Elevate = [{
    title: 'Captain AI',
    description: 'Your AI assistant to drive growth.',
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path d="M21 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
  },
  {
    title: 'Feedback & survey',
    description: 'Listen to your customers & delight them.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>

    ),
  },
  {
    title: 'Competition & Insights',
    description: 'Learn about your competitors & insights.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>

    ),
  },
  {
    title: 'Customer Manager',
    description: 'Manage all your customer data & activity.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>

    ),
  },
  ];

  return (
    <section className="text-gray-600 body-font font-Comfortaa">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-5xl text-xl font-bold  title-font mb-10 text-gray-900 relative after:w-24 after:bg-transparent after:absolute after:-bottom-6 after:left-1/2 after:-translate-x-1/2 after:border-b-4 after:border-b-blue-500">
            Tools to take your business to the next level
          </h1>

        </div>
        <div className='border-2 p-10 rounded-lg border-gray-100  '>
          <div className="flex flex-col mb-8 w-full  ">
            <h1 className="sm:text-4xl text-2xl font-medium title-font  text-black relative after:w-16 after:bg-transparent after:absolute after:-bottom-3 after:left-0 after:border-b-4 after:border-b-blue-500">Attract</h1>
            <h2 className="text-xl mt-4  tracking-wide  title-font mb-1  ">Attract more customers</h2>

          </div>
          <div className="flex flex-wrap -m-4">
            {data.map((item, index) => (
              <div className="p-4 lg:w-1/4  md:w-1/2 w-full">
                <div className="flex rounded-lg h-full border p-8 flex-col hover:bg-gray-50 group transition-all hover:-translate-y-2 hover:shadow shadow-sm ">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full   text-blue-500 flex-shrink-0 group-hover:scale-125 delay-50 transition-transform">
                      {item.icon}
                    </div>
                    <button type='button' className="text-gray-900  hover:text-blue-600 text-2xl  title-font font-bold">{item.title}</button>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">{item.description}</p>
                    <Link to='' className="mt-3 text-gray-500 group-hover:text-blue-500 inline-flex items-center">Learn More
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className='border-2 p-10 rounded-lg mt-10 border-gray-100'>
          <div className="flex flex-col mb-8 w-full text-end ">
            <h1 className="sm:text-4xl text-2xl font-medium title-font  text-black relative after:w-16 after:bg-transparent after:absolute after:-bottom-3 after:right-0 after:border-b-4 after:border-b-blue-500">Engage</h1>
            <h2 className="text-xl mt-4  tracking-wide  title-font mb-1  ">Convert leads to customers</h2>

          </div>
          <div className="flex flex-wrap -m-4">
            {Engage.map((item, index) => (
              <div className="p-4 lg:w-1/4  md:w-1/2 w-full">
                <div className="flex rounded-lg h-full border p-8 flex-col hover:bg-gray-50 group transition-all hover:-translate-y-2 hover:shadow shadow-sm ">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full   text-blue-500 flex-shrink-0 group-hover:scale-125 delay-50 transition-transform">
                      {item.icon}
                    </div>
                    <button type='button' className="text-gray-900  hover:text-blue-600 text-2xl  title-font font-bold">{item.title}</button>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">{item.description}</p>
                    <Link to='' className="mt-3 text-gray-500 group-hover:text-blue-500 inline-flex items-center">Learn More
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className='border-2 p-10 rounded-lg mt-10 border-gray-100'>
          <div className="flex flex-col mb-8 w-full  ">
            <h1 className="sm:text-4xl text-2xl font-medium title-font  text-black relative after:w-16 after:bg-transparent after:absolute after:-bottom-3 after:left-0 after:border-b-4 after:border-b-blue-500">Elevate</h1>
            <h2 className="text-xl mt-4  tracking-wide  title-font mb-1  ">Provide a delightful experience</h2>

          </div>
          <div className="flex flex-wrap -m-4">
            {Elevate.map((item, index) => (
              <div className="p-4 lg:w-1/4  md:w-1/2 w-full">
                <div className="flex rounded-lg h-full border p-8 flex-col hover:bg-gray-50 group transition-all hover:-translate-y-2 hover:shadow shadow-sm ">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full   text-blue-500 flex-shrink-0 group-hover:scale-125 delay-50 transition-transform">
                      {item.icon}
                    </div>
                    <button type='button' className="text-gray-900  hover:text-blue-600 text-2xl  title-font font-bold">{item.title}</button>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">{item.description}</p>
                    <Link to='' className="mt-3 text-gray-500 group-hover:text-blue-500 inline-flex items-center">Learn More
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessToNext;
