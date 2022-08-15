import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';
import Treatment from './Treatment';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening
        },
    ];
    return (
        <div className='my-28'>
             <div className='text-center'>
                <h2 className='text-primary text-xl font-bold uppercase'>Our Service</h2>
                <h3 className='text-4xl'>Services We Provide</h3>
             </div>
             <div className='grid sm:grid-cols-1 md:sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                  {
                      services.map( service => <Service
                            key={service._id}
                            service = {service}
                      ></Service>)
                  }
             </div>
             <Treatment></Treatment>
        </div>
    );
};

export default Services;