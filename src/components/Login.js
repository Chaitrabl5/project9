import {useDispatch, useSelector} from "react-redux"
import { loginActions } from "../features/login/login-slice"
//import { login } from "../features/login/login-slice"
import classes from './Login.css'


const Login = () => {
    const dispatch = useDispatch()

    const isAuth = useSelector(state => state.auth.isAuthenticated)

    const loginHandler = (event) => {
        event.preventDefault()
        dispatch(loginActions.login())

    }

    return (
        <main className={classes.auth}>
        <section>
        <form onSubmit={loginHandler}>
        <div className={classes.control}>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' />
        </div>
        <div className={classes.control}>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' />
        </div>
        <button>Login</button>
        </form>
        </section>
        </main>
        );
}

export default Login