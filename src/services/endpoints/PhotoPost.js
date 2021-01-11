import React from 'react'

const PhotoPost = () => {
    const [token, setToken] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [peso, setPeso] = React.useState('');
    const [idade, setIdade] = React.useState('');
    const [img, setImg] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('img',img);
        formData.append('nome',nome);
        formData.append('peso',peso);
        formData.append('idade',idade);

        fetch('https://dogsapi.origamid.dev/json/api/photo', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            body: formData,
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
            <label htmlFor="token">Token</label>
            <input id="token" type="text" value={token} onChange={({target}) => setToken(target.value)}/>

            <label htmlFor="nome">nome</label>
            <input id="nome" type="text" value={nome} onChange={({target}) => setNome(target.value)}/>

            <label htmlFor="peso">peso</label>
            <input id="peso" type="text" value={peso} onChange={({target}) => setPeso(target.value)}/>

            <label htmlFor="idade">idade</label>
            <input id="idade" type="text" value={idade} onChange={({target}) => setIdade(target.value)}/>

            <label htmlFor="imagem">img</label>
            <input id="imagem" type="file" onChange={({target}) => setImg(target.files[0])}/>


            <button type="submit">Enviar</button>
        </form>
    )
}

export default PhotoPost

