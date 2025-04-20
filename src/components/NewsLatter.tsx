import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setMessage(`Thanks for subscribing! We'll keep you updated.`);
      setEmail("");
    }, 2000);
  };

  return (
    <div className="max-w-sm w-full mx-auto p-4 backdrop-blur-md bg-white/10 shadow-sm border border-white/20 rounded-xl mt-5 no-download">
      <h2 className="text-base font-medium text-center text-black mb-2">
        Stay Updated 🚀
      </h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
         
          <input
            type="email"
            id="email"
            name="Email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-1.5 text-sm rounded-md text-gray-800 focus:ring-1 focus:ring-pink-500"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full text-sm py-1.5 rounded-lg ${
            isSubmitting ? "bg-gray-500" : "bg-pink-600 hover:bg-pink-700"
          } text-white font-medium transition`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Subscribe"}
        </button>
      </form>

      {message && (
        <p className="mt-2 text-center text-black-400 text-sm font-medium">
          {message}
        </p>
      )}
    </div>
  );
};

export default Newsletter;
