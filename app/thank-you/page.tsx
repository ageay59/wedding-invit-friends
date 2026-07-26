"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after 3 seconds
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      className="h-screen flex flex-col items-center justify-center px-8"
      style={{
        backgroundImage: `url(/slide_9.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/50 p-8 rounded-lg text-center max-w-md">
        <h1 className="text-3xl text-white font-ovo uppercase mb-4">
          Thank You!
        </h1>
        <p className="text-white font-legan mb-4">
          Your RSVP has been submitted successfully. We appreciate your response!
        </p>
        <p className="text-white/70 text-sm font-legan">
          Redirecting you back to the invitation...
        </p>
      </div>
    </div>
  );
}
