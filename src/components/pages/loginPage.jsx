import { useState } from 'react';
import MyInput from '../UI/MyInput/MyInput';
import MyButton from '../UI/MyButton/MyButton';
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';


const loginPage = () => {

    const {login} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const navigate = useNavigate();

    const submit  =  async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await login(email.trum(), password)
            console.log("LOgin ok, token:", localStorage.getItem('access_token'))
            navigate("/tasks", {replace: true})
        } catch {
            setError('Ошибка входа: проверь email/пароль или подтверди почту.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
        <form onSubmit={submit}> 
            <MyInput 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Введите свой Емайл'
            />
            <MyInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Введите свой пороль'
            />
            
            <MyButton >
                {loading ? "Входим" : "Войти"}
            </MyButton>
        </form>

        <div>
            Нет аккаунта? <a href="/register">Регистрация</a>
        </div>
        </div>
    );
};

export default loginPage;