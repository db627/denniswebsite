
function AboutImg() {
    return (
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 py-16 px-8 flex flex-col md:flex-row items-center md:justify-center">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0"> {/* 30% width on medium and larger screens */}
          <img
            src="funny.jpg" // Replace with your image URL or path
            alt="About Me"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full md:w-2/3 text-center md:text-left md:pl-8">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I am a passionate developer with a strong background in web development and software engineering. I love creating efficient and visually appealing applications that provide great user experiences.
            My journey in tech started with a curiosity for solving complex problems, and over the years, I have honed my skills in various programming languages, frameworks, and design principles.
          </p>
        </div>
      </div>
    );
  }
  
  export default AboutImg;
  