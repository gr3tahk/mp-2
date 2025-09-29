import styled from "styled-components";
import {type Character} from "../interfaces/Characters.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: #e3f2fd;
`;

const SingleCharDiv=styled.div<{hasFilms: boolean}>`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props)=>(props.hasFilms ? '#1976d2' : '#757575')};
    color: white;
    border: 3px #0d47a1 solid;
    font: italic small-caps bold calc(2px + 1vw) 'Papyrus', fantasy;
    text-align: center;
`;

export default function DisneyCharacters(props : { data:Character[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((char: Character) =>
                    <SingleCharDiv key={char._id} hasFilms={char.films.length > 0}>
                        <h1>{char.name}</h1>
                        <p>{char.films.length > 0 ? `${char.films.length} Film(s)` : "TV Only"}</p>
                        <img src={char.imageUrl} alt={`image of ${char.name}`} />
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}