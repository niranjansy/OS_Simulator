var x=2,max_val;
function myFunction() {
    x=x+1;
    // var h1 = document.getElementsByTagName("input")[x];
    // var att = document.createAttribute("class");
    // att.value = "tdm-abc";
	// h1.setAttributeNode(att);
	// (document.getElementById("input-hide")[x]) = "block";
	document.getElementsByTagName("input")[x].style.display = "block";
}

function createNewElement() {
	// First create a DIV element.
	x = x + 1;
	var txtNewInputBox = document.createElement('div');

    // Then add the content (a new input box) of the element.
	txtNewInputBox.innerHTML = "<input type='text' id='newInputBox'>";
	txtNewInputBox.innerHTML = "<input type='number' min='0' class='form-control' id='exampleNumber1' placeholder='Enter Request'><br>"

    // Finally put it where it is supposed to appear.
	document.getElementById("newElementId").appendChild(txtNewInputBox);
}

var fcfs=0,sstf=0,scan=0,cscan=0,look=0,clook=0;

function optchecked(option)
{
	if(option == 0)
	{
		fcfs = fcfs+1;
		//now change the background color to say that it is selected
		if(fcfs % 2 == 1)
		{
			var f1 = document.getElementsByTagName("button")[0];
			var att = document.createAttribute("class");
			att.value = "button-checked1";
			f1.setAttributeNode(att);
		}

		if(fcfs % 2 == 0)
		{
			var f1 = document.getElementsByTagName("button")[0];
			var att = document.createAttribute("class");
			att.value = "button1";
			f1.setAttributeNode(att);
		}
	}

	if(option == 1)
	{
		sstf = sstf+1;
		if(sstf % 2 ==1)
		{
			var f1 = document.getElementsByTagName("button")[1];
			var att = document.createAttribute("class");

			att.value = "button-checked2";
			f1.setAttributeNode(att);
		}

		if(sstf % 2 ==0)
		{
			var f1 = document.getElementsByTagName("button")[1];
			var att = document.createAttribute("class");

			att.value = "button2";
			f1.setAttributeNode(att);
		}
	}

	if(option == 2)
	{
		scan += 1;
		if(scan % 2 ==1)
		{
			var f1 = document.getElementsByTagName("button")[2];
			var att = document.createAttribute("class");

			att.value = "button-checked3";
			f1.setAttributeNode(att);
		}

		if(scan % 2 ==0)
		{
			var f1 = document.getElementsByTagName("button")[2];
			var att = document.createAttribute("class");

			att.value = "button3";
			f1.setAttributeNode(att);
		}
	}

	if(option == 3)
	{
		cscan += 1;
		if(cscan % 2 ==1)
		{
			var f1 = document.getElementsByTagName("button")[3];
			var att = document.createAttribute("class");

			att.value = "button-checked4";
			f1.setAttributeNode(att);
		}

		if(cscan % 2 ==0)
		{
			var f1 = document.getElementsByTagName("button")[3];
			var att = document.createAttribute("class");

			att.value = "button4";
			f1.setAttributeNode(att);
		}
	}

	if(option == 4)
	{
		look += 1;
		if(look % 2 ==1)
		{
			var f1 = document.getElementsByTagName("button")[4];
			var att = document.createAttribute("class");

			att.value = "button-checked5";
			f1.setAttributeNode(att);
		}

		if(look % 2 ==0)
		{
			var f1 = document.getElementsByTagName("button")[4];
			var att = document.createAttribute("class");

			att.value = "button5";
			f1.setAttributeNode(att);
		}
	}

	if(option == 5)
	{
		clook += 1;
		if(clook % 2 ==1)
		{
			var f1 = document.getElementsByTagName("button")[5];
			var att = document.createAttribute("class");

			att.value = "button-checked6";
			f1.setAttributeNode(att);
		}

		if(clook % 2 ==0)
		{
			var f1 = document.getElementsByTagName("button")[5];
			var att = document.createAttribute("class");

			att.value = "button6";
			f1.setAttributeNode(att);
		}
	}

}

function calculate()
{
	document.getElementById("show-button-show").style.display = "block";
	
	var min = parseInt(document.getElementsByTagName("input")[1].value);
	var max = parseInt(document.getElementsByTagName("input")[2].value);

	if(max <= min)
	{
		alert("invalid cylinder numbers");
		return;
	}

	var fcfsv=0,sstfv=0,scanv=0,cscanv=0,lookv=0,clookv=0;


    fcfsv = calculate_fcfs();


	sstfv = calculate_sstf();

    scanv = calculate_scan();

	cscanv = calculate_cscan();

	lookv = calculate_look();

	clookv = calculate_clook();

    var f = document.getElementById("s_graph");
    var att = document.createAttribute("class");
    att.value = "s_show";
    f.setAttributeNode(att);
	show_graph(fcfsv,sstfv,scanv,cscanv,lookv,clookv);
}

function show_graph_section(){
	// var f = document.getElementById("graph_section");
	// var att = document.createAttribute("class");

	// att.value = "s_show";		//s_show is not defined
	// f.setAttributeNode(att);
	document.getElementById("graph_section").style.display = "block";
}

var dp_fcfs = []; var dp_sstf = [];  var dp_scan = []; var dp_cscan = []; var dp_look = [];  var dp_clook = [];
var fcfs_values=[]; var sstf_values=[]; var scan_values = []; var cscan_values=[]; var look_values = []; var clook_values = [];

function calculate_fcfs()
	{

		var i;
		var sum=0;
		var diff;
		var z;
		var y_i = -1;

 		var head = parseInt(document.getElementsByTagName("input")[0].value);
 		var max = parseInt(document.getElementsByTagName("input")[2].value);
 		var min = parseInt(document.getElementsByTagName("input")[1].value);

// 		if(head <= 0){
// 			alert('please choose a value greater than 0');
// 			return -10
// 		}

 		if(head > max)
 		{
 			alert("fcfs head is larger than last cylinder number");
 			return -10;
 		}

 		if(head < min)
 		{
 			alert("fcfs head is smaller than first cylinder number");
 			return -10;
 		}

 		/*dp_fcfs.push({x:head , y:0});*/
 		y_i++;
 		//dp_fcfs.push([head,y_i]);
 		fcfs_values.push(head);
		for(i=3;i<=x;++i)
		{
			y_i++;
			z = parseInt(document.getElementsByTagName("input")[i].value);
			if(z > max)
			{
				alert("input "+z+" is greater than the last cylinder");
				return -10;
			}

			if(z < min)
			{
				alert("input "+z+" is smaller than the first cylinder");
				return -10;
			}
			//dp_fcfs.push([z,i-2]);
			fcfs_values.push(z);
			diff = head - z;
			if(diff < 0)
			{
				diff = diff * (-1);
			}
			sum = sum + diff ;
			head = z;
		}

		//add values to the datapoints_fcfs
		allocate_fcfs();
		return sum;
	}


function calculate_sstf()
	{
		var in_arr=[];
		var diff;
		var sum=0;
		var y_i = 0;

		var head = parseInt(document.getElementsByTagName("input")[0].value);
 		var max = parseInt(document.getElementsByTagName("input")[2].value);
 		var min = parseInt(document.getElementsByTagName("input")[1].value);
		if(head > max)
 		{
 			alert("sstf head is larger than last cylinder number");
 			return -10;
 		}

 		if(head < min)
 		{
 			alert("sstf head is smaller than first cylinder number");
 			return -10;
 		}
 		//dp_sstf.push([head,0]);
 		sstf_values.push(head);
		in_arr.push(head);
		for(var i=3;i<=x;++i)
		{
			var z= parseInt(document.getElementsByTagName("input")[i].value);
			if(z > max)
			{
				alert("input "+z+" is greater than the last cylinder");
				return -10;
			}

			if(z < min)
			{
				alert("input "+z+" is smaller than the first cylinder");
				return -10;
			}
			in_arr.push(z);
		}
		var min=9999;
		var done=[];		//a new empty array
		var flag;
		//make done as 0
		for(i=0;i<x-2;++i)		//-2 because there are 2 checkboxes , do -8 if min and max are included
			done.push(0);


		for(var j=1; j<=x-2; ++j)
		{
			y_i++;
			for(var i=1;i<=x-2;++i)
			{
				diff = head - in_arr[i];

				if(diff < 0)
					diff = diff *(-1);

				if((diff < min) && (done[i-1] == 0))
				{
					min = diff;
					flag = i;
					//here we push the variables for the graph

				}
			}
			sum = sum + min;
			head = in_arr[flag];
			//dp_sstf.push([in_arr[flag],y_i]);
			sstf_values.push(in_arr[flag]);
			done[flag-1] = 1;
			min=9999;
		}
		allocate_sstf();
		return sum;
	}

	function calculate_scan()
	{
		var in_arr=[];
		var sum=0;
		var y_i = 0;

		var head = parseInt(document.getElementsByTagName("input")[0].value);
 		var max = parseInt(document.getElementsByTagName("input")[2].value);
 		var min = parseInt(document.getElementsByTagName("input")[1].value);
		if(head > max)
 		{
 			alert("scan head is larger than last cylinder number");
 			return -10;
 		}

 		if(head < min)
 		{
 			alert("scan head is smaller than first cylinder number");
 			return -10;
 		}
		scan_values.push(head);

		var max = document.getElementsByTagName("input")[2].value;

		for(var i=3;i<=x;++i)
		{
			var z= parseInt(document.getElementsByTagName("input")[i].value);
			if(z > max)
			{
				alert("input "+z+" is greater than the last cylinder");
				return -10;
			}

			if(z < min)
			{
				alert("input "+z+" is smaller than the first cylinder");
				return -10;
			}
			in_arr.push(z);
		}

		//sort the inputs
		in_arr.sort(function(a, b){return a - b});

		console.log[in_arr];

		sum = sum + (max - head);

		var temp;
		var i,j,flag;

		for(i=in_arr.length-1;i>=0;--i)
		{
			var p = parseInt(in_arr[i]);
			if(p < head)
			{
				flag = i+1;
				break;
			}
		}

		var p_i;
		for(j=flag;j<in_arr.length;++j)
		{
			y_i++;
			p_i = parseInt(in_arr[j]);
            scan_values.push(p_i);
		}

		y_i++;
		scan_values.push(max);

		for(j=flag-1; j>=0 ;--j)
		{
			y_i++;
			p_i = parseInt(in_arr[j]);
			scan_values.push(p_i);
		}

		var int = parseInt(in_arr[0]);
		sum = sum + (max - int);

		allocate_scan();
		return sum;
	}

	function calculate_cscan()
	{
		var in_arr=[];
		var sum=0;
		var y_i = 0;
		var head = parseInt(document.getElementsByTagName("input")[0].value);
 		var max = parseInt(document.getElementsByTagName("input")[2].value);
 		var min = parseInt(document.getElementsByTagName("input")[1].value);
		if(head > max)
 		{
 			alert("cscan head is larger than last cylinder number");
 			return -10;
 		}

 		if(head < min)
 		{
 			alert("cscan head is smaller than first cylinder number");
 			return -10;
 		}
		cscan_values.push(head);

		var max = document.getElementsByTagName("input")[2].value;

		for(var i=3;i<=x;++i)
		{
			var z= parseInt(document.getElementsByTagName("input")[i].value);
			if(z > max)
			{
				alert("input "+z+" is greater than the last cylinder");
				return -10;
			}

			if(z < min)
			{
				alert("input "+z+" is smaller than the first cylinder");
				return -10;
			}
			in_arr.push(z);
		}

		//sort the inputs
		in_arr.sort(function(a, b){return a - b});

		sum = sum + (max - head);

		var temp;
		var i,j,flag;

		for(i=in_arr.length-1;i>=0;--i)
		{
			var p = parseInt(in_arr[i]);
			if(p < head)
			{
				flag = i+1;
				break;
			}
		}

		var p_i;
		for(j=flag;j<in_arr.length;++j)
		{
			y_i++;
			p_i = parseInt(in_arr[j]);
			cscan_values.push(p_i);
		}
		cscan_values.push(max);
		for(j=0; j<=flag-1 ;++j)
		{
			y_i++;
			p_i = parseInt(in_arr[j]);
			cscan_values.push(p_i);
		}

		var int = parseInt(in_arr[flag-1]);
		sum = sum + (int);

		allocate_cscan();
		return sum;
	}

	function calculate_look()
	{
		var in_arr=[];
		var sum=0;
		var y_i=0;
		var head = parseInt(document.getElementsByTagName("input")[0].value);
 		var max = parseInt(document.getElementsByTagName("input")[2].value);
 		var min = parseInt(document.getElementsByTagName("input")[1].value);
		if(head > max)
 		{
 			alert("look head is larger than last cylinder number");
 			return -10;
 		}

 		if(head < min)
 		{
 			alert("look head is smaller than first cylinder number");
 			return -10;
 		}
		look_values.push(head);
		var max = document.getElementsByTagName("input")[2].value;

		for(var i=3;i<=x;++i)
		{
			var z= parseInt(document.getElementsByTagName("input")[i].value);
			if(z > max)
			{
				alert("input "+z+" is greater than the last cylinder");
				return -10;
			}

			if(z < min)
			{
				alert("input "+z+" is smaller than the first cylinder");
				return -10;
			}
			in_arr.push(z);
		}

		//sort the inputs
		in_arr.sort(function(a, b){return a - b});
		in_arr.sort(function(a, b){return a - b});

		var i,j,flag;
		for(i=in_arr.length-1;i>=0;--i)
		{
			var p = parseInt(in_arr[i]);
			if(p < head)
			{
				flag = i+1;
				break;
			}
		}
		var p_i;
		for(j=flag;j<in_arr.length;++j)
		{
			y_i++;
			p_i = parseInt(in_arr[j]);
			look_values.push(p_i);
		}

		for(j=flag-1; j>=0 ;--j)
		{
			y_i++;
			p_i = parseInt(in_arr[j]);
			look_values.push(p_i);
		}

		var int = parseInt(in_arr[x-3]);	//last element
		sum = sum + (int - head);

		var int = parseInt(in_arr[x-3]);
		var int2 = parseInt(in_arr[0]);
		sum = sum + (int - int2);

		allocate_look();
		return sum;
	}

	function calculate_clook()
	{
		var in_arr=[];
		var sum=0;
		var y_i = 0;
		var head = parseInt(document.getElementsByTagName("input")[0].value);
 		var max = parseInt(document.getElementsByTagName("input")[2].value);
 		var min = parseInt(document.getElementsByTagName("input")[1].value);
		if(head > max)
 		{
 			alert("clook head is larger than last cylinder number");
 			return -10;
 		}

 		if(head < min)
 		{
 			alert("clook head is smaller than first cylinder number");
 			return -10;
 		}
		clook_values.push(head);

		var max = document.getElementsByTagName("input")[2].value;

		for(var i=3;i<=x;++i)
		{
			var z= parseInt(document.getElementsByTagName("input")[i].value);
			if(z > max)
			{
				alert("input "+z+" is greater than the last cylinder");
				return -10;
			}

			if(z < min)
			{
				alert("input "+z+" is smaller than the first cylinder");
				return -10;
			}
			in_arr.push(z);
		}

		//sort the inputs
		in_arr.sort(function(a, b){return a - b});

		var len = in_arr.length-1;
		var p = parseInt(in_arr[len]);
		sum = sum + (p - head);

		var temp;
		var i,j,flag;

		for(i=in_arr.length-1;i>=0;--i)
		{
			var p = parseInt(in_arr[i]);
			if(p < head)
			{
				flag = i+1;
				break;
			}
		}
		var p_i;
		for(j=flag;j<in_arr.length;++j)
		{
			y_i++;
			p_i = parseInt(in_arr[j]);
			clook_values.push(p_i);
		}

		for(j=0; j<=flag-1 ;++j)
		{
			y_i++;
			p_i = parseInt(in_arr[j]);
			clook_values.push(p_i);
		}

		var int = parseInt(in_arr[flag-1]);
		var int2 = parseInt(in_arr[0]);
		sum = sum + (int - int2);

		allocate_clook();
		return sum;
	}

	window.onload = function () {
        CanvasJS.addColorSet("myColors",
                [//colorSet Array
                "#5CDB95",
                "#3500D3",
                "#86C232",
                "#FFE400",
                "#FF652F",
                "red"
                ]);
    }

	function show_graph(fcfs,sstf,scan,cscan,look,clook)
	{

		var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "RESULTS OF DISK SCHEDULING ALGORITHMS"
		},

		data: [
		{
			// Change type to, "line", "splineArea", etc.
			type: "column",
			dataPoints: [
				{ label: "FCFS",  y: fcfs  },
				{ label: "SSTF", y: sstf  },
				{ label: "SCAN", y: scan  },
				{ label: "LOOK",  y: look  },

			]
		}
		],

		axisY:{
			title:"Total Head Movement"
		},

		animationEnabled : true,
		animationDuration :6000,
		colorSet: "myColors"
	});
	chart.render();
	}


	//example of datapoints_fcfs:-

	function allocate_fcfs(){
		var d=-1;
		for(var i=0;i<fcfs_values.length;++i)
		{
			d++;
			var a = parseInt(fcfs_values[i]);
			dp_fcfs.push([a,d]);
		}

	}

	function allocate_sstf(){
		var d=-1;
		for(var i=0;i<sstf_values.length;++i)
		{
			d++;
			var a = parseInt(sstf_values[i]);
			dp_sstf.push([a,d]);
		}
	}

	function allocate_scan(){
		var d=-1;
		for(var i=0;i<scan_values.length;++i)
		{
			d++;
			var a = parseInt(scan_values[i]);
			dp_scan.push([a,d]);
		}
	}

	function allocate_cscan(){
		var d=-1;
		for(var i=0;i<cscan_values.length;++i)
		{
			d++;
			var a = parseInt(cscan_values[i]);
			dp_cscan.push([a,d]);
		}
	}

	function allocate_look(){
		var d=-1;
		for(var i=0;i<look_values.length;++i)
		{
			d++;
			var a = parseInt(look_values[i]);
			dp_look.push([a,d]);
		}
	}

	function allocate_clook(){
		var d=-1;
		for(var i=0;i<clook_values.length;++i)
		{
			d++;
			var a = parseInt(clook_values[i]);
			dp_clook.push([a,d]);
		}
	}

		var data_fcfs={
    		values:dp_fcfs
		};

		var data_sstf={
			values:dp_sstf
		};

		var data_scan={
			values:dp_scan
		};

		var data_cscan={
			values:dp_cscan
		};

		var data_look={
			values:dp_look
		};

		var data_clook={
			values:dp_clook
		};


	function fcfsModal()
	{
		var max_val = document.getElementsByTagName("input")[2].value;

    	zingchart.render({
        id:"chartContainer_fcfs",
        output:"svg",
        height:750,
        width:"80%",
        data:{
            "type":"line",
            "title":{
                "text":"FCFS Header Movement"
            },
            "series":[
                data_fcfs
            ]
        },

        "scale-x":{
        	"title":{
        		"text":"Request Track Number"
        	}
        },

        "scale-y":{
        		"title":"Request Number"
        }
    	});

	}


	function sstfModal()
	{
		var max_val = document.getElementsByTagName("input")[2].value;
		zingchart.render({
        id:"chartContainer_sstf",
        output:"svg",
        height:750,
		width:"80%",
        data:{
            "type":"line",
            "title":{
                "text":"SSTF Header Movement"
            },
            "series":[
                data_sstf
            ]
        }
    	});
	}

	function scanModal()
	{
		var max_val = document.getElementsByTagName("input")[2].value;
		zingchart.render({
        id:"chartContainer_scan",
        output:"svg",
        height:750,
        width:"80%",
        data:{
            "type":"line",
            "title":{
                "text":"SCAN Header Movement"
            },
            "series":[
                data_scan
            ]
        }
    	});
	}

	function cscanModal()
	{
		var max_val = document.getElementsByTagName("input")[2].value;
		zingchart.render({
        id:"chartContainer_cscan",
        output:"svg",
        height:750,
        width:"80%",
        data:{
            "type":"line",
            "title":{
                "text":"CSCAN Header Movement"
            },
            "series":[
                data_cscan
            ]
        }
    	});
	}

	function lookModal()
	{
		var max_val = document.getElementsByTagName("input")[2].value;
		zingchart.render({
        id:"chartContainer_look",
        output:"svg",
        height:750,
        width:"80%",
        data:{
            "type":"line",
            "title":{
                "text":"LOOK Header Movement"
            },
            "series":[
                data_look
            ]
        }
    	});
	}

	function clookModal()
	{
		var max_val = document.getElementsByTagName("input")[2].value;
		zingchart.render({
        id:"chartContainer_clook",
        output:"svg",
        height:750,
        width:"80%",
        data:{
            "type":"line",
            "title":{
                "text":"CLOOK Header Movement"
            },
            "series":[
                data_clook
            ]
        }
    	});

	}