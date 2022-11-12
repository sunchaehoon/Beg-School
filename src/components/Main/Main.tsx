import React, { useState } from "react";
import * as S from "./Style";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import './style.css';


const Main = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [delIdinput, setDelIdinpt] = useState("none");
  const [delPwinput, setDelPwinput] = useState("none");
  const IdInput: any = document.querySelector("#IdInput");
  const PwInput: any = document.querySelector("#PwInput");

  function IdChange(e: any) {
    setUserId(e.target.value);
    if (IdInput.value === "") {
      setDelIdinpt("none");
    } else {
      setDelIdinpt("block");
    }
  }
  function PwChange(e: any) {
    setUserPw(e.target.value);
    if (PwInput.value === "") {
        setDelPwinput("none");
    } else {
        setDelPwinput("block");
    }
  }

  function IdInputDel() {
    setUserId("");
    setDelIdinpt("none");
    IdInput.focus();
  }
  function PwInputDel() {
    setUserPw("");
    setDelPwinput("none");
    PwInput.focus();
  }

  const NoId = () => {
    toast.warning("아이디 입력", {
        autoClose: 1500,
        position: "top-right"
    });
  }
  const NoPw = () => {
    toast.warning("비밀번호 입력", {
        autoClose: 1500,
        position: "top-right"
    });
  }

  const SubmitLogin = () => {

    if (userId === "") {
        NoId();
        return false;
    } else if (userPw === "") {
        NoPw();
        return false;
    }

    axios({
        method: "POST",
        url: "http://10.82.19.2:8080/",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        params: {
            id: userId,
            city_code: "citycode",
            class: 2,
            grade: 2,
            name: "백승민",
            password: "1234",
            phone: 41234399,
            school_code: 1,
            school_name: "광소마"
        }
    })
    .then((res) => {
        
    })
    .catch((error) => {
        console.log(error);
    });
  }

  return (
    <>
      <S.Wrap>
        <S.Header>
          <S.Title>학교를 부탁해</S.Title>
          <S.Regist>
            <ul>
              <S.RegistLi><Link to='/SignUp' className="link">회원가입</Link></S.RegistLi>
            </ul>
          </S.Regist>
        </S.Header>

        <S.LoginForm>
          <S.FormSize>
            <S.LoginSection>
              <S.IdDiv>
                <S.LoginInput
                  id="IdInput"
                  placeholder="아이디"
                  type="text"
                  autoComplete="on"
                  onChange={IdChange}
                  value={userId}
                />
                <S.CrossBtn display={delIdinput} onClick={IdInputDel} />
              </S.IdDiv>

              <S.IdDiv>
                <S.LoginInput
                  id="PwInput"
                  placeholder="비밀번호"
                  type="text"
                  autoComplete="on"
                  onChange={PwChange}
                />
                <S.CrossBtn display={delPwinput} onClick={PwInputDel} />
              </S.IdDiv>

              <S.LoginBtn onClick={SubmitLogin}>로그인</S.LoginBtn>
              <ToastContainer />
            </S.LoginSection>
          </S.FormSize>
        </S.LoginForm>
      </S.Wrap>
    </>
  );
};

export default Main;
