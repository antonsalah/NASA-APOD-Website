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
    <div className='dateInput'>
      <input
        type="date"
        value={selectedDate}
        max={formatDate(new Date())} //today's date
        min={"1995-06-20"} //earilest possible date

        className='datePicker'
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <button className ='button' onClick={handleSubmit}>Submit</button>
    </div>
  );
}