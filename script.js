const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

});


const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {
  
    elemToggleFunc(themeToggleBtn);
    
    if (themeToggleBtn.classList.contains("active")) 
        {
            document.body.classList.remove("dark_theme");
            document.body.classList.add("light_theme");
        
            localStorage.setItem("theme", "light_theme");
        } 
        else 
        {
            document.body.classList.add("dark_theme");
            document.body.classList.remove("light_theme");
        
            localStorage.setItem("theme", "dark_theme");
    
        }
  
  });


var checkboxes = document.querySelectorAll('input[class=checkbox]'),
    checkboxArray = Array.from( checkboxes );

function confirmCheck() {
  if (this.checked) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");    
    localStorage.setItem("theme", "light_theme");
  }
  else 
    {
        document.body.classList.add("dark_theme");
        document.body.classList.remove("light_theme");    
        localStorage.setItem("theme", "dark_theme");
    }
}

checkboxArray.forEach(function(checkbox) {
  checkbox.addEventListener('change', confirmCheck);
});


const text1 = ['<p>Developed ETL process using Python to extract, transform, and load data from multiple sources into data warehosue, resulting in a 25% increase in data accuracy and integrity.</p>',
  '<p>Developed KPI dashboard for Purchasing and Operation departments using Microsoft PowerBI, which support to deliver better insights for weekly and monthly reports by 100%.</p>',
  '<p>Utilized Python and NLP to analyze Purchase Orders, in order to define the most ordered parts to support predict and planning for ordering parts.</p>',
  '<p>Collaborated with Buyer to work with Requisition and Purchase Order, which increase the smooth of procurement process by % from 2023 to 2024.</p>',
  '<p>Support to propose subsidy transfering parts between plant to team for cost control and inventory management, which result in saving for purchasing parts.</p>']

const text2 = ['<p>Collected, analyzed, evaluated, and reported sales results and workflow to identify steps to increase sales productivity and results, which increased revenues by 80% in 2023.</p>',
'<p>Analyzed spending by Purchase Order and revenue by shipment to keep track of P/L, which helped Finance in COGS to deliver and notice sales price lower than the margin profit.</p>',
'<p>Analyzed material usage by different timelines for the MRP and PRP, which support the Material department to setup the min/max inventory, lead time, and transit time for materials, and finished goods. </p>',
'<p>Developed SQL queries to improve data extraction, cleaning, and manipulation process efficiency by 70% through automation, reducing manual effort and enabling data to be used in real-time.</p>',
'<p>Developed Microsoft PowerBI dashboards with Big Data in SQL relational database through ETL process that helps the company to keep track of essential sales and production KPIs.</p>',
'<p>Created and updated Procurement and Finances procedures for functional departments based on end-user stories, which boosted efficiency and improved workplace productivity by 50%.</p>',
'<p>Created a web application for surveying employees about the company’s ERP systems using HTML/CSS and XAMPP server, which supported IT/ERP departments to develop training documents and increased the MRP/PRP process by 30%.</p>']

const text3 = ['<p>Built data visualization using Microsoft PowerBI and SQL for core business KPIs (customer satisfaction and revenue per client) that reduced manual reporting by 5 hours weekly.</p>',
'<p>Developed PHP search engine that can extract and delete data of customers from MySQL/MariaDB database using Primary Key (email, customerID) that reduces the information search time by 10 hours per week.</p>',
'<p>Analyzed customer engagement data on social media platforms and evaluated marketing strategies to increase it by 30%, successfully visualized customer segments using PowerBI.</p>']

const first_text = 0;
const last_text = text1.length - 1;

var clicks = 0;
var clicks_2 =0;
var clicks_3 =0;
function onClick() {
    clicks -= 1;
    if (clicks <= first_text){
        clicks = first_text;
    }
    document.getElementById("div").innerHTML = text1[clicks];
  };

  function leftClick() {
    clicks += 1;
    if (clicks >= last_text){
        clicks = last_text;
    }
    document.getElementById("div").innerHTML = text1[clicks];
  };

first_text_2 = 0;
last_text_2 = text2.length - 1;

  function onClick_2() {
    clicks_2 -= 1;
    if (clicks_2 <= first_text_2){
        clicks_2 = first_text_2;
    }
    document.getElementById("div_2").innerHTML = text2[clicks_2];
  };

  function leftClick_2() {
    clicks_2 += 1;
    if (clicks_2 >= last_text_2){
        clicks_2 = last_text_2;
    }
    document.getElementById("div_2").innerHTML = text2[clicks_2];
  }; 


first_text_3 = 0;
last_text_3 = text3.length - 1;

  function onClick_3() {
    clicks_3 -= 1;
    if (clicks_3 <= first_text_3){
        clicks_3 = first_text_3;
    }
    document.getElementById("div_3").innerHTML = text3[clicks_3];
  };

  function leftClick_3() {
    clicks_3 += 1;
    if (clicks_3 >= last_text_3){
        clicks_3 = last_text_3;
    }
    document.getElementById("div_3").innerHTML = text3[clicks_3];
  }; 


const observer = new IntersectionObserver(intersections => {
    intersections.forEach(({
      target,
      isIntersecting
    }) => {
      target.classList.toggle('tes', isIntersecting);
    });
  }, {
    threshold: 0
  });
  
  document.querySelectorAll('wel').forEach(h2 => {
    observer.observe(h2);
  });

