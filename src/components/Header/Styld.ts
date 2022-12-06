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
    min-width: 1100px;
`;

export const SchIcon = styled.div`
    position: fixed;
    width: 80px;
    height: 90px;
    margin: 0 0 0 45px;
    background: url('/assists/schicon.png');
    background-size: 100%;
    z-index: 1;
    cursor: pointer;
`

export const NavLi = styled.li`
    display: inline-block;
    :first-child {
        margin-left: 0;
    }
    font-size: 22px;
    margin-left: 30px;
`;

export const OnNavLi = styled(NavLi)`
    color: #3333FF;
`;

export const Logout = styled.div`
    position: absolute;
    right: 0;
    padding: 25px 70px 0 0;
    cursor: pointer;
`;



