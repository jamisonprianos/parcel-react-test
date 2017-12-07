import React from 'react';
import { Container, Form, Button, Input } from 'semantic-ui-react';
import translate from '../../lib/lang';

import './LoginForm.scss';

export default class LoginForm extends React.Component {

  render = () => {
    const { language } = this.props;
    const _ = translate(language);
    return (
      <Container text className="login-form">
        <h2>{_('LOGIN_FORM.TITLE')}</h2>
        <Input
          name="username"
          placeholder={_('LOGIN_FORM.USERNAME_HINT')}
          size="huge"
          iconPosition="left"
          icon="user"
          focus
        />
        <Input
          type="password"
          name="password"
          placeholder={_('LOGIN_FORM.PASSWORD_HINT')}
          size="huge"
          iconPosition="left"
          icon="lock"
          focus
        />
        <div>
          <Button
            size="massive"
            floated="right"
            positive
          >{_('LOGIN_FORM.LOGIN_BUTTON')}</Button>
        </div>
    </Container>
    );
  }

}
