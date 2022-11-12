import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import TestimonialCard from './TestimonialCard';
const Testimonial = () => {
    const testimonialData = [
      {
        id: 1,
        name: "Wison Harray",
        desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img: people1,
        country: 'Califonia'
      },
      {
        id: 2,
        name: "Anne Marry",
        desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img: people2,
        country: 'United States'
      },
      {
        id: 3,
        name: "Disoza Jimi",
        desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img: people3,
        country: 'Australia'
      },
    ];
    return (
      <div className='my-32'>
        <div className='mb-36'>
          <p className="text-primary text-xl font-bold uppercase">
            Our Services
          </p>
          <h3 className="text-2xl">What Our Patients Says</h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                testimonialData.map(testimonial => <TestimonialCard key={testimonial.id} testimonial={testimonial}></TestimonialCard>)
            }
        </div>
      </div>
    );
};

export default Testimonial;