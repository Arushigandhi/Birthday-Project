import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
  text-align: justify;
`;

export default function Ptext({ children }) {
  return (
    <PStyle>
      <p>{children}</p>
    </PStyle>
  );
}
