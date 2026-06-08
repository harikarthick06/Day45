// UC 6: Display Employee Details from Local Storage

let empPayrollList = [];

window.addEventListener("DOMContentLoaded", () => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    createInnerHtml();
});

const getEmployeePayrollDataFromStorage = () => {
    let empPayrollListLocal = localStorage.getItem("EmployeePayrollList");

    if (empPayrollListLocal) {
        return JSON.parse(empPayrollListLocal);
    }

    let defaultList = [
        {
            _id: 1,
            _name: "Narayan Mahadevan",
            _gender: "Male",
            _department: ["HR", "Finance"],
            _salary: "300000",
            _startDate: "1 Nov 2020",
            _profilePic: "👨"
        },
        {
            _id: 2,
            _name: "Amarpa Shashanka Keerthi Kumar",
            _gender: "Female",
            _department: ["Sales", "HR"],
            _salary: "400000",
            _startDate: "29 Oct 2019",
            _profilePic: "👩"
        },
        {
            _id: 3,
            _name: "Mohammad Salman Iqbal Shaikh",
            _gender: "Male",
            _department: ["Engineering", "Finance"],
            _salary: "500000",
            _startDate: "15 Aug 2021",
            _profilePic: "👨"
        }
    ];

    localStorage.setItem("EmployeePayrollList", JSON.stringify(defaultList));
    return defaultList;
};

const createInnerHtml = () => {
    const headerHtml = `
        <tr>
            <th></th>
            <th>Name</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Start Date</th>
            <th>Actions</th>
        </tr>
    `;

    let innerHtml = `${headerHtml}`;

    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
            <tr>
                <td>
                    <div class="profile">${empPayrollData._profilePic}</div>
                </td>
                <td>${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <td>${getDeptHtml(empPayrollData._department)}</td>
                <td>₹ ${empPayrollData._salary}</td>
                <td>${empPayrollData._startDate}</td>
                <td>
                    <span class="action-icon" onclick="removeEmployee(${empPayrollData._id})">🗑️</span>
                    <span class="action-icon" onclick="updateEmployee(${empPayrollData._id})">✏️</span>
                </td>
            </tr>
        `;
    }

    document.querySelector("#table-display").innerHTML = innerHtml;
    document.querySelector(".emp-count").textContent = empPayrollList.length;
};

const getDeptHtml = (deptList) => {
    let deptHtml = "";

    for (const dept of deptList) {
        deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`;
    }

    return deptHtml;
};

const removeEmployee = (id) => {
    empPayrollList = empPayrollList.filter(employee => employee._id !== id);
    localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList));
    createInnerHtml();
};

const updateEmployee = (id) => {
    alert("Edit employee id: " + id);
};
