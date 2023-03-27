import styled from "@emotion/styled";
import bgImage from 'images/phonebook.jpg';

export const AppWrapper = styled.div`
    height: 90vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 10px;
    padding: 20px;
    border: 1px solid black;
    border-radius: 4px;
    background-image: url(${bgImage});
    background-size: cover;
`;