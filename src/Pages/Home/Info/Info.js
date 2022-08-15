import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div className='grid sm:grid-cols-1 md:sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img ={clock}></InfoCard>
                <InfoCard cardTitle="Our Locations" bgClass="bg-gradient-to-r from-accent to-accent" img ={marker}></InfoCard>
                <InfoCard cardTitle="Contact Us"  bgClass="bg-gradient-to-r from-secondary to-primary"img ={phone}></InfoCard>
        </div>
        
    );
};

export default Info;