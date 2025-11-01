import React from "react";

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6  md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-center">
            About <span className=" text-blue-600">NxtRole.AI</span>
          </h2>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            <strong>NxtRole.AI</strong> is an AI-powered career guidance and
            learning recommendation platform designed to help students and
            professionals make smarter career decisions.
          </p>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Our mission is to bridge the gap between education and industry
            needs by providing personalized career recommendations, course
            suggestions, and skill roadmaps — all powered by data and machine
            learning.
          </p>
          <p className="text-gray-700  text-lg leading-relaxed">
            Whether you’re a student exploring your path or a professional
            aiming for your next big role, NxtRole.AI empowers you to grow
            confidently with clear direction and curated learning resources.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
