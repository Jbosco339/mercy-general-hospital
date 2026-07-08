function ContactForm() {
  return (
    <form className="bg-white rounded-xl shadow-lg p-8">

      <h2 className="text-3xl font-bold mb-8">
        Send Us a Message
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="Full Name"
          className="border rounded-lg p-4"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="border rounded-lg p-4"
        />

      </div>

      <input
        type="text"
        placeholder="Subject"
        className="border rounded-lg p-4 w-full mt-6"
      />

      <textarea
        rows="6"
        placeholder="Message"
        className="border rounded-lg p-4 w-full mt-6"
      />

      <button
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg"
      >
        Send Message
      </button>

    </form>
  );
}

export default ContactForm;