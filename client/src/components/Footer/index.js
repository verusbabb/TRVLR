import "./style.css";

function Footer() {
    return (
        <>
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col l8 s12">
                            <h5 className="white-text">Development Team</h5>
                            <p className="grey-text text-lighten-4">We all got our start at KU's coding bootcamp!</p>
                        </div>
                        <div className="col l4 s12">
                            <h5 className="white-text">Dev Team GitHub</h5>
                            <ul>
                                <li><a className="white-text" href="https://github.com/verusbabb">Steve Babb</a></li>
                                <li><a className="white-text" href="https://github.com/koltondecker">Kolton Decker</a></li>
                                <li><a className="white-text" href="https://github.com/cgouge93">Carly Gouge</a></li>
                                <li><a className="white-text" href="https://github.com/cmoss703">Christina Moss</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                </div>
            </footer>
        </>
    )
}

export default Footer;