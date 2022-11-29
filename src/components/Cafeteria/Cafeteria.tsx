import React, { useEffect, useState } from "react";
import { API } from "../../API";
import Header from "../Header/Header";
import * as S from "./Style";

const Cafeteria = () => {
  
  const today = {
    year: new Date().getFullYear(), //오늘 연도
    month: new Date().getMonth() + 1, //오늘 월
    date: new Date().getDate(), //오늘 날짜
    day: new Date().getDay(), //오늘 요일
  };

  const [morning, setMorning] = useState("");
  const [afternoon, setAfternoon] = useState("");
  const [dinner, setDinner] = useState("");

  const [dayFood, setDayFood] = useState<boolean>(true);

  const [dday, setDday] = useState<number>(today.date);
  const [mmonth, setMmonth] = useState<number>(today.month);
  const [yyear, setYyear] = useState<number>(today.year);

  const prevMonth = String(today.year) + String(today.month);

  const [daymeal, setDaymeal] = useState();
  
  const prevdate: Date = new Date();
  const prevdate1 = new Date(prevdate.getFullYear(), mmonth, 0).getDate();
  const prevdate2 = new Date(prevdate.getFullYear(), mmonth - 1, 0).getDate();

//   const Calendar = () => {
    
//     const week = ["일", "월", "화", "수", "목", "금", "토"]; //일주일
//     const [selectedYear, setSelectedYear] = useState(today.year); //현재 선택된 연도
//     const [selectedMonth, setSelectedMonth] = useState(today.month); //현재 선택된 달
//     const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate(); //선택된 연도, 달의 마지막 날짜
//   }

  useEffect(() => {
    const prevDay = String(yyear) + String(mmonth) + String(dday);
    console.log(dday);
    console.log(prevdate1);
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
        if (res.data.row[0] !== undefined) {
          setMorning(res.data.row[0].dishName);
        } else {
          setMorning("급식없음");
        }
        if (res.data.row[1] !== undefined) {
          setAfternoon(res.data.row[1].dishName);
        } else {
          setAfternoon("급식없음");
        }
        if (res.data.row[2] !== undefined) {
          setDinner(res.data.row[2].dishName);
        } else {
          setDinner("급식없음");
        }
      })
      .catch((error) => {
        console.error(error.response.data);
      });

    // API.get("/school/meal/month", {
    //   headers: {
    //     id: localStorage.getItem("userid"),
    //   },
    //   params: {
    //     month: prevMonth,
    //   },
    // })
    //   .then((res) => {
    //     console.log(res.data.row);
    //     setDaymeal(res.data.row.map((a: any, i: number) => {}));
    //   })
    //   .catch((error) => {
    //     console.error(error.response.data);
    //   });

    // console.log(prevDay);
    // console.log(prevMonth);
  }, [today, dday, prevMonth]);

  const DecreaseDay = () => {
    if (dday <= 1) {
      setMmonth(mmonth - 1);
      setDday(prevdate2);
    } else {
      setDday(dday - 1);
    }
  };
  const IncreaseDay = () => {
    if(dday >= prevdate1) {
      setMmonth(mmonth + 1);
      setDday(1);
    } else {
      setDday(dday + 1);
    }
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
                ? mmonth + "월 " + dday + "일 " + "급식"
                : today.month + "월 급식"}
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
                    <S.OneMeal
                      id="morning"
                      dangerouslySetInnerHTML={{ __html: morning }}
                    />
                    <S.OneMeal
                      id="afternoon"
                      dangerouslySetInnerHTML={{ __html: afternoon }}
                    />
                    <S.OneMeal
                      id="dinner"
                      dangerouslySetInnerHTML={{ __html: dinner }}
                    />
                  </S.FoodDiv>
                </>
              ) : (
                <S.FoodDivM>
                  <S.WeekUl>
                    <S.WeekLi>월요일</S.WeekLi>
                    <S.WeekLi>화요일</S.WeekLi>
                    <S.WeekLi>수요일</S.WeekLi>
                    <S.WeekLi>목요일</S.WeekLi>
                    <S.WeekLi>금요일</S.WeekLi>
                  </S.WeekUl>

                  <S.DayList>
                    <S.DayListLi></S.DayListLi>
                  </S.DayList>
                </S.FoodDivM>
              )}
            </S.FoodList>
          </S.FoodWrapper>
        </S.Section>
      </S.Wrapper>
    </>
  );
};

export default Cafeteria;
