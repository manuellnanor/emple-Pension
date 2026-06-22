import { Download } from "lucide-react";

export default function MakeClaimPage() {
  return (
    <main className="bg-white font-sans text-gray-800">
      <section className="bg-[#fffdd8] pt-[150px] pb-20 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <span className="text-[13px] font-bold uppercase tracking-widest text-gray-500">Get Started</span>
          <h1 className="mt-8 text-[38px] font-extrabold uppercase leading-tight tracking-wide text-gray-900 sm:text-[52px]">
            Our Withdrawal Process
          </h1>
          <p className="mt-5 text-[14px] font-medium text-gray-500">
            There are some information we need to get started, please make sure you provide the right details.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-[30px] font-extrabold tracking-tight text-[#052e16] sm:text-[38px]">
            How to process a withdrawal
          </h2>

          <div className="mx-auto mt-14 flex h-16 w-16 items-center justify-center rounded-full bg-[#052e16] text-[28px] font-extrabold text-white">
            1
          </div>

          <div className="mx-auto mt-14 max-w-sm text-left">
            <h3 className="text-center text-[21px] font-extrabold leading-snug text-gray-900">
              How to Initiate Your Withdrawal Request
            </h3>

            <div className="mt-8 space-y-6 text-[14px] font-medium leading-7 text-gray-500">
              <div>
                <p className="font-bold text-gray-700">1. Pick up a withdrawal form</p>
                <p className="mt-2">Get a withdrawal form from your employer, any emPLE branch, or the Downloads page.</p>
              </div>
              <div>
                <p className="font-bold text-gray-700">2. Complete and sign the form</p>
                <p className="mt-2">Fill in all required sections and sign where indicated.</p>
              </div>
              <div>
                <p className="font-bold text-gray-700">3. Employer endorsement</p>
                <p className="mt-2">Submit the form to your employer for official endorsement or stamping, where applicable.</p>
              </div>
              <div>
                <p className="font-bold text-gray-700">4. Send documents to us</p>
                <p className="mt-2">Submit the endorsed form with a clear copy of your Ghana Card and supporting documents.</p>
              </div>
              <div>
                <p className="font-bold text-gray-700">5. Withdrawal processing</p>
                <p className="mt-2">Once your documents are received, eligibility checks and processing begin.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-gray-100 pt-10">
            <button
              type="button"
              className="inline-flex items-center gap-4 bg-[#052e16] px-8 py-3.5 text-[14px] font-extrabold text-white transition-colors hover:bg-[#32B44A]"
            >
              Download Withdrawal Form
              <span className="flex h-6 w-6 items-center justify-center bg-[#32B44A] text-[#052e16]">
                <Download size={14} />
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
