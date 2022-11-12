import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointment = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  useEffect(()=>{
    fetch("appointmentOptions.json")
    .then(res => res.json())
    .then(data => setAppointmentOptions(data));
  },[])
  return (
    <section className="my-20">
      <p className="text-center text-secondary font-bold">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className='grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {appointmentOptions.map((option) => (
          <AppointmentOptions
            key={option._id}
            appointmentOption={option}
          ></AppointmentOptions>
        ))}
      </div>
    </section>
  );
};

export default AvailableAppointment;