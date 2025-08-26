import BorderButtonAnimated from "./BorderButtonAnimated.tsx";

export default function Contact() {
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
          action="/api/contact"
          method="POST"
          class="flex flex-col items-stretch w-1/2 text-black"
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
          <div class="flex justify-end">
            <button type="submit">
              <BorderButtonAnimated text="Send Message" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
