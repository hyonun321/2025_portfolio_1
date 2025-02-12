"use client";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const preventTouch = (e: TouchEvent) => {
        e.preventDefault();
      };
      document.addEventListener("touchmove", preventTouch, { passive: false });
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("touchmove", preventTouch);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity duration-300">
      <div
        className="absolute inset-0 bg-black bg-opacity-60"
        onClick={onClose}
      ></div>

      <div
        className="
          relative bg-zinc-800 rounded-lg shadow-lg max-w-4xl w-full p-4
          transition-all duration-300 transform
          opacity-100 scale-100 p-auto
        "
      >
        <button
          onClick={onClose}
          className="absolute z-20 top-2 right-2 text-white hover:text-gray-300 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
