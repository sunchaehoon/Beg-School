import styled from "styled-components";

// type SchInput = {
//     display: string;
// }

export const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    min-width: 1100px;
`;

export const Header = styled.div`
    position: fixed;
    height: 130px;
    width: 100%;
    background: white;
    z-index: 2;
    min-width: 1100px;
`;

export const SchIcon = styled.div`
    position: absolute;
    width: 80px;
    height: 90px;
    margin: 30px 0 0 45px;
    background: url('/assists/schicon.png');
    background-size: 100%;
    cursor: pointer;
`;

export const SignupText = styled.div`
    font-size: 35px;
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;

export const SignupWrap = styled.div`
    padding: 130px 100px 100px;
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
`;

export const InputDiv = styled.div`
    position: absolute;
`;

export const JoinWrap = styled.div`
    text-align: center;
`;

export const JoinButton = styled.button`
    border: 3.5px solid gray;
    height: 40px;
    width: 40%;
    background-color: transparent;
    border-radius: 7px;
    font-size: 18px;
    cursor: pointer;
    margin-top: 20px;
`;

export const WrongPw = styled.div`
    color: red;
    font-size: 14px;
    position: absolute;
    top: 70px;
`;

export const SelectSch = styled.div`
    position: relative;
    margin: 25px 0 25px 0;
`;


