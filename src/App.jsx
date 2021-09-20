import { nanoid } from "nanoid";
import React, { useState } from "react";
import FormBuilder from "./components/FormBuilder";

const filds = [
  {
    id: nanoid(),
    name: "firstName",
    label: "Enter your firstName",
    type: "text",
    placeholder: "FirstName",
  },
  {
    id: nanoid(),
    name: "lastName",
    label: "Enter your lastName",
    type: "text",
    placeholder: "LastName",
  },
  {
    id: nanoid(),
    name: "age",
    label: "Enter your Age",
    type: "number",
    placeholder: "Age",
    range: {
      min: "20",
      max: "100",
    },
  },
  {
    id: nanoid(),
    name: "nationalCode",
    label: "Enter your NationalCode",
    type: "number",
    placeholder: "nationalCode",
  },
  {
    id: nanoid(),
    name: "dateOfBirth",
    label: "Emter your Date of birth",
    type: "date",
    placeholder: "Date of birth",
  },
  {
    id: nanoid(),
    name: "Yes",
    type: "checkbox",
    label: "Do you : Yes",
  },
  {
    id: nanoid(),
    name: "No",
    type: "checkbox",
    label: "Do you No",
  },
  {
    id: nanoid(),
    name: "No",
    type: "checkbox",
    label: "Do you No",
  },
  {
    id: nanoid(),
    name: "No",
    type: "checkbox",
    label: "Do you No",
  },
  {
    id: nanoid(),
    name: "No",
    type: "checkbox",
    label: "Do you No",
  },
];

function App() {
  return (
    <div>
      <FormBuilder filds={filds} submit />
    </div>
  );
}

export default App;
