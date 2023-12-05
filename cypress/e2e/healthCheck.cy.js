describe('Cypress Health Check Testing', () => {
  it('Hackerstories JS', () => {
    cy.intercept(
      'GET',
      'https://hn.algolia.com/api/v1/search?query=redux&page=0&hitsPerPage=100'
    ).as('getStoriesJS')
    cy.visit('https://hackernews-seven.vercel.app/')
    cy.wait('@getStoriesJS')
      .its('response.statusCode')
      .should('be.equal', 200)
    cy.get('.table-row').should('have.length', 100)
  })

  it('Hackerstories TS', () => {
    cy.intercept(
      'GET',
      'https://hn.algolia.com/api/v1/search?query=React&page=0'
    ).as('getStoriesTS')
    cy.visit('https://wlsf82-hacker-stories.web.app/')
    cy.wait('@getStoriesTS')
      .its('response.statusCode')
      .should('be.equal', 200)
    cy.get('.item').should('have.length', 20)
  })
})
