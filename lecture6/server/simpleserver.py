#!/usr/bin/python
# Simple HTTP server to test node.js applications with AJAX
# NOTE: This must be invoked on the /client directory


import SimpleHTTPServer
import SocketServer
import random
from time import sleep

PORT = 8080	# Port to connect to

# Begin configuration - change these parameters for the server to have interesting behaviors

delay = True		# Should there be a delay ?
minDelay = 0 		# if so, the minimum delay in seconds
maxDelay = 5 		# if so, the maximum delay in seconds
introduceError = True 	# Should we have the server returning an error
errorProb = 0.50	# If so, with what probability should we introduce errors

# End of configuration - change the code below only if you know what you're doing

class MyRequestHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path.startswith('/hello'):
		# If it's an AJAX request - send a response
		success = True
		if introduceError:
			success = (random.random() >= errorProb)
			errorCode = 400 + random.randint(0, 25)
		if success:
			self.send_response(200)
		else:
			self.send_error(errorCode)
		self.send_header('Content-type','text/html')
		self.end_headers()

		# if delay parameter is set, Sleep for a random number of seconds
		if delay: sleep(random.randint(minDelay, maxDelay))
		
		# Extract the message number and send it back
		count = self.path.split('-')[1]
		self.wfile.write("World" + count) #call sample function here
		return
	else: 
		# It's a request for a file - return the file
        	return SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)

Handler = MyRequestHandler
server = SocketServer.TCPServer(('0.0.0.0', PORT), Handler)
print "Starting server on port",PORT 
server.serve_forever()
