# Utilisation de l'image officielle Python 3.10
FROM python:3.10

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier uniquement les fichiers nécessaires
COPY backend /app

# Mettre à jour pip et installer les dépendances
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Exposer le port utilisé par Railway
ENV PORT=5001
EXPOSE $PORT

# Démarrer l'application avec Gunicorn
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5001", "app:app"]