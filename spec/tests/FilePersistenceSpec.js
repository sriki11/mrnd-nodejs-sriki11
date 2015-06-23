
var getContactFileName = function(id) {

	// We assume contacts are stored under data sub-folder
	return "data\\" + id + "-Contact.json";
}

describe("FilePersistence Test Suite", function(){

	//var request = require('request');
	var request = require('C:/Program Files/nodejs/node_modules/npm/node_modules/request')
	var base_url = "http://localhost:3000";
	var contacts_url = base_url + "/contacts";
	var fs = require('fs');

	describe("create persist contact", function(){
		var idCreated;

		it("should create contact",function(done){

			var contact = new Object();
			contact.firstName = "jagan";
			contact.lastName = "peri";
			contact.phone = "23002300";

			//console.log(JSON.stringify(contact));
		    
		    request.post({url: contacts_url,
		    			  body: contact,
		    			  json: true
		    			}, 
		    		    function(error, response, body){
		    		        console.log('in post');
		    		        console.log(response.statusCode);
							expect(response.statusCode).toBe(200);
							console.log(body);
							idCreated = body;
							done();
					    });
		    
		});
		it("should persist contact",function(done){
		    console.log('fetching');

			var fileName = getContactFileName(idCreated);

			var obj = JSON.parse(fs.readFileSync(fileName));

			expect(obj.firstName).toBe("jagan");
			done();

		});
      
		it("should update contact",function(done){

			var updatedContact = new Object();
			updatedContact.firstName = "jagan-updated";
			request.put({
							url: contacts_url + "/" + idCreated,
							body: updatedContact,
							json: true
						},
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							console.log(body);

							var fileName = getContactFileName(idCreated);

							var obj = JSON.parse(fs.readFileSync(fileName));
							expect(obj.firstName).toBe("jagan-updated");
							done();
					    });
		});
	});

	//TODO: Fill out the test case below that posts a message to a contact
	// and retrieves it back.
	describe("post and get message to contact", function(){

		it("should post message to contact", function(done){
		    //todo: write your test case here.
		    var message = 'hello';
		    var id=0;
		    request.post({
		        url: contacts_url+'/'+id+'/'+message
		    },
		    		    function (error, response, body) {
		    		        console.log(response.statuscode);
		    		        expect(response.statuscode).tobe(200);
		    		        console.log(body);
		    		        expect(response.body).tobe('hello');
		    		        done();
		    		    });
			done();

		});

		it("should get message for contact", function(done){
			//TODO: Write your test case here.
		    var id = 0;
		    var num = 0;
		    request.get({ url: contacts_url + '/' + 'ask' + id + '/' + num }, function (error, response, body) {
		        expect(response.statuscode).toBe(200);
		        expect(response.body).toBe('hello');
		    });

		    done();

		});

	});

});
