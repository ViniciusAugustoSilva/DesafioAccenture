describe('HTTPS Requests', () => {
  let authToken = null;
  let user = Math.random().toString(5).substring(2);
  let password = 'Abcdeasdf123!';

  //Create User
  it('Create User', () => {
    cy.request({
      method: 'POST',
      url: 'https://demoqa.com/Account/v1/User',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: {
        userName: user,
        password: password
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });

  //Generate Token
  it('Generate Token', () => {
    cy.request({
      method: 'POST',
      url: 'https://demoqa.com/Account/v1/GenerateToken',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: {
        userName: user,
        password: password
      }
    }).then((response) => {
      authToken = response.body.token;
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq('Success');

    });

  });


  //Autorized
  it('Autorized', () => {
    cy.request({
      method: 'POST',
      url: 'https://demoqa.com/Account/v1/Authorized',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: {
        userName: user,
        password: password
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.eq(true);
    });
  });

  //Listar Livros
  it('Listar Livros', () => {
    cy.request({
      method: 'GET',
      url: 'https://demoqa.com/BookStore/v1/Books',
      headers: {
        accept: 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);

    });

  });

  

});
