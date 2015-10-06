app.factory('categories', ['$http', function($http) {
  return({
    categories: categories,
    addCategory: addCategory,
    deleteCategory: deleteCategory,
    getCategory: getCategory,
    updateCategory: updateCategory
  }); 

  function categories(){
	  return $http.get(apiBaseUrl+'categories') 
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
                    url: apiBaseUrl+'categories/new',
                    data: payload,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' }
        })
   		.success(function(data){
   			return data;
   		})
   		.error(function(data){
   			alert("Something went wrong");
   			return data;
   		});
   }

   function deleteCategory(id){
   		return $http.delete(apiBaseUrl+'categories/'+id)
   			.success(function(data){
   				return data;
   			})
   			.error(function(err){
   				alert("Something went wrong");
   				return err;
   			});
   }

   function getCategory(id){
   		return $http.get(apiBaseUrl+'categories/'+id)
   		.success(function(data){
   			return data;
   		})
   		.error(function(err){
   			alert("Something went wrong");
   			return err;
   		})
   }

   function updateCategory(id, categoryName){
   		var payload = $.param({name: categoryName});
   		return $http({
   			method: 'PUT',
   			url: apiBaseUrl+'categories/'+id,
   			data: payload,
   			headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'}
   		})
   		.success(function(data){
   			return data;
   		})
   		.error(function(err){
   			return err;
   		})
   }
}]);