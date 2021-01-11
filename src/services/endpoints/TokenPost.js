import React from 'react'

const TokenPost = () => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [token, setToken] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();
        
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username, password
            }),
        }).then(res => {
            console.log(res);
            return res.json();
        }).then((json) => {
            console.log(json);
            setToken(json.token);
            return json;
        })
    }

    return (
        <form onSubmit={handleSubmit}> 
            <label htmlFor="text">Nome de usuário</label>
            <input id="text" type="text" value={username} onChange={({target}) => setUsername(target.value)}/>


            <label htmlFor="password">Senha</label>
            <input id="password" type="password" value={password} onChange={({target}) => setPassword(target.value)}/>

            <button type="submit">Enviar</button>

            <p style={{wordBreak: 'break-all'}}>{token}</p>
        </form>
    )
}

export default TokenPost

