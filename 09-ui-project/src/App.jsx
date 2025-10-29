import React from 'react'
import NavBar from './component/section-1/NavBar/NavBar.jsx'
import Page1Content from './component/section-1/paig1-content/Page1Content.jsx'
let imgPaths ={
  img1 : 'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=423',
  img2 : 'https://images.unsplash.com/photo-1761585906138-caca3037ae01?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387',
  img3: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387'
}
const App = () => {
  return (
    <div>
      <NavBar/>
      <Page1Content images ={imgPaths} />
    </div>
  )
}

export default App
