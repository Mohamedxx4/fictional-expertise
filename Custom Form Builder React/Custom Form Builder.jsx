import React, { useState } from "react";
import "./CustomFormBuilder.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img
        src="https://www.feostech.com/_next/static/media/Logo_lg.1de44910.svg"
        alt="logo"
      />
      <ul>
        <li><a href="#home">Home</a></li>
        <li className="dropdown">
          <a href="#features">Features</a>
          <div className="dropdown-content">
            <a href="#">Feature 1</a>
            <a href="#">Feature 2</a>
            <a href="#">Feature 3</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#account">Account</a>
          <div className="dropdown-content">
            <a href="#">Personal Details</a>
            <a href="#">Add Account</a>
            <a href="#">Log out</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

const Toolbox = ({ onDragStart }) => {
  const elements = [
    "Heading",
    "Description",
    "Full Name",
    "Contact Information",
    "Textbox",
    "Radio Group",
    "Checkbox Group",
    "Short Answer",
    "Long Answer",
    "Email",
    "File Upload",
    "Button",
  ];

  return (
    <div id="toolbox">
      <h3>Question Types</h3>
      {elements.map((type) => (
        <p
          key={type}
          draggable
          className="drag-item"
          onDragStart={(e) => onDragStart(e, type)}
        >
          {type}
        </p>
      ))}
    </div>
  );
};

const FormArea = ({ onDrop, onDragOver, formElements }) => {
  return (
    <div id="form-area" onDrop={onDrop} onDragOver={onDragOver}>
      <h3>Form Area</h3>
      <p>Drag items here to build your form</p>
      <form>{formElements}</form>
    </div>
  );
};

const CustomFormBuilder = () => {
  const [formElements, setFormElements] = useState([]);

  const handleDragStart = (event, type) => {
    event.dataTransfer.setData("type", type);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const type = event.dataTransfer.getData("type");
    setFormElements([...formElements, <div key={formElements.length}>{type}</div>]);
  };

  return (
    <div className="tool-plus-form">
      <Navbar />
      <Toolbox onDragStart={handleDragStart} />
      <FormArea onDrop={handleDrop} onDragOver={(e) => e.preventDefault()} formElements={formElements} />
    </div>
  );
};

export default CustomFormBuilder;
