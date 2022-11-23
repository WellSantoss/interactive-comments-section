import React from 'react';
import GlobalStyle, { Container } from './style/GlobalStyles';
import Comment from './components/Comment/Comment';
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

    getComments();
  }, []);

  return (
    <>
      <Container>
        <Comment />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
