from flask import Flask, render_template, url_for, request, redirect
import sqlite3

app = Flask(__name__, template_folder="templates")


def create_database():
    conn = sqlite3.connect("todo.db")
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, task TEXT)''')
    conn.commit()
    conn.close()


@app.route("/")
def index():
    create_database()
    conn = sqlite3.connect("todo.db")
    c = conn.cursor()
    c.execute("SELECT * FROM tasks")
    tasks = c.fetchall()
    conn.close()
    return render_template("index.html", tasks=tasks)


if __name__ == "__main__":
    create_database()
    app.run(debug=True)