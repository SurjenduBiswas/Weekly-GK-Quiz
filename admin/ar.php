<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title>Thank You</title>
        <style type="text/css" >
            img[src="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png"] {
                    display: none;
            }
        </style>
    </head>
    <body>
        <?php 
        if (isset($_POST['q1'])){
            
            //q1
            
            $fq1 = fopen("q1.txt", "w");;
            $q1 = $_POST['q1'];
            fwrite($fq1, $q1);
            fclose($fq1);
            
            $fa1_1 = fopen("a1_1.txt", "w");
            $a1_1 = $_POST['a1_1'];
            fwrite($fa1_1, $a1_1);
            fclose($fa1_1);
            
            $fa1_2 = fopen("a1_2.txt", "w");
            $a1_2 = $_POST['a1_2'];
            fwrite($fa1_2, $a1_2);
            fclose($fa1_2);
            
            $fa1_3 = fopen("a1_3.txt", "w");
            $a1_3 = $_POST['a1_3'];
            fwrite($fa1_3, $a1_3);
            fclose($fa1_3);
            
            $fa1_4 = fopen("a1_4.txt", "w");
            $a1_4 = $_POST['a1_4'];
            fwrite($fa1_4, $a1_4);
            fclose($fa1_4);
            
            $fa1 = fopen("a1.txt", "w");
            $a1 = $_POST['a1'];
            fwrite($fa1, $a1);
            fclose($fa1);
            
            //q2
            
            $fq2 = fopen("q2.txt", "w");;
            $q2 = $_POST['q2'];
            fwrite($fq2, $q2);
            fclose($fq2);
            
            $fa2_1 = fopen("a2_1.txt", "w");
            $a2_1 = $_POST['a2_1'];
            fwrite($fa2_1, $a2_1);
            fclose($fa2_1);
            
            $fa2_2 = fopen("a2_2.txt", "w");
            $a2_2 = $_POST['a2_2'];
            fwrite($fa2_2, $a2_2);
            fclose($fa2_2);
            
            $fa2_3 = fopen("a2_3.txt", "w");
            $a2_3 = $_POST['a2_3'];
            fwrite($fa2_3, $a2_3);
            fclose($fa2_3);
            
            $fa2_4 = fopen("a2_4.txt", "w");
            $a2_4 = $_POST['a2_4'];
            fwrite($fa2_4, $a2_4);
            fclose($fa2_4);
            
            $fa2 = fopen("a2.txt", "w");
            $a2 = $_POST['a2'];
            fwrite($fa2, $a2);
            fclose($fa2);
            
            //q3
            
            $fq3 = fopen("q3.txt", "w");;
            $q3 = $_POST['q3'];
            fwrite($fq3, $q3);
            fclose($fq3);
            
            $fa3_1 = fopen("a3_1.txt", "w");
            $a3_1 = $_POST['a3_1'];
            fwrite($fa3_1, $a3_1);
            fclose($fa3_1);
            
            $fa3_2 = fopen("a3_2.txt", "w");
            $a3_2 = $_POST['a3_2'];
            fwrite($fa3_2, $a3_2);
            fclose($fa3_2);
            
            $fa3_3 = fopen("a3_3.txt", "w");
            $a3_3 = $_POST['a3_3'];
            fwrite($fa3_3, $a3_3);
            fclose($fa3_3);
            
            $fa3_4 = fopen("a3_4.txt", "w");
            $a3_4 = $_POST['a3_4'];
            fwrite($fa3_4, $a3_4);
            fclose($fa3_4);
            
            $fa3 = fopen("a3.txt", "w");
            $a3 = $_POST['a3'];
            fwrite($fa3, $a3);
            fclose($fa3);
            
            //q4
            
            $fq4 = fopen("q4.txt", "w");;
            $q4 = $_POST['q4'];
            fwrite($fq4, $q4);
            fclose($fq4);
            
            $fa4_1 = fopen("a4_1.txt", "w");
            $a4_1 = $_POST['a4_1'];
            fwrite($fa4_1, $a4_1);
            fclose($fa4_1);
            
            $fa4_2 = fopen("a4_2.txt", "w");
            $a4_2 = $_POST['a4_2'];
            fwrite($fa4_2, $a4_2);
            fclose($fa4_2);
            
            $fa4_3 = fopen("a4_3.txt", "w");
            $a4_3 = $_POST['a4_3'];
            fwrite($fa4_3, $a4_3);
            fclose($fa4_3);
            
            $fa4_4 = fopen("a4_4.txt", "w");
            $a4_4 = $_POST['a4_4'];
            fwrite($fa4_4, $a4_4);
            fclose($fa4_4);
            
            $fa4 = fopen("a4.txt", "w");
            $a4 = $_POST['a4'];
            fwrite($fa4, $a4);
            fclose($fa4);
            
            //q5
            
            $fq5 = fopen("q5.txt", "w");;
            $q5 = $_POST['q5'];
            fwrite($fq5, $q5);
            fclose($fq5);
            
            $fa5_1 = fopen("a5_1.txt", "w");
            $a5_1 = $_POST['a5_1'];
            fwrite($fa5_1, $a5_1);
            fclose($fa5_1);
            
            $fa5_2 = fopen("a5_2.txt", "w");
            $a5_2 = $_POST['a5_2'];
            fwrite($fa5_2, $a5_2);
            fclose($fa5_2);
            
            $fa5_3 = fopen("a5_3.txt", "w");
            $a5_3 = $_POST['a5_3'];
            fwrite($fa5_3, $a5_3);
            fclose($fa5_3);
            
            $fa5_4 = fopen("a5_4.txt", "w");
            $a5_4 = $_POST['a5_4'];
            fwrite($fa5_4, $a5_4);
            fclose($fa5_4);
            
            $fa5 = fopen("a5.txt", "w");
            $a5 = $_POST['a5'];
            fwrite($fa5, $a5);
            fclose($fa5);
            
            //6
            
            $fq6 = fopen("q6.txt", "w");;
            $q6 = $_POST['q6'];
            fwrite($fq6, $q6);
            fclose($fq6);
            
            $fa6_1 = fopen("a6_1.txt", "w");
            $a6_1 = $_POST['a6_1'];
            fwrite($fa6_1, $a6_1);
            fclose($fa6_1);
            
            $fa6_2 = fopen("a6_2.txt", "w");
            $a6_2 = $_POST['a6_2'];
            fwrite($fa6_2, $a6_2);
            fclose($fa6_2);
            
            $fa6_3 = fopen("a6_3.txt", "w");
            $a6_3 = $_POST['a6_3'];
            fwrite($fa6_3, $a6_3);
            fclose($fa6_3);
            
            $fa6_4 = fopen("a6_4.txt", "w");
            $a6_4 = $_POST['a6_4'];
            fwrite($fa6_4, $a6_4);
            fclose($fa6_4);
            
            $fa6 = fopen("a6.txt", "w");
            $a6 = $_POST['a6'];
            fwrite($fa6, $a6);
            fclose($fa6);
            
            //7
            
            $fq7 = fopen("q7.txt", "w");;
            $q7 = $_POST['q7'];
            fwrite($fq7, $q7);
            fclose($fq7);
            
            $fa7_1 = fopen("a7_1.txt", "w");
            $a7_1 = $_POST['a7_1'];
            fwrite($fa7_1, $a7_1);
            fclose($fa7_1);
            
            $fa7_2 = fopen("a7_2.txt", "w");
            $a7_2 = $_POST['a7_2'];
            fwrite($fa7_2, $a7_2);
            fclose($fa7_2);
            
            $fa7_3 = fopen("a7_3.txt", "w");
            $a7_3 = $_POST['a7_3'];
            fwrite($fa7_3, $a7_3);
            fclose($fa7_3);
            
            $fa7_4 = fopen("a7_4.txt", "w");
            $a7_4 = $_POST['a7_4'];
            fwrite($fa7_4, $a7_4);
            fclose($fa7_4);
            
            $fa7 = fopen("a7.txt", "w");
            $a7 = $_POST['a7'];
            fwrite($fa7, $a7);
            fclose($fa7);
            
            //8
            
            $fq8 = fopen("q8.txt", "w");;
            $q8 = $_POST['q8'];
            fwrite($fq8, $q8);
            fclose($fq8);
            
            $fa8_1 = fopen("a8_1.txt", "w");
            $a8_1 = $_POST['a8_1'];
            fwrite($fa8_1, $a8_1);
            fclose($fa8_1);
            
            $fa8_2 = fopen("a8_2.txt", "w");
            $a8_2 = $_POST['a8_2'];
            fwrite($fa8_2, $a8_2);
            fclose($fa8_2);
            
            $fa8_3 = fopen("a8_3.txt", "w");
            $a8_3 = $_POST['a8_3'];
            fwrite($fa8_3, $a8_3);
            fclose($fa8_3);
            
            $fa8_4 = fopen("a8_4.txt", "w");
            $a8_4 = $_POST['a8_4'];
            fwrite($fa8_4, $a8_4);
            fclose($fa8_4);
            
            $fa8 = fopen("a8.txt", "w");
            $a8 = $_POST['a8'];
            fwrite($fa8, $a8);
            fclose($fa8);
            
            //9
            
            $fq9 = fopen("q9.txt", "w");;
            $q9 = $_POST['q9'];
            fwrite($fq9, $q9);
            fclose($fq9);
            
            $fa9_1 = fopen("a9_1.txt", "w");
            $a9_1 = $_POST['a9_1'];
            fwrite($fa9_1, $a9_1);
            fclose($fa9_1);
            
            $fa9_2 = fopen("a9_2.txt", "w");
            $a9_2 = $_POST['a9_2'];
            fwrite($fa9_2, $a9_2);
            fclose($fa9_2);
            
            $fa9_3 = fopen("a9_3.txt", "w");
            $a9_3 = $_POST['a9_3'];
            fwrite($fa9_3, $a9_3);
            fclose($fa9_3);
            
            $fa9_4 = fopen("a9_4.txt", "w");
            $a9_4 = $_POST['a9_4'];
            fwrite($fa9_4, $a9_4);
            fclose($fa9_4);
            
            $fa9 = fopen("a9.txt", "w");
            $a9 = $_POST['a9'];
            fwrite($fa9, $a9);
            fclose($fa9);
            
            //10
            
            $fq10 = fopen("q10.txt", "w");;
            $q10 = $_POST['q10'];
            fwrite($fq10, $q10);
            fclose($fq10);
            
            $fa10_1 = fopen("a10_1.txt", "w");
            $a10_1 = $_POST['a10_1'];
            fwrite($fa10_1, $a10_1);
            fclose($fa10_1);
            
            $fa10_2 = fopen("a10_2.txt", "w");
            $a10_2 = $_POST['a10_2'];
            fwrite($fa10_2, $a10_2);
            fclose($fa10_2);
            
            $fa10_3 = fopen("a10_3.txt", "w");
            $a10_3 = $_POST['a10_3'];
            fwrite($fa10_3, $a10_3);
            fclose($fa10_3);
            
            $fa10_4 = fopen("a10_4.txt", "w");
            $a10_4 = $_POST['a10_4'];
            fwrite($fa10_4, $a10_4);
            fclose($fa10_4);
            
            $fa10 = fopen("a10.txt", "w");
            $a10 = $_POST['a10'];
            fwrite($fa10, $a10);
            fclose($fa10);
            
            
            
            
            echo("<h1>Thank You. Please do not refresh.</h1>");
        } else {
            echo("<h1>Unavailable</h1>");
        };
        ?>
       
    </body>
</html>

