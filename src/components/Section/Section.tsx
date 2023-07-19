import React from "react";

type SectionProps = {
  id: string;
  title: string;
  body: string;
  module?: React.JSX.Element;
};

const Section = ({ id, title, body, module }: SectionProps) => {
  let paragraphs: string[] = [];
  if (body.includes("\\n")) {
    paragraphs = body.split("\\n");
  }

  return (
    <section id={id} className="flex flex-col gap-4 text-slate-300">
      <div className="">
        <h1 className="relative flex text-3xl leading-none text-white">
          {title}
        </h1>
        {body ? (
          <>
            <br />
            <p>
              {paragraphs.length > 0
                ? paragraphs.map((line: string) => (
                    <>
                      {line}
                      <br />
                      <br />
                    </>
                  ))
                : body}
            </p>
          </>
        ) : null}
      </div>
      {module ? module : null}
    </section>
  );
};

export default Section;
