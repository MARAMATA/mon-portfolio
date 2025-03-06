#!/bin/bash
echo "Démarrage du serveur Flask..."
flask db upgrade  # Appliquer les migrations
exec gunicorn -w 4 -b 0.0.0.0:5001 app:app  # Lancer le serveur avec Gunicorn