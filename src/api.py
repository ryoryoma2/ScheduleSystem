from flask import Flask,request,jsonify,make_response,render_template
from flask_restful import Api, Resource
from flask_cors import CORS
import psycopg2

CORS(app)
@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response
# connect postgreSQL
# connect postgreSQL
users = 'postgres' # initial user
dbnames = 'database_development'
passwords = 'psql6147'
conn = psycopg2.connect(" user=" + users +" dbname=" + dbnames +" password=" + passwords)
app = Flask(__name__)

@app.route('/')
def hello():
    query = ""

    if request.args.get('q') is not None:
        query = request.args.get('q')
        cur = conn.cursor()
        # cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ")
        cur.execute('SELECT * FROM public."Users" Where id={0}'.format(query))
        results = cur.fetchall()

        # output result
        print(results)
        # print(type(results[0]))
        name = results[0][1]
        iD = results[0][0]
        data = [
            {"iD": iD},
            {"name": name},
            {"id": results}
        ]

        cur.close()
        return jsonify({
            'status': 'OK',
            'data': data
        })
    else:
        return jsonify({
            'status': 'NO',
            'data': ""
        })
@app.route('/getUser')
def getUserandPasswd():
    queryID = ""
    querypass = ""

    if request.args.get('id') is not None and request.args.get('passwd')is not None:
        queryID = request.args.get('id')
        cur = conn.cursor()
        # cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ")
        cur.execute('SELECT id,passwd FROM public."User" Where id={0} '.format(queryID))
        results = cur.fetchall()

        # output result
        # print(type(results[0]))
        id = results[0][0]
        password = results[0][1]
        #print(request.args.get('passwd'))
        #print(queryID)
        if password == request.args.get('passwd'):
         data = [
            {"id": id},
            {"password": password}
         ]

         cur.close()
         return jsonify({
            'status': 'OK',
            'data': data
         })
        else:
            cur.close()
            return jsonify({
                'status': 'NO',
                'data': ""
            })
    else:
        return jsonify({
            'status': 'None id',
            'data': ""
        })

@app.route('/a')
def getSchedule():
    queryID =""
    queryDATE=""

    if request.args.get('id') is not None:
        queryID = request.args.get('id')
        cur = conn.cursor()
        # cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ")
        cur.execute('SELECT id,passwd FROM public."User" Where id={0} '.format(queryID))
        results = cur.fetchall()

        # output result
        # print(type(results[0]))
        id = results[0][0]
        password = results[0][1]
        # print(request.args.get('passwd'))
        # print(queryID)
        if password == request.args.get('passwd'):
            data = [
                {"id": id},
                {"password": password}
            ]

            cur.close()
            return jsonify({
                'status': 'OK',
                'data': data
            })
        else:
            cur.close()
            return jsonify({
                'status': 'NO',
                'data': ""
            })

    else:
        return jsonify({
        'status': 'None id',
        'data': ""
    })

## おまじない
if __name__ == "__main__":
    app.run(port=8000,debug=True)