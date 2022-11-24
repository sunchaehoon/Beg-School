import React, { useEffect, useState } from "react";
import { API } from "../../API";
import Header from "../Header/Header";
import * as S from "./Style";

const Cafeteria = () => {
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());

  const [morning, setMorning] = useState();
  const [afternoon, setAfternoon] = useState();
  const [evening, setEvening] = useState();

  const [dayFood, setDayFood] = useState<boolean>(true);

  useEffect(() => {
    const prevDay = year + month + day;
    API.get("/school/meal", {
      headers: {
        id: localStorage.getItem("userid"),
      },
      params: {
        day: prevDay,
      },
    })
      .then((res) => {
        setMorning(res.data.row[0].dishName);
        console.log(morning);
        setAfternoon(res.data.row[1].dishName);
        setEvening(res.data.row[2].dishName);
      })
      .catch((error) => {
        console.error(error.response.data);
      });
    console.log(prevDay);
  }, []);

  function changeMode() {
    setDayFood((prev) => !prev);
  }

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Section>
          <S.FoodWrapper>
            <S.FoodMode>
              <S.ModeLi
                onClick={changeMode}
                className={dayFood == true ? "" : ""}
              >
                오늘 급식
              </S.ModeLi>
              <S.ModeLi
                onClick={changeMode}
                color={dayFood == false ? "#3333ff" : ""}
              >
                이번달 급식
              </S.ModeLi>
            </S.FoodMode>

            <S.TitleText>
              {dayFood == true
                ? month + "월 " + day + "일 " + "급식"
                : month + "월 급식"}
            </S.TitleText>

            <S.LeftArrow>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </S.LeftArrow>
          </S.FoodWrapper>
        </S.Section>
      </S.Wrapper>
    </>
  );
};

export default Cafeteria;
