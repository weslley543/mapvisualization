import React, {useState} from 'react'
import api from '../../services/api';
import  './styles.css';

export default function Login({history}){
    
        const [email, setEmail] = useState('');
        const [senha, setSenha] = useState('');
      
        async function handleSubmit(event) {
          event.preventDefault();
          try {
            let response = await api.post('/login',
              {
                email,
                password:senha
              }
            )
            if(response.status === 200){
              let result = JSON.parse(response.request.response);
              console.log(result);
              const {_id} = result.user;
              const {token} = result;
              localStorage.setItem('user', _id);
              localStorage.setItem('token', token);
              history.push('/dashboard');
      
            }
            
          } catch (err) {
            console.log(err);
          }
        }
      
        return (
          <div className='container'>
            <div className='content'>
              <p>Login no dashboard</p>
              <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Email *</label>
                <input type="email" id="email" placeholder="Email" onChange={event => setEmail(event.target.value)} />
                <label htmlFor='senha'>Senha *</label>
                <input type="password" id="senha" placeholder="Senha" onChange={event => setSenha(event.target.value)} />
                <button className='button'>Enviar</button>
      
      
              </form>
            </div>
          </div>
    )
}