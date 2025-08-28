export default function About() {
  return (
    <div
      id="about"
      class="px-4 py-8 bg-white dark:bg-gray-900 mx-auto scroll-mt-10 md:-scroll-mt-0 min-h-screen max-h-min justify-center items-center flex flex-col md:flex-row"
    >
      <div class=" md:w-1/2 flex justify-center items-center">
        <section class="max-w-screen-md min-w-48 mx-10">
          <h2 class="text-3xl font-bold mb-4 text-center">About Me</h2>
          <p class="text-lg mb-4">
            I'm an IT professional with a passion for technology and
            programming. I enjoy learning new skills and working on various
            projects in my free time. I am always eager to take on new
            challenges and expand my knowledge in the field of IT and software
            development. I enjoy problem-solving and working on projects that
            allow me to utilize my skills and creativity. When I'm not at my
            computer, I enjoy working on DIY projects and spending time with my
            family.
          </p>
        </section>
      </div>
      <section class="min-w-fit mb-12 text-center grid grid-cols-2 gap-4">
        <img
          src="/plane.jpg"
          alt="Plane ride with my uncle"
          class="max-h-48 md:ml-24 rounded-full mx-auto"
        />
        <img
          src="/ballgame.jpeg"
          alt="Going to a ballgame with my mom"
          class="max-h-48 md:mr-24 rounded-full mx-auto"
        />
        <img
          src="/christmas.jpeg"
          alt="Celebrating Christmas with my mom and cat (tippy)"
          class="max-h-48 md:mr-24 rounded-full mx-auto"
        />
        <img
          src="/escaperoom.jpeg"
          alt="At an escape room with my family"
          class="max-h-48 md:ml-24 rounded-full mx-auto"
        />
        <img
          src="/tigerbounce.jpeg"
          alt="At Tiger Bounce with my nephew"
          class="max-h-48 rounded-full mx-auto"
        />
        <img
          src="/nephewsbirthday.jpeg"
          alt="Celebrating my nephew's 3rd birthday"
          class="max-h-48 rounded-full mx-auto"
        />
      </section>
    </div>
  );
}
