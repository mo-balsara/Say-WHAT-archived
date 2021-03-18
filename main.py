from flask import Flask, render_template
import requests

app = Flask('app')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/read/<id>')
def read(id):
    resp = requests.get('https://saywhatserver.lamaqdahodwala.repl.co/read/{0}'.format(id))
    content = list(resp.text)
    badchars = [
        '[', ']',
        '"', ',', "'",
        ' '
    ]
    content = [i for i in content if i not in badchars]
    print(content)
    return render_template('read.html', title=content[0], author=content[1], story=content[2])
app.run('127.0.0.1', port=5555)
