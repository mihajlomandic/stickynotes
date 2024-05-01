
    task = request.form['task']
    conn = sqlite3.connect('todo.db')
    c = conn.cursor()