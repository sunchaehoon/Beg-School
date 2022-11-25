import React, { useEffect, useState } from "react";
import { API } from "../../API";
import Header from "../Header/Header";
import * as S from "./Style";

const Cafeteria = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const [morning, setMorning] = useState("");
  const [afternoon, setAfternoon] = useState("");
  const [dinner, setDinner] = useState("");

  const [dayFood, setDayFood] = useState<boolean>(true);

  const [dday, setDday] = useState<number>(day);

  const prevMonth = String(year) + String(month);

  const [today, setToday] = useState<string>(
    String(year) + String(month) + String(day)
  );

  useEffect(() => {
    const prevDay = today;
    API.get("/school/meal", {
      headers: {
        id: localStorage.getItem("userid"),
      },
      params: {
        day: prevDay,
      },
    })
      .then((res) => {
        console.log(res.data.row);
        setMorning(res.data.row[0].dishName);
        setAfternoon(res.data.row[1].dishName);
        setDinner(res.data.row[2].dishName);
      })
      .catch((error) => {
        console.error(error.response.data);
      });

    //   API.get("/school/meal/month", {
    //     headers: {
    //         id: localStorage.getItem("userid"),
    //     },
    //     params: {
    //         month: prevMonth,
    //     }
    //   })
    //   .then((res) => {
    //     console.log(res.data.row);
    //   })
    //   .catch((error) => {
    //     console.error(error.response.data);
    //   });

    // console.log(prevDay);
    // console.log(prevMonth);
  }, [today, prevMonth]);

  const DecreaseDay = () => {
    setToday(String(Number(today) - 1));
    setDday(dday - 1);
  };
  const IncreaseDay = () => {
    setToday(String(Number(today) + 1));
    setDday(dday + 1);
  };

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Section>
          <S.FoodWrapper>
            <S.FoodMode>
              <S.ModeLi
                onClick={() => {
                  setDayFood(true);
                }}
                color={dayFood === true ? "#3333ff" : ""}
              >
                오늘 급식
              </S.ModeLi>
              <S.ModeLi
                onClick={() => {
                  setDayFood(false);
                }}
                color={dayFood === false ? "#3333ff" : ""}
              >
                이번달 급식
              </S.ModeLi>
            </S.FoodMode>

            <S.TitleText>
              {dayFood === true
                ? month + "월 " + dday + "일 " + "급식"
                : month + "월 급식"}
            </S.TitleText>

            <S.FoodList>
              {dayFood === true ? (
                <>
                  <S.LeftArrow onClick={DecreaseDay}>
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

                  <S.RightArrow onClick={IncreaseDay}>
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
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </S.RightArrow>

                  <S.FoodDiv>
                    <S.OneMeal dangerouslySetInnerHTML={{ __html: morning }} />
                    <S.OneMeal
                      dangerouslySetInnerHTML={{ __html: afternoon }}
                    />
                    <S.OneMeal dangerouslySetInnerHTML={{ __html: dinner }} />
                  </S.FoodDiv>
                </>
              ) : (
                <S.FoodDivM></S.FoodDivM>
              )}
            </S.FoodList>
          </S.FoodWrapper>
        </S.Section>
      </S.Wrapper>
    </>
  );
};

export default Cafeteria;
