import BookController from '@/services/book';
import { PageContainer } from '@ant-design/pro-components';
import { message } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from './components/BookForm';

function AddBook(props) {
  const navigate = useNavigate();
  const [newBookInfo, setNewBookInfo] = useState({
    bookTitle: '',
    bookIntro: '',
    downloadLink: '',
    requirePoints: '',
    bookPic: '',
    typeId: '',
  });

  /**
   * 确认新增书籍
   */
  function submitHandle(bookInfo) {
    //直接调用控制器方法进行一个信息
    BookController.addBook({
      BookTitle: newBookInfo.bookTitle,
      bookInfo,
      downloadLink: newBookInfo.downloadLink,
      requirePoints: newBookInfo.requirePoints,
      bookPic: newBookInfo.bookPic,
      typeId: newBookInfo.typeId,
    });

    message.success('添加书籍成功');
    navigate('/book/bookList');
  }

  return (
    <PageContainer>
      <div className="container" style={{ width: '1000px' }}>
        <BookForm
          type="add"
          bookInfo={newBookInfo}
          setBookInfo={setNewBookInfo}
          submitHandle={submitHandle}
        />
      </div>
    </PageContainer>
  );
}

export default AddBook;
