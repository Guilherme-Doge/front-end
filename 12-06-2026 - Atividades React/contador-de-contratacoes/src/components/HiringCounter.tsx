// ContadorContratacoes.tsx (ou .jsx)
import React, { useState } from 'react';
import carregarNovosTalentos from '../APICaller';
import Filtrar from './FilterButton';

export default function ContadorContratacoes() {
  const [pessoas, setPessoas] = useState([]);
  const [totalGerado, setTotalGerado] = useState(0);
  const [carregando, setCarregando] = useState(false);

  const lidarComClique = async (filtro = "") => {
    setCarregando(true);
    const novosTalentos = await carregarNovosTalentos(filtro);
    
    if (novosTalentos) {
      setPessoas(prevPessoas => [...prevPessoas, ...novosTalentos]);
      setTotalGerado(prevTotal => prevTotal + 5);
    }
    setCarregando(false);
  };

  const limparLista = () => {
    setPessoas([]);
    setTotalGerado(0)
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>
        Total de talentos encontrados: {totalGerado} 📈
      </h2>
      
      <div style={{ marginBottom: '30px', textAlign: 'center', display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Filtrar genero="female" aoClicar={lidarComClique} />
        <Filtrar genero="male" aoClicar={lidarComClique} />
        
        <button 
          onClick={() => lidarComClique("")}
          disabled={carregando}
          style={{ 
            padding: '8px 15px', 
            cursor: carregando ? 'not-allowed' : 'pointer',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          {carregando ? 'Buscando...' : 'Qualquer gênero'}
        </button>

        <button 
          onClick={limparLista}
          style={{ 
            padding: '8px 15px', 
            cursor: 'pointer',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Limpar Lista 🧹
        </button>
      </div>

      {pessoas.length === 0 && (
        <p style={{ textAlign: 'center', color: '#666', fontSize: '1.2em', marginTop: '40px', fontStyle: 'italic' }}>
          Nenhum usuário selecionado. Clique em Gerar Novos.
        </p>
      )}

      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {pessoas.map((pessoa, index) => {
          const idade = pessoa.dob.age; 

          return (
            <li 
              key={pessoa.login.uuid} 
              style={{ 
                marginBottom: '15px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '20px',
                backgroundColor: 'white',
                width: '100%',
                maxWidth: '600px', 
                padding: '15px',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                border: idade > 50 ? '2px solid #d4af37' : '1px solid #eee' 
              }}
            >
              {/* Foto */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#888', minWidth: '25px' }}>
                  {index + 1}.
                </span>
                <img 
                  src={pessoa.picture.large} 
                  alt={`Foto de ${pessoa.name.first}`} 
                  style={{ borderRadius: '50%', width: '70px', height: '70px', border: '3px solid #f0f0f0' }}
                />
              </div>

              <div style={{ flexGrow: 1 }}>
                <strong style={{ fontSize: '1.2em', color: '#2c3e50' }}>
                  {pessoa.name.first} {pessoa.name.last}
                </strong>
                <span style={{ color: '#7f8c8d', marginLeft: '5px', fontSize: '0.9em' }}>
                  ({pessoa.gender}, {idade} anos)
                </span>
                
                {idade > 50 && (
                  <span style={{ backgroundColor: '#d4af37', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75em', marginLeft: '10px', fontWeight: 'bold' }}>
                    Sênior ⭐
                  </span>
                )}
                
                {idade < 30 && (
                  <span style={{ backgroundColor: '#2ecc71', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75em', marginLeft: '10px', fontWeight: 'bold' }}>
                    Jovem Talento 🚀
                  </span>
                )}
                
                <br/>
                <small style={{ color: '#666' }}>
                  <strong>Local:</strong> {pessoa.location.city}, {pessoa.location.country}
                </small>
                <br />
                <small style={{ color: '#3498db' }}>
                  <strong>Email:</strong> {pessoa.email}
                </small>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}