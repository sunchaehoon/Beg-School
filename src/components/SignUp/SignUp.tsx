import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../API";
import { useForm } from "react-hook-form";
import Modal from "../SchoolModal/Modal";
import * as S from "./Style";

const SignUp = () => {
  const navigate = useNavigate();
  const [schName, setSchName] = useState("");
  const [cityCode, setCityCode] = useState<string>("");
  const [schoolCode, setSchoolCode] = useState<number>();
  const [schoolClass, setSchoolClass] = useState("");

  const [classValue, setClassValue] = useState<number>(0);
  const [gradeValue, setGradeValue] = useState<number>(0);
  const [numberValue, setNumberValue] = useState<number>(0);
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [stdName, setStdName] = useState("");
  const [checkPw, setCheckPw] = useState("");

  const [showModal, setShowModal] = useState<boolean>(false);

  const [showWrongPw, setShowWrongPw] = useState<boolean>(true);

  let [inputs, setInputs] = useState({
    id: "",
    password: "",
    phone: 0,
    cityCode: "",
    schoolName: "",
    schoolCode: 0,
    class: 0,
    grade: 0,
    name: "",
    checkPw: "",
  });

  function clickIcon() {
    navigate("/");
  }

  const InputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs, //기존의 input 객체 복사
      [name]: value, //name 키를 가진 값을 value로 설정
    });
  };

  const FormSubmit = () => {
    if (schName === "") {
      alert("학교를 선택하세요");
      return false;
    } else if (gradeValue === 0) {
      alert("학년을 입력하세요");
      return false;
    } else if (classValue === 0) {
      alert("반을 입력하세요");
      return false;
    } else if (stdName === "") {
      alert("이름을 입력하세요");
      return false;
    } else if (numberValue === 0) {
      alert("전화번호를 적으세요");
      return false;
    } else if (idValue === "") {
      alert("아이디를 입력하세요");
      return false;
    } else if (pwValue === "") {
      alert("비밀번호를 입력하세요");
      return false;
    } else if (checkPw === "") {
      alert("비밀번호를 다시 확인하세요");
      return false;
    }

    API.post("/auth/signUp", {
      id: idValue,
      password: pwValue,
      phone: numberValue,
      cityCode: cityCode,
      schoolName: schName,
      schoolCode: schoolCode,
      class: classValue,
      grade: gradeValue,
      name: stdName,
      schoolClass: schoolClass
    });
    console.log(idValue);
    console.log(stdName);
    console.log(schoolClass);
    localStorage.setItem(idValue, stdName);
    alert("회원가입 되었습니다");
    navigate("/");
  };

  function SearchSchModal() {
    setShowModal((prev) => !prev);
  }

  useEffect(() => {
    setIdValue(inputs.id);
    setPwValue(inputs.password);
    setNumberValue(inputs.phone);
    setClassValue(inputs.class);
    setGradeValue(inputs.grade);
    setStdName(inputs.name);
    setCheckPw(inputs.checkPw);

    if (checkPw === pwValue) {
      setShowWrongPw(false);
    } else {
      setShowWrongPw(true);
    }
  });


  return (
    <>
      <S.Wrap>
        {showModal === true ? (
          <Modal
            setSchName={setSchName}
            setCityCode={setCityCode}
            setSchoolCode={setSchoolCode}
            setSchoolClass={setSchoolClass}
            showModalClick={SearchSchModal}
          />
        ) : null}
        <S.Header>
          <S.SchIcon onClick={clickIcon} />
          <S.SignupText>회원가입</S.SignupText>
        </S.Header>

        <S.SignupWrap>
          <S.FormContainer>
            <S.FormWrapper>
              <S.InnerRow>
                <S.InputTitle>1. 학교는 어디입니까</S.InputTitle>
                <S.InputForm
                  type="text"
                  name="schoolName"
                  value={schName}
                  readOnly
                />
                <S.SelectSch>
                </S.SelectSch>
                <S.SearchSchBtn onClick={SearchSchModal}>검색</S.SearchSchBtn>
              </S.InnerRow>
              <S.InnerRow>
                <S.InputTitle>2. 당신은 몇 학년 입니까</S.InputTitle>
                <S.InputForm
                  placeholder="(2학년) = 2"
                  type="number"
                  name="grade"
                  onChange={InputChange}
                />
              </S.InnerRow>
              <S.InnerRow>
                <S.InputTitle>3. 당신은 몇 반 입니까</S.InputTitle>
                <S.InputForm
                  placeholder="(2반) = 2"
                  type="number"
                  name="class"
                  onChange={InputChange}
                />
              </S.InnerRow>
              <S.InnerRow>
                <S.InputTitle>4. 당신의 이름을 적으시오</S.InputTitle>
                <S.InputForm type="text" name="name" onChange={InputChange} />
              </S.InnerRow>
              <S.InnerRow>
                <S.InputTitle>5. 당신의 전화번호를 적으시오</S.InputTitle>
                <S.InputForm
                  placeholder="ex)01012341234"
                  type="number"
                  name="phone"
                  onChange={InputChange}
                />
              </S.InnerRow>
              <S.InnerRow>
                <S.InputTitle>6. 아이디를 적으시오</S.InputTitle>
                <S.InputForm type="text" name="id" onChange={InputChange} />
              </S.InnerRow>
              <S.InnerRow>
                <S.InputTitle>7. 비밀번호를 적으시오</S.InputTitle>
                <S.InputForm
                  type="password"
                  name="password"
                  onChange={InputChange}
                />
              </S.InnerRow>
              <S.InnerRow>
                <S.InputTitle>8. 비밀번호를 다시 적으시오</S.InputTitle>
                <S.InputForm
                  type="password"
                  name="checkPw"
                  onChange={InputChange}
                />
                {showWrongPw === true &&
                pwValue.length > 0 &&
                checkPw.length > 0 ? (
                  <S.WrongPw>비밀번호가 틀립니다</S.WrongPw>
                ) : null}
              </S.InnerRow>

              <S.JoinWrap>
                <S.JoinButton onClick={FormSubmit} type="submit">
                  가입하기
                </S.JoinButton>
              </S.JoinWrap>
            </S.FormWrapper>
          </S.FormContainer>
        </S.SignupWrap>
      </S.Wrap>
    </>
  );
};

export default SignUp;
