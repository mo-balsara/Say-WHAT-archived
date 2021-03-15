from flask import Flask, render_template
import requests

app = Flask('app')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/read/<id>')
def read(id):
    return id
app.run('0.0.0.0', port=5555)