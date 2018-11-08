const mysqrt = (n)=>{
	var ans = -1;
	if (n >= 0){
		ans = Math.sqrt(n);
	}else{
		return "Warning! Parametr n should be positive!";
	}
	return ans;
}

