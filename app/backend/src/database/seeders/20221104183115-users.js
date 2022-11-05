module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('users',
      [
        {          
          "first_name": "Laura",
          "last_name": "Richards",
          "email": "lrichards0@reverbnation.com",
          "gender": "Female",
          "company_id": 1,
          "city_id": 1,
          "title_id": 1
        },
        {          
          "first_name": "Margaret",
          "last_name": "Mendoza",
          "email": "mmendoza1@sina.com.cn",
          "gender": "Female",
          "company_id": 2,
          "city_id": 2,
          "title_id": 2
        },
        {          
          "first_name": "Craig",
          "last_name": "Mccoy",
          "email": "cmccoy2@bluehost.com",
          "gender": "Male",
          "company_id": 3,
          "city_id": 3,
          "title_id":3
        },
        {          
          "first_name": "James",
          "last_name": "Moore",
          "email": "jmoore3@apache.org",
          "gender": "Male",
          "company_id": 4,
          "city_id": 4,
          "title_id": 4
        },
        {          
          "first_name": "Benjamin",
          "last_name": "Cooper",
          "email": "bcooper4@biglobe.ne.jp",
          "gender": "Male",
          "company_id": 5,
          "city_id": 5,
          "title_id": 5
        },
        {          
          "first_name": "Terry",
          "last_name": "Ruiz",
          "email": "truiz5@unc.edu",
          "gender": "Male",
          "company_id": 6,
          "city_id": 6,
          "title_id": ""
        },
        {          
          "first_name": "Diane",
          "last_name": "Lawrence",
          "email": "dlawrence8c@wordpress.org",
          "gender": "Female",
          "company_id": 7,
          "city_id": 1,
          "title_id": 7
        },
        {          
          "first_name": "Julia",
          "last_name": "Kennedy",
          "email": "jkennedy6@behance.net",
          "gender": "Female",
          "company_id": 8,
          "city_id": 7,
          "title_id": 8
        },
        {          "first_name": "Jesse",
          "last_name": "Mcdonald",
          "email": "jmcdonald7@etsy.com",
          "gender": "Male",
          "company_id": 9,
          "city_id": 8,
          "title_id": 9
        },
        {          
          "first_name": "Harry",
          "last_name": "Edwards",
          "email": "hedwards8@mapquest.com",
          "gender": "Male",
          "company_id": 10,
          "city_id": 9,
          "title_id": 10
        },
        {
          "first_name": "Joe",
          "last_name": "Franklin",
          "email": "jfranklin4d@ted.com",
          "gender": "Male",
          "company_id": "11",
          "city_id": 8,
          "title_id": 11
        },
        {
          "first_name": "Peter",
          "last_name": "Ellis",
          "email": "pellis9@wordpress.com",
          "gender": "Male",
          "company_id": 12,
          "city_id": 10,
          "title_id": 12
        },
        {
          "first_name": "Betty",
          "last_name": "Wright",
          "email": "bwrighta@xrea.com",
          "gender": "Female",
          "company_id": 13,
          "city_id": 11,
          "title_id": 13
        },
        {
          "first_name": "Maria",
          "last_name": "Armstrong",
          "email": "marmstrongb@last.fm",
          "gender": "Female",
          "company_id": "14",
          "city_id": 12,
          "title_id": 14
        },
        {
          "first_name": "Jean",
          "last_name": "Kim",
          "email": "jkim2s@163.com",
          "gender": "Female",
          "company": "15",
          "city_id": 1,
          "title_id": 14
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};