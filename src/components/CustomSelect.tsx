import styled from 'styled-components';
import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--color-text)',
      borderRadius: 'var(--radii)',
      padding: '0.25rem',
      border: 'none',
      boxShadow: 'var(--shadow)',
      height: '50px',
    }),
    option: (provided: any, state: { isSelected: any; }) => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--color-text)',
      backgroundColor: state.isSelected
        ? 'var(--colors-bg)'
        : 'var(--colors-ui-base)',
    }),
  }
})`
  width: 300px;
  border-radius: var(--radii);
  font-family: var(--family);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & input {
    padding-left: 0.25rem;
  }

  & * {
    color: var(--color-text);
  }

  & > div[id] {
    background-color: var(--colors-ui-base);
  }

  & div {
    color: var(--color-text);
  };
`;