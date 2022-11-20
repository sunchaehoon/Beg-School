import styled from "styled-components";

export const HeaderWrap = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d9d9d9;
`;

export const SchIcon = styled.div`
    position: absolute;
    width: 80px;
    height: 90px;
    margin: 0 0 0 45px;
    background: url('/assists/schicon.png');
    background-size: 100%;
    z-index: 1;
`

export const NavLi = styled.li`
    display: inline-block;
    :first-child {
        margin-left: 0;
    }
    font-size: 22px;
    margin-left: 25px;
`;



