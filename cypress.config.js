const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const { faker } = require('@faker-js/faker'); //Importamos o faker 

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());

       // 2. Definimos nossas tasks aqui, dentro do setupNodeEvents
      on("task", {
        geradorDeUser(){
          const generateCpf = () => {
            let cpf = '';
            for (let i = 0; i < 11; i++) {
              cpf += Math.floor(Math.random() * 10);
            }
            return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
            // Alternativa com slice (também funciona e é bem legível):
            // return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}`;
          };

          // A task retorna um objeto com todos os dados gerados
          return {
            nome: faker.name.fullName(),
            email: faker.internet.email().toLowerCase(),
            cpf: generateCpf(),
          };
        },
      });

      const version = config.env.version || 'dev'
      config.env = require(`./cypress/config/${version}.json`)
      config.baseUrl = config.env.baseUrl
      return config
    },
  },
});