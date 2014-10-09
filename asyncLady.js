var AsyncLady = (function() {
    
    var filesToLoad   = [];
    var fileReady     = [];
    var fileRequested = [];
        
    var waitFor = function(dep) {
        if (fileReady.indexOf(dep) === -1 && fileRequested.indexOf(dep) === -1 ) {
            fileRequested.push(dep);
            loadJs(dep);
        }  
                           
        return {
            thenLoad : function(files) {
                files.forEach(function(file){
                    filesToLoad.push(file);         
                });      
            }            
        }        
    }
    
    var loadJs = function(path) {
        var script    = document.createElement('script');
        script.type   = 'text/javascript';
        script.async  = true;
        script.src    = path;
        script.onload = function() {
            fileReady.push(path);
            filesToLoad.forEach(function(file){
                if (fileReady.indexOf(file) === -1 && fileRequested.indexOf(file) === -1 ) {
                    fileRequested.push(file);
                    loadJs(file);
                }            
            });                    
        };

        document.getElementsByTagName('head')[0].appendChild(script);
    };
           
    return {
        waitFor: waitFor
    }
        
})();
