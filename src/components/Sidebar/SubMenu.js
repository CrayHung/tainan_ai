import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

//此為submenu的code

const SidebarLink = styled(Link)`
  display:flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 80px;
  text-decoration: none;
  font-size: 20px;
  &:hover{
    background: #252831;
    border-left: 4px solid #252831;
    cursor: pointer;
    color: #F5F5F5;
  }
`

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover{
    background: #3D88D5;
    cursor: pointer;
    color: #F5F5F5;
  }
`

const Submenu = ({ item }) => {
  const [subNav, setSubnav] = useState(false)

  const showSubnav = () => setSubnav(!subNav)

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {/* 判斷SidebarData內的數據是否存在才啟動分頁功能 */}
          {item.subNav && subNav ? item.iconOpened : item.subNav ? item.iconClosed : null}
        </div>
      </SidebarLink>
      {subNav && item.subNav.map((item, index) => {
        return (
          <DropdownLink to={item.path} key={index}>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropdownLink>
        )
      })}
    </>
  )
}

export default Submenu