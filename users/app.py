from flask import Flask


def create_app():
    app = Flask(__name__)

    from modules.routers.users_routers import user_bp

    app.register_blueprint(user_bp)

    return app


if __name__ == "__main__":
    server = create_app()
    server.run(debug=True)
