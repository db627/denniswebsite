export default function Contact(){
  return (
    <section className="justify-center align-middle font-mono bg-zinc-700 " style={{height: '40vh'}}>
      <div className="px-6  pt-20 pb-5 text-center text-white justify-center ">
        <h1 id="contact " className="text-5xl font-mono m-3">
          Contact Me
        </h1>
        <p className="text-xl">
          For all questions or concerns please email me at
          dennisboguslavskiy@gmail.com or contact me on my{" "}
          <a
            className=" text-gray-300 hover:underline"
            href="https://www.linkedin.com/in/dennis-boguslavskiy/"
          >
            LinkedIn
          </a>{" "}
          page.
        </p>
      </div>
    </section>
  );
}