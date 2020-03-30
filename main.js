document.querySelector('#reg').addEventListener('click',validateData);
let userData={};
let userName = document.querySelector('#username');
let age = document.querySelector('#age');
let email = document.querySelector('#email');
let nationalId = document.querySelector('#nationalId');
let gender = document.getElementsByName('radiogroup1');
let pos = 0,question,choices,answers = [],correct = 0,randQuestions = [{}],isAllValid = 0,isSkipped = [],isSubmited=false;
function Question (question,chs,correct)
{
    this.question = question;
    this.chs = chs;
    this.correct = correct;
}
let q1 = new Question("What is the sum of 10 + 4 ? ",["14","12","15","11"],"A");
let q2 = new Question("What is the sum of 10 + 1 ? ",["14","12","15","11"],"D");
let q3 = new Question("What is the sum of 10 + 2 ? ",["14","12","11","15"],"B");
let q4 = new Question("What is the sum of 10 + 5 ? ",["14","12","15","11"],"C");
let q5 = new Question("What is the sum of 10 + 8 ? ",["11","12","18","15"],"C");
let q6 = new Question("What is the sum of 10 + 10 ? ",["14","20","11","15"],"B");
let q7 = new Question("What is the sum of 10 + 30 ? ",["14","12","40","11"],"C");
let q8 = new Question("What is the sum of 10 + 9 ? ",["14","19","11","15"],"B");
let q9 = new Question("What is the sum of 10 + 90 ? ",["100","12","11","15"],"A");
let q10 = new Question("What is the sum of 10 + 50 ? ",["18","12","11","60"],"D");
let poolOfQuestions =[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
document.querySelector('#next-btn').addEventListener('click',nextQuestion);
document.querySelector('#prev-btn').addEventListener('click',prevQuestion);
document.querySelector('#submit-btn').addEventListener('click',submitAnswer);
document.querySelector('#skip-btn').addEventListener('click',skipQuestion);
function validateData()
{
    isAllValid = 0;
    userData.username = validateUserName(userName);
    userData.age = validateAge(age);
    userData.email = validateEmail(email);
    userData.nationalId = validateNationalId(nationalId);
    userData.gender = validateGender(gender);
    openExam();
}
function openExam()
{
    if (isAllValid === 5)
    {
        document.querySelector('#main-sec').classList.add('main-sec');
        document.querySelector('#exam-sec').classList.toggle('main-sec');
        getTime();
    }
}
function validateUserName(username)
{
    if(username.value === "")
    {
        document.querySelector('#emptyUsername').style.display = 'block';
        document.querySelector('#letters').style.display = 'none';
        document.querySelector('#notEnoughLetters').style.display = 'none';
        username.style.border ='2px solid rgba(239, 134, 111, 0.8)';
    }
    else if(!isNaN(username.value))
    {
        document.querySelector('#letters').style.display = 'block';
        document.querySelector('#emptyUsername').style.display = 'none';
        document.querySelector('#notEnoughLetters').style.display = 'none';  
        username.style.border ='2px solid rgba(239, 134, 111, 0.8)';
    }
    else if(username.value.length < 3)
    {
        document.querySelector('#notEnoughLetters').style.display = 'block';
        document.querySelector('#letters').style.display = 'none';
        document.querySelector('#emptyUsername').style.display = 'none';
        username.style.border ='2px solid rgba(239, 134, 111, 0.8)';
    }
    else
    {
        document.querySelector('#emptyUsername').style.display = 'none';
        document.querySelector('#letters').style.display = 'none';
        document.querySelector('#notEnoughLetters').style.display = 'none';
        username.style.border = 'none';
        isAllValid++;
        return username.value ;
    }
}
function validateAge(age)
{
    if(age.value === "")
    {
        document.querySelector('#emptyAge').style.display = 'block';
        document.querySelector('#notValidAge').style.display = 'none';
        document.querySelector('#numbers').style.display = 'none';
        age.style.border ='2px solid rgba(239, 134, 111, 0.8)';
    }
    else if(age.value < 10 || age.value > 99)
    {
        document.querySelector('#notValidAge').style.display = 'block';
        document.querySelector('#emptyAge').style.display = 'none';
        document.querySelector('#numbers').style.display = 'none';
        age.style.border ='2px solid rgba(239, 134, 111, 0.8)';
    }
    else if(isNaN(age.value))
    {
        document.querySelector('#numbers').style.display = 'block';
        document.querySelector('#notValidAge').style.display = 'none';
        document.querySelector('#emptyAge').style.display = 'none';
        age.style.border ='2px solid rgba(239, 134, 111, 0.8)';
    }
    else
    {
        document.querySelector('#numbers').style.display = 'none';
        document.querySelector('#notValidAge').style.display = 'none';
        document.querySelector('#emptyAge').style.display = 'none';
        age.style.border = 'none';
        isAllValid++;
        return age.value;
    }
}
function validateEmail(email)
{
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value === "")
    {
        document.querySelector('#emptyEmail').style.display ='block';
        document.querySelector('#notValidEmail').style.display ='none';
        email.style.border ='2px solid rgba(239, 134, 111, 0.8)';
    }
    else if(!(re.test(email.value)))
    {
        document.querySelector('#notValidEmail').style.display ='block';
        document.querySelector('#emptyEmail').style.display ='none';
        email.style.border ='2px solid rgba(239, 134, 111, 0.8)';
    }
    else
    {
        document.querySelector('#notValidEmail').style.display ='none';
        document.querySelector('#emptyEmail').style.display ='none';
        email.style.border ='none';
        isAllValid++;
        return email.value;
    }
}
function validateNationalId(nationalId)
{
    if(nationalId.value === "")
    {
        document.querySelector('#emptyNationalId').style.display = 'block';
        document.querySelector('#notValidNationalId').style.display = 'none';
        nationalId.style.border ='2px solid rgba(239, 134, 111, 0.8)';
    }
    else if(nationalId.value.length <14 || isNaN(nationalId.value))
    {
        document.querySelector('#notValidNationalId').style.display = 'block';
        document.querySelector('#emptyNationalId').style.display = 'none';
        nationalId.style.border ='2px solid rgba(239, 134, 111, 0.8)';
    }
    else
    {
        document.querySelector('#notValidNationalId').style.display = 'none';
        document.querySelector('#emptyNationalId').style.display = 'none';
        nationalId.style.border ='none';
        isAllValid++;
        return nationalId.value;
    }
}
function validateGender(gender)
{
    if(gender[0].checked === false && gender[1].checked === false)
    {
        document.querySelector('#emptyGender').style.display = 'block';
    }
    else
    {
        document.querySelector('#emptyGender').style.display = 'none';   
        isAllValid++;
        if(gender[0].checked)
        {
            return 'male';
        }
        else
        {
            return 'female';
        }
    }
}
function generateRandNums()
{
    let nums = [];
    for(let i = 0; i < poolOfQuestions.length;i++)
    {
        nums[i]=i;
    }
    let ranNums = [],i = nums.length,j = 0;
    while (i--) 
    {
        j = Math.floor(Math.random() * (i+1));
        ranNums.push(nums[j]);
        nums.splice(j,1);
    }
    for(let i = 0 ;i <poolOfQuestions.length/2 ; i++)
    {
    randQuestions[i]=[];
    }  
    for(let i = 0; i <poolOfQuestions.length/2 ; i++)
    {
        randQuestions[i].question= poolOfQuestions[ranNums[i]].question;
        randQuestions[i].chs= poolOfQuestions[ranNums[i]].chs;
        randQuestions[i].correct= poolOfQuestions[ranNums[i]].correct;
        isSkipped[i]= false;
    }
}
generateRandNums();
function renderQuestion()
{
    document.querySelector('#exam-status').innerHTML = "Question "+(pos+1)+" of "+randQuestions.length;
    question = randQuestions[pos].question;
    document.querySelector('#ex-sec').innerHTML = question;
    document.querySelector('#ex-sec2').innerHTML = "<input type='radio'  name='choices' id='rad1'  value='A' class='main-sec'>"+"<label for='rad1'>"+randQuestions[pos].chs[0]+"</label>"+"<br>";
    document.querySelector('#ex-sec2').innerHTML += "<input type='radio' name='choices' id='rad2' value='B' class='main-sec'>"+"<label for='rad2'>"+randQuestions[pos].chs[1]+"</label>"+"<br>";
    document.querySelector('#ex-sec2').innerHTML += "<input type='radio' name='choices' id='rad3' value='C' class='main-sec'>"+"<label for='rad3'>"+randQuestions[pos].chs[2]+"</label>"+"<br>";
    document.querySelector('#ex-sec2').innerHTML += "<input type='radio' name='choices' id='rad4' value='D' class='main-sec'>"+"<label for='rad4'>"+randQuestions[pos].chs[3]+"</label>"+"<br>";
    if(pos <= 0)
    {
        document.querySelector('#prev-btn').disabled = true;
    }
    else
    {
        document.querySelector('#prev-btn').disabled = false;
    }

    if(pos< randQuestions.length - 1)
    {
        document.querySelector('#next-btn').disabled = false;
        document.querySelector('#submit-btn').classList.add('btn-hide');
    }
    else
    {
        document.querySelector('#next-btn').disabled = true;
        document.querySelector('#submit-btn').classList.toggle('btn-hide');
    }
    let chs = document.getElementsByName('choices');
    for(let i =0 ; i<chs.length;i++)
    {
        chs[i].addEventListener('change',function(){
            answers[pos]=document.querySelector('.exam-form').choices.value;
        });
    }
}
renderQuestion();
function nextQuestion()
{
    if(answers[pos]===undefined)
    {
        skipUnanswered();
    }
    if(pos < randQuestions.length - 1)
    {
        pos++;
    }
    else
    {
        document.querySelector('#next-btn').classList.add('btn-hide');
        document.querySelector('#submit-btn').classList.toggle('btn-hide');
    }
    renderQuestion();
    checkChoice();
}
function prevQuestion()
{    
    if(pos <= 0)
    {
        document.querySelector('#prev-btn').disabled = true;
    }
    else
    {
        document.querySelector('#prev-btn').disabled = false;
        pos--;
    }
    renderQuestion();
    checkChoice();
}
function submitAnswer()
{
    isSubmited = true;
    document.querySelector('.exam-form').classList.add('main-sec');
    document.querySelector('.final-res').classList.toggle('main-sec');
    for(let i = 0;i < answers.length; i++)
    {
        if(answers[i] === randQuestions[i].correct)
        {
            correct++;
        }
    }
    document.querySelector('.ans').textContent = correct+" correct answers out of "+randQuestions.length;
    document.querySelector('.user_name').textContent = "Name: "+ userData.username;
    document.querySelector('.user_email').textContent ="Email: "+ userData.email;
    document.querySelector('.user_age').textContent ="Age: "+ userData.age;
    document.querySelector('.user_gender').textContent = "Gender: "+userData.gender;
    document.querySelector('.user_id').textContent ="National ID: " +userData.nationalId;
}
function skipQuestion()
{
    if(isSkipped[pos]===false)
    {
        document.querySelector('#skipped-ques').innerHTML +="<input type='button' class='button btn skipped-quest' value='"+Number(pos+1)+"'"+"data-value='"+Number(pos)+"'"+">";
    }
    if(pos < randQuestions.length-1 && isSkipped[pos]===false)
    {
        isSkipped[pos] = true;
        nextQuestion();
    }
    else
    {
        isSkipped[pos] = true;
    }  
}
function skipUnanswered()
{
    if(isSkipped[pos]===false)
    {
        document.querySelector('#skipped-ques').innerHTML +="<input type='button' class='button btn skipped-quest' value='"+Number(pos+1)+"'"+"data-value='"+Number(pos)+"'"+">";
    }
    isSkipped[pos] = true;   
}
document.querySelector('#skipped-ques').addEventListener('click',function(e){
    let ele = e.target;
    if(ele.matches('.skipped-quest'))
    {
        pos = Number(ele.dataset.value);
        renderQuestion();
        checkChoice();
       ele.parentNode.removeChild(ele);
       isSkipped[pos] = false;
    }      
});
function checkChoice()
{
    choices = document.getElementsByName('choices');
       if(answers[pos]!= "")
       {
        for(let i = 0;i<choices.length;i++)
        {
            if(choices[i].value === answers[pos])
            {
                choices[i].checked = true;
            }
        }
       }
}
var tim, min = 1,sec = 0,f = new Date(),Minutes;
function getTime() 
{
    calcTime();
    Minutes = String(f.getMinutes());  
    Minutes = Minutes.padStart(2,'0');
    document.getElementById("starttime").innerHTML = "Your started your Exam at " + f.getHours() + ":" +  Minutes;         
}
function calcTime(){
    if (parseInt(sec) > 0){
        sec = parseInt(sec) - 1;
        document.getElementById("showtime").innerHTML = "Your Left Time  is : "+min+" Minutes ," + sec+" Seconds";
        tim = setTimeout("calcTime()", 1000);
    }
    else 
    {
        if (parseInt(sec) == 0) {
            min = parseInt(min) - 1;
            if (parseInt(min) == -1)
            {
                clearTimeout(tim);
            }
            else 
            {
                sec = 60;
                document.getElementById("showtime").innerHTML = "Your Left Time  is : " + min + " Minutes ," + sec + " Seconds";
                tim = setTimeout("calcTime()", 1000);
            }
        }
    }
    if(parseInt(min) === -1 && parseInt(sec) === 0 && isSubmited === false)
    {
        var audio = new Audio('service-bell_daniel_simion.mp3');
        audio.play();
        audio.addEventListener('ended',submitAnswer);
    }
}