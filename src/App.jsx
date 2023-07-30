import { useState } from 'react'
import './App.css'
import Input from './Components/Input'

function App() {
  let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*+-'
  let resul = ''
  let [pass, setPass] = useState('')
  let [copy, setCopy] = useState('Copiar')
  let [passTam, setPassTam] = useState(12)
  let tamSenha = passTam
  function gerarSenha() {
    for (let i = 0; i < tamSenha; i++) {
       resul += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }
    setCopy('Copiar')
  setPass(resul)  
  }

  function copyText() {
    navigator.clipboard.writeText(pass)
    setCopy('Copiado !')
  }
  return (
    <div id='caixa'>
    <h1>Gerador de senhas</h1>
    <div>
      <label htmlFor="passSize">Tamanho da senha:
      <Input passTam={passTam} setPassTam={setPassTam}/>
      </label>
    </div>
    <div id='btnDiv'>
    <button onClick={gerarSenha} className='btns'>Gerar senha de {passTam} caracteres</button> <button onClick={copyText} className='btns'>{copy}</button>
    </div>
    <span id='senhaGerada'>{pass}</span>
    </div>
  )
}

export default App
