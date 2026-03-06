import Image from 'next/image';

export default function About() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-10">
      <div className="mb-10 flex flex-col items-center gap-8 md:flex-row">
        <div className="px-4 md:w-1/2">
          <p className="mb-4">
            Skretcher is a project created by two second-year Front-End Development students at
            Noroff. The name Skretcher is a combination of our last names, reflecting the
            collaboration behind the project.
          </p>
          <p className="mb-4">
            Martin Fischer and Malin Skrettingland are both passionate about building functional and
            user-friendly web solutions. With a shared interest in development and design, we work
            together to create structured, scalable, and intuitive digital experiences.
          </p>
        </div>
        <Image
          src="/images/MoodImage.jpg"
          alt="Mood Image"
          width={600}
          height={400}
          className="h-auto w-full max-w-[600px] object-cover md:w-[45%] md:max-w-none md:shrink-0"
        />
      </div>
      <div className="mb-10 flex flex-col items-center gap-8 md:flex-row-reverse">
        <div className="px-4 md:w-1/2">
          <p className="mb-4">
            In this project, we have focused on building a clear and well-organised platform, with
            attention to functionality, reusable components, scalability, and the use of dark design
            patterns as part of the concept. The goal has been to create a system that is both
            technically structured and easy to navigate.
          </p>
          <p className="mb-4">
            Skretcher is still a work in progress and not yet a finished product. We see it as an
            evolving project and look forward to continuing to develop and improve it as we move
            forward in our studies.
          </p>
        </div>
        <Image
          src="/images/MoodImage02.jpg"
          alt="Mood Image"
          width={600}
          height={400}
          className="h-auto w-full max-w-[600px] object-cover md:w-[45%] md:max-w-none md:shrink-0"
        />
      </div>
    </main>
  );
}
