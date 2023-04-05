import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilGamepad,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Games',
    to: '/dashboard',
    icon: <CIcon icon={cilGamepad} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  // {
  //   component: CNavTitle,
  //   name: 'Theme',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Anxiety Levels',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Social Anxiety Disorder',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Agoraphobia',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Separation Anxiety',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Panic Disorder',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Specific Phobias',
        to: '/base/collapses',
      },
      // {
      //   component: CNavItem,
      //   name: 'List group',
      //   to: '/base/list-groups',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Navs & Tabs',
      //   to: '/base/navs',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Pagination',
      //   to: '/base/paginations',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Placeholders',
      //   to: '/base/placeholders',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Popovers',
      //   to: '/base/popovers',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Progress',
      //   to: '/base/progress',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Spinners',
      //   to: '/base/spinners',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Tables',
      //   to: '/base/tables',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Tooltips',
      //   to: '/base/tooltips',
      // },
    ],
  },
  {
    component: CNavItem,
    name: 'Benefits',
    to: '/buttons/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavGroup,
  //   name: 'Benefits',
  //   to: '/buttons',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Teamwork',
  //       to: '/buttons/buttons',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Critical thinking',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Strategy and Leadership',
  //       to: '/buttons/dropdowns',
  //     },
  //   ],
  // },
  {
    component: CNavItem,
    name: 'Disadvantages',
    to: '/forms/select',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavGroup,
  //   name: 'Disadvantages',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Anxiety',
  //       to: '/forms/form-control',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Lack of motivation',
  //       to: '/forms/select',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Dehydration',
  //       to: '/forms/checks-radios',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Poor Sleep Hygiene',
  //       to: '/forms/range',
  //     },
      // {
      //   component: CNavItem,
      //   name: 'Input Group',
      //   to: '/forms/input-group',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Floating Labels',
      //   to: '/forms/floating-labels',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Layout',
      //   to: '/forms/layout',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Validation',
      //   to: '/forms/validation',
      // },
  //   ],
  // },
  {
    component: CNavItem,
    name: 'Charts',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'We What Do',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
          component: CNavItem,
          name: 'Why Anxiety Occurs',
          to: '/base/navs',
      },
      
      {
        component: CNavItem,
        name: 'Your Anxiety Level',
        to: '/base/list-groups',
      },
      // {
      //   component: CNavItem,
      //   name: 'CoreUI Brands',
      //   to: '/icons/brands',
      // },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: 'Notifications',
  //   to: '/notifications/badges',
  //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Notifications',
  //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Toasts',
  //       to: '/notifications/toasts',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      // {
      //   component: CNavItem,
      //   name: 'Error 404',
      //   to: '/404',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Error 500',
      //   to: '/500',
      // },
    ],
  },
  {
    component: CNavItem,
    name: 'About Us ',
    // href: 'https://coreui.io/react/docs/templates/installation/',
    to: '/notifications/alerts',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
