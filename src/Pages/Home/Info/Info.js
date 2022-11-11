import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';
const Info = () => {
    const cardData = [
      {
        id: 1,
        name: "Openning Hours",
        description: "Morning 9.00Am To Evening 5.00PM Everyday",
        icon: clock,
        bgClass: "bg-gradient-to-r from-primary to-secondary",
      },
      {
        id: 2,
        name: "Visit Hour Locaiton",
        description: "Brooklyn, NY 10036, United States",
        icon: marker,
        bgClass: "bg-accent",
      },
      {
        id: 3,
        name: "Contact Us Now",
        description: "+880-1833201582",
        icon: phone,
        bgClass: "bg-gradient-to-r from-primary to-secondary",
      },
    ];
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 my-20'>
            {
                cardData.map(card => <InfoCard key={card.id} card={card}></InfoCard>)
            }
        </div>
    );
};

export default Info;