import { useEffect } from 'react';
import { useAuthStore } from '../store/auth.store'

export const LoginPage = () => {
    const authStatus = useAuthStore(state => state.status);
    const login = useAuthStore(state => state.login);
    const logout = useAuthStore(state => state.logout);
    const user = useAuthStore(state => state.user);

    useEffect(() => {
        setTimeout(() => {
            logout()
        }, 1500);
    }, [])



    if (authStatus === 'checking') {
        return <h3>Loading...</h3>
    }

    return (
        <div>
            <h3>LoginPage</h3>

            <p>
                {authStatus === 'authenticated' ?
                    <div>
                        Autenticado como :{JSON.stringify(user, null, 2)}
                    </div> :
                    <div>
                        No autenticado
                    </div>
                }
            </p>


            <p>
                {authStatus === 'authenticated' ?
                    <button onClick={logout}>
                        Salir
                    </button> :
                    <button onClick={() => login('daniela@gmail.com', '123')}>
                        Ingresar
                    </button>
                }
            </p>
        </div>
    )
}
