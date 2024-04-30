import { employeesData } from "../data";

const employeesDataStore = [
    {
      id: 1,
      firstName: 'Susan',
      lastName: 'Jordon',
      email: 'susan@example.com',
      salary: '95000',
      date: '2019-04-11'
    },
    {
      id: 2,
      firstName: 'Adrienne',
      lastName: 'Doak',
      email: 'adrienne@example.com',
      salary: '80000',
      date: '2019-04-17'
    },
    {
      id: 3,
      firstName: 'Rolf',
      lastName: 'Hegdal',
      email: 'rolf@example.com',
      salary: '79000',
      date: '2019-05-01'
    },
    {
      id: 4,
      firstName: 'Kent',
      lastName: 'Rosner',
      email: 'kent@example.com',
      salary: '56000',
      date: '2019-05-03'
    },
    {
      id: 5,
      firstName: 'Arsenio',
      lastName: 'Grant',
      email: 'arsenio@example.com',
      salary: '65000',
      date: '2019-06-13'
    },
    {
      id: 6,
      firstName: 'Laurena',
      lastName: 'Lurie',
      email: 'laurena@example.com',
      salary: '120000',
      date: '2019-07-30'
    },
    {
      id: 7,
      firstName: 'George',
      lastName: 'Tallman',
      email: 'george@example.com',
      salary: '90000',
      date: '2019-08-15'
    },
    {
      id: 8,
      firstName: 'Jesica',
      lastName: 'Watlington',
      email: 'jesica@example.com',
      salary: '60000',
      date: '2019-10-10'
    },
    {
      id: 9,
      firstName: 'Matthew',
      lastName: 'Warren',
      email: 'matthew@example.com',
      salary: '71000',
      date: '2019-10-15'
    },
    {
      id: 10,
      firstName: 'Lyndsey',
      lastName: 'Follette',
      email: 'lyndsey@example.com',
      salary: '110000',
      date: '2020-01-15'
    }
  ];


class EmployeeService
{
    
    getAll(){
      
           var employeesData = localStorage.getItem('ls_emps');
           
           if(employeesData==null){
            employeesData = employeesDataStore;
            localStorage.setItem('ls_emps', JSON.stringify(employeesData));
           }
           else {
            employeesData = JSON.parse(localStorage.getItem('ls_emps'));
           }
  
           return employeesData;
    }

    get(index) {
        var employeesData = JSON.parse(localStorage.getItem('ls_emps'));
        return employeesData[index];
    }

    create(employee) {
        var employeesData = JSON.parse(localStorage.getItem('ls_emps'));
        employeesData.push(employee);
        localStorage.setItem('ls_emps', JSON.stringify(employeesData));
    }

    update(employee, id) {

        var employees = JSON.parse(localStorage.getItem('ls_emps'));

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        employeesData.push(employee);
        localStorage.setItem('ls_emps', JSON.stringify(employeesData));
    }

    delete(id){
        var employees = JSON.parse(localStorage.getItem('ls_emps'));
        var employeesAfterDelete = employees.filter(employee => employee.id === id);

        localStorage.setItem('ls_emps', JSON.stringify(employeesAfterDelete));
    }
}

export default new EmployeeService();