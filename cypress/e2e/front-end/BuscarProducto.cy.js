describe('CASOS DE PRUEBA TESTINGGYES', () => {


    it('TC-1: FE | Buscar Producto', () => {
        cy.visit('http://www.testingyes.com/onlineshop/');
        cy.get('.ui-autocomplete-input').type('Mug');
        cy.get('button > .material-icons').click();
        cy.get('[data-id-product="19"] > .thumbnail-container > .thumbnail > img').should('be.visible');
        cy.screenshot();
    });

    it('TC-2: FE | Seleccionar y agregar un producto al carrito', () => {
        cy.visit('http://www.testingyes.com/onlineshop/');
        cy.get('[href="http://www.testingyes.com/onlineshop/3-clothes"]').click();
        cy.get('[data-id-product="1"] > .thumbnail-container > .thumbnail > img').click();
        cy.get(':nth-child(2) > label > .input-color').click();
        cy.get('.add > .btn').click();
        cy.get('.cart-content-btn > .btn-primary').click();

    });
    
    it('TC-3: FE | Eliminar un producto al carrito', () => {
        cy.visit('http://www.testingyes.com/onlineshop/');
        cy.get('#category-9 > .dropdown-item').click();
        cy.get('[data-id-product="3"] > .thumbnail-container > .thumbnail > img').click();
        cy.get('.add > .btn').click();
        cy.get('.cart-content-btn > .btn-primary').click();
     });

    it('TC-4: FE | Filtrar por categorias Clothes', () => {
        cy.visit('http://www.testingyes.com/onlineshop/');
        cy.get('[href="http://www.testingyes.com/onlineshop/3-clothes"]').click();
        cy.get('.category-sub-menu > :nth-child(1) > a').click()
        cy.get(':nth-child(4) > .facet-label > .custom-checkbox > .ps-shown-by-js').click();
        cy.get('.thumbnail > img').should('be.visible');      
    });

    it('TC-5: FE | Filtrar por categorias Art', () => {
        cy.visit('http://www.testingyes.com/onlineshop/');
        cy.get('#category-9 > .dropdown-item').click();
        cy.get(':nth-child(3) > .facet-label > .custom-checkbox > .ps-shown-by-js').click();

            
    });


});