import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PK}`);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { treatment, price, slot, appointmentDate } = booking;
    if (navigation.state === "loading"){
      return <Loading/>
    }
      return (
        <div>
          <h3 className="text-3xl mb-6">Payment for {treatment}</h3>
          <p className="text-xl">
            Please pay ${price} on you appointment {appointmentDate} at {slot}
          </p>
          <div className="w-96 my-10">
            <Elements stripe={stripePromise}>
              <CheckoutForm booking={booking} />
            </Elements>
          </div>
        </div>
      );
};

export default Payment;