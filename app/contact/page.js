"use client";
import { useState } from 'react';
import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Student Information Form</h1>
      <FormPage />
    </div>
  );
}

const FormPage = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="flex">
      {/* Left Side Navigation */}
      <div className="w-1/4 bg-gray-100 p-6">
        <ul className="space-y-4">
          <li className={step === 1 ? 'font-bold text-blue-500' : ''}>Step 1: Basic Information</li>
          <li className={step === 2 ? 'font-bold text-blue-500' : ''}>Step 2: Academic Information</li>
          <li className={step === 3 ? 'font-bold text-blue-500' : ''}>Step 3: Terms and Conditions</li>
        </ul>
      </div>

      {/* Right Side Form */}
      <div className="w-3/4 p-6">
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Basic Information</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input type="text" className="w-full p-2 border" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full p-2 border" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone</label>
                <input type="tel" className="w-full p-2 border" />
              </div>
            </form>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Academic Information</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">School/College Name</label>
                <input type="text" className="w-full p-2 border" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Grade/Year</label>
                <input type="text" className="w-full p-2 border" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Major/Subjects</label>
                <input type="text" className="w-full p-2 border" />
              </div>
            </form>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Terms and Conditions</h2>
            <div className="mb-4">
              <p>Please read and accept the terms and conditions to proceed.</p>
              <div className="flex items-center mt-2">
                <input type="checkbox" className="mr-2" />
                <label className="text-gray-700">I agree to the terms and conditions</label>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-between">
          {step > 1 && (
            <button onClick={prevStep} className="px-4 py-2 bg-gray-300 text-gray-700">
              Previous
            </button>
          )}
          {step < 3 && (
            <button onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white">
              Next
            </button>
          )}
          {step === 3 && (
            <button className="px-4 py-2 bg-green-500 text-white">Submit</button>
          )}
        </div>
      </div>
    </div>
  );
};
