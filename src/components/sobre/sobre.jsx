import React from 'react';
import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';
import profileImage from '../../assets/profile.jpg';
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import Curriculo from '../../assets/Curriculo_Kaya_Haufe.pdf'

export default function Sobre() {
  const header = <h1 className='mt-0'>Gestão de TCC's</h1>;
  const footer = (
    <div className="flex flex-column align-items-center">
      <Avatar image={profileImage} size="xlarge" shape="circle" />
      <label className="mt-3">Desenvolvido pela LogiCat</label>
    </div>
  );

  return (
    <div className="sobre flex justify-content-center align-items-center">
      <Card title={header} footer={footer}>
        <section>
          <h2>Visão Geral</h2>
          <p>
          Funcionaria tanto como agenda e quadro organizador, quanto como para o <strong>desenvolvimento do TCC</strong> em si, 
          oferecendo ferramentas como um formatador de texto para a ABNT em LaTeX e funcionalidades personalizadas de acordo 
          com o objetivo do trabalho.
          </p>
        </section>

        <section>
          <h2>Integrantes</h2>
          <ul>
            <li>Ana Clara Vicente</li>
            <li>Gabriel Chrystopher</li>
            <li>Julio Vicente</li>
            <li>Julio Lisboa</li>
            <li>Pedro Magalhães</li>
          </ul>
        </section>
      </Card>
    </div>
  );
}
