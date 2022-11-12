import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const ContactUs = () => {
    return (
      <section style={{ background: `url(${appointment})` }} className="my-20">
        <div className="py-20">
          <div className="text-center">
            <p className="text-primary text-xl font-bold uppercase">
              Contact Us
            </p>
            <h3 className="text-2xl text-white capitalize">Stay Connected With US</h3>
          </div>
          <div className="flex items-center justify-center ">
            <div className="card flex-shrink-0   w-full max-w-sm ">
              <div className="card-body">
                <div className="form-control">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <textarea
                    className="textarea textarea-bordered h-24"
                    placeholder="Bio"
                  ></textarea>
                 
                </div>
                <div className=" mt-6 text-center">
                  <PrimaryButton>Contact us</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ContactUs;