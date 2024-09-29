import { PageContainer } from '@ant-design/pro-components';
import { message } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from './components/userForm';

import UserController from '@/services/user';
function AddUser(props) {
  const navigation = useNavigate();

  const [newUserInfo, setNewUserInfo] = useState({
    loginId: '',
    loginPwd: '',
    avatar: '',
    nickname: '',
    mail: '',
    qq: '',
    wechat: '',
    intro: '',
  });

  /**
   * 提交新增用户
   */
  function submitHandler() {
    UserController.addUser(newUserInfo);
    navigation('/user/userList');
    message.success('添加用户成功');
  }

  return (
    <PageContainer>
      <div className="container" style={{ width: '800px' }}>
        <UserForm
          type="add"
          userInfo={newUserInfo}
          setUserInfo={setNewUserInfo}
          submitHandle={submitHandler}
        />
      </div>
    </PageContainer>
  );
}

export default AddUser;
