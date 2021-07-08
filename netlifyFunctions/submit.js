exports.handler = async function(event, context) {
  return {
    "path" : "/api/submit", 
    "httpMethod" : "new XMLHttpRequest()",
    "headers" : "Content-Type application/json; charset=utf-8",
    "body" : "JSON.stringify (sender.data)"
  }
}