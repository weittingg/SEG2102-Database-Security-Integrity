// Role-based access control in MongoDB

db.createRole({
  role: "staffReadOnly",
  privileges: [
    {
      resource: { db: "companyDB", collection: "employees" },
      actions: ["find"]
    }
  ],
  roles: []
});

db.createUser({
  user: "staffUser",
  pwd: "password123",
  roles: ["staffReadOnly"]
});
