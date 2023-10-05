import { em, MantineProvider } from '@mantine/core';
import type { ReactNode } from 'react';

// https://mantine.dev/theming/theme-object/
export default function AppThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      inherit
      theme={{
        colorScheme: 'dark',
        fontFamily: `"Noto Sans KR", sans-serif`,
        headings: { fontFamily: `"Noto Sans KR", sans-serif` },
        // use em units for breakpoints only. Mantine wont accept px units
        breakpoints: {
          xs: em('480px'),
          sm: em('640px'),
          md: em('768px'),
          lg: em('1024px'),
          xl: em('1280px'),
          '2xl': em('1536px'),
          '3xl': em('1920px'),
        },
        components: {
          Container: {
            defaultProps: {
              sizes: {
                xs: 480,
                sm: 640,
                md: 768,
                lg: 1024,
                xl: 1280,
                '2xl': 1536,
                '3xl': 1920,
              },
            },
          },
        },
      }}
    >
      {children}
    </MantineProvider>
  );
}
