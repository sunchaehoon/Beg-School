import styled from "styled-components";

type ShowModal = {
    display: string;
}

export const ModalWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 99;
    background-color: rgba(128, 128, 128, 0.6);
`;

export const ModalScr = styled.div`
    position: relative;
    width: 650px;
    border-radius: 5px;
    height: 500px;
    background-color: white;
`;

export const ModalOff = styled.button`
    background: url('/assists/cross.png');
    background-size: 100%;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    cursor: pointer;
`;

export const InnerRow = styled.div`
    position: relative;
    margin: 40px 0 50px 0;
    text-align: center;
`;

export const InputForm = styled.input`
    width: 60%;
    font-size: 15px;
    border: 0;
    border-bottom: 1px solid #000000;
    background-color: transparent;
    height: 40px;
    box-sizing: border-box;
    outline: none;
`;

export const SchoolLists = styled.div`
    width: 70%;
    border: 1px solid gray;
    border-radius: 7px;
    height: 330px;
    margin: 0 auto;
    position: relative;
`;

export const SchoolList = styled.div`
    position: absolute;
    width: 100%;
    height: 40px;
    font-size: 19px;
    text-align: center;
    line-height: 40px;
`;



