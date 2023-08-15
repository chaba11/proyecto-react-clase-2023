const FilaCategoria = ({ categoria }) => {
    return (
        <tr>
            <th colSpan={2}>
                {categoria}
            </th>
        </tr>
    )
}

export { FilaCategoria }