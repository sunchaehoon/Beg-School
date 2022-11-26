import React from 'react';
import * as S from './Styld';
import { Link } from "react-router-dom";

const Header = () => {
    const baseurl = "http://localhost:3000";

    return (
        <>
            <S.SchIcon />
            <S.HeaderWrap>
                <ul>
                    {
                        window.location.href === baseurl + "/Cafeteria"
                        ? <S.OnNavLi><Link to='/Cafeteria'>급식</Link></S.OnNavLi>
                        : <S.NavLi><Link to='/Cafeteria'>급식</Link></S.NavLi>
                    }
                    {
                        window.location.href === baseurl + "/Schedule"
                        ? <S.OnNavLi><Link to='/Schedule'>시간표</Link></S.OnNavLi>
                        : <S.NavLi><Link to='/Schedule'>시간표</Link></S.NavLi>
                    }
                    {
                        window.location.href === baseurl + "/Notice"
                        ? <S.OnNavLi><Link to='/Notice'>학사공지</Link></S.OnNavLi>
                        : <S.NavLi><Link to='/Notice'>학사공지</Link></S.NavLi>
                    }
                    {
                        window.location.href === baseurl + "/Community"
                        ? <S.OnNavLi><Link to='/Community'>커뮤니티</Link></S.OnNavLi>
                        : <S.NavLi><Link to='/Community'>커뮤니티</Link></S.NavLi>
                    }
                </ul>
            </S.HeaderWrap>
        </>
    );
};

export default Header;