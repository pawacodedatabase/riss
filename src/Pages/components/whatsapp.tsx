import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon: React.FC = () => {
  return (
    <a
      href="https://wa.me/<YOUR_PHONE_NUMBER>" // Replace <YOUR_PHONE_NUMBER> with your WhatsApp number (include country code, e.g., 1234567890)
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[420px] right-2 bg-[#000] text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
    >
      <FaWhatsapp/>
    </a>
  );
};

export default WhatsAppIcon;
