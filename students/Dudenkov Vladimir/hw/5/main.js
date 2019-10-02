document.write("<table border='1' width='200' height='200'>");
for(var i=1; i<=8; i++)
{
    document.write("<tr>");
    for(var j=1; j<=8; j++)
    {
        if((i+j)%2!=0)
            document.write("<td bgcolor='white'></td>");
        else
            document.write("<td bgcolor='black'></td>");
    }

    document.write("</tr>");
}

document.write("</table>");
