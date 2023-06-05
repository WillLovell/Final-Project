function gradeQuiz() {
    var finalGrade = 100;
    var finalGradeNum = finalGrade / 20;
    var total = 5;

    var q1 = document.getElementsByName("question1");
    var q2 = document.getElementsByName("question2");
    var q3 = document.getElementsByName("question3");
    var q4 = document.getElementsByName("question4");
    var q5 = document.getElementsByName("question5");

    if (!q1[1].checked) {
        var finalGrade = finalGrade - 20;
        var finalGradeNum = finalGradeNum - 1;
        var total = total - 1;
    }
    if (!q2[0].checked) {
        var finalGrade = finalGrade - 20;
        var finalGradeNum = finalGradeNum - 1;
        var total = total - 1;
    }
    if (!q3[3].checked) {
        var finalGrade = finalGrade - 20;
        var finalGradeNum = finalGradeNum - 1;
        var total = total - 1;
    }
    if (!q4[0].checked) {
        var finalGrade = finalGrade - 20;
        var finalGradeNum = finalGradeNum - 1;
        var total = total - 1;
    }
    if (!q5[2].checked) {
        var finalGrade = finalGrade - 20;
        var finalGradeNum = finalGradeNum - 1;
        var total = total - 1;
    }

    var score = { grade: total, percentage: finalGrade };

    var outputscore = `<div id="congrats">Congratulation</div>`;
    outputscore += `
        <div id="QHeader">Web Development Quiz</div>
        <div id="QSubmit">Submited</div>
        <div id="QAnswer">You have scored ${score.grade} out of 5</div>
        <div id="QSummary">${score.grade} / 5 = ${score.percentage}%</div>
        <div id="QDone">You may Close this window</div>
        <input type="button" value="Retake Quiz" id="sumbit" onclick="resetQuiz()">
        <a href="../../../Part1/index.html">Back to Main Page</a>
    `


    document.getElementById('scorepage').innerHTML = outputscore;
}

function resetQuiz() {

    var outputscore = ``;
    outputscore += `
    <div>
            <div>
                <header id="questionHeader" class="H-Header">Web Development Quiz</header>
            </div>
            <div>
                <div class="middle">_________________</div>
                <p class="questionLabel">1) In a switch statement, the ________ case clause is used to process exceptional conditions and is usually listed last."</p>
            </div>
            <div>
                <input type="radio" name="question1">
                <label class="answerForQuestion">A) break</label>
            </div>
            <div>
                <input type="radio" name="question1">
                <label class="answerForQuestion">B) default</label>
            </div>
            <div>
                <input type="radio" name="question1">
                <label class="answerForQuestion">C) else</label>
            </div>
            <div>
                <input type="radio" name="question1">
                <label class="answerForQuestion">D) then</label>
            </div>
            <div class="middle">_________________</div>

            <p class="questionLabel">2) The technique of developing and maintaining a large program by constructing it from small, simple pieces is called ________.</p>
        </div>
        <div>
            <input type="radio" name="question2">
            <label class="answerForQuestion">A) divide and conquer</label>
        </div>
        <div>
            <input type="radio" name="question2">
            <label class="answerForQuestion">B) modular programming</label>
        </div>
        <div>
            <input type="radio" name="question2">
            <label class="answerForQuestion">C) multitasking</label>
        </div>
        <div>
            <input type="radio" name="question2">
            <label class="answerForQuestion">D) multiprogramming</label>
        </div>
        <div>
            <div class="middle">_________________</div>
            <p class="questionLabel">3) All variables declared in function definitions are ________.</p>
        </div>
        <div>
            <input type="radio" name="question3">
            <label class="answerForQuestion">A) global variables</label>
        </div>
        <div>
            <input type="radio" name="question3">
            <label class="answerForQuestion">B) static variables</label>
        </div>
        <div>
            <input type="radio" name="question3">
            <label class="answerForQuestion">C) constant variables</label>
        </div>
        <div>
            <input type="radio" name="question3">
            <label class="answerForQuestion">D) local variables</label>
        </div>

        <div>
            <div class="middle">_________________</div>
            <p class="questionLabel">4) A function’s ________ are also considered to be local variables.</p>
        </div>
        <div>
            <input type="radio" name="question4">
            <label class="answerForQuestion">A) parameters</label>
        </div>
        <div>
            <input type="radio" name="question4">
            <label class="answerForQuestion">B) static variables</label>
        </div>
        <div>
            <input type="radio" name="question4">
            <label class="answerForQuestion">C) register variables</label>
        </div>
        <div>
            <input type="radio" name="question4">
            <label class="answerForQuestion">D) constant variables</label>
        </div>

        <div>
            <div class="middle">_________________</div>
            <p class="questionLabel">5) The style of programming in which the user interacts with a GUI component is called ________ programming.</p>
        </div>
        <div>
            <input type="radio" name="question5">
            <label class="answerForQuestion">A) modular</label>
        </div>
        <div>
            <input type="radio" name="question5">
            <label class="answerForQuestion">B) automatic</label>
        </div>
        <div>
            <input type="radio" name="question5">
            <label class="answerForQuestion">C) event driven</label>
        </div>
        <div>
            <input type="radio" name="question5">
            <label class="answerForQuestion">D) object oriented</label>
        </div>
        <div class="middle">_________________</div>


        <p id="end">When finished you can press submit</p>
        <input type="button" value="Submit" id="sumbit" onclick="gradeQuiz()">
        <a href="../../../Part1/index.html">Back to Main Page</a>
    
    
    
    
    `





    document.getElementById('scorepage').innerHTML = outputscore;
}