import React, { type ChangeEvent, type FormEvent } from "react";
import { useState, useRef } from "react";

interface ContactFormData {
  name: string;
  email: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you can handle the form submission, e.g., send data to an API
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <div>
          <label htmlFor="">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="">
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default ContactForm;
