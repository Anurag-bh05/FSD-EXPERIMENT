const fs = require('fs');

const generateData = () => {
  const db = {
    users: [],
    systemData: [
      {
        id: 101,
        status: "secure",
        log: "System initialized successfully."
      }
    ]
  };

  for (let i = 1; i <= 35; i++) {
    const userRole = i <= 5 ? "admin" : "viewer";
    
    db.users.push({
      id: i,
      username: `user${i}`,
      password: `password${i}`,
      role: userRole,
      token: `HEADER.eyJyb2xlIjoi${userRole}In0.SIGNATURE`
    });
  }

  fs.writeFileSync('db.json', JSON.stringify(db, null, 2));
  console.log("db.json file successfully generated with 35 users!");
};

generateData();