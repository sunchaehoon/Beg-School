import React from 'react';
import * as S from './Styld';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <S.SchIcon />
            <S.HeaderWrap>
                <ul>
                    <S.OnNavLi><Link to='/Cafeteria'>급식</Link></S.OnNavLi>
                    <S.NavLi><Link to='/Schedule'>시간표</Link></S.NavLi>
                    <S.NavLi><Link to='/Notice'>학사공지</Link></S.NavLi>
                    <S.NavLi><Link to='/Community'>커뮤니티</Link></S.NavLi>
                </ul>
            </S.HeaderWrap>
        </>
    );
};

export default Header;