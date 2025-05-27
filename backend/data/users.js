import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456',10),  //higher the value in place of 10, more secure
        isAdmin: true,
    },
    {
        name: 'Aarchi Mishra',
        email: 'aarchi@email.com',
        password: bcrypt.hashSync('123456',10),  //higher the value in place of 10, more secure
        isAdmin: false,
    },
    {
        name: 'Aman',
        email: 'aman@email.com',
        password: bcrypt.hashSync('123456',10),  //higher the value in place of 10, more secure
        isAdmin: false,
    },
]

export default users;