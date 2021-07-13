export default function Welcome() {
    return(
        <div className="container"> 
            <div className="col-md-9">
                <img src="https://placedog.net/600" alt="" />
                </div>
                <div className="col-md-3">
                <form id="sign-up" method="POST" action="/user">
                    <div className="mb-3">
                    <label className="form-label">Username:</label>
                    <input className="form-control" type="text" name="username"/>
                    </div>
                    <div className="mb-4">
                    <label className="form-label">Zipcode:</label>
                    <input className="form-control" type="number" name="zipcode"/>
                    </div>
                    <input className="btn" type="submit" />
                </form>
            </div>
        </div>
    )
}