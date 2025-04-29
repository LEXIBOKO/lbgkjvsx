export const handleLogin = () => {
    window.localStorage.setItem('usertype', 'student');
    window.localStorage.setItem('loggedin', 'true');
}

export const handleRegister = () => {
    window.localStorage.setItem('usertype', 'teacher');
    window.localStorage.setItem('loggedin', 'true');
}
