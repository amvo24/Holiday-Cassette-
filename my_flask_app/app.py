from flask import Flask

app = Flask(__name__)

@app.route('/')
def some_function():
    return "test test test"

if __name__ == "__main__":
    app.run(debug=True)