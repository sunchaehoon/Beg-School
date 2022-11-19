import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../API";
import * as S from "./Style";

const Modal = ({ showModalClick }: any) => {
  const [schValue, setSchValue] = useState<string>("");
  const [cityCode, setCityCode] = useState();
  const [schoolCode, setSchoolCode] = useState();
  const [schoolList, setSchoolList] = useState();

  let [inputs, setInputs] = useState({ schoolName: "", name: "" });

  function CloseModal() {
    showModalClick();
  }

  //   useEffect(() => {
  //     setSchValue(inputValue.value);
  //     console.log(schValue);
  //   },[setSchValue]);

  const InputChange = (e: any) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(value);

    API.get("/school", {
      params: {
        schoolName: value,
      },
    })
      .then((res) => {
        // setSchoolList(res.data);
        // setSchValue(res.data.row[0].schoolName);    //광주소프트웨어마이스터고등학교
        // setCityCode(res.data.row[0].cityCode);    //F10
        // setSchoolCode(res.data.row[0].schoolCode);    //7380292
        setSchoolList(
          res.data.row.map((school: any, i: number) => {
            return <S.SchoolList>{school[i].schoolName}</S.SchoolList>;
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  return (
    <>
      <S.ModalWrap>
        <S.ModalScr>
          <S.ModalOff onClick={CloseModal} />
          <S.InnerRow>
            <S.InputForm
              type="text"
              placeholder="학교를 입력하세요"
              name="schoolName"
              onChange={InputChange}
              value={schValue}
            />
          </S.InnerRow>
          <S.SchoolLists>
            {schoolList}
          </S.SchoolLists>
        </S.ModalScr>
      </S.ModalWrap>
    </>
  );
};

export default Modal;
