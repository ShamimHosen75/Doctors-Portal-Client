import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../../Shared/Navbar/PrimaryButton/PrimaryButton';
const Treatment = () => {
    return (
        <div className="hero min-h-screen my-28">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={treatment} className="max-w-sm rounded-lg"/>
                        <div className='px-14'>
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <PrimaryButton>Get Started</PrimaryButton>
                        </div>
                    </div>
             </div>
    );
};

export default Treatment;