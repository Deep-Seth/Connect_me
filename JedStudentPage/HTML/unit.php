<html>
<title></title>

<head></head>

<body>
    <?php
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $dbname = "student_skill";

    $connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

    if (mysqli_connect_errno()) {
        die("Database connection failed: " . mysqli_connect_error() . " (" . mysqli_connect_errno() . ")");
    }
    ?>
    <?php
      $cleanSearch = mysqli_real_escape_string($connection,$_POST['search']);
      $query = mysqli_query($connection,"SELECT * FROM units_id WHERE unit_id LIKE '%$cleanSearch%'");
      if(!$query) {
        die("Database query failed");
      }
    ;?>
    <center>
    <div class="table-active">
        <h1>Skills achieved from unit<?php  echo "  " .$_POST['search'];?></h1>
        <table border="1px">
        <tr>
            <th>Skill ID</th>
        </tr>
        <?php 
        $query2= mysqli_query($connection,"INSERT INTO achieved_skills(skill_ID) SELECT skill_ID FROM units_id WHERE unit_id LIKE '%$cleanSearch%'");
        if(!$query2){
            die("Database query failed");
        }
        else{
         echo "<br>".'Added Succese fully';
        }
        while($rows= mysqli_fetch_array($query)){
         ;?>
         <tr>
            <td><?php 
             echo $rows['skill_ID'];
            ;?></td>
         </tr>
         <?php
          }
           
          ;?>    
        </table><br>
        </div>
        
    <form action="Connect_me/JedStudentPage/HTML/Student_profile.html" method="post">
   
         <label id="student_id" for="student_id_add">Enter Your Student id: </label><span>
        <input type="text" name="stid" id="stid" required><br>

        <label id="add_skills" for="add_skill_button">Would you like to add these to your achieved skills</label><br>
        <input type="submit" name="Add_Skills" id="add_skill" value="add_Skill">
    </form>
    </center>
    <?php
     mysqli_free_result($query);
     mysqli_close($connection);
     ;?>
      
</body>

</html>