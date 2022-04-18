import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

export default function Header() {



    return(
        <div>
            <h1>HEADER</h1>
            <h2><Link to='experiance'><FormattedMessage id="Experiance"/></Link></h2>
        </div>
    )
}