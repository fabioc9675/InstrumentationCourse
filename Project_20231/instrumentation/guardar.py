import requests

url = 'http://localhost:5000/api/waterq'
objeto = {"place": "Girardota",
          "station": 2,
          "turbidity": 24,
          "color": [10, 20, 30],
          "conductivity": 8,
          "ph": 4,
          "temperature": 30}

resp = requests.post(url, json=objeto)

print(resp.text)
