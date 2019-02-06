<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Belajar ajax dengan javascript</title>
    <script>
        function load_ajax(url,callback){
            //buat objek xmlhttprequest
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = cekStatus;

            function cekStatus(){
                if(xhr.readyState === 4 && xhr.status === 200){
                    callback();
                }
            }
        
            xhr.open('GET',url,true);
            xhr.send();
        }

        load_ajax('data.json',function(){
            console.log('berhasil');
        });
    </script>
</head>
<body>
    
</body>
</html>