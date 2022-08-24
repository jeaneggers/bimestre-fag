function Evento({nome, data, horario, local, cidade, genero}) {
    
    return(

        <div className="Evento">
            <h1>{nome}</h1>
            <p><strong>Data: </strong>{data}</p>
            <p><strong>Horário: </strong>{horario}</p>
            <p><strong>Local: </strong>{local}</p>
            <p><strong>Cidade: </strong>{cidade}</p>
            <p><strong>Gênero: </strong>{genero}</p>
        </div>
    )
}

export default Evento