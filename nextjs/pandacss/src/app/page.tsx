import { css } from '@/../styled-system/css';
import Pandabutton from '@/components/pandabutton/pandabutton';
import Card from '@/components/card/card';

export default function Home() {
  return (
    <>
      <h3>PandaCSS</h3>
      <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>Hello 🐼!</div>
      <h3>Компонент Button (cva - варианты)</h3>
      <button className={Pandabutton({ visual: 'outline', size: 'sm' })}>
        Click Me
      </button>
      <h3>Card</h3>
      <Card
        title="Заголовок карты"
        content="Контент внутри карты."
        buttonText="Кнопка"
      />
    </>
  )
}