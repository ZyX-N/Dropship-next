import React, { useState } from "react";
// import { Calendar } from "@nextui-org/calendar";
// import { parseDate } from "@internationalized/date";

export const Calender: React.FC = () => {
//   const [value, setValue] = useState(parseDate("2024-03-07"));
  const [value, setValue] = useState("");
  console.log(value);

  return (
    <div className="flex gap-x-4">
      {/* <Calendar
        aria-label="Date (Controlled)"
        value={parseDate("2024-03-07")}
        onChange={setValue}
      /> */}
    </div>
  );
};
