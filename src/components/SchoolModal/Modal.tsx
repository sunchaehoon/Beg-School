import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../API";
import * as S from "./Style";

const Modal = ({
  showModalClick,
  setSchName,
  setCityCode,
  setSchoolCode,
}: any) => {
  const [schValue, setSchValue] = useState<string>("");
  const [schoolList, setSchoolList] = useState();

  let [inputs, setInputs] = useState({ schoolName: "", name: "" });

  function CloseModal() {
    showModalClick();
  }

  useEffect(() => {
    function onClickSchool(e: any) {
      setSchName(e.schoolName);
      setCityCode(e.cityCode);
      setSchoolCode(e.schoolCode);
      showModalClick();
    }

    API.get("/school", {
      params: {
        schoolName: inputs.schoolName,
      },
    })
      .then((res) => {
        setSchoolList(
          res.data.row.map((school: any, i: number) => {
            return (
              <S.SchoolList
                key={i}
                onClick={() => onClickSchool(res.data.row[i])}
              >
                {res.data.row[i].schoolName}
              </S.SchoolList>
            );
          })
        );
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  }, [inputs]);

  const InputChange = (e: any) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
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
            />
          </S.InnerRow>
          <S.SchoolLists>{schoolList}</S.SchoolLists>
        </S.ModalScr>
      </S.ModalWrap>
    </>
  );
};

export default Modal;
