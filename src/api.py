from flask import Flask,request,jsonify,make_response,render_template

import psycopg2
import sys
sys.path.append('c:\\users\\ma2ryou\\appdata\\local\\programs\\python\\python38\\lib\\site-packages')
from flask_restful import Api, Resource
from flask_cors import CORS
import json



"""sql文
CREATE TABLE public."DataAll"
(
    "userID" integer NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    passwd text COLLATE pg_catalog."default" NOT NULL,
    address text COLLATE pg_catalog."default",
    phonenumber integer,
    "isStudent" boolean DEFAULT true,
    "scheduleID" integer NOT NULL DEFAULT nextval('"DataAll_scheduleID_seq"'::regclass),
    schedule date[],
    "homeworkID" integer NOT NULL DEFAULT nextval('"DataAll_homeworkID_seq"'::regclass),
    subject text COLLATE pg_catalog."default",
    range text COLLATE pg_catalog."default",
    classdays integer,
    CONSTRAINT "DataAll_pkey" PRIMARY KEY ("userID")
)

TABLESPACE pg_default;

ALTER TABLE public."DataAll"
    OWNER to pgadmin;
"""

# connect postgreSQL
users = 'pgadmin' # initial user
dbnames = 'ScheduleSystem'
passwords = 'pgadmin'
conn = psycopg2.connect(" user=" + users +" dbname=" + dbnames +" password=" + passwords)
app = Flask(__name__)

CORS(app)
@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

# connect postgreSQL


@app.route('/')
def hello():
    query = ""

    if request.args.get('id') is not None:
        query = request.args.get('id')
        cur = conn.cursor()
        # cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ")
        cur.execute('SELECT * FROM public."DataAll" Where "userID"={0}'.format(query))
        results = cur.fetchall()

        # output result
        #print(results)
        # print(type(results[0]))
        name = results[0][1]
        iD = results[0][0]
        data = [
            {"iD": iD,
            "name": name,
            "passwd": results[0][2],
            "address": results[0][3],
            "phonenumber":results[0][4],
             "isStudent":results[0][5],
            "classdays":results[0][11]}
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
        cur.execute('SELECT "userID","passwd" FROM public."DataAll" Where "userID"={0} '.format(queryID))
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


@app.route('/post' ,methods = ["POST"])
def sendpost():
    return jsonify({
        'status': 'None id',
        'data': request.form("userID")
    })

@app.route('/create',methods= ["POST"])
def create():
    queryID = ""
    queryname = ""
    querypass = ""
    queryaddress =""
    queryphonenumber =""
    queryisStudent = ""
    queryscheduleID =""
    schedule =""
    queryhomeworkID =""
    querysubject = ""
    queryrange = ""

    if request.form('id') is not None and request.form('passwd') is not None:
        queryID = request.form('id')
        queryname = request.form('name')
        querypass = request.form('passwd')
        queryaddress = request.form('address')
        queryphonenumber = request.form('phonenumber')
        queryisStudent = request.form('isStudent')
        queryscheduleID = request.form('scheduleID')
        schedule = request.form('schedule')
        queryhomeworkID = request.form('homeworkID')
        querysubject = request.form('subject')
        queryrange = request.form('range')
        cur = conn.cursor()
        # cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ")
        cur.execute('INSERT INTO public."DataAll" VALUES('
                    + queryID,queryname,querypass,queryaddress,queryphonenumber,queryisStudent,queryscheduleID,schedule,
                    queryhomeworkID,querysubject,queryrange+')')
        results = cur.fetchall()

        # output result
        # print(type(results[0]))
        id = results[0][0]
        password = results[0][1]
        #print(request.args.get('passwd'))
        #print(queryID)

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