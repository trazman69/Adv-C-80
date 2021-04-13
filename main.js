inputs_values = [];

function submit()
{
    
    
    for(var i =1;i<=6;i++)
    {
        inputs_values.push(document.getElementById("para1_input_box_" + i).value)
} 
inputs_values.join(". ");
document.getElementById("show_paragraph_1").innerHTML = inputs_values.join(". ");
}
inputs_values_2 = [];

function submit1()
{
    
    
    for(var a =1;a<=6;a++)
    {
        inputs_values_2.push(document.getElementById("para2_input_box_" + a).value)
} 
inputs_values_2.join(". ");
document.getElementById("show_paragraph_2").innerHTML = inputs_values_2.join(". ");
}

function clear1_1() 
{
    document.getElementById("para1_input_box_1").value="  ";
    document.getElementById("para1_input_box_1").placeholder=" Input Box 1 ";
}
function clear1_2() 
{
    document.getElementById("para1_input_box_2").value="  ";
    document.getElementById("para1_input_box_2").placeholder=" Input Box 2 ";
}
function clear1_3() 
{
    document.getElementById("para1_input_box_3").value="  ";
    document.getElementById("para1_input_box_3").placeholder= "Input Box 3 ";
}
function clear1_4() 
{
    document.getElementById("para1_input_box_4").value="  ";
    document.getElementById("para1_input_box_4").placeholder= "Input Box 4  ";
}
function clear1_5() 
{
    document.getElementById("para1_input_box_5").value="  ";
    document.getElementById("para1_input_box_5").placeholder= "Input Box 5 ";
}
function clear1_6() 
{
    document.getElementById("para1_input_box_6").value="  ";
    document.getElementById("para1_input_box_6").placeholder= "Input Box 6";
}
function clear2_1() 
{
    document.getElementById("para2_input_box_1").value="  ";
    document.getElementById("para2_input_box_1").placeholder= "Input Box 1";
}
function clear2_2() 
{
    document.getElementById("para2_input_box_2").value="  "; 
    document.getElementById("para2_input_box_2").placeholder= "Input Box 2";
}
function clear2_3() 
{
    document.getElementById("para2_input_box_3").value="  ";
    document.getElementById("para2_input_box_3").placeholder= "Input Box 3";
}
function clear2_4() 
{
    document.getElementById("para2_input_box_4").value="  ";
    document.getElementById("para2_input_box_4").placeholder= "Input Box 4";
}
function clear2_5() 
{
    document.getElementById("para2_input_box_5").value="  ";
    document.getElementById("para2_input_box_5").placeholder= "Input Box 5 ";

}
function clear2_6() 
{
    document.getElementById("para2_input_box_6").value="  ";
    document.getElementById("para2_input_box_6").placeholder= "Input Box 6";
}
function clear_1() 
{
    window.location.reload();
}
function clear_2() { 
    window.location.reload();
 }