import {useRouteError} from 'react-router-dom'

const Error = () => {
    const errr= useRouteError();
    console.log(errr)
  return (
    <div>
        <h1>😯Oops!!😯</h1>
        <h2>Something went wrong </h2>
      <h4 style={{color:"red"}}>!!{errr.status} {errr.statusText}</h4>:
       </div>
  )
}

export default Error