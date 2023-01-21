
document.getElementById("personal").addEventListener("click", function(){
    let datosPersonales={Name:'Edward Smith', Age:'29 years', Address:'Lincoln Ave. 29', Phone:'(35)4678012', City:'New York'};
    document.getElementById("areaDeTexto").innerHTML=`Name: ${datosPersonales.Name}<br /> Age: ${datosPersonales.Age}<br /> Address: ${datosPersonales.Address}<br /> Phone: ${datosPersonales.Phone}<br /> City: ${datosPersonales.City}`;
});

document.getElementById("educacion").addEventListener("click", function(){
    let experienciaEscolar=new Object();
    experienciaEscolar=[{Time:'2012', Institution:'Carl Wathers High School', Title:'High School Diploma', City:'Salt Lake City'},{Time:'2016', Institution:'Carl Owens University', Title:'Software Analist', City:'Springfield'},
    {Time:'2018', Institution:'John Stevens', Title:'Front-End Developer', City:'New York'}];
    let element='';
    for (let i = 0; i < experienciaEscolar.length; i++) {
        element=element+(`Time:  ${experienciaEscolar[i].Time} <br /> Institution:  ${experienciaEscolar[i].Institution} <br /> Title:  ${experienciaEscolar[i].Title} <br /> City:  ${experienciaEscolar[i].City} <br />`); 
    };
    document.getElementById('areaDeTexto').style='font-size: 20px;';
    document.getElementById("areaDeTexto").innerHTML=element;
});

document.getElementById("laboral").addEventListener("click", function(){
     let experienciaLaboral=new Object();
    experienciaLaboral=[{Time:'2017', Organization:'Flea Market Inc.', Position:'Junior Analist', City:'Oregon'},{Time:'2018', Organization:'Eximia LLC.', Position:'Junior Web Developer', City:'Miami'},
    {Time:'2021', Organization:'Google LLC.', Position:'Senior Web Developer', City:'New York'}];
    let element='';
    for (let i = 0; i < experienciaLaboral.length; i++) {
        element=element+(`Time:  ${experienciaLaboral[i].Time} <br /> Organization:  ${experienciaLaboral[i].Institution} <br /> Position:  ${experienciaLaboral[i].Position} <br /> City:  ${experienciaLaboral[i].City} <br />`); 
    };
    document.getElementById('areaDeTexto').style='font-size: 20px;';
    document.getElementById("areaDeTexto").innerHTML=element;
});

document.getElementById("hobbys").addEventListener("click", function(){
    document.getElementById("areaDeTexto").innerText="Like to walk to the park in the afternoon with my dog Sparky, to read science books, to listen Country Music";
});
