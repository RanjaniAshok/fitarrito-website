"use client";
import { useState } from "react";
import Modal from "react-modal";
import tw from "twin.macro";
import { useAppSelector } from "app/lib/hooks";

// Tailwind Styled Components
const Card = tw.div`bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto`;
const CardHeader = tw.h2`text-lg font-bold text-gray-900 mb-4`;
const CardInput = tw.input`w-full border border-gray-300 p-2  focus:ring focus:ring-blue-300 mb-2 text-sm font-medium`;
const CardButton = tw.button`bg-red-500 text-white font-semibold px-4 py-2 rounded-lg mt-4 hover:bg-green-600 w-full`;
const CardTextarea = tw.textarea`w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300 resize-none h-24 text-sm font-medium`;

const appRoot =
  typeof document !== "undefined"
    ? document.getElementById("__next") || document.body
    : undefined; // Required for accessibility
interface orderModalProps {
  isOpen: boolean;
  setIsModalOpen: (val: boolean) => void;
}
export default function OrderModal({
  isOpen,
  setIsModalOpen,
}: orderModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const sendOrderToWhatsApp = () => {
    const phoneNumber = "918508936456"; // Replace with your WhatsApp number
    let orderMessage = `🛒 *New Order*\n\n`;

    cartItems.forEach((item, index) => {
      orderMessage += `${index + 1}. *${item.title}* - ₹${item.price} x ${
        item.quantity
      } (₹${Number(item.price) * item.quantity})\n`;
    });

    orderMessage += `\n💰 *Total:* ₹${cartItems.reduce(
      (acc, item) => acc + Number(item.price) * item.quantity,
      0
    )}`;
    orderMessage += `\n👤 *Name:* ${name}`;
    orderMessage += `\n📞 *Phone:* ${phone}`;
    orderMessage += `\n📍 *Address:* ${address}`;

    const encodedMessage = encodeURIComponent(orderMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    setIsModalOpen(false); // Close modal
  };

  return (
    <Modal
      isOpen={isOpen}
      appElement={appRoot}
      onRequestClose={() => setIsModalOpen(false)}
      className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto outline-none z-40"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-5"
    >
      <Card>
        <CardHeader>Enter Your Details</CardHeader>
        <CardInput
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <CardInput
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-2"
        />
        <CardTextarea
          placeholder="Delivery Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mt-2"
        />
        <CardButton onClick={sendOrderToWhatsApp}>Submit & Order</CardButton>
        <button
          onClick={() => setIsModalOpen(false)}
          className="text-red-500 mt-3 underline w-full text-center"
        >
          Cancel
        </button>
      </Card>
    </Modal>
  );
}
