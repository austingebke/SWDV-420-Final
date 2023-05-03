var url= require('url')
var fs= require('fs');
//This function reads the path from below and writes the correct HTML page 
function renderhtml(path, response){
    fs.readFile(path,function(error,resp){
        if(error){
            response.writeHead(404);
            response.write('Contentes you are looking for are not found.')
        }
        else{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(resp);
        }
        response.end();
    });
}
//This handles the routing by reading the request by the url and then calls renderhtml to print the correct page.
module.exports={
    handleRequest: function(request,response){
        response.writeHead(200, {'Content-Type': 'text/html'});
        var path=url.parse(request.url).pathname;
        switch(path){
            case '/':
                renderhtml('final_project_head_page.html',response);
                break;
            case '/input':
                renderhtml('final_project_input_page.html',response);
                break;
            case '/search':
                renderhtml('final_project_search_page.html',response);
                break;
            default:
                response.writeHead(404);
                response.write("Page not Found.")
                response.end();
        }
    }
}