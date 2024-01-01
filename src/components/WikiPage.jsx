// client/src/components/WikiPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WikiPage({ match }) {
  const [pageContent, setPageContent] = useState({ title: '', html: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/read/${match.params.slug}`);
        setPageContent(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [match.params.slug]);

  return (
    <div>
      <h1>{pageContent.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageContent.html }} />
    </div>
  );
}

export default WikiPage;
