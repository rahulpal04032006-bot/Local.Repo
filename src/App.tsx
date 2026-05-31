import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// import Student from './Student'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <h1>Welcome to My Web Page</h1>
   <h2>Introduction</h2>
   <p>Hello everyone I am React that is framework of java scripts</p>
   <audio controls>
    <source src="kinna sona.mp3"type="audiomp3/"></source>
   </audio><br />
   <img src="https://i.pinimg.com/564x/92/14/14/9214148d71059266d22b8383c7cf7606.jpg"width="400" height="500"/><br />
   <button>Click me</button>
   <iframe width="560" height="315" src="https://www.youtube.com/embed/PJutG613i7E?si=WmEY8gRfffUA2v_-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><br />
   <video controls>
    <source src=""type="videomp4/"></source>
   </video>
   </div>

  )
}

export default App