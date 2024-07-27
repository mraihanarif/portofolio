'use client'

import React from 'react';
import styled from 'styled-components';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>{children}</Container>
      </body>
    </html>
  );
};

// Styled component untuk Container
const Container = styled.div`
  font-family: Arial, sans-serif;
  height: 100vh;
  overflow: hidden; /* Hide native scroll bar */
`;

export default Layout;

