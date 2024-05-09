"use client";

import Image from "next/image";
import React, { useState } from "react";

import { IoMailUnread } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";

const ContactForm = () => {
 {/* const [subject, setSubject] = useState("");
const [body, setBody] = useState(""); */}
  return (
    <div id="contact" className="flex justify-center py-20 relative z-50">
      <div className=" backdrop-blur-lg rounded-lg  px-20 max-md:px-10 py-20 ">
        <div className="">
          <div className="flex justify-center">
            <Image
              src="/dp.jpeg"
              alt="Sharath S Poojari"
              width={150}
              height={150}
              className="w-40 h-40 rounded-full"
            />
          </div>
          <p className=" text-center title-text">Sharath S Poojari</p>
          <p className="descriptive-text text-center">
            This mail will send to{" "}
            <a href="mailto:praveentu9@gmail.com">
            praveentu9@gmail.com
            </a>
          </p>
        </div>

        <div className="flex justify-center">
         
        </div>
        <div className=" w-full h-40   z-50 relative flex text-3xl ">
          <a
            href="tel:9148882903"
            className="w-1/2 group text-center hover:backdrop-brightness-90 text-gray-400 flex-col hover:text-gray-100 flex justify-center items-center "
          >
            <PiPhoneCallFill className=" w-10 h-10 p-1 text-sky-500" />
            <p className="w-40 h-0.5  float-right rounded-full bg-sky-500 my-2"></p>
          </a>
          <a
            href="mailto:praveentu9@gmail.com"
            className="w-1/2 group text-center hover:backdrop-brightness-90 text-gray-400 flex-col hover:text-gray-100 flex justify-center items-center"
          >
            <IoMailUnread className=" w-10 h-10 p-1 text-sky-500" />
            <p className="w-40 h-0.5  float-right rounded-full bg-sky-500 my-2"></p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
