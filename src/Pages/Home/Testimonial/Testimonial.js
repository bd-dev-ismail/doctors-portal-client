import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import quote from '../../../assets/icons/quote.svg';
import TestimonialCard from './TestimonialCard';
const Testimonial = () => {
    const reviews = [
      {
        _id: 1,
        name: "Wison Harray",
        review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img: people1,
        country: "Califonia",
      },
      {
        _id: 2,
        name: "Anne Marry",
        review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img: people2,
        country: "United States",
      },
      {
        _id: 3,
        name: "Disoza Jimi",
        review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img: people3,
        country: "Australia",
      },
    ];
    return (
      <section className="my-32">
        <div className="mb-36 flex justify-between">
          <div>
            <p className="text-primary text-xl font-bold uppercase">
              Our Services
            </p>
            <h3 className="text-2xl">What Our Patients Says</h3>
          </div>
          <figure>
            <img src={quote} alt="" className="lg:w-48 w-24" />
          </figure>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <TestimonialCard key={review._id} review={review}></TestimonialCard>
          ))}
        </div>
      </section>
    );
};

export default Testimonial;