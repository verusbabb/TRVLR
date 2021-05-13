import Container from 

function Table(props) {
    return (
        <>
            <Container>
                <table>
                    <thead>
                        <tr>
                            {props.children}
                        </tr>
                    </thead>

                    <tbody>
                        {props.children}
                    </tbody>
                </table>
            </Container>
        </>
    )
}

export default Table;