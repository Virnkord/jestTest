function mysqrt(n){
	var ans;
	if (n >= 0){
		ans = Math.sqrt(n);
	}else{
		return "Warning! Parametr n should be positive!";
	}
	return ans;
}

module.exports = mysqrt;
