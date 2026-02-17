import React, { useState } from 'react';
import {supaSingUp} from '../../services/SupaBase/supaBaseAuth';
import MyInput from '../UI/MyInput/MyInput';
import MyButton from '../UI/MyButton/MyButton';

const loginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const headleSubmit = async (e) => {
        e.preventDefault();
        setEmail("")
        setSuccess("")

        if (!email.includes("@")) return setError("Введите корректный email ");
        if (password.length < 6) return setPassword("Пороль минимум 6 символов ");
        if (password !== password2) return setPassword2("Пороли не совпадают ");

        setLoading(true)
        try {
            await supaSingUp(email.trim(), password);

            setSuccess("Готово! Проверь почту и подтверди email, потом зайди в аккаунт.")
            setEmail("")
            setPassword("")
            setPassword2("")
        } catch (error) {
            setError("Ошибка регистрации:  " + (error.message || "unknown"))
        } finally {
            setLoading(false)
        }

    }
    return (
        <div>
            <h1>Регистрация</h1>
            <form onSubmit={headleSubmit}>
                <MyInput 
                    type="email"
                    value={email}
                    placeholder="Введите email почту"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <MyInput 
                    type="password"
                    value={password}
                    placeholder="Введите пороль"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <MyInput 
                    type="password"
                    value={password2}
                    placeholder="Введите пороль"
                    onChange={(e) => setPassword2(e.target.value)}
                />


                <MyButton>

                    {loading ? "Создаем..." : "Зарегистрироватся"}

                </MyButton>
            </form>
        </div>
    );
};

export default loginPage;