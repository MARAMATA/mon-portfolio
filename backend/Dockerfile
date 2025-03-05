# Utilisation d'une image Python officielle
FROM python:3.10

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier tous les fichiers du backend dans le conteneur
COPY . /app

# Installer les dépendances
RUN pip install --no-cache-dir -r requirements.txt

# Définir la commande de démarrage
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5001", "app:app"]