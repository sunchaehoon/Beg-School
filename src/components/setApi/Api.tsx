import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";


const Api = () => {
  const [meal, setMeal] = useState();
  const KEY = process.env.REACT_APP_KEY;
  const userId = "back";
  const userPw = "200";

  useEffect(() => {
    //   axios
    //     .get(
    //       `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=c3a6a161957f47edbbb02cd46c725040&Type=json&pIndex=1&pSize=1&ATPT_OFCDC_SC_CODE=T10&SD_SCHUL_CODE=9290083`
    //     )
    //     .then((response) => {
    //       setMeal(response.data.mealServiceDietInfo[1].row[0].DDISH_NM);
    //     })
    //     .catch(() => {
    //       console.log("error");
    //     });
    // }, [meal]);
    // json = JSON.stringify(meal);
    axios({
      method: "post",
      url: "http://10.82.19.2:8080/",
      headers: {
        "id": userId,
        "password": userPw,
        "phone": "01040426797",
        "cityCode": "T10",
        "schoolName": "광소마",
        "schoolCode": "9290083",
        "class": "2",
        "grade": "2",
        "name": "백승민"
      },
    });
  }, []);

  return (
    <>
      {/* {console.log(typeof meal, meal)}
      <div>{meal}</div> */}
    </>
  );
};

export default Api;
