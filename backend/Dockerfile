# Utilisation de l'image officielle Python
FROM python:3.10

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier tous les fichiers du backend
COPY backend/ ./

# Mettre à jour pip et installer les dépendances
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Exposer le port que Railway utilisera
ENV PORT=5001
EXPOSE $PORT

# Commande pour démarrer le backend
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5001", "app:app"]