// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/send-email', (req, res) => {
    const { nombre, direccion, email, cart } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    const emailContent = `
        <h1>Gracias por tu compra, ${nombre}!</h1>
        <p>Dirección: ${direccion}</p>
        <h2>Productos Comprados:</h2>
        <ul>
            ${cart.map(item => `<li>${item.name} - ${item.quantity}</li>`).join('')}
        </ul>
    `;

    let mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Detalles de tu compra',
        html: emailContent
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
