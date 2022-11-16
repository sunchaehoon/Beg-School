import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { json } from "stream/consumers";
import { API } from "../../API";
import * as S from "./Style";

const SignUp = () => {
  const navigate = useNavigate();
  const [schValue, setSchValue] = useState('');
  const [classValue, setClassValue] = useState<number>();
  const [nameValue, setNameValue] = useState();
  const [numberValue, setNumberValue] = useState<number>();
  const [idValue, setIdValue] = useState();
  const [pwValue, setPwValue] = useState();

  const [cityCode, setCityCode] = useState<string>();
  const [schoolCode, setSchoolCode] = useState<number>();

  const [schoolBtn, setSchoolBtn] = useState<string>("none");

  let [inputs, setInputs] = useState({
    id: '',
    password: '',
    phone: 0,
    cityCode: '',
    schoolName: '',
    schoolCode: 0,
    class: 0,
    grade: 0,
    name: ''
  });

  function clickIcon() {
    navigate(-1);
  }

  const InputChange = (e: any) => {
    const { value, name } = e.target;
    setInputs({
        ...inputs,  //기존의 input 객체 복사
        [name]: value   //name 키를 가진 값을 value로 설정
    });
    if (value === 'null' || value === '') {
        setSchoolBtn("none");
      } else {
        setSchoolBtn("block");
      }
      setSchValue(value);
  };

  useEffect(() => {
    console.log(schValue);
  },[schValue]);

  const onSubmit = () => {
    axios({
      url: "/auth/signUp",
      method: "post",
      data: {
        id: { idValue },
        password: { pwValue },
        phone: { numberValue },
        schoolName: { schValue },
      },
    });
  };

  const SearchSch = () => {
    console.log(schValue);
    API
      .get('/school', {
        params: {
          schoolName: schValue
        }
      })
      .then((res) => {
        setSchValue(res.data.row[0].schoolName);  
        setCityCode(res.data.row[0].cityCode);
        setSchoolCode(res.data.row[0].schoolCode);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  
  

  return (
    <>
      <S.Wrap>
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
                  placeholder="ex)광주소프트웨어마이스터고등학교"
                  type="text"
                  name="schoolName"
                  onChange={InputChange}
                  value={schValue || ''}
                />
                <S.SearchSchBtn display={schoolBtn} onClick={SearchSch}>검색</S.SearchSchBtn>
              </S.InnerRow>
              <S.InnerRow>
                <S.InputTitle>2. 당신은 몇 학년 입니까</S.InputTitle>
                <S.InputForm
                  placeholder="(2학년 = ) 2"
                  type="text"
                  name="grade"
                  onChange={InputChange}
                />
              </S.InnerRow>
              <S.InnerRow>
                <S.InputTitle>3. 당신은 몇 반 입니까</S.InputTitle>
                <S.InputForm
                  placeholder="(2반 = ) 2"
                  type="text"
                  name="class"
                  onChange={InputChange}
                />
              </S.InnerRow>
              <S.InnerRow>
                <S.InputTitle>4. 당신의 이름을 적으시오</S.InputTitle>
                <S.InputForm
                  placeholder="ex)김철수"
                  type="text"
                  name="name"
                  onChange={InputChange}
                />
              </S.InnerRow>
              <S.InnerRow>
                <S.InputTitle>5. 당신의 전화번호를 적으시오</S.InputTitle>
                <S.InputForm
                  placeholder="ex)01012341234"
                  type="text"
                  name="phone"
                  onChange={InputChange}
                />
              </S.InnerRow>
              <S.InnerRow>
                <S.InputTitle>6. 아이디를 적으시오</S.InputTitle>
                <S.InputForm type="text" onChange={InputChange} />
              </S.InnerRow>
              <S.InnerRow>
                <S.InputTitle>7. 비밀번호를 적으시오</S.InputTitle>
                <S.InputForm type="password" onChange={InputChange} />
              </S.InnerRow>
              <S.InnerRow>
                <S.InputTitle>8. 비밀번호를 다시 적으시오</S.InputTitle>
                <S.InputForm type="password" />
              </S.InnerRow>
            </S.FormWrapper>
          </S.FormContainer>
        </S.SignupWrap>
      </S.Wrap>
    </>
  );
};

export default SignUp;
