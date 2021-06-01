<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <title>Weekly GK Quiz</title>
        <link rel="manifest" href="manifest.json"/>
        <link rel="shortcut icon" href="ico.png" type="image/png"/>
        <link rel="stylesheet" href="wk.css" type="text/css"/>
        <style type="text/css" media="all">
            img[src="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png"] {
                display: none;
            }
            label{
                border-radius: 5px;
            }
        </style>
    </head>
    <body>
        <h1></h1>
        <marquee style="background-color: orange; font-size:5vw; padding-bottom: 2px;">New Quiz Questions are updated every Monday. </marquee>
        <?php
            if(isset($_POST['Name'])) 
            {
                $file = fopen("admin/db/scr.txt", "a");
                
                $name = $_POST['Name'];
                $scr = $_POST['scoren'];
                
                $txt = "<tr><td>".$name."</td><td>".$scr."</td></tr>\n";
                
                fwrite($file, $txt);
                echo("<p style='color:red; background-color:lightGreen; padding:10px; margin:0;'>Dear ".$name.", your score is added to the board.</p>");
            }
        ?>
            
        <div id="quiz">
            <h2 id="qThead">Let's Begin:</h2>
            <h3 id="tc1">Total Score:</h3><h3 id="tc"></h3>
            <p class="qp qpt">Q1. </p>
                
                <input type="radio" name="q1" id="q1_1" value="" class="l1_1" /> <label class="l1_1" for="q1_1"></label> <br>
                
                <input type="radio" name="q1" id="q1_2" value="" class="l1_2" /> <label class="l1_2" for="q1_2"></label> <br>
                
                <input type="radio" name="q1" id="q1_3" value="" class="l1_3" /> <label class="l1_3" for="q1_3"></label> <br>
                
                <input type="radio" name="q1" id="q1_4" value="" class="l1_4" /> <label class="l1_4" for="q1_4"></label> <br>
                
                <span class="co">Credits obtained:</span><span class="co" id="cov1"></span><span class="co">/1</span>
                
            <p class="qp">Q2. </p>
                
                <input type="radio" name="q2" id="q2_1" value="" class="l2_1" /> <label class="l2_1" for="q2_1"></label> <br>
                
                <input type="radio" name="q2" id="q2_2" value="" class="l2_2" /> <label class="l2_2" for="q2_2"></label> <br>
                
                <input type="radio" name="q2" id="q2_3" value="" class="l2_3" /> <label class="l2_3" for="q2_3"></label> <br>
                
                <input type="radio" name="q2" id="q2_4" value="" class="l2_4" /> <label class="l2_4" for="q2_4"></label> <br>
                
                <span class="co">Credits obtained:</span><span id="cov2"></span><span>/1</span>
                
            <p class="qp">Q3. </p>
                
                <input type="radio" name="q3" id="q3_1" value="" class="l3_1" /> <label class="l3_1" for="q3_1"></label> <br>
                
                <input type="radio" name="q3" id="q3_2" value="" class="l3_2" /> <label class="l3_2" for="q3_2"></label> <br>
                
                <input type="radio" name="q3" id="q3_3" value="" class="l3_3" /> <label class="l3_3" for="q3_3"></label> <br>
                
                <input type="radio" name="q3" id="q3_4" value="" class="l3_4" /> <label class="l3_4" for="q3_4"></label> <br>
                
                <span class="co">Credits obtained:</span><span id="cov3"></span><span>/1</span>
                
            <p class="qp">Q4. </p>
                
                <input type="radio" name="q4" id="q4_1" value="" class="l4_1" /> <label class="l4_1" for="q4_1"></label> <br>
                
                <input type="radio" name="q4" id="q4_2" value="" class="l4_2" /> <label class="l4_2" for="q4_2"></label> <br>
                
                <input type="radio" name="q4" id="q4_3" value="" class="l4_3" /> <label class="l4_3" for="q4_3"></label> <br>
                
                <input type="radio" name="q4" id="q4_4" value="" class="l4_4" /> <label class="l4_4" for="q4_4"></label> <br>
                
                <span class="co">Credits obtained:</span><span id="cov4"></span><span>/1</span>
                
            <p class="qp">Q5. </p>
                
                <input type="radio" name="q5" id="q5_1" value="" class="l5_1" /> <label class="l5_1" for="q5_1"></label> <br>
                
                <input type="radio" name="q5" id="q5_2" value="" class="l5_2" /> <label class="l5_2" for="q5_2"></label> <br>
                
                <input type="radio" name="q5" id="q5_3" value="" class="l5_3" /> <label class="l5_3" for="q5_3"></label> <br>
                
                <input type="radio" name="q5" id="q5_4" value="" class="l5_4" /> <label class="l5_4" for="q5_4"></label> <br>
                
                <span class="co">Credits obtained:</span><span id="cov5"></span><span>/1</span>
                
            <p class="qp">Q6. </p>
                
                <input type="radio" name="q6" id="q6_1" value="" class="l6_1" /> <label class="l6_1" for="q6_1"></label> <br>
                
                <input type="radio" name="q6" id="q6_2" value="" class="l6_2" /> <label class="l6_2" for="q6_2"></label> <br>
                
                <input type="radio" name="q6" id="q6_3" value="" class="l6_3" /> <label class="l6_3" for="q6_3"></label> <br>
                
                <input type="radio" name="q6" id="q6_4" value="" class="l6_4" /> <label class="l6_4" for="q6_4"></label> <br>
                
                <span class="co">Credits obtained:</span><span id="cov6"></span><span>/1</span>
                
            <p class="qp">Q7. </p>
                
                <input type="radio" name="q7" id="q7_1" value="" class="l7_1" /> <label class="l7_1" for="q7_1"></label> <br>
                
                <input type="radio" name="q7" id="q7_2" value="" class="l7_2" /> <label class="l7_2" for="q7_2"></label> <br>
                
                <input type="radio" name="q7" id="q7_3" value="" class="l7_3" /> <label class="l7_3" for="q7_3"></label> <br>
                
                <input type="radio" name="q7" id="q7_4" value="" class="l7_4" /> <label class="l7_4" for="q7_4"></label> <br>
                
                <span class="co">Credits obtained:</span><span id="cov7"></span><span>/1</span>
                
            <p class="qp">Q8. </p>
                
                <input type="radio" name="q8" id="q8_1" value="" class="l8_1" /> <label class="l8_1" for="q8_1"></label> <br>
                
                <input type="radio" name="q8" id="q8_2" value="" class="l8_2" /> <label class="l8_2" for="q8_2"></label> <br>
                
                <input type="radio" name="q8" id="q8_3" value="" class="l8_3" /> <label class="l8_3" for="q8_3"></label> <br>
                
                <input type="radio" name="q8" id="q8_4" value="" class="l8_4" /> <label class="l8_4" for="q8_4"></label> <br>
                
                <span class="co">Credits obtained:</span><span id="cov8"></span><span>/1</span>
                
            <p class="qp">Q9. </p>
                
                <input type="radio" name="q9" id="q9_1" value="" class="l9_1" /> <label class="l9_1" for="q9_1"></label> <br>
                
                <input type="radio" name="q9" id="q9_2" value="" class="l9_2" /> <label class="l9_2" for="q9_2"></label> <br>
                
                <input type="radio" name="q9" id="q9_3" value="" class="l9_3" /> <label class="l9_3" for="q9_3"></label> <br>
                
                <input type="radio" name="q9" id="q9_4" value="" class="l9_4" /> <label class="l9_4" for="q9_4"></label> <br>
                
                <span class="co">Credits obtained:</span><span id="cov9"></span><span>/1</span>
                
            <p class="qp">Q10. </p>
                
                <input type="radio" name="q10" id="q10_1" value="" class="l10_1" /> <label class="l10_1" for="q10_1"></label> <br>
                
                <input type="radio" name="q10" id="q10_2" value="" class="l10_2" /> <label class="l10_2" for="q10_2"></label> <br>
                
                <input type="radio" name="q10" id="q10_3" value="" class="l10_3" /> <label class="l10_3" for="q10_3"></label> <br>
                
                <input type="radio" name="q10" id="q10_4" value="" class="l10_4" /> <label class="l10_4" for="q10_4"></label> <br>
                
                <span class="co">Credits obtained:</span><span id="cov10"></span><span>/1</span>
                
            <div class="divQSubmit">
            <button id="qSubmitBut" onclick="submit()">Submit</button>
            </div>
        </div>
        <div id="sendScore">
            <h3>Send Your Score to be added to the Board:</h3>
            <form action="" method="post" accept-charset="utf-8">
                <span style="display:inline;">Name:</span><br/>
                <input class="formInp" type="text" name="Name" id="uname" placeholder="Name" required/><br/>
                <span style="display:inline;">Score:</span><br/>
                <input class="formInp" type="text" name="scoren" id="scoren" onclick="restrict()" required readonly/><br />
                <button class="formBut" type="submit">Submit</button>
            </form>
        </div>
        <div id="divScoreBoard">
            <h2>Score Board:</h2>
            <div id="scoreT"></div>
        </div>
        <script src="auto.js" type="text/javascript" charset="utf-8"></script>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    </body>
</html>
