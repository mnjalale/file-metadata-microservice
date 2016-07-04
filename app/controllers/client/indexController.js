'use strict';

(function(){
     //document.getElementById('fileForm').action = processFile;
    
    this.processFile = function (){
        ajaxFunctions.ajaxRequest('POST',appUrl + '/upload',function(data){
            var fileInfo = JSON.parse(data);
            alert('File Size:' + fileInfo.size);
        });
    };
})();