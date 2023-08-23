describe('realizar compra',()=>{
    it('realizar compra de dos productos',()=>{
        cy.visit("https://www.demoblaze.com/")
        cy.get('[onclick*="phone"]').as('buttonPhone')
        cy.get('@buttonPhone').click()
        cy.wait(4500)
        //add to cart first product  
        cy.get('#tbodyid > div:nth-child(1) a[class="hrefch"]').click()
        cy.get('.col-sm-12 > .btn').as('butoonAddToCart')
        cy.get('@butoonAddToCart').click()
        //go to main page in phones section
        cy.get('.active > .nav-link').click()
        cy.wait(500)
        cy.get('@buttonPhone').click()
        cy.wait(4500)
        //add to cart second product
        cy.get('#tbodyid > div:nth-child(2) a[class="hrefch"]').click()
        cy.get('@butoonAddToCart').click()
        //go to cart
        cy.get('#cartur').click()
        //assert to number of products in cart
        cy.get('#tbodyid > tr').should('have.length',2)
        //confirm order in cart
        cy.get('.col-lg-1 > .btn').click()
        //insert data for confirm order
        cy.wait(3000)
        cy.get('#name').type('arturo')
        cy.get('#country').type('Colombia')
        cy.get('#city').type('Armenia')
        cy.get('#card').type(4000)
        cy.get('#month').type('diciembre')
        cy.get('#year').type(2000)
        //click to send data of form
        cy.get('#orderModal .btn-primary').click()
        //assert to confirmation buy process
        cy.wait(2000)
        cy.get('.sweet-alert > h2').should('have.text','Thank you for your purchase!')
        cy.get('p[class*="lead"]').should('contain.text','arturo')
        //finish process
        cy.get('.confirm').click()

    })
})