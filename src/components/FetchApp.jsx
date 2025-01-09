import { useEffect } from "react"
import { useFetch } from "../hooks/useFetch"

export const FetchApp = () => {

    const url = 'https://jsonplaceholder.typicode.com/users'

    const { data, isLoading, error, fetchData } = useFetch(url)

    // este lo mandamos en caso de post o put
    const body = {
        title: 'foo',
        body: 'bar',
        userId: 1
    }

    useEffect(() => {
      fetchData(url, 'get')
    }, [])
    

    return (
        <>
            <h1>Lista de usuarios</h1>
            {
                isLoading
                    ? <h4>Cargando...</h4>
                    : error
                        ? <h4>Ha ocurrido un errror {console.log(error)}</h4>
                        : <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(user =>
                                    <tr key={user.id}>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.website}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
            }
        </>
    )
}
