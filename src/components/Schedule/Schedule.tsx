import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import * as S from "./Styled";
import { API } from "../../API";

const Schedule = () => {
  const [scheduleList, setScheduleList] = useState<any>();


  useEffect(() => {
    console.log(localStorage.getItem("userid"));
    API.get("/school/time", {
      headers: {
        id: localStorage.getItem("userid"),
      },
    })
      .then((res) => {
        console.log(res.data.row);
        setScheduleList(res.data.row);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(scheduleList);
    console.log(scheduleList.time);
  }, []);

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Form>
          <S.Table>
            <thead>
              <tr>
                <S.th>시간표</S.th>
                <S.th>월</S.th>
                <S.th>화</S.th>
                <S.th>수</S.th>
                <S.th>목</S.th>
                <S.th>금</S.th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <S.td>1</S.td>
                {scheduleList.map((a: any, i: number) => {
                  if (scheduleList[i].time === "1") {
                    return (
                      <S.td>{scheduleList[i].timeName}</S.td>
                    );
                  }
                })}
              </tr>
              <tr>
                <S.td>2</S.td>
                {scheduleList.map((a: any, i: number) => {
                  if (scheduleList[i].time === "2") {
                    return (
                      <S.td>{scheduleList[i].timeName}</S.td>
                    );
                  }
                })}
              </tr>
              <tr>
                <S.td>3</S.td>
                {scheduleList.map((a: any, i: number) => {
                  if (scheduleList[i].time === "3") {
                    return (
                      <S.td>{scheduleList[i].timeName}</S.td>
                    );
                  }
                })}
              </tr>
              <tr>
                <S.td>4</S.td>
                {scheduleList.map((a: any, i: number) => {
                  if (scheduleList[i].time === "4") {
                    return (
                      <S.td>{scheduleList[i].timeName}</S.td>
                    );
                  }
                })}
              </tr>
              <tr>
                <S.td>5</S.td>
                {scheduleList.map((a: any, i: number) => {
                  if (scheduleList[i].time === "5") {
                    return (
                      <S.td>{scheduleList[i].timeName}</S.td>
                    );
                  }
                })}
              </tr>
              <tr>
                <S.td>6</S.td>
                {scheduleList.map((a: any, i: number) => {
                  if (scheduleList[i].time === "6") {
                    return (
                      <S.td>{scheduleList[i].timeName}</S.td>
                    );
                  }
                })}
              </tr>
              <tr>
                <S.td>7</S.td>
                {scheduleList.map((a: any, i: number) => {
                  if (scheduleList[i].time === "7") {
                    return (
                      <S.td>{scheduleList[i].timeName}</S.td>
                    );
                  }
                })}
              </tr>
            </tbody>
          </S.Table>
        </S.Form>
      </S.Wrapper>
    </>
  );
};

export default Schedule;
