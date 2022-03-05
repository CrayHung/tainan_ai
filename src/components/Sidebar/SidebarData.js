import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

// 此處為sidebar所需之data, Sidebar & Submenu 皆用 map 來讀取內容渲染在sidebar內

export const SidebarData = [
  {
    title: '違規紅燈直行、右轉及左轉',
    path: '#',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: '未審查案件',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '資料查詢',
        path: '/searchtable',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '數據分析',
        path: '/tableapp',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: '不依行向專用車道行駛偵測',
    path: '#',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: '未審查案件',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '資料查詢',
        path: '/searchtable',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '數據分析',
        path: '/tableapp',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: '機車行駛於禁行機慢車道',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: '未審查案件',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '資料查詢',
        path: '/searchtable',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '數據分析',
        path: '/tableapp',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: '機慢車停等區車輛違規停放',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: '未審查案件',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '資料查詢',
        path: '/searchtable',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '數據分析',
        path: '/tableapp',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: '未保持路口淨空',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: '未審查案件',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '資料查詢',
        path: '/searchtable',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '數據分析',
        path: '/tableapp',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: '跨越禁止變換車道線',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: '未審查案件',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '資料查詢',
        path: '/searchtable',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '數據分析',
        path: '/tableapp',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: '車輛未禮讓行人',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: '未審查案件',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '資料查詢',
        path: '/searchtable',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '數據分析',
        path: '/tableapp',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: '違規臨時)停車偵測',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: '未審查案件',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '資料查詢',
        path: '/searchtable',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '數據分析',
        path: '/tableapp',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  }
];