import { MantineProvider } from '@mantine/core';
import React, { useState } from 'react';

import Mycalendar from '@/components/ui/calendar/mycalendar';
import Modal from '@/components/ui/modal/modal';
import Mybutton from '@/components/ui/my-button/my-button';
import MyTabs from '@/components/ui/my-tabs/my-tabs';
import Rating from '@/components/ui/rating/rating';

export const App = () => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <h3>Табы</h3>
      <MyTabs />
      <h3>Кнопка AntD</h3>
      <Mybutton text="Кнопка AntD" />
      <h3>Рейтинг</h3>
      <Rating />
      <h3>Календарь</h3>
      <MantineProvider>
        <Mycalendar />
      </MantineProvider>
      <h3>Модальное окно</h3>
      <div className="flex items-center justify-center bg-gray-100">
        <Modal title="Example Modal" open={open} onClose={toggleModal}>
          <p>Content inside modal window.</p>
        </Modal>
      </div>
    </>
  );
};
