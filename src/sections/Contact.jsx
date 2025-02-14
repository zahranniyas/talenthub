"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const formSchema = z.object({
  fullName: z.string(),
  emailAddress: z.string().email(),
  address: z.string(),
  city: z.string(),
  phone: z.string(),
  dob: z.string().date(),
  gender: z.enum(["male", "female"]),
  qualifications: z.string(),
  courses: z.array(z.string()),
});

const Contact = () => {
  // Define the form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      address: "",
      city: "",
      phone: +94,
      dob: "",
      gender: "",
      qualifications: "",
      courses: [""],
    },
  });

  const [submitted, setSubmitted] = useState(false);

  // Submit handler
  function onSubmit(values) {
    console.log(values);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  }

  return (
    <section className="flex bg-redTheme text-white flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-12">
      {/* Left Content */}
      <div className="text-center flex flex-col items-center md:items-start md:text-left max-w-xl">
        <div className="relative">
          <h1 className="font-bold relative z-20 text-3xl">Contact Us</h1>
          <div
            className={`absolute z-10 left-[-8px] top-0 w-[100px] h-[35px] bg-[#4d0215] rounded-lg rotate-[-8deg]`}
          ></div>
        </div>
        <p className="my-4 text-xs md:text-base">
          Got a question about Talent Hub or our services? Reach out to us via
          the details below or by filling the form
        </p>
        <div className="flex flex-col gap-1 md:text-base text-sm">
          <div className="flex gap-2 items-center">
            <FaPhone />
            <p>+94 72 127 5281 (during office hours – 9am - 5pm)</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaLocationDot />
            <p>658/70, Mahawela Gardens, Dematagoda, Colombo-09</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaEnvelope />
            <p>talenthub101@gmail.com</p>
          </div>
          <div className="flex gap-4 mt-5 items-center cursor-pointer">
            <a href="https://www.facebook.com/talenthub101">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/talenthub/?hl=en">
              <FaInstagram />
            </a>
            <a href="https://shorturl.at/yfiir">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full md:w-1/2 max-sm:mt-10 flex max-sm:justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.59263875382!2d79.87959149999999!3d6.939191199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259a8e1f40bfd%3A0xc243481113fd8cc4!2sTalent%20Hub!5e0!3m2!1sen!2slk!4v1739546801921!5m2!1sen!2slk"
          width="100%"
          height="375"
          style={{ border: 0, borderRadius: 10 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
