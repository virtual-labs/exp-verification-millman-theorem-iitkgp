var count=0;
var dr1,dr2,dr3,dr4,dr5,dr6,dr7,dr8;
function perform1()///case-1
	{
		//if(document.getElementById('r1').value<=10 && document.getElementById('r2').value<=10 && document.getElementById('rl1').value<=10 && document.getElementById('r1').value>=1 && document.getElementById('r2').value>=1 && document.getElementById('rl1').value>=1){
		//if(document.getElementById('v1').value<=220 && document.getElementById('v2').value<=220 && document.getElementById('v3').value<=220 && document.getElementById('v1').value>=110 && document.getElementById('v2').value>=110 && document.getElementById('v3').value>=110){
		if(document.getElementById('r1').value!=0 && document.getElementById('r2').value!=0 && document.getElementById('rl1').value!=0){
				
		var r1,r2,v1,v2,v3,rl1,s1,s2,s3,tmp1,tmp2;
r1=parseFloat(document.getElementById('r1').value * 1000);
r2=parseFloat(document.getElementById('r2').value * 1000);
v1=parseFloat(document.getElementById('v1').value);
v2=parseFloat(document.getElementById('v2').value);
v3=parseFloat(document.getElementById('v3').value);
rl1=parseFloat(document.getElementById('rl1').value * 1000);
s1=parseFloat(document.getElementById('s1').value);
s2=parseFloat(document.getElementById('s2').value);
s3=parseFloat(document.getElementById('s3').value);
		if (s1==1 && s2==1 && s3==2)
		{
			
			document.getElementById('mainCKT').src = "./images/Millman_image1.jpg";
			
			///new addition by Piyali Chattopadhyay
			///Project Scientist, Vlabs, IIT KGP
			///By mesh analysis technic in new circuit
			
			///using kvl
			//Right parts of derived equation theoritically
			
			/* document.getElementById('mainCKT').src = "./images/Millman_image1.jpg";
			
			var RP1 = (v1*r2);
			var RP2 = (v2*r2);
			var RP3 = v2*(r1+r2);
			var RP = RP3 - (RP2 - RP1);
			//Left parts of derived equation theoritically
			var LP1 = r2*(r1 + r2);
			var LP2 = (r2*r2);
			var LP3 = rl1*(r1+r2);
			var LP = LP1 - (LP2 - LP3); */
			
			///using Millman's Theorem
			var RP1 = ((v1/r1) + (v2/r2));
			var LP1 = ((1/r1) + (1/r2));
			var Veq = (RP1/LP1);
			var Req = (1/((1/r1)+(1/r2)));
			
			
			var i = (Veq/(Req + rl1));
			if (i > 5 || isNaN(i))///(i > 5 || isNaN(i))
				{
					document.getElementById('led1').src = "./images/led_off.png";
					document.getElementById("led1").style["cursor"] = "pointer";
					alert('Provide higher resistance values. Click on the fuse indicator to repair it.');///alert('Click on the fuse indicator to repair it and increase the resistance value.');
				}
				else
				{
				document.f1.A.value= i.toPrecision(5);
				document.f1.V.value=  (document.f1.A.value * rl1).toPrecision(5);
				document.f1.A1.value= document.f1.A.value;
				document.f1.rl2.value=rl1;
				dr1=document.f1.A.value;
				dr2=(document.f1.A.value * rl1).toPrecision(5);
				dr3=rl1;
				perform_meter1()
				perform_meter2()
				}
		}
		else
		{
			
			alert("Please select S1, S2 to Power and S3 to Load for case 1.")
		}
		}
		else
		{
			
			alert("Resistance values should not be zero.")
		}
		/* else
		{
			
			alert("Please ensure that the resistance values remain within the range specified in the instructions.")
		} */
		
	}
function perform2()	{
	
	//if(document.getElementById('r1').value<=10 && document.getElementById('r2').value<=10 && document.getElementById('rl1').value<=10 && document.getElementById('r1').value>=1 && document.getElementById('r2').value>=1 && document.getElementById('rl1').value>=1){
	if(document.getElementById('r1').value!=0 && document.getElementById('r2').value!=0 && document.getElementById('rl1').value!=0){
			
var r1,r2,v1,v2,v3,rl1,s1,s2,s3,tmp1,tmp2,vth1,vth2;
r1=parseFloat(document.getElementById('r1').value * 1000);
r2=parseFloat(document.getElementById('r2').value * 1000);
v1=parseFloat(document.getElementById('v1').value);
v2=parseFloat(document.getElementById('v2').value);
v3=parseFloat(document.getElementById('v3').value);
rl1=parseFloat(document.getElementById('rl1').value * 1000);
s1=parseFloat(document.getElementById('s1').value);
s2=parseFloat(document.getElementById('s2').value);
s3=parseFloat(document.getElementById('s3').value);
		if (s1==1 && s2==1 && s3==3)
		{
			///new addition by Piyali Chattopadhyay
			///Project Scientist, Vlabs, IIT KGP
			///Using the formula derived theoritically from updated circuit with modified ranges of resitances
			
			document.getElementById('mainCKT').src = "./images/Millman_image2.jpg";
			
			var RP11 = v2*(r1 + r2);
			var RP22 = r2*(v1 - v2);
			var RPP = (RP11 + RP22);
			var LPP = (r1 + r2);
			var V_Thev = RPP/LPP ;
			
			document.f1.vth1.value= V_Thev;
			document.f1.vth2.value= document.f1.vth1.value;
			document.f1.V.value= document.f1.vth1.value;
			document.f1.A.value=0;
			dr4=document.f1.vth1.value;	
			perform_meter1()
			perform_meter2()
		}
		else
		{
			alert("Please select S1, S2 to Power and S3 to Intermediate for case 2(a).")
		}
	}
	else
		{
			
			alert("Resistance values should not be zero.")
		}
	/* else
		{
			
			alert("Please ensure that the resistance values remain within the range specified in the instructions.")
		} */
	
	}
function perform3(){

//if(document.getElementById('r1').value<=10 && document.getElementById('r2').value<=10 && document.getElementById('rl1').value<=10 && document.getElementById('r1').value>=1 && document.getElementById('r2').value>=1 && document.getElementById('rl1').value>=1){
if(document.getElementById('r1').value!=0 && document.getElementById('r2').value!=0 && document.getElementById('rl1').value!=0){
			
var r1,r2,v1,v2,v3,rl1,s1,s2,s3,tmp1,tmp2,rth1,rth2;
r1=parseFloat(document.getElementById('r1').value * 1000);
r2=parseFloat(document.getElementById('r2').value * 1000);
v1=parseFloat(document.getElementById('v1').value);
v3=parseFloat(document.getElementById('v3').value);
rl1=parseFloat(document.getElementById('rl1').value * 1000);
v2=parseFloat(document.getElementById('v2').value);
s1=parseFloat(document.getElementById('s1').value);
s2=parseFloat(document.getElementById('s2').value);
s3=parseFloat(document.getElementById('s3').value);
		if (s1==2 && s2==2 && s3==1)
		{
		///new addition by Piyali Chattopadhyay
			///Project Scientist, Vlabs, IIT KGP
			///Using the formula derived theoritically from updated circuit with modified ranges of resitances

document.getElementById('mainCKT').src = "./images/Millman_image3.jpg";
			
			var R_Thev = ((r1 * r2)/(r1 + r2));			
			var i = (v3 / R_Thev);
			console.log("R_Thev =" + R_Thev);
			
			if (i > 5 || isNaN(i))
				{
					document.getElementById('led1').src = "./images/led_off.png";
					document.getElementById("led1").style["cursor"] = "pointer";
					alert('Provide higher resistance values. Click on the fuse indicator to repair it.');
				}
			else
			{
				document.f1.A.value= i.toPrecision(5);
				document.f1.A12.value= document.f1.A.value;
				document.f1.v22.value= v3;
				document.f1.V.value= v3;
				document.f1.rth1.value= (v3/document.f1.A12.value).toPrecision(5);
				document.f1.rth2.value= document.f1.rth1.value;
				dr5=v3;
				dr6=document.f1.A.value;
				dr7=document.f1.rth1.value;
				perform_meter1()
				perform_meter2()
			}
		}
		else
		{
			alert("Please select S1, S2 to Short and S3 to Power for case 2(b).")
		}
}
else
		{
			
			alert("Resistance values should not be zero.")
		}
/* else
		{
			
			alert("Please ensure that the resistance values remain within the range specified in the instructions.")
		} */
	
	}
function perform4(){
	
	//if(document.getElementById('r1').value<=10 && document.getElementById('r2').value<=10 && document.getElementById('rl1').value<=10 && document.getElementById('r1').value>=1 && document.getElementById('r2').value>=1 && document.getElementById('rl1').value>=1){
if(document.getElementById('r1').value!=0 && document.getElementById('r2').value!=0 && document.getElementById('rl1').value!=0){
	
var r1,r2,v1,v2,v3,rl1,s1,s2,s3,tmp1,tmp2;
r1=parseFloat(document.getElementById('r1').value * 1000);
r2=parseFloat(document.getElementById('r2').value * 1000);
v1=parseFloat(document.getElementById('v1').value);
v2=parseFloat(document.getElementById('v2').value);
v3=parseFloat(document.getElementById('v3').value);
rl1=parseFloat(document.getElementById('rl1').value * 1000);
s1=parseFloat(document.getElementById('s1').value);
s2=parseFloat(document.getElementById('s2').value);
s3=parseFloat(document.getElementById('s3').value);
		if(document.f1.rth1.value!=0 && document.f1.vth1.value!=0)
		{
			tmp1=parseFloat(document.f1.rth1.value);
			tmp2=parseFloat(document.f1.vth1.value);
			//document.f1.A13.value= tmp2 / (tmp1 + rl1);
			document.f1.A18.value=(tmp2 / (tmp1 + rl1)).toPrecision(5);
			dr8=(tmp2 / (tmp1 + rl1)).toPrecision(5);
			
		}    	
		else
		{
			alert("Please find Vm and Rm first.")
		}
	}
	else
		{
			
			alert("Resistance values should not be zero.")
		}
	/* else
		{
			
			alert("Please ensure that the resistance values remain within the range specified in the instructions.")
		} */
}
	
function performtable(){	
count=count+1;
			
			document.f1.v22.value=0; document.f1.A12.value=0; document.f1.rth1.value=0; document.f1.vth1.value=0; document.f1.A.value=0; document.f1.V.value=0; document.f1.A1.value=0;
			alert("The observation table is updated. Change the resistance and voltage source values to take another observation.");
			
			document.f1.rth2.value=0; document.f1.vth2.value=0; document.f1.rl2.value=0; document.f1.A18.value=0;
			perform_meter1()
			perform_meter2()
			if(count==1)
			{document.f1.tr1.value=dr1; document.f1.tr2.value=dr2; document.f1.tr3.value=dr3; document.f1.tr4.value=dr4;
			document.f1.tr5.value=dr5; document.f1.tr6.value=dr6; document.f1.tr7.value=dr7; document.f1.tr8.value=dr8;}
			else if(count==2)
			{document.f1.tr10.value=dr1; document.f1.tr20.value=dr2; document.f1.tr30.value=dr3; document.f1.tr40.value=dr4;
			document.f1.tr50.value=dr5; document.f1.tr60.value=dr6; document.f1.tr70.value=dr7; document.f1.tr80.value=dr8;}
			else if(count==3)
			{document.f1.tr11.value=dr1; document.f1.tr21.value=dr2; document.f1.tr31.value=dr3; document.f1.tr41.value=dr4;
			document.f1.tr51.value=dr5; document.f1.tr61.value=dr6; document.f1.tr71.value=dr7; document.f1.tr81.value=dr8;}
			else if(count==4)
			{document.f1.tr12.value=dr1; document.f1.tr22.value=dr2; document.f1.tr32.value=dr3; document.f1.tr42.value=dr4;
			document.f1.tr52.value=dr5; document.f1.tr62.value=dr6; document.f1.tr72.value=dr7; document.f1.tr82.value=dr8;}
			else if(count==5)
			{document.f1.tr13.value=dr1; document.f1.tr23.value=dr2; document.f1.tr33.value=dr3; document.f1.tr43.value=dr4;
			document.f1.tr53.value=dr5; document.f1.tr63.value=dr6; document.f1.tr73.value=dr7; document.f1.tr83.value=dr8;}
			else{alert("The observation table is full. Refresh the page to continue");
			}
			document.getElementById('mainCKT').src = "./images/Millman_image.jpg";
		}
	
function change_led1() {
		var fuse = document.getElementById('led1');
		if(fuse.src.match("led_off"))
		{
			fuse.src = "./images/led_on.png"; 
		//document.f1.r2.value = 200;
		}
		
}
function change_led2() {
		var fuse = document.getElementById('led2');
		if(fuse.src.match("led_off"))
		{
		fuse.src = "./images/led_on.png"; 
		//document.f1.r2.value = 200;
		}
}
