import DisneyCharacters from "./components/DisneyCharacters.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {type Character} from "./interfaces/Characters.ts";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkblue solid;
`;

export default function App(){
    // useState hook stores data
    const [data, setData] = useState<Character[]>([]);

    // useEffect hook for error handling and re-rendering
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://api.disneyapi.dev/character");
            const {data} : {data: Character[]} = await rawData.json();
            // filters for characters with images only
            const charactersWithImages = data.filter(char => char.imageUrl);
            setData(charactersWithImages);
        }

        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);


        return(
        <ParentDiv>
            <DisneyCharacters data={data}/>
        </ParentDiv>
    )
}