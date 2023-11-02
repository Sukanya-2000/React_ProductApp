// ProductStyles.js
import styled from 'styled-components';

export const ProductContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`;

export const ProductTitle = styled.h3`
  color: #333;
  margin-top: 8px;
`;

export const ProductDescription = styled.p`
  color: #666;
`;

export const ProductPrice = styled.p`
  color: #e44d26;
  font-weight: bold;
  margin-top: 8px;
`;
