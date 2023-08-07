import { useSelector, useDispatch } from 'react-redux';

import classes from './Header.module.css';
import { loginActions } from '../features/login/login-slice';
import {Link} from 'react-router-dom'

const Header = () => {
const dispatch = useDispatch();
const isAuth = useSelector((state) => state.auth.isAuthenticated);

const logoutHandler = () => {
dispatch(loginActions.logout());
};

return (
<header className={classes.header}>
<h1>Redux Auth</h1>

<nav>
<ul>
<li>
<Link to='/'>My Products</Link>
</li>
{isAuth &&
<li>
<button onClick={logoutHandler}>Logout</button>
</li>
}
</ul>

</nav>

</header>
);
};

export default Header;