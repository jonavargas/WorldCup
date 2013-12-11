//global variables.
var exc = false;
//function that is responsible for activating other functions while the document is ready.
$(document).ready(function () {

  //Initialization of variables.
  var grupos = {};
  var categories = new Array();
  var temp;
  var buttonSend = document.getElementById('send');
  var buttonScores = document.getElementById('Scores');
  buttonScores.disabled = true;

  //almacena los id de los equipos para deseleccionarlos en el siguiente grupo.
  var idx = new Array();
   
  //function that is activated by pressing the button "send".
  $('#send').click(function() {

    exc = false;
    categories = new Array();
        
        //check which check box are selected and returns its value.
        $("input[name='team[]']:checked").each(function() {
            categories.push($(this).val());
            idx.push($(this).attr('id'));

        });

        //returns error mensage if the categories does not meet the conditions.
        if(categories.length < 4){
          alert("You need to choose 4 teams to add to the selected group!!");          
          return;
        }else if(categories.length > 4){
          var desCheck = document.getElementsByName("team[]");
          for (i=0;i<desCheck.length;i++){ 
                if(desCheck[i].type == "checkbox")  
                   desCheck[i].checked = false;
          } 
          alert("Ah chosen teams allowed more.!! You must choose only 4 teams.");          
          return;
        }

        //validates that do not exceed the maximum amount of check box, and uncheck.
        validarCantidadEquipos(categories); 
        if(exc == true){
          var desCheck = document.getElementsByName("team[]");
          for (i=0;i<desCheck.length;i++){ 
                if(desCheck[i].type == "checkbox")  
                   desCheck[i].checked = false;
          }        
          alert("Only a maximum of 2 teams per continent in one groups are allowed!!");
          return;
        }
    
    //variable that is responsible for obtaining the group name of the radio buttons.
    var radios = document.getElementsByName("rg");
    var rSelect;
    

    //This for is responsible for arranging travel radio buttons and verify which is selected to disable and uncheck.
    for(i=0;i< radios.length;i++)
        if(radios[0].checked) {
          $('#ga').html(categories[0] + "-" + categories[1] + "-" + categories[2] + "-" + categories[3]);
          radios[0].disabled = true;
          radios[0].checked = false;
          rSelect = true;
        }

        if(radios[1].checked) {
          $('#gb').html(categories[0] + "-" + categories[1] + "-" + categories[2] + "-" + categories[3]); 
          radios[1].disabled = true;
          radios[1].checked = false;
          rSelect = true;
        }

        if(radios[2].checked) {
          $('#gc').html(categories[0] + "-" + categories[1] + "-" + categories[2] + "-" + categories[3]);
          radios[2].disabled = true;
          radios[2].checked = false;
          rSelect = true;
        }

        if(radios[3].checked) {
          $('#gd').html(categories[0] + "-" + categories[1] + "-" + categories[2] + "-" + categories[3]);
          radios[3].disabled = true;
          radios[3].checked = false;
          rSelect = true;
        }

        if(radios[4].checked) {
          $('#ge').html(categories[0] + "-" + categories[1] + "-" + categories[2] + "-" + categories[3]);
          radios[4].disabled = true;
          radios[4].checked = false;
          rSelect = true;
        }  
        
        if(radios[5].checked) {
          $('#gf').html(categories[0] + "-" + categories[1] + "-" + categories[2] + "-" + categories[3]);
          radios[5].disabled = true;
          radios[5].checked = false;
          rSelect = true;
        } 
        
        if(radios[6].checked) {
          $('#gg').html(categories[0] + "-" + categories[1] + "-" + categories[2] + "-" + categories[3]);
          radios[6].disabled = true;
          radios[6].checked = false;
          rSelect = true;
        }

        if(radios[7].checked) {
          $('#gh').html(categories[0] + "-" + categories[1] + "-" + categories[2] + "-" + categories[3]);
          radios[7].disabled = true;
          radios[7].checked = false;
          rSelect = true;
        }        

        /*This "for" is responsible for arranging travel check box for "id" and uncheck and disable those
          that are located in groups.*/
        if(rSelect == true){
          for (var i = 0; i < idx.length; i++) {
            document.getElementById(idx[i]).checked = false;
            document.getElementById(idx[i]).disabled = true;
          };
        }else{
          alert("Is necessary to choose a group to add the selected teams");
          return;
        }
          
        //Will validate that all groups are full and disable the checkbox that were not chosen.
        if((radios[0].disabled == true) && (radios[1].disabled == true) && (radios[2].disabled == true) && 
           (radios[3].disabled == true) && (radios[4].disabled == true) && (radios[5].disabled == true) &&
           (radios[6].disabled == true) && (radios[7].disabled == true)){
          var unableAll = document.getElementsByName("team[]");
          buttonSend.disabled = true;
          buttonScores.disabled = false;
          for (i=0;i<unableAll.length;i++){ 
                if(unableAll[i].type == "checkbox")  
                   unableAll[i].disabled = true;
          }
        }

        /*This code is responsible for dividing the information of the array,
         which are among the "-" and then store it in groups in the "localStorage"*/

        var x = $('#ga').val();
        var ga = x.split('-');
        grupos["GA"] = [ga];

        var b = $('#gb').val();
        var gb = b.split('-');
        grupos["GB"] = [gb];

        var c = $('#gc').val();
        var gc = c.split('-');
        grupos["GC"] = [gc];

        var d = $('#gd').val();
        var gd = d.split('-');
        grupos["GD"] = [gd];

        var e = $('#ge').val();
        var ge = e.split('-');
        grupos["GE"] = [ge];

        var f = $('#gf').val();
        var gf = x.split('-');
        grupos["GF"] = [gf];

        var g = $('#gg').val();
        var gg = x.split('-');
        grupos["GG"] = [gg];

        var h = $('#gh').val();
        var gh = x.split('-');
        grupos["GH"] = [gh];

        window.localStorage.setItem("mundialX", JSON.stringify(grupos));

        var colsultarGrupo = JSON.parse(window.localStorage.getItem("mundialX"));
    });
});

  //global variable for function validarCantidadEquipos
  var africa = new Array("Algeria","Cameroon","Ivory Coast","Egypt", "Nigeria", "South Africa", "Senegal");
  var america = new Array("Argentina","Brazil","Canada","Colombia", "Costa Rica", "Jamaica", "USA");
  var asia = new Array("Saudi Arabia","Indonesia","Iraq","Iran", "Japan", "North Korea", "Singapore", "Turkey", "Vietnam");
  var europe = new Array("Germany","Austria","Belgium","Croatia", "Denmark", "Slovenia", "Spain", "France", "Greece", "Ireland", "Italy", "Netherlands", "Poland", "Portugal", "Romania", "Russia");
  var oceania = new Array("Australia","New Zealand", "Samoa", "Tonga", "Vanuatu", "Palau");

 //function that will validate that the number of teams selected by continent is 2.
 function validarCantidadEquipos(pcategories){

  var contAfrica = 0;
  for (var i = 0; i < pcategories.length; i++) {

        for (var x = 0; x < africa.length; x++) {

              if(pcategories[i] == africa[x]){

                contAfrica++;

                if(contAfrica > 2){

                  exc=true;
                  return;

                }

              }
        };
  };

  var contAmerica = 0;
  for (var i = 0; i < pcategories.length; i++) {

        for (var x = 0; x < america.length; x++) {

              if(pcategories[i] == america[x]){

                contAmerica++;

                if(contAmerica > 2){

                  exc=true;
                  return;

                }

              }
        };
  };

  var contAsia = 0;
  for (var i = 0; i < pcategories.length; i++) {

        for (var x = 0; x < asia.length; x++) {

              if(pcategories[i] == asia[x]){

                contAsia++;

                if(contAsia > 2){

                  exc=true;
                  return;

                }

              }
        };
  };

  var contEurope = 0;
  for (var i = 0; i < pcategories.length; i++) {

        for (var x = 0; x < europe.length; x++) {

              if(pcategories[i] == europe[x]){

                contEurope++;

                if(contEurope > 2){

                  exc=true;
                  return;

                }

              }
        };
  };

  var contOceania = 0;
  for (var i = 0; i < pcategories.length; i++) {

        for (var x = 0; x < oceania.length; x++) {

              if(pcategories[i] == oceania[x]){

                contOceania++;

                if(contOceania > 2){

                  exc=true;
                  return;

                }

              }
        };
  };
 } 