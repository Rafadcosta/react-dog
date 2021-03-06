import React from 'react'

const UserPost = () => {

    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();
        
        fetch('https://dogsapi.origamid.dev/json/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username, email, password
            }),
        }).then(res => {
            console.log(res);
            return res.json();
        }).then((json) => {
            console.log(json);
            return json;
        })
    }

    return (
        <form onSubmit={handleSubmit}> 
            <label htmlFor="text">Nome de usuário</label>
            <input id="text" type="text" value={username} onChange={({target}) => setUsername(target.value)}/>

            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={({target}) => setEmail(target.value)}/>

            <label htmlFor="password">Senha</label>
            <input id="password" type="password" value={password} onChange={({target}) => setPassword(target.value)}/>  {password}

            <button type="submit">Enviar</button>
        </form>
    )
}

export default UserPost
