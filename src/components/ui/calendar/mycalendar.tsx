import { DateInput } from '@mantine/dates';
import { useState } from 'react';
import '@mantine/core/styles.css';
import './calendar.module.sass';

function Mycalendar() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DateInput
      value={value}
      onChange={setValue}
      label="Date input"
      placeholder="Date input"
    />
  );
}

export default Mycalendar;
