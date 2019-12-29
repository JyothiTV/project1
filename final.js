var servnum;
function fnchangeborder(divid)
{
   
   var id1="p1";
   var id2="p2";
   var id3="p3";
   var id4="p4";
   servnum=divid;


 if(divid=="p1")
  {

     document.getElementById(divid).style.border="solid #1aa3ff";
     document.getElementById(id2).style.border="solid #e6e6e6";
     document.getElementById(id3).style.border="solid #e6e6e6";
     document.getElementById(id4).style.border="solid #e6e6e6";
  }


else if(divid=="p2")
 {

    document.getElementById(divid).style.border="solid #1aa3ff";
    document.getElementById(id1).style.border="solid #e6e6e6";
    document.getElementById(id3).style.border="solid #e6e6e6";
    document.getElementById(id4).style.border="solid #e6e6e6";
 }


 else if(divid=="p3")
   {

    document.getElementById(divid).style.border="solid #1aa3ff";
    document.getElementById(id1).style.border="solid #e6e6e6";
    document.getElementById(id2).style.border="solid #e6e6e6";
    document.getElementById(id4).style.border="solid #e6e6e6";

 }

else if(divid=="p4")
 {

    document.getElementById(divid).style.border="solid #1aa3ff";
    document.getElementById(id1).style.border="solid #e6e6e6";
    document.getElementById(id2).style.border="solid #e6e6e6";
    document.getElementById(id3).style.border="solid #e6e6e6";

}


}
   


function toggleswitch(tid)

{

   document.getElementById("p9").style.border="solid #1aa3ff";   

   if(document.getElementById(tid).checked==true)
     
  {
      
          if(servnum=="p1")  
       {
          document.getElementById("p7").innerHTML="<h5>lollipop</h5><h2>$25</h2><h3>&nbsp per month</h3><h4>For 25 serving </h4>";
          document.getElementById("p8").innerHTML="<h5>Icecandy</h5><h2> $50</h2><h3>&nbsp per month</h3><h4>For 25 serving</h4>";
          document.getElementById("p9").innerHTML="<h5>Your savings with lollipop</h5><h2> $25</h2><h3>&nbsp&nbsp per month</h3>";


 	}


        if(servnum=="p2")  
      {
          document.getElementById("p7").innerHTML="<h5>lollipop</h5><h2> $50</h2><h3>&nbsp per month</h3><h4> For 50 serving</h4>";
          document.getElementById("p8").innerHTML="<h5>Icecandy</h5><h2>$100</h2><h3>&nbsp per month</h3><h4> For 50 serving</h4>";
          document.getElementById("p9").innerHTML="<h5>Your savings with lollipop</h5><h2> $50</h2><h3>&nbsp&nbsp per month</h3>";


 	}


       if(servnum=="p3")  
        {
          document.getElementById("p7").innerHTML="<h5>lollipop</h5><h2>$100</h2><h3>&nbsp per month</h3><h4>For 100 serving</h4>";
          document.getElementById("p8").innerHTML="<h5>Icecandy</h5><h2>$200</h2><h3>&nbsp per month</h3><h4>For 100 serving</h4>";
          document.getElementById("p9").innerHTML="<h5>Your savings with lollipop</h5><h2>$100</h2><h3>&nbsp&nbsp per month</h3>";


 	}


      if(servnum=="p4")  
       {
          document.getElementById("p7").innerHTML="<h5>lollipop</h5><h2> $200</h2><h3>&nbsp per month</h3><h4>For 200 serving</h4>";
          document.getElementById("p8").innerHTML="<h5>Icecandy</h5><h2> $400</h2><h3>&nbsp per month</h3><h4>For 200 serving</h4>";
          document.getElementById("p9").innerHTML="<h5>Your savings with lollipop</h5><h2> $200</h2><h3>&nbsp per month</h3>";


 	}

   }
   
 else
   {   
          if(servnum=="p1")
        {  
          document.getElementById("p7").innerHTML="<h5>lollipop</h5><h2>$150</h2><h3>&nbsp per annum</h3><h4>For 25 serving</h4>";
          document.getElementById("p8").innerHTML="<h5>Icecandy</h5><h2>$300</h2><h3>&nbsp per annum</h3><h4>For 25 serving</h4>";
          document.getElementById("p9").innerHTML="<h5>Your savings with lollipop</h5><h2> $150</h2><h3>&nbsp&nbsp per annum</h3>";
       } 
 

        if(servnum=="p2")
        {  
          document.getElementById("p7").innerHTML="<h5>lollipop</h5><h2>$300</h2><h3>&nbsp per annum</h3><h4>For 50 serving</h4>";
          document.getElementById("p8").innerHTML="<h5>Icecandy</h5><h2> $600</h2><h3>&nbsp per annum</h3><h4>For 50 serving</h4>";
          document.getElementById("p9").innerHTML="<h5>Your savings with lollipop</h5><h2>$300</h2><h3>&nbsp&nbsp per annum</h3>";
       } 



      if(servnum=="p3")
        {  
          document.getElementById("p7").innerHTML="<h5>lollipop</h5><h2>$600 </h2><h3>&nbsp per annum</h3><h4>For 100 serving</h4>";
          document.getElementById("p8").innerHTML="<h5>Icecandy</h5><h2> $1200 </h2><h3>&nbsp per annum</h3><h4>For 100 serving</h4>";
          document.getElementById("p9").innerHTML="<h5>Your savings with lollipop</h5><h2>$600 </h2><h3>&nbsp&nbsp per annum</h3>";
       } 


     if(servnum=="p4")
        {  
          document.getElementById("p7").innerHTML="<h5>lollipop</h5><h2>$1200</h2><h3> per annum</h3><h4>For 200 serving</h4>";
          document.getElementById("p8").innerHTML="<h5>Icecandy</h5><h2> $2400</h2><h3> per annum</h3><h4>For 200 serving</h4>";
          document.getElementById("p9").innerHTML="<h5>Your savings with lollipop</h5><h2>$1200</h2><h3>&nbsp&nbsp per annum</h3>";
       } 

   }

}