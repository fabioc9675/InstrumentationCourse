import requests
import numpy as np

resp = requests.post("http://localhost:5000/api/curso", json={
                     "lugar": "Casa", "temperatura": 20*np.random.rand(), "humedad": 100*np.random.rand(), "ruido": [50*np.random.rand(), 30*np.random.rand()]})

print(resp.text)
