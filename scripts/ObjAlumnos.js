function alumnosObject(){
	this.alumnos = {};
	this.setAlumnos = function(val){this.alumnos = val[0].alumnos;};
	this.getAlumnos = function(){return this.alumnos;};
	this.find = function(val) {
        if (this.alumnos != null || this.alumnos != undefined)
            for (var i = 0; i < this.alumnos.length; i++) {
                if(this.alumnos[i].nombre.indexOf(val) != -1){
                    return this.alumnos[i];
                    break;
                }
            }
    }
}
