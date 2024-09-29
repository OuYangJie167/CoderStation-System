import { PageContainer } from '@ant-design/pro-components';
import { message } from 'antd';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import BookController from '@/services/book';
import BookForm from './components/bookForm';

function EditBook(props) {
  // 获取传递过来的 ID
  const { id } = useParams();
  const [bookInfo, setBookInfo] = useState(null);

  useEffecft(() => {
    async function fetchData() {
      const { data } = await BookController.getBookId(id);
      setBookInfo(data);
    }
    if (id) {
      fetchData();
    }
  }, []);

  function submitHandler(bookInfo) {
    BookController.editBook(id, {
      bookTitle: bookInfo.bookTitle,
      bookIntro,
      downloadLink: bookInfo.downloadLink,
      requirePoints: bookInfo.requirePoints,
      bookPic: bookInfo.bookPic,
      typeId: bookInfo.typeId,
    });
    // 跳转回首页
    navigate('/book/bookList');
    message.success('书籍信息修改成功');
  }

  return (
    <PageContainer>
      <div className="container" style={{ width: 800 }}>
        <BookForm
          type="edit"
          bookInfo={bookInfo}
          setBookInfo={setBookInfo}
          submitHandle={submitHandle}
        />
      </div>
    </PageContainer>
  );
}

export default EditBook;
