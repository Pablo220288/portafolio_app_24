import Form from "@/components/Form";
import React from "react";

const Contact = () => {
  return (
    <section className="py-12">
      <div className="px-8 mx-auto max-w-xl lg:max-w-6xl">
        <div className="grid lg:grid-cols-2 pt-12 mb-6 lg:mb-24 gap-4">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Hello
            </div>
            <h1 className="h1 max-w-md mb-8">Let's work together.</h1>
            <p className="subtitle max-w[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              laudantium odio autem consectetur reprehenderit libero, dolorem
              iusto inventore qui voluptatibus amet sapiente adipisci beatae
              minima pariatur accusamus odit fuga saepe?
            </p>
          </div>
          <div className="lg:mt-24">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
