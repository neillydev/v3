import React from "react";

type SectionProps = {
  id: string;
  title: string;
  body: string;
};

const Section = ({ id, title, body }: SectionProps) => {
  let paragraphs: string[] = [];
  if (body.includes("\\n")) {
    paragraphs = body.split("\\n");
  }

  return (
    <section className="flex flex-col gap-12 text-slate-300">
      <div className="">
        <h1 className="relative flex text-3xl leading-none text-white">
          {title}
        </h1>
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
      </div>
    </section>
  );
};

export default Section;
