"use client";

import Script from "next/script";
import { useEffect } from "react";

const Razorpay: React.FC<any> = ({
  keyId,
  currency = "INR",
  verifyFunction,
  setOpen,
  orderId = "",
}) => {
  const processPayment = async () => {
    if (!orderId) {
      setOpen(false);
      return null;
    }

    const options = {
      key: keyId,
      currency: currency,
      order_id: orderId,
      handler: async function (response: any) {
        await verifyFunction(
          response?.razorpay_payment_id,
          response?.razorpay_order_id,
          response?.razorpay_signature,
          true
        );
      },
      theme: {
        color: "#3399cc",
        // color: "#d97706",
      },
    };

    const paymentObject = new window.Razorpay(options);

    paymentObject.on("payment.failed", function (response: any) {
      alert(response.error.description);
      setOpen(false);
    });

    paymentObject.open();
  };

  useEffect(() => {
    setTimeout(() => {
      processPayment();
    }, 2000);
  }, []);

  return (
    <Script
      id="razorpay-checkout-js"
      src="https://checkout.razorpay.com/v1/checkout.js"
    />
  );
};

export default Razorpay;
