describe('HTTPS Requests', () => {
  
  it('Create User', () => {
    cy.request({
      method: 'POST',
      url: 'https://demoqa.com/Account/v1/User',
      body: {
        userName: "abc4464236vfsd1234",
        password: "Abcd123414dc25!"
      }
    }).then((response) => {
      // Verifica o status da resposta
      expect(response.status).to.eq(201); 
      
      // Verifica se a propriedade 'status' existe e seu valor é 'Success'
      expect(response.body).to.have.property('status', 'Success'); 
    });
  });

});
