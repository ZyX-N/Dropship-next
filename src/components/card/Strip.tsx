import React from "react";

export const StripCard = ({
  logo,
  title,
  link,
}: {
  logo: React.ReactNode;
  title: string;
  link: string;
}) => {
  return (
    <div className="flex items-center justify-center h-24 w-full sm:px-4 px-8 sm:w-68 bg-transparent">
      <div className="w-1/5">{logo}</div>
      <div className="flex flex-col w-4/5 pl-2">
        <h6 className="text-lg font-semibold">{title}</h6>
        <span className="text-sm" dangerouslySetInnerHTML={{ __html: link }} />
      </div>
    </div>
  );
};
