import React from 'react';
import * as S from './Styld';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <S.SchIcon />
            <S.HeaderWrap>
                <ul>
                    {
                        window.location.href === "http://localhost:3000/Cafeteria"
                        ? <S.OnNavLi><Link to='/Cafeteria'>급식</Link></S.OnNavLi>
                        : <S.NavLi><Link to='/Cafeteria'>급식</Link></S.NavLi>
                    }
                    {
                        window.location.href === "http://localhost:3000/Schedule"
                        ? <S.OnNavLi><Link to='/Schedule'>시간표</Link></S.OnNavLi>
                        : <S.NavLi><Link to='/Schedule'>시간표</Link></S.NavLi>
                    }
                    {
                        window.location.href === "http://localhost:3000/Notice"
                        ? <S.OnNavLi><Link to='/Notice'>학사공지</Link></S.OnNavLi>
                        : <S.NavLi><Link to='/Notice'>학사공지</Link></S.NavLi>
                    }
                    {
                        window.location.href === "http://localhost:3000/Community"
                        ? <S.OnNavLi><Link to='/Community'>커뮤니티</Link></S.OnNavLi>
                        : <S.NavLi><Link to='/Community'>커뮤니티</Link></S.NavLi>
                    }
                </ul>
            </S.HeaderWrap>
        </>
    );
};

export default Header;