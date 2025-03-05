import smtplib
from email.mime.text import MIMEText
from config import Config

def send_email(subject, body, user_email, to_email):
    """
    Envoie un email via SMTP en utilisant les paramètres de configuration.
    
    :param subject: Sujet de l'email
    :param body: Contenu du message
    :param user_email: Email de l'expéditeur (sera utilisé comme "Reply-To")
    :param to_email: Email du destinataire
    """
    try:
        # Création du message
        msg = MIMEText(body, "plain", "utf-8")
        msg['Subject'] = subject
        msg['From'] = Config.SMTP_USER  # Expéditeur (compte configuré)
        msg['Reply-To'] = user_email  # Permet à l'admin de répondre directement à l'utilisateur
        msg['To'] = to_email  # Destinataire

        # Connexion au serveur SMTP
        with smtplib.SMTP(Config.SMTP_SERVER, Config.SMTP_PORT) as smtp:
            smtp.starttls()  # Active le mode sécurisé (TLS)
            smtp.login(Config.SMTP_USER, Config.SMTP_PASSWORD)  # Authentification SMTP
            smtp.send_message(msg)  # Envoi de l'email
        
        print(f"📧 Email envoyé avec succès à {to_email}")
        return True
    except Exception as e:
        print(f"❌ Erreur lors de l'envoi de l'email: {e}")
        return False