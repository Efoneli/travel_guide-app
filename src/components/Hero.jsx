import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="images/bg.jpg"
        alt="mic"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col  text-white p-4">
          <h1 className="text-4xl font-bold">Find your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With Weekaway</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            nesciunt eveniet odit. Alias provident sunt tempore debitis harum
            ipsam dolores doloribus voluptatum commodi quisquam numquam
            explicabo dolorum fugiat sequi consectetur recusandae optio deleniti
            obcaecati aliquam odit, maiores amet porro corrupti! Perferendis
            voluptates totam cumque esse repellat eos ex accusamus itaque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
