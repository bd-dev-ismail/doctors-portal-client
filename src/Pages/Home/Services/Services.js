import React from 'react';
import fluroide from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import ServicesCard from './ServicesCard';
const Services = () => {
    const servicesData = [
      {
        id: 1,
        name: "Fluroide Treatment",
        description:
          "Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. ",
        img: fluroide,
      },
      {
        id: 2,
        name: "Cavity Filling",
        description:
          "Although some of the materials are strong and durable, none are considered permanent. ",
        img: cavity,
      },
      {
        id: 3,
        name: "Teeth Whitening",
        description:
          "Teeth whitening involves bleaching your teeth to make them lighter.  ",
        img: whitening,
      },
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <p className='text-primary text-xl font-bold uppercase'>Our Services</p>
                <h3 className='text-2xl'>Services We Provide</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16'>
                {
                    servicesData.map(service => <ServicesCard key={service.id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;