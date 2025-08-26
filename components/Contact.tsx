import BorderButtonAnimated from "./BorderButtonAnimated.tsx";

class ContactFormData {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const ContactForm = new ContactFormData();
  const handleChangeName = (event: Event) => {
    const target = event.target as HTMLInputElement;
    ContactForm.name = target.value;
  };
  const handleChangeEmail = (event: Event) => {
    const target = event.target as HTMLInputElement;
    ContactForm.email = target.value;
  };
  const handleChangeMessage = (event: Event) => {
    const target = event.target as HTMLTextAreaElement;
    ContactForm.message = target.value;
  };

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    console.log(ContactForm);
    // Here you can add logic to send the form data to a server or an email service
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
          id="contactForm"
          class="flex flex-col items-stretch w-1/2 text-black"
        >
          <input
            class="flex mb-2 font-medium p-4 border"
            placeholder="Name"
            type="text"
            onChange={handleChangeName}
          />
          <input
            class="flex mb-2 font-medium p-4 border"
            placeholder="Email"
            type="email"
            onChange={handleChangeEmail}
          />
          <textarea
            class="h-52 flex mb-2 font-medium p-4 border"
            placeholder="Message"
            type="text"
            onChange={handleChangeMessage}
          />
          <div class="flex justify-end">
            <BorderButtonAnimated text="Submit" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </section>
  );
}
