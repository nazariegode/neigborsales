from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os

# Cargar variables de entorno
load_dotenv()

app = Flask(__name__)

# Configuración del servidor de correo
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')  # tu correo
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')  # tu contraseña
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)

@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.get_json()

    # Extraer los datos del pedido
    nombre = data.get('nombre')
    apellido = data.get('apellido')
    email = data.get('email')
    cart = data.get('cart')  # Detalle del carrito

    # Crear el mensaje con el pedido
    message_body = f"Pedido de: {nombre} {apellido}\n"
    message_body += f"Email del comprador: {email}\n\n"
    message_body += "Detalles del pedido:\n"

    for item in cart:
        message_body += f"- {item['name']} x {item['quantity']}\n"

    try:
        # Crear y enviar el correo
        msg = Message('Nuevo Pedido', sender='tu-correo@gmail.com', recipients=[email, 'correo_tienda@gmail.com'])
        msg.body = message_body
        mail.send(msg)

        return jsonify({"message": "Correo enviado exitosamente"}), 200
    except Exception as e:
        print(f"Error al enviar el correo: {e}")
        return jsonify({"error": "No se pudo enviar el correo"}), 500

if __name__ == '__main__':
    app.run(debug=True)
