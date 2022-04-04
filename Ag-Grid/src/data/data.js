import faker from 'faker';
export const DATAS = []
for(let i=0;i<100;i++) {
    DATAS[i] = {
        name:  faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        jobTitle: faker.name.jobTitle(),
        company: faker.company.companyName(),
        date:faker.date.past().toLocaleDateString(),
        number :faker.datatype.float(),
        status: "Completed"
    }
}

  

/*


export const DATAS = []
for(let i=0;i<100;i++) {
    DATAS[i] = {
        name:  faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        jobTitle: faker.name.jobTitle(),
        company: faker.company.companyName(),
        date:faker.date.past().toLocaleDateString(),
        number :faker.datatype.float(),
    }
}



export const DATAS =[
   
    {
        name : "Balaji V",
        email : "balajis@gmail.com",
        phone: 4658236265,
        jobTitle : "Pat",
        company:"cts",
        date:"2/13/2021",
        number:25000
    },
    
    {
        name : "Balaji S",
        email : "balajis@gmail.com",
        phone: 4658236265,
        jobTitle : "Pat",
        company:"cts",
        date:"2/13/2021",
        number:25000
    }
]
  
*/