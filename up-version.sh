#!/bin/bash

# Leer la versión actual del archivo package.json
current_version=$(jq -r '.version' package.json)

# Dividir la versión en sus componentes (por puntos)
IFS='.' read -ra version_parts <<< "$current_version"

# Obtener la última parte de la versión y convertirla en un número
last_part="${version_parts[-1]}"
last_part=$((last_part + 1))

# Reemplazar la última parte de la versión con el nuevo número
version_parts[-1]=$last_part

# Reconstruir la versión completa separada por puntos
new_version=$(IFS='.'; echo "${version_parts[*]}")

# Actualizar el archivo package.json con la nueva versión
jq ".version = \"$new_version\"" package.json > package.json.tmp && mv package.json.tmp package.json

echo "Nueva versión: $new_version"
echo "Versión actualizada en package.json."
