const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
      openapi: "3.0.0",
      info: {title: "Coworking Space API",
            version: "1.0.0",
            description: "API documentation",},
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
  

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
