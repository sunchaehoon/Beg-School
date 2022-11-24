import React, { useEffect, useState } from "react";
import * as S from "./Style";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { API } from "../../API";

const Main = () => {
  const navigate =  useNavigate();

  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [delIdinput, setDelIdinpt] = useState("none");
  const [delPwinput, setDelPwinput] = useState("none");
  const IdInput: any = document.querySelector("#IdInput");
  const PwInput: any = document.querySelector("#PwInput");

  useEffect(() => {
    if (userId === "") {
      setDelIdinpt("none");
    } else {
      setDelIdinpt("block");
    }
    if (userPw === "") {
      setDelPwinput("none");
    } else {
      setDelPwinput("block");
    }
  });

  function IdChange(e: any) {
    setUserId(e.target.value);
  }
  function PwChange(e: any) {
    setUserPw(e.target.value);
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
      position: "top-right",
    });
  };
  const NoPw = () => {
    toast.warning("비밀번호 입력", {
      autoClose: 1500,
      position: "top-right",
    });
  };

  const SubmitLogin = () => {
    if (userId === "") {
      NoId();
      return false;
    } else if (userPw === "") {
      NoPw();
      return false;
    }

    API.post("/auth/login", {
      id: userId,
      password: userPw,
    })
      .then((res) => {
        console.log(res);
        if(res.data === true) {
          localStorage.setItem('userid', userId);
          alert(localStorage.getItem('username') + '님 로그인');
          navigate('/Cafeteria');
        } else {
          alert('로그인 실패');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <S.Wrap>
        <S.Header>
          <S.Title>학교를 부탁해</S.Title>
          {/* <S.Regist>
            <ul>
              <S.RegistLi><Link to='/SignUp' className="link">회원가입</Link></S.RegistLi>
            </ul>
          </S.Regist> */}
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
                  type="password"
                  autoComplete="on"
                  onChange={PwChange}
                  value={userPw}
                />
                <S.CrossBtn display={delPwinput} onClick={PwInputDel} />
              </S.IdDiv>

              <S.LoginBtn onClick={SubmitLogin}>로그인</S.LoginBtn>
              <ToastContainer />
              <Link to="/SignUp" className="link">
                회원가입
              </Link>
            </S.LoginSection>
          </S.FormSize>
        </S.LoginForm>
      </S.Wrap>
    </>
  );
};

export default Main;
