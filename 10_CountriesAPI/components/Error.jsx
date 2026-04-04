import { useRouteError } from "react-router"

const Error = () => {
    const error = useRouteError()
  return (
    <>
      <h1>Oops...Something Went Wrong {error.status}</h1>
    </>
  )
}

export default Error
