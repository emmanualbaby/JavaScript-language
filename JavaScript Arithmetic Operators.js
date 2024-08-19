<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h1 id="Header">Teax</h1>
    

    <script>

        document.getElementById("Header").style.color = "red";
        document.getElementById("Header").style.fontSize = "22px";
        document.getElementById("Header").style.backgroundColor = "green";

        var test = document.getElementById("Header"); 
        test.innerHTML ="emmanual";
        test.style.fontSize = "22px";


        var test = "emmanual";
        document.getElementById("Header").innerHTML = "ikku";
        

        var a , b ,c;
        a=10
        b=15
        c = a + b;
        c ++;

        console.log('a =' + a);
        console.log('b =' + b);
        console.log(c);
        



    </script>
</body>
</html>