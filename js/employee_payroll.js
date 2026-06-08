// UC 4: Display Employee Details using Template Literals

window.addEventListener("DOMContentLoaded", () => {
    createInnerHtml();
});

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

    const innerHtml = `
        ${headerHtml}
        <tr>
            <td><div class="profile">👨</div></td>
            <td>Narayan Mahadevan</td>
            <td>Male</td>
            <td>
                <div class="dept-label">HR</div>
                <div class="dept-label">Finance</div>
            </td>
            <td>₹ 300000</td>
            <td>1 Nov 2020</td>
            <td>
                <span class="action-icon" onclick="removeEmployee(this)">🗑️</span>
                <span class="action-icon" onclick="updateEmployee(this)">✏️</span>
            </td>
        </tr>
    `;

    document.querySelector("#table-display").innerHTML = innerHtml;
};

const removeEmployee = (element) => {
    alert("Delete button clicked");
};

const updateEmployee = (element) => {
    alert("Edit button clicked");
};
