import React from "react";
import { MdClose } from "react-icons/md";

// Modal Component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        ></div>
        <div className="relative bg-slate-800 rounded-lg shadow-xl max-w-md w-full p-6">
          {title && (
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-white">{title}</h3>
              <button
                aria-label="Close Icon"
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MdClose />
              </button>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};
