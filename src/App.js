import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
   const [markdown, setMarkdown] = useState('## markdown preview');
   return (
      <main>
         <section className="markdownn">
            {/* inside the textarea is displaying the useState which is the markdown */}
            <textarea
               className="input"
               value={markdown}
               cols="30"
               rows="10"
               //  as we type we want to setMarkdown
               onChange={() => setMarkdown(e.target.value)}
            ></textarea>
            {/* part where we convert markdown  */}
            <article className="result">{markdown}</article>
         </section>
      </main>
   );
}

export default App;
