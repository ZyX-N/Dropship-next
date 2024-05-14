import React from "react";

export function StripCard({
  logo,
  title,
  link,
}: {
  logo: React.ReactNode;
  title: string;
  link: string;
}) {
  return (
    <div className="flex h-24 w-72 bg-gray-400">
      <div className="w-1/5">{logo}</div>
      <div className="flex flex-col w-4/5">
        <h6 className="text-xl font-medium p-1">{title}</h6>
        <span className="text-lg" dangerouslySetInnerHTML={{ __html: link }} />
      </div>
    </div>
  );
}
