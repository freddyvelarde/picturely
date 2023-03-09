from flask import Blueprint, jsonify

import requests

user_bp = Blueprint("user", __name__)


@user_bp.route("/")
def main_route():
    # in this code we're talking with "pictures" services
    response = requests.get("http://pictures:8000")
    return jsonify({"message": "flask app", "data": response.json()})


@user_bp.route("/users")
def list_users():
    return "List users page"


@user_bp.route("/users/<int:user_id>")
def view_user(user_id):
    return f"View user page for user {user_id}"
