import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'coder station',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      icon: 'HomeOutlined',
    },
    {
      name: '管理员',
      path: '/admin',
      icon: 'UserOutlined',
      routes: [
        {
          name: '管理员列表',
          path: 'adminList',
          component: './Admin',
        },
        {
          name: '添加管理员',
          path: 'addAdmin',
          component: './Admin/addAdmin',
        },
      ],
    },
    {
      name: '用户',
      path: '/user',
      icon: 'TeamOutlined',
      routes: [
        {
          name: '用户列表',
          path: 'userList',
          component: './User',
        },
        {
          name: '添加用户',
          path: 'addBook',
          component: './Book/addBook',
        },
      ],
    },
    {
      name: '书籍',
      path: '/book',
      icon: 'ReadOutlined',
      routes: [
        {
          name: '书籍列表',
          path: 'bookList',
          component: './Book',
        },
        {
          name: '添加书籍',
          path: 'addBook',
          component: './Book/addBook',
        },
      ],
    },
    {
      name: '面试题',
      path: '/interview',
      component: './Interview',
      icon: 'EditOutlined',
    },
    {
      name: '问答',
      path: '/issue',
      component: './Issue',
      icon: 'ProfileOutlined',
    },
    {
      name: '评论',
      path: '/comment',
      component: './Comment',
      icon: 'CalendarOutlined',
    },
    {
      name: '类型',
      path: '/type',
      component: './Type',
      icon: 'AppstoreOutlined',
    },
  ],
  npmClient: 'npm',
});
