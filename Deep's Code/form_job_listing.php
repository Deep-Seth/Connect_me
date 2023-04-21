<!DOCTYPE html>
<html>

<head>
    <title>Insert Page page</title>
</head>

<body>
    <center>
        <?php
        if (isset($_POST['submit'])) {
            $servername = "localhost";
            $username = "";
            $password = "";
            $dbname = "job_listing";

            // Create connection
            $conn = new mysqli(
                $servername,
                $username,
                $password,
                $dbname
            );

            // Check connection
            if ($conn->connect_error) {
                die("Connection failed: "
                    . $conn->connect_error);
            }
            $Job_Title = $_POST['Job_Title'];
            $salary = $_POST['salary'];
            $primay_Skill = $_POST['primay_Skill'];
            $secondary_Skill = $_POST['secondary_Skill'];

            $sqlquery = "INSERT INTO  job_listings (job_ID,job_Title,Salary,Primary_Skill,secondary_Skill)VALUES
    ('$Job_Title','$salary','$primay_Skill','$secondary_Skill')";

            if ($conn->query($sql) === TRUE) {
                echo "record inserted successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        }
        ?>
    </center>
</body>

</html>