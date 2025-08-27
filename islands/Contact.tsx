import BorderButtonAnimated from "../components/BorderButtonAnimated.tsx";

import { useState } from "preact/hooks";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;

    const formData = new FormData(form);
    setName(formData.get("name") as string);
    setEmail(formData.get("email") as string);
    setMessage(formData.get("message") as string);
    form.reset();
  };

  return (
    <section
      id="contact"
      class="py-12 h-screen justify-center items-center flex"
    >
      <div class="max-w-screen-lg mx-auto w-1/2 px-4 flex flex-col items-center text-center al mb-8">
        <h2 class="text-3xl font-bold mb-8">Contact Me</h2>
        <p class="mb-4">
          Feel free to reach out via email or connect on LinkedIn!
        </p>
        <form
          class="flex flex-col items-stretch w-1/2 text-black"
          onSubmit={handleSubmit}
        >
          <input
            class="flex mb-2 font-medium p-4 border"
            placeholder="Name"
            type="text"
          />
          <input
            class="flex mb-2 font-medium p-4 border"
            placeholder="Email"
            type="email"
          />
          <textarea
            class="h-52 flex mb-2 font-medium p-4 border"
            placeholder="Message"
            type="text"
          />
          <button type="submit">
            <BorderButtonAnimated text="Send Message" />
          </button>
        </form>
      </div>
    </section>
  );
}
