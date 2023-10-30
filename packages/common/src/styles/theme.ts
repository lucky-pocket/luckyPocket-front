const color = {
  ivory: {
    '010': '#F2EDE5',
    '020': '#E1D5C3',
    '030': '#D0BEA1',
    '040': '#BFA67F',
    '050': '#AE8F5D',
    '060': '#907448',
    '070': '#6E5937',
    '080': '#625541',
    '090': '#2A2215',
  },
  error: {
    '010': '#FDF2F2',
    '020': '#F5C6C8',
    '030': '#EE9B9E',
    '040': '#E66F73',
    '050': '#DF454A',
    '060': '#CD2329',
    '070': '#A11C20',
    '080': '#751418',
    '090': '#4A0D0F',
  },
  gray: {
    '010': '#EAE9E7',
    '020': '#D2D0CC',
    '030': '#B9B7B2',
    '040': '#A19E97',
    '050': '#89857C',
    '060': '#6F6B63',
    '070': '#54514B',
    '080': '#393733',
    '090': '#1E1D1B',
  },
  sub: {
    brown: {
      '500': '#99522F',
      '100': '#C98554',
      '50': '#E5BE9A',
    },
  },
  white: '#FFFFFF',
  black: '#000000',
  background: '#C98554',
} as const;

const typo = {
  title: {
    large: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      lineHeight: '120%',
    },
    medium: {
      fontSize: '2rem',
      fontWeight: 'bold',
      lineHeight: '120%',
    },
    sub_md: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      lineHeight: '120%',
    },
    small: {
      fontSize: '1.125rem',
      fontWeight: 'bold',
      lineHeight: '120%',
    },
  },
  text: {
    medium: {
      fontSize: '1.25rem',
      fontWeight: 'regular',
      lineHeight: '120%',
    },
    small: {
      fontSize: '1rem',
      fontWeight: 'regular',
      lineHeight: '120%',
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 'regular',
      lineHeight: '120%',
    },
  },
} as const;

export const theme = {
  color,
  typo,
} as const;
