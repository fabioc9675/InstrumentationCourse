import requests

url = 'http://localhost:5000/api/waterq'
objeto = {"place": "Medellin",
          "station": 1,
          "turbidity": 20,
          "color": [10, 20, 30],
          "conductivity": 2,
          "ph": 7,
          "temperature": 25}

resp = requests.post(url, json=objeto)

print(resp.text)
