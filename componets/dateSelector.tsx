// /componets/dateSelector.tsx
import React from 'react';
import { formatDate } from "@/app/page";

type DateSelectorProps = {
  onSubmit: (date: string) => void;
};

export function DateSelector({ onSubmit }: DateSelectorProps) {
  const [selectedDate, setSelectedDate] = React.useState(formatDate(new Date()));

  const handleSubmit = () => {
    onSubmit(selectedDate);
  };

  return (
    <div>
      <input
        type="date"
        id="dateInput"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}