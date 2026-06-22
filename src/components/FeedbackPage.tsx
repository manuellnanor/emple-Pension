"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { X } from "lucide-react";

type FeedbackType = "compliment" | "complaint";

export default function FeedbackPage() {
  const [activeForm, setActiveForm] = useState<FeedbackType | null>(null);
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const closeForm = () => {
    setActiveForm(null);
    setFullName("");
    setContact("");
    setMessage("");
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!activeForm) return;

    const label = activeForm === "compliment" ? "Compliment" : "Complaint";
    const subject = encodeURIComponent(`emPLE Life ${label}`);
    const body = encodeURIComponent(
      [
        `Feedback type: ${label}`,
        `Name: ${fullName}`,
        `Email / Phone: ${contact}`,
        "",
        "Message:",
        message,
      ].join("\n")
    );

    window.location.href = `mailto:Infogh@emple.com.gh?subject=${subject}&body=${body}`;
    closeForm();
  };

  return (
    <main className="bg-[#f3f5f9] font-sans text-gray-800">
      <section className="relative h-[360px] w-full overflow-hidden bg-[#052e16] sm:h-[430px] md:h-[500px]">
        <img
          src="/assets/images/feedback-hero.png"
          alt="emPLE customer sharing feedback on phone"
          className="h-full w-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#3b220b]/25" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            <h1 className="max-w-xl text-[34px] font-extrabold leading-tight tracking-tight text-white sm:text-[48px] md:text-[56px]">
              Your feedback makes us chat with you better
            </h1>
          </div>
        </div>
      </section>

      <section className="min-h-[520px] px-6 py-16 text-center md:py-24">
        <h2 className="text-[36px] font-extrabold tracking-tight text-[#052e16] sm:text-[48px]">
          What would you like to do?
        </h2>

        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#052e16] text-[28px] font-extrabold text-white">
              1
            </div>
            <h3 className="mt-5 text-[26px] font-extrabold leading-tight text-[#052e16]">
              Give us a compliment
            </h3>
            <p className="mt-2 max-w-xs text-[16px] leading-6 text-gray-600">
              We love hearing from you and learning more about your good experience with us.
            </p>
            <button
              type="button"
              onClick={() => setActiveForm("compliment")}
              className="mt-6 inline-flex bg-[#145725] px-7 py-2.5 text-[13px] font-extrabold text-white transition-colors hover:bg-[#32B44A]"
            >
              Share a compliment &gt;&gt;
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#052e16] text-[28px] font-extrabold text-white">
              2
            </div>
            <h3 className="mt-5 text-[26px] font-extrabold leading-tight text-[#052e16]">
              Make a complaint
            </h3>
            <p className="mt-2 max-w-xs text-[16px] leading-6 text-gray-600">
              We&apos;re sorry you&apos;ve had a disappointing experience with us. We&apos;d love the chance to make it
              better.
            </p>
            <button
              type="button"
              onClick={() => setActiveForm("complaint")}
              className="mt-6 inline-flex bg-[#145725] px-7 py-2.5 text-[13px] font-extrabold text-white transition-colors hover:bg-[#32B44A]"
            >
              Submit a complaint &gt;&gt;
            </button>
          </div>
        </div>
      </section>

      {activeForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#021307]/70 px-4">
          <form onSubmit={handleSubmit} className="relative w-full max-w-lg bg-white p-7 shadow-2xl">
            <button
              type="button"
              onClick={closeForm}
              className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-gray-700"
              aria-label="Close feedback form"
            >
              <X size={20} />
            </button>

            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#32B44A]">
              {activeForm === "compliment" ? "Compliment" : "Complaint"}
            </span>
            <h2 className="mt-3 text-[26px] font-extrabold tracking-tight text-[#052e16]">
              {activeForm === "compliment" ? "Share a compliment" : "Submit a complaint"}
            </h2>
            <p className="mt-2 text-[13px] leading-6 text-gray-500">
              Share the details below and our team will review your feedback.
            </p>

            <div className="mt-7 space-y-4">
              <div>
                <label htmlFor="feedback-name" className="block text-[11px] font-bold uppercase tracking-widest text-gray-500">
                  Full Name
                </label>
                <input
                  id="feedback-name"
                  type="text"
                  required
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  className="mt-2 w-full border border-gray-200 px-4 py-3 text-[14px] outline-none focus:border-[#32B44A]"
                />
              </div>

              <div>
                <label htmlFor="feedback-contact" className="block text-[11px] font-bold uppercase tracking-widest text-gray-500">
                  Email or Phone
                </label>
                <input
                  id="feedback-contact"
                  type="text"
                  required
                  value={contact}
                  onChange={(event) => setContact(event.target.value)}
                  className="mt-2 w-full border border-gray-200 px-4 py-3 text-[14px] outline-none focus:border-[#32B44A]"
                />
              </div>

              <div>
                <label htmlFor="feedback-message" className="block text-[11px] font-bold uppercase tracking-widest text-gray-500">
                  Message
                </label>
                <textarea
                  id="feedback-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="mt-2 w-full resize-none border border-gray-200 px-4 py-3 text-[14px] outline-none focus:border-[#32B44A]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-[#145725] px-5 py-3 text-[13px] font-extrabold text-white transition-colors hover:bg-[#32B44A]"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </main>
  );
}
