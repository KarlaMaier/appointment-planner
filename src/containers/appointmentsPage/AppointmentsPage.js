import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, addAppointment }) => {
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState(""); // Ensure setPhone is defined

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      title,
      contact,
      date,
      time,
      phone
    };
    addAppointment(newAppointment);
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
    setPhone(""); // Reset phone state after submission
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          phone={phone} // Pass phone state and setter
          setPhone={setPhone} // Pass setPhone function
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointments} />
      </section>
    </div>
  );
};
