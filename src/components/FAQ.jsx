import React from "react";

const FAQ = ({title, content}) => {
  return (
    <>
            <h2 className="text-3xl font-bold my-4 text-primary">
                {title}
            </h2>
            <p>
            {content}
            </p>
    </>
  );
};

export default FAQ;
