import React from "react";

const SectionContent = ({ sectionStyles, children }) => {
  return (
    <section className="py-12">
      <div className={`mx-auto max-w-[1400px] px-8 ${sectionStyles}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionContent;
