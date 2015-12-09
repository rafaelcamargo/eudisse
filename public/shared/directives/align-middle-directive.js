eudisse.directive('alignMiddle', function(){

	function alignMiddle(scope, el){
		var parentHeight = window.innerHeight;
		el[0].style.marginTop = parseInt((parentHeight/2) - (el[0].clientHeight/2)) + 'px';
	}

	return {
		restrict : 'C',
		link : alignMiddle
	};
})