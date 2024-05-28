// "use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div
        className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#074368] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"
      ></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <a href="https://github.com/av0907/React" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/aditya-vishnu-oruganti/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </a>
        </div>
      </div>
      <div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="text-white block mb-2 text-sm font-medium"
          >
            My Email
          </label>
          <input
            type="text"
            id="email"
            value="vishnuaditya3@gmail.com"
            
            readOnly
            className="bg-[#18191E] border border-[#074368] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
        </div>
      </div>
    </section>
  );
};

export default EmailSection;

