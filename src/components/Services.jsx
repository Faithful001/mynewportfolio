import React from 'react';

import services from '../../public/services.js';

const Services = () => {
    return (
        <div>
              <h1 className="text-[#1B99F7] font-semibold text-3xl mt-14">Where I've worked</h1>
              <div className="work-info">
                <div className="work">
                <div className="Bleverr">
                    <p className="">Bleverr</p>

                </div>
                <div className="Teknology">
                    <p className="">Teknology</p>
                </div>
                <div className="Freelancer">
                    <p className="">Freelancer</p>
                </div>
                </div>
                <div className="info">
                    
                </div>


              </div>
              {/* <div className='grid md:grid-cols-3 my-8 gap-5'>
              {
                services.map(service => <div key={service.id} className='service-card flex flex-col justify-center items-center p-6 text-center text-white'>
                    <img src={service.image} alt="" className='mb-3' />
                    <h6 className='text-2xl mb-4'>{service.name}</h6>
                    <p className='text-base'>{service.description}</p>
                </div>)
              }
              </div> */}
        </div>
    );
};

export default Services;