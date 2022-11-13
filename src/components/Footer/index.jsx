import { loginFormVar } from 'graphql/reactive-var/login-form';
import P from 'prop-types';
import * as Styled from './styles';

export const Footer = () => {
  loginFormVar.use();
  return (
    <Styled.Container>
      <div>
        {/* <a
          href="https://www.udemy.com/user/luiz-otavio-miranda/"
          rel="noopener noreferrer"
          title="Conheça os cursos"
          target="_blank"
        > */}
        <span>&lt;Dev&gt;</span>
        Posts APP
        <span>&lt;/Dev&gt;</span>
        {/* </a> */}
      </div>
    </Styled.Container>
  );
};

Footer.propTypes = {
  children: P.node,
};
