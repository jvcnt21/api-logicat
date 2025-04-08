import React from 'react';
import { Avatar } from 'primereact/avatar';
import profileImage from '../../assets/profile.jpg';
import 'primeflex/primeflex.css';
import './sobre.css';

export default function Sobre() {
  return (
    <div className="sobre flex flex-column justify-content-between min-h-screen w-full p-4">
      <div className="conteudo flex flex-column gap-5 max-w-screen-lg mx-auto">
          <section>
          <h2 className="text-xl font-semibold mb-2">Descrição</h2>
            <p>
            Este projeto é uma aplicação de micro front-ends (facilitando o desenvolvimento individiual de um módulo especifico)
            para cadastro e gestão de parceiros e empresas externas. 
            </p>
            <p>
            A aplicação utiliza React (com PrimeReact) e Angular 15.
            O projeto é containerizado para facilitar o deploy em ambientes de cloud, como AWS ECS.
            </p>

          <h2 className="text-xl font-semibold mb-2">Tecnologias Utilizadas</h2>
            <ul className="list-disc pl-4">
              <li>Frontend: React, PrimeReact, Angular 15</li>
              <li>Containerização: Docker</li>
              <li>JS-Cookie: Gestão de cookies</li>
              <li>Vite: Build da aplicação</li>
              <li>Vercel: Deploy aplicação</li>
              <li>Styled-Components</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">Estrutura do Projeto</h2>
            <ul className="list-disc pl-4">
              <li>src/ - Código-fonte da aplicação.</li>
              <li>public/ - Arquivos estáticos e index.html.</li>
            </ul>

          <h2 className="text-xl font-semibold mb-2">Visão Geral</h2>
          <p>
            Funcionaria tanto como agenda e quadro organizador, quanto como para o <strong>desenvolvimento do TCC</strong> em si, 
            oferecendo ferramentas como um formatador de texto para a ABNT em LaTeX e funcionalidades personalizadas de acordo 
            com o objetivo do trabalho.
          </p>

          <h2 className="text-xl font-semibold mb-2">Integrantes</h2>
            <ul className="list-disc pl-4">
              <li>Ana Clara Vicente - Desenvolvedora front-end</li>
              <li>Gabriel Chrystopher - Desenvolvedora full stack</li>
              <li>Julio Vicente - Desenvolvedora full stack</li>
              <li>Julio Lisboa - Desenvolvedora front-end</li>
              <li>Pedro Magalhães - Desenvolvedora back-end</li>
            </ul>
        </section>

      </div>

      {/* Rodapé */}
      <footer className="footer">
        <Avatar image={profileImage} size="xlarge" shape="circle" />
        <span>Desenvolvido pela <strong className="text-purple-400">LogiCat</strong></span>
      </footer>
    </div>
  );
}
