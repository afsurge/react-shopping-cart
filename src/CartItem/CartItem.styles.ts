import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 1px solid lightblue;
    padding-bottom: 20px;

    div {
        flex: 1;
    }

    .info,
    .buttons {
        display: flex;
        justify-content: space-between;
    }

    img {
        max-width: 120px;
        object-fit: cover;
        margin-top: 20px;
        margin-left: 40px;
        border: 1px solid lightblue;
        border-radius: 10px;
    }
`;
