import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError();
    console.error(error)
    return (
        <h1>Error</h1>
    )
}