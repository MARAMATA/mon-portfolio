#!/bin/bash
echo "Démarrage du serveur Flask..."

# Attendre que la base de données soit prête (optionnel, mais recommandé)
until pg_isready -h switchyard.proxy.rlwy.net -p 54807 -U postgres; do
  echo "En attente de la base de données..."
  sleep 2
done

# Appliquer les migrations avant le démarrage du serveur
flask db upgrade  

# Lancer Gunicorn pour exécuter l'application Flask
exec gunicorn -w 4 -b 0.0.0.0:5001 app:app