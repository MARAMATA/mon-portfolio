# Utilisation d'une image Python officielle optimisée
FROM python:3.10-slim

# Définition du répertoire de travail
WORKDIR /app

# Copier le contenu du backend dans l'image
COPY backend /app

# Installer les dépendances
RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

# Exposer le port 5001 pour le service Flask
EXPOSE 5001

# Démarrer l'application
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5001", "app:app"]