import React from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form onubmit={() => {}}>
        <input type="text" placeholder="Adicionar um repositório" />

        {/* Sempre que precisar estilizar um elemento baseado
        em uma propriedade que ele recebe,
        esse componente deve virar um novo componente
        dentro do StyledComponents  */}
        <SubmitButton disabled>
          <FaPlus color="#FFF" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}
