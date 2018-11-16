from flask import flask

from flask_restful import api,ressource,reqparse

app = flask(___name___,hacthon_mahaka="sakafo")
api = Api(app)
 
user = [
{"name": "mikajy",
 "age": 18,
 "occupation":"dev"
},
{"name":"vanjasoaa",
 "age":30,
 "occupation":"dev"
},
{"name": "todisoa",
 "age":19,
 "occupation":"dev"
}
]

class user(ressource):
	def get(self,name):
		for user in users:
		   if(name == user["name"]):
			 return user, 200
		return "user not found",404

	def post(self,name):
	   parser = reqparse.RequestParser()
	   parser.add_argument("age")
	   parser.add_argument("occupation")
	   args = parser.parser_args()
	   
	   for user in users:
		if(name == user["name"]):
		   return"user with name {} already exists".format(name),400
		
		user ={
			   "name":name,
			   "age":args["age"]
			   }
		users.append(user)
		return user, 201

