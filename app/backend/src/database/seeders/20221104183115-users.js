module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('users',
      [
        {       
          "first_name": "Laura",
          "last_name": "Richards",
          "email": "lrichards0@reverbnation.com",
          "gender": "Female",
          "company": "Meezzy",
          "city": "Warner, NH",
          "title": "Biostatistician III"
        },
        {          
          "first_name": "Margaret",
          "last_name": "Mendoza",
          "email": "mmendoza1@sina.com.cn",
          "gender": "Female",
          "company": "Skipfire",
          "city": "East Natchitoches, PA",
          "title": "VP Marketing"
        },
        {          
          "first_name": "Craig",
          "last_name": "Mccoy",
          "email": "cmccoy2@bluehost.com",
          "gender": "Male",
          "company": "Quatz",
          "city": "Lyon, WV",
          "title": "Senior Sales Associate"
        },
        {          
          "first_name": "James",
          "last_name": "Moore",
          "email": "jmoore3@apache.org",
          "gender": "Male",
          "company": "Bubblemix",
          "city": "Willow Run, IL",
          "title": "Physical Therapy Assistant"
        },
        {          
          "first_name": "Benjamin",
          "last_name": "Cooper",
          "email": "bcooper4@biglobe.ne.jp",
          "gender": "Male",
          "company": "Youtags",
          "city": "Conyersville, AZ",
          "title": "Account Coordinator"
        },
        {          
          "first_name": "Terry",
          "last_name": "Ruiz",
          "email": "truiz5@unc.edu",
          "gender": "Male",
          "company": "Nlounge",
          "city": "Mount Baker, NY",
          "title": ""
        },
        {          
          "first_name": "Julia",
          "last_name": "Kennedy",
          "email": "jkennedy6@behance.net",
          "gender": "Female",
          "company": "Divanoodle",
          "city": "Farmington Lake, OK",
          "title": "VP Product Management"
        },
        {          
          "first_name": "Jesse",
          "last_name": "Mcdonald",
          "email": "jmcdonald7@etsy.com",
          "gender": "Male",
          "company": "Realblab",
          "city": "Martins Corner, TX",
          "title": "Structural Engineer"
        },
        {          
          "first_name": "Harry",
          "last_name": "Edwards",
          "email": "hedwards8@mapquest.com",
          "gender": "Male",
          "company": "Jabberstorm",
          "city": "Pickerel Narrows, MT",
          "title": "Marketing Manager"
        },
        {
          "first_name": "Peter",
          "last_name": "Ellis",
          "email": "pellis9@wordpress.com",
          "gender": "Male",
          "company": "Photolist",
          "city": "Willaha, OH",
          "title": "Research Associate"
        },
        {
          "first_name": "Betty",
          "last_name": "Wright",
          "email": "bwrighta@xrea.com",
          "gender": "Female",
          "company": "Blogpad",
          "city": "Center, MA",
          "title": "Paralegal"
        },
        {
          "first_name": "Maria",
          "last_name": "Armstrong",
          "email": "marmstrongb@last.fm",
          "gender": "Female",
          "company": "Zooxo",
          "city": "Spring City, MS",
          "title": "Health Coach IV"
        },
        {
          "first_name": "Lawrence",
          "last_name": "West",
          "email": "lwestc@1688.com",
          "gender": "Male",
          "company": "Gabcube",
          "city": "Mittenlane, TX",
          "title": "Electrical Engineer"
        },
        {
          "first_name": "Katherine",
          "last_name": "Porter",
          "email": "kporterd@washingtonpost.com",
          "gender": "Female",
          "company": "Twiyo",
          "city": "East Waterford, ME",
          "title": "Staff Scientist"
        },
        {
          "first_name": "Philip",
          "last_name": "Stewart",
          "email": "pstewarte@intel.com",
          "gender": "Male",
          "company": "Jaxbean",
          "city": "Coltman, WV",
          "title": ""
        },
        {
          "first_name": "Ralph",
          "last_name": "Carpenter",
          "email": "rcarpenterf@dot.gov",
          "gender": "Male",
          "company": "Topicblab",
          "city": "Scottsville, KS",
          "title": "Environmental Tech"
        },
        {
          "first_name": "Teresa",
          "last_name": "Carter",
          "email": "tcarterg@cocolog-nifty.com",
          "gender": "Female",
          "company": "Voonte",
          "city": "Hebron, AZ",
          "title": "Internal Auditor"
        },
        {
          "first_name": "Jane",
          "last_name": "Thompson",
          "email": "jthompsonh@last.fm",
          "gender": "Female",
          "company": "Kanoodle",
          "city": "Longview, MA",
          "title": "Software Consultant"
        },
        {
          "first_name": "Nicholas",
          "last_name": "Hart",
          "email": "nharti@oakley.com",
          "gender": "Male",
          "company": "Riffpath",
          "city": "Emerson, MT",
          "title": "Recruiting Manager"
        },
        {
          "first_name": "Billy",
          "last_name": "Rogers",
          "email": "brogersj@reference.com",
          "gender": "Male",
          "company": "Eadel",
          "city": "North Knoxville, AL",
          "title": "Clinical Specialist"
        },
        {
          "first_name": "Alan",
          "last_name": "Barnes",
          "email": "abarnesk@geocities.jp",
          "gender": "Male",
          "company": "Plambee",
          "city": "Momford Landing, IN",
          "title": "Recruiter"
        },
        {
          "first_name": "Andrew",
          "last_name": "Wallace",
          "email": "awallacel@xrea.com",
          "gender": "Male",
          "company": "LiveZ",
          "city": "Ipswich, IA",
          "title": "Structural Engineer"
        },
        {
          "first_name": "Donald",
          "last_name": "Williams",
          "email": "dwilliamsm@tuttocitta.it",
          "gender": "Male",
          "company": "Rhybox",
          "city": "Storms, TX",
          "title": "Sales Representative"
        },
        {
          "first_name": "Kathleen",
          "last_name": "Hanson",
          "email": "khansonn@ezinearticles.com",
          "gender": "Female",
          "company": "Linklinks",
          "city": "Kalauao, SD",
          "title": "Pharmacist"
        },
        {
          "first_name": "Wayne",
          "last_name": "Wilson",
          "email": "wwilsono@dot.gov",
          "gender": "Male",
          "company": "Edgewire",
          "city": "Farwell, FL",
          "title": "Staff Accountant IV"
        },
        {
          "first_name": "Alan",
          "last_name": "Martinez",
          "email": "amartinezp@friendfeed.com",
          "gender": "Male",
          "company": "Dynabox",
          "city": "Brentwood Village, MT",
          "title": "Engineer II"
        },
        {
          "first_name": "George",
          "last_name": "Watkins",
          "email": "gwatkinsq@altervista.org",
          "gender": "Male",
          "company": "LiveZ",
          "city": "Wilhelm Park, MT",
          "title": "Librarian"
        },
        {
          "first_name": "Maria",
          "last_name": "Alexander",
          "email": "malexanderr@google.com",
          "gender": "Female",
          "company": "Trupe",
          "city": "Bannister Acres, NC",
          "title": "Sales Associate"
        },
        {
          "first_name": "Alice",
          "last_name": "Carter",
          "email": "acarters@woothemes.com",
          "gender": "Female",
          "company": "Mudo",
          "city": "Bent Pine, VA",
          "title": "Payment Adjustment Coordinator"
        },
        {
          "first_name": "Steven",
          "last_name": "Gibson",
          "email": "sgibsont@clickbank.net",
          "gender": "Male",
          "company": "Kamba",
          "city": "Mitchell, AZ",
          "title": "Structural Engineer"
        },
        {
          "first_name": "Ann",
          "last_name": "Ryan",
          "email": "aryanu@cafepress.com",
          "gender": "Female",
          "company": "Centidel",
          "city": "Social Circle, MO",
          "title": "Database Administrator II"
        },
        {
          "first_name": "Christine",
          "last_name": "Griffin",
          "email": "cgriffinv@globo.com",
          "gender": "Female",
          "company": "Leexo",
          "city": "Kreutzberg, NY",
          "title": "Software Test Engineer III"
        },
        {
          "first_name": "George",
          "last_name": "Garcia",
          "email": "ggarciaw@canalblog.com",
          "gender": "Male",
          "company": "Viva",
          "city": "Cimarron, WA",
          "title": "Project Manager"
        },
        {
          "first_name": "Ruby",
          "last_name": "Carroll",
          "email": "rcarrollx@dailymail.co.uk",
          "gender": "Female",
          "company": "Zooxo",
          "city": "Brookhaven, DC",
          "title": "Biostatistician II"
        },
        {
          "first_name": "Harry",
          "last_name": "Hart",
          "email": "hharty@com.com",
          "gender": "Male",
          "company": "Minyx",
          "city": "Montverde Junction, NJ",
          "title": "Compensation Analyst"
        },
        {
          "first_name": "Heather",
          "last_name": "Mccoy",
          "email": "hmccoyz@goodreads.com",
          "gender": "Female",
          "company": "Agimba",
          "city": "Midland City, AK",
          "title": "Operator"
        },
        {
          "first_name": "Judy",
          "last_name": "Nichols",
          "email": "jnichols10@upenn.edu",
          "gender": "Female",
          "company": "Mudo",
          "city": "Sacramento, ME",
          "title": "Social Worker"
        },
        {
          "first_name": "Judy",
          "last_name": "",
          "email": "jstephens11@bravesites.com",
          "gender": "Female",
          "company": "Twinte",
          "city": "Del Rey Oaks, RI",
          "title": "Data Coordiator"
        },
        {
          "first_name": "Timothy",
          "last_name": "Elliott",
          "email": "telliott12@blogspot.com",
          "gender": "Male",
          "company": "Leenti",
          "city": "Coal Creek, OK",
          "title": "Nurse"
        },
        {
          "first_name": "Emily",
          "last_name": "Harrison",
          "email": "eharrison13@house.gov",
          "gender": "Female",
          "company": "Podcat",
          "city": "Rabbitown, TN",
          "title": "Graphic Designer"
        },
        {
          "first_name": "Jacqueline",
          "last_name": "Fernandez",
          "email": "jfernandez14@yellowpages.com",
          "gender": "Female",
          "company": "Youspan",
          "city": "Fairland, GA",
          "title": "Analyst Programmer"
        },
        {
          "first_name": "Jesse",
          "last_name": "Hunter",
          "email": "jhunter15@newyorker.com",
          "gender": "Male",
          "company": "Npath",
          "city": "Gaskil, DE",
          "title": "Web Developer III"
        },
        {
          "first_name": "Bobby",
          "last_name": "Duncan",
          "email": "bduncan16@last.fm",
          "gender": "Male",
          "company": "Lajo",
          "city": "Morgan Mill, OK",
          "title": "Design Engineer"
        },
        {
          "first_name": "Anne",
          "last_name": "",
          "email": "acarter17@latimes.com",
          "gender": "Female",
          "company": "Dabjam",
          "city": "Merrimac South, AL",
          "title": "Senior Developer"
        },
        {
          "first_name": "Pamela",
          "last_name": "Cook",
          "email": "pcook18@opensource.org",
          "gender": "Female",
          "company": "Janyx",
          "city": "Stanardsville, NH",
          "title": "Software Engineer II"
        },
        {
          "first_name": "Jane",
          "last_name": "Boyd",
          "email": "jboyd19@wisc.edu",
          "gender": "Female",
          "company": "Gabcube",
          "city": "Two Brooks, WI",
          "title": "Information Systems Manager"
        },
        {
          "first_name": "Dennis",
          "last_name": "Anderson",
          "email": "danderson1a@yelp.com",
          "gender": "Male",
          "company": "Topiclounge",
          "city": "Curriers, NM",
          "title": "Human Resources Manager"
        },
        {
          "first_name": "Tina",
          "last_name": "Turner",
          "email": "tturner1b@csmonitor.com",
          "gender": "Female",
          "company": "Livepath",
          "city": "Skookumchuck, VA",
          "title": "Food Chemist"
        },
        {
          "first_name": "Kathleen",
          "last_name": "Wagner",
          "email": "kwagner1c@google.ca",
          "gender": "Female",
          "company": "Tagpad",
          "city": "Edgerton, RI",
          "title": "GIS Technical Architect"
        },
        {
          "first_name": "Randy",
          "last_name": "Richards",
          "email": "rrichards1d@psu.edu",
          "gender": "Male",
          "company": "Skimia",
          "city": "Slater, MO",
          "title": "Legal Assistant"
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};