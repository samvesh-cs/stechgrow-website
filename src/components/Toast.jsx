
import { useEffect } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";

export default function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const isSuccess = type === "success";

  return (
    <div
      role="status"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3
        rounded-xl border bg-black p-4 shadow-xl
        animate-toast-in ${
          isSuccess ? "border-green-200" : "border-red-200"
        }`}
    >
      {isSuccess ? (
        <CheckCircle className="text-green-600" size={24} />
      ) : (
        <XCircle className="text-red-600" size={24} />
      )}

      <p className="text-sm font-medium text-white">
        {message}
      </p>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close notification"
        className="ml-2 text-gray-500 hover:white-black"
      >
        <X size={18} />
      </button>
    </div>
  );
}
