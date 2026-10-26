var APP_DATA = {
  "scenes": [
    {
      "id": "0-planta-baja",
      "name": "PLANTA BAJA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.0007766641204476343,
        "pitch": 0.31504892050736544,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": 0.7302955925172974,
          "pitch": -0.0837903548645258,
          "rotation": 6.283185307179586,
          "target": "1-primer-piso"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9877741748595952,
          "pitch": 0.5629275625341705,
          "title": "Capsule Homes (1964), Archigram",
          "text": "<div>El concepto de casas cápsula surge luego de la Segunda Guerra Mundial, cuando aumentan los costos de las viviendas y la escasez de suelo edificable en las ciudades. Se hizo necesario un cambio hacia viviendas mucho más simples y compactas.</div><div><br></div><div>Ciertos colectivos arquitectónicos utópicos, como Archigram, desarrollaron el concepto de espacio capsular como una intervención estratégica en el diseño urbano.</div>"
        },
        {
          "yaw": 2.6482658823955285,
          "pitch": -0.21250897923227363,
          "title": "Vivienda adaptable",
          "text": "<div>Una de las fortalezas de este proyecto es que las cápsulas, al ser prefabricadas, pueden \"despegarse\" del núcleo y cambiarse de lugar a gusto.</div><div><br></div><div>Imaginamos entonces que las cápsulas podrían ser colocadas en lugares que difieren entre sí, y con funciones variadas. Ej: área de investigación científica, en un bosque.</div>"
        },
        {
          "yaw": -0.5790707075103771,
          "pitch": 0.04422226548193109,
          "title": "Interior moderno",
          "text": "<div>En su concepción, las cápsulas de Archigram tomaron inspiración de naves espaciales, por lo cual fueron pensadas con un mobiliario práctico y casi futurista en mente.</div><div><br></div><div>Optamos, en cambio, por diseñar el interior de forma moderna, pensado para un uso cómodo y grato para el usuario.</div>"
        }
      ]
    },
    {
      "id": "1-primer-piso",
      "name": "PRIMER PISO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.023076626325028826,
        "pitch": 0.30888494253167664,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": 0.7340884836973096,
          "pitch": 0.7228091635783134,
          "rotation": 3.141592653589793,
          "target": "0-planta-baja"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.03306421876181176,
          "pitch": -0.02770021291212288,
          "title": "Módulo genera hogares distintos",
          "text": "El módulo de las cápsulas se repite, y puede apilarse para generar varios pisos. Pueden formarse hogares de uno, dos o tres pisos (módulos)."
        }
      ]
    }
  ],
  "name": "CAPSULE HOMES ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
