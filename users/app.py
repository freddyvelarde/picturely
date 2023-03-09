import os
from flask import Flask, jsonify
import requests


app = Flask(__name__)
PORT = os.environ.get("PORT")


@app.route("/")
def index():
    #  return jsonify({"message": "flask server is running on port: " + str(PORT)})

    #  response = requests.get("https://jsonplaceholder.typicode.com/users")
    response = requests.get("http://pictures:8000")
    #  response = requests.get("http://localhost/api/pictures/")
    #  print(response.status_code)
    #  print(response.text)
    return jsonify(response.json())


if __name__ == "__main__":
    app.run(debug=True)
