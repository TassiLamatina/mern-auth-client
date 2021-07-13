export default function Welcome() {
    return(
        <div className="container"> 
            <div className="col-md-9">
                <img src="https://placedog.net/600" alt="" />
                </div>
                <div className="col-md-3">
                <form id="sign-up" method="POST" action="/user">
                    <div class="mb-3">
                    <label class="form-label">Username:</label>
                    <input class="form-control" type="text" name="username"/>
                    </div>
                    <div class="mb-4">
                    <label class="form-label">Zipcode:</label>
                    <input class="form-control" type="number" name="zipcode"/>
                    </div>
                    <input class="btn" type="submit" />
                </form>
            </div>
        </div>
    )
}