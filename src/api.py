from flask import Flask,request,jsonify,make_response,render_template
import psycopg2
import sys
sys.path.append('c:\\users\\ma2ryou\\appdata\\local\\programs\\python\\python38\\lib\\site-packages')
from flask_restful import Api, Resource
from flask_cors import CORS
import json

"""sql文
CREATE TABLE public."User"
(
    "userID" integer NOT NULL,
    name character varying COLLATE pg_catalog."default",
    passwd character varying COLLATE pg_catalog."default" NOT NULL,
    address text COLLATE pg_catalog."default",
    phonenumber integer,
    "isStudent" boolean DEFAULT true,
    classdays integer DEFAULT 4,
    CONSTRAINT "User_pkey" PRIMARY KEY ("userID")
)

TABLESPACE pg_default;

ALTER TABLE public."User"
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

@app.route('/')
def userInfo():
    query = ""

    if request.args.get('id') is not None:
        query = request.args.get('id')
        cur = conn.cursor()
        # cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ")
        cur.execute('SELECT * FROM public."User" Where "userID"={0}'.format(query))
        results = cur.fetchall()

        name = results[0][1]
        iD = results[0][0]
        data = [
            {"iD": iD,
            "name": name,
            "passwd": results[0][2],
            "address": results[0][3],
            "phonenumber":results[0][4],
             "isStudent":results[0][5],
            "classdays":results[0][6]}
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

#UserのIDとPasswd表示
@app.route('/getUser')
def getUserandPasswd():
    queryID = ""
    querypass = ""

    if request.args.get('id') is not None and request.args.get('passwd')is not None:
        queryID = request.args.get('id')
        cur = conn.cursor()
        # cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ")
        cur.execute('SELECT "userID","passwd" FROM public."User" Where "userID"={0} '.format(queryID))
        results = cur.fetchall()

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

#UserのInsert
@app.route('/create',methods= ["POST"])
def create():
    queryID = ""
    queryname = ""
    querypass = ""
    queryaddress = ""
    queryphonenumber =""
    queryisStudent = ""
    #Post通信のデータを受信
    json = request.get_json();

    if json['data'][0]['userID'] is not None and json['data'][0]['passwd'] is not None:
        queryID = json['data'][0]['userID']
        queryname = json['data'][0]['name']
        querypass = json['data'][0]['passwd']
        queryaddress = json['data'][0]['address']
        queryphonenumber = json['data'][0]['phonenumber']
        queryisStudent = json['data'][0]['isStudent']
        cur = conn.cursor()

        #INSERT_SQL = """INSERT INTO public."User" ("userID", name, passwd, address, "phonenumber", "isStudent") VALUES """
        # cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ")
        try:
            cur.execute('INSERT INTO public."User" ("userID", name, passwd, address, "phonenumber", "isStudent") VALUES' + str((queryID,queryname,querypass,queryaddress,queryphonenumber,queryisStudent)))
            print((queryID,queryname,querypass,queryaddress,queryphonenumber,queryisStudent))
            print(str(queryID)+",\'"+queryname+"\',\'"+querypass+"\',\'"+queryaddress+"\',"+str(queryphonenumber)+","+str(queryisStudent))
        except Exception as e:
            conn.rollback()
        else:
            conn.commit()

        results = cur.description
        print(results)
        result = 'Insert:ID' + str(queryID)
        cur.close()
        conn.commit()
        return jsonify({
            'status': 'OK',
            'data': result
        })
    else:
        return jsonify({
            'status': 'CANNOT INSERT',
            'data': "NO DATA"
        })

#Userのタプルを削除
@app.route('/delete')
def deleteUser():
    queryID =""

    if request.args.get('id') is not None:
        queryID = request.args.get('id')
        cur = conn.cursor()
        print(queryID)
        # cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ")
        cur.execute('DELETE FROM public."User" WHERE "userID"={0} '.format(queryID))
        print('DELETE FROM public."User" WHERE "userID"={0} '.format(queryID))
        results = cur.description
        print(results)
        cur.close()
        conn.commit()
        return jsonify({
           'status': 'DELETED!',
           'data': results
        })

    else:
        return jsonify({
        'status': 'None id',
        'data': ""
    })

#Userの更新
@app.route('/update', methods = ['POST'])
def userUpdate():

    queryID = ""
    queryname = ""
    querypass = ""
    queryaddress = ""
    queryphonenumber =""
    queryclassdays = ""
    json = request.get_json()

    if json['data'][0]['userID'] is not None:
        queryID = json['data'][0]['userID']
        queryname = json['data'][0]['name']
        queryaddress = json['data'][0]['address']
        queryphonenumber = json['data'][0]['phonenumber']
        queryclassdays = json['data'][0]['classdays']
        cur = conn.cursor()
        print(queryID)
        # cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ")
        cur.execute('UPDATE public."User" SET name = \''+ queryname + '\',address = \''
                    +queryaddress +'\',phonenumber = '+ str(queryphonenumber)+',classdays = ' + str(queryclassdays) + ' WHERE "userID"=' + str(queryID))
        print('UPDATE public."User" SET name = \''+ queryname + '\',address = \''
                    +queryaddress +'\',phonenumber = '+ str(queryphonenumber)+',classdays = ' + str(queryclassdays) + ' WHERE "userID"=' + str(queryID))
        results = cur.description
        # output result
        # print(type(results[0]))
        # print(request.args.get('passwd'))
        # print(queryID)
        cur.close()
        conn.commit()
        return jsonify({
           'status': 'UPDATEED!',
           'data': results
        })

    else:
        return jsonify({
        'status': 'None id',
        'data': ""
    })

## おまじない
if __name__ == "__main__":
    app.run(port=8000,debug=True)