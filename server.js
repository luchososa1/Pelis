const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// IMPORTANTE: Coloca aquí el enlace a tu lista de películas
const PELICULAS_URL = 'https://dl.dropbox.com/scl/fi/icazvr39cu4v8lc3pk7gb/ESTRENOS_1.m3u?rlkey=h5vh1npmhtq91y6r7odhlmr10&st=aapot3wn&dl=0'; 

app.use(cors());

app.get('/proxy', async (req, res) => {
  try {
      console.log(`Petición recibida. Buscando lista de películas en: ${PELICULAS_URL}`);
          const response = await fetch(PELICULAS_URL);
              if (!response.ok) {
                    throw new Error(`Error de red: ${response.status}`);
                        }
                            const data = await response.text();
                                console.log('Lista obtenida. Enviando al cliente.');
                                    res.send(data);
                                      } catch (error) {
                                          console.error('Error en el proxy:', error);
                                              res.status(500).send('Error al contactar al servidor de películas.');
                                                }
                                                });

                                                app.listen(PORT, () => {
                                                  console.log(`Servidor proxy de PELÍCULAS ejecutándose en http://localhost:${PORT}`);
                                                  });
                                                  