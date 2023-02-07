import Content from './content.js';
// functional component to functional component

function Card() {
    return (
        <>
            <Content>
                <div className="card" style={{ width: "18rem", border: "2px solid black" }}>
                    <div className="card-body">
                        <h5 className="card-title">Welcome</h5>
                        <p className="card-text">Thank you for visiting our website</p>
                    </div>
                </div>
            </Content><br />
            <Content>
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Do you wish to continue</h5>
                        <button className="btn btn-primary">Yes</button>
                        <button className="btn btn-default">No</button>
                    </div>
                </div>
            </Content>
        </>
    );
}
export default Card;
