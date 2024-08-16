from flask import Flask

if __name__ == "__main__":

    app = Flask(__name__)

    @app.route("/api/python")
    def hello_world():
        return "<p>Hello, World!</p>"
    
    app.run()