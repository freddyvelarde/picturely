import os
from flask import Flask, jsonify

app = Flask(__name__)
PORT = os.environ.get("PORT")


@app.route("/")
def index():
    return jsonify({"message": "flask server is running on port: " + str(PORT)})


if __name__ == "__main__":
    app.run(debug=True)
