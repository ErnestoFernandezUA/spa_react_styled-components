import { FC, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Country } from "../type/Country";

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media(min-width: 767px){
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media(min-width: 1024px){
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media(min-width: 1024px){
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media(min-width: 767px){
    flex-direction: row;
    align-items: center;
  }
`;

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`;


interface InfoProps extends Country {
  countries: Country[];
};
 
const Info: FC<InfoProps> = ({
 name,
 nativeName,
 flag,
 capital,
 population,
 region,
 subregion,
 topLevelDomain = [],
 currencies = [],
 languages = [],
 borders = [],
 countries = [],
}) => {
  const navigate = useNavigate();

  console.log('borders ', borders);

  const bordersArr = useMemo(() => borders.map(b => {
    console.log(b);

    return countries.find(c => {
      return c.alpha3Code === b
    })?.name;
  }), [borders, countries]);

  console.log(bordersArr);

  return (
    <Wrapper>
      <InfoImage src={flag} alt={name} />

      <div>
        <InfoTitle>{name}</InfoTitle>

        <ListGroup>
          <List>
            <ListItem><b>Native name: </b>{nativeName}</ListItem>
            <ListItem><b>Population: </b>{population}</ListItem>
            <ListItem><b>Region: </b>{region}</ListItem>
            <ListItem><b>Subregion: </b>{subregion}</ListItem>
            <ListItem><b>Capital: </b>{capital}</ListItem>
          </List>

          <List>
            <ListItem>
              <b>Top Level Domain: </b>
              {topLevelDomain?.map(d => 
                <span key={d}>{d} </span>
              )}
            </ListItem>
            <ListItem>
              <b>Currency: </b>
              {currencies?.map(c => 
                <span key={c.name}>{c.name} </span>
              )}
            </ListItem>
            <ListItem>
              <b>Languages: </b>
              {languages?.map(l => 
                <span key={l.name}>{l.name} </span>
              )}
            </ListItem>
          </List>
        </ListGroup>

        <Meta>
          <b>Border Countries</b>
          {!borders.length ? (
            <span>No border countries</span>
          ) : (
            <TagGroup>
              {bordersArr.map(b => 
                <Tag
                  key={b} 
                  onClick={() => {
                    console.log(`country/${b}`);
                    navigate(`country/${b}`);
                  }}
                >
                  {b}
                </Tag>
              )}
            </TagGroup>
          )}               
        </Meta>
      </div>
    </Wrapper>
  );
}
 
export default Info;