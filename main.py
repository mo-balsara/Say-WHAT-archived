from flask import Flask, render_template
import requests

app = Flask('app')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/read/<id>')
def read(id):
    resp = requests.get('https://saywhatserver.lamaqdahodwala.repl.co')
    content = resp.text
    return content
app.run('127.0.0.1', port=5555)