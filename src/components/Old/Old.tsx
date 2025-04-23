import { MantineProvider } from '@mantine/core';
import React, { useState } from 'react';

import Card from '@/components/Old/card/card';
import PostList from '@/components/Old/PostList/PostList';
import Mycalendar from '@/components/ui/calendar/mycalendar';
import EButton from '@/components/ui/e-button/e-button';
import Modal from '@/components/ui/modal/modal';
import Mybutton from '@/components/ui/my-button/my-button';
import MyTabs from '@/components/ui/my-tabs/my-tabs';
import Rating from '@/components/ui/rating/rating';

const Old = () => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    alert('You clicked the button!');
  };
  return (
    <>
      <PostList />
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
      <h3>tilewind Card</h3>
      <Card
        title="Example Card"
        content="This is the card content."
        buttonText="Click Me"
        handleClick={handleClick}
      />
      <h3>emotion button</h3>
      <EButton
        variant="primary"
        onClick={() => alert('Primary button clicked')}
      >
        Primary Button
      </EButton>
      <br />
      <EButton
        variant="outline"
        onClick={() => alert('Outline button clicked')}
      >
        Outline Button
      </EButton>
    </>
  );
};

export default Old;
