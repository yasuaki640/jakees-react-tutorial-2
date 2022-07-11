import { PrimaryButton } from '../atoms/buttom/PrimaryButton';
import { Input } from '../atoms/input/Input';
import styled from 'styled-components';
import { memo } from 'react';

export const SearchInput = memo(() => {
  console.log('SearchInput is renderd');

  return (
    <SContainer>
      <Input placeholder='検索条件を入力' />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
