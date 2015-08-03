app.factory('categories', ['$http', function($http) {
  return({
    categories: categories,
    addCategory: addCategory
  }); 

  function categories(){
	  return $http.get(apiBaseUrl+'category/') 
	            .success(function(data) { 
	              return data; 
	            }) 
	            .error(function(err) {
	              alert("Something went wrong");
	              return err; 
	  });
   }

   function addCategory(categoryName){
   		var payload = $.param({name: categoryName});
   		return $http({
                    method: 'POST',
                    url: apiBaseUrl+'category/new',
                    data: payload,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
   		.success(function(data){
   			return data;
   		})
   		.error(function(data){
   			alert("Something went wrong");
   			return data;
   		});
   }

   function handleSuccess(response){
   		return(response.data);
   }

   function handleError(response){
   		alert("Something went wrong");
   		return(response);
   }
}]);