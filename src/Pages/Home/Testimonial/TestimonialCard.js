import React from 'react';

const TestimonialCard = ({testimonial}) => {
    const {name, country, img, desc} = testimonial;
    return (
      <div>
        <div className="card p-6 bg-base-100  items-start shadow-xl">
          <div className="card-body p-0 my-9">
            <p>{desc}</p>
          </div>
          <figure className="flex pb-14">
            <img src={img} alt="Shoes" className="rounded-xl mr-3" />
            <div>
              <h2 className="card-title">{name}</h2>
              <p>{country}</p>
            </div>
          </figure>
        </div>
      </div>
    );
};

export default TestimonialCard;