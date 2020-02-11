import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { paragraph1, paragraph2, paragraph3 } from './Instructions.js'
import Header from './Header.js'
import List from './List.js'
import Footer from './Footer.js'
import Footer2 from './Footer2.js'



function App() {
  return (

<div>
    <Header />
    <body class="actualBody">
        <div>
            <img src="choco-pizza.png" class="pizza" />
</div>
      {paragraph1}
       {paragraph2}
       {paragraph3}

        <article>
          <List />
        </article>
        <hr />
    
    </body>
        <footer>
    <Footer />
        </footer>
    
    <footer>
     <Footer2 />
    </footer>


</div>
    


    
  
  );
}

export default App;
