import styled from "styled-components";

type delInput = {
    display: string;
}

export const Wrap = styled.div`
    height: 100vh;
    width: 100%;
    min-width: 1100px;
`;

export const Header = styled.div`
    position: absolute;
    top: 0;
    height: 140px;
    left: 0;
    width: 100%;
    min-width: 1100px;
    z-index: 1;
`;

export const Title = styled.div`
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    font-size: 60px;
    font-weight: 500;
    transform: translate(-50%, 0);
`;

export const Regist = styled.div`
    float: right;
    margin: 100px 140px 0 0;
`;

export const RegistLi = styled.li`
    :first-child {
        margin-left: 0;
    }
    margin-left: 25px;
    display: inline-block;
    font-size: 15px;
    white-space: nowrap;
`;

export const LoginForm = styled.div`
    position: relative;
    padding: 200px 150px 0 150px;
    display: flex;
    justify-content: center;
`;

export const FormSize = styled.div`
    border: 1px solid #d9d9d9;
    text-align: center;
    width: 700px;
`;

export const LoginSection = styled.div`
    margin: 0 auto;
    padding-top: 70px;
    width: 500px;
    height: 350px;
    position: relative;
`;

export const IdDiv = styled.div`
    height: 50px;
    margin-bottom: 35px;
    text-align: left;
    position: relative;
`;

export const LoginInput = styled.input`
    font-size: 16px;
    border: none;
    outline: none;
    height: 40px;
    width: 90%;
    padding-right: 38px;
    border-bottom: 1px solid black;
    color: #181818;
`;

export const CrossBtn = styled.button`
    position: absolute;
    right: 15px;
    background-color: transparent;
    border: none;
    background-image: url('/assists/cross.png');
    background-size: 100%;  
    width: 0.9rem;
    height: 0.9rem;
    top: 0.9rem;
    outline: none;
    cursor: pointer;
    display: ${(props: delInput) => props.display};
`;

export const LoginBtn = styled.button`
    color: black;
    background: transparent;
    width: 30px;
    height: 40px;
    width: 150px;
    margin-top: 50px;
    border-radius: 5px;
    cursor: pointer;
`;









