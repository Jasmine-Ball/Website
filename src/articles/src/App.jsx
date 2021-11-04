// Jasmine Ball 3/11/2021
import React, {useState, useEffect} from 'react';

const api = 'https://www.jasmineball.net/philosophy-api/';

const FetchAPI = () => {
    const [body, setBody] = useState([]);
    const getBody = async () => {
        const re = await fetch(api);
        const body = await re.json();
        setBody(body);
    };

    useEffect( () => {
        getBody();
    }, []);

	return (

    <>
    {body.map((x) => {
    return(
      <>
      {x.Heading}
      {x.Body}
      {x.URL}
      </>
    )
    })
    }
	</>

  );
};

export default FetchAPI;
