import React from "react";

const About = () => {
  return (
    <div className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Trusted by developers across the world
          </h2>
          <p className="text-3xl py-6 text-gray-500">
            Lorem ipsum dolar sit amet consectetur, adipiscing elite. Comque
            asperiores earum placeat veritatis dignissimos itaque
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 px-2 text-center shadow-xl">
          <div className="border py-8 rounded-xl">
            <p className="text-6xl font-bold text-indigo-600">100%</p>
            <p className="text-gray-400 mt-2">Completion</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">24/7</p>
            <p className="text-gray-400 mt-2">Devlivery</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100k</p>
            <p className="text-gray-400 mt-2">Transaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
