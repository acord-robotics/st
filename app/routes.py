from flask import render_template, flash, redirect, url_for
from app import app

@app.before_request
def before_request():
    pass

@app.route('/')
def index():
    return render_template('index.html') 