import styled from "styled-components";

type ShowModal = {
    display: string;
}

export const ModalWrap = styled.div`
    display: ${(props: ShowModal) => props.display};
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 99;
    background-color: gray;
    background: transparent;
`;

export const ModalScr = styled.div`
    width: 30%;
    text-align: center;
    border-radius: 5px;
    height: 500px;
    background-color: white;
`;