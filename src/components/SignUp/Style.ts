import styled from "styled-components";

type SchInput = {
    display: string;
}

export const Wrap = styled.div`
    height: 100vh;
    width: 100%;
    min-width: 1100px;
`;

export const Header = styled.div`
    position: fixed;
    height: 130px;
    width: 100%;
    background: white;
    z-index: 2;
`;

export const SchIcon = styled.div`
    position: absolute;
    width: 80px;
    height: 90px;
    margin: 30px 0 0 45px;
    background: url('/assists/schicon.png');
    background-size: 100%;
`;

export const SignupText = styled.div`
    font-size: 35px;
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;

export const SignupWrap = styled.div`
    height: 100%;
    padding: 130px 100px 200px;
`;

export const FormContainer = styled.div`
    width: 500px;
    margin: 60px auto 0 auto;
    padding: 0 100px;
`;

export const FormWrapper = styled.div`
    width: 100%;
`;

export const InnerRow = styled.div`
    position: relative;
    margin: 20px 0 50px 0;
`;

export const InputTitle = styled.div`
    color: #000000;
    font-size: 20px;
`;

export const InputForm = styled.input`
    width: 100%;
    font-size: 15px;
    border: 0;
    border-bottom: 1px solid #000000;
    background-color: transparent;
    height: 40px;
    box-sizing: border-box;
    outline: none;
`;

export const SearchSchBtn = styled.button`
    position: absolute;
    top: 30px;
    right: 10px;
    width: 55px;
    height: 30px;
    background-color: #0A95FF;
    border: none;
    border-radius: 3px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    display: ${(props: SchInput) => props.display};
`;
