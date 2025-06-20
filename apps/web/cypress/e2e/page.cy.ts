describe('Homepage (app/page.tsx)', () => {
  it('renders the main heading', () => {
    cy.visit('/');
    cy.get('h1').should('be.visible');
  });

  it('displays the welcome message', () => {
    cy.visit('/');
    cy.contains('Welcome'); // Adjust if your welcome text is different
  });

  it('has a non-empty page title', () => {
    cy.visit('/');
    cy.title().should('not.be.empty');
  });

  it('includes a meta description tag', () => {
    cy.visit('/');
    cy.get('meta[name="description"]').should('exist');
  });

  it('does not show 404 error', () => {
    cy.visit('/');
    cy.contains('404').should('not.exist');
  });
});
