import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
   const [markdown, setMarkdown] = useState('## markdown preview');
   return (
      //  npm install react-markdown
      <main>
         <section className="markdown">
            {/* inside the textarea is displaying the useState which is the markdown */}
            <textarea
               className="input"
               value={markdown}
               cols="30"
               rows="10"
               //  as we type we want to setMarkdown
               onChange={(e) => setMarkdown(e.target.value)}
            ></textarea>
            {/* part where we convert markdown  */}
            <article className="result">
               <ReactMarkdown>{markdown}</ReactMarkdown>
            </article>
         </section>
      </main>
   );
}

export default App;
