import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment; //treatment == appoitnment options (Different Name)
  const date = format(selectedDate, "PP");
  const handalBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: name,
      slot,
      email,
      phone,
    };
    // console.log(booking);
    //if data saved successfull in server then clear setTreatment & display a toast
    setTreatment(null);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handalBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, idx) => (
                <option key={idx} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              name="email"
              type="text"
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <br />
            <input
              type="submit"
              value="Submit"
              className="w-full btn btn-accent"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;