import swaggerJsDoc from "swagger-jsdoc";
/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - ISBN
 *       properties:
 *         title:
 *           type: string
 *           description: Title of the book
 *         author:
 *           type: string
 *           descripton: Name of the author of the book
 *         ISBN:
 *           type: string
 *           descripton: ISBN of the book
 *       example:
 *         title: A great book
 *         author: John
 *         ISBN: 9780744066868
 *     BookUpdate:
 *       type: object
 *       optional:
 *         - title
 *         - author
 *         - ISBN
 *       properties:
 *         title:
 *           type: string
 *           description: Title of the book
 *         author:
 *           type: string
 *           descripton: Name of the author of the book
 *         ISBN:
 *           type: string
 *           descripton: ISBN of the book
 *       example:
 *         title: An updated book title
 *         author: A new author
 *         ISBN: 9780744066868
 *
 * @swagger
 *  tags:
 *    name: Books
 */
const swaggerSpec = swaggerJsDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Book API",
      version: "1.0.0",
      description: "CRUD Book API",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: [
    `${__dirname}/auth/auth.routes.ts`,
    `${__dirname}/routes.ts`,
    `${__dirname}/swagger.ts`,
  ],
});

export default swaggerSpec;
