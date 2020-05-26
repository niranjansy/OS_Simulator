var numberOfResources;
var R,P;
var res=[];
var allocationMatrix=[];
var max=[];
var c=1;
var count =0; 
var index = 0;
var marked=[];
var need=[];
var available=[];
var safe =[];
var ul1;
var req = [];

 function addInitialRes(){

 var totalres = document.getElementById("totalres").value;
	numberOfResources = parseInt(totalres);
	if(numberOfResources<=0)
	{
	window.alert("Invalid Input");
	return;
	}

 R=numberOfResources;
	var resources = document.getElementById("resources");
	resources.textContent="";
	for(var i=0;i<numberOfResources;i++){
	var card =document.createElement("div");
	card.setAttribute("style","width:auto;float:left;margin-right:50px;height:50px;");
	var p = document.createElement("div");
	p.setAttribute("style","width:100px;float:left;font-weight:bold;");
	p.textContent="Resource "+(i+1);
	card.appendChild(p);
	var inp = document.createElement("input");
	inp.setAttribute("id","res-"+(i+1));
	inp.setAttribute("style","text-align:center;margin:auto;float:left;border: 2px solid black; padding:10px;width: 40px;height: 20px;");
	card.appendChild(inp);
	resources.appendChild(card);
	}

 if(isNaN(numberOfResources))
	{

 var input=document.getElementById("inputsection");
	input.innerHTML="";
	}
	else
	{
	var input=document.getElementById("inputsection");
	input.innerHTML="";
	var d1 = document.createElement("div");
	d1.setAttribute("style","margin-left:10px;float:left;");
	var p1=document.createElement("card");
	p1.setAttribute("style","margin-left:10px;float:left;font-weight:bold;");
	p1.textContent = "Maximum resources: ";
	d1.appendChild(p1);
	for(var i=0;i<numberOfResources;i++){
	var card =document.createElement("div");
	card.setAttribute("style","width:auto;float:left;margin-right:50px;height:50px;");
	var inp1 = document.createElement("input");
	inp1.setAttribute("id","MPR"+(i+1));
	inp1.setAttribute("placeholder","R-"+(i+1));
	inp1.setAttribute("style","width:50px;text-align:center;margin:auto;float:left;border: 2px solid black; padding:10px;width: 40px;height: 20px;");
	card.appendChild(inp1);
	d1.appendChild(card);
	}
	input.appendChild(d1);
	var d2 = document.createElement("div");
	d1.setAttribute("style","width:100%;margin-left:10px;float:left;");
	var p2=document.createElement("card");
	p2.setAttribute("style","margin-left:20px;float:left;font-weight:bold;");
	p2.textContent = "Resources allocated: ";
	d2.appendChild(p2);
	for(var i=0;i<numberOfResources;i++){
	var card =document.createElement("div");
	card.setAttribute("style","width:auto;float:left;margin-right:50px;height:50px;");
	var inp2 = document.createElement("input");
	inp2.setAttribute("placeholder","R-"+(i+1));
	inp2.setAttribute("id","APR"+(i+1));
	inp2.setAttribute("style","width:50px;text-align:center;margin:auto;float:left;border: 2px solid black; padding:10px;width: 40px;height: 20px;");
	card.appendChild(inp2);
	d2.appendChild(card);
	}
	input.appendChild(d2);
	var but = document.createElement("button");
	but.textContent = "ADD PROCESS";
	but.setAttribute("onclick","addToList()");
	but.setAttribute("class","btn btn-outline-light");
	but.setAttribute("style","width:200px");
	input.appendChild(but);
	console.log(numberOfResources);
	}
}


 //function to add processes
function addToList() {
	var temp = [];
	for(var i=0;i<numberOfResources;i++)
	{
	var inp = document.getElementById("MPR"+(i+1)).value;
	if (isNaN(parseInt(inp))){
	window.alert("Invalid input");
	return;
	}
 if (isNaN(parseInt(inp))) {
 window.alert("Invalid input of R");
 return;
 }

 temp.push( parseInt(inp));
	}
	max.push(temp);
	var t=0;
	var temp1 = [];
	for(var i=0;i<numberOfResources;i++)
	{
	var inp1 = document.getElementById("APR"+(i+1)).value;
	if (isNaN(parseInt(inp1))||(parseInt(inp1))>max[index][i]){
	window.alert("Invalid input " +(i+1));
	return;
	}



 temp1.push(parseInt(inp1));
	}
	allocationMatrix.push(temp1);


 for(var i = 0;i<numberOfResources;i++)
	{
 document.getElementById("MPR"+(i+1)).value = "";
 document.getElementById("APR"+(i+1)).value = "";
	}
	index = index + 1;	
	displayneed();
	displayalloc();

 }


 function is_available(x){
	var flag = true;
	for(var i=0;i<numberOfResources;i++){
	if(need[x][i]>available[i])
	flag = false;
	}
	return flag;

 }

 function safe_sequence(){
	for(var i=0;i<index;i++){
	if(marked[i] == false ) {	
	if(is_available(i)){
	console.log("Process " + (i+1) + " has enough resources");
	marked[i]=true;
	for(j=0;j<numberOfResources;j++){
	available[j]+=allocationMatrix[i][j];
	}
	var li = document.createElement("p");
	console.log("Current resources available: " + available);
	safe.push(i);
	safe_sequence();
	safe.pop();
	marked[i]=false;
	for(j=0;j<numberOfResources;j++){
	available[j] -= allocationMatrix[i][j]; 
	}
	}
	else{
	console.log("Process " + (i+1) + " doesn't have enough resources");
	console.log("Need: " + need[i]);
	console.log("Current resources available: " + available);
	continue;
	}
	}
	}
	if(safe.length==index){
	var output = document.getElementById("output");
	if(count == 0){
	var br = document.createElement("br");
	output.appendChild(br);
	output.appendChild(br);
	var d5=document.createElement("div");
	h = document.createElement("h5");
	h.textContent = "Safe sequences are :";
	h.setAttribute("style","font-weight:bold;");
	d5.appendChild(h);
	console.log("Safe sequences are :");
	output.appendChild(d5);
	var output2 = document.getElementById("output2");
	var d6=document.createElement("div");
	h2 = document.createElement("h5");
	h2.textContent = ".....Request Approved..... ";
	h2.setAttribute("style","font-weight:bold;");
	output2.appendChild(h2);
	}
	count++;
	var output = document.getElementById("output");
	var d = document.createElement("div");
	for(var i=0;i<index;i++){
	var p1 = document.createElement("card");
	p1.setAttribute("style","margin-left:50px;font-weight:bold;");
	p1.textContent= +(safe[i]+1);
	console.log(" "+(safe[i]+1)+" ");
	d.appendChild(p1);
	}
	output.appendChild(d);

 }
	if(count==0)
	{
	var output = document.getElementById("output");
	var div = document.createElement("div");
	var br = document.createElement("br");
	div.appendChild(br);
	div.appendChild(br);
	div.appendChild(br);
	var p2 = document.createElement("h5");
	p2.setAttribute("style","float:left;margin-left:30px;font-weight:bold;");
	p2.textContent = "No safe sequence";
	div.appendChild(p2);
	output.appendChild(div);
	var output2 = document.getElementById("output2");
	var d6=document.createElement("div");
	h2 = document.createElement("h5");
	h2.textContent = ".....Request Denied..... ";
	h2.setAttribute("style","font-weight:bold;");
	output2.appendChild(h2);
	}
}
function add()
{
	var process=parseInt(document.getElementById("PR").value);
	for(var i=0;i<numberOfResources;i++)
	{
	var inp3 = document.getElementById("R"+(i+1)).value;
	if (isNaN(parseInt(inp3))||parseInt(inp3)<0){
	window.alert("Invalid input");
	return;
	}
	req.push(parseInt(inp3));
	}
	var j =process-1;
	if(process>index || process<=0)
	{
	window.alert("Invalid input: Process does not exit");
	return;
	}
	console.log(j);
	var x=1,f=1;
	var output1 = document.getElementById("output1");
	var br = document.createElement("br");
	output1.appendChild(br);
	output1.appendChild(br);

 var c = document.createElement("h4");
	c.textContent="OUTPUT :";
	c.setAttribute("style","float:left;margin-left:20px;width:100%;font-weight:bold;");
	output1.appendChild(c);
	for(var i = 0; i < numberOfResources;i++)
	{
	if(req[i] > need[j][i])
	{
	var div = document.createElement("div");
	var card = document.createElement("h5");
	card.setAttribute("style","float:left;margin-left:30px;font-weight:bold;");
	card.textContent="Resources required more than needed!!!";
	div.appendChild(card);
	var cc = document.createElement("h5");
	cc.setAttribute("style","float:left;margin-left:30px;font-weight:bold;");
	cc.textContent="Need : " +need[j];
	div.appendChild(cc);
	var cc1 = document.createElement("h5");
	cc1.setAttribute("style","float:left;margin-left:30px;font-weight:bold;");
	cc1.textContent="Request : "+req;
	div.appendChild(cc1);
	output1.appendChild(div);
	console.log("Resources required more than needed!!!");
	f = 0;
	break;
	}
	}
	var x = 1;
	if(f == 1)
	{
	for(var i=0;i<numberOfResources;i++)
	{
	if(req[i]>available[i])
	{
	var div1 = document.createElement("div");
	div1.setAttribute("style","width:100%;");
	var card1 = document.createElement("h5");
	card1.setAttribute("style","float:left;margin-left:30px;font-weight:bold;");
	card1.textContent="Wait!!!..Required resources are unavailable";
	div1.appendChild(card1);
	var cc1 = document.createElement("h5");
	cc1.setAttribute("style","float:left;margin-left:30px;font-weight:bold;");
	cc1.textContent="Available : " +available;
	div1.appendChild(cc1);
	var cc2 = document.createElement("h5");
	cc2.setAttribute("style","float:left;margin-left:30px;font-weight:bold;");
	cc2.textContent="Request : "+req;
	div1.appendChild(cc2);
	output1.appendChild(div1);
	var br = document.createElement("br");
	output1.appendChild(br);
	output1.appendChild(br);
	output1.appendChild(br);
	console.log("Wait!!!..Required resources are unavailable");
	x = 0;
	break;
	} 
	}
	if(x == 1)
	{
	for(var i =0;i<numberOfResources;i++)
	{
	available[i] -= req[i];
	allocationMatrix[j][i] += req[i];
	need[j][i] -= req[i];
	}
	}
	safe_sequence();
	}
}

 function cleardata()
{
	marked =[];
	need =[];
	res=[];
	available=[];
	safe=[];
	req=[];
	var operation = document.getElementById("operations");
	operation.innerHTML="";
	var output1 = document.getElementById("output1");
	var output2 = document.getElementById("output2");
	var output = document.getElementById("output");
	output.innerHTML="";
	output1.innerHTML="";
	output2.innerHTML="";
}
function clear_data()
{
	console.log("HII");
	marked =[];
	need =[];
	res=[];
	available=[];
	req=[];
	c=1;
	count =0; 
	index = 0;
	safe =[];
	max =[];
	allocationMatrix = [];
	var resources = document.getElementById("resources");
	resources.innerHTML="";
	var operation = document.getElementById("operations");
	operation.innerHTML="";
	var output1 = document.getElementById("output1");
	var output2 = document.getElementById("output2");
	var output = document.getElementById("output");
	output.innerHTML="";
	output1.innerHTML="";
	output2.innerHTML="";
	var input=document.getElementById("inputsection");
	input.innerHTML="";
	var t = document.getElementById("table");
	t.innerHTML="";
	var t1=document.getElementById("totalres");
	t1.value="";

 }
function banker(){
	cleardata();
	for(var i =0;i<index;i++){
	marked.push(false);
	}
	for(var i=0;i<index;i++){
	var temp=[];
	for(j=0;j<numberOfResources;j++)
	temp.push(max[i][j] - allocationMatrix[i][j]);
	need.push(temp);
	}
	for(var i=0; i<numberOfResources;i++){
	var inp1 = document.getElementById("res-"+(i+1)).value;
	if(isNaN(inp1)||inp1<0){
	window.alert("Invalid input ");
	return;
	}
	res.push(inp1); 
	}
	for(var j=0;j<numberOfResources;j++){
	var s = 0;
	for(var i=0;i<index;i++){
	s += allocationMatrix[i][j];
	}
	available.push(res[j] - s);
	}
	var operation = document.getElementById("operations");
	var d3 = document.createElement("div");
	d3.setAttribute("style","width:100%");
	var card1=document.createElement("div");
	card1.setAttribute("style","float:left;margin-right:50px;height:30px;");
	var pr=document.createElement("div");
	pr.textContent="Enter  the process which is requesting: ";
	pr.setAttribute("style","width:250px;float:left;margin-left:20px;font-weight:bold;")
	card1.appendChild(pr);

 var p3 = document.createElement("input");
	p3.setAttribute("style","width:100px;text-align:center;margin:auto;float:left;");
	p3.setAttribute("id","PR");
	card1.appendChild(p3);	
	d3.appendChild(card1);
	operation.appendChild(d3);
	for(var i=0;i<numberOfResources;i++){
	var card =document.createElement("div");
	//card.setAttribute("class","card");
	card.setAttribute("style","float:left;margin-right:50px;height:50px;");
	var p = document.createElement("div");
	p.setAttribute("style","width:100px;float:left;font-weight:bold;");
	p.textContent="Resource "+(i+1)+":";
	card.appendChild(p);
	var inp = document.createElement("input");
	inp.setAttribute("id","R"+(i+1));
	inp.setAttribute("style","width:50px;text-align:center;margin:auto;float:left;");
	card.appendChild(inp);
	d3.appendChild(card);
	}
	var but = document.createElement("button");
	but.textContent = "continue";
	but.setAttribute("onclick","add()");
	but.setAttribute("class","btn btn-outline-light");
	but.setAttribute("style","width:200px;text-align:center;margin:auto;float:left;font-weight:bold;");
	operation.appendChild(d3);
	operation.appendChild(but);
}

 // Function to display Max Need Table
function displayneed(){
	var heading = document.getElementById("heading");
	heading.innerHTML="";
	var h = document.createElement("h5");
	h.textContent = "Maximum Need of Resources";
	h.setAttribute("style","text-align: center;font-weight:bold;");
	heading.appendChild(h);
	var thead=document.getElementById("inp-head");
	thead.innerHTML="";
	var tr = document.createElement("tr");
	var td1 = document.createElement("td");
	td1.textContent = "Process ID";
	td1.setAttribute("style","text-align: center;font-weight:bold;");
	tr.appendChild(td1);
	for(var i=0;i<numberOfResources;i++){
	var tdi=document.createElement("td");
	tdi.textContent = "R-"+(i+1);
	tdi.setAttribute("style","text-align:center;font-weight:bold;");
	tr.appendChild(tdi);
	}
	thead.appendChild(tr);

 var table=document.getElementById("ptable");
	table.innerHTML="";
	for(j=0;j<index;j++)
	{
	var trj = document.createElement("tr");
	var td1 = document.createElement("td");
	td1.textContent = "P"+(j+1);
	trj.appendChild(td1);
	for(var i=0;i<numberOfResources;i++){
	var tdi=document.createElement("td");
	tdi.textContent = max[j][i];
	trj.appendChild(tdi);
	}
	table.appendChild(trj);
	}

 }
// Function to print Allocated Table
function displayalloc(){
	var heading_alloc = document.getElementById("heading_alloc");
	heading_alloc.innerHTML="";
	var h1 = document.createElement("h5");
	h1.textContent = "Allocated Resourses";
	h1.setAttribute("style","text-align: center;font-weight:bold;");
	heading_alloc.appendChild(h1);
	var thead1=document.getElementById("inp-head_alloc");
	thead1.innerHTML="";
	var tr = document.createElement("tr");
	var td1 = document.createElement("td");
	td1.textContent = "Process ID";
	td1.setAttribute("style","text-align: center;font-weight:bold;");
	tr.appendChild(td1);
	for(var i=0;i<numberOfResources;i++){
	var tdi=document.createElement("td");
	tdi.textContent = "R-"+(i+1);
	tdi.setAttribute("style","text-align:center;");
	tr.appendChild(tdi);
	}
	thead1.appendChild(tr);

 var table1=document.getElementById("ptable_alloc");
	table1.innerHTML="";
	for(j=0;j<index;j++)
	{
	var trj = document.createElement("tr");
	var td1 = document.createElement("td");
	td1.textContent = "P"+(j+1);
	trj.appendChild(td1);
	for(var i=0;i<numberOfResources;i++){
	var tdi=document.createElement("td");
	tdi.textContent = allocationMatrix[j][i];
	trj.appendChild(tdi);
	}
	table1.appendChild(trj);
	}
}
