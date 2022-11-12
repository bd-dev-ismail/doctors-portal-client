import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Terms from '../Terms/Terms';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner/>
            <Info/>
            <Services/>
            <Terms/>
            <MakeAppointment/>
            <Testimonial/>
            <ContactUs/>
        </div>
    );
};

export default Home;