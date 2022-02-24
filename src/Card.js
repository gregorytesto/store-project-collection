

const Card = ({project}) => {
    return (
        <div className ="card">
            <div className="card-top">
                <div className="screenshot">
                    <img src="screenshot" alt="screenshot" />
                </div>
                <div className="name-author">
                    <h3>Project Name</h3>
                    <h4>Author</h4>
                </div>
            </div>
            <p>deployed link</p>
            <p>github link</p>
            <p>extra features</p>
        </div>
    )
}

export default Card