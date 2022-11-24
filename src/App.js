import React from 'react';
import GlobalStyle, { Container } from './style/GlobalStyles';
import Comment from './components/Comment/Comment';
import Loading from './components/Loading/Loading';
import { api } from './services';

function App() {
  const [loading, setLoading] = React.useState(true);
  const [comments, setComments] = React.useState(null);

  React.useEffect(() => {
    const getComments = async () => {
      await api.get('/comments').then((response) => {
        setLoading(false);
        setComments(response.data);
      });
    };

    setTimeout(getComments, 2000);
  }, []);

  return (
    <>
      <Container>
        {loading || !comments ? (
          <Loading />
        ) : (
          comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))
        )}
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
