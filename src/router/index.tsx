import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/main-layout'
import React from 'react'
import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'
import QuestionLayout from '../layout/question-layout'
import List from '../pages/manage/list'
import Star from '../pages/manage/star'
import Trash from '../pages/manage/trash'
import NotFound from '../pages/not-found'
import ManageLayout from '../layout/manage-layout'
import Edit from '../pages/question/edit'
import Stat from '../pages/question/stat'
import TextPage from '../pages/test'

export default createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <List />,
          },
          {
            path: 'star',
            element: <Star />,
          },
          {
            path: 'trash',
            element: <Trash />,
          },
        ],
      },
    ],
  },
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <Edit />,
      },
      {
        path: 'stat/:id',
        element: <Stat />,
      },
    ],
  },
  {
    path: '/test',
    element: <TextPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
