import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import image from '../assets/Helping.png'
import p1 from '../assets/p1.webp'
import p2 from '../assets/p2.webp'
import p3 from '../assets/p3.webp'

const data = [
    {
      name: 'Simon Page',
      position: 'Owner, Mamagato Restaurant',
      quote:
        '“In 2022 so far we are hitting our best months in customers & revenue even in an economic downturn"',
      profitIncrease: '40%',
      description:'Average net profit increase',
      productsUsed: ['Messaging', 'Webchat', 'Reviews', 'Listings', 'Referrals'],
      profilePic: p1,
    },
    {
      name: 'Daniel Wilson',
      position: 'Marketing head, The Air Conditioning Company',
      quote:
        '“Our rating improved from 3.3 to 4.6 & reviews are up 200%, we are getting more leads from Google”',
        profitIncrease: '200%',
        description:'New review growth',
      productsUsed: ['Reviews', 'Listings', 'Messaging', 'Webchat', 'Customer Manager'],
      profilePic: p2,
    },
    {
      name: 'Debbie Rose',
      position: 'Owner, Jiva luxury Spa',
      quote:
        '“Effective text & email marketing campaign on SalesCaptain helped us make additional $150k in two weeks”',
        profitIncrease: '$150k',
        description:'Generated with marketing campaign',
      productsUsed: ['Marketing', 'Webchat', 'Review', 'Messaging', 'Competition & Insights'],
      profilePic: p3,
    },
  ];

const Header = () => {

    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context('../assets/brands/', false, /\.(webp|jpe?g|svg)$/));

    return (
        <section className='container mx-auto md:min-h-screen font-Comfortaa  '>
            <div className='flex flex-wrap '>
                <div className=' md:w-3/5 w-full order-2 md:order-2 mt-28 text-center md:text-start'>
                    <h1 className='md:text-5xl text-3xl font-bold leading-snug uppercase mt-6 lg:h-28 md:h-44 sm:h-36'>
                        
                        <TypeAnimation
                        sequence={[
                            'Best way to grow your local business',
                            1000,
                            'The AI-powered local marketing platform',
                            1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        wrapper='h2'
                        className='md:text-5xl text-3xl font-bold leading-snug uppercase'
                    />
                    </h1>

                    <p className='text-gray-500 text-lg mt-10 md:w-4/5 mx-4 md:mx-0 leading-relaxed  '>
                        Artificial Intelligence powered easy-to-use tools to get more customers & give them a better experience

                    </p>
                    <div>

                        <form class="mt-8">

                            <div class=" w-2/3 mx-auto md:mx-0">

                                <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5   " placeholder="Enter Your Email" required />
                            </div>
                            <button type="button" className="text-white bg-blue-500 hover:bg-blue-500  focus:outline-none  font-medium rounded-lg text-lg px-2 py-2 text-center  outline-2 outline outline-blue-500 hover:outline-offset-2 transition-all w-52 mt-4 ">
                                Get Demo
                            </button>


                        </form>

                    </div>
                </div>
                <div className=' md:w-2/5 w-1/2 mx-auto md:order-2 order-1 mt-20'>
                    <img src={image} className='' />
                </div>
            </div>

            <div className='bg-[#fafafa] shadow rounded-lg py-8 md:px-8 px-0  mt-10 md:mt-4'>
                <h5 className='text-xl font-medium mb-8 mx-14 md:text-start text-center'>Trusted by 100,000+ local businesses globally</h5>

                <div className='flex md:justify-between flex-wrap sm:flex-wrap justify-around'>
                    {images.map((image) => (
                        <img src={image} className='h-24 w-40 hover:scale-110 transition-transform ' />
                    ))}

                </div>
            </div>
            <div className='flex gap-6 lg:flex-nowrap flex-wrap justify-center'>

{data.map((elem)=>(
 <figure class="md:flex lg:w-1/3 w-11/12 border rounded-xl p-8 md:p-0  mt-20">

 <div class="pt-6 md:p-8 text-center md:text-left ">
     <h1 className='md:text-8xl text-6xl font-semibold text-center'>{elem.profitIncrease}</h1>
     <p className='text-center text-gray-600  text-2xl w-60 mx-auto '>{elem.description}</p>
     <p class="text-lg font-medium text-center text-gray-800 mt-14">
         {elem.quote}
     </p>
     <figcaption class="font-medium mt-20 flex items-center  gap-4">
     <img class="w-24 h-24  rounded-full " src={elem.profilePic} alt="" width="384" height="512" />
         <div class="text-blue-500  ">
         {elem.name}
             <p class="text-slate-700 ">
             {elem.position}
         </p>
         </div>
       
     </figcaption>

     <div className=''>
     <h5 className='text-xl text-gray-800 font-medium mt-10 '>Products used:</h5>
     <div className=' mt-4 rounded-lg py-8 px-4 flex gap-4 flex-wrap'>
         {elem.productsUsed.map((name)=>(
             <button className='bg-blue-500/10 rounded-lg p-4 font-medium capitalize'>{name}</button>
         ))}

     </div>
     </div>
 </div>
</figure>
))}
</div>

           
        </section>
    )
}

export default Header