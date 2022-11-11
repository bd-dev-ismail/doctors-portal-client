import React from 'react';
import treatment from '../../../assets/images/treatment.png';
const Terms = () => {
    return (
      <div className="mb-32">
        <div className="hero">
          <div className="hero-content grid grid-cols-1 lg:grid-cols-2 p-0 my-5">
            <img
              alt=""
              src={treatment}
              className="max-w-sm right-0 rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">
                Exceptional Dental Care, on Your Terms!
              </h1>
              <p className="py-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page.
              </p>
              <button className="text-white btn btn-primary bg-gradient-to-r from-primary to-secondary">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Terms;