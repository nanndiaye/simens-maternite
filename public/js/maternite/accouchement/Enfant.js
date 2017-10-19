
function ajoutEnfant(nbEnfant){
	//alert(nbEnfant);
	
	$('#tabEnfants').html('');
	var element='<div id="tabsEnfants"> <ul>';
	var contenu ='';
	
	for(var i=1; i<= nbEnfant; i++){
		 var onglet=('<li ><a href="#onglet-'+i+'">Enfant'+i+'</a></li>');	 
		
		  contenu +=( '<div id="onglet-'+i+'">'+
				 '<table id="styleEnf">'+  
			       '<tr >'+
			          '<td  class="antecedent_go">'+
			                  '<div class="styleEnfDiv1">'+
			                     '<label  class="styleLabel1">Sexe'+i+'</label>'+
			                  '</div>'+   
			                  '<div  class="styleEnfDiv2">'+
			                     '<label   class="styleLabel2"><select id="sexe_'+i+'"><option value="M" >M</option><option value"F">F</option></select></label>'+
			                  '</div>'+ 
			                  '<div  class="styleEnfDiv3">'+
			                     '<label  class="styleLabel3">Note <input id="n_sexe_'+i+'" type="text"></input></label>'+
			                  '</div>'+ 
			          '</td>'+
			          '<td  class="antecedent_go">'+
		              '<div   class="styleEnfDiv4">'+
		                 '<label 	 class="styleLabel4">Poids</label>'+
		              '</div>'+   
		              '<div  class="styleEnfDiv5">'+
		                 '<label class="styleLabel5"><input type="text" id="poids_'+i+'"></input></label>'+
		              '</div>'+ 
		              '<div   class="styleEnfDiv6">'+
		                 '<label  class="styleLabel6">Note <input id="n_poids_'+i+'" type="text"></input></label>'+
		              '</div>'+ 
		      '</td>'+
			       '</tr>'+
			       '<tr >'+
			          '<td  class="antecedent_go">'+
			                  '<div class="styleEnfDiv1">'+
			                     '<label  class="styleLabel1">Cri</label>'+
			                  '</div>'+   
			                  '<div  class="styleEnfDiv2">'+
			                     '<label   class="styleLabel2"><select id="cri_'+i+'"><option value="Oui">oui</option><option value="Non">Non</option></select></label>'+
			                  '</div>'+ 
			                  '<div  class="styleEnfDiv3">'+
			                     '<label  class="styleLabel3">Note <input id="n_cri_'+i+'" type="text"></input></label>'+
			                  '</div>'+ 
			          '</td>'+
			          '<td  class="antecedent_go">'+
		              '<div   class="styleEnfDiv4">'+
		                 '<label 	 class="styleLabel4">Taille</label>'+
		              '</div>'+   
		              '<div  class="styleEnfDiv5">'+
		                 '<label class="styleLabel5"><input type="text" id="taille_'+i+'"></input></label>'+
		              '</div>'+ 
		              '<div   class="styleEnfDiv6">'+
		                 '<label  class="styleLabel6">Note <input id="n_taille_'+i+'" type="text"></input></label>'+
		              '</div>'+ 
		      '</td>'+
			       '</tr>'+
			       
			       
			       '</tr>'+
			       '<tr >'+
			          '<td  class="antecedent_go">'+
			                  '<div class="styleEnfDiv1">'+
			                     '<label  class="styleLabel1">Sat</label>'+
			                  '</div>'+   
			                  '<div  class="styleEnfDiv2">'+
			                     '<label   class="styleLabel2"><select id="sat_'+i+'"><option value="Oui">oui</option><option value="Non">Non</option></select></label>'+
			                  '</div>'+ 
			                  '<div  class="styleEnfDiv3">'+
			                     '<label  class="styleLabel3">Note <input id="n_sat_'+i+'" type="text"></input></label>'+
			                  '</div>'+ 
			          '</td>'+
			          '<td  class="antecedent_go">'+
		              '<div   class="styleEnfDiv4">'+
		                 '<label 	 class="styleLabel4">Vitamine K</label>'+
		              '</div>'+   
		              '<div  class="styleEnfDiv5">'+
		                 '<label class="styleLabel5"><select id="vitk_'+i+'"><option value="Oui">oui</option><option value="Non">Non</option></select></label>'+
		              '</div>'+ 
		              '<div   class="styleEnfDiv6">'+
		                 '<label  class="styleLabel6">Note <input id="n_vitk_'+i+'" type="text"></input></label>'+
		              '</div>'+ 
		      '</td>'+
			       '</tr>'+
			       
			       
			       
			       
			       '<tr >'+
			          '<td  class="antecedent_go">'+
			                  '<div class="styleEnfDiv1">'+
			                     '<label  class="styleLabel1" title="Malformation">Malf</label>'+
			                  '</div>'+   
			                  '<div  class="styleEnfDiv2">'+
			                     '<label   class="styleLabel2" ><select id="malf_'+i+'"><option value="Oui">oui</option><option value="Non">Non</option></select></label>'+
			                  '</div>'+ 
			                  '<div  class="styleEnfDiv3">'+
			                     '<label  class="styleLabel3">Note <input id="n_malf_'+i+'" type="text"></input></label>'+
			                  '</div>'+ 
			          '</td>'+
			          '<td  class="antecedent_go">'+
		              '<div   class="styleEnfDiv4">'+
		                 '<label 	 class="styleLabel4" title="Maintien Temperature">Maintien T&ordm;</label>'+
		              '</div>'+   
		              '<div  class="styleEnfDiv5">'+
		                 '<label class="styleLabel5"><select id="mt_'+i+'"><option value="Oui">oui</option><option value="Non">Non</option></select></label>'+
		              '</div>'+ 
		              '<div   class="styleEnfDiv6">'+
		                 '<label  class="styleLabel6">Note <input id="n_mt_'+i+'" type="text"></input></label>'+
		              '</div>'+ 
		      '</td>'+
			       '</tr>'+
			       
			       '<tr >'+
			          '<td  class="antecedent_go">'+
			                  '<div class="styleEnfDiv1">'+
			                     '<label  class="styleLabel1" title="Mise au Soin Precoce">MSP</label>'+
			                  '</div>'+   
			                  '<div  class="styleEnfDiv2">'+
			                     '<label   class="styleLabel2" ><select id="msp_'+i+'"><option value="Oui">oui</option><option value="Non">Non</option></select></label>'+
			                  '</div>'+ 
			                  '<div  class="styleEnfDiv3">'+
			                     '<label  class="styleLabel3">Note <input id="n_msp_'+i+'" type="text"></input></label>'+
			                  '</div>'+ 
			          '</td>'+
			          '<td  class="antecedent_go">'+
		              '<div   class="styleEnfDiv4">'+
		                 '<label 	 class="styleLabel4" title="Soin du Cordon">Soin Cordon</label>'+
		              '</div>'+   
		              '<div  class="styleEnfDiv5">'+
		                 '<label class="styleLabel5"><select id="sc_'+i+'"><option value="Oui">oui</option><option value="Non">Non</option></select></label>'+
		              '</div>'+ 
		              '<div   class="styleEnfDiv6">'+
		                 '<label  class="styleLabel6">Note <input id="n_sc_'+i+'" type="text"></input></label>'+
		              '</div>'+ 
		      '</td>'+
			       '</tr>'+
			      	   
			       '<tr >'+
			          '<td  class="antecedent_go">'+
			                  '<div class="styleEnfDiv1">'+
			                     '<label  class="styleLabel1" title="Reanimation">Reanim</label>'+
			                  '</div>'+   
			                  '<div  class="styleEnfDiv2">'+
			                     '<label   class="styleLabel2" ><select id="reanim_'+i+'"><option value="Oui">oui</option><option value="Non">Non</option></select></label>'+
			                  '</div>'+ 
			                  '<div  class="styleEnfDiv3">'+
			                     '<label  class="styleLabel3">Note <input id="n_reanim_'+i+'" type="text"></input></label>'+
			                  '</div>'+ 
			          '</td>'+
			          '<td  class="antecedent_go">'+
		              '<div   class="styleEnfDiv4">'+
		                 '<label 	 class="styleLabel4" title="">Collyre</label>'+
		              '</div>'+   
		              '<div  class="styleEnfDiv5">'+
		                 '<label class="styleLabel5"><select id="collyre_'+i+'"><option value="Oui">oui</option><option value="Non">Non</option></select></label>'+
		              '</div>'+ 
		              '<div   class="styleEnfDiv6">'+
		                 '<label  class="styleLabel6">Note <input id="n_collyre_'+i+'" type="text"></input></label>'+
		              '</div>'+ 
		      '</td>'+
			       '</tr>'+
			       '<tr >'+
			          '<td  class="antecedent_go">'+
			                  '<div class="styleEnfDiv1">'+
			                     '<label  class="styleLabel1" title="">VPO</label>'+
			                  '</div>'+   
			                  '<div  class="styleEnfDiv2">'+
			                     '<label   class="styleLabel2" ><select id="vpo_'+i+'"><option value="Oui">oui</option><option value="Non">Non</option></select></label>'+
			                  '</div>'+ 
			                  '<div  class="styleEnfDiv3">'+
			                     '<label  class="styleLabel3">Note <input id="n_vpo_'+i+'" type="text"></input></label>'+
			                  '</div>'+ 
			          '</td>'+
			          '<td  class="antecedent_go">'+
		              '<div   class="styleEnfDiv4">'+
		                 '<label 	 class="styleLabel4" title="Anti Tuberculeux">antiTuberculeux</label>'+
		              '</div>'+   
		              '<div  class="styleEnfDiv5">'+
		                 '<label class="styleLabel5"><select id="antiT_'+i+'"><option value="Oui">oui</option><option value="Non">Non</option></select></label>'+
		              '</div>'+ 
		              '<div   class="styleEnfDiv6">'+
		                 '<label  class="styleLabel6">Note <input id="n_antiT_'+i+'" type="text"></input></label>'+
		              '</div>'+ 
		      '</td>'+
			       '</tr>'+
			       
			       '<tr >'+
			          '<td  class="antecedent_go">'+
			                  '<div class="styleEnfDiv1">'+
			                     '<label  class="styleLabel1" title="">BCG</label>'+
			                  '</div>'+   
			                  '<div  class="styleEnfDiv2">'+
			                     '<label   class="styleLabel2" ><select id="bcg_'+i+'"><option value="Oui">oui</option><option value="Non">Non</option></select></label>'+
			                  '</div>'+ 
			                  '<div  class="styleEnfDiv3">'+
			                     '<label  class="styleLabel3">Note <input id="n_bcg_'+i+'" type="text"></input></label>'+
			                  '</div>'+ 
			          '</td>'+
			          '<td  class="antecedent_go">'+
		              '<div   class="styleEnfDiv4">'+
		                 '<label 	 class="styleLabel4" title="Anti H&eacute;patique">AntiH&eacute;patique</label>'+
		              '</div>'+   
		              '<div  class="styleEnfDiv5">'+
		                 '<label class="styleLabel5"><select id="anti_hepa_'+i+'"><option value="Oui">oui</option><option value="Non">Non</option></select></label>'+
		              '</div>'+ 
		              '<div   class="styleEnfDiv6">'+
		                 '<label  class="styleLabel6">Note <input id="n_anti_hepa_'+i+'" type="text"></input></label>'+
		              '</div>'+ 
		      '</td>'+
			       '</tr>'+
			       
			       '<tr >'+
			          '<td  class="antecedent_go">'+
			                  '<div class="styleEnfDiv1">'+
			                     '<label  class="styleLabel1" title="Autre Vaccins">Autres</label>'+
			                  '</div>'+   
			                  '<div  class="styleEnfDiv2">'+
			                     '<label   class="styleLabel2" ><select id="autre_vacc_'+i+'"><option value="Oui">oui</option><option value="Non">Non</option></select></label>'+
			                  '</div>'+ 
			                  '<div  class="styleEnfDiv3">'+
			                     '<label  class="styleLabel3">Type <input id="type_autre_vacc_'+i+'" type="text"></input></label>'+
			                  '</div>'+ 
			          '</td>'+
			          '<td  class="antecedent_go">'+
		              '<div   class="styleEnfDiv6">'+
		                 '<label  class="styleLabel6">Note <input id="n_autre_vacc_'+i+'" type="text"></input></label>'+
		              '</div>'+ 
		              '</td>'+
			       
		         '</tr>'+ 
		         '<tr >'+
		          '<td  class="antecedent_go">'+
		                  '<div class="div1">'+
		                     '<label  class="label1" title="Perimetre">P&eacute;rim&eacute;tres:</label>'+
		                  '</div>'+   
		                  '<div  class="div2">'+
		                     '<label   class="label2" title="Perimetre Cranien">Cranien</label>'+
		                  '</div>'+ 
		                  '<div  class="div3">'+
		                     '<label   class="label3" ><input type="number" id="cranien_'+i+'"></input></label>'+
		                  '</div>'+ 
		                  '<div  class="div4">'+
		                     '<label   class="label4" title="Perimetre Brachial">Brachial</label>'+
		                  '</div>'+ 
		                  '<div  class="div5">'+
		                     '<label   class="label5" ><input type="number" id="brachial_'+i+'"></input></label>'+
		                  '</div>'+ 
		          '</td>'+
		          '<td  class="antecedent_go">'+
		            '<div  class="div6">'+
                     '<label   class="label6" title="Perimetre Cephalique">C&eacute;phalique</label>'+
                   '</div>'+ 
                   '<div  class="div7">'+
                     '<label   class="label7" ><input type="number" id="cephalique_'+i+'"></input></label>'+
                   '</div>'+
	                '<div   class="div8">'+
	                 '<label  class="label8">Note <input id="n_perim_'+i+'" type="text"></input></label>'+
	                '</div>'+ 
	              '</td>'+
		       
	         '</tr>'+ 
	         

		       '<tr >'+
		          '<td  class="antecedent_go">'+
		                  '<div class="diva1">'+
		                     '<label  class="labela1" title="Apgar">Apgar:</label>'+
		                  '</div>'+   
		                  '<div  class="diva2">'+
		                     '<label   class="labela2" title="Agar 1">1&nbsp;&nbsp;&nbsp;'+
		                         '<select id="apgar1_'+i+'">'+  
		                              '<option>1/10</option>'+
		                              '<option>2/10</option>'+
		                              '<option>3/10</option>'+
		                              '<option>4/10</option>'+
		                              '<option>5/10</option>'+
		                              '<option>6/10</option>'+
		                              '<option>7/10</option>'+
		                              '<option>8/10</option>'+
		                              '<option>9/10</option>'+
		                              '<option>10/10</option>'+
		                          '</select>'+
		                     '</label>'+
		                  '</div>'+ 
		                  '<div  class="diva3">'+
		                     '<label   class="labela3" title="Agar 5">5&nbsp;&nbsp;&nbsp;'+
		                         '<select id="apgar5_'+i+'">'+  
		                              '<option>1/10</option>'+
		                              '<option>2/10</option>'+
		                              '<option>3/10</option>'+
		                              '<option>4/10</option>'+
		                              '<option>5/10</option>'+
		                              '<option>6/10</option>'+
		                              '<option>7/10</option>'+
		                              '<option>8/10</option>'+
		                              '<option>9/10</option>'+
		                              '<option>10/10</option>'+
		                          '</select>'+
		                     '</label>'+
		                  '</div>'+
		                   
		          '</td>'+
		          '<td  class="antecedent_go">'+
	                '<div   class="diva4">'+
	                 '<label  class="labela4">Note <input id="n_apgar_'+i+'" type="text"></input></label>'+
	                '</div>'+ 
	              '</td>'+
		       
	         '</tr>'+ 
		         '<tr >'+
		          '<td  class="antecedent_go">'+
	              '<div   class="">'+
	              '<label  id="consult_j1_j2label">Consultation J1J2 <textarea class=" consult_j1_j2" id="consj1j2_'+i+'" type=""></textarea></label>'+
	              '</div>'+ 
	              '</td>'+
		       
	         '</tr>'+ 
	         
		     
			    ' </table>'+
			   
	    '</div>'
		);	
		 
		 
		element+=onglet;
	}
	element+="</ul>"+contenu+" </div>  <script> $('#tabsEnfants').tabs(); </script>";
	
	
	$('#tabEnfants').html(element);
	
	 // $(function() {
	   // $('#tabEnfants').tabs();
	//    $('#tabsEnfants').tabs();
	 // });
	//setTimeout("$('#tabsEnfants').tabs(), 3000");


}


//nouveau ne

function ajoutNouveauNe(nbEnfants){
	
	
	$('#tabNouveauNe').html('');
	var elem='<div id="tabsNouveauNe"> <ul>';
	var cont ='';
	
	for(var i=1; i<= nbEnfants; i++){
		 var ong=('<li ><a href="#nv_onglet-'+i+'">Nouveau N&eacute;'+i+'</a></li>');	 
		
		  cont +=( '<div id="nv_onglet-'+i+'">'+
				 '<table id="styleNv">'+  
			       '<tr >'+
			          '<td  class="antecedent_go">'+ 
			                  '<div  class="nvDiv1">'+
			                      '<label  class="nvDiv1label">Vivant et bien portant&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <select id="viv_bien_portant_'+i+'"><option value="Oui">oui</option><option value="Non">Non</option></select></label>'+
			                   '</div>'+ 
			                  
			                   '<div class="nvDiv2">'+
			                       '<label class="nvDiv2label"> Note</label>'+
		                        ' </div>'+	
		                         '<div class="nvDiv3">'+
			                         '<label class="nvDiv3label"><input id="n_viv_bien_portant_'+i+'" type="text"></input> </label>'+
		                         '</div>'+         
			          '</td>'+
			       '</tr>'+
			       '<tr >'+
			       '<td  class="antecedent_go">'+ 
	                  '<div  class="nvDiv1">'+
	                      '<label  class="nvDiv1label">Vivant avec mal formation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <select id="viv_mal_form_'+i+'"><option value="Oui">oui</option><option value="Non">Non</option></select></label>'+
	                   '</div>'+ 
	                  
	                   '<div class="nvDiv2">'+
	                       '<label class="nvDiv2label"> Note</label>'+
                     ' </div>'+	
                      '<div class="nvDiv3">'+
	                         '<label class="nvDiv3label"><input id="n_viv_mal_form_'+i+'" type="text"></input> </label>'+
                      '</div>'+         
	          '</td>'+
			       '</tr>'+			     			       
			       '</tr>'+
			       '<tr >'+
			       '<td  class="antecedent_go">'+ 
	                  '<div  class="nvDiv1">'+
	                      '<label  class="nvDiv1label">Malade&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <select id="malade_'+i+'"><option value="Oui">oui</option><option value="Non">Non</option></select></label>'+
	                   '</div>'+ 
	                  
	                   '<div class="nvDiv2">'+
	                       '<label class="nvDiv2label"> Note</label>'+
                     ' </div>'+	
                      '<div class="nvDiv3">'+
	                         '<label class="nvDiv3label"><input id="n_malade_'+i+'" type="text"></input> </label>'+
                      '</div>'+         
	          '</td>'+
			       '</tr>'+
		     
			       '<tr >'+
			          '<td  class="antecedent_go">'+
			          '<div class="nvDiv1" >'+
				       '<label  class="nvDiv1label">D&eacute;ced&eacute;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <select id="decede_'+i+'"><option value="Oui">oui</option><option value="Non">Non</option></select></label>'+
			       '</div>'+
	        
			       '<div class=" nvDateDiv1" >'+
				       '<label class="nvDateLabel1">Date</label>'+
			       '</div>'+
			      ' <div class="nvDateDiv2 ">'+
				       '<label class="nvDateLabel2 "> <input class="dateCalendar" id="date_deces_'+i+'" type="text"></input>  </label>'+
			      
			       '</div>'+
			   '<div class=" nvHeureDiv1">'+
				       '<label class=" nvHeureDiv1label">Heure</label>'+
			       '</div>'+
			       '<div class=" nvHeureDiv2">'+
				       '<label class=" nvHeureDiv2label" > <input id="heure_deces_'+i+'" type="Time"></input>  </label>'+
			       '</div>'+
			        '<div class="nvCauseDiv">'+
				       '<label class="nvCauseLabel" >cause <input id="cause_deces_'+i+'" type="text"></input> </label>'+
			       '</div> '+
			          '</td>'+
			       '</tr>'+
			       
			 
		          
	         
		     
			    ' </table>'+
			   
	    '</div>'
		);	
		 
		 
		elem+=ong;
	}
	elem+="</ul>"+cont+" </div>  <script> $('#tabsNouveauNe').tabs();$('.dateCalendar').datepicker(" +
			"$.datepicker.regional['fr'] = {" +
			"closeText: 'Fermer'," +
			"changeYear: true," +
			"	yearRange: 'c-80:c'," +
			"prevText: '&#x3c;Préc'," +
			"nextText: 'Suiv&#x3e;'," +
			"currentText: 'Courant'," +
			"monthNames: ['Janvier','Fevrier','Mars','Avril','Mai','Juin'," +
			"'Juillet','Aout','Septembre','Octobre','Novembre','Decembre']," +
	        "monthNamesShort: ['Jan','Fev','Mar','Avr','Mai','Juin'," +
			"'Jul','Aout','Sep','Oct','Nov','Dec']," +
			"dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi']," +
			"dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam']," +
			"dayNamesMin: ['Di','Lu','Ma','Me','Je','Ve','Sa']," +
	         "weekHeader: 'Sm'," +
			"dateFormat: 'dd/mm/yy',"+
			"firstDay: 1,"+
			"isRTL: false,"+
			"showMonthAfterYear: false,"+
			"yearRange: '1900:2050',"+
			"showAnim : 'bounce',"+
			"changeMonth: true,"+
			"changeYear: true,"+
			"	yearSuffix: '',"+
			"maxDate: 0"+
			"}"+
			");</script>";


	$('#tabNouveauNe').html(elem);
	


}


$('.BbAttendu').toggle(false);
function getBbAttendu(val){ 

	if(val=='0'){
		
		$('.BbAttendu').fadeIn();
		
		$('#nombre_bb').keyup(function () {
			ajoutEnfant( $('#nombre_bb').val()); 
			ajoutNouveauNe( $('#nombre_bb').val()); 
		}).change(function () {
			ajoutEnfant( $('#nombre_bb').val());  
			ajoutNouveauNe( $('#nombre_bb').val()); 
		});	
		
	}	
	else
	{
		$('.BbAttendu').fadeOut();
		ajoutEnfant( val);
		ajoutNouveauNe( val);
	}
		
}



























