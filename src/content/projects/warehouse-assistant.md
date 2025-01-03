---
title: Asistente de almacen
where: Tecnologico de Estudios Superiores de Jocotitlan
stack:
  [
    Astro,
    FastAPI,
    SQLite,
    React,
    Tailwind CSS,
    Raspberry Pi,
    OpenCV,
    YOLO,
    TensorFlow,
    ONNX,
    Edge TPU,
  ]
start: 2024-09
end: still
img: warehouse-assistant.webp
video: https://www.youtube.com/watch?v=8Q6J9Q1Z9ZQ
abstract: Sistema de visión artificial para automatizar la auditoría de inventarios en almacenes.
url: https://www.youtube.com/watch?v=8Q6J9Q1Z9ZQ
---

En promedio se suelen perder de 2 a 3 semanas al año en la auditoría de inventarios en almacenes. El asistente de almacen es un sistema de visión artificial que automatiza la auditoría de inventarios en almacenes. El sistema es capaz de identificar y contar los productos en un estante en cuestión de segundos usando inferencia en la nube y en el borde. Ademas de esto el sistema se basa en normativas industriales como la ANSI y la OSHA de marcaje de suelos para detectar posibles infracciones.

El prototipo se compone de una cámara conectada a una Raspberry Pi que captura imágenes de los estantes. Las imágenes son procesadas por un modelo de detección de objetos YOLOv8 que identifica los productos en el estante. Posteriormente, un software de estimación de profundidad calcula la distancia de los productos al lente de la cámara. Finalmente, un algoritmo de conteo de objetos cuenta los productos en el estante.

El prototipo forma parte de una arquitectura cliente-servidor. La Raspberry Pi actúa como cliente y envía las imágenes al servidor para ser procesadas. El servidor es una API REST desarrollada con FastAPI que recibe las imágenes, las procesa y envía los resultados de vuelta a la Raspberry Pi. El servidor también almacena los resultados en una base de datos SQLite para su posterior análisis.

Los resultados se visualizan en una interfaz web desarrollada con Astro, React y Tailwind CSS. La interfaz muestra las imágenes capturadas por la cámara, los productos identificados y contados, y un historial de auditorías. La interfaz también cuenta con un dashboard que muestra estadísticas sobre los productos en el almacén. Ademas se puede realizar inferencia en tiempo real con un modelo exportado a TensorFlow JS.

El prototipo cuenta con inferencia en la nube y en el borde. La inferencia en la nube se realiza con un servidor de FastAPI y modelos en formato ONNX . La inferencia en el borde se realiza con un acelerador de inferencia Edge TPU Hailo conectado a la Raspberry Pi ejectuando un modelo de YOLOv8 optimizado para Edge TPU en formato EFF.
