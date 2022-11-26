import styled from "styled-components";

type SetColor = {
    color: string;
}

export const Wrapper = styled.div`
    width: 100%;
    min-width: 1100px;
    height: 100%;
    display: block;
`;

export const Section = styled.div`
    height: 100%;
    padding: 100px 80px 0;
`;

export const FoodWrapper = styled.div`
    width: 100%;
    height: 645px;
    position: relative;
`;

export const FoodMode = styled.div`
    margin-top: 40px;
    float: right;
`;

export const ModeLi = styled.li`
    :first-child {
        margin-left: 0;
    }
    display: inline-block;
    margin-left: 30px;
    color: ${(props: SetColor) => props.color};
    cursor: pointer;
    font-weight: bold;
`;

export const FoodList = styled.div`
    width: 100%;
    position: relative;
`;

export const TitleText = styled.div`
    text-align: center;
    padding-top: 80px;
    font-size: 35px;
`;

export const LeftArrow = styled.div`
    width: 45px;
    height: 45px;
    cursor: pointer;
    position: absolute;
    top: 160px;
`;

export const RightArrow = styled(LeftArrow)`
    right: 0;
`;

export const FoodDiv = styled.div`
    height: 400px;
    padding: 0 45px;
    display: flex;
    justify-content: space-between;
`;

export const FoodDivM = styled(FoodDiv)`
    padding: 30px 0 0 0;
    display: block;
`;

export const OneMeal = styled.div`
    width: 30%;
    height: 100%;
    text-align: center;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const WeekUl = styled.ul`
    width: 100%;
    display: table;
`;

export const WeekLi = styled.li`
    line-height: 45px;
    background: #f8f8f8;
    text-align: center;
    font-weight: bold;
    color: #000;
    font-size: 15px;
    display: table-cell;
    border-left: 1px #ddd solid;
    :first-child {
        border-left: none;
    }
`;

export const DayList = styled.ul`
    display: table;
    width: 100%;
    table-layout: fixed;
`;

export const DayListLi = styled.li`
    display: table-cell;
    position: relative;
    border-top: 1px #ddd solid;
    border-left: 1px #ddd solid;
`;






