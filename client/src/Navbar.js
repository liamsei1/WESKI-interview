import Form from "./Form";
import React from "react";
import logo from './logo.svg';
export default function Navbar() {
  
    return (
      <nav className="flex flex-row items-center	 w-full fixed top-[0.15rem] bg-blue-600 pt-7 pl-3 rounded-l border border-black shadow-lg flex-wrap item-center justify-center">
        <Form />
      </nav>

    )
  }
  