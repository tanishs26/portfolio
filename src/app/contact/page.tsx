"use client"
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Subheading from "@/components/Subheading";
import React, { useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || formData.name.trim() === "") {
      toast.error("Please enter your name");
      return;
    }
    if (!formData.email || formData.email.trim() === "") {
      toast.error("Please enter your email");
      return;
    }
    if (!formData.message || formData.message.trim() === "") {
      toast.error("Please enter your message");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        toast.success("Successfully send!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong!");
      }
    } catch (e) {
      toast.error("Network error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container
      className="min-h-screen pt-15 md:pt-20 md:pb-10 border-x-1 cursor-none
    dark:bg-[#171717]
    border-neutral-300 dark:border-neutral-700 divide-y-2 divide-neutral-200 dark:divide-neutral-800 text-gray-100 "
    >
      <div className="px-4 py-10">
        <Heading>Let’s Collaborate</Heading>
        <Subheading>
          I’m open to full-time roles as well as freelance projects. Reach out
          to me if you’d like to discuss my work or explore a potential
          collaboration or to just say a Hii
        </Subheading>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full px-4 pt-8 md:w-[60%] mx-auto"
      >
        <div className="text-primary dark:text-primary flex flex-col">
          <label htmlFor="name" className="text-md">
            Full name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            type="text"
            placeholder="Elon musk"
            className="px-2 py-1 outline-none rounded-lg focus:ring-2 mt-2 shadow-input/10 focus:ring-primary dark:focus:ring-primary"
          />
        </div>

        <div className="text-primary dark:text-primary flex flex-col mt-5">
          <label htmlFor="email" className="text-md">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            placeholder="elonmusk@spacex.com"
            className="px-2 py-1 outline-none rounded-lg focus:ring-2 mt-2 shadow-input/10 focus:ring-primary dark:focus:ring-primary"
          />
        </div>
        <div className="text-primary dark:text-primary flex flex-col mt-5">
          <label htmlFor="message" className="text-md">
            Message
          </label>
          <textarea
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            name="message"
            id="message"
            placeholder="You are ridiculously awesome"
            rows={4}
            className="px-2  py-1 outline-none rounded-lg focus:ring-2 mt-2 shadow-input/10 focus:ring-primary dark:focus:ring-primary break-words text-wrap resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-5 rounded-md  shadow-input/20   font-medium active:scale-105 px-5 py-2 cursor-none text-neutral-100 dark:text-neutral-400 bg-neutral-700  dark:bg-neutral-800 "
        >
          Send
        </button>
      </form>
    </Container>
  );
};

export default Page;
