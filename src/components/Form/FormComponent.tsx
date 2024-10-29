// components/Form/FormComponent.tsx
'use client'
// components/Form/FormComponent.tsx
import { useState } from "react";
import { buttonClass, formClass} from "../../utils/ClassName";

type FormData = {
  name: string;
  email: string;
  phone: string;
  tickets: number;
  age: number;
};

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    tickets: 1,
    age: 0,
  });
  const [error, setError] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "tickets" || name === "age" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || formData.age <= 0) {
      setError("Please fill in all fields correctly.");
      return;
    }
    setError("");

    const payload = {
      data: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        tickets: formData.tickets,
        age: formData.age,
      },
    };

    try {
      const response = await fetch("YOUR_API_ENDPOINT_HERE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log("Success:", responseData);
      // Handle successful response (e.g., reset form or show success message)
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form className="w-[380px] mx-auto" onSubmit={handleSubmit}>
      <div className="mb-[16px]">
        <label className="block" htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className={formClass.input}
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-[16px]">
        <label className="block" htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className={formClass.input}
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-[16px]">
        <label className="block" htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className={formClass.input}
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-[16px]">
        <label className="block" htmlFor="tickets">Tickets:</label>
        <select
          id="tickets"
          name="tickets"
          className={formClass.input+' py-3 px-3'}
          value={formData.tickets}
          onChange={handleInputChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className="mb-[16px]">
        <label className="block" htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          className={formClass.input}
          value={formData.age}
          onChange={handleInputChange}
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button className={buttonClass.submit + ' mt-[16px]'} type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
