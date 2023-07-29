const bcrypt = require('bcrypt');

bcrypt.hash('password123', 10, function (err, hash) {
  console.log(hash);
});

bcrypt.compare(
  'password123',
  '$2b$10$Ap452KafcJmSmxd3J2GpeXY.Gs2sNTh3C5423Wc2vvNy6bBSM7hq',
  (err, result) => {
    if (!result) {
      throw new Error('false');
    }
  },
);
