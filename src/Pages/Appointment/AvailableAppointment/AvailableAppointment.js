import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, {  useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const { data: appointmentOptions = [] } = useQuery({
      queryKey: ["appointmentOptions"],
      queryFn: async()=> {
        const res = await fetch("http://localhost:5000/appointmentOptions");
        const data = await res.json();
        return data;
      }
    });
  

  return (
    <section className="my-20">
      <p className="text-center text-secondary font-bold">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appointmentOptions.map((option) => (
          <AppointmentOptions
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOptions>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;