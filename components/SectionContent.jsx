import React from "react";

const SectionContent = ({ sectionStyles, children }) => {
  return (
    <section className="py-12">
      <div className={`mx-auto lg:max-w-5xl xl:max-w-7xl ${sectionStyles}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionContent;
