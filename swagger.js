const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Coworking Space API",
      version: "1.0.0",
      description: "API documentation for coworking space system",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        User: {
          type: "object",
          properties: {
            _id: { type: "string", description: "MongoDB ID", example: "66116fc2c1d24f3d5f34b2b3" },
            name: { type: "string", description: "User's name", example: "Phrim" },
            email: { type: "string", description: "Email address", example: "phrim@gmail.com" },
            tel: { type: "string", description: "Phone number", example: "0123456789" },
            role: { type: "string", enum: ["user", "admin"], description: "Role of user", example: "user" },
            balance: { type: "number", description: "Balance in Baht", example: 500 },
            resetPasswordToken: { type: "string", nullable: true, description: "Reset token", example: "xxxx" },
            resetPasswordExpire: { type: "string", format: "date-time", nullable: true, description: "Token expiry", example: "2025-05-01T12:00:00Z" },
            createdAt: { type: "string", format: "date-time", description: "Account creation date", example: "2025-04-01T14:20:00Z" },
          },
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
