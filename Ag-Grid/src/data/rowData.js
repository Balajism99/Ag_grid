import faker from 'faker';
import { nanoid } from "nanoid";
export const rowData = []
for(let i=0;i<100;i++) {
    rowData[i] = {
        id: nanoid(),
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
