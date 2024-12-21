---
title: TESJO Clima
where: Tecnologico de Estudios Superiores de Jocotitlan
stack: [React, Node.js, Express, PostgreSQL, Scikit-learn, React Query]
start: 2022-09
end: null
img: tesjoclima.webp
video: https://www.youtube.com/watch?v=8Q6J9Q1Z9ZQ
abstract: Aplicación web para conocer el clima del TESJO desde cualquier parte del mundo.
---

Tesjo Clima es una aplicación web que permite a los usuarios conocer el clima del TESJO desde cualquier parte del mundo. La aplicación muestra información detallada sobre la temperatura, humedad, velocidad del viento y pronóstico del clima. Se recolecta informacion de una estacion meteorologica ubicada en el TESJO y se procesa con un modelo de machine learning para predecir el clima futuro.

Para la interfaz web se hace uso de React junto con React Query para manejar los datos de la API. En el backend se utiliza Node.js con Express para servir la API y PostgreSQL para almacenar los datos.

El forecast del clima se realiza con un modelo de machine learning desarrollado con Scikit-learn. Se realizan predicciones de la temperatura, humedad y velocidad del viento usando un modelo de regresión lineal.
