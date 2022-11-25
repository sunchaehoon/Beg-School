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
    padding: 0
`;

export const OneMeal = styled.div`
    width: 30%;
    height: 100%;
    text-align: center;
    font-size: 20px;
    display: flex;
    align-items: center;
`;






