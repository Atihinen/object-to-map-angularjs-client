app.controller('HomeController', ['$scope', '$rootScope', 'firehydrants', function($scope, $rootScope, fireHydrantService){
	$rootScope.nMarker = {};
	$scope.map = {
		center: {
			latitude: 60.218184,
			longitude: 24.812150
		},
		zoom: 15,
		markers: [],
		options: {
			disableDoubleClickZoom: true,
			scrollwheel: false
		},
		window: {
            marker: {},
            show: false,
            closeClick: function() {
                this.show = false;
            },
            options: {}, // define when map is ready
        },
        markerOptions: {
        	draggable: true
        },
        markersEvents: {
            click: function(marker, eventName, model, arguments) {
            	console.log(model);
				$rootScope.nMarker = model;
                $scope.map.window.model = model;
                $scope.map.window.show = true;
            }
        },
        events: {
        	dblclick: function(m, $e, model, arguments){
        		var lat = model[0].latLng.G;
        		var lng = model[0].latLng.K;
        		$rootScope.nMarker = {
        			title: 'New',
        			latitude: lat,
        			longitude: lng,
        			id: 'not_defined',
        			description: '',
        			trunkLineDiameter: '',
        			category: {
        				id: 'not_defined',
        				name: 'Valitse'
        			},
        			update: false
        		};

        		$scope.map.window.model = $rootScope.nMarker;
        		updateMapWindow($rootScope.nMarker);
        		
        		$scope.map.center.latitude = lat;
        		$scope.map.center.longitude = lng;
        		$scope.map.window.show = true;
        		return;

        	}
        }
	};
	$rootScope.$watch('eventSuccesfully', function(){
		if($rootScope.eventSuccesfully === true){
			$rootScope.eventSuccesfully = false;
			$scope.map.window.show = false;
			getFireHydrants();
		}
	});
	$scope.mapContainerClass="col-md-12";
	$scope.fireHydrantContainerClass="hidden";
	$scope.isServerError = false;
	$scope.serverErrorMessage = "";
	$scope.firehydrants = [];
	$scope.$watch("showFireHydrantContainer", function(){
		if ($scope.showFireHydrantContainer === true){
			$scope.mapContainerClass = "col-md-8";
			$scope.fireHydrantContainerClass = "col-md-4";
			getFireHydrants();
		}
		else {
			$scope.mapContainerClass = "col-md-12";
			$scope.fireHydrantContainerClass = "hidden";
		}
	});
	$scope.$watch("nMarker.description", function(){
		console.log("Changed: "+$rootScope.nMarker.description);
	});
	$scope.queryBy = '$';
	$scope.query = {};

	$scope.findMarker = function(id){
		console.log(id);
		var marker = {}
		angular.forEach($scope.map.markers, function(m){
			if(m.id === id){
				marker = m;
				return;
			}
		});
		$scope.map.center.latitude = marker.latitude;
		$scope.map.center.longitude = marker.longitude;
		$rootScope.nMarker = marker;
		$scope.map.window.model = marker;
        $scope.map.window.show = true;
}

	function getFireHydrants(){
		fireHydrantService.getFireHydrants().success(function(data){
			console.log(data.length);
			
			$scope.firehydrants = data;
			$scope.map.markers = []
			angular.forEach($scope.firehydrants, function(val){
				$scope.map.markers.push(createMapMarker(val));
			});
		})
		.error(function(err){
			if(err === null){
				$scope.serverErrorMessage = "Taustajärjestelmässä häiriöitä, ole hyvä ja ota yhteyttä palvelun ylläpitoon.";
			}
			console.log(err);
			$scope.isServerError = true;
		});
	}

	function createMapMarker(data){
		var marker = {
			id: data.id,
			latitude: data.latitude,
			longitude: data.longitude,
			title: data.category.name,
			trunkLineDiameter: data.trunk_line_diameter,
			description: data.description,
			category: data.category,
			update: true
		};
		return marker;
	}

	function updateMapWindow(model){
	}

	/*var test = new google.maps.Marker({
            map: $scope.map,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(24.7, 65.3),
            title: "test"
        });*/

	$scope.onMarkerClicked = function (m) {
            //this.windowOptions = !this.windowOptions;
            console.log('Marker was clicked');
            console.log(m);
        };

        $scope.closeClick = function () {
            this.window = false;
        };

	getFireHydrants();

	$scope.addMarker = function($event){
		//Required to fire the event in map
	};

}]);