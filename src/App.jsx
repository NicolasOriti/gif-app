import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css';
import CardGif from './components/CardGif/CardGif';

function App() {
  const [allGifs, setAllGifs] = useState([]);
  const apiKey = '0kO9SwvvtweJX0hdutJDgzTxeWThPSCW';

  let baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}`;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('submit');

    const search = event.target[0].value;
    console.log(search);

    const params = {q: search}
    const urlParams = new URLSearchParams(params).toString();
    console.log(urlParams)

    fetch(`${baseUrl}&${urlParams}`)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);

        const gifs = response.data.map((gifData) => {
          return {
            id: gifData.id,
            title: gifData.title,
            url: gifData.images.downsized_medium.url,
          };
        });
        setAllGifs(gifs);
        // response.data.forEach((gifData) => {
        //   console.log(gifData.images.downsized_medium.url)
        // })
      });
  };

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log(response);

  //       const gifs = response.data.map((gifData) => {
  //         return {
  //           id: gifData.id,
  //           title: gifData.title,
  //           url: gifData.images.downsized_medium.url,
  //         };
  //       });
  //       setAllGifs(gifs);
  //       // response.data.forEach((gifData) => {
  //       //   console.log(gifData.images.downsized_medium.url)
  //       // })
  //     });
  // }, []);

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Busque un GIF</Form.Label>
          <Form.Control type='text' placeholder='dragon ball' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
      {allGifs.map((gif) => {
        return (
          <CardGif gif={gif} />
        );
      })}
    </div>
  );
}

export default App;
