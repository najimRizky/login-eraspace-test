'use client';

import { FormEvent } from 'react';
import GoogleIcon from '../icons/GoogleIcon';
export const LoginForm = () => {
  /**
   * Functionality
   * =============
   * Fill the missing code
   */

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    /**
     * Functionality
     * =============
     * Fill the missing code
     */
  };

  return (
    <>
      <div className="flex justify-between items-center w-full">
        <h1 className="font-bold text-lg">Masuk</h1>
        <span
          /**
           * Functionality
           * =============
           * Fill the missing string literal
           */
          className={`px-2 py-1 text-xs border border-red-200 bg-red-100 rounded-md opacity-0 ${undefined}`}
        >
          {/* 
            Functionality
            =============
            fill the missing value 
          */}
        </span>
      </div>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label
            className="text-xs font-semibold opacity-70"
            htmlFor="identifier"
          >
            Email
          </label>
          <input
            // Functionality
            // =============
            // fill the missing attributes
            id="identifier"
            type='text'
            placeholder="Masukkan emailmu"
            className="border border-gray rounded-lg text-xs p-2"
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-xs font-semibold opacity-70"
            htmlFor="password"
          >
            Password
          </label>
          <input
            // Functionality
            // =============
            // fill the missing attributes
            id="password"
            type='text'
            placeholder="Masukkan passwordmu"
            className="border border-gray rounded-lg text-xs p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-[#003a77] rounded-md w-full py-2 text-white font-bold text-xs"
        >
          Masuk
        </button>
      </form>
      <div className="flex justify-center gap-3 items-center">
        <div className="bg-gray-300 w-5 h-[0.1px]" />
        <span className="text-xs opacity-60">atau dengan</span>
        <div className="bg-gray-300 w-5 h-[0.1px]" />
      </div>
      <button className="border border-gray rounded-md w-full text-xs py-2 flex justify-center items-center gap-2">
        <GoogleIcon/>
        <span className="text-xs opacity-60 font-bold">Google</span>
      </button>
    </>
  );
};
