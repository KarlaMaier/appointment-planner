import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  // Local state variables for contact info and duplicate check
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [duplicateName, setDuplicateName] = useState(false);

  // Effect to check for duplicate name whenever 'name' changes
  useEffect(() => {
    if (contacts.some(contact => contact.name === name)) {
      setDuplicateName(true);
    } else {
      setDuplicateName(false);
    }
  }, [name, contacts]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for duplicates
    if (!duplicateName) {
      // Add contact
      addContact(name, phoneNumber, email);
      // Clear form data
      setName("");
      setPhoneNumber("");
      setEmail("");
      // Reset duplicate name state
      setDuplicateName(false);
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          email={email}
          setEmail={setEmail}
          onSubmit={handleSubmit}
          duplicateName={duplicateName}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
      </section>
    </div>
  );
};
