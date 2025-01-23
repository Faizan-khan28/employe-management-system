const employeesData = [
  {
    id: 1,
    firstName: "Harsh",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Prepare report",
        taskDescription: "Prepare the monthly performance report.",
        taskDate: "2025-01-15",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team meeting",
        taskDescription: "Attend the team meeting at 10 AM.",
        taskDate: "2025-01-10",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Fix bug",
        taskDescription: "Resolve the login page issue.",
        taskDate: "2025-01-11",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Faizan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Update website",
        taskDescription: "Deploy updates to the homepage.",
        taskDate: "2025-01-12",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Client follow-up",
        taskDescription: "Send follow-up emails to clients.",
        taskDate: "2025-01-13",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Database cleanup",
        taskDescription: "Remove unused data entries.",
        taskDate: "2025-01-14",
        category: "Maintenance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstName: "Alfaiz",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Draft newsletter",
        taskDescription: "Write content for the January newsletter.",
        taskDate: "2025-01-10",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Attend webinar",
        taskDescription: "Participate in the cybersecurity webinar.",
        taskDate: "2025-01-15",
        category: "Training",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Code review",
        taskDescription: "Review the new codebase from the development team.",
        taskDate: "2025-01-11",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    firstName: "Ishaan",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Server maintenance",
        taskDescription: "Perform routine checks on the server.",
        taskDate: "2025-01-12",
        category: "Maintenance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "HR meeting",
        taskDescription: "Discuss hiring requirements for Q1.",
        taskDate: "2025-01-14",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Product testing",
        taskDescription: "Test the latest version of the mobile app.",
        taskDate: "2025-01-13",
        category: "Quality Assurance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    firstName: "Mira",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Social media campaign",
        taskDescription: "Plan content for the upcoming campaign.",
        taskDate: "2025-01-15",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "System upgrade",
        taskDescription: "Upgrade the inventory management system.",
        taskDate: "2025-01-10",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Presentation",
        taskDescription: "Prepare a presentation for the quarterly meeting.",
        taskDate: "2025-01-16",
        category: "Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
];

let adminData = [
  {
    id: 1,
    firstName: "Kiran",
    email: "admin@example.com",
    password: "123",
  },
];


export let setLocalStorage = () => {
  localStorage.setItem("employee", JSON.stringify(employeesData));
  localStorage.setItem("admin", JSON.stringify(adminData));
}


export let getLocalStoage = () => {
  let Employees = JSON.parse(localStorage.getItem("employee"));
  let Admin = JSON.parse(localStorage.getItem("admin"));
  return {Employees,Admin}
}