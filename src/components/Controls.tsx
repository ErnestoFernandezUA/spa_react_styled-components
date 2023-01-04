import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Search } from './Search';
import { CustomSelect } from './CustomSelect';

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media(min-width: 767px){
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
  }
`;

interface ControlsProps {
  onSearch: (search: string, region?: any ) => void;
}

const Controls: FC<ControlsProps> = ({
  onSearch,
}) => {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState<any>('');

  useEffect(() => {
    let regionValue = region?.value || '';

    onSearch(search, regionValue);
  }, [search, region, onSearch])

  return (  
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect 
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  );
}
 
export default Controls;