from flask import Flask, render_template

app = Flask('app')

@app.route('/')
def home():
    return render_template('index.html')

app.run('127.0.0.1', port=5555)