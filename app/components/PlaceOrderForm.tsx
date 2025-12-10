"use client";
import { useState } from "react";
import Modal from "react-modal";
import tw from "twin.macro";
import { useAppSelector, useAppDispatch } from "app/lib/hooks";
import { clearCart } from "app/lib/features/cartSlice"; // Update path as needed

// Tailwind Styled Components
const Card = tw.div`bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto`;
const CardHeader = tw.h2`text-lg font-bold text-gray-900 mb-4`;
const CardInput = tw.input`w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300 mb-2 text-sm font-medium`;
const CardButton = tw.button`bg-red-500 text-white font-semibold px-4 py-2 rounded-lg mt-4 hover:bg-green-600 w-full`;

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
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("Tiruchirappali");
  const state = "Tamil Nadu"; // Default state
  const [postalCode, setPostalCode] = useState("");
  const country = "🇮🇳 India"; // Default country with flag
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();

  const sendOrderToWhatsApp = () => {
    const phoneNumber = "917373824646"; // Replace with your WhatsApp number
    let orderMessage = `🛒 *New Order*\n\n`;

    cartItems.forEach((item, index) => {
      // Display title with protein variant if available
      const displayTitle = item.selectedProtein
        ? `${item.title} (${item.selectedProtein}${
            item.selectedSize && item.selectedSize !== "regular"
              ? ` - ${item.selectedSize}`
              : ""
          })`
        : item.title;

      orderMessage += `${index + 1}. *${displayTitle}* - ₹${item.price} x ${
        item.quantity
      } (₹${Number(item.price) * item.quantity})\n`;
    });

    orderMessage += `\n💰 *Total:* ₹${cartItems.reduce(
      (acc, item) => acc + Number(item.price) * item.quantity,
      0
    )}`;
    orderMessage += `\n👤 *Name:* ${name}`;
    orderMessage += `\n📞 *Phone:* ${phone}`;
    orderMessage += `\n📍 *Address:*`;
    orderMessage += `\n   Address Line 1: ${addressLine1}`;
    if (addressLine2) {
      orderMessage += `\n   Address Line 2: ${addressLine2}`;
    }
    orderMessage += `\n   City: ${city}`;
    orderMessage += `\n   State/Province: ${state}`;
    orderMessage += `\n   Postal Code/ZIP: ${postalCode}`;
    orderMessage += `\n   Country: ${country}`;

    const encodedMessage = encodeURIComponent(orderMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    dispatch(clearCart()); // 🧹 clear the cart
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
        <CardInput
          type="text"
          placeholder="Address Line 1"
          value={addressLine1}
          onChange={(e) => setAddressLine1(e.target.value)}
          className="mt-2"
        />
        <CardInput
          type="text"
          placeholder="Address Line 2 (Optional)"
          value={addressLine2}
          onChange={(e) => setAddressLine2(e.target.value)}
          className="mt-2"
        />
        <CardInput
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="mt-2"
        />
        <CardInput
          type="text"
          placeholder="Postal Code/ZIP"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          className="mt-2"
        />
        <div className="mt-2 flex items-center gap-2 text-sm text-gray-700">
          <span>State:</span>
          <span className="font-medium">{state}</span>
        </div>
        <div className="mt-2 flex items-center gap-2 text-sm text-gray-700">
          <span>Country:</span>
          <span className="font-medium">{country}</span>
        </div>
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
