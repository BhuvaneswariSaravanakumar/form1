function labelcreate(tagname, attrname, attrvalue, content)
{
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.innerHTML= content;
    return ele;
}

function linebreakers(tagname)
{
var ele = document.createElement(tagname);
return ele;
}
function inputele(tagname,attrname, attrvalue, attrname1, attrvalue1)

{
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.setAttribute(attrname1, attrvalue1);
    return ele;
}
var fname=labelcreate("label","for","fname","Firstname");
var br1 =linebreakers("br");
var fnameinput = inputele("input", "text", "fname", "id", "fname");
var br2=linebreakers("br");
var mname=labelcreate("label","for","mname","Middlename");
var br3=linebreakers("br");
var mnameinput= inputele("input","text","mname","id","mname");
var br4=linebreakers("br");
var lname=labelcreate("label","for","lname","Lastname");
var br5 =linebreakers("br");
var lnameinput = inputele("input", "text", "lname", "id", "lname");
var br6=linebreakers("br");
var email=labelcreate("label","for","email","Email");
var br7 =linebreakers("br");
var emailinput = inputele("input", "type", "email", "id", "email");
var br8=linebreakers("br");
var password=labelcreate("label","for","password","Password");
var br9 =linebreakers("br");
var passwordinput = inputele("input", "pass", "password", "id", "password");
var br10=linebreakers("br");

document.body.append(fname,br1,fnameinput,br2,mname,br3,mnameinput,br4,lname,br5,lnameinput,br6,email,br7,emailinput,br8,password,br9,passwordinput,br10);
