
$(document).ready(function(){
	displayTable();
	fillCombo();
	function fillCombo()
	{
		 
		try
		{
			//////////////////////////
			 
		  	   var org_type_code="1";
		 	   
		 	   var sendInfo = {org_type_code:org_type_code };
		 	  
			
			
			var ppath="/NepalGovContact/displayLevelCombo/";
			var ddl = "#level_combo";
			 //  $(ddl).append('<option value="' + value + '">' + name + "</option>'");
			$.post(ppath, {
			
			   tabledata:  JSON.stringify(sendInfo),
				dataType: 'json'
				}, function(data) {
				//$('#ajaxResponse').text(responseText);
					  try
					  {
					    var tbl_body = "<table border='1' cellspacing='5'> <thead> <th>DeptCode</th><th>DeptName</th><th>OrgType</th><th>Edit Record</th><th>Delete Record</th> </thead>";
					    var odd_even = false;
					    
					    $.each(data, function() {
					        var tbl_row = "";
					        var orgkey="";
					        var orgval="";
					      //  alert("Before");
					        $.each(this, function(k , v) {
					            if(k == "level_id")
					            	{
					            	//alert(v);
					            	tbl_row += "<option value="+v+"> ";  
					            	//orgval=v;
					            	}
					            if(k == "level_desc")
					            	{
					            	tbl_row +=v;
					            	tbl_row +="</option>";
					            	}
					        	
					          //  alert(tbl_row);
					            
					            	
					        })
					      //  alert(tbl_row);
					        $(ddl).append(tbl_row);
					        /* tbl_row += "<td><a href=" +"/NepalGovContact/editMinistry?id="+ orgval +""+ ">Edit</a</td>";
					        tbl_row += "<td><a href=" +"/NepalGovContact/deleteMinistry?id="+ orgval +""+ ">Delete</a</td>";
					        tbl_body += "<tr>"+tbl_row+"</tr>";*/
					                   
					    })
					    
					  }
					  catch(err)
					  {
						  alert(err);
					  }
					   // alert(tbl_body);
					    
					    //$("#tableResponse").html(tbl_body);
					
				
				
				
				});   
		}
		catch(err)
		{
			alert(err)
		}

	}
	function displayTable()
	{
		 
		try
		{
			 var ppath="/NepalGovContact/displayPostRecord/";
			$.get(ppath, {
			
			   tabledata:  "displayTable",
				dataType: 'json'
				}, function(data) {
				//$('#ajaxResponse').text(responseText);
					  try
					  {
					    var tbl_body = "<table border='1' cellspacing='5'> <thead> <th>PostCode</th><th>PostName</th><th>PostType</th><th>Edit Record</th><th>Delete Record</th> </thead>";
					    var odd_even = false;
					    $.each(data, function() {
					        var tbl_row = "";
					        var orgkey="";
					        var orgval="";
					        $.each(this, function(k , v) {
					            if(k == "post_id")
					            	{
					            	  orgval=v;
					            	}
					        	
					        	if(k == "org_rel_info_set")
					        		{
					        		  
					        		}
					        	else
					             {
					        		 tbl_row += "<td>"+v+"</td>";
					             }
					            
					            	
					        })
					       tbl_row += "<td><a href=" +"/NepalGovContact/editPost?id="+ orgval +""+ ">Edit</a</td>";
					        tbl_row += "<td><a href=" +"/NepalGovContact/deletePost?id="+ orgval +""+ ">Delete</a</td>";
					        tbl_body += "<tr>"+tbl_row+"</tr>";
					                   
					    })
					    tbl_body=tbl_body + " </table>";
					  }
					  catch(err)
					  {
						  alert(err);
					  }
					   // alert(tbl_body);
					    
					    $("#tableResponse").html(tbl_body);
					
				
				
				
				});   
		}
		catch(err)
		{
			alert(err)
		}

	}
	

    $('#btn_add_position').click(function (e) {
   
    	//alert("called");
    	e.stopPropagation();
        e.preventDefault();
        var position_code=$('#position_code').val();
  	   var position_name=$('#position_name').val();
  	 var level_id=$('#level_combo').val();
  	  
 	   
 	   var sendInfo = {position_code:position_code,position_name:position_name,level_id:level_id};
 	   var requestpath=$(location).attr('pathname');
		
		  var rpath=requestpath.substring(requestpath.lastIndexOf("/")+1);
		  //alert(empID);
		  //alert(empName);
	 	  // alert(rpath);
		  var ppath="./Additem.jsp"
		  if(rpath == "AddItem.jsp")
			  {
			    ppath="../NepalGovContact/aMinRecord/";
			  }
		  if(rpath=="ContactController")
			  {
			    ppath="/NepalGovContact/aMinRecord/";
			  }
		  ppath="/NepalGovContact/aPostRecord/";
		  $.post(ppath, {
              savedata:  JSON.stringify(sendInfo),
            //  pdata: JSON.stringify(imgar),
              dataType: 'json'
      }, function(responseText) {
         // alert(responseText);    
    	  $('#ajaxResponse').text(responseText);
              displayTable();
              //$("#tableResponse").load(location.href + " #tableResponse");
      });
    //	alert("Button Click");
   
    //$(".article").hide();
   });
});
