import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// function MyApp() {
//   return (
//     <div>
//       <h1>
//         Custom React
//       </h1>
//     </div>
//   )
// }


// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }

const anotherUser = "Chai aur React"
const ReactElement = React.createElement(
  'a',
  {href:'https://googlr.com' , target: '_blank'},
  'Click me here to visit Google',
  anotherUser
)

// const AnotherElement = (
//   <a href="https://www.google.com" target="_blank">Visit Google</a>
// )


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {<App />}
    {/* <MyApp /> */}
    {/* <ReactElement /> */}
    {/* ReactElement() */}
    {/* {AnotherElement}  */}
    {ReactElement} 
  </React.StrictMode>,
)
