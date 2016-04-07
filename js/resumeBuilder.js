
var bio = {
    "name" : "Vijetha Velishala",
    "role" : "Web Developer",
    "welcomeMessage" : "Adaptive, Dynamic, and Multi-faceted: I am passionate about customer satisfaction and responsive design. I was drawn to Web Development because of its mix of code and design. I'm creative and efficient, love figuring things out and making something both beautiful and practical.",
    "contacts" : {
        "mobile" : "571-306-2131",
        "email"  : "vijetha.velishala@gmail.com",
        "emailURL" : "mailto:vijetha.velishala@gmail.com",
        "github" : "Vijju Rao",
        "githubURL" : "https://github.com/vijjurao",
        "twitter" :"Vijju Rao",
        "twitterURL" :"https://twitter.com/Vijju_Velishala",
        "location" : "Herndon, VA"
    },
    "biopic" : "./images/vijju.jpg",
    "skills" : ["HTML", "CSS", "JavaScript", "jQuery", "Python", "Java"]
};

var work = {
    "jobs" : [{
        "employer": "Modies",
        "title": "QA Developer",
        "location": "St.Louis, MO",
        "dates":"2010-2011",
        "description" :"Developing test cases"
    },
    {
        "employer":"Kelvin Technologies",
        "title":"Java Developer",
        "location":"AshBurn, Virginia",
        "dates":"2011-2012",
        "description" :"Java developer..........................."
    },
    {
        "employer":"Newton Technologies",
        "title":"Java Developer",
        "location":"Arlington, Virginia",
        "dates":"2012 -2012",
        "description" :"Java developer..........................."
    }]
};

var education = {
    "schools": [{
        "name" : "Herguan University",
        "location" : "SanJose,California",
        "degree" : "M.S",
        "majors" : ["Computer Science"],
        "dates" : 2009,
        "url" : "http://www.herguanuniversity.edu/",
    },
    {
        "name" : "JNTU",
        "location" : "Hyderabad",
        "degree" : "B.E",
        "majors" : ["Electronic and Communication Engineer", "ECE"],
        "dates" : 2007,
        "url" : "http://www.jntuh.ac.in/new/"
    }],
    "onlineCourses": [{
        "title": "Intro to Computer Science",
        "school": "Udacity",
        "date": 2014,
        "url": "https://www.udacity.com/course/intro-to-computer-science--cs101"
    },
    {
        "title": "How to Use Git and GitHub",
        "school": "Udacity",
        "date": 2015,
        "url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
    },
    {
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "date": 2015,
        "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    }, 
    {
        "title": "Responsive Web Design Fundementals",
        "school": "Udacity",
        "date": 2015,
        "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
    },
    {
        "title": "Responsive Images",
        "school": "Udacity",
        "date": 2015,
        "url": "https://www.udacity.com/course/responsive-images--ud882"
    }, 
    {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "date": 2015,
        "url": "https://www.udacity.com/course/javascript-basics--ud804"
    }, 
    {
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": 2015,
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

var projects ={
    "projects" : [
    {
        "title" :"About Me",
        "url" :"https://fe-nanodegree-aboutme.firebaseapp.com/",
        "dates" : "Sep 2015",
        "description": "Created and editing simple HTML and CSS files to create my very first webpage",
        "images" :['./images/aboutMe.png']
    },
    {
        "title" : "Portfolio Site",
        "url" : "https://vijetha-portfolio.firebaseapp.com/",
        "dates" : "Oct 2015",
        "description": "Developed a responsive website that will display images, descriptions and links to each of the portfolio projects ",
        "images" : ['./images/portfolioSite.png']
    },
    {
        "title" : "Online Resume",
        "url" : "https://frontend-nanodegree-resume.firebaseapp.com",
        "dates" : "Nov 2015",
        "description": "Developed a responsive resume using HTML, CSS and JavaScript, displaying content from JSON file",
        "images" : ['./images/resume1.png', './images/resume2.png']
    }]
};
var data = "%data%";
var hashtag = "#";
bio.display = function(){
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    var formattedbioMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedbioEmail = HTMLemail.replace(data, bio.contacts.email);
    formattedbioEmail = formattedbioEmail.replace(hashtag, bio.contacts.emailURL);
    var formattedbioGitHub = HTMLgithub.replace(data, bio.contacts.github);
    formattedbioGitHub = formattedbioGitHub.replace(hashtag, bio.contacts.githubURL);
    var formattedbioTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    formattedbioTwitter = formattedbioTwitter.replace(hashtag, bio.contacts.twitterURL);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    var $header = $("#header");
    $header.prepend(formattedRole);
    $header.prepend(formattedName);
    $header.append(formattedBioPic, formattedwelcomeMsg);
    $("#topContacts").append(formattedbioMobile, formattedbioEmail, formattedbioGitHub, formattedbioTwitter, formattedLocation);
    $("#footerContacts").append(formattedbioMobile, formattedbioEmail, formattedbioGitHub, formattedbioTwitter, formattedLocation);
    if(bio.skills.length >0){
        $header.append(HTMLskillsStart);
        for(i=0; i < bio.skills.length; i++){
            var formattedSkill = HTMLskills.replace(data, bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};

work.display = function() {
    work.jobs.forEach(function(job){
   // for(var job in work.jobs){
            $("#workExperience").append(HTMLworkStart);
            var formattedWorkEmployer = HTMLworkEmployer.replace(data, job.employer);
            var formattedWorkTitle = HTMLworkTitle.replace(data, job.title);
            var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
            var formattedWorkDates = HTMLworkDates.replace(data, job.dates);
            var formattedWorkLocation = HTMLworkLocation.replace(data, job.location);
            var formattedWorkDescription = HTMLworkDescription.replace(data, job.description);
            $(".work-entry:last").append(formattedEmployerTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
    });
};

education.display = function(){
    var $education = $("#education");
    education.schools.forEach(function(school){
    //for(var school in education.schools){  
            var formattedSchoolName = HTMLschoolName.replace(data, school.name);
            formattedSchoolName = formattedSchoolName.replace(hashtag, school.url);

            var formattedSchoolDegree = HTMLschoolDegree.replace(data, school.degree);
            var formattedSchoolDates = HTMLschoolDates.replace(data, school.dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace(data, school.location);

            $education.append(HTMLschoolStart);
            $(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates , formattedSchoolLocation);
            if(school.majors.length > 0){
                for(i = 0; i < school.majors.length; i++){
                    var formattedSchoolMajor = HTMLschoolMajor.replace(data, school.majors[i]);
                    $(".education-entry:last").append(formattedSchoolMajor );
                }
            }
        });
    $education.append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(onlineCourse){
            $education.append(HTMLschoolStart);
            var formattedOnlineTitle  = HTMLonlineTitle.replace(data, onlineCourse.title);
            var formattedOnlineSchool  = HTMLonlineSchool.replace(data, onlineCourse.school); 
            var formattedOnlineDates = HTMLonlineDates.replace(data, onlineCourse.date);
            var formattedOnlineURL = HTMLonlineURL.replace(data, onlineCourse.url);
            formattedOnlineURL = formattedOnlineURL.replace(hashtag, onlineCourse.url);

            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineDates , formattedOnlineURL);
        });
};
projects.display = function() {
    projects.projects.forEach(function(project){
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace(data , project.title);
            formattedProjectTitle = formattedProjectTitle.replace(hashtag, project.url);
            var formattedProjectDates = HTMLprojectDates.replace(data, project.dates);
            var formattedProjectDescription = HTMLprojectDescription.replace(data, project.description);

            $(".project-entry:last").append(formattedProjectTitle , formattedProjectDates , formattedProjectDescription);
            if(project.images.length > 0){
                 for(i = 0; i < project.images.length; i++){
                            var formattedProjectImage = HTMLprojectImage.replace(data, project.images[i]);
                             $(".project-entry:last").append(formattedProjectImage);
                }
            }

        });
    };
bio.display();
projects.display();
education.display();
work.display();
$("#mapDiv").append(googleMap);
function inName(name){
name = name.trim().split(" ");
console.log(name);
name[1] = name[1].toUpperCase();
name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
return name[0] + " " + name[1];
}

//$('#main').append(internationalizeButton);