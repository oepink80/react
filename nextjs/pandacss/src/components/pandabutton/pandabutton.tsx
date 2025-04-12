import React from 'react';
import { cva } from '@/../styled-system/css'

const Pandabutton = cva({
  base: {
    display: 'flex'
  },
  variants: {
    visual: {
      solid: { bg: 'red.900', color: 'white' },
      outline: { borderWidth: '1px', borderColor: 'red.900' }
    },
    size: {
      sm: { padding: '4', fontSize: '12px' },
      lg: { padding: '8', fontSize: '24px' }
    }
  }
})

export default Pandabutton;