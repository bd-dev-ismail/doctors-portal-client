import React from 'react';

const TestimonialCard = ({ review }) => {
  const { name, country, img, review: userReview } = review;
  return (
    <div>
      <div className="card p-6 bg-base-100  items-start shadow-xl">
        <div className="card-body">
          <p>{userReview}</p>
        </div>
        <div className="flex ml-5 items-center mt-6">
          <div className="avatar mr-6">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt='' />
            </div>
          </div>
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;