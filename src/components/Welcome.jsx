export default function Welcome() {
    return(
        <div className="container-fluid"> 
            <div className="row vh-100">
                <div className="col-xs-12 col-md-8 pb-5-xs splash text-center">
                    <img className="img-fluid" src="https://placedog.net/600/600" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 form">
                    <form id="sign-in" method="POST" action="/profile">
                        <div className="pt-5 mb-3">
                            <label className="form-label">SIGN IN:</label>
                            <input className="form-control" type="text" name="username" placeholder="Username or email"/>
                        </div>
                        <div className="mb-4 text-center">
                            <input className="form-control mb-3" type="number" name="password" placeholder="Password"/>
                            <input className="sign-in-submit" type="submit"></input>
                        </div>
                    </form>
                    <div className="account text-center">
                    <p>Don't have an account?</p>
                    <button type="button" className="create-acc">Create Acccount</button>
                    </div>
                </div>
            </div>
        </div>
    )
}