import { LoginGuardPage } from './app.po';

describe('login-guard App', () => {
  let page: LoginGuardPage;

  beforeEach(() => {
    page = new LoginGuardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
