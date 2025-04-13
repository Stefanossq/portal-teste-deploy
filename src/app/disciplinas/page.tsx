'use client';

import { useState } from 'react';

export default function Disciplinas() {
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [selectedDiscipline, setSelectedDiscipline] = useState<number | null>(null);

  const semestres = [
    {
      semestre: '1º Semestre',
      disciplinas: [
        { 
          nome: 'Matemática Discreta', 
          codigo: 'MAT101', 
          ementa: '/path/to/ementa1.pdf',
          professor: 'Prof. João Silva',
          imagemProfessor: '/path/to/professor1.svg'
        },
        { 
          nome: 'Algoritmos e Estruturas de Dados', 
          codigo: 'ALG102', 
          ementa: '/path/to/ementa2.pdf',
          professor: 'Prof. Maria Oliveira',
          imagemProfessor: '/path/to/professor2.svg'
        },
        { 
          nome: 'Introdução à Programação', 
          codigo: 'INF103', 
          ementa: '/path/to/ementa3.pdf',
          professor: 'Prof. Carlos Souza',
          imagemProfessor: '/path/to/professor3.svg'
        },
      ],
    },
    {
      semestre: '2º Semestre',
      disciplinas: [
        { 
          nome: 'Cálculo I', 
          codigo: 'CAL201', 
          ementa: '/path/to/ementa4.pdf',
          professor: 'Prof. Ana Costa',
          imagemProfessor: '/path/to/professor4.svg'
        },
        { 
          nome: 'Estruturas de Dados', 
          codigo: 'ALG202', 
          ementa: '/path/to/ementa5.pdf',
          professor: 'Prof. Lucas Rocha',
          imagemProfessor: '/path/to/professor5.svg'
        },
      ],
    },
    {
      semestre: '3º Semestre',
      disciplinas: [
        { 
          nome: 'Álgebra Linear', 
          codigo: 'ALG301', 
          ementa: '/path/to/ementa6.pdf',
          professor: 'Prof. Clara Martins',
          imagemProfessor: '/path/to/professor6.svg'
        },
        { 
          nome: 'Sistemas Operacionais', 
          codigo: 'SO302', 
          ementa: '/path/to/ementa7.pdf',
          professor: 'Prof. João Pereira',
          imagemProfessor: '/path/to/professor7.svg'
        },
      ],
    },
    {
      semestre: '4º Semestre',
      disciplinas: [
        { 
          nome: 'Probabilidade e Estatística', 
          codigo: 'PE401', 
          ementa: '/path/to/ementa8.pdf',
          professor: 'Prof. Felipe Oliveira',
          imagemProfessor: '/path/to/professor8.svg'
        },
        { 
          nome: 'Redes de Computadores', 
          codigo: 'RC402', 
          ementa: '/path/to/ementa9.pdf',
          professor: 'Prof. Sofia Gomes',
          imagemProfessor: '/path/to/professor9.svg'
        },
      ],
    },
    {
      semestre: '5º Semestre',
      disciplinas: [
        { 
          nome: 'Engenharia de Software', 
          codigo: 'ES501', 
          ementa: '/path/to/ementa10.pdf',
          professor: 'Prof. Rafael Silva',
          imagemProfessor: '/path/to/professor10.svg'
        },
        { 
          nome: 'Banco de Dados', 
          codigo: 'BD502', 
          ementa: '/path/to/ementa11.pdf',
          professor: 'Prof. Luana Costa',
          imagemProfessor: '/path/to/professor11.svg'
        },
      ],
    },
    {
      semestre: '6º Semestre',
      disciplinas: [
        { 
          nome: 'Inteligência Artificial', 
          codigo: 'IA601', 
          ementa: '/path/to/ementa12.pdf',
          professor: 'Prof. Marcos Souza',
          imagemProfessor: '/path/to/professor12.svg'
        },
        { 
          nome: 'Compiladores', 
          codigo: 'CPL602', 
          ementa: '/path/to/ementa13.pdf',
          professor: 'Prof. Larissa Ferreira',
          imagemProfessor: '/path/to/professor13.svg'
        },
      ],
    },
    {
      semestre: '7º Semestre',
      disciplinas: [
        { 
          nome: 'Arquitetura de Computadores', 
          codigo: 'AC701', 
          ementa: '/path/to/ementa14.pdf',
          professor: 'Prof. Daniel Rocha',
          imagemProfessor: '/path/to/professor14.svg'
        },
        { 
          nome: 'Desenvolvimento Web', 
          codigo: 'DW702', 
          ementa: '/path/to/ementa15.pdf',
          professor: 'Prof. Beatriz Alves',
          imagemProfessor: '/path/to/professor15.svg'
        },
      ],
    },
    {
      semestre: '8º Semestre',
      disciplinas: [
        { 
          nome: 'Tópicos Avançados em Programação', 
          codigo: 'TAP801', 
          ementa: '/path/to/ementa16.pdf',
          professor: 'Prof. João Siqueira',
          imagemProfessor: '/path/to/professor16.svg'
        },
        { 
          nome: 'Gestão de Projetos de Software', 
          codigo: 'GPS802', 
          ementa: '/path/to/ementa17.pdf',
          professor: 'Prof. Carla Lima',
          imagemProfessor: '/path/to/professor17.svg'
        },
      ],
    },
  ];

  const handleSemesterClick = (index: number) => {
    setSelectedSemester(selectedSemester === index ? null : index);
    setSelectedDiscipline(null);
  };

  const handleDisciplineClick = (index: number) => {
    setSelectedDiscipline(selectedDiscipline === index ? null : index);
  };

  return (
    <div className="disciplinas-page">
      <h1>Disciplinas</h1>
      <div className="semestres-container">
        {semestres.map((semestre, semestreIndex) => (
          <div key={semestreIndex} className="semestre-block">
            <h2 onClick={() => handleSemesterClick(semestreIndex)} className="clickable">
              {semestre.semestre}
            </h2>

            {selectedSemester === semestreIndex && (
              <ul>
                {semestre.disciplinas.map((disciplina, disciplinaIndex) => (
                  <li key={disciplinaIndex} onClick={() => handleDisciplineClick(disciplinaIndex)} className="clickable">
                    {disciplina.nome}
                    {selectedDiscipline === disciplinaIndex && (
                      <div className="disciplina-details">
                        <p>Código: {disciplina.codigo}</p>
                        <p>Professor: {disciplina.professor}</p>
                        <div className="professor-image">
                          <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="20" fill="#4CAF50" />
                            <text x="25" y="30" fontSize="14" fill="white" textAnchor="middle">P</text>
                          </svg>
                        </div>
                        <a href={disciplina.ementa} download>
                          Download da Ementa
                        </a>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
