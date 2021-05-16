import { Container } from "../Grid";
import "./style.css";

function Card(props) {
    return (
        <>
            <Container>
                <div className="card  no-shadows center-align">
                    <div className="card-content">
                        {props.children}
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Card;