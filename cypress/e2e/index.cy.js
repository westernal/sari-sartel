describe("login", () => {
  it("user can login.", async () => {
    //login
    cy.visit("/");
    cy.findByRole("button", { name: /ورود/i }).click();
    cy.findByPlaceholderText(/ایمیل/i).type("ali_navidi24@yahoo.com");
    cy.findByPlaceholderText(/رمز عبور/i).type("13791379al");
    cy.get("#submit-btn").click();
  });
});
