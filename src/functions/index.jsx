const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail', // o tu servicio de correo
  auth: {
    user: 'tu_email@gmail.com', // tu correo
    pass: 'tu_password', // tu contraseña de correo
  },
});

exports.sendOrderEmail = functions.firestore
  .document("orders/{orderId}")
  .onCreate(async (snapshot, context) => {
    const order = snapshot.data();

    // Correo de destinatario (cliente)
    const mailOptions = {
      from: 'tu_email@gmail.com',
      to: order.email,
      subject: 'Confirmación de Compra',
      html: `
        <h1>Gracias por tu compra, ${order.nombre}!</h1>
        <p>Detalles de tu compra:</p>
        <ul>
          ${order.cart.map(item => `<li>${item.nombre} - ${item.cantidad}</li>`).join('')}
        </ul>
        <p>Tu número de orden es: ${order.orderId}</p>
      `,
    };

    try {
      // Enviar el correo
      await transporter.sendMail(mailOptions);
      console.log("Correo enviado con éxito!");
    } catch (error) {
      console.error("Error al enviar correo:", error);
    }
  });
