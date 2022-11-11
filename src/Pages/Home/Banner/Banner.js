import React from 'react';
import bg from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';
const Banner = () => {
    return (
      <div
        className="hero "
        style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center' , backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}
      >
        <div className="hero-content flex-col lg:flex-row-reverse p-0 my-20">
          <img
            alt=""
            src={chair}
            className=" lg:w-1/2 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="text-white btn btn-primary bg-gradient-to-r from-primary to-secondary ">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;