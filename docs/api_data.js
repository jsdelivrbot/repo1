define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "C__Users_david_landeros_Documents_Node_js_Projects_evil_js_eviljs_docs_main_js",
    "groupTitle": "C__Users_david_landeros_Documents_Node_js_Projects_evil_js_eviljs_docs_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/ws-event-register/<EventName>",
    "title": "Logs an event",
    "name": "Event_register",
    "group": "spyjs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "EventName",
            "description": "<p>The event to be logged</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "POST /ws-event-register/Inputchanged\nHost: example.com\nContent-Length: 47\nContent-Type: application/json\n\n{ \"name\" : \"password\", \"value\" : \"MartyMcFly\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Length: 20\nContent-Type: application/json\n\n{ \"success\" : true }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./ws-event-register.js",
    "groupTitle": "spyjs"
  }
] });