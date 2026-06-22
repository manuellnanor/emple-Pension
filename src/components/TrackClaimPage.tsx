import { useState } from "react";
import type { FormEvent } from "react";

export default function TrackClaimPage() {
  const [policyNumber, setPolicyNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setMessage(
      policyNumber.trim()
        ? "Your request has been received. An emPLE claims advisor will provide the current claim status shortly."
        : "Please enter your policy number."
    );
  };

  return (
    <main className="bg-[#f3f5f9] font-sans text-gray-800">
      <section className="bg-[#fffdd8] pt-[150px] pb-20 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <span className="text-[13px] font-bold uppercase tracking-widest text-gray-500">Get Started</span>
          <h1 className="mt-8 text-[38px] font-extrabold leading-tight tracking-tight text-gray-900 sm:text-[52px]">
            Track a Claim
          </h1>
          <p className="mt-5 text-[14px] font-medium text-gray-500">
            There are some information we need to get started, please make sure you provide the right details.
          </p>
        </div>
      </section>

      <section className="min-h-[560px] py-20 md:py-24">
        <form onSubmit={handleSubmit} className="mx-auto max-w-xl px-6">
          <h2 className="text-[28px] font-extrabold tracking-tight text-gray-900 sm:text-[34px]">
            Policy Information
          </h2>
          <p className="mt-5 text-[14px] font-medium text-gray-500">
            Enter your complete policy number as shown on your insurance documents.
          </p>

          <label htmlFor="policy-number" className="mt-10 block text-[13px] font-medium text-gray-800">
            Phone Number
          </label>
          <input
            id="policy-number"
            type="text"
            value={policyNumber}
            onChange={(event) => setPolicyNumber(event.target.value)}
            placeholder="Enter policy number"
            className="mt-3 w-full border border-gray-200 bg-white px-4 py-4 text-[14px] text-gray-800 outline-none transition-colors focus:border-[#32B44A]"
          />

          <button
            type="submit"
            className="mt-8 w-full bg-[#32B44A] px-5 py-4 text-[15px] font-extrabold text-white transition-colors hover:bg-[#059669]"
          >
            Submit
          </button>

          {message && <p className="mt-5 text-[13px] font-medium text-[#052e16]">{message}</p>}
        </form>
      </section>
    </main>
  );
}
