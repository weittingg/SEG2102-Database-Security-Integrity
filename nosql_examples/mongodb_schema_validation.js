// Schema validation to enforce data integrity in MongoDB

db.createCollection("employees", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["emp_id", "name", "role"],
      properties: {
        emp_id: {
          bsonType: "int",
          description: "Employee ID must be an integer and is required"
        },
        name: {
          bsonType: "string",
          description: "Employee name must be a string and is required"
        },
        role: {
          enum: ["admin", "manager", "staff"],
          description: "Role must follow predefined values"
        }
      }
    }
  }
});
